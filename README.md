# JobQuest

JobQuest is a full-stack job portal application that allows users to search, post, and manage job listings. 
This project follows the **MVC (Model-View-Controller)** pattern and includes both **frontend and backend** integration.


## 🛠️ Tech Stack

### Backend:
- **Java** (Spring Boot) - For backend API development
- **Spring Boot JPA** - For database operations
- **MySQL** - Database to store users and jobs
- **Spring Boot MVC** - Structuring the backend logic
- **Spring Boot Security** (Planned) - To manage authentication & authorization

### Frontend:
- **React.js** - For the frontend UI
- **Fetch API** - To call backend endpoints
- **Bootstrap / CSS** - For styling and layout

### Tools & Platforms:
- **Postman** - For testing API endpoints
- **Git & GitHub** - For version control
- **VS Code** - Development environment

## 📁 Project Structure

JobQuest/
├── frontend/        # React.js frontend application
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page-level components
│   │   ├── App.js        # Main app file
│   │   ├── index.js      # Entry point
│   ├── public/
│   ├── package.json     # Dependencies
│
├── backend/         # Spring Boot backend application
│   ├── src/main/java/com/jobquest/
│   │   ├── controllers/   # Handles API requests
│   │   ├── models/        # Database entity models
│   │   ├── repositories/  # JPA Repositories
│   │   ├── services/      # Business logic
│   │   ├── JobQuestApplication.java  # Main entry point
│   ├── resources/
│   │   ├── application.properties  # Database configurations
│   ├── pom.xml         # Maven dependencies
│
├── README.md         # Project documentation




   
