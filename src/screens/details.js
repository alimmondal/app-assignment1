import { View, StyleSheet, Pressable, Linking, Image } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../themes/colors';
import { spacing } from '../themes/spacing';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Details({ route }) {
  const planet = route.params.planet;
  const { name, description, price, title, gPrice } = planet;
  console.log('pNet', planet);

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.view1}>
          <Image
            source={require('../../assets/img/Media.png')}
            style={{ height: 250, width: '100%' }}
            resizeMode="cover"
          />
        </View>

        <View style={styles.view2}>
          <View style={styles.detailsView}>
            <Text preset="h1" style={styles.name}>
              {name}
            </Text>
            <Text preset="h3" style={styles.price}>
              {price}{' '}
              <span style={{ color: 'gray', fontWeight: 'normal' }}>
                E/price
              </span>
            </Text>
            <Text preset="small" style={styles.gPrice}>
              {gPrice} <span style={{ color: '#06BE77' }}>gr/price</span>
            </Text>
            <Text preset="h4" style={styles.title}>
              {title}
            </Text>
            <Text style={styles.desc}>{description}</Text>
          </View>
          <View style={styles.cartGroup}>
            <Pressable
              onPress={() => {
                alert('Be careful?');
              }}
            >
              <View style={styles.loveIcon}>
                <EvilIcons name="heart" size={30} color="black" />
              </View>
            </Pressable>
            <View>
              <Pressable
                onPress={() => {
                  alert('Check your cart item?');
                }}
              >
                <View style={styles.cart}>
                  <AntDesign name="shoppingcart" size={20} color="white" />
                  <Text style={{ color: 'white', fontSize: 15 }}>
                    ADD TO CART
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: spacing[4],
  },
  view1: {
    flex: 1,
  },

  view2: {
    flex: 2,
    borderTopWidth: 1,
    borderRadius: 30,
    backgroundColor: '#F6F5F5',
  },

  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[4],
    alignItems: 'flex-start',
  },

  name: {
    textTransform: 'capitalize',
    textAlign: 'center',
  },

  price: {
    marginTop: spacing[4],
  },
  gPrice: {
    marginTop: spacing[4],
    color: '#06BE77',
  },

  desc: {
    textAlign: 'start',
    marginTop: spacing[4],
    lineHeight: 21,
  },

  source: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: spacing[4],
  },

  title: {
    marginTop: spacing[4],
    fontWeight: 'bold',
    lineHeight: 21,
  },

  cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textTransform: 'uppercase',
    color: colors.white,
    height: 56,
    width: 200,
    backgroundColor: '#0BCE83',
    borderRadius: 10,
  },
  loveIcon: {
    backgroundColor: colors.white,
    width: 78,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
