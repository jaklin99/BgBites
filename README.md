# BGBITES&BEYOND 🍽️

A responsive food blog platform where you can share full recipes, including preparation details, images, and video walkthroughs. Built with React (frontend), Java Spring Boot (backend), and MySQL (database).

---

## 🌐 Features

- Fully responsive website
- Home page styled with a hero banner and modern layout
- Recipes page with complete data (prep time, cook time, servings, ingredients, instructions, video)
- API to store and fetch recipes from MySQL
- Connects with TikTok by linking recipes via video URLs
- Simple admin-ready backend for expansion

---

## 📦 Tech Stack

- **Frontend**: React, Bootstrap, Axios
- **Backend**: Java Spring Boot
- **Database**: MySQL (phpMyAdmin compatible)

---

## 🛠️ Setup Instructions

### Frontend Setup (React)

#### 1. Clone or Download the Project

git clone https://github.com/yourusername/BGBITES_BEYOND.git

cd BGBITES_BEYOND
npm install
npm start

This will launch the React app on http://localhost:3000

### Backend Setup (Spring Boot)

#### 1. Requirements:

1.1. Java 17+
1.2. Maven
1.3. MySQL server running
1.4. phpMyAdmin (optional)

#### 2. Steps:

2.1. Create a MySQL database:

#### SQL:

CREATE DATABASE bgbites;
Configure application.properties in:

#### CSS

src/main/resources/application.properties
Example (properties):
spring.datasource.url=jdbc:mysql://localhost:3306/bgbites
spring.datasource.username=root
spring.datasource.password=yourpassword

Run the Spring Boot application:
bash:
./mvnw spring-boot:run

### Test

1. Visit http://localhost:3000

2. View available recipes.

3. Submit new recipes via the backend (or build a form).

### Folder Structure

BGBITES_BEYOND/
├── frontend/ # React App
├── backend/ # Spring Boot App
└── README.md
