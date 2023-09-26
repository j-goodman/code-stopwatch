import './App.css';
import React from 'react';

import CodeEditor from '@uiw/react-textarea-code-editor';

function App() {
  const [repetitions, setRepetitions] = React.useState(1)
  const [code, setCode] = React.useState(
`const n = 300000000;
let x = 0;

while (x < n) {
  x += 1;
}`
  );
  const [timerText, setTimerText] = React.useState("time:")

  const executeCode = () => {
    if (!Number(repetitions)) {
      setTimerText("Repetitions must be a number greater than 0.")
      setRepetitions(1)
      return null
    }
    window.startTime = Date.now();
    setTimerText("...")
    let userCode = ``
    for (let i = 0; i < repetitions; i++) {
      userCode += `if (true) {
        ${code}
      }`
    }
    const runCode = `(() => {
      ${userCode}
      window.endTime = Date.now();
      window.logTime()
    })()
    `
    setTimeout(runCode, 1);
  }

  const handleRepetitionsChange = (event) => {
    setRepetitions(event.target.value)
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
          backgroundColor: "#fafafa",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
      <button onClick={executeCode}>execute</button>
      <div className="input-container">
        <h4>repetitions:</h4>
        <input onChange={handleRepetitionsChange} value={repetitions}></input>
      </div>
      <h3>{timerText}</h3>
    </section>
  );
}

export default App;
