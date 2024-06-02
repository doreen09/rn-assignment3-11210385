import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, FlatList, Image } from 'react-native';
import Categories from './components/Categories';
import Tasks from './components/Tasks';


const categories = [
  { name: 'Exercise', image: './assets/womanOne.png' },
  { name: 'Study', image: './assets/exercise.png' },
  { name: ' Experiment', image: './assets/experiment.png' },
  { name: 'Read', image: './assets/read.png' },
  { name: ' Write Codes', image: './assets/code.png' },
  { name: 'Meals', image: './assets/cook.png' },
  { name: 'Practice Yoga', image: './assets/yoga.png' },
  { name: 'Play', image: './assets/play.png' },

];

const originalTasks = [
  'Mobile App Development', 'Web Development', 'Push Ups', 'Do Assignments', 
  'AI/Machine Learning', 'Write Codes', 'Research', 'Experiment', 
  'Group Meetings', 'Yoga Practice', 'Choir Practice', 
  'Explore', 'Workout', 'Silence Hour', 'Therapy Sessions'
];

const App = () => {
  const [tasks, setTasks] = useState(originalTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.first}>
        <View>
          <Text style={styles.title}>Hello , Devs</Text>
          <Text>14 tasks today</Text>
        </View>
      <View style={styles.profilePic}>
        <View>
            <Image source={require('./assets/profile.png')} style={styles.person} />
        </View>
      </View>
     </View>
     <View style={styles.search}>
      <View style={styles.searchbox}>
        <View style={styles.searchArea}>
          <Image source={require('./assets/Search.png')} style={styles.searchpic} />
          <Text style={styles.searchtext}>Search </Text>
        </View>
      </View>
      <View style={styles.filter}>
        <Image source={require('./assets/Vector.png')} style={styles.filterpic}/>
      </View>
     </View>
     
      <Text style={styles.subtitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <Categories key={index} category={category} />
        ))}
      </ScrollView>
      <Text style={styles.subtitle}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Tasks task={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add" onPress={addTask} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f0e8',
  },
  person: {
    width: 46,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 50,
    height: 52,
  },
  search: {
    backgroundColor: '#f7f0e8',
    height: 49,
    width: 353,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchbox: {
    backgroundColor: 'white',
    height: 48,
    width: 280,
    borderRadius: 15,
  },
  searchArea: {
    height: 24,
    width: 280,
    marginTop: 12,
    marginLeft: 10,
    flexDirection: 'row',
  },
  searchpic: {
    marginTop: 2.5,
  },
  filter: {
    backgroundColor: '#F0522F',
    width: 50,
    height: 48,
    borderRadius: 14,
  },
  filterpic: {
    width: 28.33,
    height: 25.5,
    marginTop: 10,
    marginLeft: 8.5,
  },
  searchtext: {
    fontSize: 16,
    marginLeft: 7,
    fontWeight: 700,
    paddingTop: 3, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -5,
    backgroundColor: '',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
