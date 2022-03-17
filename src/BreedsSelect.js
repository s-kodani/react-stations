import * as React from 'react'

export function BreedsSelect(props) {
  console.log(props)
  const options = props.breeds.map(breed => (
    <option value={breed}>{breed}</option>
  ))
  return (
    <div class="dog__content">
      <div class="dog__select__breeds">
        <select value={props.state} onChange={props.handleChange}>
          {options}
        </select>
        <div class="select__arrow"></div>
      </div>
    </div>
  )
}
