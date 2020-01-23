import React from 'react';
import './App.sass';

function App() {
let title = "JSX"
return (
<div className="App">
    <h1 className="title">{title}</h1>
    <h2 style={{ color: "orange" }}>My React</h2>
</div>
);
}

export default App;