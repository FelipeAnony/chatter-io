export const firebaseErrorFormat = (error: any) => {
  switch(error.message) {
    case 'Firebase: Error (auth/email-already-in-use).':
      return 'Email already in use.'

    case 'Firebase: Error (auth/invalid-email)':
      return 'Invalid email';

    case 'Firebase: Error (auth/invalid-password).':
      return 'Invalid password'

    case 'Firebase: Error (auth/user-not-found).': 
      return 'User not found!'
    
    case 'Firebase: Error (auth/wrong-password).':
      return 'Wrong password!'
      
    default:
      return 'Error! Please, try again';
  }
};