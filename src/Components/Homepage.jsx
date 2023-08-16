import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardBox from "./cards";
import { Grid } from "@material-ui/core";
import shadows from "@mui/material/styles/shadows";
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2), // adds 16px of margin
  },
  button: {
    margin: theme.spacing(1), // adds 8px of margin
  },
  container: {
    margin: "0 auto", // centers the container horizontally
  },
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function HomePage(props) {
  const classes = useStyles();
  const service = [
    {
      name: "Data Analysis",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtRYpDvxCyYL710T-CjzDonk7so3almt1Uw&usqp=CAU",
    },
    {
      name: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2G57LKxiYM5XMiHPa-9ccxpfF4NGQKSrJg&usqp=CAU",
    },
    {
      name: "Software Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2G57LKxiYM5XMiHPa-9ccxpfF4NGQKSrJg&usqp=CAU",
    },
    {
      name: "UI/UX",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2G57LKxiYM5XMiHPa-9ccxpfF4NGQKSrJg&usqp=CAU",
    },
  ];

  const projectcount = 0;
  const workingproject = 0;

  const name = [{ name: "one" }, { name: "five" }];

  return (
    <div className="">
      <Typography variant="h5" align="center">
        IN NEED OF SERVICE
      </Typography>
      <Grid container justifyContent="center">
        {service.map((data, index) => {
          return (
            //   <Card sx={{ maxWidth: 375 }}>
            //     <CardMedia
            //       sx={{ height: 200 }}
            //       image={data.image}
            //       alt="image"
            //       title="green iguana"
            //     />

            //     <CardContent>
            //       <Typography
            //         sx={{ fontSize: 14 }}
            //         color="text.secondary"
            //         gutterBottom
            //       >
            //         {data.service}
            //       </Typography>
            //     </CardContent>
            //     <CardActions>
            //       <Button size="small">Learn More</Button>
            //     </CardActions>
            //   </Card>
            <Grid xs={3} className="classes.root">
              <CardBox data={data} />
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid container justifyContent="center">
        <Grid xs={2}>
          <Card
            sx={{ maxWidth: 500, margin: 2, boxShadow: "2px 4px 4px 2px grey" }}
            align="center"
          >
            <CardContent>
              <Typography variant="h5">Total Projects</Typography>
              <Typography variant="h1">{projectcount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2}>
          <Card
            sx={{ maxWidth: 500, margin: 2, boxShadow: "2px 4px 4px 2px grey" }}
            align="center"
          >
            <CardContent>
              <Typography variant="h5">Projects OnGoing</Typography>
              <Typography variant="h1">{workingproject}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
      <Grid container align="center">
        <Grid xs={6}>
        <Card
            sx={{ maxWidth: 500, margin: 2, boxShadow: "2px 4px 4px 2px grey" }}
            align="center"
          >
            <CardContent>
              <Typography variant="h6"><b>REQUEST A DEMO </b></Typography><br/>
              {service.map((item) =>
                <Grid align="start" >
                  
                  
                  <Typography>
                    {item.name}
                  </Typography>
                </Grid>
              
              )}
            </CardContent>
          </Card>

        </Grid>
        <Grid xs={6}>
        <Card
            sx={{ maxWidth: 500, margin: 2, boxShadow: "2px 4px 4px 2px grey" }}
            align="center"
          >
            <CardContent>
              <Typography variant="h6"><b>GET SUPPORT</b></Typography><br/>
              <Typography>Contact Us</Typography>
              <Typography>How To</Typography>
              <Typography>Service Request</Typography>
              <Typography>Write Down</Typography>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </div>
  );
}
