# Job Finder Application

This project is a complete job portal built using **Angular** for the frontend and **MongoDB** for the backend. It provides functionalities for both job seekers and recruiters, with features such as job postings, applications, and detailed job views.

## Features

### Job Seekers
- Browse job listings.
- Search and filter jobs by title, location, and type.
- View detailed descriptions of job postings.
- Apply for jobs.

### Recruiters
- Post new job listings.
- Edit or delete existing job postings.
- View applications received for specific job postings.
- Manage job listings and applications through an admin dashboard.

### Admin Panel
- Secure login for recruiters.
- Dashboard to manage job postings and applications.
- Add, update, and delete job postings.
- View applications for a specific job.

---

## Technologies Used

### Frontend
- **Framework**: Angular
- **CSS Framework**: TailwindCSS
- **Icons**: Font Awesome

### Backend
- **Database**: MongoDB (NoSQL)
- **Backend Framework**: Node.js with Express.js

---

## Installation

### Prerequisites
- **Node.js** and **npm** installed.
- **MongoDB** installed and running locally or via a cloud service like MongoDB Atlas.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/job-finder.git
   cd job-finder
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Configure the MongoDB connection:
   - Go to `backend/config/db.js` and set your MongoDB connection string.
   - Example:
     ```javascript
     const mongoose = require('mongoose');
     const dbURI = "mongodb+srv://<username>:<password>@cluster.mongodb.net/jobfinder";
     mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
     ```

4. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

5. Start the frontend development server:
   ```bash
   cd frontend
   ng serve
   ```

6. Open your browser and navigate to `http://localhost:4200` to access the application.

---

## Folder Structure

### Frontend (`frontend/`)
- **src/app**: Contains Angular components, services, and modules.
  - **components**: UI components (e.g., job list, job details, admin dashboard).
  - **services**: Shared services for API calls.
  - **models**: TypeScript interfaces for consistent data handling.

### Backend (`backend/`)
- **routes/**: Express routes for API endpoints.
- **models/**: Mongoose schemas and models for database operations.
- **controllers/**: Business logic for API endpoints.

---

## API Endpoints

### Job Listings
- **GET** `/api/jobs`: Retrieve all job postings.
- **GET** `/api/jobs/:id`: Retrieve details of a specific job.
- **POST** `/api/jobs`: Add a new job (Admin only).
- **PUT** `/api/jobs/:id`: Update an existing job (Admin only).
- **DELETE** `/api/jobs/:id`: Delete a job (Admin only).

### Applications
- **POST** `/api/applications`: Submit a job application.
- **GET** `/api/applications/:jobId`: View all applications for a specific job (Admin only).

---

## Deployment

### Frontend
1. Build the Angular application:
   ```bash
   cd frontend
   ng build --prod
   ```
2. Deploy the `dist/` folder to a hosting service like AWS S3, Firebase Hosting, or Netlify.

### Backend
1. Deploy the backend to a hosting service like Heroku or AWS EC2.
2. Ensure the MongoDB database is accessible (e.g., via MongoDB Atlas).
3. Set environment variables for the database connection and any other configuration.

---

## Screenshots

### Job Seeker Interface
![Job Listings](https://via.placeholder.com/800x400?text=Job+Listings)
![Job Details](https://via.placeholder.com/800x400?text=Job+Details)

### Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/800x400?text=Admin+Dashboard)

---

## Future Enhancements
- Add user authentication for job seekers.
- Implement real-time notifications for job applications.
- Add analytics for recruiters to track job applications.
- Provide export functionality for applications.

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your changes:
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request.

---

## License
This project is licensed under the MIT License.
