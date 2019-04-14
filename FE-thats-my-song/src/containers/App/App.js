import React, { Component } from 'react';
import Selections from '../Selections/Selections';
import { connect } from 'react-redux';
import { fetchSongs } from '../../thunks/fetchSongs';
import Loader from '../../components/Loader/Loader';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import SongInfo from '../SongInfo/SongInfo';
import headphones from '../../assets/headphones.png';
import { Playlist } from '../Playlist/Playlist';


export class App extends Component {

  goToFavorites = () => {
    console.log('do some playlist stuff now')
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavLink to='/playlist'>
            <button
              onClick={this.goToFavorites}
              className='playlist-button'>Playlist
              <img className='headphones-icon' src={headphones} />
            </button>
          </NavLink>
          <h1 className='main-title'>That's My Song</h1>
        </header>
        <Route exact path='/' component={Selections} />
        <Route exact path='/song-info' component={SongInfo} />
        <Route exact path='/playlist' component={Playlist} />
        {/* {this.props.loading ? <Loader /> : <Selections /> } */}
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchSongs: PropTypes.func.isRequired
}

export const mapStateToProps = (state) => ({
  loading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (url) => dispatch(fetchSongs(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
