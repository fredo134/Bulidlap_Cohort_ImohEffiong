

# Automation Exercise QA - Week 2 Hybrid Test Suite

This repository contains the automated test suite for the Automation Exercise platform (`https://www.automationexercise.com`), built using **Playwright** and the **Page Object Model (POM)** design pattern.

---

## 🚀 Quick Start (One-Command Test Execution)

To run the **entire automated test suite** with a single command, execute[cite: 6]:

```bash
npx playwright test

```

> **Note:** Running `npx playwright test` will execute all test cases (`TC-02`, `TC-04`,`TC-10`, and `TC-21`) concurrently in headless mode and generate a complete execution report.

---

## 📋 Test Cases Automated


* **TC-02:** Registration with Existing Email  (`tests/TC_02.spec.js`)
* **TC-04:** Login with Invalid Credentials (`tests/TC_04.spec.js`)
* **TC-10:** Brand Navigation Filter (`tests/TC_10.spec.js`)
* **TC-21:** Empty Payment Validation (`tests/TC_21.spec.js`)

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
cd "Bulidlap_Cohort_ImohEffiong/week2-task

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


* **Run an individual test file (e.g.TC_02.spec.js):**
```bash
npx playwright test TC_02.spec.js --headed

```


* **View HTML Test Execution Report:**
```bash
npx playwright show-report

```



---

## 👤 Author

* **Imoh Effiong** (BuildLab Cohort QA Tester)
* **Tag:** `week-2`

```

```
