/*
  # AI Catalog Schema
  
  1. New Tables
    - `catalog_items`: Stores agents, flows, MCPs, and skills
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `type` (enum: agent, flow, mcp, skill)
      - `description` (text)
      - `author` (text)
      - `visibility` (enum: Private, Group-scoped, Org-wide, Public)
      - `namespaces` (integer)
      - `stars` (integer)
      - `success_rate` (integer, nullable)
      - `tags` (text array)
      - `is_foundational` (boolean)
      - `forked_from` (text, nullable)
      - `updated_at` (timestamp)
      - `created_at` (timestamp)
      
    - `user_catalog_settings`: User-specific catalog preferences
      - `id` (uuid, primary key)
      - `user_id` (uuid)
      - `enabled_items` (uuid array)
      - `current_scope` (text)
      - `current_persona` (text)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on all tables
    - Public read access for Public items
    - Authenticated read for others based on visibility
*/

CREATE TABLE IF NOT EXISTS catalog_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  type text NOT NULL CHECK (type IN ('agent', 'flow', 'mcp', 'skill')),
  description text NOT NULL,
  author text NOT NULL,
  visibility text NOT NULL CHECK (visibility IN ('Private', 'Group-scoped', 'Org-wide', 'Public')) DEFAULT 'Public',
  namespaces integer DEFAULT 0,
  stars integer DEFAULT 0,
  success_rate integer,
  tags text[] DEFAULT '{}',
  is_foundational boolean DEFAULT false,
  forked_from text,
  updated_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_catalog_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  enabled_items uuid[] DEFAULT '{}',
  current_scope text DEFAULT 'Explore',
  current_persona text DEFAULT 'User',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE catalog_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_catalog_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public items visible to all"
  ON catalog_items FOR SELECT
  USING (visibility = 'Public');

CREATE POLICY "Authenticated users can see org-wide items"
  ON catalog_items FOR SELECT
  TO authenticated
  USING (visibility IN ('Public', 'Org-wide', 'Group-scoped', 'Private'));

CREATE POLICY "Users can read own settings"
  ON user_catalog_settings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own settings"
  ON user_catalog_settings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own settings"
  ON user_catalog_settings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_catalog_type ON catalog_items(type);
CREATE INDEX idx_catalog_visibility ON catalog_items(visibility);
CREATE INDEX idx_catalog_name ON catalog_items(name);
