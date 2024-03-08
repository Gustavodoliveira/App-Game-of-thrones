import Link from 'next/link'
import Class from './header.module.css'
import Image from 'next/image'
import logo from '../../assets/logo_got-removebg-preview.png'

const Header = () => {
    return (
        <>
            <header className={Class.Container}>

                <Image src={logo} alt='Logo Game of Thrones' width={150} height={70} loading='lazy' />



                <nav>
                    <ul>
                        <li><Link href={'/'}>Personagens</Link></li>
                        <li><Link href={'/'}>About</Link></li>
                        <li><Link href={'/'}>Something</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header