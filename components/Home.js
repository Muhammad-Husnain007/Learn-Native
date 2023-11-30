import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [name, setName] = useState("")  
  const [age, setAge] = useState("")

  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 40 }}>This is Home</Text>
      <TextInput onChangeText={(text) => setName(text)} placeholder='Enter Name' style={{width: 300, height:40}} />
      <TextInput onChangeText={(text) => setAge(text)} placeholder='Enter Age' style={{width: 300, height:40}} />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login',{name,age})}
      />
    </View>
  );
};

export default Home;
