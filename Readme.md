# 🐞 Bug Tracker Web App

A simple and lightweight bug-tracking web application built using **HTML**, **CSS**, and **JavaScript**.

## 📌 Objective

To simulate a bug reporting and tracking experience where:
- Users can submit a bug report.
- Reports are stored in local storage.
- Bugs can be filtered, marked as resolved, and deleted.
- The UI/UX is user-friendly and test-ready.

---

## 🚀 Features

- 📝 Add new bug reports with title, description, and severity.
- 📂 Filter bugs by severity and status (Open / Resolved).
- ✅ Toggle bug status as resolved.
- 🗑️ Delete individual bug reports.
- 💾 Persistent storage using `localStorage`.
- 📱 Responsive and clean UI using enhanced styles.

---

## 💻 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage API

---


## 🧪 QA Scenarios and Test Cases

| Scenario | Steps | Expected Result |
|----------|-------|-----------------|
| **Add Bug** | Fill form and submit | Bug appears on Open list |
| **Mark as Resolved** | Check the box on an open bug | Bug moves to Resolved section |
| **Delete Bug** | Click 🗑️ icon on a bug | Bug is removed from the list |
| **Filter by Severity** | Select from severity dropdown | Only matching bugs are shown |
| **Filter by Status** | Select from status dropdown | List updates accordingly |
| **Persistence** | Refresh page | Data remains intact (localStorage) |

---

## 📁 File Structure
```
.
├── index.html # Bug List and Filters Page
├── report.html # Bug Report Submission Page
├── scripts.js # All JS logic (localStorage, filters, toggle, delete)
├── style.css # Beautified UI 
└── README.md # Project documentation
```


---

## 🛠️ How to Run

1. Clone or download this repository.
2. Open report.html in your browser to create bug reports.
3. After submitting, you'll be redirected to index.html to view and manage bugs.
4. Use the filters to refine the bug list by severity or status.
5. All data is stored locally in your browser (no backend required).


