import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tasks = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ffff',
    marginBottom: 15,
    borderRadius: 14,
  },
  text: {
    fontSize: 16,
    width: 354,
    height: 128,
    fontWeight: '700',
    paddingTop: 50
  },
});

export default Tasks;
