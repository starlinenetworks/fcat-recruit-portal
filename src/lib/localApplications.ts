// Local application storage for offline submissions

export interface LocalApplication {
  id: string;
  application_number: string;
  full_name: string;
  email: string;
  phone_number: string;
  state_name: string;
  lga_name: string;
  date_of_birth: string;
  educational_qualifications: string[];
  class_of_degree: Record<string, string>;
  position_title: string;
  cv_file_name: string;
  status: "submitted" | "under_review" | "shortlisted" | "rejected" | "hired";
  created_at: string;
  source: "local" | "supabase";
}

const LOCAL_STORAGE_KEY = "fcat_local_applications";

export const saveLocalApplication = (application: Omit<LocalApplication, "id" | "created_at" | "source">) => {
  try {
    const existingApplications = getLocalApplications();
    const newApplication: LocalApplication = {
      ...application,
      id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      created_at: new Date().toISOString(),
      source: "local",
    };
    
    const updatedApplications = [newApplication, ...existingApplications];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedApplications));
    
    console.log("Local application saved:", newApplication);
    return newApplication;
  } catch (error) {
    console.error("Failed to save local application:", error);
    return null;
  }
};

export const getLocalApplications = (): LocalApplication[] => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load local applications:", error);
    return [];
  }
};

export const updateLocalApplicationStatus = (applicationId: string, status: LocalApplication["status"]) => {
  try {
    const applications = getLocalApplications();
    const updatedApplications = applications.map(app => 
      app.id === applicationId ? { ...app, status } : app
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedApplications));
    return true;
  } catch (error) {
    console.error("Failed to update local application status:", error);
    return false;
  }
};

export const clearLocalApplications = () => {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error("Failed to clear local applications:", error);
    return false;
  }
};

// Convert Supabase application to unified format
export const normalizeSupabaseApplication = (app: any): LocalApplication => {
  return {
    id: app.id,
    application_number: app.application_number,
    full_name: app.full_name,
    email: app.email,
    phone_number: app.phone_number || "",
    state_name: app.state?.name || "Unknown",
    lga_name: app.lga?.name || "Unknown",
    date_of_birth: app.date_of_birth,
    educational_qualifications: app.educational_qualifications || [],
    class_of_degree: app.class_of_degree || {},
    position_title: app.position?.title || "Unknown",
    cv_file_name: app.cv_file_path ? app.cv_file_path.split('/').pop() || "CV" : "No CV",
    status: app.status || "submitted",
    created_at: app.created_at,
    source: "supabase",
  };
};
