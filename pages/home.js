/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "/pages-sections/presentation-page/SectionDescription.js";
import SectionComponents from "/pages-sections/presentation-page/SectionComponents.js";
import SectionCards from "/pages-sections/presentation-page/SectionCards.js";
import SectionContent from "/pages-sections/presentation-page/SectionContent.js";
import SectionSections from "/pages-sections/presentation-page/SectionSections.js";
import SectionExamples from "/pages-sections/presentation-page/SectionExamples.js";
import SectionFreeDemo from "/pages-sections/presentation-page/SectionFreeDemo.js";
import SectionOverview from "/pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "/pages-sections/presentation-page/SectionPricing.js";
import { PrismicLink, PrismicText } from "@prismicio/react";

import presentationStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import { createClient } from "../utils/prismic";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import SectionFeatures from "/pages-sections/pricing-page/SectionFeatures";

const useStyles = makeStyles(presentationStyle);

const PresentationPage = ({ articles, navigation, settings }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Learning Next JS"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      <Parallax image="/img/dubai.jpeg" className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  NextJS Material Kit
                  {/*<span className={classes.proBadge}>PRO</span>*/}
                </h1>
                <h3 className={classes.title}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/*<SectionDescription/>*/}
        {/*<SectionComponents/>*/}
        {/*<SectionCards/>*/}
        {/*<SectionContent/>*/}
        {/*<SectionSections/>*/}
        <SectionFeatures />
        {/*<SectionExamples/>*/}
        {/*<SectionFreeDemo/>*/}
        {/*<SectionOverview/>*/}
      </div>
      {/*<SectionPricing/>*/}
      {/*<SectionPreFooter />*/}
      {/*<SectionFooter />*/}
      {/*<ul className="grid grid-cols-1 gap-16">*/}
      {/*    {articles.map((article) => (*/}
      {/*        <div>*/}
      {/*        /!*<div>{article.id}</div>*!/*/}
      {/*        /!*<div>{JSON.stringify(article)}</div>*!/*/}
      {/*            <PrismicText field={article.data.title} />*/}
      {/*            /!*shdgduysg*!/*/}
      {/*            <div>*/}
      {/*                <PrismicNextImage field={prismicH.isFilled.image(article.data.featuredImage) && article.data.featuredImage} layout={"responsive"}/>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    ))}*/}
      {/*</ul>*/}
      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-footer-components"
                target="_blank"
                className={classes.footerBrand}
              >
                NextJS Material Kit PRO
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-footer-components"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-footer-components"
                    target="_blank"
                    className={classes.block}
                  >
                    Presentation
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={(e) => e.preventDefault()}
                    className={classes.block}
                  >
                    Discover
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={(e) => e.preventDefault()}
                    className={classes.block}
                  >
                    Payment
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/contact-us?ref=njsmkp-footer-components"
                    target="_blank"
                    className={classes.block}
                  >
                    Contact us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    color="white"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://dribbble.com/creativetim?ref=creativetim"
                    target="_blank"
                    color="white"
                    justIcon
                    simple
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    color="white"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default PresentationPage;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
}
