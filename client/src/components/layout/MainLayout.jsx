import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AuthModal from "../common/AuthModal";
import Footer from "../common/Footer";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import userApi from "../../api/modules/user.api";
import favoriteApi from "../../api/modules/favorite.api";
import { setListFavorites, setUser } from "../../redux/features/userSlice";

const MainLayout = () => {
  

  return (
    <>          
    <GlobalLoading/>

      {/* Todo login modal */}      
      {/* login modal */}
      <AuthModal/>

      <Box display="flex" minHeight="100vh">
        {/* Todo header */}  
        <Topbar/>      
        {/* header */}

        {/* main */}
        <Box
          component="main"
          flexGrow={1}
          overflow="hidden"
          minHeight="100vh"
        >
          <Outlet />
        </Box>
        {/* main */}
      </Box>

      {/* Todo footer */}  
      <Footer/>    
      {/* footer */}
    </>
  );
};

export default MainLayout;