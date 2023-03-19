import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { LinkedIn, Instagram, GitHub, Email } from "@material-ui/icons";
import IconBtn from "../IconBtn";
import DarkModeSwitcher from "../DarkModeSwitcher";
import loaderContext from "../../contexts/loaderContext";

const Social = ({ mobile }) => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();

    useEffect(() => {
        if (!isLoading) {
            controls.start(i=>({
                opacity: 1,
                y: 0,
                transition: {
                    delay: 1.8+(i*0.1),
                },
            }));
        } else {
            controls.start({ opacity: 0, y: 0 });
        }
    }, [isLoading, controls]);

    if (mobile) {
        return (
            <div className={classes.mobileWrapper}>
                <IconBtn icon={GitHub} m={1} href="https://github.com/creativebull" />
                <IconBtn icon={Email} m={1} href="creativebull0103@gmail.com" />
            </div>
        );
    } else {
        return (
            <motion.div className={classes.wrapper}>
                <motion.div animate={controls} custom={0}>
                    <IconBtn icon={GitHub} m={1} href="https://github.com/creativebull" />
                </motion.div>
                <motion.div animate={controls} custom={3}>
                    <IconBtn icon={Email} m={1} href="creativebull0103@gmail.com" />
                </motion.div>
            </motion.div>
        );
    }
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        position: "fixed",
        bottom: 0,
        right: 0,
        padding: theme.spacing(2),
        zIndex: 100,
    },
    mobileWrapper: {
        display: "flex",
    },
}));

export default Social;
