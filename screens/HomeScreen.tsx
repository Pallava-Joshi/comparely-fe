import { ScrollView, View } from 'react-native';
import { products } from '../mock/product';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <ScrollView className="bg-[#FFFAF0]">
      <Header />
      <View className="pb-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
}
