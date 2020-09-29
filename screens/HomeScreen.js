import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

const HomeScreen =({navigation}) => {
    return(
      <View style={styles.container}>
        <Text>Login Screen</Text>
        {/* <Button title='Book Appointments' onPress={() => navigation.navigate("Appointments")}  /> */}
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

  export default HomeScreen;