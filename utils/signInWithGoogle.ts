import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth';
import { app } from '../firebase';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default async function signInWithGoogle(): Promise<void> {
  try {
    const result: UserCredential = await signInWithPopup(auth, provider);

    // This gives you the signed-in user info.
    const user = result.user;

    // Handle Google Access Token if needed.
    const accessToken: string | undefined = user?.refreshToken;
    if (accessToken) {
      // You can use the accessToken here.
    }
  } catch (error: any) {
    // Handle authentication errors here.
    const errorCode: string = error.code;
    const errorMessage: string = error.message;
    console.error(errorCode, errorMessage);
  }
}
