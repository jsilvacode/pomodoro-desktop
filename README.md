# Pomodoro Pro 🍅

A professional, high-precision desktop Pomodoro timer built with **Tauri v2**, **Vanilla JS/HTML/CSS**, and **Rust**.

## Features

- **High-Precision Timer:** Timestamp-based logic (`Date.now()`) keeps the timer accurate even when the window is in the background.
- **Smart Cycles:** 4 × 25-minute focus sessions, each followed by a 5-minute short break. After 4 cycles, a 15-minute long break is triggered automatically.
- **Audio Alerts:** Elegant double-beep notification (Web Audio API) plays at the end of every session.
- **Dark Mode:** One-click theme toggle with smooth transitions; preference is saved in `localStorage`.
- **System Tray:** Minimizes to the macOS Menu Bar or Windows System Tray; click the icon or choose *Show Pomodoro* to restore the window.
- **PWA Support:** Includes a Service Worker and Web App Manifest so the app can be installed directly from a browser on desktop or mobile.
- **Premium UI:** Glassmorphism card, pastel palette, JetBrains Mono timer font, and fully responsive `vmin`-based layout.
- **Multi-platform:** Automated builds for macOS (.dmg) and Windows (.exe) via GitHub Actions.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Desktop shell | [Tauri v2](https://tauri.app) |
| Frontend | Vanilla HTML / CSS / JavaScript |
| Backend | Rust (tray icon, window management) |
| CI/CD | GitHub Actions (macOS + Windows) |

## Development

```bash
npm install
npm run tauri dev
```

> **Requirements:** [Rust](https://rustup.rs) stable toolchain + Node.js LTS.

## Build

### Local
```bash
npm run tauri build
```

### Automated (multi-platform via GitHub Actions)
1. Tag a release: `git tag v1.0.0`
2. Push the tag: `git push origin v1.0.0`
3. The **Release** workflow builds installers for macOS and Windows automatically.
4. Download the assets from the **Releases** section on GitHub.

## Project Structure

```
pomodoro-desktop/
├── src/                  # Frontend (HTML, CSS, JS, PWA assets)
│   ├── index.html        # Main UI — timer, controls, dark-mode, PWA install prompt
│   ├── sw.js             # Service Worker
│   └── manifest.json     # Web App Manifest
└── src-tauri/            # Rust / Tauri backend
    ├── src/lib.rs        # Tray icon, window management, Tauri commands
    └── tauri.conf.json   # App config (window size, bundle settings)
```
