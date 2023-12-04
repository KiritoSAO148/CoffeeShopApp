/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';
import SplashScreen from 'react-native-splash-screen';
import OnBoarding from './src/screens/OnBoarding';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import auth from '@react-native-firebase/auth';

const App = () => {
  const Stack = createNativeStackNavigator();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subcriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subcriber;
  }, []);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen
              name="Tab"
              component={TabNavigator}
              options={{animation: 'slide_from_bottom'}}></Stack.Screen>
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{animation: 'slide_from_bottom'}}></Stack.Screen>
            <Stack.Screen
              name="Payment"
              component={PaymentScreen}
              options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{animation: 'slide_from_bottom'}}></Stack.Screen>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{animation: 'slide_from_bottom'}}></Stack.Screen>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
