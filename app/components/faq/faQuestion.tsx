export default function FAQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className='collapse rounded-sm md:collapse-arrow border-b'>
      <input type='checkbox' />
      <div className='collapse-title text-lg font-semibold px-0'>
        {question}
      </div>
      <div className='collapse-content px-0 text-sm text-gray-600'>
        <p>{answer}</p>
      </div>
    </div>
  );
}
