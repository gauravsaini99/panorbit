import React from 'react';
import Auxiliary from '../Hoc/Auxiliary';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cx from 'clsx';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Row, Item } from '@mui-treasury/components/flex';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import green_img from '../Assets/green_img.jpg';
import gray_img from '../Assets/gray_img.png';
import chat_img from '../Assets/chat1.jpeg';
import chat2_img from '../Assets/chat2.jpg';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  large: {
    background: '#2C65C8',
    width: theme.spacing(33.3),
    height: theme.spacing(5.5),
    borderRadius: 7
  },
  pic: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  text: {
    fontFamily: 'Lato, sans-serif',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  sname: {
    paddingLeft: 10,
    fontWeight: 1000,
    fontSize: '1.5rem',
    color: '#ffffff',
  },
  name: {
    paddingLeft: 10,
    fontWeight: 1000,
    fontSize: '1 rem',
    color: '#545454',
  },
  leaveTop: {
    marginTop: theme.spacing(7)
  },
  btn: {
    marginTop: theme.spacing(0.5),
    width: theme.spacing(2),
    height: theme.spacing(2),
    right: 20,
    position: 'absolute',
    verticalAlign: 'middle'
  },
  btnSize: {
    marginTop: theme.spacing(0.3),
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    right: 19,
    position: 'absolute',
    verticalAlign: 'middle'
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: green
  },
});
const Footer = (props) => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl_, setAnchorEl_] = React.useState(null);
  const open = Boolean(anchorEl);
  const open_ = Boolean(anchorEl_);
  const handleClose_ = () => {
    setAnchorEl_(null);
  };
  const handleClick_ = () => (event) => {
    console.log('%cHeader.js line:77 event.currentTarget', 'color: #007acc;', event.currentTarget);
    setAnchorEl_(event.currentTarget);
    
  };
  const handleClick = () => (event) => {
    console.log('%cHeader.js line:77 event.currentTarget', 'color: #007acc;', event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <Auxiliary>
      <Popover open={open_} onClose={handleClose_} style={{width: '300px'}} anchorEl={anchorEl_}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 600, left: window.screen.width-600 }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
      <Paper className={styles.large} onClick={handleClose_} style={{cursor: 'pointer'}}>
              <p className={cx(styles.text, styles.sname)}>{props.usersdata.usersdata[1].name}<ExpandMoreIcon style={{right: -10, top: 5, position: 'relative'}}/><CloseIcon style={{right: 4, top: 10, position: 'absolute'}}/></p>
      </Paper>
      <Paper style={{background: '#d3d3d3'}}>
          <img src={chat_img} /> <br/>
          <img src={chat2_img} />
      </Paper>
    </Popover>
      <Popover onClose={handleClose} style={{width: '300px'}} open={open} anchorEl={anchorEl} anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: { width: '300px', borderRadius: 7 },
        }}
      >
        <Paper>
        <Paper className={styles.large} style={{position: "absolute", top: 0, left: 0, cursor: 'pointer'}} onClick={handleClose}>
              <p className={cx(styles.text, styles.sname)}><ChatBubbleOutlineIcon style={{verticalAlign: 'middle'}}/>Chats<ExpandMoreIcon style={{right: 10, top: 10, position: 'absolute'}}/></p>
        </Paper>
        <div className={styles.leaveTop}>
        {props.usersdata && props.usersdata.usersdata.map((obj, i) => (
           (i!==0) ? <div onClick={i===1 ? handleClick_() : null}>
          {/* <Avatar className={styles.pic} src={obj.profilepicture} /> {obj.name}</div>  : null */}
              <Row gap={0.1} style={{cursor: 'pointer'}}>
                <Item>
                  <Avatar className={cx(styles.pic)} src={obj.profilepicture} />
                </Item>
                  <Item  >
                    <div className={cx(styles.name, styles.text)}>{obj.name}</div>
                  </Item>
                  <Item>
                  { i%3 === 0 ?  <img src={gray_img} className={styles.btnSize} /> : 
                  <img src={green_img} className={styles.btn} /> }
                  </Item>
              </Row>
                </div> : null
        ))}
        </div>
        </Paper>
      </Popover>
      <Button style={{textTransform: 'none'}} onClick={handleClick()} >
      <Paper className={styles.large}>
              <p className={cx(styles.text, styles.sname)}><ChatBubbleOutlineIcon style={{verticalAlign: 'middle'}}/>Chats<ExpandLessIcon style={{right: 10, top: 15, position: 'absolute'}}/></p>
      </Paper>
      </Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));