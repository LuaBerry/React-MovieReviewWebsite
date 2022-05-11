import React from 'react';

function Food({fav:f = 'potato'})
{
  return(
    <h3>I love {f}</h3>
  );
}

function App() {
  return(
  <div>
    <h1>Hello, React</h1>
    <Food fav = "Kimchi" />
    <Food fav = "Wine" />
    <Food fav = "Ramen" />
    <Food />
  </div>
  );
}

export default App;
