import React from "react";
import { Link, generatePath } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MemberEntity } from "../../../types/MemberEntity";

const useStyles = makeStyles({
  root: {
    width: "20rem",
  },
  media: {
    height: "20rem",
  },
});

export const GridComponent = (props: MemberEntity) => {
  const { id, name, image } = props;

  const classes = useStyles();

  return (
    <Grid item key={id}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={generatePath("/detail/:id", { id })}>
            <span>READ MORE</span>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
