import { Link } from "react-router-dom";
import profile_pic from '../assets/profile-pic.png';
import './Global.css'

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="/" className="fw-bold navbar-brand d-flex logo">Foodie</a>

        <div className="navbar-collapse" id="leftBar">
            <ul className="navbar-nav d-flex">
                <li className="nav-item">
                    <Link to="/discussions" className="nav-link">Discussions</Link>
                </li>
                <li className="nav-item">
                    <Link to="/recipes" className="nav-link">Recipes</Link>
                </li>
            </ul>
        </div>
        
        <div className="search-form d-flex">
            <input type="search" placeholder="Search" className="search-bar form-control rounded-0" aria-label="Search" />
            <button type="submit" className="btn search-btn rounded-0">Search</button>
        </div>

        <div className="navbar-collapse" id="rightBar">
            <ul className="navbar-nav d-flex">
                <li className="nav-item">
                    <a href="/" className="nav-link">Register Now</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link user-icon">
                        <img src={profile_pic} alt="profile_pic.png" className="img-fluid profile-pic" />
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
