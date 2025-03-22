---
name: "University Student Companion App"
desc: |
  The primary goal of this project is to develop a mobile application version  
  of [REDACTED] academic information system to enhance user accessibility.  
  This application will provide students with seamless access to  
  academic-related information anytime, anywhere.
from: 2020-01-01
to: 2021-01-01
workType: "Professional"
roles: ["Mobile Developer"]
stacks: ["Flutter", "Dart"]
portfolio:
  [
    { type: "Play Store", url: "https://google.com" },
    { type: "App Store", url: "https://google.com" },
  ]
---

# Overview

The **University Student Companion App** is designed to simplify university life by integrating essential academic services into a single platform. With features like **QR code-based attendance tracking, personalized schedules, tuition fee management, and academic transcript access**, students can focus on their studies without administrative hassle.

This app was built using **Flutter (Dart)** with a **Go backend** and **WebSocket** for real-time updates.

---

# Key Features

✅ **QR Code Attendance Tracking** – Scan a QR code in class to mark attendance automatically.  
✅ **Personalized Schedule** – View and manage your weekly class schedule dynamically.  
✅ **Study Plan Management** – Register for courses and track progress within the app.  
✅ **Tuition Payment Tracker** – View pending payments, track payment history, and get reminders.  
✅ **Academic Transcript Access** – Instantly view and download your grade history.  
✅ **Push Notifications** – Get reminders for class schedules, tuition due dates, and exam schedules.

---

# Process Challenges

## 1️⃣ Designing the Architecture

- Implemented **Clean Architecture** for better maintainability.
- Used **modularization** to separate authentication, academic services, and payments.

## 2️⃣ Implementing QR Code Attendance

- Integrated **Google’s ML Kit** for QR scanning.
- Faced a challenge with **poor camera focus on some devices**, leading to scan failures.
- **Solution:** Implemented **adaptive brightness & manual focus toggle** for better accuracy.

## 3️⃣ Handling Real-Time Updates

- Used **WebSocket with Go backend** for instant attendance and schedule updates.
- Issue: Unstable WebSocket connections during **network switching** (Wi-Fi ↔ mobile data).
- **Solution:** Implemented **reconnect logic with exponential backoff** to maintain connection stability.

## 4️⃣ Secure Tuition Payment Tracking

- Integrated **Midtrans API** for in-app tuition payments.
- Used **JWT and hashing techniques** to ensure secure payment verification.
- Challenge: Some transactions were **not reflected immediately** due to bank delays.
- **Solution:** Added **manual sync button** and background job to auto-refresh payment status.

---

# Conclusions

🔹 Building a **modular, scalable** app made future feature expansion easier.  
🔹 Implementing **WebSocket for real-time updates** improved user experience but required **robust reconnection handling**.  
🔹 **Adaptive UI/UX testing** helped resolve issues across different Android devices.  
🔹 Secure and **reliable payment integration** required handling **transaction delays** effectively.  
🔹 The app significantly **reduced administrative overhead** by digitizing attendance and tuition tracking.

---

# Final Thought

This project was a **game-changer for students**, making their academic life more organized and **digitally connected**. Future improvements could include **AI-powered study recommendations** and **automated reminders based on performance analytics**.
