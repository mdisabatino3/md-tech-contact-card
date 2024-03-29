import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  card: {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    minWidth: 275,
    fontFamily: "Source Sans Pro",
    backgroundColor: "#262626"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  name: {
    fontSize: 14,
    marginBottom: "2em",
    color: "#FFFFFF"
  },
  item: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: "1em",
    color: "#FFFFFF"
  },
  pos: {
    marginBottom: 12
  },
  avatar: {
    width: 100,
    height: 100,
    left: "50%",
    transform: "translate(-50%,0)",
    marginBottom: "1em"
  },
  link: {
    margin: theme.spacing(1),
    color: "#31E89F",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export const ContactCard = () => {
  const classes = useStyles();
  const showCard = true;
  const preventDefault = event => event.preventDefault();
  return (
    <>
      {showCard && (
        <>
          <Backdrop open={true} />
          <Card raised justify="center" className={classes.card}>
            <CardContent>
              <Avatar
                alt="Michael DiSabatino"
                src="mikeheadshot.jpeg"
                className={classes.avatar}
              />
              <Typography
                className={classes.name}
                color="textSecondary"
                gutterBottom
              >
                Michael DiSabatino
              </Typography>
              <Typography
                className={classes.item}
                color="textSecondary"
                gutterBottom
              >
                git:
                <Link
                  href="https://github.com/mdisabatino3/"
                  onClick={preventDefault}
                  className={classes.link}
                >
                  mdisabatino3
                </Link>
              </Typography>
              <Typography
                className={classes.item}
                color="textSecondary"
                gutterBottom
              >
                email:
                <a
                  className={classes.link}
                  href="mailto: mdisabatino3@gmail.com"
                >
                  mdisabatino3@gmail.com
                </a>
              </Typography>
              <Typography
                className={classes.item}
                color="textSecondary"
                gutterBottom
              >
                phone: (302) 893-8162
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
};
