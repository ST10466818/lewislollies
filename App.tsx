import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View , Image} from 'react-native';

export default function App() {
  const[Name, setName]= useState('');
  const[Surname, setSurname]= useState('');

  console.log("Starting App");
  return (
    <View style={styles.container}>
      <Text style={styles.newText}>Welcome to your first proper React Native App!</Text>
      <Text style={styles.newText}>Enter your name here:</Text>
      <Text style={styles.HeadingText}>Enter Name:</Text>
      <TextInput style={styles.InputBoxs}placeholder='First Name'
      onChangeText={newText => setName(newText)}/>
      <TextInput style={styles.InputBoxs}placeholder='Surname'
      onChangeText={newText => setSurname(newText)}/>
      <TextInput placeholder='First name'></TextInput>
      <Text style={styles.newText}>Enter your surname here:</Text>
      <TextInput placeholder='Surname'></TextInput>
      <StatusBar style="auto" />
      <Button
      title='Add User'
      color="#f194ff"
      onPress={() => Alert.alert('Simple Button pressed')}/>
      <Image source={require("./assets/imgone.jpg")}
        style={styles.image}/>
        console.log("Name:" + Name +
        "Surname:"+ Surname)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#FDD5DF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  newText:{
    fontSize:22,
    fontWeight:'bold',
    justifyContent:'center',
    fontFamily:'Monaco', 
    marginVertical:18,
    textAlign:'center',
    color:'#FFFF',
  },

  image:{
    width: 150,
    height: 150,
  },

  InputFlex:{
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-evenly',
  },
});
