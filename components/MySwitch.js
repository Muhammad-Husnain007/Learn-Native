import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const MySwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    // setIsEnabled((previousState) => {
    //     return !previousState;
    //   });
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Toggle Switch:</Text>
      <Switch
        trackColor={{ false: "aqua", true: "red" }}
        thumbColor={isEnabled ? "black" : "white"}
        ios_backgroundColor="gray"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>{isEnabled ? "Switch is ON" : "Switch is OFF"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MySwitch;
