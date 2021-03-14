import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../list.styles";

export const FormComponent = (props) => {
  const classes = useStyles();

  const { filter, setFilter } = props;
  return (
    <div className={classes.form}>
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </form>
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => setFilter("")}
        >
          New Search
        </Button>
      </div>
    </div>
  );
};
