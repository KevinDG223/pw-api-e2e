# 🚀 API Automation Framework with Playwright

Production-style API testing framework featuring service-layer architecture, schema validation, and CI/CD integration.


## 🧭 Overview

This project demonstrates a production-style API automation framework designed to be:

✔ Scalable  
✔ Maintainable  
✔ Reusable  
✔ CI-ready  

It follows a layered architecture similar to what is used in real QA Automation teams.


## 🏗️ Architecture

```text
                                            Test Specs (Playwright)
                                                      ↓
                                          Service Layer (ProductClient)
                                                      ↓
                                        Request Handler (HTTP abstraction)
                                                      ↓
                                        --------------------------------
                                        |   Schema Validation (AJV)    |
                                        |   Logging (API Logger)       |
                                        --------------------------------
                                                      ↓
                                                External API
```

### ⚙️ Tech Stack
- 🧪 Playwright (API Testing)
- 📦 TypeScript
- 📄 AJV JSON Schema Validator (Schema validation)
- 🔁 GitHub Actions (CI/CD)


### ✨ Key Features

- Custom Request Handler (centralized API logic)
-  Service Layer abstraction (clean test design)
-  JSON Schema validation for API contracts
-  Token-based authentication
-  Structured logging system
-  Environment-based configuration
-  End-to-End API workflows
-  CI pipeline execution


### 🧪 Test Strategy

This framework includes both:

🔹 Functional API Tests
- Endpoint validation (GET, POST, PUT, DELETE)
- Status code validation
- Schema validation

🔹 End-to-End Workflow

- Create Product → Get Product → Update Product → Delete Product
- Validates full resource lifecycle
- Uses dynamic test data
- Ensures real-world coverage


### 🔐 Authentication Flow
- POST /auth/login → accessToken → used in subsequent requests
- Token generated dynamically
- Integrated into request layer
- Designed for reuse across tests


### ▶️ Running the Tests
- Install dependencies
- npm install
- Execute tests
- npx playwright test
- Run with environment
- TEST_ENV=qa npx playwright test

## 📸 Test Execution
<img width="758" height="171" alt="image" src="https://github.com/user-attachments/assets/b937f658-b80e-427e-b99a-ac8d10f311d4" />

### 🔁 CI/CD Pipeline

This project uses GitHub Actions to automatically validate API behavior on every commit.

Pipeline includes:
- Dependency installation
- Automated API test execution
- Schema validation enforcement

✔ Ensures reliability  
✔ Prevents regressions  
✔ Simulates real QA workflows  

## 📸 CI Pipeline
<img width="1021" height="115" alt="image" src="https://github.com/user-attachments/assets/c3d0fbbf-b926-43d3-8105-b65461abd437" />

## 📊 Test Report (Allure)

The framework integrates Allure Report to visualize test execution results and ensure reliability.

✔  100% test pass rate  
✔  Suite-level visibility  
✔  Clear execution metrics   

## 📸 Allure Report
<img width="862" height="414" alt="image" src="https://github.com/user-attachments/assets/7b6de720-fa92-4e2f-9a67-88a394c5ebde" />


## 🎯 What This Project Demonstrates

- Real-world API automation framework design
- Clean architecture using service-layer pattern
- Contract validation using JSON schemas
- Scalable and maintainable test structure
- CI/CD integration with automated test execution






