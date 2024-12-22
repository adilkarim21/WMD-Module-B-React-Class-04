import React from 'react';
import styles from './Card.module.css';
import propTypes from "prop-types";


const Card = ({ id, imgSRC, title, desc }) => {
  
    return (

        <>
            <div className={styles.CardsDiv}>
                <img className={styles.imgSetting} src={imgSRC} alt="" />
                <h2>{id}</h2>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </>
  
    )

}


Card.propTypes = {
    id: propTypes.number,
    imgSRC: propTypes.string,
    title: propTypes.string,
    desc: propTypes.string
};


export default Card
