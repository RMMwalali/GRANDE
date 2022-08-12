import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import nftDev from "images/shop/NFTdev.jpg";
import ecommerce from "images/shop/e-commerce.jpg";
import blog from "images/shop/blog.jpg";
import admin from "images/shop/adminSite.jpg";
import portfolio from "images/shop/portfolio.jpg";
import BlockchainDev from "images/shop/blockchaindev.jpg";
import dataMining from "images/shop/data-mining.jpg";
import gameDev from "images/shop/gamedev.jpg";
import logoDesign from "images/shop/logoDesign.jpg";
import businessCard from "images/shop/businesscard.jpg";
import websiteDesign from "images/shop/webdesign.jpg";
import landingPage from "images/shop/landingPageDesign.jpg";
import NFTart from "images/shop/NFTart.jpg";
import imageEditing from "images/shop/imageEditing.jpg";
import UIUX from "images/shop/uiux.jpg";
import socialMediaDesign from "images/shop/socialmediadesign.jpg";
import lottie from "images/shop/lottieanime.gif";
import characterAnime from "images/shop/character.gif";
import logoAnime from "images/shop/rgoogle.gif";
import NFT from "images/shop/nft.gif";
import whiteboard from "images/shop/whiteboard.gif";
import animatedExplainer from "images/shop/explainer.gif";
import videoandPhotography from "images/shop/videoandphotography.gif";
import socialmediaads from "images/shop/socialmediaads.jpg";
import videoEditing from "images/shop/videoEditing.jpg";
import writingandEditing from "images/shop/editing.jpg";
import technicalWriting from "images/shop/technicalWriting.jpg";
import UXwriting from "images/shop/UXwriting.jpg";
import websiteContent from "images/shop/websiteContent.jpg";
import bookEditing from "images/shop/bookEditing.jpg";
import productDescriptions from "images/shop/productdescriptions.jpg";
import resumeWriting from "images/shop/resumewriting.jpg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Marketplace",
  tabs = {
    Programming: [
      {
        imageSrc: nftDev,
        title: "NFT Development",
        content: "Fully covered NFT launch package.",
        price: "$599",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:ecommerce,
        title: "E-commerce",
        content: "Online Marketplace with cart",
        price: "$299",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc:blog,
        title: "Blog Site",
        content: "One page responsive blog",
        price: "$199",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc: portfolio,
        title: "Portfolio Site",
        content: "Attractive display of your skills",
        price: "$199",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc: admin,
        title: "Administration site",
        content: "Landing page for analytics",
        price: "$299",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc: BlockchainDev,
        title: "Blockchain Dapps",
        content: "Dapps along with unique tokens",
        price: "$499",
        rating: "4.9",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc: dataMining,
        title: "Data Mining and Scraping",
        content: "Easy and swift data collection",
        price: "$199",
        rating: "4.9",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc: gameDev,
        title: "Game Development",
        content: "High graphic and functional games",
        price: "$399",
        rating: "4.1",
        reviews: "26",
        url: "#"
      }
    ],
    Graphics: [
      {
        imageSrc: logoDesign,
        title: "Logo Design",
        content: "Eye-catching logo design",
        price: "$99",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:businessCard,
        title: "Business Card Design",
        content: "Business card design and illustration",
        price: "$99",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc: websiteDesign,
        title: "Website Design",
        content: "Design the website of your dreams",
        price: "$199",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc: landingPage,
        title: "Landing Page Design",
        content: "Creative landing page design",
        price: "$99",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc: NFTart,
        title: "NFT Art",
        content: "Generation and bulk upload of NFTs",
        price: "$299",
        rating: "5.0",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc: imageEditing,
        title: "Image Editing",
        content: "Photoshop, filters and effects, etc",
        price: "$199",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc: UIUX,
        title: "UI/ UX Design",
        content: "Responsive design for app or website",
        price: "$249",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc: socialMediaDesign,
        title: "Social Media Design",
        content: "Boost your social life",
        price: "$199",
        rating: "4.2",
        reviews: "83",
        url: "#"
      },
    ],
    Video: [
      {
        imageSrc: lottie,
        title: "Lottie Animations",
        content: "Lottie animation and illustration",
        price: "$199",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:characterAnime,
        title: "Character Animation",
        content: "Animate avatars and characters",
        price: "$199",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc: logoAnime,
        title: "Logo Animations",
        content: "Animated and attractive HD logo",
        price: "$199",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc: NFT,
        title: "Animated NFT art",
        content: "Value added animated NFTs",
        price: "$199",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc: whiteboard,
        title: "Whiteboard Explainers",
        content: "Whiteboard explainer video",
        price: "$199",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc: animatedExplainer,
        title: "Animated Explainer Video",
        content: "Explainer video with animated characters",
        price: "$199",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc: videoandPhotography,
        title: "Video and Photography",
        content: "Video and image production",
        price: "$299",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc: socialmediaads,
        title: "Social Media Ads",
        content: "Short but well explained videos",
        price: "$199",
        rating: "4.2",
        reviews: "79",
        url: "#"
      },
    ],
    Writing: [
      {
        imageSrc: technicalWriting,
        title: "Technical Writing",
        content: "Professional technical articles",
        price: "$299",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:UXwriting,
        title: "UI / UX Writing",
        content: "Elaborate writing to fit your UI/UX",
        price: "$199",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc: websiteContent,
        title: "Website Content",
        content: "Perfect words to fit your website",
        price: "$199",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc: writingandEditing,
        title: "Proofreading",
        content: "Ensure correct spelling and grammar",
        price: "$99",
        rating: "4.8",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc: bookEditing,
        title: "Book Editing",
        content: "Get your book publish ready",
        price: "$249",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc: videoEditing,
        title: "Video Editing",
        content: "Fine tune short and long videos",
        price: "$199",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc: productDescriptions,
        title: "Product Descriptions",
        content: "Short but descriptive phrases",
        price: "$99",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc: resumeWriting,
        title: "Resume Writing",
        content: "Step by step display of your achievements",
        price: "$199",
        rating: "4.2",
        reviews: "103",
        url: "#"
      },
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Buy Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};