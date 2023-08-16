import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";


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

export default function Account(props) {

  const classes = useStyles();
  const projectcount = 0;
  const workingproject = 0;
  
  const user = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU",
    title: "",
    name: "ADHIRAJ PRATAP SINGH",
    category: "ADMIN",
    profession: "ENGINEER",
    alt: "admin user",
  };
  return (
    <div>
      <Grid container align="">
        <Grid container xs={6} margin={1} sx={{boxShadow: "1px 1px 12px 1px grey"}}>
          <Grid xs={4}>
            <Card variant="" align="center">
              <ImageList sx={{ height: 250 }} cols={1} rowHeight={164}>
                <ImageListItem key={user}>
                  <img
                    src={`${user.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${user.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={user.title}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <Chip label={user.name}></Chip>
            </Card>
          </Grid>
          <Grid xs={8} padding={2}>
            <Chip sx={{background: "blue" , color: "white"}} label="PRIME MEMBER" />
            <Chip sx={{background: "white" , color: "green", border:"1px solid green" }} label="Online" />
            <Typography margin={1}>
              Profession <Chip label="ENGINEERING & BUSINESS" />
            </Typography>
            <Typography margin={1}>
              Location <Chip label="NOIDA" />
            </Typography>
            <Typography margin={1}>
              Company <Chip label="UNISAN" />
            </Typography>
            <Typography margin={1}>
              ROLE <Chip label="CTO & CEO" />
            </Typography>
            <Typography margin={1}>
              EMAIL <Chip label="administrator@unisan.in" />{" "}
              <Chip sx={{ background: "pink" }} label="Verification pending" />
              <Chip sx={{ background: "green", color: "white" }} label="Verified" />
            </Typography>
            <Typography margin={1}>
              PHONE <Chip label="+91 96-966-788-29" />
              <Chip sx={{ background: "pink" }} label="Verification pending" />
              <Chip sx={{ background: "green", color: "white" }} label="Verified" />
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={5.5} margin={1} sx={{boxShadow: "1px 1px 12px 1px grey"}}>
          <Grid xs={4}>
            <Card variant="" align="center">
              <ImageList sx={{ height: 250 }} cols={1} rowHeight={164}>
                <ImageListItem key={user}>
                  <img
                    src={`${user.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${user.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={user.title}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <Chip label="UNISAN"></Chip>
            </Card>
          </Grid>
          <Grid xs={8} padding={2}>
            <Chip sx={{background: "blue" , color: "white"}} label="STARTUP" />
            <Chip sx={{background: "white" , color: "green", border:"1px solid green" }} label="SELF-FUNDED" />
            <Typography margin={1}>
              INDUSTRY <Chip label="IT SERVICES & CONSULTING" />
            </Typography>
            <Typography margin={1}>
              HEADQUARTERS<Chip label="NOIDA" />
            </Typography>
            <Typography margin={1}>
              Team Size <Chip label="0-20" />
            </Typography>
            <Typography margin={1}>
              CATEGORY<Chip label="A+" />
            </Typography>
            <Typography margin={1}>
              EMAIL <Chip label="administrator@unisan.in" />{" "}
              <Chip sx={{ background: "pink" }} label="Verification pending" />
              <Chip sx={{ background: "green", color: "white" }} label="Verified" />
            </Typography>
            <Typography margin={1}>
              PHONE <Chip label="+91 96-966-788-29" />
              <Chip sx={{ background: "pink" }} label="Verification pending" />
              <Chip sx={{ background: "green", color: "white" }} label="Verified" />
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid xs={6} >
          <Grid container justifyContent="center">
          
            <Card
              sx={{ maxWidth: 500, margin: 2, boxShadow: "2px 4px 4px 2px grey" }}
              align="center"
            >
              <CardContent>
                <Typography variant="h5">Total Projects</Typography>
                <Typography variant="h1">{projectcount}</Typography>
              </CardContent>
            </Card>
        
          
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
        // </Grid> */}
        <Grid xs={6} margin={1}>
            <h5>
              Badges earned by Person
            </h5>
        </Grid>
        <Grid xs={5}>
            <h5>
              Badges earned by COMPANY
            </h5>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>
          <h5>Your Ongoing Projects</h5>
        </Grid>  
        <Grid xs={6}>
          <h5>Plans Next Projects </h5>
          <h5>Invested Value</h5>
        </Grid>  
      </Grid>    
    </div>
  );
}
