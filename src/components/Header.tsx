import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import userIcon from '../assets/user.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'

export const navigation =[
    {
        label : 'Tv Shows',
        href : 'tv'
    },
    {
        label : 'Movies',
        href :'movie'
    }
]
const Header = () => {
const [searchInput, setSearchInput] = useState<string>('');
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
}
const navigate = useNavigate();

useEffect(() => {
    searchInput && navigate(`./search?q=${searchInput}`)
},[searchInput])
    
  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-90'>
        <div className='container mx-auto px-3 flex items-center h-full'>
            <Link to="/"><img 
            src={logo}
            alt='logo'
            width={120}
            />
            </Link>
            <nav className='flex items-center gap-1 ml-5'>
                {
                navigation.map((lk, index) => {
                    return(
                        <div>
                            <NavLink key={lk.label} to={lk.href} 
                            className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && 'text-neutral-100'}`}>
                                {lk.label}
                            </NavLink>
                        </div>
                    )
                })
                }
            </nav>

<div className='ml-auto flex items-center gap-5'>
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='Search here...'
            onChange={e => setSearchInput(e.target.value)}
            value={searchInput}
            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
        />
        <button className='text-2xl text-white'>
                <IoSearchOutline/>
        </button>
    </form>
    <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
        <img
            src={userIcon}
            width='w-ful h-full' 
        />
    </div>
</div>
        </div>
    </header>
  )
}

export default Header