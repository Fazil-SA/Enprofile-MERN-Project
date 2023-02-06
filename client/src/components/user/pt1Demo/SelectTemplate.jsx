import React, { useEffect, useState } from "react";
import { logo } from "../../../assets/user/index";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLocation, useNavigate } from "react-router-dom";


function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

//ecommerce,portfolio,landingpage
export default function BackToTop(props) {

  const navigate = useNavigate();
  const [portfolioCategory, setPortfolioCategory] = useState(false);
  const [ecommerceCategory, setEcommerceCategory] = useState(false);
  const [landingPageCategory, setlandingPageCategory] = useState(false);
  const location = useLocation();
  const category = location.state.category;
  const templateDetails = location.state;
  useEffect(() => {
    switch (category) {
      case "portfolio":
        setPortfolioCategory(true);
        break;
      case "ecommerce":
        setEcommerceCategory(true);
        break;
      case "landingpage":
        setlandingPageCategory(true);
        break;
      default:
        break;
    }
  }, [category]);

  // console.log(category)

  async function handleChange(event) {
    try {
      event.preventDefault();
      // console.log(portfolioCategory,ecommerceCategory,landingPageCategory)
      if (setPortfolioCategory) {
        navigate("/create-your-portfolio", { state: templateDetails });
      } else if (setEcommerceCategory) {
        navigate("/2");
      } else if (setlandingPageCategory) {
        navigate("/3");
      } else {
        console.log("no routes");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ background: "#001E3C" }}>
          <Typography variant="h6" component="div">
            <button
              onClick={handleChange}
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              <CheckCircleOutlineIcon />
              Select Template
            </button>
            {/* <span>Select Template</span> */}
            {/* </button> */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>


      
      

    </React.Fragment>
  );
}
