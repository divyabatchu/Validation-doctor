import React from 'react';
import { Text, View, Button,StyleSheet} from 'react-native';

const LayoutScreen =({navigation}) => {
    return(
      <View style={styles.container}>
        <Text>Appointments</Text>
        <Button title='Book Appointments ... again' onPress={() => navigation.push("Appointments")}/>
        <Button title='Home Page' onPress={() => navigation.navigate("Home")}/>
        <Button title='Go Back' onPress={() => navigation.goBack()}/>
        <Button title='Go Back To First Screen' onPress={() => navigation.popToTop()}/>
      </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default LayoutScreen;