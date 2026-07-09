<div align="center">

# 🚀 Playwright Automation Framework

### 🎭 End-to-End Test Automation using Playwright + TypeScript + Cucumber BDD

<img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white"/>
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white"/>
<img src="https://img.shields.io/badge/Allure-FF6B00?style=for-the-badge&logo=allure&logoColor=white"/>

</div>

---

# 📖 About

This project is a **Playwright Automation Framework** developed using **TypeScript**, **Cucumber BDD**, and the **Page Object Model (POM)**. It is designed to automate web applications with scalable architecture, reusable components, and detailed reporting.

---

# ✨ Features

- ✅ Playwright Automation
- ✅ TypeScript
- ✅ Cucumber BDD
- ✅ Page Object Model (POM)
- ✅ Hooks & Custom World
- ✅ Environment Configuration
- ✅ Data Driven Testing
- ✅ Logging Support
- ✅ HTML Report
- ✅ Allure Report
- ✅ Jenkins CI Integration
- ✅ Screenshot on Failure
- ✅ Cross Browser Support

---

# 🏗️ Framework Architecture

```
Playwright_Project
│
├── env
├── reports
├── screenshots
├── src
│   ├── pages
│   ├── step
│   ├── feature
│   ├── hooks
│   ├── support
│   ├── utilities
│   └── data
│
├── cucumber.js
├── package.json
└── README.md
```

---

# 🛠️ Tech Stack

| Technology | Version |
|------------|----------|
| 🎭 Playwright | Latest |
| 📘 TypeScript | Latest |
| 🥒 Cucumber | Latest |
| 📦 Node.js | 24+ |
| 📊 Allure Report | Latest |
| 📈 HTML Report | Latest |
| ⚙️ Jenkins | Supported |

---

# 📂 Project Structure

```
src
│
├── feature
├── step
├── pages
├── hooks
├── support
├── utilities
├── data
└── base
```

---

# ⚙️ Installation

Clone Repository

```bash
git clone https://github.com/itzMalx/Playwright_Automation-project.git
```

Move into Project

```bash
cd Playwright_Automation-project
```

Install Dependencies

```bash
npm install
```

Install Browsers

```bash
npx playwright install
```

---

# ▶️ Execute Tests

### Run All Tests

```bash
npm test
```

### Run Muhindhar Scenarios

```bash
npm run muhindhar
```

### Run Malavicka

```bash
npm run malavicka
```

### Run Vetri

```bash
npm run vetri
```

### Run Mylambigai

```bash
npm run mylambigai
```

### Run Shobana

```bash
npm run shobana
```

---

# 📊 Reports

## HTML Report

```
reports/html-report/index.html
```

## Allure Report

Generate

```bash
allure generate allure-results --clean -o allure-report
```

Open

```bash
allure open allure-report
```

---

# 📸 Screenshots

Screenshots are automatically captured for failed scenarios.

```
screenshots/
```

---

# 🔄 Jenkins Pipeline

Pipeline Includes:

- ✅ Checkout Source
- ✅ Install Dependencies
- ✅ Install Browsers
- ✅ Execute Tests
- ✅ Publish HTML Report
- ✅ Publish Allure Report
- ✅ Archive Reports

---

# 🌍 Environment

Environment variables are stored inside

```
env/url.env
```

Example

```env
BASE_URL=https://lms-smartcliff.vercel.app/login
BROWSER=chromium
```

---

# 👨‍💻 Team

| Member | Responsibility |
|---------|----------------|
| 👨‍💻 Muhindhar | Member |
| 👩‍💻 Malavicka | Team Lead |
| 👨‍💻 Vetri | Member |
| 👩‍💻 Mylambigai | Member |
| 👩‍💻 Shobana | Member |

---

# 📈 Reports Preview

- 📊 Multiple Cucumber HTML Report
- 📊 Allure Report
- 📊 Jenkins Dashboard

---

# 🤝 Contributing

1. Fork Repository

2. Create Feature Branch

```bash
git checkout -b feature-name
```

3. Commit

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Create Pull Request

---

<div align="center">

## ⭐ If you like this project, give it a Star ⭐

Made with ❤️ using Playwright + TypeScript + Cucumber

</div>
