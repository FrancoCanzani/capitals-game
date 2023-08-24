export default function StreakCounter({
  streakCount,
}: {
  streakCount: number;
}) {
  return (
    <div>
      <p className='text-xl'>
        Current streak:{' '}
        <span className='bg-black rounded-md p-1 text-2xl text-white font-semibold'>
          {streakCount}
        </span>
      </p>
    </div>
  );
}
