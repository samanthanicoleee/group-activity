# 4th Year Student Portal - Section Schedule App

A simple multi-page React Native application built with Expo Router for displaying section schedules.

---

## Group Members & Contributions

* **Mata, Samantha Nicole**: `app/(tabs)/index.tsx` — Main portal screen architecture, section list encoding (BSIT 4A-4I), and dynamic route navigation logic
* **Avila, James**: `details.tsx` — Schedule data collection & encoding for Sections G, F, and E
* **Sipe, Matt Mitchel**: `details.tsx` — Schedule data collection & encoding for Sections I, A, and B
* **Ortiz, Brent Hans**: `details.tsx` — Schedule data collection & encoding for Sections C, D, and H
* **Amancio, Tedgie Boy**: `details.tsx` — Saturday schedule encoding & overall card/UI layout styling
* **Cola, Lemuel**: `app/(tabs)/_layout.tsx` & `README.md` — Navigation design & project documentation

---

## Features & Architecture
- **Master-Detail Pattern**: Uses `index.tsx` as the main section selector and `details.tsx` for schedule details.
- **Dynamic Routing**: Passes `sectionId` parameters between screens using Expo Router.
- **Fallback Logic**: Displays a *"No available schedule"* message for sections/days without schedule data to prevent app crashes.

---

## Tech Stack
- **Framework**: React Native with Expo Router
- **Language**: TypeScript
- **Version Control**: Git & GitHub

---

## How to Run
1. Install dependencies:
   ```bash
   npm install