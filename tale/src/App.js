import NavBar from './components/shared/navBar';
import NavItem from './components/shared/navItem';

 
function App() {
  return (
    <div className=" h-screen w-screen bg-gray-800">
      <NavBar>
        <NavItem href="/featured" isActive>Featured</NavItem>
        <NavItem href="/featured">Store</NavItem>
        <NavItem href="/featured">K-store</NavItem>
        <NavItem href="/featured">K-store</NavItem>
      </NavBar>
    </div>
  );
}

export default App;
