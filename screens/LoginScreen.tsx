import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = { Otp: undefined };
type NavigationProp = NativeStackNavigationProp<StackParamList, 'Otp'>;

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-4">Almost There!</Text>
      <TextInput
        className="border p-3 rounded mb-4"
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Otp')}
        className="bg-yellow-400 p-4 rounded"
      >
        <Text className="text-center font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
