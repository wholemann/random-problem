import React, { useState, useEffect } from 'react';
import './App.css';
import { getTitle, loadProblems } from './services/problem';

function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await loadProblems();
      setReady();
    })();
  }, []);

  const title = getTitle();

  return (
    <div className="App" key={isReady}>
      <p>{title}</p>
    </div>
  );
}

export default App;
