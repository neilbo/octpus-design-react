import React, { SetStateAction } from "react";
import Cloud from "./pages/pricing/components/CloudPricing";
import Server from "./pages/pricing/components/ServerPricing";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Grid } from "@material-ui/core";
import { CloudCircle, StorageOutlined } from "@material-ui/icons";
import { ThemeProvider } from '@material-ui/core';
import camouflage from './theme';
import "./App.scss";

function App() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `pricing-tab-${index}`,
      'aria-controls': `pricing-tabpanel-${index}`,
    };
  }

  return (

    <>
      <ThemeProvider theme={camouflage}>

        <Box className="app">
          <Grid container spacing={10} >
            <Grid item xs></Grid>
            <Grid item xs={10} sm={8} className="grid-container">
              <h1>Pricing</h1>
              <Tabs value={selectedTab} onChange={handleChange} aria-label="Pricing Tabs">
                <Tab
                  label="Cloud"
                  {...a11yProps(0)}
                  icon={<CloudCircle color="primary" />}
                />
                <Tab label="Server"
                  {...a11yProps(1)}
                  icon={<StorageOutlined color="primary" />}
                />
              </Tabs>
              {selectedTab === 0 && <Cloud />}
              {selectedTab === 1 && <Server />}
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
