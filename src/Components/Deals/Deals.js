import React from 'react';
import { motion } from 'framer-motion';
import './Deals.css';

const bounceTransition = {
    y: {
        duration: 0.6,
        yoyo: Infinity,
        ease: "easeOut"
    }
};
const bounceTransition2 = {
    y: {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeOut"
    }
};
const bounceTransition3 = {
    y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeOut"
    }
};

const Deals = () => {
    return (
        <div className="container mt-5 text">
            <div className="d-flex justify-content-center align-items-center balls">
                <motion.span className="ballStyle m-3" transition={bounceTransition} animate={{ y: ["100%", "-100%"], backgroundColor: "black" }} />
                <motion.span className="ballStyle m-3" transition={bounceTransition2} animate={{ y: ["100%", "-100%"], backgroundColor: "gray" }} />
                <motion.span className="ballStyle m-3" transition={bounceTransition3} animate={{ y: ["100%", "-100%"], backgroundColor: "black" }} />
            </div>

        </div>
    );
};

export default Deals;