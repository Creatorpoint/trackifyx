CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE,
  redirect_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE clicks (
  id SERIAL PRIMARY KEY,
  campaign_id INT,
  source TEXT,
  ip TEXT,
  device TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
