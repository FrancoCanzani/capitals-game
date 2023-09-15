import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default async function signInWithGoogle(): Promise<void> {
  try {
    const result = await signInWithPopup(auth, provider);
  } catch (error) {
    throw new Error("Sign-in with Google failed. Please try again.");
  }
}
