import * as React from 'react'
import { BreedsSelect } from './BreedsSelect.js'

export function DogListContainer() {
  const [breeds, setBreeds] = React.useState([])
  const [selectedBreed, setSelectedBreed] = React.useState('')

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(
        result => {
          setBreeds(Object.keys(result.message))
        },
        error => {
          console.log(error)
        },
      )
  }, [])

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectedBreed(event.target.value)
  }

  return (
    <BreedsSelect
      breeds={breeds}
      state={selectedBreed}
      handleChange={handleChange}
    />
  )
}
