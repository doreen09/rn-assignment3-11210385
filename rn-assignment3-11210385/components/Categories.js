import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Categories = ({ category }) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>{category.name}</Text>
       <Text style={styles.text1}>
        12 tasks
       </Text>
      <Image source={{ uri: category.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor:'white',
    borderRadius: 14,
    padding:10
    
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginBottom: 10,
    justifyContent:'center'
  },
  text1: {
    fontSize: 14,
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Categories;
