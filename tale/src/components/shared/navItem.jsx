

const NavItem = ({ href, isActive, children }) => {
    return (
        <li>
          <a
            href={href}
            className={`block px-4 py-3  text-gray-50 object-contain opacity-25  
              ${isActive ? 'border-b-2 opacity-100' 
                : 'hover:border-b hover:opacity-100'} `}
          >
            {children}
          </a>
        </li>
    )
}

export default NavItem;