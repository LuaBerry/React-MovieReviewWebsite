import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount()
  {
    //Load Movie data.
  }
  render() {
    const {isLoading} = this.state;
    return (
    <>
    {isLoading ? 'Loading...' : 'Load complete.'}
    </>
    )
  }
}

export default App;