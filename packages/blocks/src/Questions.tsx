const content = [
  {
    id: "bh",
    question: "Interested in Hunting Demons?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "ah",
    question: "What's the best thing about Switzerland?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "ch",
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "dh",
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
];

export const Questions = () => (
  <section className="List-stack" style={{ gap: "2rem" }}>
    <div className="List List--between">
      <div className="Title-info">Frequently asked questions</div>
      <a href="/blog" className="Content-link">
        View all
      </a>
    </div>

    <article className="Collapse-container">
      {content.map((item, i) => (
        <details className="Collapse" name="faq-columns" key={item.id} open={i === 0}>
          <summary className="Collapse-action">{item.question}</summary>
          <div className="Collapse-contentBlock Content">
            <p className="Content-text">{item.answer}</p>
          </div>
        </details>
      ))}
    </article>
  </section>
);

export const QuestionsOpen = () => (
  <article>
    <ul className="List-stack">
      {content.map((item) => (
        <li className="Content" key={item.id}>
          <h3 className="Content-heading4">{item.question}</h3>
          <p className="Content-text">{item.answer}</p>
        </li>
      ))}
    </ul>
  </article>
);
