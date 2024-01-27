"use client"
import React from 'react'
import Logo from './_innercomponents/Logo'
import { ChevronDown, ChevronUp,  Globe, Menu, X } from 'lucide-react'
import Link from 'next/link'
import SearchComponent from './_innercomponents/SearchComponent'
import Tracker from './_innercomponents/Tracker'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from 'axios'

const leftItems = [
    {
        name: "Track",
        link: "/track"
    },
    {
        name: "Customer Service",
        link: "/customer-service"
    },

]
const rightItems = [
    {
        name: "Search",
        link: ""
    },
    {
        name: "Customer Service",
        link: ""
    },

]

const Navbar = () => {
    const [isToggleTracker, setIsToggleTracker] = React.useState(false)
    const [isToggle, setIsToggle] = React.useState(false)
    const [isCurrent, setIsCurrrent] = React.useState(0)
    const [isCurrentActive, setIsCurrrentActive] = React.useState(true)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [countries, setCountries] = React.useState<any[]>([])
    const router = useRouter()
    
    const onSubmit = async (event:any)=>{
        event.preventDefault()

        try{
        const encodedSearchQuery = encodeURI(searchQuery)
        router.push(`/track?q=${encodedSearchQuery}`)

        }catch(error){
        toast.error("An error occured.")
        }
    }
    React.useEffect(()=> {

        const fetchData = async () => {
            await axios.get('https://restcountries.com/v3.1/all')
            .then((response:any)=> {
                const countryOptions = response.data.map((country:any)=>({
                    label: country.name.common
                }))
                countryOptions.sort((a:any , b:any)=> a.label.localeCompare(b.label))
                setCountries(countryOptions)
            })
        }
        fetchData()
    },[])

    React.useEffect(()=> {
        const handleResize = () => {
            if(window.innerWidth >= 768){
                setIsToggle(false)
            }
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
  return (
    <>
    <section className='fixed w-full z-50'>
        <div className='flex bg-amber-400 h-20 justify-between'>
            <div className='bg-black px-5 flex items-center'>
                <Logo header={`/logo-no-background.svg`}/>
            </div>
            <nav className='hidden md:flex justify-between items-center px-7 w-full text-xs'>
                <div >
                        <div>
                            <ul  className='flex space-x-2 items-center'>
                                {leftItems.map((item, index)=> (
                                    <li key={index} className='flex items-center '  onClick={()=>{item.name === "Track" && setIsToggleTracker(!isToggleTracker)}}>
                                        <Link  href={item.link} >
                                            {item.name} 
                                        </Link>
                                        <span >{item.name === "Track" && (!isToggleTracker ? <ChevronDown size={20}/>: <ChevronUp size={20}/>)}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                </div>
                <div className='flex items-center space-x-2'>
                    <SearchComponent/>
                    <div className='flex items-center space-x-1'>
                        <Globe size={15}/>
                        <select className='bg-transparent border-0 w-24 outline-none'>
                            {countries.map((country, index)=> (
                                    <option key={index} className='px-2 w-full'>{country.label}</option>
                                ))}
                        </select>
                    </div>
                </div>

            </nav>
            {isToggleTracker &&
                <div className={`absolute w-full bg-white mt-20 h-fit shadow-md px-12 py-7 ${isToggleTracker && 'slide-in' }`}>
                    <Tracker/>
                </div>
            }                      

            <div className='flex items-center md:hidden '>
                <div>
                    {isToggle ? 
                    <div className='pr-7' onClick={()=> setIsToggle(!isToggle)}>
                        <X size={40} color='red' className=''  />
                    </div>
                    :
                    <div className='pr-7 ' onClick={()=> setIsToggle(!isToggle)}>
                        <Menu size={40} color='red' className={`${isToggle? "menu-rotate": ""}`} style={{transform: `rotate(${isToggle ? "20deg": ""})`, transition: "transform 2s linear"}}/>
                    </div>
                    }
                </div>
            </div>
        </div>
        <div className={` absolute !bg-white w-full z-10  md:hidden block text-sm ${isToggle && "!h-screen"}`}>
            {isToggle && 
                <nav>
                    <ul className='flex flex-col space-y-2 divide-y-2 '>
                        {leftItems.map((item, index) => (
                            <div key={index} >
                                <li className='p-3 font-bold  flex items-center justify-between' onClick={()=> {setIsCurrrent(index), item.name === "Track" && setIsCurrrentActive(!isCurrentActive)}}>
                                    <Link href={item.link} onClick={()=> setIsToggle(!isToggle)}>
                                        {item.name}
                                    </Link>
                                        <span >{item.name === "Track" && (!isCurrentActive ? <ChevronDown size={30}/>: <ChevronUp size={30}/>)}</span>
                                </li>


                            {isCurrentActive && item.name === "Track" && isCurrent === index &&
                            <div className='divide-y-0 border-0 py-3 px-4'>
                                <h2 className='text-sm text-red-500 font-bold'>TRACK YOUR SHIPMENT</h2>
                                <form onSubmit={onSubmit}>
                                    <div className=' flex flex-col w-full space-y-1 border-2 p-1 rounded-md'>
                                        <label htmlFor=''/>
                                        <input type="text"  id="search" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}  className="outline-none border-0 w-full text-sm" placeholder='Enter your tracking number'/>
                                        <button type='submit' className='bg-red-500 w-full text-white py-2 rounded-sm font-bold'>Track</button>
                                    </div>
                                </form>
                            </div>
                            }
                            </div>
                        ))}
                    </ul>

                <div className='flex flex-col w-full border-2 divide-y-2 space-x-2'>
                    <div className='p-3'>
                        <SearchComponent/>
                    </div>
                    <div className='flex space-x-1 items-center py-3'>
                        <Globe size={15}/>
                        <select className='bg-transparent border-0 outline-none'>
                            {countries.map((country, index)=> (
                                <option key={index}>{country.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                </nav>
            }
        </div>
        

      
    </section>
    </>
  )
}

export default Navbar
