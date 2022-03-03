// DO NOT DELETE

import * as React from 'react'
import './App.css'


function dogImage() {
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
      }
    )
  }

  return (
    <div className='dog'>
      <header className='dog__header'>I wanna be a Dog</header>
      <p className='dog__overview'>犬の画像を表示するサイトです。</p>
      <div className='dog__content'>
        <img className='dog__img' src={dogUrl} />
      </div>
      <p>
          <button className='dog__button' onClick={() => getDogImage()}>更新</button>
      </p>
    </div>
  )
}

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return dogImage()
}
