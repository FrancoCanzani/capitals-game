export default function StreakCounter({
  streakCount,
}: {
  streakCount: number;
}) {
  return (
    <div>
      <p className='lg:text-xl font-semibold capitalize'>
        Current streak:{' '}
        <span className='bg-black rounded-lg px-2 lg:text-2xl text-white font-semibold'>
          {streakCount}
        </span>
      </p>
    </div>
  );
}
