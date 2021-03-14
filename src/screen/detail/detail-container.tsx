import React from "react";
import { Link, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  media: {
    height: 300,
  },
});

interface DetailPageParams {
  id: string;
}

interface MemberDetailEntity {
  id: string;
  name: string;
  species: string;
  gender: string;
  image: string;
}

const createDefaultMemberDetail = (): MemberDetailEntity => ({
  id: "",
  name: "",
  species: "",
  gender: "",
  image: "",
});

export const DetailPage: React.FC = () => {
  const classes = useStyles();

  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );

  const { name, species, gender, image } = member;
  const { id } = useParams<DetailPageParams>();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h3" component="h1">
          {name}
        </Typography>
        <Typography variant="h6" component="p">
          Gender: {gender}
        </Typography>
        <Typography variant="h6" component="p">
          Specie: {species}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/">Back to previous page</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
