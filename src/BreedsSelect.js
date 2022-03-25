import * as React from 'react'

export function BreedsSelect(props) {
  console.log(props)
  const options = props.breeds.map(breed => (
    <option value={breed}>{breed}</option>
  ))
  return (
      <div class="dogBreeds__select">
        <p>Breeds List:</p>
        <select value={props.state} onChange={props.handleChange}>
          {options}
        </select>
      </div>
  )
}
