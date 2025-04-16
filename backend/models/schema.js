// Create database tables
// node models/schema.js

const pool = require('../db')

const createTable = async() => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS skills (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS projects (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT,
                github TEXT,
                demo TEXT,
                image TEXT
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS project_skills (
                project_id INTEGER NOT NULL,
                skill_id INTEGER NOT NULL,
                PRIMARY KEY (project_id, skill_id),
                FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
                FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS experiences (
                id SERIAL PRIMARY KEY,
                company TEXT,
                school TEXT,
                position TEXT,
                degree TEXT,
                start_date TEXT NOT NULL,
                end_date TEXT,
                description TEXT
            )
        `)
        console.log("Database connection successful")        
    } catch (error) {
        console.error("Database connection error",error.message);
    } finally {
        pool.end()
    }
}

createTable()