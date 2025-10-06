/*
  # Create early access signups table

  1. New Tables
    - `early_access_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, not null) - Email address of the user requesting early access
      - `created_at` (timestamptz) - Timestamp when the signup was created
      - `metadata` (jsonb) - Optional metadata for tracking additional information (user agent, referrer, etc.)
  
  2. Security
    - Enable RLS on `early_access_signups` table
    - Add policy for public insert access (allows anonymous users to sign up)
    - Add policy for authenticated users to read all signups (for admin access)
  
  3. Indexes
    - Add index on email for fast lookup and duplicate prevention
    - Add index on created_at for sorting and analytics
  
  4. Notes
    - Email validation is enforced at the application level
    - Duplicate emails are prevented by unique constraint
    - Public users can only insert, not read or update
*/

-- Create the early access signups table
CREATE TABLE IF NOT EXISTS early_access_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Enable Row Level Security
ALTER TABLE early_access_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new signups (public access for form submission)
CREATE POLICY "Anyone can sign up for early access"
  ON early_access_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all signups (for admin/dashboard access)
CREATE POLICY "Authenticated users can view all signups"
  ON early_access_signups
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_early_access_signups_email ON early_access_signups(email);
CREATE INDEX IF NOT EXISTS idx_early_access_signups_created_at ON early_access_signups(created_at DESC);