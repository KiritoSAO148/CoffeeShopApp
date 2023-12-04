/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/theme';
import Ionic from 'react-native-vector-icons/Ionicons';
import {
  SignInAnonymously,
  SignInWithEmailAndPassword,
  onMicrosoftButtonPress,
} from '../utilities/Utilities';
import {ToastAndroid} from 'react-native';

const SignIn = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [showErrors, setShowErrors] = useState(false);

  interface FormErrors {
    email: string;
    password: string;
  }

  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
  });

  const getErrors = (email: any, password: any) => {
    const errors = {email: '', password: ''};

    if (!email) {
      errors.email = 'Please Enter Email';
    } else if (!email.includes('@') || !email.includes('.com')) {
      errors.email = 'Please enter valid email';
    }

    if (!password) {
      errors.password = 'Enter password';
    } else if (password.length < 8) {
      errors.password = 'Enter Password of 8 characters';
    }

    return errors;
  };

  const handleRegister = () => {
    const errors = getErrors(email, password);

    if (errors.email !== '' || errors.password !== '') {
      setShowErrors(true);
      setErrors(showErrors ? errors : {email: '', password: ''});
      console.log(errors);
    } else {
      setErrors({email: '', password: ''});
      setShowErrors(false);
      handleSignIn({email, password});
    }
  };

  const handleSignIn = ({email, password}: any) => {
    SignInWithEmailAndPassword({email, password}).then(() => {
      ToastAndroid.show('Logged in', ToastAndroid.SHORT);
    });
  };

  const LoginWithIcon = ({iconName, onPress, buttonTitle}: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={{
          width: '40%',
          paddingVertical: 12,
          paddingHorizontal: 24,
          backgroundColor: COLORS.transparent,
          borderWidth: 2,
          borderColor: COLORS.white,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionic
          name={iconName}
          style={{fontSize: 26, color: COLORS.black, marginBottom: 4}}
        />
        <Text style={{fontSize: 14, color: COLORS.black, opacity: 0.4}}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <LinearGradient
        colors={[
          COLORS.bgLineGradOne,
          COLORS.bgLineGradTwo,
          COLORS.bgLineGradThree,
          COLORS.bgLineGradFour,
          COLORS.bgLineGradFive,
          COLORS.bgLineGradSix,
        ]}
        style={{
          width: '100%',
          height: '100%',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: COLORS.white,
            width: 40,
            aspectRatio: 1 / 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            elevation: 4,
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 100,
          }}>
          <Ionic
            name="arrow-back"
            style={{
              fontSize: 20,
              color: COLORS.black,
            }}
          />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 60}}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 20,
              fontSize: 30,
              marginBottom: 80,
              color: COLORS.black,
              letterSpacing: 2,
              fontWeight: '500',
            }}>
            Welcome
          </Text>
          <View style={{width: '100%'}}>
            <View style={{width: '100%', marginBottom: 20}}>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor={COLORS.lightText}
                keyboardType="email-address"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  fontSize: 14,
                  color: COLORS.black,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                }}></TextInput>
              {errors.email && (
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.warning,
                    marginTop: 16,
                    marginLeft: 4,
                  }}>
                  {errors.email}
                </Text>
              )}
            </View>
            <View style={{width: '100%', marginBottom: 72}}>
              <View
                style={{
                  width: '100%',
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={COLORS.lightText}
                  secureTextEntry={hidePassword ? true : false}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    fontSize: 14,
                    color: COLORS.black,
                    flex: 1,
                  }}></TextInput>
                {password.length > 0 && (
                  <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}
                    activeOpacity={0.9}
                    style={{paddingHorizontal: 10, paddingRight: 14}}>
                    <Ionic
                      name={hidePassword ? 'eye-sharp' : 'eye-off-sharp'}
                      style={{fontSize: 20, color: COLORS.black}}
                    />
                  </TouchableOpacity>
                )}
              </View>

              {errors.password && (
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.warning,
                    marginTop: 16,
                    marginLeft: 4,
                  }}>
                  {errors.password}
                </Text>
              )}
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleRegister()}
              style={{
                width: '100%',
                paddingVertical: 14,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.accent,
                borderRadius: 10,
                elevation: 8,
                shadowColor: COLORS.accent,
              }}>
              <Text style={{color: COLORS.white, fontSize: 16}}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0.5, y: 1.0}}
              colors={['#00000090', '#00000090', '#ffffff00']}
              style={{
                flex: 1,
                paddingVertical: 1.4,
                borderRadius: 100,
              }}></LinearGradient>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.black,
                opacity: 0.4,
                marginHorizontal: 18,
              }}>
              Or continue with
            </Text>
            <LinearGradient
              start={{x: 0, y: 0}}
              colors={['#00000090', '#00000090', '#ffffff00']}
              style={{
                flex: 1,
                paddingVertical: 1.4,
                borderRadius: 100,
              }}></LinearGradient>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: 10,
              marginBottom: 40,
            }}>
            <LoginWithIcon
              iconName="logo-windows"
              onPress={() => onMicrosoftButtonPress()}
              buttonTitle="Microsoft"
            />
            <LoginWithIcon
              iconName="person"
              onPress={() => SignInAnonymously()}
              buttonTitle="Anonymous"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignUp')}
            style={{width: '100%', alignItems: 'center'}}>
            <Text
              style={{fontSize: 14, color: COLORS.black, fontWeight: '400'}}>
              Not a member?{' '}
              <Text style={{color: COLORS.accent}}>Sign up now</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
