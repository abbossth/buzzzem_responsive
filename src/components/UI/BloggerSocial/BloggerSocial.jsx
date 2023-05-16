import React from "react";
import styles from "./BloggerSocial.module.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { TelegramSocial } from "components/Icons";

const useStyles = makeStyles((theme) => ({
  indicator: {
    display: "none",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={styles.panel}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const BloggerSocial = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.social}>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          bgcolor: "#fff",
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            width: "204px",
          }}
          TabIndicatorProps={{ className: classes.indicator }}
        >
          {[1, 2, 3, 4].map((el, index) => (
            <Tab
              label={<p>Item One</p>}
              icon={<TelegramSocial />}
              {...a11yProps(index)}
              key={index}
              sx={{
                color: "var(--text-color) !important",
                background: value == index && "#F1F7FF",
                borderRadius: "10px 0px 0px 10px",
                display: "flex !important",
                flexDirection: "row !important",
                gap: "8px !important",
                textTransform: "capitalize !important",
                justifyContent: "flex-start",
              }}
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </div>
  );
};

export default BloggerSocial;
