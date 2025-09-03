-- First, let's create the application_status enum if it doesn't exist
DO $$ BEGIN
    CREATE TYPE application_status AS ENUM ('submitted', 'under_review', 'shortlisted', 'rejected', 'hired');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Update applications table to ensure all required fields
ALTER TABLE public.applications 
ADD COLUMN IF NOT EXISTS phone_number text,
ADD COLUMN IF NOT EXISTS educational_qualifications jsonb NOT NULL DEFAULT '[]'::jsonb;

-- Ensure we have proper constraints and defaults
ALTER TABLE public.applications 
ALTER COLUMN application_number SET DEFAULT NULL;

-- Update positions table to ensure it has all needed fields
ALTER TABLE public.positions 
ADD COLUMN IF NOT EXISTS requirements text,
ADD COLUMN IF NOT EXISTS location text;

-- Create email notification tracking
CREATE TABLE IF NOT EXISTS public.email_notifications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  application_id uuid NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  email_type text NOT NULL DEFAULT 'confirmation',
  sent_at timestamp with time zone NOT NULL DEFAULT now(),
  delivery_status text DEFAULT 'pending',
  error_message text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on email_notifications
ALTER TABLE public.email_notifications ENABLE ROW LEVEL SECURITY;

-- Create policy for email notifications
CREATE POLICY "Authenticated users can manage email notifications" 
ON public.email_notifications 
FOR ALL 
USING (true);

-- Add trigger for applications to auto-generate application number
CREATE TRIGGER set_application_number_trigger
    BEFORE INSERT ON public.applications
    FOR EACH ROW
    EXECUTE FUNCTION public.set_application_number();