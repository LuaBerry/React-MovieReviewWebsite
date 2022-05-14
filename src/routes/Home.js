import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const{
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }
  componentDidMount()
  {
    //Load Movie data.
    this.getMovies();
  }
  render()
  {
    const {isLoading, movies} = this.state;
    return (
    <section className="container">
      {isLoading ? 
        (
          <div  className = "loader">
            'loading...'
          </div>
        )
        : 
        (
          <div className = "movies">
          {
            movies.map(
              (movie) =>
            {
              return (
              <Movie key={movie.id} 
              poster = {movie.medium_cover_image} 
              {...movie}/>
              )
            }
            )
          }
          </div>
        )
      }
    </section>
    )
  }
}

export default Home;