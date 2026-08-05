/*
# Create appointments table for dental clinic booking

1. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `name` (text, patient's full name)
  - `phone` (text, contact number)
  - `email` (text, optional email address)
  - `service` (text, selected dental service)
  - `preferred_date` (date, requested appointment date)
  - `preferred_time` (text, requested time slot)
  - `message` (text, optional notes from patient)
  - `status` (text, default 'pending' — pending/confirmed/cancelled)
  - `created_at` (timestamptz, default now)

2. Security
- Enable RLS on `appointments`.
- Allow anon + authenticated to INSERT (public booking form).
- Allow anon + authenticated to SELECT (so the UI can confirm).
- No UPDATE or DELETE from the public client.

3. Notes
- This is a single-tenant public booking form (no sign-in).
- Anyone visiting the site can submit an appointment request.
- Only INSERT and SELECT are exposed; status changes are managed server-side.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_appointments" ON appointments;
CREATE POLICY "anon_select_appointments" ON appointments FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);
