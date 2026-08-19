import { useState } from "react";

export default function CreateQuiz() {
  const [question, setQuestion] = useState("");

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1>Create Quiz</h1>

      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <input type="text" placeholder="Option A" />
      <br /><br />

      <input type="text" placeholder="Option B" />
      <br /><br />

      <input type="text" placeholder="Option C" />
      <br /><br />

      <input type="text" placeholder="Option D" />
      <br /><br />

      <button>Create Quiz</button>
    </div>
  );
}
