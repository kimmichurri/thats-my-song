import React, { Component } from 'react';

export default class  Selections extends Component {

  setUrl = (e) => {
    let url;
    const { value } = e.target;
    switch (value) {
      case 'Wildcard':
        url = `http://voiceboxpdx.com/api/v1/songs/roulette`
        console.log('wildcard', url);
        break;
      default: 
        url = `http://voiceboxpdx.com/api/v1/songs/roulette?tag=${value}`
        console.log(url);
    }
  }

  render() {
    return (
      <section>
        <div className='genre-selection-radio-wrapper'>
          <div className='inputs-wrapper'>
            <label htmlFor='90s' className='genre-selection-labels'>90s</label>
            <input type='radio' name='radio' id='90s' value='90s' onClick={this.setUrl}></input>
          </div>
          <div className='inputs-wrapper'>
            <label htmlFor='00s' className='genre-selection-labels'>00s</label>
            <input type='radio' name='radio' id='00s' value='00s' onClick={this.setUrl}></input>
          </div>
          <div className='inputs-wrapper'>
            <label htmlFor='rap' className='genre-selection-labels'>Rap</label>
            <input type='radio' name='radio' id='rap' value='Rap' onClick={this.setUrl}></input>
          </div>
          <div className='inputs-wrapper'>
            <label htmlFor='rock' className='genre-selection-labels'>Rock</label>
            <input type='radio' name='radio' id='rock' value='Rock' onClick={this.setUrl}></input>
          </div>
          <div className='inputs-wrapper'>
            <label htmlFor='pop' className='genre-selection-labels'>Pop</label>
            <input type='radio' name='radio' id='pop' value='Pop' onClick={this.setUrl}></input>
          </div>
          <div className='inputs-wrapper'>
            <label htmlFor='wildcard' className='genre-selection-labels'>Wildcard</label>
            <input type='radio' name='radio' id='wildcard' value='Wildcard' onClick={this.setUrl}></input>
          </div>
        </div>
        <div className='spin-me-button-wrapper'>
          <button className='spin-me-button'>Spin me to find your next tune</button>
        </div>
      </section>
    )
  }
}