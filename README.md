# 🎓 EduPulse - Student Management System

A modern, high-performance **Student Management System** dashboard built with **HTML5, CSS3, Vanilla JavaScript (ES6+)**, and powered by **Vite**.

Designed and developed by **Dnyandev** as an academic showcase demonstrating modern frontend architecture, client-side Single Page Application (SPA) routing, and responsive dashboard UI without heavy frameworks.

![Vite](https://img.shields.io/badge/Vite-8.x_Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SPA Architecture](https://img.shields.io/badge/Architecture-Single_Page_App-4f46e5?style=for-the-badge)
![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6+_Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Variables_&_Dark_Mode-1572B6?style=for-the-badge&logo=css3)

---

## 🌟 Key Features

1. **⚡ Single Page Application (SPA) Navigation:**
   - Instant client-side routing between `#dashboard` and `#students` with zero page reloads or flickers.
   - Preserves form input states, search filters, and scroll positions across navigation.

2. **📊 Live KPI Analytics Cards:**
   - **Total Enrolled:** Instant count of all active and enrolled students.
   - **Average GPA:** Dynamically calculated grade point average.
   - **Active Rate:** Percentage of students in active standing.
   - **Academic At-Risk:** Highlights students requiring academic intervention (GPA < 3.0).

3. **🏢 Department Analytics & Distribution:**
   - Visual distribution bar progress indicators across Computer Science, AI, Electrical, Mechanical, and Business Administration.
   - Expandable breakdown details showing enrollment counts per department.

4. **👥 Student Records Directory:**
   - Dual viewing modes: **Data Table View** (dense list) and **Grid Cards View** (visual profiles).
   - Multi-field real-time instant search (`/` keyboard shortcut to focus search).
   - Filters by Department, Status (Active/Probation/Graduated), Semester, and multi-criteria sorting.
   - Batch selection with bulk deletion safety confirmation.

5. **📝 Full CRUD Operations:**
   - **Create:** Modal registration form with client-side validation (unique roll number, email, 10-digit phone, GPA range).
   - **Read:** Comprehensive Student Profile Dossier with attendance meter, academic standing, and print utility.
   - **Update:** Pre-populated edit modal with instant DOM updates.
   - **Delete with Undo:** Safe confirmation dialog with 5-second reversible toast notification.

6. **🎨 Modern UX & Design Aesthetics:**
   - Curated typography (*Plus Jakarta Sans* & *JetBrains Mono*).
   - Dark & Light mode toggle with smooth CSS variable transitions, persisted in `localStorage`.
   - CSV export feature enabling instant Excel/spreadsheet reporting without a backend.
   - Pre-loaded academic demo dataset for quick testing and demonstrations.

---

## 🚀 Getting Started

### Prerequisites:
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation & Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/Dnyandev8767/Student-management-system.git
   cd Student-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open **`http://localhost:3000`** in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   Generates optimized, minified bundles in the `dist/` directory.

---

## 📂 Project Structure

```
Student-management-system/
├── index.html       # Clean semantic HTML5 dashboard shell, modals, and templates
├── style.css        # Modern CSS design system, variables, animations & dark mode
├── app.js           # Client-side SPA router, state management, and CRUD controllers
├── vite.config.js   # Fast Vite dev server & production bundler configuration
├── package.json     # Project metadata and build scripts
└── README.md        # Comprehensive documentation & Viva preparation guide
```

---

## 🎓 College Viva & Examiner Q&A Guide

### Q1: What technologies are used in this project?
> **Answer:** "The core project is built using native **HTML5**, **CSS3 (with CSS Custom Properties and Flexbox/Grid)**, and **Vanilla JavaScript (ES6+ Modules)**. We use **Vite** as our next-generation build tool and local development server for fast Hot Module Replacement (HMR) and optimized Rollup bundling."

### Q2: How does Single Page Application (SPA) routing work in this project?
> **Answer:** "We implemented hash-based client-side routing. Navigation links use URL hashes like `#dashboard` and `#students`. An event listener on `window.addEventListener('hashchange', ...)` intercepts URL changes and toggles the active view by adding/removing the `.active` CSS class, switching screens in under 10ms with zero server requests or page reloads."

### Q3: Where is the student data stored? Does it require a backend database?
> **Answer:** "Data is stored on the client side using the **Browser Web Storage API (`localStorage`)**. When records are created, edited, or deleted, JavaScript serializes the array using `JSON.stringify()` and writes to `localStorage`. When the app loads, `JSON.parse()` restores the data, providing persistence without needing an external database."

### Q4: How is the Deletion and 'Undo' feature implemented?
> **Answer:** "When a user deletes a student, the student object is spliced from the active array and stored in temporary closure memory. A floating toast notification with an 'Undo' button appears for 5 seconds. If the user clicks 'Undo', the student object is restored back to the array and `localStorage` without data loss."

### Q5: If asked: How would this architecture map to React (JSX, Components, Props, State)?
> **Answer:** 
> - **JSX:** Instead of writing raw HTML strings, JSX allows writing declarative XML tags directly in JavaScript (`<div className="card">{student.name}</div>`).
> - **Components:** The monolithic layout is divided into reusable functions like `Sidebar`, `Header`, `KpiCards`, `StudentDirectory`, and `Modals`.
> - **Props:** Data passed downwards from Parent (`App`) to Child (`<KpiCards students={students} />`), which are read-only.
> - **State:** Internal component memory managed with `useState`. When state updates (`setStudents`), React automatically calculates virtual DOM diffs and re-renders only the changed UI.

---

## 👨‍💻 Author
Developed with ❤️ by **Dnyandev**  
GitHub: [@Dnyandev8767](https://github.com/Dnyandev8767)
