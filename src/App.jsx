import { useState } from 'react'

import './App.css'
import {data} from './assets/data'

function App() {
  const [search ,setSearch]=useState('')
// console.log(search)
  
  // console.log(data.results)

  return (
    <>
    <form onChange={(e)=> setSearch (e.target.value)}>
      <input type="text"   className='w-full bg-white p-3 text-black' placeholder='Search' />
    </form>
      <div className='grid grid-cols-3 gap-5'>
          {
            data.results.filter( result  => (search === '' ? result : result.name.includes(search))).map(result  => <div key={result.name} className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={result.url}
                  alt='url' />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{result.name}</h2>
              </div>
            </div>)
          }
      </div>
    </>
  )
}

export default App
