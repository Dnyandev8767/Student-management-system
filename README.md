# 🎓 Student Management System

A clean, modern, and fully functional **Student Management System** web application developed by **Dnyandev** as a college academic mini-project.

Built entirely using **Vanilla Web Technologies**:
- **HTML5** (Semantic layout and accessible modal dialogs)
- **CSS3** (Custom properties/variables, Flexbox, CSS Grid, Dark Mode)
- **Modern JavaScript (ES6+)** (DOM Manipulation, State Management, and LocalStorage)

---

## 👨‍💻 Developer Information
- **Project Name:** Student Management System
- **Developer:** Dnyandev
- **Project Type:** College Mini / Academic Project
- **Architecture:** Client-Side Single Page Application (SPA)
- **Data Storage:** Browser Web Storage API (`localStorage`)

---

## 🌟 Key Features

1. **Dashboard KPI Analytics:**
   - **Total Students** enrolled.
   - **Active Enrolled** count.
   - **Distinct Departments** counter.
   - **Average Institutional CGPA** calculated dynamically.

2. **Complete CRUD Operations:**
   - **Create (Add):** Add new students with field-level validation (unique roll number check, email format, 10-digit phone, CGPA 0–10).
   - **Read (View):** Interactive table directory displaying student avatar initials, department, academic year, color-coded CGPA tag, and status badge. Detailed Profile Card modal with one-click **Print Profile** option.
   - **Update (Edit):** In-place editing of student details.
   - **Delete:** Safe deletion with confirmation modal dialog and feedback toast.

3. **Live Search & Multi-Criteria Filtering:**
   - Instant search as you type across Student Name, Roll Number, and Email.
   - Department filter dropdown (Computer Science, IT, AI & Data Science, Mechanical, Electrical, Civil).
   - Enrollment status filter (Active, Inactive, Graduated).
   - One-click Reset Filters button.

4. **Data Portability:**
   - **Export to CSV:** Export the student roster into a formatted `.csv` spreadsheet with a single click.

5. **Theme Support (Dark / Light Mode):**
   - Toggle between sleek Dark mode and clean Light mode.
   - Preference is saved automatically in `localStorage`.

6. **Offline Data Persistence:**
   - All student records are saved locally in the browser (`localStorage`), so changes persist even after refreshing the page or restarting the browser.

---

## 🚀 How to Run the Project

### Option 1: Direct in Browser
Simply double-click [`index.html`](file:///home/dnyandevd/Desktop/Student%20Management%20System%20Project/index.html) or open it with any web browser (Google Chrome, Firefox, Edge, Safari).

### Option 2: Using Local Python Server (Recommended)
Open your terminal in this project folder and run:
```bash
python3 -m http.server 3000
```
Then visit:
```
http://localhost:3000
```

---

## 📂 Project Structure

```
Student Management System Project/
├── index.html       # Clean semantic HTML5 dashboard layout & dialogs
├── style.css        # Modern CSS3 design tokens, variables, & dark mode
├── app.js           # Well-commented ES6+ JavaScript handling CRUD & logic
└── README.md        # Project guide & Viva interview preparation sheet
```

---

## 🎓 College Viva & Examiner Q&A Guide

Prepare for your college project viva with these frequently asked questions:

### Q1: What technologies did you use in this project?
> **Answer:** "I used core vanilla frontend technologies — **HTML5** for structure, **CSS3** with CSS variables and flex/grid layout for responsive styling, and **Vanilla JavaScript (ES6+)** for application logic and DOM manipulation. No heavy external frameworks or libraries were needed."

### Q2: Where is the student data stored? Does it have a backend database?
> **Answer:** "For this project, data is stored client-side using the HTML5 **Web Storage API (`localStorage`)**. When the user adds, edits, or deletes a student, the JavaScript array is converted to JSON string using `JSON.stringify()` and saved in `localStorage`. When the app loads, `JSON.parse()` retrieves the records, ensuring data persists across page refreshes."

### Q3: How did you implement real-time search and filtering?
> **Answer:** "I used the native JavaScript `.filter()` array method. An `input` event listener is attached to the search input. As the user types, the callback filters the student records by checking `name`, `rollNo`, and `email` using `.includes()`, combined with the selected department and status dropdowns, and re-renders the table."

### Q4: How does the Edit feature work?
> **Answer:** "When the user clicks the edit button (✏️), the student's unique ID is passed to `openEditModal(id)`. The function uses JavaScript's `.find()` method to locate the student object and populates the form input fields. When submitted, the index is found with `.findIndex()`, the object is updated, saved to `localStorage`, and the table re-renders."

### Q5: How is Dark Mode implemented?
> **Answer:** "Dark Mode is implemented using **CSS Custom Properties (Variables)** on the `:root` and `[data-theme='dark']` selector. In JavaScript, toggling the theme simply switches the `data-theme` attribute on the root `<html>` element and saves the state in `localStorage`."

### Q6: How does the CSV export feature work without a backend?
> **Answer:** "JavaScript generates a comma-separated string containing headers and student row values. Then it creates a `Blob` object with MIME type `text/csv`, creates a temporary object URL via `URL.createObjectURL()`, and triggers a programmatically clicked download link."

---

## 📄 License
Academic Mini Project created by **Dnyandev**. Free to use, adapt, and learn from.
# Student-management-system
