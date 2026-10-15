
# Automation Exercise QA - Week 1 Test Suite

This repository contains the automated test suite for the Automation Exercise platform (`https://www.automationexercise.com`), built using **Playwright** and the **Page Object Model (POM)** design pattern.

---

## 🚀 Quick Start (One-Command Test Execution)

To run the **entire automated test suite** with a single command, execute[cite: 6]:

```bash
npx playwright test

```

> **Note:** Running `npx playwright test` will execute all test cases (`TC-01`, `TC-03`, and `TC-05`) concurrently in headless mode and generate a complete execution report.

---

## 📋 Test Cases Automated

* **TC-01:** User Registration Flow (`tests/registration.spec.js`)
* **TC-03:** User Login Flow (`tests/login.spec.js`)
* **TC-05:** Product Search Flow (`tests/search.spec.js`)

---

## 🛠️ Environment Prerequisites & Setup

### Prerequisites

* **Node.js** (v16 or higher) installed on your system.

### Installation Steps

1. **Clone the repository:**
```bash
git clone [https://github.com/fredo134/Bulidlap_Cohort_ImohEffiong.git](https://github.com/fredo134/Bulidlap_Cohort_ImohEffiong.git)

```


2. **Navigate to the project folder:**
```bash
cd "Bulidlap_Cohort_ImohEffiong/Automated_testcases"

```


3. **Install project dependencies:**
```bash
npm install

```


4. **Install required Playwright browser binaries:**
```bash
npx playwright install

```



---



## 🔍 Additional Execution Options

* **Run all tests in headed mode (visible browser window):**
```bash
npx playwright test --headed

```


* **Run tests interactively via Playwright UI mode:**
```bash
npx playwright test --ui

```


* **Run an individual test file (e.g., Search test only):**
```bash
npx playwright test search.spec.js --headed

```


* **View HTML Test Execution Report:**
```bash
npx playwright show-report

```



---

## 👤 Author

* **Imoh Effiong** (BuildLab Cohort QA Tester)
* **Tag:** `week-1`

```

```
