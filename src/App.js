import './App.css';
import React from 'react';

import CodeEditor from '@uiw/react-textarea-code-editor';

function App() {
  const [code, setCode] = React.useState(
    `function addTwoNumbers(a, b) {\n  return a + b;\n}`
  );
  const [timerText, setTimerText] = React.useState("time:")

  const executeCode = () => {
    window.startTime = Date.now();
    setTimerText("...")
    const runCode = `(() => {
      ${code}
      window.endTime = Date.now();
      window.logTime()
    })()
    `
    setTimeout(runCode, 1);
  }
  
  window.logTime = () => {
    let time = window.endTime - window.startTime
    time = time <= 4 ? "< 4" : time
    const text = "time: " + time + "ms"
    console.log(text)
    setTimerText(text)
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
      <h4>{timerText}</h4>
    </section>
  );
}

export default App;
