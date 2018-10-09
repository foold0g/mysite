import { auth } from "./firebase";

// Sign-up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);

// Sign-in
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign-out
export const doSignOut = () => auth.signOut();

// Password reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password change
export const doPasswordChange = password =>
  auth.currentUser.updatePassword(password);
