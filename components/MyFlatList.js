import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import imageAudi from './imageAudi.jpg';

const MyFlatList = () => {
  const data = [
    {
      key: '1',
      name: 'Item 1',
      description: 'Ye item 1 hai',
      category: 'Category A',
      price: 100,
      image: imageAudi,
    },
    {
      key: '2',
      name: 'Item 2',
      description: 'Item 2 ke liye',
      category: 'Category B',
      price: 150,
      image: imageAudi, 
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={{ width: 200, height: 150 }} />
      <Text style={{fontSize:24}}>{item.name}</Text>
      <Text style={{}}>{item.description}</Text>
      <Text>{item.price}</Text>
      <Text>{item.category}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 28, padding: 5 }}>Flat List</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyFlatList;
