import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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
  desc: {
    fontSize: "1rem",
    marginTop: "30px",
    textAlign: "center",
    marginBottom: "60px"
  }
}));

function Contact(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"contact"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        {/* Header for contact section */}
        <div className={classes.header}>
          <Typography variant="h3" component="h3">
            오시는 길
          </Typography>
          <Divider />
        </div>
        {/* Embed google map for church */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9508.700021655613!2d-113.4725713!3d53.4295791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0cee281dde253b7!2sEdmonton%20Central%20Korean%20Presbyterian%20Church!5e0!3m2!1sen!2sca!4v1584244356731!5m2!1sen!2sca"
          style={{ border: 0, width: "100%", height: "500px" }}
          aria-hidden="false"
        ></iframe>
        {/* Contact details - address / phone number / email */}
        <div className={classes.desc}>
          <Typography variant="body1" display="block" gutterBottom>
            {props.address}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            T6X 0P7
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            {props.phone}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            {props.email}
          </Typography>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Contact;
