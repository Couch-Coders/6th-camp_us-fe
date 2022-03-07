import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCz9UXgEsUGsyvfQ5S75lGolvOz5TKD74Y',
  authDomain: 'camp-us-3c9f1.firebaseapp.com',
  projectId: 'camp-us-3c9f1',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log('signIn');
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  console.log('signOut');
  return auth.signOut();
};
