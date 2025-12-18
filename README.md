# The Boland Index

A standalone, web-based assessment tool for evaluating the five pillars of longevity: **Nutrition, Movement, Sleep, Social Connection, and Purpose**.

## 🚀 Live Demo
Once deployed, your site will be available at: `https://<your-username>.github.io/boland-index/`

## 🛠 Features
- **50-Question Assessment**: Deep dive into the 5 pillars of health.
- **Dynamic Visualization**: Real-time Radar Chart results using Recharts.
- **Privacy First**: Scores are saved to your browser's local storage.
- **Optional Sync**: Integrated webhook support to send results to Google Sheets (via Zapier/Make).
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop.

## 📦 Deployment via GitHub Pages
This repository is pre-configured for automated deployment:
1. Push this code to a public GitHub repository.
2. Go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. The site will build and deploy automatically every time you push a change.

## ⚙️ Configuration
To sync your data to a spreadsheet:
1. Open `App.tsx`.
2. Find the `WEBHOOK_URL` constant.
3. Replace the placeholder with your own URL from Zapier, Make.com, or Pipedream.

## 📝 Disclaimer
The Boland Index is a theoretical framework for educational purposes and has not been clinically validated. It is not a substitute for professional medical advice.
