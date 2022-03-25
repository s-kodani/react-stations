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
    <div class="dogTop__content">
      <div class="dogTop__content--overview">
        犬の画像を表示するサイトです。
      </div>
      <div class="dogTop__content--main">
        <div class="dog__img--top">
          <DogImage url={dogUrl} />
        </div>
        <button class="dog__content--button" onClick={getDogImage}>
          更新
        </button>
      </div>
    </div>
  )
}
