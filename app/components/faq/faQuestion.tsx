import { ReactNode } from 'react';

export default function FAQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string | ReactNode;
}) {
  return (
    <div className='collapse rounded-sm sm:collapse-arrow border-b'>
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
