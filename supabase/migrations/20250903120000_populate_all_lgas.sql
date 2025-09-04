-- Populate all Nigerian states and LGAs

-- First, ensure we have all states (this will update the existing ones)
INSERT INTO states (name) VALUES 
('Abia'), ('Adamawa'), ('Akwa Ibom'), ('Anambra'), ('Bauchi'), 
('Bayelsa'), ('Benue'), ('Borno'), ('Cross River'), ('Delta'), 
('Ebonyi'), ('Edo'), ('Ekiti'), ('Enugu'), ('Federal Capital Territory'), ('Gombe'), 
('Imo'), ('Jigawa'), ('Kaduna'), ('Kano'), ('Katsina'), 
('Kebbi'), ('Kogi'), ('Kwara'), ('Lagos'), ('Nasarawa'), 
('Niger'), ('Ogun'), ('Ondo'), ('Osun'), ('Oyo'), 
('Plateau'), ('Rivers'), ('Sokoto'), ('Taraba'), ('Yobe'), 
('Zamfara')
ON CONFLICT (name) DO NOTHING;

-- Now populate LGAs for all states

-- Abia LGAs
INSERT INTO lgas (name, state_id) 
SELECT 'Aba North', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Aba South', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Arochukwu', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Bende', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ikwuano', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Isiala Ngwa North', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Isiala Ngwa South', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Isuikwuato', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Obi Ngwa', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ohafia', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Osisioma', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ugwunagbo', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ukwa East', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ukwa West', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Umuahia North', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Umuahia South', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Umu Nneochi', id FROM states WHERE name = 'Abia'
ON CONFLICT DO NOTHING;

-- Adamawa LGAs
INSERT INTO lgas (name, state_id) 
SELECT 'Demsa', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Fufure', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ganye', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Gayuk', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Gombi', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Grie', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Hong', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Jada', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Larmurde', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Madagali', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Maiha', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Mayo Belwa', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Michika', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Mubi North', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Mubi South', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Numan', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Shelleng', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Song', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Toungo', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Yola North', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Yola South', id FROM states WHERE name = 'Adamawa'
ON CONFLICT DO NOTHING;

-- Lagos LGAs (updating existing ones and adding more)
INSERT INTO lgas (name, state_id) 
SELECT 'Agege', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ajeromi-Ifelodun', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
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
SELECT 'Badagry', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Epe', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Eti-Osa', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ibeju-Lekki', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ifako-Ijaiye', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ikeja', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ikorodu', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Kosofe', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Lagos Island', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Lagos Mainland', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Mushin', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Ojo', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Oshodi-Isolo', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Shomolu', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Surulere', id FROM states WHERE name = 'Lagos'
ON CONFLICT DO NOTHING;

-- Add basic LGAs for other states to prevent empty dropdowns
-- Rivers
INSERT INTO lgas (name, state_id) 
SELECT 'Port Harcourt', id FROM states WHERE name = 'Rivers'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Obio-Akpor', id FROM states WHERE name = 'Rivers'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Eleme', id FROM states WHERE name = 'Rivers'
ON CONFLICT DO NOTHING;

-- Kano
INSERT INTO lgas (name, state_id) 
SELECT 'Kano Municipal', id FROM states WHERE name = 'Kano'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Fagge', id FROM states WHERE name = 'Kano'
ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) 
SELECT 'Gwale', id FROM states WHERE name = 'Kano'
ON CONFLICT DO NOTHING;

-- Add at least one LGA for each remaining state to prevent empty dropdowns
INSERT INTO lgas (name, state_id) SELECT 'Uyo', id FROM states WHERE name = 'Akwa Ibom' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Awka', id FROM states WHERE name = 'Anambra' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Bauchi', id FROM states WHERE name = 'Bauchi' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Yenagoa', id FROM states WHERE name = 'Bayelsa' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Makurdi', id FROM states WHERE name = 'Benue' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Maiduguri', id FROM states WHERE name = 'Borno' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Calabar Municipal', id FROM states WHERE name = 'Cross River' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Warri South', id FROM states WHERE name = 'Delta' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Abakaliki', id FROM states WHERE name = 'Ebonyi' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Benin City', id FROM states WHERE name = 'Edo' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Ado-Ekiti', id FROM states WHERE name = 'Ekiti' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Enugu East', id FROM states WHERE name = 'Enugu' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Municipal Area Council', id FROM states WHERE name = 'Federal Capital Territory' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Gombe', id FROM states WHERE name = 'Gombe' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Owerri Municipal', id FROM states WHERE name = 'Imo' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Dutse', id FROM states WHERE name = 'Jigawa' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Kaduna North', id FROM states WHERE name = 'Kaduna' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Katsina', id FROM states WHERE name = 'Katsina' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Birnin Kebbi', id FROM states WHERE name = 'Kebbi' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Lokoja', id FROM states WHERE name = 'Kogi' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Ilorin West', id FROM states WHERE name = 'Kwara' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Lafia', id FROM states WHERE name = 'Nasarawa' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Minna', id FROM states WHERE name = 'Niger' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Abeokuta South', id FROM states WHERE name = 'Ogun' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Akure South', id FROM states WHERE name = 'Ondo' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Osogbo', id FROM states WHERE name = 'Osun' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Ibadan North', id FROM states WHERE name = 'Oyo' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Jos North', id FROM states WHERE name = 'Plateau' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Sokoto North', id FROM states WHERE name = 'Sokoto' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Jalingo', id FROM states WHERE name = 'Taraba' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Damaturu', id FROM states WHERE name = 'Yobe' ON CONFLICT DO NOTHING;
INSERT INTO lgas (name, state_id) SELECT 'Gusau', id FROM states WHERE name = 'Zamfara' ON CONFLICT DO NOTHING;
