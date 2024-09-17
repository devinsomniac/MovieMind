import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MyCard = () => {
  return (
    <>
      <Card sx={{ width: 150, height: 300 ,margin:1}}>
        <CardMedia
          sx={{ height: 90 }}
          image="https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg?tr=w-300"
          title="green iguana"
        />
        <CardContent>
            <h1>Dhoom</h1>
            Cast: Srk,Rani Mukherji
            Director: Inzamam
            genres : Comedy/Action/Romance
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MyCard;
