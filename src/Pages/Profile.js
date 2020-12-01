import React, {useState, useEffect} from 'react';
import Auxiliary from '../Hoc/Auxiliary';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { Row, Item } from '@mui-treasury/components/flex';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import map_img from '../Assets/map2.png';

const useStyles = makeStyles((theme) => ({
large: {
  marginTop: theme.spacing(5),
  width: theme.spacing(25),
  height: theme.spacing(25),
},
text: {
  fontFamily: 'Noto Sans JP, sans-serif',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(4),
},
name: {
  paddingLeft: 10,
  fontWeight: 600,
  fontSize: '1.1rem',
  color: '#545454',
},
mapSize: {
  width: window.screen.width/2,
  height: window.screen.height/2.5
}
}));

const ProfilePage = (props) => {
  const styles=useStyles();
  const avatarStyles = useDynamicAvatarStyles({ size: 38 });
  const [data, setData] = useState(props.usersdata.usersdata);
  const src=`http://maps.google.com/maps/api/staticmap?center=${props.usersdata.usersdata[0].address.geo.lat},${props.usersdata.usersdata[0].address.geo.lng}&zoom=7&size=640x480&scale=2&key=AIzaSyC3ziSr9UVY2D9YrIolUI4zXNJ1XdxuvrU` ? `http://maps.google.com/maps/api/staticmap?center=${props.usersdata.usersdata[0].address.geo.lat},${props.usersdata.usersdata[0].address.geo.lng}&zoom=7&size=640x480&scale=2&key=AIzaSyC3ziSr9UVY2D9YrIolUI4zXNJ1XdxuvrU` : map_img;
  
  useEffect(() => {
    console.log('%cProfile.js line:16 props.usersdata.usersdata', 'color: #007acc;', props.usersdata.usersdata[0].address.geo.lat, props.usersdata.usersdata[0].address.geo.lng);
  })

  return (
    <Auxiliary>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <Item>
            <Avatar classes={avatarStyles} className={styles.large} src={props.usersdata.usersdata[0].profilepicture} />
          </Item>
          <div className={cx(styles.name, styles.text)}>
            <Item>{props.usersdata.usersdata[0].name}</Item>
            <Item>Username : {props.usersdata.usersdata[0].username}</Item>
            <Item>Email : {props.usersdata.usersdata[0].email}</Item>
            <Item>Phone : {props.usersdata.usersdata[0].phone.substring(0, 14)}</Item>
            <Item>Website : {props.usersdata.usersdata[0].website}</Item>
            <Divider variant={'middle'} style={{marginTop: '10px', width: '200px'}} />
            <br/>
            <Item>Company</Item>
            <Item>Name : {props.usersdata.usersdata[0].company.name}</Item>
            <Item>catchphrase : {props.usersdata.usersdata[0].company.catchPhrase}</Item>
            <Item>bs : {props.usersdata.usersdata[0].company.bs}</Item>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
          <Grid item xs={1}>
            <Divider orientation="vertical" style={{marginTop: '40px'}}/>
          </Grid>
          <Grid item xs={11}>
          <div className={cx(styles.name, styles.text)}>
          <Item style={{marginTop: '40px'}}>Address:</Item>
          <Item>Street: {props.usersdata.usersdata[0].address.street}</Item> 
          <Item>Suite: {props.usersdata.usersdata[0].address.suite}</Item> 
          <Item>City: {props.usersdata.usersdata[0].address.city}</Item> 
          <Item>Zipcode: {props.usersdata.usersdata[0].address.zipcode}</Item> 
          <Item ><img src={map_img} className={styles.mapSize}/></Item>
          <Item>Lat: {props.usersdata.usersdata[0].address.geo.lat} &nbsp; Long: {props.usersdata.usersdata[0].address.geo.lng} </Item>
          </div>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Auxiliary>
  );
};

const mapStateToProps = (state) => {
  return {
    usersdata: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
