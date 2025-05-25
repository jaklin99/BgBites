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

#### ✅ 1. Features

- Responsive design
- Navigation: `Home / Recipes / Contact`
- Guest view for browsing
- Admin panel with login and full CRUD

#### 2. Clone or Download the Project

git clone https://github.com/yourusername/BGBITES_BEYOND.git

cd BGBITES_BEYOND
npm install
npm start

This will launch the React app on http://localhost:3000

### 🧩 3. Components

- `Navbar`: Navigation bar
- `RecipeCard`: Display recipes
- `RecipeDetails`: View full recipe
- `RecipeForm`: Add/edit recipes (admin)
- `ContactForm`: Send messages
- `AdminLogin`: Auth interface

### Backend Setup (Spring Boot)

#### ✅ Technologies

- Java 17+
- Spring Boot (Web, Data JPA, Security, Validation)
- MySQL
- Gradle
- Lombok

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

### Run Instructions

#### Backend

cd backend/
./gradlew bootRun

#### Frontend

cd frontend/
npm install
npm start

### Test

1. Visit http://localhost:3000

2. View available recipes.

3. Submit new recipes via the backend (or build a form).

### Folder Structure

🗂 Project Structure
project-root/
Backend/
├── config/
│ └── SecurityConfig.java // Spring Security config (Basic Auth + roles)
│
├── controllers/
│ ├── RecipeController.java // Public + admin-only endpoints for recipes
│ └── UserController.java // Admin-only user creation and updates
│
├── database/
│ └── PasswordChangeRequest.java // DTO for password change request
│
├── models/
│ ├── User.java // User entity with email, password, role, enabled
│ ├── Role.java // Enum: ADMIN, USER
│ └── Recipe.java // Recipe entity
│
├── repositories/
│ ├── UserRepository.java // JpaRepository for User
│ └── RecipeRepository.java // JpaRepository for Recipe
│
├── services/
│ └── UserService.java // Handles user registration + password updates
│
└── BackendApplication.java // Main Spring Boot application class

frontend/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│ └── package.json
.gitignore
README.md

| Feature                | Guest User | Admin User    |
| ---------------------- | ---------- | ------------- |
| View Recipes           | ✅         | ✅            |
| View Recipe Details    | ✅         | ✅            |
| Contact Form           | ✅         | ✅            |
| Add/Edit/Delete Recipe | ❌         | ✅            |
| Login/Logout           | ❌         | ✅ (optional) |

| Method | Endpoint               | Access     | Description                     |
| ------ | ---------------------- | ---------- | ------------------------------- |
| GET    | `/recipes`             | Public     | List all recipes                |
| GET    | `/recipes/{id}`        | Public     | View single recipe              |
| POST   | `/recipes`             | Admin only | Create a recipe                 |
| PUT    | `/recipes/{id}`        | Admin only | Update a recipe                 |
| DELETE | `/recipes/{id}`        | Admin only | Delete a recipe                 |
| POST   | `/users`               | Admin only | Create/register a user          |
| PUT    | `/users/{id}/password` | Admin/user | Change password (with old pass) |
