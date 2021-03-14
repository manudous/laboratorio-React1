import React from "react";
import { useDebounce } from "use-debounce";

import { MemberEntity } from "../../types/MemberEntity";

import noresult from "../../assets/noresults.png";
import Grid from "@material-ui/core/Grid";
import { GridComponent } from "./components/grid-component";
import { Typography } from "@material-ui/core";
import { useStyles } from "./list.styles";
import {FormComponent} from "./components/form-component";

export const ListPage: React.FC = () => {
  const classes = useStyles();

  const [filter, setFilter] = React.useState("");
  const [debounceFilter] = useDebounce(filter, 1500);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const getMembers = (filter) => {
    fetch(`https://rickandmortyapi.com/api/character?name=${filter}`)
      .then((response) => response.json())
      .then((json) => setMembers(json.results));
  };

  React.useEffect(() => {
    getMembers(filter);
  }, [debounceFilter]);

  return (
    <div className={classes.container}>
      
      <FormComponent filter={filter} setFilter={setFilter} />

      <Grid
        container
        className={classes.containerGrid}
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {members !== undefined ? (
          members.map((member) => <GridComponent key={member.id} {...member} />)
        ) : (
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              No hay ningún personaje que coincida con la búsqueda: {filter}
            </Typography>

            <img className={classes.img} src={noresult} alt="noresultSearch" />
          </Grid>
        )}
      </Grid>
    </div>
  );
};
