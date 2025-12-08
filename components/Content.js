import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import ItemInput from './ItemInput';
import ShopListItem from './ShopListItem';
import { useEffect, useState } from 'react'; 
import { useSQLiteContext } from 'expo-sqlite';

export default function Content() {
    const db = useSQLiteContext();
    const [items, setItems] = useState([]);

    async function getAllItems() { 
     const allItems= await db.getAllAsync(
        `SELECT * FROM ShopListItem`
      );
      setItems(allItems)
}
async function addItem(enteredItemText) {
    await db.runAsync(
     `INSERT INTO ShopListItem (title) VALUES (?)`,
     [enteredItemText]
    );
    getAllItems();
}

useEffect(() => {
    getAllItems();
  }, [db]);

  return (
    <View style={styles.container}> 
      <View >
        <ItemInput
         onPress ={
            (enteredText) => {addItem(enteredText)}
         }
         />
      </View>

      <View style={styles.listContainer}>
        <FlatList 
        data={items}
        renderItem={
        ({item}) => (<ShopListItem title={item.title}/>)
      }
      keyExtractor={item => item.id}
      />
      </View>
    <StatusBar style="auto"/>
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
