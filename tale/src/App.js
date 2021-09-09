import NavBar from './components/shared/navBar';
import NavItem from './components/shared/navItem';

 
function App() {
  return (
    <div className="divide-y divide-gray-100">
      <NavBar>
        <NavItem href="/featured" isActive>Featured</NavItem>
      </NavBar>
    </div>
  );
}

export default App;
