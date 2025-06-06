# post-fido2

Passwordless biometric login system using FIDO2/WebAuthn with Node.js, Express, TypeScript, and MySQL — implemented fully on localhost using `@simplewebauthn`.

---

##  What is this project about?

This project is a continuation of the [`pre-fido2`](https://github.com/dagliyunus/pre-fido2) implementation. It replaces the traditional username/password login with **WebAuthn-based passkey authentication**, allowing secure login with **fingerprint, face recognition, or platform authenticators**.

---

##  Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Frontend:** HTML, CSS, Vanilla JS (WebAuthn-compatible)
- **Database:** MySQL
- **Authentication Protocol:** WebAuthn (FIDO2)
- **Libraries Used:**
  - `@simplewebauthn/server`
  - `@simplewebauthn/browser`
  - `express-session`
  - `mysql2`

---

## ⚙ Features

- Passwordless registration and login
- WebAuthn API integration via browser
- Fingerprint or FaceID-based authentication
- Biometric credential stored securely (public key only)
- Resistance to phishing & credential stuffing
- Session-based user login tracking
- Simulated FIDO2 login form phishing failed with `404` as proof

---

## 🖥️ How to Run Locally

```bash
# Clone repo
git clone https://github.com/dagliyunus/post-fido2.git
cd post-fido2

# Install dependencies
npm install

# Initialize DB (or run init-db.sql manually if needed)
docker-compose up -d

# Start server
npm run dev

