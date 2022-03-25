import * as React from 'react'
import { BreedsSelect } from './BreedsSelect.js'
import { DogImage } from './DogImage.js'

export function DogListContainer() {
  const [breeds, setBreeds] = React.useState([])
  const [selectedBreed, setSelectedBreed] = React.useState('hound')
  const [breedImages, setBreedImages] = React.useState([])

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

  const getBreedImages = () => {
    const url =
      'https://dog.ceo/api/breed/' + selectedBreed + '/images/random/6'

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          setBreedImages(result.message)
          console.log(result.message)
        },
        error => {
          console.log(error)
        },
      )
  }

  const handleChange = event => {
    console.log(event.target.value)
    setSelectedBreed(event.target.value)
  }
  const images = breedImages.map(dogUrl => (
    <div class="dog__img--breeds">
      <DogImage url={dogUrl} />
    </div>
  ))
  return (
    <div>
      <div class="dogBreeds__content">
        <BreedsSelect
          breeds={breeds}
          state={selectedBreed}
          handleChange={handleChange}
        />
        <button className="dogBreeds__content--button" onClick={getBreedImages}>
          表示
        </button>
      </div>
      <div>
        <div class="dogBreeds__content--images">{images}</div>
      </div>
    </div>
  )
}
