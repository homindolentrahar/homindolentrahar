---
name: "XYZCare - Hospital Patient App"
desc: |
  XYZCare is a mobile application designed to streamline hospital services for patients.  
  It enables users to book doctor consultations (in-person or via video call),  
  manage consultation payments, request emergency services, and access personal health records.  
  Additional features include a hydration reminder, BMI calculator, and appointment tracking.
from: 2022-05-01
to: 2023-06-01
workType: "Professional"
roles: ["Mobile Developer"]
stacks: ["Flutter", "Dart", "Firebase", "WebRTC"]
portfolio:
  [
    { type: "Play Store", url: "https://play.google.com/xyzcare" },
    { type: "App Store", url: "https://apps.apple.com/xyzcare" },
  ]
---

# Overview

**XYZCare** is a hospital patient app that enhances the healthcare experience by offering **seamless digital services**. It allows users to **book doctor consultations**, either for a **physical visit or a video call**, manage payments, request **emergency services**, and access their **medical records**—all from their smartphones.

This app is built with **Flutter (Dart)** for cross-platform support, **Firebase** for real-time data sync, and **WebRTC** for secure video consultations.

---

# Key Features

✅ **Doctor Consultation Booking** – Schedule appointments for in-person or video consultations.  
✅ **Secure Video Call with Doctors** – HIPAA-compliant WebRTC-based telemedicine service.  
✅ **Consultation Payment Management** – View payment history, make secure transactions, and receive invoices.  
✅ **Emergency Service Request** – Instantly call an ambulance or notify emergency contacts.  
✅ **Health Record Access** – View lab results, prescriptions, and medical history.  
✅ **Hydration Reminder** – Personalized daily water intake tracking.  
✅ **BMI Calculator** – Helps users monitor and maintain a healthy weight.  
✅ **Appointment Tracking** – View upcoming and past medical appointments.

---

# Process Challenges

## 1️⃣ Integrating Real-Time Video Consultation

- Used **WebRTC** for secure doctor-patient video calls.
- Challenge: Some users had **unstable video connections due to poor network conditions**.
- **Solution:** Implemented **adaptive bitrate streaming** and **auto-reconnect** to improve call stability.

## 2️⃣ Secure Handling of Patient Data

- Implemented **end-to-end encryption** for medical records.
- Followed **HIPAA compliance** for data security.

## 3️⃣ Payment Processing for Consultation Fees

- Integrated **Stripe API** for seamless payment processing.
- Challenge: Users with **failed transactions due to weak network**.
- **Solution:** Implemented a **retry mechanism** and **manual confirmation** for pending payments.

## 4️⃣ Emergency Service Request System

- Developed a **one-tap emergency alert** that notifies the nearest hospital.
- Challenge: Ensuring **location accuracy** for ambulance dispatch.
- **Solution:** Used **Google Maps API** with real-time geolocation tracking.

---

# Conclusions

🔹 **Telemedicine adoption is growing**, and integrating video calls required **network optimizations**.  
🔹 Secure patient data handling requires **strong encryption and compliance measures**.  
🔹 **Payment reliability** is critical—**adding a retry feature** reduced failed transactions by 30%.  
🔹 Users appreciated the **hydration reminders and BMI calculator**, making healthcare more engaging.

---

# Final Thought

The **XYZCare** app transformed hospital services by making **healthcare more accessible and patient-friendly**. Future updates could introduce **AI-powered health monitoring** and **smart prescription recommendations**.
