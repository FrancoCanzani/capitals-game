import { getAuth, User } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp, // Import the serverTimestamp function
} from "firebase/firestore";
import { toast } from "sonner";

// Initialize Firebase Authentication and Firestore
const auth = getAuth();
const db = getFirestore();

// Function to create a new player if it doesn't exist
export default async function createPlayerIfNotExists(user: User | null): Promise<void> {
  try {
    if (!user) {
      return;
    }

    // Check if the player already exists in the Firestore collection
    const playerDocRef = doc(db, "players", user.uid);
    const playerDocSnapshot = await getDoc(playerDocRef);

    if (!playerDocSnapshot.exists()) {
      // The player document doesn't exist; create a new one
      const userData = {
        uid: user.uid,
        displayName: user.displayName || "",
        email: user.email || "",
        maxStreak: 0,
        // Add a server timestamp for maxStreak
        maxStreakTimestamp: serverTimestamp(),
      };

      await setDoc(playerDocRef, userData);

      toast.success(`Player profile created. Welcome ${user.displayName}!`);
    }
  } catch (error) {
    toast.error("Error creating player profile. Please try again!");
  }
}
