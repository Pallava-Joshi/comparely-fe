import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { products } from '../mock/product';

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

export default function ProductDetailScreen() {
  const { params } = useRoute<ProductDetailsRouteProp>();
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Image source={{ uri: product.image }} className="w-full h-48 rounded mb-4" resizeMode="contain" />
      <Text className="text-lg font-bold mb-2">{product.title}</Text>
      <View className="flex-row flex-wrap gap-2 mb-4">
        {product.tags.map((tag) => (
          <Text key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">{tag}</Text>
        ))}
      </View>

      <View className="space-y-2">
        {product.stores.map((store) => (
          <View key={store.name} className="flex-row justify-between items-center bg-gray-100 p-2 rounded">
            <Text className="capitalize font-medium">{store.name}</Text>
            <Text>{store.available ? `₹${store.price}` : 'Unavailable'}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity className="bg-green-500 mt-6 p-3 rounded">
        <Text className="text-white text-center font-bold">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
