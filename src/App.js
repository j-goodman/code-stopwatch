import './App.css';
import React from 'react';

import CodeEditor from '@uiw/react-textarea-code-editor';

function App() {
  const [code, setCode] = React.useState(
    `function addTwoNumbers(a, b) {\n  return a + b;\n}`
  );

  const executeCode = () => {
    setTimeout(code, 1);
  }

  return (
    <section>
      <h2>stopwatch</h2>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
      <button onClick={executeCode}>execute</button>
    </section>
  );
}

export default App;
