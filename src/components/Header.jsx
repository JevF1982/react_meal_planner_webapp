import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import DateRangeIcon from "@material-ui/icons/DateRange";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="primary"
        aria-label="icon label tabs example"
        centered
      >
        <Tab icon={<FastfoodIcon />} label="INGREDIENTS" />
        <Tab icon={<ViewWeekIcon />} label="WEEK PLANNER" />
        <Tab icon={<DateRangeIcon />} label="MONTH PLANNER" />
      </Tabs>
    </Paper>
  );
};

export default Header;
