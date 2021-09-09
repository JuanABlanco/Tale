import logo from "../../logo.svg"

const NavBar = ({children}) => {
    return(

        <nav >
            <ul className="flex space-x-4 place-items-center pt-2">
                <img src={logo} alt="logo"className="h-10 block px-2"/>
                {children}
            </ul>
        </nav>

    )
}

export default NavBar;