import React from "react";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem.js";

const NewsCards = (props) => {
  const { articles, totalResults, category, capitalize, fetchMoreData } = props;

  return (
    articles && (
      <React.Fragment>
        {/* Top Headlines - Title */}
        <Typography
          variant="h5"
          component="h6"
          sx={{
            textAlign: "center",
            margin: "2rem",
            fontFamily: "monospace",
            color: "inherit",
            fontWeight: 500,
            letterSpacing: ".3rem",
          }}
        >
          Top Headlines - {capitalize(category)}
        </Typography>
        {/* InfiniteScroll */}
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          //Spinner
          loader={<Spinner />}
        >
          {/* Container */}
          {/* <Container maxWidth="lg"> */}
          <Box sx={{ width: "100%", marginBottom: "2rem" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {articles &&
                articles.map((items, index) => {
                  //Single News Item
                  return <NewsItem key={index} items={items} index={index} />;
                })}
            </Grid>
          </Box>
          {/* </Container> */}
        </InfiniteScroll>
      </React.Fragment>
    )
  );
};

export default NewsCards;
