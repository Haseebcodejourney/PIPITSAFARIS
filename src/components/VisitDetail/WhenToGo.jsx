import {
  Box,
  H2,
  List,
  ListItems,
  Paper,
  Wrapper,
} from "../../styles/DetailPage/WhenToGo";

function WhenToGo() {
  return (
    <>
      <Box>
        <H2>When to Go</H2>
        <List>
          <ListItems>January</ListItems>
          <ListItems>February</ListItems>
          <ListItems>March</ListItems>
          <ListItems>April</ListItems>
          <ListItems>May</ListItems>
          <ListItems>June</ListItems>
          <ListItems>July</ListItems>
          <ListItems>August</ListItems>
          <ListItems>September</ListItems>
          <ListItems>October</ListItems>
          <ListItems>November</ListItems>
          <ListItems>December</ListItems>
        </List>
        <Wrapper>
          <Paper>Excellent</Paper>
          <Paper>Good</Paper>
          <Paper>Fair</Paper>
        </Wrapper>
      </Box>
    </>
  );
}

export default WhenToGo;
