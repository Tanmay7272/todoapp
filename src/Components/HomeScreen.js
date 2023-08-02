import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.textview}>
      <Text style = {styles.textstyle}>MILES TO GO ========{'\n'}     ====== BEFORE SLEEP</Text>
      </View>
      <View style = {styles.ButtonArea}>
        <TouchableOpacity style = {styles.CircularButton}>
        <Text style = {styles.textbutton} onPress={() => navigation.navigate('TASKS')}>CREATE{'\n'}   TASK</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.CircularButton}>
        <Text style = {styles.textbutton} onPress={() => navigation.navigate('TASKS')}>EDIT{'\n'}TASK</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#4A4D55',
    flex:1,
        justifyContent:'center',
        alignItems:'center'
  },
  textview : {
    flex: 25,
    alignItems:'center',
    justifyContent:'center',
  },
  textstyle:{
    color:'#FBFBFB',
    fontFamily:'EduSABeginner-SemiBold',
    fontWeight:'bold',
    fontSize:30,
    fontStyle:'italic'
  },
  ButtonArea:{
    flex: 65,
    justifyContent:'space-around',
    alignItems:'center',
    width:350
  },
  CircularButton:{
    width: 200,
    height: 200,
    borderRadius: 100, 
    backgroundColor: '#131723', 
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor:'#5FEAD1'
  },
  textbutton:{
    fontSize:25,
    color:'#5FEAD1',
    fontWeight:'bold',
    fontStyle:'italic'
  }

})