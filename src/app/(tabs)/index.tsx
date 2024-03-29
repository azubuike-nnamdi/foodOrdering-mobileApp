import { Image, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const product = products[0]

const ProductListItem = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View> 
  );
}

export default function TabOneScreen() {
  return (
    <ProductListItem />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: Colors.light.tint,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  }
});
