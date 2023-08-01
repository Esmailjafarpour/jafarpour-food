import styles from "./Companies.module.css";

import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";

import React from 'react';

const Companies = () => {
     return (
          <div className={styles.container}>
               <SpaceX/>
               <Apple/>
               <Binance/>
               <Tesla/>
          </div>
     );
}

export default Companies;
