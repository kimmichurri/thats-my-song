import React from 'react';

export default function Selections() {
  return (
    <div className='genre-selection-radio-wrapper'>
      <div className='inputs-wrapper'>
        <label htmlFor='90s' className='genre-selection-labels'>90s</label>
        <input type='radio' name='radio' id='90s'></input>
      </div>
      <div className='inputs-wrapper'>
        <label htmlFor='00s' className='genre-selection-labels'>00s</label>
        <input type='radio' name='radio' id='00s'></input>
      </div>
      <div className='inputs-wrapper'>
        <label htmlFor='rap' className='genre-selection-labels'>Rap</label>
        <input type='radio' name='radio' id='rap'></input>
      </div>
      <div className='inputs-wrapper'>
        <label htmlFor='rock' className='genre-selection-labels'>Rock</label>
        <input type='radio' name='radio' id='rock'></input>
      </div>
      <div className='inputs-wrapper'>
        <label htmlFor='pop' className='genre-selection-labels'>Pop</label>
        <input type='radio' name='radio' id='pop'></input>
      </div>
      <div className='inputs-wrapper'>
        <label htmlFor='wildcard' className='genre-selection-labels'>Wildcard</label>
        <input type='radio' name='radio' id='wildcard'></input>
      </div>
    </div>
  )
}