import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MapPinIcon, MicIcon, SearchIcon } from 'lucide-react-native';

export default function Header() {
  return (
    <View className="bg-[#004738] px-4 pt-14 pb-6">
      {/* Location */}
      <View className="flex-row items-center mb-3">
        <MapPinIcon color="#FFFAF0" size={18} />
        <Text className="text-[#FFFAF0] text-sm ml-2">Delhi, India</Text>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-[#FFFAF0] rounded-2xl px-3 py-2">
        <SearchIcon color="#004738" size={18} />
        <TextInput
          className="flex-1 ml-2 text-sm text-[#004738]"
          placeholder='Search “ice -cream”'
          placeholderTextColor="#004738"
        />
        <TouchableOpacity>
          <MicIcon color="#004738" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
