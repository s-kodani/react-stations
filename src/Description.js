import * as React from 'react'

import { DogImage } from './DogImage.js'

export function Description() {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/malamute/n02110063_18538.jpg',
  )

  const getDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          setDogUrl(result.message)
        },
        error => {
          console.log(error)
        },
      )
  }

  return (
    <div>
      <p className="dog__overview">犬の画像を表示するサイトです。</p>
      <div className="dog__content">
        <DogImage url={dogUrl} />
      </div>
      <p>
        <button className="dog__button" onClick={getDogImage}>
          更新
        </button>
      </p>
    </div>
  )
}
