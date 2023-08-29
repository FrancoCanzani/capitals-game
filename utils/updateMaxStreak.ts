import { User } from 'firebase/auth';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

export default async function updateMaxStreak(
  newMaxStreak: number,
  user: User | null | undefined
) {
  if (user) {
    const playerDocRef = doc(db, 'players', user.uid);
    try {
      // Update the 'maxStreak' field in Firestore along with its timestamp
      await updateDoc(playerDocRef, {
        maxStreak: newMaxStreak,
        maxStreakTimestamp: serverTimestamp(), // Add the server-generated timestamp
      });
    } catch (error) {
      console.error('Error updating max streak:', error);
    }
  }
}
