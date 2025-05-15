// app/login.tsx
import React from 'react';
import { SignedIn } from '@clerk/clerk-expo';

export default function LoginScreen() {
  return <SignedIn path="/login" routing="path" />;
}
