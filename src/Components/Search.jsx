import React from 'react'
const Search = ({query,setQuery}) => {
  return (
    <div>
         <input
            onChange={(e) => {setQuery(e.target.value)}}
            value={query}
            className='w-64 h-10 border-2 border-black rounded-lg p-2 text-center mx-5 sm:w-96' 
            placeholder='Enter The Movie Genre'
         />
    </div>
  )
}

export default Search