import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x z-10  py-8  w-full absolute'>
        <nav className='flex justify-between items-center border-2 border-red-300 max-container'>
            <a href="./">
                <img 
                    src={headerLogo} 
                    alt="companyLogo"
                    width={130}
                    height={29}
                    
                />
            </a>
            {/* Desktop View (max-lg:hidden if not meet up lg view , make it invisible */}                                          
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </ul>
        </nav>
    </header>
  )
}

export default Nav