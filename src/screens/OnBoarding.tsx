/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';

const OnBoarding = ({navigation}: any) => {
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.bgLineGradOne}
      />
      <LinearGradient
        colors={[
          COLORS.bgLineGradOne,
          COLORS.bgLineGradTwo,
          COLORS.bgLineGradThree,
          COLORS.bgLineGradFour,
          COLORS.bgLineGradFive,
          COLORS.bgLineGradSix,
        ]}
        style={{width: '100%', height: '100%'}}>
        <View style={{width: '100%', height: '50%', padding: 16}}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: COLORS.onBoardCardBG,
              borderRadius: 20,
            }}>
            <Image
              source={require('../assets/images/onboarding_image.jpeg')}
              alt="Coffee House"
              style={{
                height: '100%',
                aspectRatio: 1 / 1,
                borderRadius: 20,
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 32,
              color: COLORS.black,
              fontWeight: '800',
              letterSpacing: 1,
            }}>
            Coffee Day
          </Text>
          <Text
            style={{
              fontSize: 32,
              color: COLORS.black,
              fontWeight: '800',
              letterSpacing: 1,
            }}>
            Best Beverage Shop
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 80,
          }}>
          <Text style={{color: COLORS.black, fontSize: 18}}>
            Fresh cup of coffee
          </Text>
          <Text style={{color: COLORS.black, fontSize: 18}}>
            Different Types of Coffee, Beans and Drinks
          </Text>
        </View>
        <View style={{paddingHorizontal: 40}}>
          <View style={{width: '100%', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              activeOpacity={0.8}
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 16,
                backgroundColor: COLORS.white,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{fontSize: 14, fontWeight: '600', color: COLORS.black}}>
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              activeOpacity={0.8}
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 16,
                backgroundColor: COLORS.transparent,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderWidth: 2,
                borderColor: COLORS.white,
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OnBoarding;
