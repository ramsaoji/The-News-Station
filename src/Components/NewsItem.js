import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import No_Image_Available from "../images/No_Image_Available.jpg";

export default function NewsItem(props) {
  const { items, index } = props;
  return (
    // Grids
    <Grid xs={12} sm={6} md={4} key={index}>
      <Card sx={{ height: 470 }}>
        <Link
          target="_blank"
          underline="none"
          href={items.url}
          onClick={() => {}}
          color="inherit"
        >
          <CardActionArea>
            {/* image */}
            <CardMedia
              component="img"
              height="150"
              image={
                items.urlToImage !== null
                  ? items.urlToImage
                  : No_Image_Available
              }
              alt="image"
            />
            <CardContent
              sx={{
                py: 1,
                px: 2,
              }}
            >
              {/* title */}
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  height: 100,
                  overflow: "hidden",
                }}
              >
                {items.title && items.title.length >= 75
                  ? `${items.title.slice(0, 75)}...`
                  : items.title === null
                  ? "No Title Available"
                  : items.title}
              </Typography>

              {/* author */}
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{
                  height: 14,
                  overflow: "hidden",
                  fontStyle: "italic",
                  fontSize: "0.7rem",
                }}
              >
                {items.author ? items.author : "Unknown"}
              </Typography>

              {/* date */}
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{
                  height: 16,
                  overflow: "hidden",
                  fontStyle: "italic",
                  fontSize: "0.7rem",
                }}
              >
                {items.publishedAt
                  ? new Date(items.publishedAt).toGMTString()
                  : "Unknown"}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ height: 100, overflow: "hidden" }}
              >
                {items.description && items.description.length >= 215
                  ? `${items.description.slice(0, 212)}...`
                  : items.description === null
                  ? "No Description Available"
                  : items.description}
              </Typography>

              {/* Source */}
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{
                  mt: 1,
                  overflow: "hidden",
                  fontSize: "0.7rem",
                }}
              >
                {items.source.name ? `From - ${items.source.name}` : "Unknown"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              px: 2,
              py: 0,
            }}
          >
            {/* <Link
              target="_blank"
              underline="none"
              href={items.url}
              onClick={() => {}}
            > */}
            <Button
              size="small"
              color="primary"
              sx={{
                px: 0,
              }}
            >
              Read More
            </Button>
            {/* </Link> */}
          </CardActions>
        </Link>
      </Card>
    </Grid>
  );
}
