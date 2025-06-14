Online Examination Portal


A secure, scalable web application that allows educational institutions to conduct online assessments. Teachers can create exams,
add questions, and schedule tests, while students can take exams with timers. The system auto-evaluates submissions and provides instant results and analytics.

Key Users

Admin
Teacher
Student

Core Objective
Automate examination workflows, reduce manual grading, and provide performance analytics.

Features

For Teachers

Create and manage exams
Add different types of questions (multiple choice, single choice, true/false, short answer, essay)
Schedule exams with start and end times
View submissions and results
Get analytics on exam performance

For Students

View available exams
Take exams with timer
Submit answers
View results and feedback

For Admins

Manage users
View all exams and results
System monitoring

Technical Stack

Backend

Spring Boot 3.1.0
Spring Security with JWT for authentication
Spring Data JPA for database access
PostgreSQL for data storage

Frontend (to be implemented)

React/Angular
Project Structure
The project follows a standard Spring Boot application structure:

src/main/java/com/exam/assessment/
├── controller/           # REST controllers
├── model/                # Entity classes
├── repository/           # JPA repositories
├── security/             # Security configuration and JWT utilities
│   ├── jwt/              # JWT utilities
│   └── services/         # User details service
├── payload/              # Request and response payload classes
│   ├── request/          # Request payload classes
│   └── response/         # Response payload classes
├── AssessmentApplication.java  # Main application class


API Endpoints
Authentication
POST /api/auth/signin - Authenticate a user and get a JWT token
POST /api/auth/signup - Register a new user

Exams
GET /api/exams - Get all exams (admin only)
GET /api/exams/{id} - Get an exam by ID
GET /api/exams/my-exams - Get exams created by the authenticated teacher
GET /api/exams/active - Get active exams (student only)
POST /api/exams - Create a new exam (teacher only)
PUT /api/exams/{id} - Update an exam (teacher only)
DELETE /api/exams/{id} - Delete an exam (teacher only)

Questions
GET /api/exams/{examId}/questions - Get all questions for an exam
GET /api/exams/{examId}/questions/{questionId} - Get a question by ID
POST /api/exams/{examId}/questions - Create a new question (teacher only)
PUT /api/exams/{examId}/questions/{questionId} - Update a question (teacher only)
DELETE /api/exams/{examId}/questions/{questionId} - Delete a question (teacher only)

Submissions
GET /api/submissions/my-submissions - Get submissions for the authenticated student
GET /api/submissions/exam/{examId} - Get submissions for an exam (teacher only)
POST /api/submissions/start/{examId} - Start an exam (student only)
POST /api/submissions/{submissionId}/answer/{questionId} - Submit an answer (student only)
POST /api/submissions/{submissionId}/complete - Complete a submission (student only)

Results
GET /api/results/my-results - Get results for the authenticated student
GET /api/results/{resultId} - Get a result by ID
GET /api/results/exam/{examId} - Get results for an exam (teacher only)
GET /api/results/student/{studentId}/exam/{examId} - Get a result for a student and exam
GET /api/results/exam/{examId}/average - Get the average score for an exam (teacher only)

How to Run
Make sure you have Java 17 and Maven installed
Configure PostgreSQL database in application.properties
Run the application using Maven:
mvn spring-boot:run
The API will be available at http://localhost:8080/api

Future Enhancements

Frontend implementation with React/Angular
Real-time notifications
File upload for questions and answers
Advanced analytics and reporting
Integration with learning management systems
