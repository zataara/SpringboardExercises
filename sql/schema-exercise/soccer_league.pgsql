

DROP DATABASE IF EXISTS medical_center_db;

CREATE DATABASE medical_center_db;

\c medical_center_db

CREATE TABLE season (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    start_date DATE,
    end_date DATE
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(35),
    won_game1 BOOLEAN,
    won_game2 BOOLEAN,
    won_game3 BOOLEAN,
    won_game4 BOOLEAN,
    won_game5 BOOLEAN,
    won_game6 BOOLEAN,
    won_game7 BOOLEAN,
    won_game8 BOOLEAN,
    won_game9 BOOLEAN,
    won_game10 BOOLEAN
    
);

CREATE TABLE players(
    id SERIAL PRIMARY KEY,
    team_id REFERENCES teams
);

CREATE TABLE referees (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    referee_id REFERENCES referees,
    winning_team REFERENCES teams,
    losing_team REFERENCES teams
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    team1_id REFERENCES teams,
    game_id REFERENCES games,
    player_id REFERENCES players
);
