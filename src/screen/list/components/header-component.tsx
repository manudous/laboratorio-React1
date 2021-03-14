import { Hidden } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useStyles } from "../list.styles";

export const Header = (props): JSX.Element => {
  console.log(props);
  const { filter, setFilter, logo } = props;

  const classes = useStyles();

  return (
    <>
      <Hidden xsDown>
        <div>
          <img src={logo} alt="header" />
        </div>
      </Hidden>

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
    </>
  );
};
