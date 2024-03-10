import './App.css';
import { useState } from 'react';
import { solve } from './logic/algorithm';

function App() {
  const [solution, setSolution] = useState([]);
  const [size, setSize] = useState('');

  function run() {
    if (!size || size < 3 && size !== '1') {
      alert('Please select a valid size');
      return;
    }

    console.log("Running with size =", size);
    const result = solve(parseInt(size));
    console.log(result);

    if (result.length === 0) {
      setSolution([]);
      alert('Solution not found. N must be greater than 3 or equal to 1.');
    } else {
      result.shift();
      setSolution(result);
    }
  }

  return (
    <div className="App">
      <h1>Size of Board</h1>
      <input type="number" onChange={(event) => setSize(event.target.value)} value={size}></input>
      <button onClick={run}>Run</button>
      {solution.length !== 0 && (
        <div className='container'>
          {/* Display the solution here */}
          {solution.map((row, rowIndex) => (
            <div key={rowIndex} className='row'>
              {row.map((cell, cellIndex) => (
                <span key={cellIndex} className='col'>{cell === '.' ? ' ' : '👸'}</span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
