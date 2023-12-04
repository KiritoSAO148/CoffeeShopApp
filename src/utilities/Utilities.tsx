/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';

export const CreateAccountWithEmailAndPassword = ({email, password}: any) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const SignInWithEmailAndPassword = ({email, password}: any) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const SignInAnonymously = () => {
  auth().signInAnonymously();
};

export const onMicrosoftButtonPress = async () => {
  // Generate the provider object
  const provider = new auth.OAuthProvider('microsoft.com');
  // // Optionally add scopes
  // provider.addScope('offline_access');
  // // Optionally add custom parameters
  // provider.setCustomParameters({
  //   prompt: 'consent',
  //   // Optional "tenant" parameter for optional use of Azure AD tenant.
  //   // e.g., specific ID - 9aaa9999-9999-999a-a9aa-9999aa9aa99a or domain - example.com
  //   // defaults to "common" for tenant-independent tokens.
  //   tenant: 'tenant_name_or_id',
  // });

  // Sign-in the user with the provider
  return auth().signInWithRedirect(provider);
};
