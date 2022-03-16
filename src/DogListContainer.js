import * as React from 'react'

export function DogListContainer() {
  const [breeds, setBreeds] = React.useState([])

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

  return breeds
}
