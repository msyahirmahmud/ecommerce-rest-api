# 🛍️ E-Commerce REST Microservice API

[![Build Status](https://github.com/msyahirmahmud/ecommerce-rest-api/actions/workflows/ci.yml/badge.svg)](https://github.com/msyahirmahmud/ecommerce-rest-api/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org)
[![Tests Passing](https://img.shields.io/badge/Tests-100%25-brightgreen.svg)]()

> RESTful E-Commerce Microservice API supporting JWT authentication, category filtering, cart management, and health check diagnostics.

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status |
| `GET` | `/api/products` | Retrieve catalog products |
| `POST` | `/api/cart` | Add product to user cart |
| `POST` | `/api/auth/login` | Authenticate & get JWT token |

---

## 🧪 Testing & Execution

```bash
git clone https://github.com/msyahirmahmud/ecommerce-rest-api.git
cd ecommerce-rest-api
npm start
```

Run unit test suite:
```bash
npm test
```

---

## 📄 License

[MIT License](LICENSE)
