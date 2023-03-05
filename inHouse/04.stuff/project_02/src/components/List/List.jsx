import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = ({ places, childClicked, isLoad }) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rate, setRate] = useState("");
  const [ elRefs, setElRefs ] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  },[places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">음식점, 호텔 그리고 관광명소들</Typography>
      {isLoad ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
        <FormControl className={classes.formControl}>
        <InputLabel>장소</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">음식점</MenuItem>
          <MenuItem value="hotels">호텔</MenuItem>
          <MenuItem value="attractions">관광명소</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>평점</InputLabel>
        <Select value={rate} onChange={(e) => setRate(e.target.value)}>
          <MenuItem value={0}>전체</MenuItem>
          <MenuItem value={3}>3점 이상</MenuItem>
          <MenuItem value={4}>4점 이상</MenuItem>
          <MenuItem value={4.5}>4.5점 이상</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails 
              place={place}
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
              />
          </Grid>
        ))}
      </Grid>
      </>
        )}
    </div>
  );
};

export default List;
