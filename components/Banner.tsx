import { Image, View } from 'react-native';

export default function Banner() {
  return (
    <View className="px-4 mt-4">
      <Image
        source={require('../assets/Banner1.png')}
        className="w-full h-40 rounded-2xl"
        resizeMode="cover"
      />
    </View>
  );
}
