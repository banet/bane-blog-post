const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Banes blog</h1>
            <div className="links">
                <a href="/create">Home</a>
                <a href="/create" style={{color: 'white', backgroundColor: '#f1356d'}}>New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;