/*import NavBar from './components/shared/navBar';
import NavItem from './components/shared/navItem';*/
import Nav from './components/shared/Nav'

/* <NavBar>
        <NavItem href="/featured" isActive>Featured</NavItem>
        <NavItem href="/featured">Store</NavItem>
        <NavItem href="/featured">K-store</NavItem>
        <NavItem href="/featured">K-store</NavItem>
      </NavBar>*/
function App() {
  return (
    <div className=" h-screen w-screen bg-gray-800">
      <Nav></Nav>
    </div>
  );
}

export default App;
