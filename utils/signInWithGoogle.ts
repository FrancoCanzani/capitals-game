import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { toast } from "sonner";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default async function signInWithGoogle(): Promise<void> {
  try {
    const result = await signInWithPopup(auth, provider);
  } catch (error) {
    toast.error("Sign-in with Google failed. Please try again.");
  }
}
