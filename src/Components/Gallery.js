import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Gallery.css";
import Swiper from "react-id-swiper";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "300px",
    width: "85%",
    color: grey[800],
    wordBreak: "keep-all"
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    marginBottom: "50px",
    textAlign: "center"
  },
  gallery: {
    maxWidth: "900px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

const images = [
  {
    url:
      "https://edmontoncc.net/wp-content/uploads/2020/01/20200101_003144-768x363.jpg"
  },
  {
    url:
      "https://edmontoncc.net/wp-content/uploads/2020/01/20200101_002926-768x363.jpg"
  },
  {
    url:
      "https://edmontoncc.net/wp-content/uploads/2020/01/20200101_003337-768x363.jpg"
  },
  {
    url:
      "https://edmontoncc.net/wp-content/uploads/2020/01/20200101_002811-768x363.jpg"
  }
];

function Gallery() {
  const classes = useStyles();

  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    }
  };

  return (
    <div className={classes.root} id={"gallery"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <div className={classes.header}>
          <Typography variant="h3" component="h3">
            GALLERY
          </Typography>
          <Divider />
        </div>
        <div className={classes.gallery}>
          <Swiper {...params}>
            {images.map(img => {
              return <img src={`${img.url}`} alt="img" />;
            })}
          </Swiper>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Gallery;
