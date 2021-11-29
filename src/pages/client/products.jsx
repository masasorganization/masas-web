import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';
import AppBar from '@mui/material/AppBar';
import BtnExit from "../../components/client/BtnExit";
import CardProduct from "../../components/client/CardProduct";
import React from 'react';

function Products(props) {
  const { match, history } = props;
  const { params } = match;
  const { category } = params;

  const tabIndex = {
    0: 'sugarfree',
    1: 'healthydough',
    2: 'organic'
  }

  const indexTab = {
    'sugarfree': 0,
    'healthydough': 1,
    'organic': 2
  }

  const [selTab, setSelTab] = React.useState(indexTab[category]);
  const clickTab = (event, newValue) => {
    history.push(`/products/${tabIndex[newValue]}`);
    setSelTab(newValue)
  };

  return (
    <div>
      <Grid container>
        <AppBar sx={{ bgcolor: '#ff4e00',
                      boxShadow: '0' }} position="static">
          <Tabs sx={{ height: '3.5rem' }} variant="fullWidth" value={selTab} onChange={clickTab}>
              <Tab sx={{ ...tabStyle }} label="Sin azúcar" />
              <Tab sx={{ ...tabStyle }} label="Masa saludable" />
              <Tab sx={{ ...tabStyle }} label="Orgánico" />
          </Tabs>
        </AppBar>
        {  selTab === 0 && <Sugarfree />}
        {  selTab === 1 && <HealthyDough />}
        {  selTab === 2 && <Organic />}
        <Grid item xs={12} md={12}>
          <BtnExit />
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;

const tabStyle = {
  color: "#ffffff",
  fontSize: {
    md: "1.2rem",
    xs: "0.9rem",
  },
  ":hover": {
    bgcolor: '#770047',
    color: '#ffffff'
  },
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: "700",
  textTransform: "none",
}

function Sugarfree() {
  return(
    <>
      <CardProduct />
      <CardProduct />
    </>
  )
}

function HealthyDough() {
  return(
    <>
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </>
  )
}

function Organic() {
  return(
    <>
      <CardProduct />
    </>
  )
}


