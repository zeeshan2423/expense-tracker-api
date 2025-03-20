# Expense Tracker API 🚀

A robust REST API for managing personal expenses with secure JWT authentication and Docker support.

🔗 **Project URL:** [Expense Tracker Project on Roadmap.sh](https://roadmap.sh/projects/expense-tracker-api)

## Features ✨

- 🔐 **JWT Authentication**: Secure user signup/login with token-based authentication
- 💰 **Expense Management**: Full CRUD operations for expenses
- 📅 **Smart Filtering**: Filter expenses by time periods (week/month/3months) or custom dates
- 🛡️ **Security**: Helmet + CORS + Rate Limiting (TODO)
- 🐳 **Dockerized**: Ready-to-run containerized environment

## Tech Stack 🛠️

**Core:**

- **Node.js** • **Express** • **MongoDB**

**Security:**

- **JWT** • **bcryptjs** • **Helmet**

**Infra:**

- **Docker** • **MongoDB Atlas** (production)

**Tools:**

- **Mongoose** • **dotenv** • **Postman**

## Getting Started 🚦

### Prerequisites

- Node.js ≥18.x
- Docker & Docker Compose (for container setup)
- MongoDB (local or Atlas URI)

### Installation

**Local Setup:**

```bash
# Clone repository
git clone https://github.com/zeeshan2423/expense-tracker-api.git
cd expense-tracker-api

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your values

# Start development server
npm run dev
```

## Docker Setup:

```bash
docker-compose up --build
```

# Configuration ⚙️

## .env File Structure:

```env
MONGODB_URI=mongodb://mongodb:27017/expense-tracker # Docker
# OR for local MongoDB: mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_ultra_secure_secret
JWT_EXPIRES_IN=30d
PORT=3000
NODE_ENV=development
```

# API Documentation 📚

## Authentication Endpoints

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | /api/v1/auth/signup | Register new user |
| POST   | /api/v1/auth/login  | Authenticate user |

## Expense Endpoints

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| GET    | /api/v1/expenses     | Get filtered expenses   |
| POST   | /api/v1/expenses     | Create new expense      |
| PUT    | /api/v1/expenses/:id | Update existing expense |
| DELETE | /api/v1/expenses/:id | Delete expense          |

## Filter Examples:

```http
GET /api/v1/expenses?filter=week
GET /api/v1/expenses?filter=custom&start=2024-01-01&end=2024-01-31
```

# Deployment 🚢

## Production Docker Build:

```env
docker build -t expense-tracker .
docker run -d -p 3000:3000 --env-file .env expense-tracker
```

## Recommended Production Setup:

- Use MongoDB Atlas for database
- Implement Redis for rate limiting
- Add NGINX reverse proxy
- Set up PM2 cluster mode

# Contributing 🤝

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

# Happy Expense Tracking! 💸
