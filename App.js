import React from 'react';
import { registerRootComponent } from 'expo';
import Index from './app/index'; // Assuming index.tsx is your main entry point in the app folder

export default function App() {
  return <Index />;
}

// Register the main component as the root component
registerRootComponent(App);
