import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = (props) => {
  const {name, age} = props.route.params;

  return (
    <View>
      <Text style={{ fontSize: 40 }}>This is Login</Text>
      <Text style={{ fontSize: 30, color: "red" }}>Name: {name}</Text>
      <Text style={{ fontSize: 30, color: "red" }}>Age: {age}</Text>
      <Button title= "Go to Home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
};

export default Login;
