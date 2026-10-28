# BuildLab QA Cohort 4 Portfolio

Welcome to my central Quality Assurance portfolio repository for the **BuildLab Cohort 4 Program**. This repository serves as the primary hub for all manual test documentation, automated test frameworks, weekly deliverables, and QA evidence created throughout the program.

---

## 👤 Participant Details
- **Name:** Imoh Effiong
- **Role:** QA Engineering Trainee
- **Target Application:** [Automation Exercise Platform](https://www.automationexercise.com)
- **Repository:** [`fredo134/Bulidlap_Cohort_ImohEffiong`](https://github.com/fredo134/Bulidlap_Cohort_ImohEffiong)

---

## 📂 Repository Organization

```text
Bulidlap_Cohort_ImohEffiong/
├── .github/
│   └── workflows/
│       └── newman.yml          # GitHub Actions CI/CD Workflow Configuration
├── API_testing/                 # Week 3 Postman API Test Suite & Newman Setup
│   ├── Automation Exercise - API Tests.postman_collection.json
│   ├── Buildlab.postman_environment.json
│   ├── package.json
│   └── README.md
├── Automated_testcases/        # Week 1 Playwright Test Automation Suite & POM Framework
├── week2-task/                 # Week 2 Regression Suite, Page Objects, and Exploratory Reports
└── README.md                   # Main Portfolio Overview (This File)
```
## 📅 Weekly Progress & Deliverables

### 🔹 Week 1: Foundations & Core Test Automation
- **Focus:** Manual Test Case Design, POM Automation Framework Setup, and Core Flow Testing.
- **Automated Scope (3 Tests):**
  - `TC-01`: User Registration Flow (`test/registration.spec.js`)
  - `TC-03`: User Login Flow (`test/login.spec.js`)
  - `TC-05`: Product Search Flow (`test/search.spec.js`)
- **Submission Tag:** `week-1`
- *For detailed setup and execution instructions, please refer to the [Automated Test Cases README](./Automated_testcases/Readme.md).*

### 🔹 Week 2: Regression Testing & Extended Scenarios
- **Focus:** Exploratory Testing (Charter, Session Notes, Network Throttling, Defect Logging) and Automated Regression Suite Expansion.
- **Automated Scope (4 Additional Tests | Total 7):**
  - `TC-02`: Duplicate Email Registration (`test/registration.spec.js`)
  - `TC-04`: Invalid Login (`test/login.spec.js`)
  - `TC-10`: Brand Navigation Filter (`test/TC_10_brand_filter.spec.js`)
  - `TC-21`: Empty Payment Validation (`test/TC_21_empty_payment.spec.js`)
- **Defects Identified:** Major payment input sanitization (`DEF-01`) and expired card validation bypass (`DEF-03`).
- **Submission Tag:** `week-2`
- *For detailed setup and execution instructions, please refer to the [Week-2 README](./week2-task/readme.md).*

### 🔹 Week 3: API Test Automation & CI/CD Integration
- **Focus:** API Collection & Environment Configuration, Newman CLI Execution, and Continuous Integration with GitHub Actions.
- **Automated Scope:**
  - Postman Collection & Environment design covering core API endpoints on Automation Exercise.
  - Command-line test execution and HTML report generation via Newman CLI.
  - Fully automated continuous execution pipeline triggered on every `push` or `pull_request` via GitHub Actions.
  - Automated packaging and publishing of HTML test reports (`newman-html-report`) as build artifacts.
- **Submission Tag:** `week-3`
- *For detailed setup and execution instructions, please refer to the [API_Testing README](./API_testing/Readme.md).*

---

## 🛠️ Tech Stack & Tools

- **UI Test Automation:** Playwright
- **API Testing & CLI Runner:** Postman, Newman CLI
- **CI/CD Pipeline:** GitHub Actions
- **Language:** JavaScript / Node.js (v24)
- **Design Pattern:** Page Object Model (POM)
- **Version Control:** Git & GitHub
- **Test Documentation:** Test Plans, Exploratory Charters, Defect Logs, RTM, and HTML Execution Reports

---

## 📬 Contact & Links

- **GitHub Repository:** [fredo134/Bulidlap_Cohort_ImohEffiong](https://github.com/fredo134/Bulidlap_Cohort_ImohEffiong)
