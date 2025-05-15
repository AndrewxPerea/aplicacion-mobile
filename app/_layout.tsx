import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { Slot, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { tokenCache } from '@/lib/clerk';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.replace('/login');
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return null; // O un loading indicator
  }

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <SignedIn>
        <RequireAuth>
          <Slot />
        </RequireAuth>
      </SignedIn>
      <SignedOut>
        {/* Muestra la pantalla de login cuando está desconectado */}
        <Slot />
      </SignedOut>
    </ClerkProvider>
  );
}
