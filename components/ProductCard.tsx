import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../mock/product';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  product: Product;
};

const storeColors: Record<string, string> = {
  blinkit: 'bg-yellow-300',
  zepto: 'bg-pink-200',
  jio: 'bg-blue-200',
  instamart: 'bg-orange-200',
};

export default function ProductCard({ product }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="bg-white p-4 rounded-xl mb-4 mx-4 shadow-sm">
      <View className="flex-row items-center">
        <Image source={{ uri: product.image }} className="w-20 h-20 rounded-md" />
        <View className="ml-4 flex-1">
          <Text className="text-base font-semibold">{product.title}</Text>
          <View className="flex-row flex-wrap gap-1 mt-1">
            {product.tags.map((tag) => (
              <Text key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {tag}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <View className="mt-4 space-y-2">
        {product.stores.map((store) => (
          <View
            key={store.name}
            className={`flex-row justify-between items-center px-3 py-2 rounded-md ${storeColors[store.name]}`}
          >
            <Text className="font-medium capitalize">{store.name}</Text>
            <Text className="font-semibold">
              ₹{store.available ? store.price : '--'}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
        className="mt-4 bg-green-500 py-2 rounded"
      >
        <Text className="text-center text-white font-bold">View</Text>
      </TouchableOpacity>
    </View>
  );
}
