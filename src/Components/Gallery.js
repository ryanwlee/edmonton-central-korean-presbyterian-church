import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Gallery.css";
import Swiper from "react-id-swiper";
import { sortResult } from "./helper";

// css styles
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

// Fetch list of photos src urls from php server / db
async function fetchData() {
  const url = process.env.REACT_APP_API_SERVER_URL_GALLERY;
  const response = await fetch(url);
  const result = await response.json();
  // Use helper function to sort the result
  const sortedResult = sortResult(result);

  console.log(sortedResult);
  return sortedResult.data;
}

function Gallery() {
  const classes = useStyles();
  const initState = {
    images: []
  };
  // Hook to save a list of photos
  const [images, setImages] = useState(initState.images);

  // Initialize hook to get a list of photos and put them in a state
  useEffect(() => {
    async function getNews() {
      const result = await fetchData();
      setImages(result);
    }
    getNews();
  }, []);

  // params for Swiper
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
        {/* Render images by mapping */}
        {images && images.length > 0 ? (
          <div className={classes.gallery}>
            <Swiper {...params}>
              {images.map(img => {
                return <img src={`${img.src}`} alt="img" key={img.src} />;
              })}
            </Swiper>
          </div>
        ) : (
          ""
        )}
      </ScrollAnimation>
    </div>
  );
}

export default Gallery;
