# Pomodoro Pro 🍅

A professional, high-precision desktop Pomodoro application built with **Tauri**, **Vanilla JS**, and **Rust**.

![Pomodoro Pro Icon](/Users/zeus/.gemini/antigravity/brain/0e9a97ca-43c3-4500-82fe-11081de6149b/transparent_tomato_final.png)

## Features

- **High Precision:** Uses timestamp-based logic (`Date.now()`) to ensure the timer remains accurate even in the background.
- **Premium Aesthetics:** Modern pastel palette (#809BCE), glassmorphism effects, and fluid responsive scaling.
- **Custom Branding:** Large, friendly cartoon tomato icon with a transparent background.
- **Smart Cycles:** 4 work sessions followed by an automatic 15-minute long break.
- **Audio Alerts:** Elegant double-beep sound notification at the end of each session.
- **System Tray:** Quick access from the macOS Menu Bar / Windows Tray.
- **Multi-platform:** Automated builds for macOS (.dmg) and Windows (.exe) via GitHub Actions.

## Development

```bash
npm install
npm run tauri dev
```

## Build

### Local (macOS)
```bash
npm run tauri build
```

### Automated (Multi-platform)
To trigger a build for all platforms on GitHub:
1. Tag a version: `git tag v0.1.0`
2. Push the tag: `git push origin v0.1.0`
3. Download the assets from the **Releases** section on GitHub.
