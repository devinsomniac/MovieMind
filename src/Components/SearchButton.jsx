import React from 'react'

const SearchButton = ({handleSearch}) => {
  return (
    <div>
      <button
        onClick={handleSearch}
        className='w-32 h-10 my-4 bg-red-600 rounded-lg text-white border-2 border-black font-bold'
      >Get Started &gt; </button>  
    </div>
  )
}

export default SearchButton