# Zync App

A social media application built with React Native and Expo, featuring onboarding flows, newsfeeds, and interactive content.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager (comes with Node.js)
- **Expo Go app** on your phone:
  - [iOS - Download from App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android - Download from Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Zync-App
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React Native 0.81.5
- Expo SDK 54
- NativeWind for styling
- React Navigation
- Expo Router
- And other dependencies

### 3. Start the Development Server

```bash
npm start
# or
npx expo start
```

This will start the Expo development server and display a QR code in your terminal.

## 📱 Running on Your Phone with Expo Go

### For iOS:

1. Open the **Expo Go** app on your iPhone
2. Tap on **Scan QR Code**
3. Point your camera at the QR code displayed in your terminal
4. The app will load and run on your device

### For Android:

1. Open the **Expo Go** app on your Android phone
2. Tap on **Scan QR code**
3. Point your camera at the QR code displayed in your terminal
4. The app will load and run on your device

**Alternative method:** If you're on the same Wi-Fi network, you can also:
- Type the URL shown in the terminal directly into the Expo Go app
- Or send yourself the link via email/message and open it in Expo Go

### Troubleshooting Connection Issues:

If you can't connect to the development server:

1. **Ensure same network:** Make sure your phone and computer are on the same Wi-Fi network
2. **Try tunnel mode:** Run with tunnel connection:
   ```bash
   npx expo start --tunnel
   ```
3. **Check firewall:** Ensure your firewall isn't blocking the connection
4. **Restart the server:** Press `r` in the terminal to reload, or stop and restart the dev server

## 🛠️ Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator (Mac only)
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
app/                      # Main application screens (using Expo Router)
├── (onboarding)/        # Onboarding flow screens
├── (newsfeed)/          # Newsfeed feature screens
└── _layout.tsx          # Root layout

components/              # Reusable React components
├── newsfeed/           # Newsfeed-specific components
├── onboarding/         # Onboarding-specific components
└── ui/                 # Shared UI components

context/                # React Context providers
├── OnboardingContext.tsx
└── UserContext.tsx

hooks/                  # Custom React hooks
types/                  # TypeScript type definitions
assets/                 # Images, fonts, icons
constants/              # App constants and configurations
```

## 🎨 Key Features

- **Onboarding Flow:** Welcome screens and sign-in process
- **Newsfeed:** Social media feed with posts and interactions
- **AI Summary:** AI-powered content summaries
- **NativeWind:** Tailwind CSS for React Native styling
- **Expo Router:** File-based routing system

## 🔧 Development

This project uses:
- **TypeScript** for type safety
- **NativeWind** for styling with Tailwind CSS
- **Expo Router** for navigation
- **React Context** for state management

To start developing, edit files in the `app/` directory. The app uses file-based routing, so creating new files in the `app/` directory automatically creates new routes.

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [NativeWind Documentation](https://www.nativewind.dev/)

## 🤝 Support

If you encounter any issues:
1. Check the [Expo documentation](https://docs.expo.dev/)
2. Visit the [Expo forums](https://forums.expo.dev/)
3. Join the [Expo Discord](https://chat.expo.dev)
