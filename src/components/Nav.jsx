import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'
const Nav = () => {
  return (
    <header className='padding-x z-10 py-8 w-full absolute'>
        <nav className='flex justify-between items-center max-container'>
            <a href="./">
                <img 
                    src={headerLogo} 
                    alt="companyLogo"
                    width={130}
                    height={29}
                    
                />
            </a>
            {/* Desktop View */}
            {/* Properties , max-lg:hidden mean if > lg view:hidden */}
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
               {navLinks.map((item => (
                <li key={item.label}>
                    <a 
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'>
                        {item.label}
                    </a>
                </li>
               )))}
            </ul>

            {/* Mobile View */}
            <div>
                <img 
                    src={hamburger} 
                    alt="Hamburger"
                    width={25}
                    height={25}
                    className='hidden max-lg:block' />
            </div>

        </nav>
    </header>
  )
}

export default Nav