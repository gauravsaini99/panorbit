import React from 'react';
import Auxiliary from '../Hoc/Auxiliary';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { Row, Item } from '@mui-treasury/components/flex';
import Divider from '@material-ui/core/Divider';
import cx from 'clsx';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import { Scrollbars } from 'react-custom-scrollbars';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchData, clearState} from '../Store/ActionCreator';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const usePersonStyles = makeStyles(() => ({
  text: {
    fontFamily: 'Noto Sans JP, sans-serif',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  name: {
    paddingLeft: 10,
    fontWeight: 600,
    fontSize: '1.1rem',
    color: '#122740',
  },
  caption: {
    fontSize: '0.875rem',
    color: '#758392',
    marginTop: -4,
  }
}));

const PersonItem = ({ src, name, id }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 38 });
  const styles = usePersonStyles();
  let history = useHistory();
  const clickHandler = () => {
    history.push('/home');
  }

  return (
    <Row gap={0.2} p={2.5} onClick={id === 1 ? clickHandler: null} style={id === 1 ? {cursor: 'pointer'}: {cursor: ''}}>
      <Item>
        <Avatar classes={avatarStyles} src={src} />
      </Item>
      <Row wrap grow gap={0} minWidth={0}>
        <Item grow minWidth={0}>
          <div className={cx(styles.name, styles.text)}>{name}</div>
        </Item>
      </Row>
    </Row>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: window.screen.height/8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(70),
    },
  },
}));

const ProfileSelectionPage = (props) => {
  const styles = useStyles();
  const [userdata, setUserdata] = React.useState([]); 
  const fetchIt = async () => {
    await props.fetchData();
  }
  React.useEffect(() => {
    // props.clearState();
    fetchIt();
  }, []);
  React.useEffect(() => {
    if(props.usersdata) {
      setUserdata(props.usersdata.usersdata);
      console.log('%cProfileSelection.js line:95 props', 'color: #007acc;', props);
    }
  }, [props.usersdata])
  React.useEffect(() => {
    console.log('%cProfileSelection.js line:93 userdata', 'color: #007acc;', userdata);
  })
  return (
    <Auxiliary>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: 'Barlow', weights: [400, 600] }]} />
        </NoSsr>
        <div className={styles.root}>
          <Paper elevation={10} style={{maxHeight: window.screen.height/2, borderRadius: 35, backgroundColor: '#f5f5dc'}}>
            <p style={{textAlign: 'center', marginTop: 10,  fontWeight: 600, fontSize: '1.4rem', color: '#122740',}}>Select an account</p>
            <Card style={{maxHeight: window.screen.height/2, marginTop: '30px', overflow: 'auto'}}>
            <List>
              <Scrollbars style={{height: 300}}>
            {userdata.length && userdata.map((obj, i) => (
              <div key={obj.id}> 
                <PersonItem name={obj.name} src={obj.profilepicture} id={obj.id} />
                {obj.id<10 ? <Divider variant={'middle'} className={styles.divider} /> : null }
              </div>  
            ))}
            </Scrollbars>
            </List> 
            </Card>
          </Paper>
        </div>
    </Auxiliary>
  );
};

const mapStateToProps = state => {
  return {
    usersdata: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    clearState: () => dispatch(clearState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileSelectionPage));
