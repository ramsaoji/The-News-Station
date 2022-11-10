import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import NavBar from "./Components/NavBar.js";
import NewsCards from "./Components/NewsCards.js";
import { Container } from "@mui/material";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // const apiKey = process.env.REACT_APP_NEWS_APIKEY;
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [categoryClickedIndex, setcategoryClickedIndex] = useState(0);
  // const pageSize = 30;

  const fetchNewsApi = async () => {
    try {
      // const newsApiData = await axios.get(
      //   `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
      // );
      const newsApiData = await axios.get("sampleData.json");
      // console.log(newsApiData.data);
      setTotalResults(newsApiData.data.totalResults);
      setArticles(articles.concat(newsApiData.data.articles));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    fetchNewsApi();
    // eslint-disable-next-line
  }, [categoryClickedIndex, page]);

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          {/* <Router>
          <Routes>
            <Route
              path={category === "general" ? "/" : `/${category}`}
              element={ */}
          <NavBar
            setCategory={setCategory}
            setcategoryClickedIndex={setcategoryClickedIndex}
            articles={articles}
            setArticles={setArticles}
          />
          {/* }
            />
          </Routes>
        </Router> */}

          <NewsCards
            category={category}
            articles={articles}
            totalResults={totalResults}
            fetchMoreData={fetchMoreData}
            capitalize={capitalize}
          />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
