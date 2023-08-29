import { getAuth, User } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp, // Import the serverTimestamp function
} from 'firebase/firestore';

// Initialize Firebase Authentication and Firestore
const auth = getAuth();
const db = getFirestore();

// Function to create a new player if it doesn't exist
export default async function createPlayerIfNotExists(
  user: User | null
): Promise<void> {
  try {
    if (!user) {
      return;
    }

    // Check if the player already exists in the Firestore collection
    const playerDocRef = doc(db, 'players', user.uid);
    const playerDocSnapshot = await getDoc(playerDocRef);

    if (!playerDocSnapshot.exists()) {
      // The player document doesn't exist; create a new one
      const userData = {
        uid: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
        maxStreak: 0,
        // Add a server timestamp for maxStreak
        maxStreakTimestamp: serverTimestamp(),
      };

      await setDoc(playerDocRef, userData);

      console.log('New player document created:', user.uid);
    } else {
      console.log('Player document already exists:', user.uid);
    }
  } catch (error) {
    console.error('Error creating player:', error);
  }
}
