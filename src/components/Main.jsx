import React from "react";
import "../styles/main.css";
import Text from '../components/Text'
import Author from '../components/Author'
import Botons from '../components/Botons'

const Main = () => {
  return (
  <>
    <div id="quote-box">
        <Text/>
        <Author/>
        <Botons/>
    </div>
  </>
  );
};

export default Main;
