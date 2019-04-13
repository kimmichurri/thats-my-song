import React, { Component } from 'react';
import Selections from '../Selections/Selections';
import { connect } from 'react-redux';
import { fetchSongs } from '../../thunks/fetchSongs';
import Loader from '../../components/Loader/Loader';
import PropTypes from 'prop-types';
// import { Route } from 'react-router-dom';
import SongInfo from '../SongInfo/SongInfo';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='main-title'>That's My Song</h1>
        </header>
        {this.props.loading ? <Loader /> : <Selections /> }
        <SongInfo />
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
