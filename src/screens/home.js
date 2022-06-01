import { View, StyleSheet, FlatList, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../themes/colors';
import { PRODUCT_LIST } from '../data/product-list';
import { spacing } from '../themes/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', { planet: item });
      }}
    >
      <View style={styles.itemName}>
        <Text style={{ display: 'none' }}>{name}</Text>
        <Text style={{ color: 'white' }}>Order Now</Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function Home() {
  const [list, setList] = useState(PRODUCT_LIST);
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.view1}>
          <View>
            <Image
              source={require('../../assets/img/logo.png')}
              style={styles.logo}
            />
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.dIcon}>
            <Image
              source={require('../../assets/img/Vector.png')}
              style={{ height: 40, width: 40 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text
              preset="h2"
              style={{ width: 150, textAlign: 'center', marginBottom: 20 }}
            >
              Non-Contact Deliveries
            </Text>
          </View>
          <View>
            <Text preset="small" style={{ marginHorizontal: 20 }}>
              When placing an order, select the option "Contactless deliveries"
              and the courier will leave the order at the door.
            </Text>
          </View>
          <View>
            <FlatList
              contentContainerStyle={styles.list}
              data={list}
              keyExtractor={(item) => item.name}
              renderItem={renderItem}
            />
          </View>

          <View>
            <Pressable
              onPress={() => {
                alert('Are you sure?');
              }}
            >
              <Text style={{ color: 'black' }}>DISMISS</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.violet,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopColor: colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F5F5',
    textAlign: 'center',
  },
  logo: {
    width: 63,
    height: 63,
    left: 10,
    top: 40,
  },
  dIcon: {
    backgroundColor: colors.white,
    padding: spacing[8],
    borderRadius: 70,
    overflow: 'hidden',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // padding: spacing[4],
  },
  itemName: {
    textTransform: 'uppercase',
    marginHorizontal: spacing[4],
    color: colors.white,
    padding: 15,
    width: 300,
    backgroundColor: '#0BCE83',
    borderRadius: 10,
  },

  list: {
    padding: spacing[4],
  },
});
