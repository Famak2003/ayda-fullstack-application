CREATE DATABASE IF NOT EXISTS ayda; -- "IF NOT EXISTS" it ensures that the command does not fail if the database already existed

USE ayda;

-- Create the User table
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name        VARCHAR(255) DEFAULT NULL,
    email       VARCHAR(255) DEFAULT NULL,
    password    VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UQ_Patients_Email UNIQUE (email) -- This line makes sure that the email is unique, different patients should not have the same emails
);

-- Create the Pages table
DROP TABLE IF EXISTS pages;

CREATE TABLE pages (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    display_name VARCHAR(255),
    is_home BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the Sections table
DROP TABLE IF EXISTS sections;

CREATE TABLE sections (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    page_id BIGINT UNSIGNED,
    sort_id BIGINT,
    content JSON,
    type VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (page_id) REFERENCES Pages(id)
);