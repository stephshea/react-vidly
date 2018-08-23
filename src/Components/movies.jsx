import React, { Component } from 'react'
import Like from './common/like'
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = { 
    movies: getMovies()
   };

   handleDelete = movie => {

   };
   
  render() { 
    return (
    <React.Fragment>
      {/* <p>Showing {count} movies in database.</p> */}
      <table className="table">
        <thead>
          <tr>
            <th>title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><Like /></td>
              <td>
                <button 
                onClick={() => this.handleDelete(movie)}
                className="btn btn-dansger btn-sm" >
                Delete
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
    );
  }
}
 
export default Movies