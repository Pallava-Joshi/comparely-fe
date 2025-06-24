import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Image,
  View,
  StyleSheet,
  ScrollView as RNScrollView,
} from 'react-native';

import BlinkitLogo from '../assets/logos/blinkit.png';
import ZeptoLogo from '../assets/logos/zepto.png';
import InstamartLogo from '../assets/logos/instamart.png';
import BigBasketLogo from '../assets/logos/bigbasket.png';

const logos = [
  { id: 'blinkit', source: BlinkitLogo },
  { id: 'zepto', source: ZeptoLogo },
  { id: 'instamart', source: InstamartLogo },
  { id: 'bigbasket', source: BigBasketLogo },
  { id: 'blinkit2', source: BlinkitLogo },
  { id: 'zepto2', source: ZeptoLogo },
  { id: 'instamart2', source: InstamartLogo },
  { id: 'bigbasket2', source: BigBasketLogo },
];

export default function ScrollingLogos() {
  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    let scrollValue = 0;
    let scroller: NodeJS.Timeout;

    const totalContentWidth = logos.length * 80;

    const scroll = () => {
      scroller = setInterval(() => {
        scrollValue += 1;

        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: scrollValue, animated: false });
        }

        if (scrollValue >= totalContentWidth) {
          scrollValue = 0;
        }
      }, 16);
    };

    scroll();

    return () => clearInterval(scroller);
  }, []);

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      {logos.map((logo, index) => (
        <View key={logo.id} style={styles.logoWrapper}>
          <Image
            source={logo.source}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      ))}
    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 12,
    marginVertical: 24
  },
  contentContainer: {
    paddingHorizontal: 16,
    marginHorizontal:24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoWrapper: {
    marginRight: 16,
  },
  logo: {
    width: 90,
    height: 40,
  },
});
