import React from "react";
import style from "./Footer.module.css";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={style.footer_container}>
        <div className={style.footer_link_container}>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Get to Know Us
              </Heading>
              <Link to="#">
                <li>About Us</li>
              </Link>
              <Link to="#">
                <li>Careers</li>
              </Link>
              <Link to="#">
                <li>Press Releases</li>
              </Link>
              <Link to="#">
                <li>Amazon Science</li>
              </Link>
            </ul>
          </div>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Connect with Us
              </Heading>
              <Link to="#">
                <li>Facebook</li>
              </Link>
              <Link to="#">
                <li>Twitter</li>
              </Link>
              <Link to="#">
                <li>Instagram</li>
              </Link>
            </ul>
          </div>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Make Money with Us
              </Heading>
              <Link to="#">
                <li>Sell on Amazon</li>
              </Link>
              <Link to="#">
                <li>Sell under Amazon Accelerator</li>
              </Link>
              <Link to="#">
                <li>Protect and Build Your Brand</li>
              </Link>
              <Link to="#">
                <li>Amazon Global Selling</li>
              </Link>
              <Link to="#">
                <li>Become an Affiliate</li>
              </Link>
              <Link to="#">
                <li>Fulfilment by Amazon</li>
              </Link>
              <Link to="#">
                <li>Advertise Your Products</li>
              </Link>
              <Link to="#">
                <li>Amazon Pay on Merchants</li>
              </Link>
            </ul>
          </div>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Let Us Help You
              </Heading>
              <Link to="#">
                <li>COVID-19 and Amazon</li>
              </Link>
              <Link to="#">
                <li>Your Account</li>
              </Link>
              <Link to="#">
                <li>Returns Centre</li>
              </Link>
              <Link to="#">
                <li>100% Purchase Protection</li>
              </Link>
              <Link to="#">
                <li>Amazon App Download</li>
              </Link>
              <Link to="#">
                <li>Amazon Assistant Download</li>
              </Link>
              <Link to="#">
                <li>Help</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={style.logo_country_container}>
          <div className={style.logo_language}>
            <img
              className={style.logo}
              src="https://github.com/shubhamkr2/UploadImages/blob/main/Best/A_to_z__1.png?raw=true"
              alt="logo"
            />
            <img
              className={style.language}
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Language%20amazon.png"
              alt="logo"
            />
          </div>
          <div className={style.country}>
            <ul>
              <li>Australia</li>
              <li>Brazil</li>
              <li>Canada</li>
              <li>China</li>
              <li>France</li>
              <li>Germany</li>
              <li>Itality</li>
              <li>Japan</li>
              <li>Mexico</li>
              <li>Netherlands</li>
              <li>Poland</li>
              <li>Singapore</li>
              <li>Spain</li>
              <li>Turkey</li>
              <li>United Arab Emirates</li>
              <li>United Kingdom</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.black_buttom}>
      <div className={style.black_footer}>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">AbeBooks</Heading>
            <Link to="#">
              <li>Books, art</li>
            </Link>
            <Link to="#">
              <li>& collectibles</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Amazon web Services</Heading>
            <Link to="#">
              <li>Scalable Cloud</li>
            </Link>
            <Link to="#">
              <li>Computing services</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Audible</Heading>
            <Link to="#">
              <li>Download</li>
            </Link>
            <Link to="#">
              <li>Audio Books</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">DpReview</Heading>
            <Link to="#">
              <li>Digital</li>
            </Link>
            <Link to="#">
              <li>Photography</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">IMDb</Heading>
            <Link to="#">
              <li>Movies, Tv</li>
            </Link>
            <Link to="#">
              <li>& Celebrities</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Shopbop</Heading>
            <Link to="#">
              <li>Designer</li>
            </Link>
            <Link to="#">
              <li>Fashion Brands</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Amazon Business</Heading>
            <Link to="#">
              <li>Everything for</li>
            </Link>
            <Link to="#">
              <li>Your Business</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Prime Now</Heading>
            <Link to="#">
              <li>2-Hour Delivery</li>
            </Link>
            <Link to="#">
              <li>on Everyday Items</li>
            </Link>
          </ul>
        </div>
      </div>
        <div className={style.privacy_notice}>
        <span>Conditions of Use & Sale Privacy Notice Interest-Based Ads</span>
          <br></br>
          <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </>
  );
}

export { Footer };
