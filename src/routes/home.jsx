/* eslint-disable react/jsx-no-duplicate-props */
// import { useState } from 'react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import Button from '../components/Button/index';
import Text from '../components/Typoghrapy/index';
import CustomCard from '../components/Card';
import CustomCarousel from '../components/Carousel/index';
import CardCta from '../components/Card/CardCta';
import Footer from '../components/Footer';
import CircleList from '../components/AnimatedBackground/circles';
import CoinAnimation from '../components/AnimatedBackground/coinImage';
import LottieAnimation from '../components/Lottie/index';

function Page() {
  const cardsData = [
    {
      borderColor: 'border-purple-600',
      other: '',
      isBorder: true,
      img: './3d-icons/icon-1.png',
      title: 'Trade',
      classCard: 'z-10 lg:z-0',
      spaceY: 'space-y-3',
      titleClass: 'title-trade text-4xl justify-center',
      subtitle: 'Trade crypto instantly, with low fees.',
      component: (
        <Button
          btnType="px-8"
          url="/swap"
          other="bg-transparent border-2 border-purple-400 hover:border-purple-400 hover:bg-purple-400"
        >
          <Text className="font-semibold title-trade hover:text-neutral">
            Explore Now
          </Text>
        </Button>
      ),
    },
    {
      borderColor: 'border-info',
      other: '',
      isBorder: true,
      img: './3d-icons/icon-3.png',
      spaceY: 'space-y-2',
      titleClass: 'title-earn text-4xl justify-center',
      title: 'Earn',
      classCard: 'z-10 lg:z-0',
      subtitle: 'Provide liquidity to pools on CoFinance, and earn fees on swaps.',
      component: (
        <Button
          btnType="px-8"
          url="/liquidity"
          other="bg-transparent border-2 border-info hover:border-info hover:bg-info"
        >
          <Text className="font-semibold title-earn hover:text-neutral dark:hover:text-primary">
            Earn Now
          </Text>
        </Button>
      ),
    },
  ];

  const buttonData = [
    {
      url: 'https://twitter.com/CoFinance',
      icon: <FaTwitter />,
      text: 'Follow Us!',
      bgColor: 'bg-black dark:bg-dark',
      btnClass:
        'rounded-lg md:w-48 lg:w-auto px-6 hover:bg-gray-800 shadow-lg border-0',
    },
    {
      url: 'https://discord.com/invite/CoFinance',
      icon: <FaDiscord />,
      text: 'Join Now!',
      bgColor: 'bg-gradient-to-b from-blue-400 to-indigo-400',
      btnClass:
        'rounded-lg md:w-48 lg:w-auto px-6 hover:bg-gradient-to-t from-blue-400 to-indigo-400 shadow-lg border-0',
    },
    {
      url: 'https://t.me/CoFinance',
      icon: <FaTelegramPlane />,
      text: 'Join With Us!',
      bgColor: 'bg-[#0F9AD6]',
      btnClass:
        'rounded-lg md:w-48 lg:w-auto px-6 hover:bg-sky-400 shadow-lg border-0',
    },
  ];

  return (
    <>
      <section>
        <CircleList />
        <div className="min-h-screen bg-white hero dark:bg-primary">
          <div className="flex flex-col items-center justify-between w-screen px-5 pb-20 lg:px-10 hero-content lg:flex-row-reverse">
            <LottieAnimation srcJson="https://lottie.host/4a8eca46-4ea1-4235-a4d1-5cf4a78d7747/CHGkPl1IuS.json" />
            <div className="justify-center lg:justify-start">
              <h1 className="text-4xl font-bold lg:text-5xl">
                <span className="text-blue-900 dark:text-neutral">COFinance</span>{' '}
                <span className="text-blue-500 dark:text-info">One Stop DeFi Service</span>
              </h1>
              <p className="py-6 text-center lg:text-left">
                Provide, Earn, Swap, Staking in one place
              </p>
              <div className="text-center lg:text-start">
                <Button
                  url="https://Cofinance/#/swap"
                  other="animate-bounce btn-sm px-4 h-10 inline-flex justify-center items-center gap-4 flex-shrink-0 bg-blue-800 hover:bg-blue-500 dark:bg-accent dark:hover:bg-blue-500 hover:shadow-info hover:text-primary shadow shadow-blue-800 dark:shadow-accent border-0"
                >
                  <span className="text-white">Get Started</span>
                  <span className="p-1 bg-white rounded-full dark:bg-neutral">
                    <FaChevronRight className="text-blue-800 dark:text-accent text-2xs" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen px-5 space-y-5 bg-white lg:px-20 dark:bg-primary">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              <span className="text-blue-900 dark:text-neutral">
                CoFinance
              </span>{' '}
              <span className="text-blue-500 dark:text-info">DeFi Hub</span>
            </h1>
            <p className="py-6 text-black dark:text-neutral">
              Trade, earn, and bridge your assets with ease on the{' '}
              <b className="text-blue-500 dark:text-info">CoFinance's</b> native
              one-stop DeFI hub.
            </p>
          </div>
          <div className="grid items-center grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-0">
            {cardsData.map((card, index) => (
              <div key={index}>
                <CustomCard
                  widtHeight="w-auto p-10"
                  imgUrl={card.img}
                  isBorder={card.isBorder}
                  url={card.url}
                  title={card.title}
                  titleClass={card.titleClass}
                  subtitleClass="text-white dark:text-neutral py-2 px-6"
                  titleSize="text-xl justify-center"
                  subtitle={card.subtitle}
                  component={card.component}
                  align="justify-center"
                  borderColor={card.borderColor}
                  other={card.other}
                  spaceY={card.spaceY}
                  classCard={card.classCard}
                />
              </div>
            ))}
          </div>
          <div className="py-10 text-center lg:py-5">
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-white hero dark:bg-primary">
          <CoinAnimation />
          <div className="flex flex-col items-center justify-center w-screen space-y-4 text-center bg-transparent">
            <h1 className="z-10 max-w-xl text-5xl font-semibold leading-normal text-blue-900 dark:text-neutral">
              Unlock the full potential of DeFi with Comunity Node
            </h1>
            <p className="z-10 max-w-lg pb-10 text-lg text-neutral">
              Become an early adopter of CoFinance.
            </p>
            <div className="flex items-center justify-between gap-4">
              <Button
                url="https://discord.com/Cofinance"
                target="_blank"
                other={`animate-bounce btn-sm px-5 h-14 inline-flex justify-center items-center gap-4 flex-shrink-0 bg-white dark:bg-white hover:bg-white hover:shadow-blue-500 hover:shadow-lg hover:text-primary shadow shadow-blue-800 dark:shadow-white border-0`}
              >
                {/* <span className="text-xl text-white">Buy $PLQ</span> */}
                <span className="px-3 py-1 bg-white rounded-full dark:bg-neutral">
                  <p className="flex items-center justify-between text-xl text-blue-700">
                   Discord
                  </p>
                </span>
              </Button>
             
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#072B75] dark:bg-lime">
        <div className="min-w-screen py-10 space-y-6 bg-[#072B75] dark:bg-lime overflow-hidden">
          <div className="text-center">
            <h1 className="text-2xl font-semibold lg:text-3xl">
              <span className="text-white dark:text-neutral">
                Dive into CoFinance
              </span>
              <br />
              <span className="text-[#0dd0bd]">Service</span>
            </h1>
            <div className="py-10">
              <CustomCarousel />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-primary">
        <div className="container px-5 py-10 mx-auto bg-white lg:px-20 dark:bg-primary">
          <CardCta
            width="w-full"
            imgUrl="./bg-cta.svg"
            title="Join our Community
            Get involved with CoFInance"
            component={
              <>
                {buttonData.map((button, index) => (
                  <Button
                    key={index}
                    url={button.url}
                    bgColor={button.bgColor}
                    other={button.btnClass}
                    target="_blank"
                  >
                    <Text className="flex flex-row items-center justify-between gap-3 font-semibold text-white hover:text-gray-100">
                      {button.icon} {button.text}
                    </Text>
                  </Button>
                ))}
              </>
            }
          />
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-200 via-transparent to-blue-500">
        <Footer />
      </section>
    </>
  );
}

export default Page;
