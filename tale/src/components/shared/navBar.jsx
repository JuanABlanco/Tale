import logo from "../../logo.svg"

const NavBar = ({children}) => {
    return(

        <nav >
            <ul className="space-x-4 place-items-center pt-2 shadow bg-gray-900 hidden md:flex" >
                <img src={logo} alt="logo"className="h-10 block px-2"/>
                {children}
            </ul>
        </nav>

    )
}

export default NavBar;