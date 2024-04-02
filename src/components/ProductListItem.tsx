import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../utils/type";


type ProductListItemProps = {
  product: Product
}

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';


export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image ?? defaultPizzaImage }} style={styles.image}
        resizeMode="contain" />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    // margin: 5,
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