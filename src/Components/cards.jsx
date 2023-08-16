import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";


export default function CardBox(props){

    const data = props.data;
    return (
        <Card sx={{ maxWidth: 350, margin: 2 , border: '2 2 2 2 black'}}>
            <CardMedia
              sx={{ height: 200 }}
              image={data.image}
              alt="image"
              title="green iguana"
            />

            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}