import { useState } from 'react'

const SearchBar = () => {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = ({target}) => {
        console.log(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Search movies and series program by name'
            value={inputValue}
            onChange={handleChangeInput}
             />
    </form>
  )
}

export default SearchBar