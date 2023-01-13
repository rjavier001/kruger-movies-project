import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";

const MainLayout = () => {

  return (
    <>          
    <GlobalLoading/>

      {/* Todo login modal */}      
      {/* login modal */}

      <Box display="flex" minHeight="100vh">
        {/* Todo header */}        
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
      {/* footer */}
    </>
  );
};

export default MainLayout;