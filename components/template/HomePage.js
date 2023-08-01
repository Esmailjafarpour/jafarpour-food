import React from 'react';
import styles from "./HomePage.module.css";
import Banner from "../modules/Banner";
import Attribute from "../modules/Attributes";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";
import Companies from "../modules/Companies";
import Instruction from "../modules/Instruction";

const HomePage = () => {
     return (
          <div className={styles.container}>
               <Banner/>
               <Attribute/>
               <Definition/>
               <Guide/>
               <Companies/>
               <Instruction/>
               <Restrictions/>
          </div>
     );
}

export default HomePage;
