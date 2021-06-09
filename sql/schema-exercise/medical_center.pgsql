

DROP DATABASE IF EXISTS medical_center_db;

CREATE DATABASE medical_center_db;

\c medical_center_db

CREATE TABLE doctors 
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    patient_id INTEGER REFERENCES patients ON DELETE SET NULL
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    doctor REFERENCES doctors ON DELETE SET NULL
    disease
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    doctor_id REFERENCES doctors,
    patient_id REFERENCES patients,
    disease_id REFERENCES diseases
);

CREATE TABLE diseases (
    id SERIAL PRIMARY KEY,
    patient_id REFERENCES patients ON DELETE CASCADE
    visit_id REFERENCES visits ON DELETE CASCADE
);