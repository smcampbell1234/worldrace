import { Link, useNavigate } from "react-router-dom";

const Navbar = ({user}) => {
  const navigate = useNavigate();
  //TODO: logout button and login
  return (
    <h4>
      <Link to="/map">Map</Link>&nbsp;&nbsp;
      <Link to="/log">Log</Link>&nbsp;&nbsp;
      <Link to="/team">team</Link>&nbsp;&nbsp;
      <Link to="/store">store</Link>&nbsp;&nbsp;
      <Link to="/leaderboard">leaders</Link>&nbsp;&nbsp;
      <span>{user.name}</span>
    </h4>
  )
}

export default Navbar;