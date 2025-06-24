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
    <View className="flex-1 justify-center px-6 bg-[#FFFAF0]">
      <Text className="text-2xl text-[#004738] font-bold mb-4">Almost There!</Text>
      <Text className="text-lg">Let’s Get You the Best Deal </Text>
      <Text className="text-lg mb-4">on Your Next Purchase !</Text>
      <TextInput
        className="border p-3 rounded mb-4"
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Otp')}
        className="bg-[#CBD402] p-4 rounded-2xl"
      >
        <Text className="text-center font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
