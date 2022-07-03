import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn flex-center" type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is: {count}
        </button>
      </header>
    </div>
  );
}

export default App;
