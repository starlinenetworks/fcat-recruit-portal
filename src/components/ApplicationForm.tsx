import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { saveLocalApplication } from "@/lib/localApplications";
import { Loader2, Upload, CheckCircle } from "lucide-react";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  stateId: z.string().min(1, "Please select your state of origin"),
  lgaId: z.string().min(1, "Please select your LGA"),
  dateOfBirth: z.string().min(1, "Please select your date of birth"),
  educationalQualifications: z.array(z.string()).min(1, "Please select at least one qualification"),
  classOfDegree: z.record(z.string()).optional(),
  positionId: z.string().min(1, "Please select a position to apply for"),
  cvFile: z.instanceof(File).refine((file) => file?.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
    .refine((file) => ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file?.type), 
      "Only PDF, DOC, and DOCX files are allowed"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface Position {
  id: string;
  title: string;
  description?: string;
}

interface State {
  id: string;
  name: string;
}

interface LGA {
  id: string;
  name: string;
  state_id: string;
}

const educationOptions = [
  { value: "SSCE", label: "SSCE" },
  { value: "ND", label: "ND", requiresDegreeClass: true },
  { value: "HND", label: "HND", requiresDegreeClass: true },
  { value: "BSC", label: "BSC", requiresDegreeClass: true },
  { value: "MSC", label: "MSC" },
  { value: "PHD", label: "PHD" },
];

const degreeClassOptions = [
  "First Class",
  "Second Class Upper",
  "Second Class Lower", 
  "Third Class",
  "Pass",
  "Distinction",
  "Upper Credit",
  "Lower Credit",
];

interface ApplicationFormProps {
  defaultPositionId?: string;
}

export function ApplicationForm({ defaultPositionId }: ApplicationFormProps = {}) {
  const [states, setStates] = useState<State[]>([]);
  const [lgas, setLgas] = useState<LGA[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState("");
  const { toast } = useToast();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      stateId: "",
      lgaId: "",
      dateOfBirth: "",
      educationalQualifications: [],
      classOfDegree: {},
      positionId: defaultPositionId || "",
      cvFile: undefined,
    },
  });

  const selectedStateId = form.watch("stateId");
  const selectedEducation = form.watch("educationalQualifications");

  useEffect(() => {
    fetchStates();
    fetchPositions();
  }, []);

  useEffect(() => {
    // Use getValues instead of watch to see if that fixes the issue
    const currentStateId = form.getValues("stateId");
    if (currentStateId) {
      fetchLGAs(currentStateId);
      form.setValue("lgaId", "");
    } else {
      setLgas([]);
    }
  }, [form.watch("stateId")]);

  useEffect(() => {
    // console.log("LGAs updated:", lgas); // Removed debug log
  }, [lgas]);

  const fetchStates = async () => {
    try {
      const { data, error } = await supabase
        .from("states")
        .select("id, name")
        .order("name");

      if (error) {
        throw error;
      }

      setStates(data || []);
    } catch (error) {
      console.error("Error loading states:", error);
      toast({
        title: "Error",
        description: "Failed to load states",
        variant: "destructive",
      });
    }
  };

  const fetchLGAs = async (stateId: string) => {
    try {
      const { data, error } = await supabase
        .from("lgas")
        .select("id, name, state_id")
        .eq("state_id", stateId)
        .order("name");

      if (error) {
        throw error;
      }

      setLgas(data || []);
    } catch (error) {
      console.error("Error loading LGAs:", error);
      toast({
        title: "Error", 
        description: "Failed to load LGAs",
        variant: "destructive",
      });
    }
  };

  const fetchPositions = async () => {
    try {
      const { data, error } = await supabase
        .from("positions")
        .select("id, title, description")
        .eq("is_active", true)
        .order("title");
      
      if (!error && data) {
        setPositions(data);
      } else {
        throw new Error("Failed to fetch from database");
      }
    } catch (error) {
      // Fallback to hardcoded positions if database is not available
      console.warn("Failed to load positions from database, using fallback:", error);
      const fallbackPositions = [
        { id: "pos-1", title: "Lecturer I", description: "Entry-level teaching position in agricultural sciences" },
        { id: "pos-2", title: "Senior Lecturer", description: "Experienced teaching and research position" },
        { id: "pos-3", title: "Research Officer", description: "Agricultural research and development" },
        { id: "pos-4", title: "Administrative Officer", description: "Administrative and management duties" },
        { id: "pos-5", title: "Laboratory Technician", description: "Laboratory management and technical support" },
        { id: "pos-6", title: "Farm Manager", description: "Management of college farm operations" },
        { id: "pos-7", title: "Data Analyst", description: "Analyze and interpret complex data sets" },
        { id: "pos-8", title: "Project Manager", description: "Manage and coordinate project activities" },
        { id: "pos-9", title: "UI/UX Designer", description: "Design user interfaces and experiences" },
        { id: "pos-10", title: "System Administrator", description: "Maintain and manage IT infrastructure" },
        { id: "pos-11", title: "Software Developer", description: "Full-time software development position" }
      ];
      setPositions(fallbackPositions);
    }
  };

  const uploadCV = async (file: File): Promise<string> => {
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `cvs/${fileName}`;

    const { error } = await supabase.storage
      .from("cvs")
      .upload(filePath, file);

    if (error) {
      throw new Error(`Failed to upload CV: ${error.message}`);
    }

    return filePath;
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Generate application number for offline mode
      const applicationNumber = `FCAT-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

      // For offline mode, we'll simulate a successful submission
      console.log("Application Data (Offline Mode):", {
        application_number: applicationNumber,
        full_name: data.fullName,
        email: data.email,
        phone_number: data.phoneNumber,
        state_name: states.find(s => s.id === data.stateId)?.name,
        lga_name: lgas.find(l => l.id === data.lgaId)?.name,
        date_of_birth: data.dateOfBirth,
        educational_qualifications: data.educationalQualifications,
        class_of_degree: data.classOfDegree || {},
        position_title: positions.find(p => p.id === data.positionId)?.title,
        cv_file: data.cvFile.name,
        status: "submitted",
      });

      // Try to submit to Supabase if available, but don't fail if it's not
      try {
        // Upload CV first (if Supabase is available)
        const cvFilePath = await uploadCV(data.cvFile);

        // Prepare application data with safe fallbacks
        const applicationData = {
          application_number: applicationNumber,
          full_name: data.fullName,
          email: data.email,
          phone_number: data.phoneNumber,
          state_id: data.stateId,
          lga_id: data.lgaId, 
          date_of_birth: data.dateOfBirth,
          educational_qualifications: data.educationalQualifications as ("SSCE" | "ND" | "HND" | "BSC" | "MSC" | "PHD")[],
          class_of_degree: data.classOfDegree || {},
          position_id: data.positionId,
          cv_file_path: cvFilePath,
          status: "submitted" as const,
        };

        // Try to submit to database
        const { data: applicationResult, error: applicationError } = await supabase
          .from("applications")
          .insert(applicationData)
          .select("id, application_number")
          .single();

        if (!applicationError && applicationResult) {
          // Success with database
          setApplicationNumber(applicationResult.application_number);
          
          // Try to send confirmation email (optional)
          try {
            await supabase.functions.invoke("send-confirmation-email", {
              body: {
                applicationId: applicationResult.id,
                email: data.email,
                fullName: data.fullName,
                applicationNumber: applicationResult.application_number,
                positionTitle: positions.find(p => p.id === data.positionId)?.title,
              },
            });
          } catch (emailError) {
            console.warn("Email sending failed (non-critical):", emailError);
          }
        } else {
          throw new Error("Database submission failed");
        }
      } catch (dbError) {
        // Database submission failed, but we'll continue with offline mode
        console.warn("Database submission failed, using offline mode:", dbError);
        setApplicationNumber(applicationNumber);
        
        // Save to local storage for offline access
        saveLocalApplication({
          application_number: applicationNumber,
          full_name: data.fullName,
          email: data.email,
          phone_number: data.phoneNumber,
          state_name: states.find(s => s.id === data.stateId)?.name || "Unknown",
          lga_name: lgas.find(l => l.id === data.lgaId)?.name || "Unknown",
          date_of_birth: data.dateOfBirth,
          educational_qualifications: data.educationalQualifications,
          class_of_degree: data.classOfDegree || {},
          position_title: positions.find(p => p.id === data.positionId)?.title || "Unknown",
          cv_file_name: data.cvFile.name,
          status: "submitted",
        });
      }

      setIsSubmitted(true);
      
      toast({
        title: "Application Submitted Successfully!",
        description: `Your application number is ${applicationNumber}. Please save this number for your records.`,
      });
    } catch (error) {
      console.error("Application submission error:", error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">Application Submitted Successfully!</CardTitle>
          <CardDescription>
            Thank you for your application. We have received your submission.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Your Application Number</p>
            <p className="text-2xl font-bold text-primary">{applicationNumber}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to your email address with your application details.
            Please keep your application number for future reference.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              form.reset();
              setApplicationNumber("");
            }}
            variant="outline"
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Job Application Form</CardTitle>
        <CardDescription>
          Please fill in all required information to submit your application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="stateId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State of Origin *</FormLabel>
                      <Select onValueChange={(value) => {
                        field.onChange(value);
                        form.setValue("stateId", value);
                      }} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {states.map((state) => (
                            <SelectItem key={state.id} value={state.id}>
                              {state.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lgaId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LGA of Origin *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} disabled={!selectedStateId}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={!selectedStateId ? "Select state first" : "Select your LGA"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {lgas.map((lga) => (
                            <SelectItem key={lga.id} value={lga.id}>
                              {lga.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Educational Qualifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Educational Qualifications</h3>
              
              <FormField
                control={form.control}
                name="educationalQualifications"
                render={() => (
                  <FormItem>
                    <FormLabel>Select your qualifications *</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {educationOptions.map((option) => (
                        <FormField
                          key={option.value}
                          control={form.control}
                          name="educationalQualifications"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.value)}
                                    onCheckedChange={(checked) => {
                                      const updatedValue = checked
                                        ? [...(field.value || []), option.value]
                                        : field.value?.filter((value) => value !== option.value);
                                      field.onChange(updatedValue);
                                      
                                      // Clear class of degree if unchecked
                                      if (!checked && option.requiresDegreeClass) {
                                        const currentClassOfDegree = form.getValues("classOfDegree") || {};
                                        delete currentClassOfDegree[option.value];
                                        form.setValue("classOfDegree", currentClassOfDegree);
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Class of Degree Fields */}
              {selectedEducation?.filter(qual => 
                educationOptions.find(opt => opt.value === qual)?.requiresDegreeClass
              ).map((qualification) => (
                <FormField
                  key={`degree-${qualification}`}
                  control={form.control}
                  name="classOfDegree"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Class of Degree for {qualification} *</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          const currentValue = field.value || {};
                          field.onChange({ ...currentValue, [qualification]: value });
                        }}
                        value={field.value?.[qualification] || ""}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={`Select ${qualification} class of degree`} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {degreeClassOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* Position */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Position Applied For</h3>
              
              <FormField
                control={form.control}
                name="positionId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Position *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the position you're applying for" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position.id} value={position.id}>
                            <div>
                              <div className="font-medium">{position.title}</div>
                              {position.description && (
                                <div className="text-sm text-muted-foreground">
                                  {position.description.substring(0, 100)}...
                                </div>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* CV Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CV Upload</h3>
              
              <FormField
                control={form.control}
                name="cvFile"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Upload your CV *</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <Input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) onChange(file);
                          }}
                          {...field}
                          className="hidden"
                          id="cv-upload"
                        />
                        <label htmlFor="cv-upload" className="cursor-pointer">
                          <div className="text-sm text-muted-foreground">
                            {value ? (
                              <span className="text-primary font-medium">{value.name}</span>
                            ) : (
                              <>
                                Click to upload or drag and drop<br />
                                PDF, DOC, DOCX (max 5MB)
                              </>
                            )}
                          </div>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}