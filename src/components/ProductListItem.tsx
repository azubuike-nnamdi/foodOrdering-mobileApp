import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";


export const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
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