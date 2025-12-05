AGENTS.md

## Folder structure 
 - Use following folder structure for setting up the code 
your-project/
├── backend/                   # Express.js application
│   ├── src/
│   │   ├── app.js             # Express app entry point
│   │   ├── server.js          # Server startup file
│   │   ├── config/            # Core configurations
│   │   │   ├── database.js    # Database configuration
│   │   │   ├── config.js      # Settings and environment variables
│   │   │   └── index.js
│   │   ├── controllers/       # Route controllers
│   │   │   ├── newsSections.js
│   │   │   ├── newsItems.js
│   │   │   └── index.js
│   │   ├── models/            # Sequelize models
│   │   │   ├── NewsSection.js
│   │   │   ├── NewsItem.js
│   │   │   ├── index.js
│   │   │   └── associations.js
│   │   ├── routes/            # API routes
│   │   │   ├── newsSections.js
│   │   │   ├── newsItems.js
│   │   │   ├── index.js
│   │   │   └── api/
│   │   │       └── v1/
│   │   │           ├── index.js
│   │   │           └── routes.js
│   │   ├── middlewares/       # Custom middlewares
│   │   │   ├── auth.js        # Authentication middleware
│   │   │   ├── errorHandler.js
│   │   │   ├── validation.js
│   │   │   └── index.js
│   │   ├── services/          # Business logic services
│   │   │   ├── newsSectionService.js
│   │   │   ├── newsItemService.js
│   │   │   └── index.js
│   │   ├── utils/             # Utility functions
│   │   │   ├── helpers.js
│   │   │   ├── email.js
│   │   │   └── index.js
│   │   └── validations/       # Input validation schemas
│   │       ├── newsSection.js
│   │       ├── newsItem.js
│   │       └── index.js
│   ├── migrations/            # Sequelize migrations
│   │   ├── 001-create-news-sections.js
│   │   ├── 002-create-news-items.js
│   │   └── index.js
│   ├── seeders/              # Database seeders
│   │   └── index.js
│   ├── tests/                # Backend tests
│   │   ├── unit/
│   │   ├── integration/
│   │   └── fixtures/
│   ├── package.json          # Node.js dependencies
│   ├── package-lock.json
│   ├── .env.example          # Environment variables example
│   └── .eslintrc.js          # ESLint configuration
├── frontend/                  # React application
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── common/        # Generic components
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   └── Input/
│   │   │   └── layout/        # Layout components
│   │   │       ├── Header/
│   │   │       ├── Footer/
│   │   │       └── Sidebar/
│   │   ├── pages/             # Page components
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   └── Dashboard/
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   └── useApi.ts
│   │   ├── services/          # API service functions
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   └── users.ts
│   │   ├── contexts/          # React contexts
│   │   │   ├── AuthContext.ts
│   │   │   └── ThemeContext.ts
│   │   ├── utils/             # Utility functions
│   │   │   ├── constants.ts
│   │   │   ├── helpers.ts
│   │   │   └── validation.ts
│   │   ├── styles/            # Global styles
│   │   │   ├── globals.css
│   │   │   ├── variables.css
│   │   │   └── components.css
│   │   ├── assets/            # Static assets
│   │   │   ├── images/
│   │   │   └── icons/
│   │   ├── App.ts
│   │   ├── index.ts
│   │   └── setupTests.ts
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
├── docker-compose.yml         # Docker configuration
├── .gitignore
├── README.md
└── docs/                      # Project documentation
    ├── api.md
    └── deployment.md

## Project Guidelines
 - The project uses Node.js for backend and ReactJS for frontend development
 - Use Express.js in Node.js
 - Express.js Coding Standards
    - Models (Sequelize ORM)
    - Validation (Joi or express-validator)

- Express.js best practices
    - Use middleware for cross-cutting concerns like authentication, logging, and error handling
    - Implement proper error handling with custom error classes and middleware
    - Use validation middleware for request/response validation
    - Follow RESTful conventions for API endpoints
    - Implement proper logging using Winston or Morgan
    - Use async/await for I/O operations with proper error handling
    - Document your API using Swagger/OpenAPI
    - Implement rate limiting and security middleware for production applications
    - Use database migrations with Sequelize CLI
    - Follow Airbnb JavaScript style guidelines

- React Best Practices
    - use Vite for setup React project
    - Use functional components with hooks instead of class components
    - Follow the single responsibility principle for components
    - Use CSS modules or styled-components for component styling
    - Implement proper error boundaries for error handling
    - Use React.memo() for performance optimization when appropriate
    - Follow consistent naming conventions: PascalCase for components, camelCase for functions and variables
    - Use PropTypes or TypeScript for type checking
    - Implement proper loading and error states in components
    - Use React DevTools for debugging
    - Keep components small and focused (typically under 200 lines)
    - Use custom hooks to extract and reuse stateful logic
    - Implement proper accessibility with semantic HTML and ARIA attributes
    - Lazy-load components and code-split routes.
    - State management: React Query / Redux Toolkit / Zustand; avoid prop drilling.
    - Forms & validation: React Hook Form + Yup/Zod; meaningful error messages.
    - Performance: optimize images, media, avoid unnecessary re-renders.

- Environment Variables
    - Create .env files for both backend and frontend with appropriate configurations for different environments (development, staging, production).

- Database Management Best Practices
    - Schema Design Guidelines
        - Use descriptive table and column names in snake_case
        - Always include created_at and updated_at timestamps
        - Use appropriate data types for fields (VARCHAR with limits, not TEXT for short strings)
        - Add indexes on frequently queried columns
        - Use foreign key constraints to maintain data integrity
        - Include table comments to document purpose
        - Use soft deletes (is_active field) instead of hard deletes when needed
    - Migration Best Practices
        - Always review auto-generated migrations before applying
        - Test migrations on a copy of production data
        - Never edit applied migrations - create new ones instead
        - Use descriptive migration messages
        - Back up database before major migrations
        - Include both up and down operations in Sequelize migrations

## Code Style Guidelines
- **Formatting**: Use Prettier defaults (2 spaces, semicolons, single quotes for JS/TS)
- **Types**: Prefer TypeScript interfaces over types, use strict mode, explicit return types for functions
- **Naming**: camelCase for variables/functions, PascalCase for classes/components, UPPER_CASE for constants
- **Error Handling**: Use try/catch blocks, custom error classes, never swallow errors silently
- **Functions**: Keep functions small (<20 lines), pure when possible, single responsibility
- **Comments**: Minimal inline comments, JSDoc for public APIs, explain "why" not "what"
- **Files**: One main export per file, descriptive filenames, group related functionality

## Project Requirements

Newsletter Application - Development Requirements
Project Overview
Develop a web-based newsletter application that allows users to create time-based news sections and manage news items within those sections.
Core Features
1. News Section Management
1.1 News Section Creation

Purpose: Create time-bound news sections with start and end dates
Fields Required:

Start Date (required)
End Date (required)
Section Title/Name (auto-generated or manual)



1.2 News Section List View

Display Format: Table/Grid layout
Columns:

Start Date
End Date
Number of News Items (count)
Action Buttons


Action Buttons:
View: Display section details and all news items
Manage News: Navigate to news item management interface
Edit Section: Modify start/end dates


1.3 News Section View Page

Header Section:
Display Start Date with inline edit icon
Display End Date with inline edit icon
Save changes functionality for date edits


News Items Display:
Professional, visually appealing layout
For each news item show:
News Headline (prominent display)
News Details/Content (full content with formatting)
Embedded Images/Videos (responsive display)
Source Attribution Links (open in new tab)


2. News Item Management
2.1 News Items List Interface

Access: Available via "Manage News" button from News Section list
Default View: List format
Display per item:

News Headline
First 200 characters of description
Action buttons (View, Edit, Delete)


Top Controls:
"Add New News" button



2.2 Add/Edit News Item Form

News Headline (required, text input)
News Date (required, date picker)
Event Dates (optional):

Event Start Date (date picker)
Event End Date (date picker)
Event checkbox to enable/disable this section


News Details:
WYSIWYG Rich Text Editor
Support for multiple content sections
Formatting options (bold, italic, lists, etc.)
"Add Section" feature for multi-part articles


Media Management:
Multiple image upload/link inputs
Multiple video embed/link inputs
Preview functionality for media


Source Attribution:
Multiple source link inputs
Source title and URL fields
Links should open in new tabs



2.3 News Item View Page

Clean, readable layout
Display all content with proper formatting
Show embedded media responsively
Display source links at bottom

3. Database
Need to use mysql DB to generate the application. Create tables and DB as needed. 
Database credentials user: root password: PASSWORD host: localhost

4. Use the UI design as provide in the design folder
	4.1 For the dashboard design use the file @design/newsletter-dashboard.tsx
	4.2 For the design of Create News form use the file @design/news-item-form.tsx