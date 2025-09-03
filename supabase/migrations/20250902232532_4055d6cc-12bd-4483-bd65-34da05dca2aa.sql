-- Insert sample states
INSERT INTO states (name) VALUES 
('Abia'), ('Adamawa'), ('Akwa Ibom'), ('Anambra'), ('Bauchi'), 
('Bayelsa'), ('Benue'), ('Borno'), ('Cross River'), ('Delta'), 
('Ebonyi'), ('Edo'), ('Ekiti'), ('Enugu'), ('Gombe'), 
('Imo'), ('Jigawa'), ('Kaduna'), ('Kano'), ('Katsina'), 
('Kebbi'), ('Kogi'), ('Kwara'), ('Lagos'), ('Nasarawa'), 
('Niger'), ('Ogun'), ('Ondo'), ('Osun'), ('Oyo'), 
('Plateau'), ('Rivers'), ('Sokoto'), ('Taraba'), ('Yobe'), 
('Zamfara'), ('FCT')
ON CONFLICT DO NOTHING;

-- Insert sample LGAs for Lagos State (you can add more later)
INSERT INTO lgas (name, state_id) 
SELECT 'Alimosho', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;

INSERT INTO lgas (name, state_id) 
SELECT 'Amuwo-Odofin', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;

INSERT INTO lgas (name, state_id) 
SELECT 'Apapa', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;

INSERT INTO lgas (name, state_id) 
SELECT 'Ikeja', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;

INSERT INTO lgas (name, state_id) 
SELECT 'Lagos Island', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;

-- Insert sample positions
INSERT INTO positions (title, description, requirements) VALUES 
('Lecturer I', 'Entry-level teaching position in agricultural sciences', 'Masters degree in relevant field, teaching experience preferred'),
('Senior Lecturer', 'Experienced teaching and research position', 'PhD in relevant field, 5+ years experience'),
('Research Officer', 'Agricultural research and development', 'Masters/PhD in agricultural sciences, research experience'),
('Administrative Officer', 'Administrative and management duties', 'Bachelor degree, administrative experience'),
('Laboratory Technician', 'Laboratory management and technical support', 'HND/BSc in relevant science field, lab experience'),
('Farm Manager', 'Management of college farm operations', 'Agriculture degree, farm management experience')
ON CONFLICT DO NOTHING;