import React from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';

const MySectionList = () => {
  const data = [
    {
      title: 'Section 1',
      data: [
        { key: '1', name: 'Item 1' },
        { key: '2', name: 'Item 2' },
      ],
    },
    {
      title: 'Section 2',
      data: [
        { key: '3', name: 'Item 3' },
        { key: '4', name: 'Item 4' },
      ],
    },
    // Add more sections here
  ];

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
    <Text style={{fontSize:28, padding: 5}}>Sction List</Text>
    <SectionList
      sections={data}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={item => item.key}
    />
    </View>

  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 10,
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MySectionList;
