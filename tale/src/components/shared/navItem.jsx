

const NavItem = ({ href, isActive, children }) => {
    return (
        <li>
          <a
            href={href}
            className={`block px-4 py-2 rounded-md ${isActive ? 'bg-red-100 text-amber-700' : ''}`}
          >
            {children}
          </a>
        </li>
    )
}

export default NavItem;