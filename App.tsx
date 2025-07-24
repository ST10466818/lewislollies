import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to your first proper React Native App!</Text>
      <Text>Enter your name here:</Text>
      <TextInput placeholder='First name'></TextInput>
      <Text>Enter your surname here:</Text>
      <TextInput placeholder='Surname'></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#fff',
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
    color:'FAE8ED'
    
  }
});
