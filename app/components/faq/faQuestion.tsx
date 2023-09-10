import { ReactNode } from "react";

export default function FAQuestion({ question, answer }: { question: string; answer: string | ReactNode }) {
  return (
    <div className="collapse rounded-sm collapse-arrow text-sm border-b">
      <input type="checkbox" />
      <div className="collapse-title font-semibold px-0">{question}</div>
      <div className="collapse-content px-0 text-gray-600">
        <p>{answer}</p>
      </div>
    </div>
  );
}
