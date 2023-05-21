import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_20x20.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to='/' className=" normal-case text-xl"><img src={logo} alt=""  className='rounded-full'/></Link>
        </div>
        <div style={{marginRight:'455px'}} className='space-x-8'>
            <Link to='/' className='btn btn-outline btn-info'>Home</Link>
            <Link to='/alltoys' className='btn btn-outline btn-info'>All Toys</Link>
            <Link to='/blog' className='btn btn-outline btn-info'>Blogs</Link>
        </div>
        <div className="flex-none gap-2">
          { user?.email? 
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt={user?.email}/>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to="/alltoys" className="justify-between">
                  My Toys
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to='/addtoys'>Add Toys</Link></li>
              <li><button onClick={handleLogOut}>Logout</button> </li>
            </ul>
          </div>
          : <Link to="/login" className='btn btn-outline btn-info'>Login</Link>}
        </div>
      </div>
    );
};

export default NavBar;