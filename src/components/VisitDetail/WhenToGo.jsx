import {
  Box,
  H2,
  List,
  ListItems,
  Paper,
  Wrapper,
} from "../../styles/DetailPage/WhenToGo";

function WhenToGo({ theme }) {
  return (
    <>
      <Box theme={theme}>
        <H2 theme={theme}>When to Go</H2>
        <List theme={theme}>
          <ListItems theme={theme} rating="excellent">January</ListItems>
          <ListItems theme={theme} rating="excellent">February</ListItems>
          <ListItems theme={theme} rating="good">March</ListItems>
          <ListItems theme={theme} rating="good">April</ListItems>
          <ListItems theme={theme} rating="fair">May</ListItems>
          <ListItems theme={theme} rating="excellent">June</ListItems>
          <ListItems theme={theme} rating="excellent">July</ListItems>
          <ListItems theme={theme} rating="good">August</ListItems>
          <ListItems theme={theme} rating="good">September</ListItems>
          <ListItems theme={theme} rating="excellent">October</ListItems>
          <ListItems theme={theme} rating="good">November</ListItems>
          <ListItems theme={theme} rating="fair">December</ListItems>
        </List>
        <Wrapper theme={theme}>
          <Paper theme={theme}>
            <span className="circle excellent"></span>Excellent
          </Paper>
          <Paper theme={theme}>
            <span className="circle good"></span>Good
          </Paper>
          <Paper theme={theme}>
            <span className="circle fair"></span>Fair
          </Paper>
        </Wrapper>
      </Box>
    </>
  );
}

export default WhenToGo;

