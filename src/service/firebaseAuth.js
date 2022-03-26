import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log('signIn');
  return auth.signInWithPopup(provider);
};

export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  console.log('signIn');
  return auth.signInWithPopup(provider);
};

export const signInGithub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  console.log('signIn');
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  console.log('signOut');
  return auth.signOut();
};
