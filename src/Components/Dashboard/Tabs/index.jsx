import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from "@mui/lab/TabContext";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from '../Grid'
import './styles.css'
import List from '../List';


export default function CoinNavgationTabs({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   const style = {
    color: "var(--white)",
    // width: "20px",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#610094",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="coin-navigation" className='tablist'>
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        </Box>
        <TabPanel value="grid" className='tabpanel_div'>
            <div className='grid_flex_tabpanel'>
                {coins && coins.map((coin,index)=>{
                    return <Grid coin={coin} key={index} delay={(index + 8) % 8}/>
                })}
            </div>
        </TabPanel>
        <TabPanel value="list">
            <div className='list_tabpanel'>
                {coins && coins.map((coin,index)=>{
                    return <List coin={coin} key={index} delay={(index + 4) % 4} />
                })}
            </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
