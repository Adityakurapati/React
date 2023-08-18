import React from 'react'

const SearchItem=( { search, setSearch } ) =>
{
     return (
          <form className='search-box' onSubmit={ ( e ) => e.preventDefault() }>
               <input type='text'
                    placeholder='Search Movie'
                    role='searchbox'
                    id='search'
                    value={ search }
                    onChange={ ( e ) => setSearch( e.target.value ) } />
          </form>
     )
}

export default SearchItem