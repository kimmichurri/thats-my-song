import React, { Component } from 'react';

export default class  Selections extends Component {

  triggerSelection = (e) => {
    switch (e.target.value) {
      case '90s':
        console.log('clicked', e.target.value)
        break;
      case '00s':
        console.log('00s', e.target.value)
        break;
      case 'Rap':
        console.log('Rap', e.target.value)
        break;
      case 'Rock':
        console.log('Rock', e.target.value)
        break;
      case 'Pop':
       console.log('Pop', e.target.value)
        break;
      default:
        console.log('wildcard')
    }
  }

  render() {
    return (
      <div className='genre-selection-radio-wrapper'>
        <div className='inputs-wrapper'>
          <label htmlFor='90s' className='genre-selection-labels'>90s</label>
          <input type='radio' name='radio' id='90s' value='90s' onClick={this.triggerSelection}></input>
        </div>
        <div className='inputs-wrapper'>
          <label htmlFor='00s' className='genre-selection-labels'>00s</label>
          <input type='radio' name='radio' id='00s' value='00s' onClick={this.triggerSelection}></input>
        </div>
        <div className='inputs-wrapper'>
          <label htmlFor='rap' className='genre-selection-labels'>Rap</label>
          <input type='radio' name='radio' id='rap' value='Rap' onClick={this.triggerSelection}></input>
        </div>
        <div className='inputs-wrapper'>
          <label htmlFor='rock' className='genre-selection-labels'>Rock</label>
          <input type='radio' name='radio' id='rock' value='Rock' onClick={this.triggerSelection}></input>
        </div>
        <div className='inputs-wrapper'>
          <label htmlFor='pop' className='genre-selection-labels'>Pop</label>
          <input type='radio' name='radio' id='pop' value='Pop' onClick={this.triggerSelection}></input>
        </div>
        <div className='inputs-wrapper'>
          <label htmlFor='wildcard' className='genre-selection-labels'>Wildcard</label>
          <input type='radio' name='radio' id='wildcard' value='Wildcard' onClick={this.triggerSelection}></input>
        </div>
      </div>
    )
  }
}