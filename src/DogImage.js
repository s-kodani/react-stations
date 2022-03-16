import * as React from 'react'

export function DogImage(props) {
  return (
    <div className="dog__content">
      <img className="dog__img" src={props.url} />
    </div>
  )
}
