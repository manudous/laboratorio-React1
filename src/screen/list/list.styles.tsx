import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerGrid: {
    flexGrow: 1,
    backgroundColor: "#049db1",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "1.5rem",
  },
  button: {
    backgroundColor: "#049db1",
    color: "#fff",
    fontWeight: "bold",
    margin: "1.5rem",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});
