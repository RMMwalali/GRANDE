import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Shop from "components/cards/TabCardGrid.js";//
import Footer from "components/footers/FiveColumnWithBackground.js";//
import FAQ from "components/faqs/SingleCol.js";//

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Shop/>
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
