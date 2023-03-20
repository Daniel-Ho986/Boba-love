import React, { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='search-bar px-3 mx-3' style={{ width: '25em' }}>
            <input 
                type='text' 
                placeholder='Search...'
                onChange={(e) => {setSearchTerm(e.target.value)}}
                style={{
                    margin: 'auto',
                    padding: '6px',
                    width: '100%',
                    border: 'none',
                    borderRadius: '15px',
                    paddingLeft: '20px',
                    fontSize: '20px',
                    letterSpacing: '0.05em'
                }}
            />
        </div>
    )
}

export default SearchBar
