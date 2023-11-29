import React from 'react'
import { View, Text, Button } from 'react-native'
import Toast, { SuccessToast } from 'react-native-toast-message'

const ToastComponent = () => {
    const showToast = () => {
        Toast.show({
            type: "success",  // error info
            text1: "Toast Message",
            text2: "hello Message",
            autoHide: true,
            visibilityTime: 5000,
            position: "bottom",  // top
            bottomOffset: 30,  // its margin
            topOffset: 100,  // its margin
          onShow: () => console.log("Toast show"),
          onHide: () => console.log("Toast hide"),
          onPress: () => console.log("Toast press"),
          
        })
    }
  return (
    <View>
    <Text style={{fontSize:29, marginLeft: 140, marginTop: 60}}>Show Toast</Text>
    <Button title='Show Toast' style={{width: 100}}  onPress={showToast} />
      <Toast />
    </View>
  )
}

export default ToastComponent
