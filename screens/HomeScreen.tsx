import { ScrollView, View, Text } from 'react-native';
import { products } from '../mock/product';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  return (
    <ScrollView className="bg-[#FFFAF0]">
      <View className="pt-12 pb-6">
        <Text className="text-center text-xl font-bold mb-4">Compare Prices</Text>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
}
