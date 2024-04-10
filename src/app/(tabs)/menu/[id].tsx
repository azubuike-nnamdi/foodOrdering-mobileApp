import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import products from '@/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'
import { sizes } from '@/src/utils/data'
import Button from '@/src/components/common/Button'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState('M')

  const product = products.find(product => product.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>
  }

  const addToCart = () => {
    console.warn("adding to cart, size : ", selectedSize)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Details " + product?.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {
          sizes?.map(size => (
            <Pressable
              onPress={() => setSelectedSize(size)}
              key={size}
              style={[styles.size, { backgroundColor: selectedSize === size ? 'gainsboro' : 'white' }]}>
              <Text style={[styles.sizeText, { color: selectedSize === size ? 'black' : 'gray' }]} >{size}</Text>
            </Pressable>
          ))
        }
      </View>
      <Text style={styles.desc}>  {product?.desc} </Text>
      <Text style={styles.price}> Price {product?.price} </Text>
      <Button
        onPress={addToCart}
        text={"Add to cart"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  },
  desc: {
    fontSize: 14,
    marginTop: 9,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto'
  },
})

export default ProductDetailsScreen