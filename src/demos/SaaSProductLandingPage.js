import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";//
import Hero from "components/hero/FullWidthWithImage.js";//
import Features from "components/features/ThreeColWithSideImage.js";//
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";//
import FeatureWithSteps from "components/features/TwoColWithSteps.js";//
import FeaturesWithServices from "components/features/DashedBorderSixFeatures.js";//
import Pricing from "components/pricing/ThreePlans.js";//
import FAQ from "components/faqs/SingleCol.js";//
import Forms from "components/forms/SimpleContactUs";//
import Footer from "components/footers/FiveColumnWithBackground.js";//
import macHeroScreenshotImageSrc from "images/shop/logo.gif"
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-orange-300 text-orange-800`
          }
        ]}
      />
      <FeaturesWithServices
        heading={
          <>
          Our Professional <span tw="text-primary-500">Services</span>
          </>
      }
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing And Quality <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Will my website be mobile-friendly?",
            answer:
              "Yes, they all are. Mobile phones are the most used technological devices mainly to access the web. The websites we make are responsive in tablets, ipads, mobile phones and pcs."
          },
          {
            question: "How long does it take to make a website?",
            answer:
              "This depends on how many pages you need in the website, along with how co-operative and timely you are with your instructions and guidance. Normally one page websites take at most 60 hours to create and deploy."
          },
          {
            question: "What if I need help with my website later after deployment ?",
            answer:
              "Upon deploying a website we are sure that it will definitely work brilliantly. If you need help or want to improve it later, we will be happy to help! "
          },
          {
            question: "Is your work original or do you work off of templates ?",
            answer:
              "Definitely a bit off both. I say this because our team members check out existing websites or templates to get inspiration. It is however totally your decision, to customize and work from nothing, or to work from a template or existing website. All your websites will most definitely be unique! "
          },
          {
            question: "Do you charge for revisions ?",
            answer:
              "No we do not. Revisions upto the first two weeks after the job is done are free. Anything after 14-30 days will be done upon a cheap agreed upon price."
          },
          {
            question: "What file types will be delivered at the end of the design process ?",
            answer:
              "Among the typical file formats for different representations, we encourage that you choose your preferred file format."
          }
        ]}
      />
      <Forms/>
      <Footer/>
    </AnimationRevealPage>
  );
}
