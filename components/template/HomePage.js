import React from 'react';
import styles from "./HomePage.module.css";
import Banner from "../modules/Banner";
import Attribute from "../modules/Attributes";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";

const HomePage = () => {
     return (
          <div className={styles.container}>
               <Banner/>
               <Attribute/>
               <Definition/>
               <Guide/>
               <Restrictions/>
          </div>
     );
}

export default HomePage;
