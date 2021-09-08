import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import UserService from "../services/user.service";
import Navbar from "./Navbar"
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
    paper: {
      width: '500px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: 'auto',
      backgroundColor: 'lightGray',
      padding: '20px'
    },
    body: {
        marginTop: '20px'
    },
    heading: {
      textAlign: 'center'
    },
    search: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
  },
  }));

export default function Blog() {
    const classes = useStyles();
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
   
   useEffect(() => {
   UserService.getContent().then(
        (response) => {
          setAllData(response.data);
          setFilteredData(response.data);
        },
        (error) => {
         console.log(error)
        }
      ); 
    }, []);


    const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
      result = allData.filter((data) => {
        return data.title.search(value) !== -1;
      });
      setFilteredData(result);
    }


    return (
        <div className="container">
      <Navbar />
        <h1 className={classes.heading}>Köszöntelek a blogomon</h1>
        <div className={classes.search}>
          <Input
              type="text"
              id="header-search"
              placeholder="Keresés"
              name="s"
              className={classes.input} 
              onChange={(event) =>handleSearch(event)} 
              />
          <Button 
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              >Keresés
          </Button>
        </div>
        <Grid container spacing={5} >
        {filteredData.map((post) => {
            return (
            <Grid item xs={12} key={post.id}>
                <Paper className={classes.paper}>
                <Typography variant="h3" color="inherit" gutterBottom className={classes.title}>
                {post.title}
                </Typography>
                <Typography variant="h6" className={classes.author}>
                Szerző: {post.author.username}
                </Typography>
                <Typography className={classes.date} variant="subtitle1">
                {new Date(post.created).toLocaleDateString()}
                </Typography>
                {post.tags}
               <Typography variant="h5" color="inherit" paragraph className={classes.body}>
                {post.body}
                </Typography>
        </Paper>
            </Grid>

                );
        })}
        </Grid>
       </div>
    )
}
