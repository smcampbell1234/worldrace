import { Link, useNavigate } from "react-router-dom";

const Navbar = ({myUser,setMyUser}) => {
  const navigate = useNavigate();
  const logout = () => {
    setMyUser(null)
    localStorage.removeItem("user")
    navigate("/login")
  }
  return (
    <h4>
      <Link to="/map">Map</Link>&nbsp;&nbsp;
      <Link to="/log">Log</Link>&nbsp;&nbsp;
      <Link to="/team">team</Link>&nbsp;&nbsp;
      <Link to="/store">store</Link>&nbsp;&nbsp;
      <Link to="/leaderboard">leaders</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>{!!myUser && myUser.name}</span>&nbsp;&nbsp;
      <span className="logout" onClick={logout}>Log Out</span>
    </h4>
  )
}

export default Navbar;