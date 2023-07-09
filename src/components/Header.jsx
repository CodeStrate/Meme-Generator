import Logo from '../assets/Troll.svg'

export default function Header(){
    return (
        <header className='header-section'>
            <img src={Logo} alt="troll face" className='header--logo'/>
            <h2 className='logo--title'>Meme Generator</h2>
            <h3 className='header--title'>React Course - Project 3</h3>
        </header>
    )
}