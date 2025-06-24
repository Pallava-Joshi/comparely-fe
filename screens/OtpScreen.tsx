import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

type StackParamList = { Home: undefined };
type NavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

const CELL_COUNT = 6;

export default function OtpScreen() {
  const [value, setValue] = useState('');
  const navigation = useNavigation<NavigationProp>();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  return (
    <View className="flex-1 justify-center items-center px-4 bg-white">
      <Text className="text-xl font-bold mb-6">You're One Step Away!</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={{ marginBottom: 20 }}
        keyboardType="number-pad"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            className={`border w-10 h-12 rounded justify-center items-center mx-1 ${isFocused ? 'border-black' : 'border-gray-400'}`}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text className="text-xl">{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="bg-yellow-400 p-4 rounded mt-4 w-full"
      >
        <Text className="text-center font-bold">Verify</Text>
      </TouchableOpacity>
    </View>
  );
}
