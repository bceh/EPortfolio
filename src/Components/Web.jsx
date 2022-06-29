import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Introduction from "./Introduction";
import eportfolio2 from "../resources/eportfolio2.webp";
import signInUp from "../resources/signInUp.webp";
import dashboard from "../resources/dashboard.webp";
import transaction from "../resources/transaction.webp";
import changePage from "../resources/changePage.webp";
import report from "../resources/report.webp";
import manage from "../resources/manage.webp";
import profile from "../resources/profile.webp";
import "./bg.css";

const Web = () => {
  const [value, setValue] = useState(0);
  const webHandler = (event, newValue) => {
    setValue(newValue);
  };
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    params.web && params.web === ":moneybank" && setValue(0);
    params.web && params.web === ":eportfolio" && setValue(1);
    params.web &&
      params.web !== ":moneybank" &&
      params.web !== ":eportfolio" &&
      navigate("/notFound");
  }, []);

  const moneybankTitle = "A Personal Financial App";
  const moneybankClipImgs = [
    signInUp,
    dashboard,
    transaction,
    changePage,
    report,
    manage,
    profile,
  ];
  const moneybankDescription =
    "This is a fully functionalised personal financial app. You can easily add, modify, and delete transaction. You can also personalise your accounts and your transaction categories.";
  const moneybankInstructions = [
    "Account validation is implemented. A demo account is provided. Also, sign up is easily to be done in 1 min.",
    "A dashboard is created showing most important informations.",
    "In account page, transactions can be filtered by types and accounts and/or sorted by date or amount.",
    "Transaction modification and addtion are implemented.",
    "Monthly report is created by using Echart.",
    "A manage page is created to let user change their ccount name and opening balance and categories' name easily.",
    "User can easily personallise their profile. Name, email, password can be esialy changed. They can even delete the whole account.",
  ];
  const moneybankTechs = [
    "1. This project is developed with React.js and Material UI framework.",
    "2. This project is built following 12-column gird that implements 100% responsiveness fit for any screeen.",
    "3. This project applies No backend. All data is stored and managed by Rudex.",
    "4. This project utilises Apache ECharts that implements visualisation of user's financial data.",
  ];
  const eportfolioTitle = "A Straight Forward E-Portfolio";
  const eportfolioClipImgs = [eportfolio2];
  const eportfolioDescription =
    "This website is a straight forward E-Portfolio built by using React and Material UI, which brings you here!";
  const eportfolioInstructions = [
    "It contains 5 pages, including Home, Web, Games, about me, and resume. Hope you have fun!",
  ];
  const eportfolioTechs = [
    "1. This project is developed with React.js and Material UI framework.",
    '2. One memory puzzle game, named "who am I", was built to introduce me to you in a funny way.',
    "3. Use flexbox to make the website 100% responsive to any screen size.",
    "4. Use react-router-dom to manage navigate between multiple pages.",
  ];
  const webPath = "https://main.d3rm4tzj5nzd1n.amplifyapp.com/";
  return (
    <div>
      <Typography sx={{ mt: 0 }} variant="h4">
        Web
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={webHandler}>
          <Tab label="Moneybank" />
          <Tab label="E-Portfolio" />
        </Tabs>
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 160px)",
          overflow: "scroll",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 100,
            width: "100%",
          }}
        >
          {value === 0 && (
            <Box sx={{ animation: "fade 1s" }}>
              <Introduction
                title={moneybankTitle}
                description={moneybankDescription}
                clipImgs={moneybankClipImgs}
                instructions={moneybankInstructions}
                techs={moneybankTechs}
                webPath={webPath}
              />
            </Box>
          )}
          {value === 1 && (
            <Box sx={{ animation: "fade 1s" }}>
              <Introduction
                title={eportfolioTitle}
                description={eportfolioDescription}
                clipImgs={eportfolioClipImgs}
                instructions={eportfolioInstructions}
                techs={eportfolioTechs}
              />
            </Box>
          )}
        </Box>
        <Box className="g-bg g-g-bg">
          <Box className="g-polygon-1"></Box>
          <Box className="g-polygon-2"></Box>
          <Box className="g-polygon-3"></Box>
        </Box>
      </Box>
    </div>
  );
};

export default Web;
