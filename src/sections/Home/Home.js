import React, { useContext, useEffect } from "react";
import { Typography, Button, makeStyles, Avatar } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import VideoLogo from "../../components/VideoLogo";
import { useTranslation } from "react-i18next";
import loaderContext from "../../contexts/loaderContext";
import AvatarImg from "../../assets/images/avatar.jpg";

const Home = () => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 1.2 },
      }));
    } else {
      controls.start({ opacity: 0, y: 5 });
    }
  }, [isLoading, controls]);

  return (
    <HomeContainer id="home">
      <div>
        <Avatar src={AvatarImg} style={{ width: 150, height: 150 }} />
        <Typography
          component={motion.div}
          animate={controls}
          custom={0}
          color="primary"
          variant="h1"
          style={{ marginBottom: "0px" }}
        >
          Juan Ryan
          {/* {t("home_welcome")}
                    <motion.div
                        style={{ display: "inline-block" }}
                        animate={{ rotate: [50, 90, 50] }}
                        transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                    >
                        👋
                    </motion.div>
                    , {t("home_i")} */}
        </Typography>
        {/* <motion.div animate={controls} custom={1}>
                    <VideoLogo />
                </motion.div> */}
        <Typography
          component={motion.p}
          animate={controls}
          custom={2}
          variant="h4"
          color="secondary"
          //   className={classes.subTitle}
        >
          Senior Software Engineer
        </Typography>
      </div>
    </HomeContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginBottom: "16px",
    fontSize: "75px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },
}));

export default Home;
