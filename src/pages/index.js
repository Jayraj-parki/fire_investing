import Head from "next/head";
import style from "./index.module.scss";
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button } from "@mui/material";
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useEffect, useState } from "react";
export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const openNewURL=(newURL)=> {
    window.open(newURL, "_blank");
  }
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const sticky = header.offsetTop;

      if (window.scrollY > sticky & window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
   

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const data_old = [
    {
      "image": '/images/stock_analysis.jpg',
      "text": 'Stock Analysis'
    },
    {
      "image": '/images/option_index.jpg',
      "text": 'Index Option'
    },
    {
      "image": '/images/stock_options.jpg',
      "text": 'Stock Option'
    },
    {
      "image": '/images/risk_manage.jpg',
      "text": 'Risk Management'
    },
    // {
    //   "image": '/images/winning_strategy.jpg',
    //   "text": 'Winning Strategy'
    // },

  ]
  const data = [
    {
      "image": '/new_images/stock analysis.png',
      "text": 'Stock Analysis'
    },
    {
      "image": '/new_images/Index Option.png',
      "text": 'Index Option'
    },
    {
      "image": '/new_images/Stock Option.png',
      "text": 'Stock Option'
    },
    {
      "image": '/new_images/Risk Management.png',
      "text": 'Risk Management'
    },
    // {
    //   "image": '/images/winning_strategy.jpg',
    //   "text": 'Winning Strategy'
    // },

  ]
  const why_to_choose_us_old = [
    {
      "image": '/images/expertise.jpg',
      "text": 'Expertise Our team consists of experienced traders and financial experts who bring their knowledge and insights to the table'
    },
    {
      "image": '/images/one_on_one_class.jpg',
      "text": 'A one-on-one live stock market class, so that everything is clear to the student and they can ask their doubts without any struggle'
    },
    {
      "image": '/images/stock_doubt.jpg',
      "text": "If you have any doubts in the future about strategies or anything related to the stock market, feel free to contact us anytime via WhatsApp. We'll be happy to help. You can also ask about any stocks you're dealing with."
    }


  ]
  const why_to_choose_us = [
    {
      "image": '/new_images/Expertise.png',
      "text": 'Expertise Our team consists of experienced traders and financial experts who bring their knowledge and insights to the table'
    },
    {
      "image": '/new_images/One to One.png',
      "text": 'A one-on-one live stock market class, so that everything is clear to the student and they can ask their doubts without any struggle'
    },
    {
      "image": '/new_images/Doubt.png',
      "text": "If you have any doubts in the future about strategies or anything related to the stock market, feel free to contact us anytime via WhatsApp. We'll be happy to help. You can also ask about any stocks you're dealing with."
    }


  ]
  const commitment = [
    {
      "image": '/new_images/Market Analysis.png',
      "title": 'Market Analysis',
      "text": "We believe that knowledge is power. Our comprehensive educational resources cater to traders of all levels, from novice to expert."
    },
    {
      "image": '/new_images/Stretagy Planning.png',
      "title": 'Strategy Planning',
      "text": "Once you've finished conducting market analysis, the subsequent phase involves crafting and formulating your stock strategies."
    },
    {
      "image": '/new_images/Execution & Evaluation.png',
      "title": "Execution & Evaluation",
      "text": "During this phase, our primary emphasis will be on implementing the stock plan and assessing the outcomes daily after the market closes."
    }


  ]

  const commitment_old = [
    {
      "image": '/images/market_annalysis.jpg',
      "title": 'Market Analysis',
      "text": "We believe that knowledge is power. Our comprehensive educational resources cater to traders of all levels, from novice to expert."
    },
    {
      "image": '/images/planning.jpg',
      "title": 'Strategy Planning',
      "text": "Once you've finished conducting market analysis, the subsequent phase involves crafting and formulating your stock strategies."
    },
    {
      "image": '/images/execution.jpg',
      "title": "Execution & Evaluation",
      "text": "During this phase, our primary emphasis will be on implementing the stock plan and assessing the outcomes daily after the market closes."
    }


  ]
  return (
    <>
      <Head>
        <title>Fire Investing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&display=swap" rel="stylesheet" />
        <script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1040661307798437');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=1040661307798437&ev=PageView&noscript=1`}
        />
      </noscript>
      </Head>
      <main className={style.page} >
        <nav className={`navbar navbar-expand-lg bg-info ${style.custom_gradient}`}>
          <di className='row col-12 mx-auto pt-2 d-flex  justify-content-evenly flex-col text-center'>
            <p className="col-12 col-xl-6  text-white text-center p-0 pt-1 "><b>For Accurate Stock Market Guidance Join Our Telegram Channel</b></p>
            {/* <a className="col-3 navbar-brand text-white text-center bg-info" href="/"><TelegramIcon/>Telegram</a> */}
          </di>
        </nav>
        <div className={`header ${!isSticky ? style.headerOuter : style.headerFixedOuter} row col-12 py-0 mx-auto`}>
          <div className={style.headerInner + ` row col-12 col-sm-10 m-auto d-flex   justify-content-between `}>
            <div className={style.websiteName + ` col-auto d-flex  `}>
              <div className={style.imageContainer + "  col-auto d-none  d-sm-flex  p-0 m-0"}>
                <img className="d-block rounded-pill " src={'/images/logo.webp'} alt="..." />
              </div>
              <h2 className="col-auto text-light px-sm-2 my-auto h3 ">FIRE Investing</h2>
            </div>
            <div className={style.logo + `  col-auto mt-sm-0 my-auto`}>
              <Button onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className="text-light px-3 my-auto "><TelegramIcon className="text-light" />Join now</Button>
            </div>
          </div>
        </div>
        {isSticky && <div className={style.headerPlaceholder} />}
        <div className={style.banner + ` row col-12 pt-3 mx-auto d-flex justify-content-around `}>
          <div className={style.left + ` col-sm-10 col-xl-6 p-3  d-flex flex-column `}>
            <div className="mb-auto  text-sm-start">
              <h3 className="h1">Discover new trading horizons with</h3>
              <h3 className="h3"><span>NISM Certified</span> analysts</h3>
            </div>
            <div className="mb-auto  text-start">
              <p className="h5 pt-4  text-start mb-4 mb-sm-0 ">Join our <span className="text-info">Telegram Channel</span> for execlusive <span className="text-warning">Stock Market</span> expertise</p>
              <small className="pt-3">Access real-time market breakdown, innovative trading strategies and deep - dive investment analysis. Join our Telegram Channel for free today.</small>
            </div>
            <div className={style.telegram + ` row col-auto col-md-12 mb-auto mx-auto mt-4 mt-xl-0`}>
              <Button onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className=" col-auto  col-md-8  px-3 mx-auto"><TelegramIcon className={style.TelegramIcon + "  mx-2 rounded-pill p-1"} /> Join our free Telegram</Button>
            </div>
            
          </div>
          <div className={style.right + `  col-auto p-3`}>
            <div className={style.imageContainer + "  col-12  p-0 m-0"}>
              <img className="d-block rounded-5 " src={'/images/logo.webp'} alt="..." />
            </div>
            <div className="row mb-auto mx-auto mt-4 mt-xl-0 ">
              <Button onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className={style.cert + " px-5 py-2 h2 rounded-2 mx-auto col-auto d-flex justify-content-center align-items-center"}><WorkspacePremiumIcon className="p-0  h3 m-0" />NISM  <span className='text-capitalize ms-2'> Certified</span> </Button>
            </div>
          </div>
        </div>
        <div className={style.headerOuter2 + `  row col-12  p-0 py-1 py-sm-2 m-0 mx-auto`}>
          <div className={style.headerInner2 + ` row  p-0 col-11 col-sm-10 m-0 mx-auto d-flex   justify-content-between `}>
            <div className={style.websiteName + ` col-auto p-0 mx-auto mx-md-0 `}>
              <h3 className="text-light text-center">Join our Telegram to make Big Profits</h3>
            </div>
            <div className={style.logo + ` d-none d-md-flex col-auto mx-auto mx-sm-0 p-0` }>
              <Button onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className="text-light px-3 "><TelegramIcon className="text-light" />Join now</Button>
            </div>
          </div>
        </div>

        <div className={style.services + " row col-12 mx-auto pt-5 p-3"}>
          <div className="row col-12 mx-auto text-center text-light"><h2 className="h2 border-bottom col-auto px-md-5 mx-auto pb-2">Our services</h2></div>
          <div className="row col-12 mx-auto d-flex justify-content-around py-5">
            {
              data.map((value, index) => {
                return <div className={style.card + " col-6 col-sm-5 col-md-4 col-xl-3 col-xxl-2 card p-0 mx-sm-1 my-2"} >
                  <img src={value.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-text text-center h4 ">{value?.text}</h5>
                  </div>
                </div>
              })
            }

          </div>
        </div>

        <div className={style.why_to_choose_us + " row col-12 mx-auto pt-5  p-3"}>
          <div className="row col-12 mx-auto text-center text-light"><h1 className="h2 border-bottom col-auto px-md-5 mx-auto pb-2">Why to choose us</h1></div>
          <div className="row col-12 mx-auto d-flex justify-content-around p-md-5">
            {
              why_to_choose_us.map((value, index) => {
                return <div className={style.card + " col-sm-6 col-md-6 col-xl-4 col-xxl-4  card p-4  my-2"} >
                  <img src={value.image} className="card-img-top mx-auto rounded-2" alt="..." />
                  <div className="card-body">
                    <p className="card-text  ">{value?.text}</p>
                  </div>
                </div>
              })
            }

          </div>
        </div>
        <div className={style.headerOuter2 + `  row col-12  p-0 py-1 py-sm-2 m-0 mx-auto`}>
          <div className={style.headerInner2 + ` row  p-0 col-11 col-sm-10 m-0 mx-auto d-flex   justify-content-between `}>
            <div className={style.websiteName + ` col-auto mx-auto mx-md-0 `}>
              <h3 className="text-light text-center">Daily live stock update on Telegram</h3>
            </div>
            <div className={style.logo + ` d-none d-md-flex col-auto mx-auto mx-sm-0 `}>
              <Button onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className="text-light px-3 "><TelegramIcon className="text-light" />Join now</Button>
            </div>
          </div>
        </div>
        <div className={style.commitment + " row col-12 mx-auto py-5  p-3"}>
          <div className="row col-12 mx-auto text-center text-light"><h1 className="h2 border-bottom col-auto px-md-5 mx-auto pb-2">Our commitments to you</h1></div>
          <div className="row col-12 mx-auto d-flex justify-content-around p-md-5">
            {
              commitment.map((value, index) => {
                return <div className={style.card + " shadow  border-light col-sm-6 col-md-6 col-xl-4 col-xxl-4  card p-4  my-2"} >
                  <img src={value.image} className="card-img-top mx-auto rounded-2" alt="..." />
                  <div className="card-body">
                    <h3 className="text-center text-light mb-4  ">{value?.title}</h3>
                    <p className="card-text  ">{value?.text}</p>
                  </div>
                </div>
              })
            }

          </div>
        </div>
        <div className={style.headerOuter2 + `  row col-12  p-0 py-1 py-sm-2 m-0 mx-auto`}>
          <div className={style.headerInner2 + ` row  p-0 col-11 col-sm-10 m-0 mx-auto d-flex   justify-content-between `}>
            <div className={style.websiteName + ` col-auto  mx-auto mx-md-0 `}>
              <h3 className="text-light text-center ">Boost Your Trading Success!</h3>
            </div>
            <div className={style.logo + ` d-none d-md-flex col-auto mx-auto mx-md-0`}>
              <Button onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className="text-light px-3 "><TelegramIcon className="text-light" />Join now</Button>
            </div>
          </div>
        </div>
        <div className={style.contact + " row col-12 mx-auto pt-5  p-3"}>
          <div className={style.card + " col-sm-6 col-md-4 card p-md-4 p-0  my-2 border-0"} >
            <img src={'/images/logo.webp'} className="card-img-top mx-auto rounded-pill p-0" alt="..." />
            <div className="card-body  p-0 m-0">
              <h3 className="text-center text-light mb-4  p-0"><span className="text-warning">NISM Certified </span>- Learn Before You Invest! </h3>
            </div>
          </div>
          <div className={style.card + " col-sm-6 col-md-4  py-md-4  my-2"} >
            <h2 className="text-light">Contact Information</h2>
            {/* <div className="row col-12 my-3 mt-5 mx-auto p-0 "> */}
              {/* <div className="col-auto my-auto p-0">
                <PhoneEnabledIcon className={style.phoneIcon + "  mx-2 rounded-pill p-1"}></PhoneEnabledIcon>
              </div>
              <div className="col-auto p-0 m-0">
                <p className="p-0 m-0">+91 9323382509</p>
                <p className="p-0 m-0">+91 8879636040</p>
              </div> */}
            {/* </div> */}
            <div className="row col-12 mx-auto p-0">
              <div className="col-auto my-auto p-0">
                <EmailIcon className={style.phoneIcon + "  mx-2 rounded-pill p-1"}></EmailIcon>
              </div>
              <div className="col-auto p-0 m-0 my-auto">
                <p className="p-0 m-0">fireinvestings@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={style.card + " col-md-4  py-md-4  my-2"} >
            <h2 className="text-light">Get In Touch</h2>
            <div className="row col-12 my-3 mt-md-2 mx-auto p-0 ">
              <p>Have questions or need assistance? We’re here to help you. Reach out to our us for any inquiries or support you may require.</p>
            </div>
            <div className="row col-12 mx-auto p-0">
              <div className="col-auto my-auto p-0">
                <TelegramIcon onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className={style.phoneIcon + "  mx-2 bg-info text-white rounded-pill p-1"}></TelegramIcon>
              </div>
              <div className="col-auto my-auto p-0">
                <InstagramIcon onClick={()=>openNewURL('https://www.instagram.com/fire_investing_official?igsh=dDB1YTI0cm94NWcw')} className={style.phoneIcon + " bg-danger text-white mx-2 rounded-pill p-1"}></InstagramIcon>
              </div>
              <div className="col-auto my-auto p-0">
                <FacebookRoundedIcon onClick={()=>openNewURL('https://www.facebook.com/people/FIRE-Investing-Offical/61563773790848/?mibextid=ZbWKwL')}  className={style.phoneIcon + " bg-primary text-white mx-2 rounded-pill p-1"}></FacebookRoundedIcon>
              </div>
              <div className="col-auto my-auto p-0">
                <YouTubeIcon  onClick={()=>openNewURL()} className={style.phoneIcon + "  bg-danger text-white mx-2 rounded-pill p-1"}></YouTubeIcon>
              </div>
              <div className="col-auto my-auto p-0">
                <WhatsAppIcon  onClick={()=>openNewURL('https://www.whatsapp.com/channel/0029Van1QDXF6sn2KFzDRv23')} className={style.phoneIcon + "  bg-success text-white mx-2 rounded-pill p-1"}></WhatsAppIcon>
              </div>

            </div>
          </div>
          <hr className="border-white" />
          <div className="row col-12 mx-auto">
            <small className={style.disclaimer+" col-auto mx-auto text-light "}>Disclaimer: Investing involves risk, including the loss of principal. Past performance does not guarantee future results. Always consult with a financial advisor.</small>
            <p className=" col-12 mt-2 mx-auto text-light text-center">© 2024 FIRE Investing. All Rights Reserved.  </p>
          </div>
        </div>
        <Button onClick={()=>openNewURL('https://t.me/fireinvestingofficials')} className={style.whatsappIcon + "  px-4 py-1 rounded-1  d-flex "} >
          <TelegramIcon className={style.TeleIcon + "  m-auto p-1 rounded-pill "}></TelegramIcon>
          <p className={style.msg + " m-auto px-2 h5 text-light  "}>Join Our Free Telegram</p>
        </Button>
      </main>
    </>
  );
}
