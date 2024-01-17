"use client"
import { Search, X } from 'lucide-react'
import React from 'react'

const SearchComponent = () => {
    const [toggleInput, setToggleInput] = React.useState(false)
  return (
    <div>
        {toggleInput && 
        <div className={`flex ${toggleInput ? "input-slide-in": "input-slide-out"} border-b-2 border-black justify-between pb-2 cursor-pointer`}>
            <div className='flex items-center'>
                <Search  size={15}/>
                <form>
                    <label htmlFor=''>
                        <input type='text' placeholder='Search travel' name='search' id='search' className='border-0 outline-none bg-transparent placeholder:text-black/40 pl-1'/>
                    </label>
                </form>
            </div>
            <div onClick={()=> setToggleInput(!toggleInput)}>
                <X size={15}/>
            </div>
        </div>
        }
        <div className={` space-x-2 hover:text-orange-900 cursor-pointer ${toggleInput ? "hidden" : "flex"} items-center`} onClick={()=> setToggleInput(!toggleInput)}>
            <Search size={15}/>
            <p>Search</p>
        </div>
    </div>
  )
}

export default SearchComponent
