import React, {useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {

   const [count, setCount] = useState(0)
   const handlePress = () =>{
      setCount(count + 1)
   }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
  <Text style={styles.text}> Increase count by {count}</Text>
      <Button title="Press me" onPress={handlePress}/>
      <Button title="Reset" onPress={()=> setCount(0)}/>
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
  text: {
      color: '#ff652f',
      fontSize: 40,
      marginTop: 20,
  }
});
