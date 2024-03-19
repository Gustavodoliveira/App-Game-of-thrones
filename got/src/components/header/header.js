
import Class from './header.module.css'
import Image from 'next/image'
import logo from '../../../public/assets/logo_got-removebg-preview.png'
import NavLink from '../Nav-link/nav-link'
import Link from 'next/link'


const Header = () => {
    return (
        <>
            <header className={Class.Container}>

                <Link href={'/'}>
                    <Image src={logo} alt='Logo Game of Thrones' width={150} height={70} loading='lazy' />
                </Link>

                <nav className={Class.Container_navigation}>
                    <ul>
                        <li><NavLink href={'/character'}>Character</NavLink></li>
                        <li><NavLink href={'/about'}>About</NavLink></li>
                        <li><NavLink href={'/character'}>Character</NavLink></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header