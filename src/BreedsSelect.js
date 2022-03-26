import * as React from 'react'

export function BreedsSelect(props) {
  console.log(props)
  const options = props.breeds.map(breed => (
    <option value={breed}>{breed}</option>
  ))
  return (
    <div class="flex flex-wrap justify-center items-center gap-2">
      <div>
        <p>Breeds List:</p>
      </div>
      <div>
        <select
          value={props.state}
          onChange={props.handleChange}
          className="select select-bordered w-52 max-w-xs"
        >
          {options}
        </select>
      </div>
      <div>
        <button
          className="btn btn-sm md:btn-md btn-outline"
          onClick={props.getBreedImages}
        >
          表示
        </button>
      </div>
    </div>
  )
}
