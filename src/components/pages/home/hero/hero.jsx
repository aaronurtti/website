import clsx from 'clsx';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import BlinkingText from 'components/shared/blinking-text';
import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
// import TypingText from 'components/shared/typing-text';
import LINKS from 'constants/links';
import useLottie from 'hooks/use-lottie';

import animationData from './data/hero-lottie-data.json';

const titlePhrases = ['Serverless', 'Fault-tolerant', 'Branchable', 'Bottomless'];

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [titleRef, isTitleInView, titleEntry] = useInView({ triggerOnce: true, threshold: 0.5 });

  const { animationRef, isAnimationPlaying, animationVisibilityRef } =
    // const { animationRef, isAnimationPlaying, isAnimationFinished, animationVisibilityRef } =
    useLottie({
      lottieOptions: {
        animationData,
        rendererSettings: {
          filterSize: {
            width: '400%',
            height: '400%',
            x: '-100%',
            y: '-100%',
          },
        },
      },
      useInViewOptions: { threshold: 0.5 },
    });

  const titleContent = (
    <span className="lg:hidden">
      <BlinkingText parentElement={titleEntry?.target} shouldAnimationStart={isAnimationPlaying}>
        {'Serverless Postgres'.split('').map((letter, index) => (
          <span
            className={clsx('animate-text-blink', letter === '/' && 'text-secondary-2')}
            style={{ animationPlayState: 'paused' }}
            key={index}
          >
            {letter}
          </span>
        ))}
      </BlinkingText>
    </span>
  );

  const titleContentLg = (
    <span className="hidden lg:inline">
      <BlinkingText parentElement={titleEntry?.target} shouldAnimationStart={isAnimationPlaying}>
        {`${titlePhrases[0]} Postgres`.split('').map((letter, index) => (
          <span className="animate-text-blink" style={{ animationPlayState: 'paused' }} key={index}>
            {letter}
          </span>
        ))}
      </BlinkingText>
    </span>
  );

  return (
    <section className="safe-paddings bg-black pt-[320px] 3xl:pt-[280px] 2xl:pt-[230px] xl:pt-[193px] lg:pt-12 md:pt-6">
      <Container
        className="z-20 flex items-center justify-between lg:flex-col lg:justify-center"
        size="md"
      >
        <div className="relative z-20 max-w-[860px] 3xl:max-w-[750px] 2xl:max-w-[610px] xl:max-w-[535px] lg:text-center">
          <Heading
            id="hero-title"
            className="with-highlighted-text-secondary-2"
            tag="h1"
            size="xl"
            theme="white"
            ref={titleRef}
          >
            {titleContent}
            {titleContentLg}
          </Heading>
          <p className="t-xl mt-7 max-w-[550px] text-white 2xl:mt-6 2xl:max-w-[480px] xl:mt-5 xl:max-w-[456px] lg:mx-auto lg:max-w-[414px]">
            Neon is a multi-cloud fully managed Postgres with a generous free tier.
            We separated storage and compute to offer autoscaling, branching, and bottomless storage.
          </p>
          <Button
            id="hero-button"
            className="mt-10 2xl:mt-8 xl:mt-7 md:mt-6"
            to={LINKS.earlyAccess}
            size="md"
            theme="primary"
          >
            Get early access
          </Button>
        </div>
        <div
          className="!absolute top-[-165px] -right-1 w-[820px] 3xl:top-[-122px] 3xl:right-[-17px] 3xl:w-[677px] 2xl:top-[-102px] 2xl:right-[-14px] 2xl:w-[564px] xl:top-[-88px] xl:right-[-132px] xl:w-[492px] lg:!relative lg:top-0 lg:right-0 lg:-mr-2.5 lg:mt-10 lg:w-[451px] sm:mt-8 sm:w-[391px] xs:w-[294px]"
          ref={animationVisibilityRef}
          aria-hidden
        >
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg width='820' height='830' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
            alt=""
            aria-hidden
          />

          <div className="absolute top-0 right-0 z-10 w-full" ref={animationRef} />
          <div className="absolute top-1/2 left-1/2 h-[888px] w-[888px] translate-x-[-51%] translate-y-[-51.6%] rounded-full border-2 border-gray-1 3xl:h-[716px] 3xl:w-[716px] 2xl:h-[600px] 2xl:w-[600px] xl:h-[520px] xl:w-[520px] lg:h-[480px] lg:w-[480px] sm:h-[420px] sm:w-[420px] xs:hidden" />
          <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] translate-x-[-51%] translate-y-[-51.6%] rounded-full border-2 border-gray-1 3xl:h-[796px] 3xl:w-[796px] 2xl:h-[670px] 2xl:w-[670px] xl:h-[590px] xl:w-[590px] lg:h-[540px] lg:w-[540px] sm:h-[470px] sm:w-[470px] xs:hidden" />
          <div className="absolute top-1/2 left-1/2 h-[1160px] w-[1160px] translate-x-[-51%] translate-y-[-51.6%] rounded-full border-2 border-gray-1 3xl:h-[924px] 3xl:w-[924px]  2xl:h-[780px] 2xl:w-[780px] xl:h-[700px] xl:w-[700px] lg:h-[630px] lg:w-[630px] sm:h-[520px] sm:w-[520px] xs:hidden" />

          <div className="absolute top-[-54px] left-[383px] h-6 w-6 3xl:top-[-37px] 3xl:left-[310px] 2xl:top-[-42px] 2xl:left-[126px] xl:hidden">
            <div className="absolute top-0 left-0 h-6 w-12 rounded-l-full bg-black" />
            <div
              className="circle circle-with-text circle-with-text-right !translate-x-0 !translate-y-0"
              data-text="Cloudflare Workers"
            />
          </div>

          <div className="absolute top-[89px] right-[81px] h-6 w-6 3xl:top-[67px] 3xl:right-[81px] 2xl:top-[2px] 2xl:right-[68px] xl:hidden lg:top-[1px] lg:right-[47px] lg:block sm:hidden">
            <div className="absolute top-0 left-0 h-6 w-12 rounded-l-full bg-black" />
            <div
              className="circle circle-with-text circle-with-text-right !translate-x-0 !translate-y-0"
              data-text="Hasura Cloud"
            />
          </div>

          <div className="absolute top-[185px] left-[-5px] h-6 w-6 3xl:top-[152px] 3xl:left-[4px] 2xl:top-[128px] 2xl:left-[-3px] xl:top-[54px] xl:left-[-9px] lg:top-[97px] lg:left-[-3px] sm:hidden">
            <div className="absolute top-0 right-0 h-6 w-12 rounded-r-full bg-black" />
            <div
              className="circle circle-with-text circle-with-text-left !translate-x-0 !translate-y-0"
              data-text="Vercel"
            />
          </div>

          <div className="absolute top-auto bottom-[61px] left-[41px] h-6 w-6 3xl:left-[39px] 2xl:bottom-[51px] 2xl:left-[25px] xl:bottom-[44px] xl:left-[15px] lg:bottom-[36px] lg:left-[17px] sm:hidden">
            <div className="absolute top-0 right-0 h-6 w-12 rounded-r-full bg-black" />
            <div
              className="circle circle-with-text circle-with-text-left !translate-x-0 !translate-y-0"
              data-text="Netlify"
            />
          </div>

          <div className="absolute top-auto bottom-[-48px] right-[233px] h-6 w-6 3xl:bottom-[-28px] 3xl:right-[190px] 2xl:bottom-[-29px] 2xl:right-[162px] xl:hidden lg:right-[131px] lg:block sm:hidden">
            <div className="absolute top-0 left-0 h-6 w-12 rounded-l-full bg-black" />
            <div
              className="circle circle-with-text circle-with-text-right !translate-x-0 !translate-y-0"
              data-text="Amazon Lambda"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
