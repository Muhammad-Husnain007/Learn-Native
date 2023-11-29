import { useState } from 'react'
import {Button, View, Text} from 'react-native'

const ButtonComponent = () => {
    let [val, setVal] = useState(20)
    const callFunction = () =>  {
        setVal(50)
        console.log("hello World");
    }
  return (
    <View>
    <Text>{val}</Text>
    <Button title='On Press' onPress={() => callFunction()} color={'red'} />

    </View>
  )
}

export default ButtonComponent
