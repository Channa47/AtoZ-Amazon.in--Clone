//import statements
import React from "react";
import style from "./Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Navigation } from "../Components/Navigation";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { CardBanner } from "../Components/CardBanner";
import { Link } from "react-router-dom";
import { BigCardBanner } from "../Components/BigCardBanner";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

//static products array storing titles,image urls and headings
const product_arr = [
  {
    heading: "Up to 75% off | Top deals on Amazon brands & more",
    prod_card: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_h-k-new_186x116_in-en._SY116_CB615989515_.jpg",
        title: "Up to 60% off | Home & kitchen products",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_audio-new_186x116_in-en._SY116_CB615989513_.jpg",
        title: "Up to 65% off | Speakers & more",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_spb-new_186x116_in-en._SY116_CB615989508_.jpg",
        title: "Under ₹599 | Clothing shoes & more",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_daily-essentials-new_186x116_in-en._SY116_CB615989508_.jpg",
        title: "Up to 75% off | Daily essentials",
      },
    ],
  },
  {
    heading: "Up to 70% off | Styles for Women",
    prod_card: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
        title: "Women's Clothing",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
        title: "Footwear+Handbags",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
        title: "Watches",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
        title: "Fashion Jwellery",
      },
    ],
  },
  {
    heading: "Top rated, premium quality | Amazon Brands & more",
    prod_card: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_bed_new._SY116_CB620419720_.jpg",
        title: "Home products | Up to 50% off",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_furniture._SY116_CB620369430_.jpg",
        title: "Furniture | Up to 60% off",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_Grocery._SY116_CB620369430_.jpg",
        title: "Daily essentials",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_fashion._SY116_CB620369430_.jpg",
        title: "Fashion",
      },
    ],
  },
];
const product_arr2 = [
  {
    heading: "Automotive essentials | Up to 60% off",
    prod_card: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
        title: "Cleaning accessories",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
        title: "Tyre & rim care",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
        title: "Helmets",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        title: "Vacuun cleaner",
      },
    ],
  },
  {
    heading: "Up to 75% off | Top deals on Amazon brands & more",
    prod_card: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_h-k-new_186x116_in-en._SY116_CB615989515_.jpg",
        title: "Up to 60% off | Home & kitchen products",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_audio-new_186x116_in-en._SY116_CB615989513_.jpg",
        title: "Up to 65% off | Speakers & more",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_spb-new_186x116_in-en._SY116_CB615989508_.jpg",
        title: "Under ₹599 | Clothing shoes & more",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_daily-essentials-new_186x116_in-en._SY116_CB615989508_.jpg",
        title: "Up to 75% off | Daily essentials",
      },
    ],
  },
  {
    heading: "Electronics devices for home office",
    prod_card: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg",
        title: "Smartwatches & fitness trackers",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg",
        title: "Tablets",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg",
        title: "Laptops",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg",
        title: "Monitors",
      },
    ],
  },
  {
    heading: "Bring joy with the perfect wedding gifts",
    prod_card: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Dinner-1_1x._SY116_CB653463607_.jpg",
        title: "Dinner set",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Kitchen-1_1x._SY116_CB653463607_.jpg",
        title: "Kitchen appliences",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Kitchen-1_1x._SY116_CB653463607_.jpg",
        title: "Jwellery",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Gift_card-1_1x._SY116_CB653463607_.jpg",
        title: "Gift Cards",
      },
    ],
  },
];
const prodBigcard_arr = [
  {
    heading: "Discover your home",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg",
  },
  {
    heading: "Up to 60% off | Professional tools & more",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg",
  },
  {
    heading: "Up to 60% off | Top deals on stationery supplies",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_1x_4._SY304_CB667376048_.jpg",
  },
  {
    heading: "Up to 50% off | Branded Mobile",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/BTF_Nov22_0.5x._SY304_CB620465154_.png",
  },
];

function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    smartphone: {
      breakpoint: { max: 550, min: 400 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const side = useBreakpointValue({ base: "5%", md: "40px" });

  // This list contains all the data for carousels
  const cards = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD23/ACQ/hero/v2/PC_Hero_3000x1200_2X_EN._CB600991698_.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Carousels%20img/2.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Carousels%20img/4.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Carousels%20img/5.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Carousels%20img/6.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Carousels%20img/7.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Carousels%20img/8.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Carousels%20img/9.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Navigation />
      <div id={style.main}>
        <div className={style.home_container}>
          {/****************************** Top Crousel *************************************/}
          <div className={style.crousel}>
            <Box
              position={"relative"}
              height={"600px"}
              width={"full"}
              overflow={"hidden"}
            >
              {/* CSS files for react-slick */}
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              {/* Left Icon */}

              <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                // top={top}
                top="22%"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
                // backgroundColor="transparent"

                _hover={{
                  backgroundColor: "transparent",
                  border: "2px solid #0ecbd2",
                  boxShadow: "0px 0px 2px 2px",
                }}
                height="240px"
                width="90px"
              >
                <BiLeftArrowAlt size="40px" />
              </IconButton>

              {/* Right Icon */}
              <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                // top={top}
                top="22%"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
                _hover={{
                  backgroundColor: "transparent",
                  border: "2px solid #0ecbd2",
                  boxShadow: "0px 0px 2px 2px",
                }}
                height="240px"
                width="90px"
              >
                <BiRightArrowAlt size="40px" />
              </IconButton>
              {/* Slider */}
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                  <Box
                    className={style.top_carousel_img}
                    key={index}
                    // height={"6xl"}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${card.image})`}
                  >
                    {/* This is the block to change, to customize the caption */}
                    <Container
                      size="container.lg"
                      height="600px"
                      position="relative"
                    >
                      {/* <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
              </Stack> */}
                    </Container>
                  </Box>
                ))}
              </Slider>
            </Box>
          </div>
          <div className={style.top_card}>
            {product_arr?.map((product) => (
              <CardBanner
                heading={product.heading}
                content={product.prod_card}
              />
            ))}
            <div className={style.app_link}>
              <Heading size="md" textAlign="left" pb="15px">
                Shop on the Amazon App
              </Heading>
              <p>Great republic day sale | Big savings for everyone</p>
              <p id={style.download_link}>Download the Amazon App</p>
            </div>
          </div>
        </div>
        <div className={style.offer_cat}>
          {product_arr2?.map((product) => (
            <CardBanner heading={product.heading} content={product.prod_card} />
          ))}
        </div>
        <div className={style.product_carousel}>
          <Heading size="md" textAlign="left" backgroundColor="white" p="15px">
            You might be looking for
          </Heading>
          <Carousel responsive={responsive}>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/81apsfnlvYL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/715239THmWL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/811E4hFuG0L._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/51Jlp-dxJEL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/51xCU5ylKAL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/519WgL-+AjL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/61MZ5sEJ+HL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/51Cvd3epkdL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/51BNv1auG3L._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/61vNUBjkcmL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/51yaVo-lPfL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
          </Carousel>
        </div>
        <div className={style.bigcard}>
          {prodBigcard_arr?.map((product) => (
            <BigCardBanner heading={product.heading} image={product.image} />
          ))}
        </div>
        <div id={style.grocry} className={style.product_carousel}>
          <Heading size="md" textAlign="left" backgroundColor="white" p="15px">
            Frequently repurchased in Grocery
          </Heading>
          <Carousel responsive={responsive}>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/61d1k2cwZgL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/61ltId84kyL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/A1iVZWFncmL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/71P2iOAIi9L._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/814iBcUf1aL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/517U0BLb2bL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/81WRTbIbLAL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/71M6kMdnqTL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/91Y8ffbl-YL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/91YshjZFHEL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
            <div className={style.product_carousel_img}>
              <img
                src="https://m.media-amazon.com/images/I/71PFaLxovsL._AC_SY200_.jpg"
                alt="product image"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Home };
