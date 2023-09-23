import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../utils/Constants";
import { useLocation } from 'react-router-dom'
import {Toggle} from "./";
import {Logout} from "./";
const withouSidebarRoutes = ["/SignUp","/Login"];
const Navbar = () => {
  
  const {pathname} = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;
  return(
  <Stack direction="row" alignItems="center" p={2}  spacing={60} sx={{ position:  "sticky", background: '#000', top: 0 }}>
    <Link to="/home" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <Logout/>
  </Stack>)
};

export default Navbar;
