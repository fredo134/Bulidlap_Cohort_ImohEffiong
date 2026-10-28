# Automation Exercise - API Test Automation & CI/CD

This directory contains the API test automation suite for the **Automation Exercise** platform (`https://automationexercise.com`), built using **Postman**, **Newman CLI**, and integrated with **GitHub Actions** for automated continuous execution and artifact reporting.

---

## 📂 Folder Structure

```text
API_testing/
├── .github/
│   └── workflows/
│       └── newman.yml          # GitHub Actions CI/CD workflow configuration
├── newman/                     # Generated test reports and execution artifacts
├── Automation Exercise - API Tests.postman_collection.json  # Postman API Collection
├── Buildlab.postman_environment.json                        # Postman Environment Variables
├── package.json                # Node.js dependencies and project metadata
└── README.md                   # API Testing documentation (This file)
```


## 🛠️ Prerequisites & Local Setup

### Prerequisites
- Node.js (v20 or v24 recommended) installed on your machine.

### Local Installation Steps
1. Navigate to the API testing directory in your terminal:
   ```bash
   cd API_testing

```
```
2. Install project dependencies (including Newman CLI and HTML reporters):
```bash
npm install

```



## 🚀 Execution Instructions

### Run API Tests Locally via Newman CLI

You can execute the complete Postman API test collection locally from your command line using Newman:

```bash
npx newman run "Automation Exercise - API Tests.postman_collection.json" -e "Buildlab.postman_environment.json" --reporters cli,html --reporter-html-export newman-report.html

```

* **CLI Report:** Displays real-time test results, assertions, and response times directly in your terminal.
* **HTML Report:** Generates a detailed graphical test report (`newman-report.html`).

```
```
## 🤖 CI/CD Automation (GitHub Actions)

This project features a fully automated CI/CD pipeline configured via GitHub Actions (`.github/workflows/newman.yml`).

- **Trigger:** Automatically runs the full API test suite on every `push` or `pull_request` to the `main` branch.
- **Runner Environment:** Runs on `ubuntu-latest` using Node.js 24.
- **Artifact Generation:** Automatically packages and uploads the generated HTML test execution report (`newman-html-report`) directly to the GitHub Actions build summary page for download.

---

## 👤 Author & Submission Details

- **Author:** Imoh Effiong
- **Target Platform:** https://automationexercise.com/ API List
- **Tools:** Postman, Newman, Node.js, GitHub Actions CI/CD

