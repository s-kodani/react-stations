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
    <div class="flex flex-wrap justify-around items-center mx-2">
      <div class="font-mono text-center my-2">犬の画像を表示するサイトです。</div>
      <div class="max-w-md grid justify-items-end">
        <div class="avatar">
          <div class="sm:h-64 h-48 sm:w-96 w-64 shadow-xl">
            <DogImage url={dogUrl} />
          </div>
        </div>
        <button
          class="btn btn-sm md:btn-md btn-outline m-2"
          onClick={getDogImage}
        >
          更新
        </button>
      </div>
    </div>
  )
}
