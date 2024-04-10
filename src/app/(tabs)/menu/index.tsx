
import products from '@/assets/data/products';
import { ProductListItem } from '@/src/components/ProductListItem';
import { FlatList } from 'react-native';

//flatlist helps render infinite scrollable lists
//flatlist has 2 required properties: data and rendereItem
//render item should be a function that tells flatlist how each item should be rendered
export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}


