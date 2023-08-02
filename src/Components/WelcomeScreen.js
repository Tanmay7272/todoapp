import { View, Text , Image, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'


const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('DAILY GOALS');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style = {styles.container}>
      <View style = {{flex:45}}> 
      <Image source={require('./image.png')} style = {styles.logo}/>
      </View >
      <View style = {{flex:45}}>
      <Text style = {styles.brandname}>DAILY GOALS</Text>
      </View>
      <View style = {styles.powered}>
        <Text style = {styles.poweredtext}>Powered By</Text>
        <Image source={require('./bugendafinal.png')}  style = {styles.bylogo}/>
        
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'black',
    flex:1,
        justifyContent:'center',
        alignItems:'center'
  },

  brandname : {
    fontSize: 30,
    fontFamily:'EduSABeginner-SemiBold',
    fontWeight: 'bold',
    color: '#fbfbfb',
    marginTop:'35%',
    alignItems:'center',
    justifyContent:'center',
  },

  logo: {
    height: 300,
    width:358,
    marginTop: '20%'
  },
  powered:{
    flex:10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:25
  },
  poweredtext:{
    justifyContent:'center',
    alignItems:"center",
    fontWeight:'bold',
    color:'#fbfbfb'
  },
  by:{
    width: 358,
    height: 200,
    justifyContent:'center',
    alignItems:'center',
  },
  bylogo:{
    width:200,
  }
})