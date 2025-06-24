import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Product } from '../mock/product';

import BlinkitLogo from '../assets/stores/blinkit.png';
import ZeptoLogo from '../assets/stores/zepto.png';
import InstamartLogo from '../assets/stores/instamart.png';

import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  product: Product;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;

const storeColors: Record<string, string> = {
  blinkit: '#FACC15',     // yellow
  zepto: '#9333EA',       // purple
  instamart: '#FB923C',   // orange
};

const storeLogos: Record<string, any> = {
  blinkit: BlinkitLogo,
  zepto: ZeptoLogo,
  instamart: InstamartLogo,
};

export default function ProductCard({ product }: Props) {
  const navigation = useNavigation<NavigationProp>();
  const [liked, setLiked] = useState(false);

  const availableStores = product.stores.filter((s) => s.available);
  const sortedStores = [...availableStores].sort((a, b) => a.price - b.price);
  const lowestStore = sortedStores[0];
  const otherStores = sortedStores.slice(1);
  const storeColor = storeColors[lowestStore.name] || '#000';

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
      className="bg-white rounded-xl border border-gray-300 p-4 mr-4 w-48 relative"
    >
      {/* Heart Icon */}
      <TouchableOpacity
        onPress={() => setLiked(!liked)}
        className="absolute top-2 right-2 z-10"
      >
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={20}
          color={liked ? 'red' : 'gray'}
        />
      </TouchableOpacity>

      {/* Product Image */}
      <Image
        source={product.image}
        className="w-full h-24 mb-2 rounded"
        resizeMode="contain"
      />

      {/* Product Title and Tags */}
      <Text className="text-sm font-semibold text-[#004738] mb-1">{product.title}</Text>
      <Text className="text-xs text-gray-600 mb-1">{product.tags.join(', ')}</Text>

      {/* Star Rating */}
      <View className="flex-row items-center mb-1">
        {[...Array(3)].map((_, i) => (
          <Ionicons
            key={i}
            name="star"
            size={14}
            color={storeColor}
            style={{ marginRight: 2 }}
          />
        ))}
      </View>

      {/* Lowest Price + Add Button */}
      <View className="flex-row items-center bg-[#FFFAF0] p-1 rounded-lg justify-between mb-2">
        <View className="flex-row items-center">
          <Image
            source={storeLogos[lowestStore.name]}
            style={{ width: 20, height: 20, marginRight: 4 }}
            resizeMode="contain"
          />
          <Text className="text-[#004738] font-bold text-sm">₹{lowestStore.price}</Text>
        </View>

        <TouchableOpacity className="bg-green-500 w-7 h-7 rounded-lg items-center justify-center">
          <Text className="text-white text-lg font-bold">+</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="border-t border-gray-200 my-2" />

      {/* Other Stores - Side by Side */}
      <View className="flex-row gap-2 flex-wrap">
        {otherStores.map((store) => (
          <View
            key={store.name}
            className="flex-row items-center bg-gray-100 rounded px-1 py-[2px]"
          >
            <Image
              source={storeLogos[store.name]}
              style={{ width: 14, height: 14, marginRight: 2 }}
              resizeMode="contain"
            />
            <Text className="text-[10px] text-gray-600">₹{store.price}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}
