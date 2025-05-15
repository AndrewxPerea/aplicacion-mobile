import { useUser } from '@clerk/clerk-expo';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil de {user?.fullName}</Text>
    </View>
  );
}
