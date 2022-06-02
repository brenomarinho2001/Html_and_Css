import DropdownUFC from "./DropdowUFC";
import DropdownQuixada from "./Dropdow_Quixada";

function Header() {


    return(
        <header>
            {/* Header */}
            <nav className='header'>
                    <a className="logo" href="/">QuiGuia</a>
                    <ul className="nav-list">
                        <DropdownUFC/>
                        <li className="item"><a href="/">Serviços</a></li>
                        <DropdownQuixada/>
                        <li className="item"><a href="/">Sobre nós</a></li>
                    </ul>
            </nav>
            </header>
    )
}

export default Header;