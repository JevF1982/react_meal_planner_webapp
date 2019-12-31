import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%"
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },

  textStyle: {
    color: "brown",
    fontFamily: "Roboto"
  },
  textStyle2: {
    marginRight: "10px"
  },
  buttonStyle: {
    display: "inline-block",
    backgroundColor: "brown"
  }
}));

export default function IngredientList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List>
            <ListItem>
              <ListItemText
                secondary={props.Quantity}
                className={classes.textStyle2}
              />
              <ListItemText
                primary={props.Ingredient}
                className={classes.textStyle}
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => props.handleDelete(props.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => props.handleEdit(props)}
                >
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonStyle}
          >
            Add to meal
          </Button>
        </div>
      </Grid>
    </div>
  );
}
