import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MyCard = ({ title, poster_path, genres, vote_average }) => {
  // Parse genres from string representation to an array
  const genreList = JSON.parse(genres.replace(/'/g, '"'));

  return (
    <Card sx={{ width: 150, height: 300, margin: 1 }}>
      <CardMedia
        sx={{ height: 90 }}
        image={`https://image.tmdb.org/t/p/w500${poster_path}`} // Assuming you're using TMDB for poster images
        title={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>Genres: {genreList.join(", ")}</Typography>
        <Typography>Rating: {vote_average}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default MyCard;
