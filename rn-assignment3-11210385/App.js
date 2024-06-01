
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.headerText}>Hello , Devs</Text>
          <Text style={styles.headerSubtitle}>14 tasks today</Text>
        </View>
        <View style={styles.headerPicture}>
          <Image source={require('./assets/person.png')} style={styles.headerImage}/>
        </View>
      </View>
      <View style={styles.searchTasks}>
        <View style={styles.searchBar}>
          <Feather name="search" size={28} color="black"  />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
          />
        </View>
        <View style={styles.icon}>
          <FontAwesome name="tasks" size={48} color="red" style={styles.icon} />
        </View> 
      </View>
      <View>
        <Text style={styles.categories}>Categories</Text>
      </View>
      <View style={styles.categoryOne}>
        <Text style={styles.categoryOneTitle}>Exercise</Text>
        <Text style={styles.categoryOneSubtitle}>12 Tasks</Text>
        <Image source={require('./assets/young woman working online.png')} style={styles.woman}/>
      </View>

    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    paddingTop: 52,
    paddingHorizontal: 20,

  },
  headerContent:{
    flexDirection: 'row',
  },
  headerText:{
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 38.4,
    fontFamily: 'Lato',
    textAlign: 'left',
    color: '#000000'
  },
  headerSubtitle: {
    font: 'Lato'
  },
  headerPicture :{
    marginLeft: 134,
    backgroundColor:'white',
    borderRadius: "100%"
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  searchBar:{
    flexDirection: 'row',  
    alignItems: 'center',
    border: 1, 
    marginTop: 32,
    padding:20,
    height: 48,
    width: 280,
    backgroundColor: '#FBF9F7',
    borderRadius: 10
   },
  textInput: {
    padding:15,
    fontSize: 17
  },
  searchTasks: {
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    paddingLeft: 10,
    marginTop: 18
  },
  categories:{
    fontWeight: 700,
    marginTop: 32,
    size: 20,
    lineHeight:24,
    font: 'Lato',
    fontSize: 20,
    marginBottom: 16,
  },
  categoryOne:{
    backgroundColor: '#FBF9F7'
  },
  categoryOneTitle:{
    fontWeight: 700,
    fontSize:16,
    lineHeight: 19.2
  },
  categoryOneSubtitle:{
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.4
  },
  woman: {
    height: 132,
    width: 151
  }

});
