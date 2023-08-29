import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { app } from '../firebase';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default async function signInWithGoogle(): Promise<void> {
  signInWithRedirect(auth, provider);
}
