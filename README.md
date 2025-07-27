# 🧑‍💼 Job Portal

**Job Portal** is a robust full-stack application designed to connect job seekers with companies by enabling seamless job postings, applications, and profile management. Built with **React**, **Redux**, **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**, this platform offers a modern, scalable solution for career opportunities. It integrates advanced features like resume uploads via **Cloudinary**, real-time application tracking, and a responsive UI powered by **TailwindCSS** and **ShadCN UI**.

---

## 🚀 Features

### 👨‍💻 For Job Seekers:
- **Browse Available Jobs**: Explore a wide range of job listings with advanced filters (e.g., location, role, salary).
- **Smart Search**: Search jobs by title, description, or location with optimized MongoDB queries.
- **Apply to Jobs**: Submit applications with resume uploads to Cloudinary and custom cover letters.
- **Track Application Status**: Monitor real-time updates (e.g., Applied, Shortlisted, Rejected) in a dedicated dashboard.

### 🏢 For Companies:
- **Register & Manage Profiles**: Create and update company profiles with secure authentication.
- **Post Job Openings**: Add new job listings with detailed requirements and filters.
- **View Applicants**: Access a list of candidates for each job with resume previews.
- **Shortlist or Reject**: Manage candidates with a streamlined shortlisting/rejection process.

### ⚙️ Admin Dashboard:
- **Monitor Activity**: Oversee job postings, applications, and user activity with analytics.
- **Manage Data**: Access and manage company and user data with role-based access control (RBAC).

### 🔧 Additional Enhancements:
- **Toast Notifications**: Real-time feedback for user actions (e.g., successful application submission).
- **Responsive Design**: Fully optimized UI across devices using TailwindCSS and ShadCN UI.
- **Secure Authentication**: JWT-based login with bcrypt password hashing.

---

## 🛠️ Tech Stack

| Frontend      | Backend      | Database    | Other Tools                  |
|---------------|--------------|-------------|------------------------------|
| React         | Node.js      | MongoDB     | Redux, Axios, React Router   |
| TailwindCSS   | Express.js   | Mongoose    | JWT, Cloudinary, Toast       |
| ShadCN UI     |              |             | ESLint, Prettier, Jest       |

---
## 📷 Screenshots

### 🏠 Home Page  
![Home Page](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/HomePage1.png)

### 🔐 Login Page  
![Login Page](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/login.png)

### 📝 Signup Page  
![Signup Page](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/signup.png)

### 🧾 Latest Jobs & Openings  
![Latest Jobs](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/LatestJobsAndOpenings.png)

### 🧰 Filtered Job Results  
![Filtered Jobs](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/filterjobs.png)

### 🌐 Browse Page  
![Browse Page](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/browse.png)

### 📄 Resume Preview 1  
![Resume 1](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/resume1.png)

### 📄 Resume Preview 2  
![Resume 2](https://github.com/Karthikraut/Job-Portal/blob/main/Frontend/src/assets/resume2.png)

---

## 📁 Project Structure

```
job-portal/
├── server/                # Node.js backend
│   ├── controllers/       # Business logic for API endpoints
│   ├── routes/            # Express routes (e.g., /api/jobs, /api/auth)
│   ├── models/            # Mongoose schemas (e.g., Job, User, Application)
│   ├── middleware/        # Authentication and validation middleware
│   └── config/            # Environment and database configurations
├── client/                # React frontend
│   ├── components/        # Reusable React components (e.g., JobCard, FilterPanel)
│   ├── pages/             # React pages for routing
│   ├── redux/             # Redux store, actions, and reducers
│   └── utils/             # Utility functions (e.g., API helpers)
├── .env                   # Environment variables
└── README.md
```



## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/karthikraut/job-portal.git
cd job-portal
```

### 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env  # Add your environment variables as per .env section
npm run dev
```

### 3. Setup Frontend

```bash
cd ../client
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
PORT=5000
```

**Note**: Create a `.env.example` file in the `server/` directory with placeholder values and replace them with your actual credentials.

---

## 🔍 Challenges Overcome

- **File Upload Scalability**: Integrated Cloudinary for efficient resume storage, overcoming initial file size and retrieval bottlenecks.
- **Performance Optimization**: Implemented Redux state management and lazy loading to enhance UI responsiveness.
- **Responsive UI**: Resolved cross-browser compatibility issues with TailwindCSS and ShadCN UI layouts.

---


## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request with detailed descriptions.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md) and adhere to ESLint/Prettier standards.

---

## 📬 Contact

**Your Name**  
📧 [karthikraut2@example.com](mailto:karthikraut2@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/karthik-raut-b5a6a7243) | [GitHub](https://github.com/Karthikraut)


---
