import React, { useState } from "react";
import { TruncateLines } from "react-truncate-lines";

function DemoPage() {
  const [lines, setLines] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const [whiteSpace, setWhiteSpace] =
    useState<React.CSSProperties["whiteSpace"]>("normal");
  const [lineBreak, setLineBreak] =
    useState<React.CSSProperties["lineBreak"]>("auto");

  return (
    <main>
      <form>
        <input
          type="number"
          min="1"
          value={lines}
          onChange={(e) => setLines(parseInt(e.target.value))}
        />
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <select
          value={whiteSpace}
          onChange={(e) =>
            setWhiteSpace(e.target.value as React.CSSProperties["whiteSpace"])
          }
        >
          <option>normal</option>
          <option>nowrap</option>
          <option>pre</option>
          <option>pre-wrap</option>
          <option>pre-line</option>
          <option>break-spaces</option>
        </select>
        <select
          value={lineBreak}
          onChange={(e) =>
            setLineBreak(e.target.value as React.CSSProperties["lineBreak"])
          }
        >
          <option>auto</option>
          <option>loose</option>
          <option>normal</option>
          <option>strict</option>
          <option>anywhere</option>
        </select>
      </form>
      <hr />
      <div style={{ width: "100px" }}>
        <TruncateLines
          lines={lines}
          ellipsis={<span>...ReadMore</span>}
          style={{ whiteSpace, lineBreak }}
        >
          {text}
        </TruncateLines>
      </div>
    </main>
  );
}

export default DemoPage;
