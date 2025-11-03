# 🎓 Club Haven

<div align="center">

**A Modern Club & Event Management Platform for Universities**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Status](https://img.shields.io/badge/Status-Active%20Development-blue.svg)]()

*Connecting students, clubs, and campus communities through seamless digital experiences.*

[Features](#-features) • [Quick Start](#%EF%B8%8F-quick-start) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 About The Project

**Club Haven** is a centralized web platform designed to revolutionize how campus communities operate. It bridges the gap between students, club leaders, faculty, and administrators by providing a unified digital space for club management, event organization, and campus engagement.

### Why Club Haven?

- 🎯 **Centralized Management** - All club activities in one place
- 🚀 **Streamlined Operations** - Simplified workflows for leaders and members
- 📊 **Data-Driven Insights** - Track engagement and growth metrics
- 🔐 **Secure & Scalable** - Built with modern security practices
- 🎨 **Intuitive Design** - Clean, responsive interface for all devices

---

## ✨ Features

### 🟢 Phase 1 – Core Infrastructure (Completed)
- ✅ **User Authentication** - Secure JWT-based signup and login
- ✅ **Role-Based Access Control** - Student, Club Leader, Faculty, and Admin roles
- ✅ **Club Management** - Create, browse, and discover clubs
- ✅ **Membership System** - Join requests with approval workflows
- ✅ **Event Foundation** - Basic event creation and viewing

### 🟡 Phase 2 – Engagement & Community (In Progress)
- 🔄 **Event Registration** - RSVP and attendance tracking
- 🔄 **Club Announcements** - Posts, updates, and communication feeds
- 🔄 **Custom Dashboards** - Role-specific interfaces with relevant insights
- 🔄 **Member Management** - Advanced tools for club leaders

### 🔵 Phase 3 – Advanced Features (Planned)
- 📅 **Smart Notifications** - Real-time alerts and email updates
- 👤 **Profile Pages** - Personalized user and club profiles
- 📈 **Analytics Dashboard** - Detailed statistics and reports
- 🔍 **Advanced Search** - Filter by category, tags, and interests
- 📱 **Mobile Optimization** - Progressive web app capabilities

> 📌 Track our progress on the [GitHub Projects Board](https://github.com/your-org/club-haven/projects)

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="33%">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

</td>
<td align="center" width="33%">

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

</td>
<td align="center" width="33%">

### Infrastructure
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</td>
</tr>
</table>

---

## ⚡️ Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/club-haven.git
   cd club-haven
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="mysql://user:password@localhost:3306/club_haven"
   
   # Authentication
   JWT_SECRET="your_secure_jwt_secret_key"
   JWT_EXPIRES_IN="7d"
   
   # Server
   PORT=5000
   NODE_ENV="development"
   
   # Frontend
   VITE_API_URL="http://localhost:5000"
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

6. **Start the development servers**
   ```bash
   npm run dev
   ```
   
   - 🎨 **Frontend**: http://localhost:5173
   - 🔧 **Backend**: http://localhost:5000

### Docker Setup (Alternative)

```bash
docker-compose up -d
```

---

## 📁 Project Structure

```
club-haven/
├── src/
│   ├── assets/              # Static files (images, icons, logos)
│   ├── components/          # React components
│   │   ├── common/          # Reusable UI components
│   │   ├── clubs/           # Club-related components
│   │   ├── events/          # Event components
│   │   └── auth/            # Authentication components
│   ├── pages/               # Route pages
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── routes/              # Express API routes
│   │   ├── auth.js
│   │   ├── clubs.js
│   │   ├── events.js
│   │   └── users.js
│   ├── middleware/          # Express middleware
│   ├── db/                  # Prisma configuration
│   │   └── schema.prisma
│   ├── generated/           # Prisma client (auto-generated)
│   ├── App.jsx              # React root component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── tests/                   # Test files
├── .env.example             # Environment template
├── package.json
├── vite.config.js
└── README.md
```

---

## 🗄️ Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(STUDENT)
  avatar    String?
  bio       String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  clubs     ClubMember[]
  events    EventRegistration[]
  posts     Post[]
}

model Club {
  id          Int      @id @default(autoincrement())
  name        String   @unique
  description String   @db.Text
  category    String
  logo        String?
  banner      String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  members     ClubMember[]
  events      Event[]
  posts       Post[]
}

model Event {
  id          Int      @id @default(autoincrement())
  title       String
  description String   @db.Text
  venue       String
  startDate   DateTime
  endDate     DateTime
  capacity    Int?
  clubId      Int
  createdAt   DateTime @default(now())
  
  club         Club @relation(fields: [clubId], references: [id])
  registrations EventRegistration[]
}

model ClubMember {
  id        Int      @id @default(autoincrement())
  userId    Int
  clubId    Int
  role      ClubRole @default(MEMBER)
  status    MemberStatus @default(PENDING)
  joinedAt  DateTime @default(now())
  
  user      User @relation(fields: [userId], references: [id])
  club      Club @relation(fields: [clubId], references: [id])
  
  @@unique([userId, clubId])
}

enum Role {
  STUDENT
  CLUB_LEADER
  FACULTY
  ADMIN
}

enum ClubRole {
  MEMBER
  MODERATOR
  LEADER
}

enum MemberStatus {
  PENDING
  APPROVED
  REJECTED
}
```

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

### Development Workflow

1. **Fork & Clone**
   ```bash
   git clone https://github.com/your-username/club-haven.git
   cd club-haven
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
   
   Use [conventional commits](https://www.conventionalcommits.org/):
   - `feat:` New features
   - `fix:` Bug fixes
   - `docs:` Documentation changes
   - `style:` Code style changes
   - `refactor:` Code refactoring
   - `test:` Test updates
   - `chore:` Build/tooling changes

5. **Push & Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Quality Standards

- ✅ ESLint and Prettier configurations
- ✅ Meaningful variable and function names
- ✅ Comments for complex logic
- ✅ No direct commits to `main` branch
- ✅ All PRs require review approval

> 📚 Read our [Contributing Guide](CONTRIBUTING.md) for detailed guidelines

---

## 👥 Team

| Member | Role | Focus Area | GitHub |
|--------|------|------------|--------|
| 🧑‍💻 Developer 1 | Backend Lead | API Design, Prisma, Database | [@username](https://github.com/username) |
| 🧑‍💻 Developer 2 | Frontend Lead | React, UI/UX, Components | [@username](https://github.com/username) |
| 🧑‍💻 Developer 3 | Full Stack | Features, Integration | [@username](https://github.com/username) |
| 🧑‍💻 Project Lead | Coordinator | Reviews, Deployment, Strategy | [@username](https://github.com/username) |

---

## 🗺️ Roadmap

| Milestone | Target | Status |
|-----------|--------|--------|
| Phase 1 - Core MVP | Q4 2024 | ✅ Complete |
| Phase 2 - Engagement Features | Q1 2025 | 🔄 In Progress |
| Phase 3 - Advanced Features | Q2 2025 | 📅 Planned |
| Beta Launch | Q3 2025 | 🔮 Upcoming |

---

## 📸 Screenshots

<div align="center">

### Dashboard
![Dashboard Preview](docs/screenshots/dashboard.png)

### Club Discovery
![Clubs Preview](docs/screenshots/clubs.png)

### Event Management
![Events Preview](docs/screenshots/events.png)

</div>

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

---

## 📦 Deployment

### Production Build

```bash
# Build frontend
npm run build

# Start production server
npm start
```

### Deployment Platforms

- **Frontend**: Vercel, Netlify, or Cloudflare Pages
- **Backend**: Railway, Render, or DigitalOcean
- **Database**: PlanetScale, Railway, or AWS RDS

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Prisma](https://www.prisma.io/), [React](https://react.dev/), and [Express.js](https://expressjs.com/)
- UI components inspired by modern design systems
- Special thanks to our contributors and mentors
- Campus communities that inspired this platform

---

## 📞 Contact & Support

- 📧 **Email**: support@clubhaven.com
- 💬 **Discord**: [Join our community](https://discord.gg/clubhaven)
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-org/club-haven/issues)
- 📖 **Documentation**: [Full Docs](https://docs.clubhaven.com)

---

<div align="center">

### 🚀 Join Us in Building the Future of Campus Communities

**[Star ⭐](https://github.com/your-org/club-haven)** • **[Fork 🍴](https://github.com/your-org/club-haven/fork)** • **[Contribute 🤝](CONTRIBUTING.md)**

Made with ❤️ by the Club Haven Team

</div>