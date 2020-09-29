import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

const SupportScreen =({navigation}) => {
    return(
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button title='Book Appointments' onPress={() => navigation.navigate("Appointments")}  />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default SupportScreen;