import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
              <p>0</p>
            </Box>
          )}
          {value === 1 && (
            <Box sx={{ animation: "fade 1s" }}>
              <p>1</p>
            </Box>
          )}
        </Box>
        <Box className="g-g-bg">
          <Box className="g-g-polygon-1"></Box>
          <Box className="g-g-polygon-2"></Box>
          <Box className="g-g-polygon-3"></Box>
        </Box>
      </Box>
    </div>
  );
};

export default Web;
