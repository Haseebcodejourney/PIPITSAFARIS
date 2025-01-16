import {
  Box,
  H2,
  List,
  ListItems,
  Paper,
  Wrapper,
} from "../../styles/DetailPage/WhenToGo";

function WhenToGo({theme}) {
  return (
    <>
      <Box theme={theme}>
        <H2 theme={theme}>When to Go</H2>
        <List theme={theme}>
          <ListItems theme={theme}>January</ListItems>
          <ListItems theme={theme}>February</ListItems>
          <ListItems theme={theme}>March</ListItems>
          <ListItems theme={theme}>April</ListItems>
          <ListItems theme={theme}>May</ListItems>
          <ListItems theme={theme}>June</ListItems>
          <ListItems theme={theme}>July</ListItems>
          <ListItems theme={theme}>August</ListItems>
          <ListItems theme={theme}>September</ListItems>
          <ListItems theme={theme}>October</ListItems>
          <ListItems theme={theme}>November</ListItems>
          <ListItems theme={theme}>December</ListItems>
        </List>
        <Wrapper theme={theme}>
          <Paper theme={theme}><Paper className="excellent" theme={theme}></Paper>Excellent</Paper>
          <Paper theme={theme}><Paper className="excellent" theme={theme}></Paper>Good</Paper>
          <Paper theme={theme}><Paper className="excellent" theme={theme}></Paper>Fair</Paper>
        </Wrapper>
      </Box>
    </>
  );
}

export default WhenToGo;
