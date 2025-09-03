-- Update applications table to ensure all required fields
ALTER TABLE public.applications 
ADD COLUMN IF NOT EXISTS phone_number text;

-- Ensure educational_qualifications is properly set up
ALTER TABLE public.applications 
ALTER COLUMN educational_qualifications DROP DEFAULT,
ALTER COLUMN educational_qualifications SET DEFAULT '[]'::jsonb;

-- Update positions table to ensure it has all needed fields
ALTER TABLE public.positions 
ADD COLUMN IF NOT EXISTS requirements text,
ADD COLUMN IF NOT EXISTS location text;

-- Create email notification tracking if it doesn't exist
CREATE TABLE IF NOT EXISTS public.email_notifications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  application_id uuid NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  email_type text NOT NULL DEFAULT 'confirmation',
  sent_at timestamp with time zone NOT NULL DEFAULT now(),
  delivery_status text DEFAULT 'pending',
  error_message text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on email_notifications if not already enabled
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c 
    JOIN pg_namespace n ON n.oid = c.relnamespace 
    WHERE c.relname = 'email_notifications' 
    AND n.nspname = 'public' 
    AND c.relrowsecurity = true
  ) THEN
    ALTER TABLE public.email_notifications ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;