import { useState, useEffect } from "react";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, MapPin, Calendar, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface Position {
  id: string;
  title: string;
  description: string;
  location: string;
  requirements: string;
  created_at: string;
}

const Jobs = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const { data, error } = await supabase
        .from("positions")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPositions(data || []);
    } catch (error) {
      console.error("Error fetching positions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyClick = (positionId: string) => {
    setSelectedPosition(positionId);
  };

  if (selectedPosition) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedPosition(null)}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Job Openings</span>
              </Button>
              <div className="flex items-center space-x-4">
                <Button asChild variant="outline" size="sm">
                  <a href="/">Home</a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Application Form Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Application</h3>
              <p className="text-gray-600">
                Complete the form below to apply for the selected position. All fields marked with * are required.
              </p>
            </div>
            
            <ApplicationForm defaultPositionId={selectedPosition} />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Job Openings</h1>
                <p className="text-sm text-muted-foreground">Federal College of Agricultural Technology</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="sm">
                <a href="/">Home</a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="/admin">Admin Portal</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore exciting career opportunities at FCAT. Click "Apply Now" on any position to submit your application.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Loading available positions...</p>
            </div>
          ) : positions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No positions are currently available. Please check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {positions.map((position) => (
                <Card key={position.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{position.title}</CardTitle>
                      <Badge variant="secondary">Open</Badge>
                    </div>
                    {position.location && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-3">
                      {position.description}
                    </CardDescription>
                    
                    {position.requirements && (
                      <div>
                        <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {position.requirements}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        Posted {new Date(position.created_at).toLocaleDateString()}
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => handleApplyClick(position.id)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Jobs;