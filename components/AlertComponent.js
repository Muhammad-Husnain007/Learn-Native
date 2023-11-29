import React from 'react'
import {Alert, Button, Text, View,} from 'react-native'

const AlertComponent = () => {

    const showAlert = () => {
        Alert.alert(
            // "Title",
            // "This is a alert message",
            title =  "Message",
            messaage = " heeloo ",
            
              [  
                {
                  text: 'yes',
                  onPress: () => console.log('OK Pressed'),
                },
                {
                    text: 'Delete',
                    onPress: () => console.log('Delete Pressed'),
                  },
              ],
              { cancelable: false }
        )
    }
    return (
        <View>
            <Text style={{ fontSize: 29, marginLeft: 140, marginTop: 60 }}>Show Alert</Text>
            <Button title='Show Alert' style={{ width: 100 }} onPress={showAlert} />

        </View>
    )
}

export default AlertComponent
