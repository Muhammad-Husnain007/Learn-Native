import React from 'react';
import { Text , View, Image} from 'react-native';

const MyImage = () => {
  return (
    <View>
    <Text style= {{fontSize: 30}}>hello image</Text>
      <Image source={require('./imageAudi.jpg')} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default MyImage;
