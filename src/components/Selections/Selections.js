import React from 'react';

export default function Selections() {
  return (
    <div className='genre-selection-radio-wrapper'>
      <label for='90s'>90s</label>
      <input type='radio' name='90s'></input>
      <label for='00s'>00s</label>
      <input type='radio' name='00s'></input>
      <label for='rap'>Rap</label>
      <input type='radio' name='rap'></input>
      <label for='rock'>Rock</label>
      <input type='radio' name='rock'></input>
      <label for='pop'>Pop</label>
      <input type='radio' name='pop'></input>
      <label for='wildcard'>Wildcard</label>
      <input type='radio' name='wildcard'></input>            
    </div>
  )
}