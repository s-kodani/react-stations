import * as React from 'react'

export function DogImage(props) {
  return (
      <img className="object-cover max-w-full" src={props.url} />
  )
}
