import Place from './Place.js'
import Search from './Search.js'
import Settings from './Settings.js'
import '../styles/components/Header.scss'

function Header() {
    return (
       <>
        <div className="Header">
        <Place />
        <Search />
        <Settings />
        </div>
       </>
    )
}

export default Header