import { StyleSheet, Text, View, FlatList, } from 'react-native';
import ItemInput from './components/ItemInput';
import ShopListItem from './components/ShopListItem';
import { useState } from 'react';

export default function App() {
const [items,setItems] = useState([
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pan',
  },
 {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Leche',
  },
  {
   id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jamón',
   },
  ]);

  return (
    <View style={styles.container}> 
      <View >
        <ItemInput
        onPress={(enteredText) => {
          setItems(currentItems => [...currentItems,
            {
              id: Math.random().toString(),
              title: enteredText,
            }
          ])
        }}
         />
      </View>

      <View style={styles.listContainer}>
        <FlatList 
        data={items}
        renderItem={
        // ({item}) => (<Text>{item.title}</Text>)
        ({item}) => (<ShopListItem title={item.title}/>)
      }
      keyExtractor={item => item.id}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 32,
    gap: 8,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  item: {
    backgroundColor: '#b751c3ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
