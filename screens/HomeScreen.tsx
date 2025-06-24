import { ScrollView, View, Text } from 'react-native';
import { products } from '../mock/product';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ScrollingLogos from 'components/ScrollingLogos';

export default function HomeScreen() {
  return (
    <ScrollView className="bg-[#FFFAF0]" showsVerticalScrollIndicator={false}>
      <Header />
      <Banner />

      <View className="px-4 pt-4">
        <Text className="text-[#004738] text-3xl text-center font-bold mb-1">Compare Prices</Text>
        <Text className="text-[#004738] text-md text-center mb-2">Get lowest and fastest delivery across apps</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollView>
         <ScrollingLogos/>
      </View>
    </ScrollView>
  );
}
