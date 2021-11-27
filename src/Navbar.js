import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Banes blog</h1>
            <div className="links">
                <Link to="/create">Home</Link>
                <Link to="/create" style={{color: 'white', backgroundColor: '#f1356d'}}>New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;