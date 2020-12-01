import React, {useEffect, useState} from 'react';
import Auxiliary from '../Hoc/Auxiliary';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Item } from '@mui-treasury/components/flex';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Popover from '@material-ui/core/Popover';
import Fab from '@material-ui/core/Fab';
import {
  usePopupState,
  bindTrigger,
  bindPopover,
  bindMenu
} from 'material-ui-popup-state/hooks'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  root: {
    marginTop: window.screen.height/16,
  },
  text: {
    fontFamily: 'Lato, sans-serif',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    verticalAlign: 'middle'
  },
  name: {
    paddingLeft: 10,
    fontWeight: 1000,
    fontSize: '1.7rem',
    color: '#545454',
  },
  sname: {
    paddingLeft: 10,
    fontWeight: 1000,
    fontSize: '1.1rem',
    color: '#545454',
  },
  vsname: {
    paddingLeft: 10,
    fontWeight: 1000,
    fontSize: '1  rem',
    color: '#545454',
  },
  divider: {
      margin: theme.spacing(1),
      width: theme.spacing(140),
  },
  root_: {
    width: '200px',
  },
  typography: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  img: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pushToRight: {
    marginLeft: theme.spacing(3)
  },
  cntrBtn: {
    display: 'block',
    margin: 'auto',
    width: '100px'
  }
}));

const Header = (props) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  })
  const styles=useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [firstTwo, setFirstTwo] = React.useState([]);
  useEffect(() => {
    let arr = [];
    if(props.usersdata) {
      props.usersdata.usersdata.map((obj, i) => {
        if(i >=1 && i<=2) {
          arr.push(obj);
        }
      })
    }
    setFirstTwo(arr);
  }, [props.usersdata])
  const open = Boolean(anchorEl);
  const handleClick = () => (event) => {
    console.log('%cHeader.js line:77 event.currentTarget', 'color: #007acc;', event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Auxiliary>
      <div className={styles.root}>
        <Row>
          <Item grow minWidth={0}>
            <div className={cx(styles.name, styles.text)}>
            <p>{props.page === 0? 'Profile' : props.page===1 ? 'Posts' : props.page===2 ? 'Gallery' : 'ToDo'}</p>
            </div>
          </Item>
          <Item>
            <Popover onClose={handleClose} style={{width: '300px'}} open={open} anchorEl={anchorEl} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              PaperProps={{
                style: { width: '300px', borderRadius: 25 },
              }}
            >
              <br/>
              <Avatar className={styles.img} src={props.usersdata.usersdata[0].profilepicture} />  
              <Typography className={styles.typography}>{props.usersdata.usersdata[0].name}</Typography>
              <Typography className={styles.typography}>{props.usersdata.usersdata[0].email}</Typography>
              <Divider variant={'middle'} />
              {firstTwo.length && firstTwo.map((obj, i) => (
                <div>
                <Row gap={0.1} p={1.2} style={{cursor: 'pointer'}}>
                <Item>
                  <Avatar className={cx(styles.medium, styles.pushToRight)} src={obj.profilepicture} />
                </Item>
                <Row wrap grow gap={0} minWidth={0}>
                  <Item grow minWidth={0}>
                    <div className={cx(styles.vsname, styles.text)}>{obj.name}</div>
                  </Item>
                </Row>
                </Row>
                <Divider variant={'middle'} />
                </div>
              ))} <br/>
               <Fab variant="extended" className={styles.cntrBtn} color="secondary" aria-label="add" onClick={() => history.push('/')}>
                 Sign out
               </Fab>
              <br/>
            </Popover>
            <Grid container justify="center">
              <Grid item>
                <Button style={{textTransform: 'none'}} onClick={handleClick()} {...bindPopover(popupState)}>
                <Item style={{cursor: 'pointer'}}>
                  <Avatar className={styles.large} src={props.usersdata.usersdata[0].profilepicture} /> 
                </Item>
                <Item style={{cursor: 'pointer', marginLeft: '5px'}}>
                  <Typography className={cx(styles.sname, styles.text)}>{props.usersdata.usersdata[0].name}</Typography>
                </Item> 
                </Button>
              </Grid>
            </Grid>
            </Item>
        </Row>
      </div>
      <Row>
      <Item grow minWidth={0}/>
      <Item>
      </Item>
      </Row>
      <Divider variant={'middle'} className={styles.divider} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));