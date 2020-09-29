import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import MenuTab from './screens/MenuTab';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingScreen from './screens/SettingScreen';
import SupportScreen from './screens/SupportScreen';
import ProfileScreen from './screens/ProfileScreen';
import RootStackScreen from './screens/RootStackScreen';
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './components/Context';


const Drawer = createDrawerNavigator();


const App = () => {
  const [isLoading, SetIsLoading] = React.useState(true);
  const [userToken, SetUserToken] = React.useState(null);
  const authContext = React.useMemo(() => ({
    signIn: () => {
      SetUserToken('sdf');
      SetIsLoading(false);
    },
    signOut: () => {
      SetUserToken(null);
      SetIsLoading(false);
    },
    signUp: () => {
      SetUserToken('sdf');
      SetIsLoading(false);
    },
  }))

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 1000)
  }, []);


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        {userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MenuTab} />
            <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
          </Drawer.Navigator>
        ) :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}



export default App;