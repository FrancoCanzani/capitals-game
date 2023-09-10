import { ReactNode } from "react";

export default function FAQuestion({ question, answer }: { question: string; answer: string | ReactNode }) {
  return (
    <div className="collapse rounded-sm collapse-arrow text-sm border-b">
      <input type="checkbox" />
      <p className="collapse-title flex items-center font-semibold px-0">{question}</p>
      <p className="collapse-content px-0 text-gray-600">{answer}</p>
    </div>
  );
}
