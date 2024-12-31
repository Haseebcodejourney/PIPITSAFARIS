import {
  Button,
  ButtonBlack,
  Container,
  Div,
  Dot,
  Figure,
  H2,
  H3,
  Image,
  InnerDot,
  InnerWrapper,
  Left,
  List,
  ListItems,
  Right,
  Strong,
  Text,
  Top,
  Wrapper,
} from "../../styles/about/BookTrip";
import Image1 from "../../assets/photo-1.jpg";
import Image2 from "../../assets/photo-2.jpg";

function BookTrip({ theme }) {
  return (
    <>
      <Container theme={theme}>
        <Left>
          <Button>Booking a trip</Button>
          <H2 theme={theme}>
            We'll take care of the details. You enjoy the trip.
          </H2>
          <Text theme={theme}>
            At PipitSafaris, we saw an issue in the safari industry: an outdated
            booking experience. This became evident by a lack of online
            information and excessive time taken to go from a dream to a
            reality. Our goal was to modernize this process and enhance the
            customer experience.
          </Text>
          <H3 theme={theme}>How it works</H3>
          <Wrapper>
            <Top>
              <Div>
                <Dot>
                  <InnerDot></InnerDot>
                </Dot>
                <Strong theme={theme}>Choose your safari</Strong>
              </Div>
              <InnerWrapper>
                <Strong theme={theme}>
                  Select dates that are most convenient for you.
                </Strong>
                <List>
                  <ListItems theme={theme}>
                    All accommodations, transfers, food, and guides are included
                  </ListItems>
                  <ListItems theme={theme}>
                    Tailor the trip with activities of your choice
                  </ListItems>
                  <ListItems theme={theme}>
                    Select from an extensive list of incredible properties
                  </ListItems>
                </List>
              </InnerWrapper>
            </Top>
          </Wrapper>

          <Wrapper>
            <Top>
              <Div>
                <Dot>
                  <InnerDot></InnerDot>
                </Dot>
                <Strong theme={theme}>Pick your dates</Strong>
              </Div>
              <InnerWrapper>
                <Strong theme={theme}>
                  Select dates that are most convenient for you.
                </Strong>
                <List>
                  <ListItems theme={theme}>
                    All accommodations, transfers, food, and guides are included
                  </ListItems>
                  <ListItems theme={theme}>
                    Tailor the trip with activities of your choice
                  </ListItems>
                  <ListItems theme={theme}>
                    Select from an extensive list of incredible properties
                  </ListItems>
                </List>
              </InnerWrapper>
            </Top>
          </Wrapper>

          <Wrapper>
            <Top>
              <Div>
                <Dot>
                  <InnerDot></InnerDot>
                </Dot>
                <Strong theme={theme}>Confirm and enjoy</Strong>
              </Div>
              <InnerWrapper>
                <Strong theme={theme}>
                  Confirm your trip with our safari professionals.
                </Strong>
                <List>
                  <ListItems theme={theme}>
                    Receive a complimentary personal trip briefing
                  </ListItems>
                  <ListItems theme={theme}>
                    Pay securely by credit card
                  </ListItems>
                  <ListItems theme={theme}>
                    Travel confidently with on-ground support
                  </ListItems>
                </List>
              </InnerWrapper>
            </Top>
            <ButtonBlack theme={theme}>Book a trip</ButtonBlack>
          </Wrapper>
        </Left>
        <Right>
          <Figure>
            <Image
              src="https://static.cloudsafaris.com/public/LionPortrait.png?action=get"
              alt="Lion"
              width={324}
              height={520}
            />
          </Figure>
          <Figure>
            <Image src={Image2} alt="Beech" width={260} height={390} />
          </Figure>
        </Right>
      </Container>
    </>
  );
}

export default BookTrip;
