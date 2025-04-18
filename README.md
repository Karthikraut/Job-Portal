# 🧑‍💼 Job Portal

A full-stack Job Portal application that allows companies to post jobs and job seekers to apply, manage their profiles, and track applications. Built with **React**, **Redux**, **Node.js**, and **MongoDB**.

---

## 🚀 Features

### 👨‍💼 For Job Seekers:
- Browse available jobs with advanced filters.
- Search jobs by title, description, or location.
- Apply to jobs with resume uploads.
- Track application status.

### 🏢 For Companies:
- Register and manage company profiles.
- Post new job openings.
- View applicants for each job.
- Shortlist or reject candidates.

### ⚙️ Admin Dashboard:
- Monitor job postings and applications.
- Access company and user data.

---

## 🛠️ Tech Stack

| Frontend  | Backend  | Database | Other Tools |
|-----------|----------|----------|-------------|
| React     | Node.js  | MongoDB  | Redux, Axios, React Router, JWT |
| TailwindCSS / ShadCN UI | Express.js | Mongoose | Cloudinary (for resume uploads), Toast notifications |

---

## 📁 Project Structure

```
job-portal/
├── frontend/               # React frontend
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── utils/
├── backend/               # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
├── .env
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
```

### 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env  # Add your environment variables
npm run dev
```

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables (`.env`)

```
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<cloudinary_cloud_name>
CLOUDINARY_API_KEY=<cloudinary_api_key>
CLOUDINARY_API_SECRET=<cloudinary_api_secret>
```

## ✨ Future Improvements

- Add email notifications.
- Add pagination and infinite scroll.
- Role-based access control for admin, recruiter, and user.
- AI-based job recommendations.

