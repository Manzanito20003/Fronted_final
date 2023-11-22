import { View} from 'react-native';
import React from 'react'
import { Cabeza } from '../Cabeza'
import Card from './Card'  
 

export const Productos = ({navigation}) => {
  
  return (
    <View>
      
        <Cabeza navigation={navigation} />
        <Card navigation={navigation}/>
    </View>
  )
}
