

const NavItem = ({ href, isActive, children }) => {
    return (
        <li>
          <a
            href={href}
            className={`block px-4 py-2 rounded-2xl text-gray-50 object-contain hover:border ${isActive ? 'border-2 ' : ''} `}
          >
            {children}
          </a>
        </li>
    )
}

export default NavItem;