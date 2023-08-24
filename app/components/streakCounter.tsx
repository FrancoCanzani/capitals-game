export default function StreakCounter({
  streakCount,
}: {
  streakCount: number;
}) {
  return (
    <div>
      <p className='text-xl font-semibold capitalize'>
        Current streak:{' '}
        <span className='bg-black rounded-md px-2 text-2xl text-white font-semibold'>
          {streakCount}
        </span>
      </p>
    </div>
  );
}
