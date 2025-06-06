import React from "react";
import { Figure, H3, Direction, P } from "../styles/common/styles";
import {
  InnerBox,
  Wrapper,
  Box,
  Div,
  Image,
  Wrape,
  Main,
  LWraper,
  List,
  ListItems,
  CopyRight,
  Text,
} from "../styles/footer/style";
import { Link } from "react-router-dom";
import MainLogo from "../../src/assets/PipitLogo.png";

export default function Footer({ theme }) {
  return (
    <Wrapper theme={theme}>
      <Box theme={theme}>
        <InnerBox theme={theme}>
          <Main theme={theme}>
            <Figure>
              <Image src={MainLogo} alt="Logo" width={200} height={200} />
            </Figure>
            <P>Book your trip to East Africa today</P>
            <Div>
              <Wrape theme={theme}>
                <a
                  href="https://www.facebook.com/PipitSafar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    class="svg-inline--fa fa-facebook "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                    ></path>
                  </svg>
                </a>
              </Wrape>
              <Wrape theme={theme}>
                <a
                  href="https://www.instagram.com/pipit_safari?igsh=MjQwZzlmY3JkZTN5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    class="svg-inline--fa fa-instagram "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </Wrape>
              <Wrape theme={theme}>
                <a
                  href="https://www.tiktok.com/@pipitsafaris"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="tiktok"
                    class="svg-inline--fa fa-tiktok "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    ></path>
                  </svg>
                </a>
              </Wrape>
            </Div>
            <Figure>
              <Image
                src="https://cloudsafaris.com/tico-coloured.png"
                alt=""
                width={75}
                height={80}
              />
            </Figure>
            <Link style={{ marginTop: "-32px" }}>
              <Text>
                TICO Registration #: 50027812 (Retail), 50027813 (Wholesale)
              </Text>
            </Link>
          </Main>
          <LWraper theme={theme}>
            <H3 theme={theme} className="heading-footer">
              General
            </H3>
            <List theme={theme}>
              <ListItems theme={theme}>
                <Link to="/trips">Trips</Link>
              </ListItems>
              <ListItems theme={theme}>
                <Link to="/hotels">Hotels & Lodges</Link>
              </ListItems>
              <ListItems theme={theme}>
                <Link to="/destinations">Destinations</Link>
              </ListItems>
              <ListItems theme={theme}>
                <Link to="/affiliates">Affiliates</Link>
              </ListItems>
              <ListItems theme={theme}>
                <Link to="/find-trip">Find your trip</Link>
              </ListItems>
            </List>
          </LWraper>
          <LWraper theme={theme}>
            <H3 theme={theme} className="heading-footer">
              Company
            </H3>
            <List theme={theme}>
              <ListItems theme={theme}>
                <Link to="/blog">Blog</Link>
              </ListItems>
              <ListItems theme={theme}>
                <Link to="/about">About Us</Link>
              </ListItems>
            </List>
          </LWraper>
          <LWraper theme={theme}>
            <H3 theme={theme} className="heading-footer">
              Support
            </H3>
            <List theme={theme}>
              <ListItems theme={theme}>
                <Link to="/terms">Terms of Service</Link>
              </ListItems>
              <ListItems theme={theme}>
                <Link to="/privacy">Privacy Policy</Link>
              </ListItems>
            </List>
          </LWraper>
          <LWraper theme={theme}>
            <H3 theme={theme} className="heading-footer">
              Contact Us
            </H3>
            <List theme={theme}>
              <ListItems theme={theme}>
                <Link to="#">hello@Pipitsafaris.com</Link>
              </ListItems>
              <ListItems theme={theme}>
                <Link to="#">
                  4230 Sherwoodtowne Blvd, Mississauga, ON L4Z 2G6
                </Link>
              </ListItems>
            </List>
          </LWraper>
        </InnerBox>
      </Box>
      <CopyRight theme={theme}>
        <P theme={theme}>© 2025 All rights reserved.</P>
      </CopyRight>
    </Wrapper>
  );
}
