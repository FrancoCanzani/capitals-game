export default function StreakCounter({
  streakCount,
}: {
  streakCount: number;
}) {
  return (
    <div>
      <p className='md:text-xl font-semibold capitalize'>
        Current streak:{' '}
        <span className='bg-black rounded-md px-2 md:text-2xl text-white font-semibold'>
          {streakCount}
        </span>
      </p>
    </div>
  );
}
