import Image from 'next/image';
import Link from 'next/link';
import { LogOut, MoveUpRight } from 'lucide-react';
import { User, getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { DocumentSnapshot, DocumentData } from 'firebase/firestore';

export default function Modal({
  user,
  streakCount,
  userData,
}: {
  user: User | null;
  streakCount: number;
  userData: DocumentSnapshot<DocumentData, DocumentData> | undefined;
}) {
  return (
    <dialog id='modal' className='modal modal-bottom sm:modal-middle'>
      <form method='dialog' className='modal-box'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Press ESC key or click the button below to close</p>
        <div className='modal-action'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn'>Close</button>
        </div>
      </form>
    </dialog>
  );
}
