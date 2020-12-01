import React, {useState, useEffect} from 'react';
import Auxiliary from '../Hoc/Auxiliary';
import { makeStyles } from '@material-ui/core/styles';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";
import { Row, Item } from '@mui-treasury/components/flex';
import { withRouter } from 'react-router-dom';
import cx from 'clsx';
import {connect} from 'react-redux';
import {changePage} from '../Store/ActionCreator';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: window.screen.height/16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(90),
    },
  },
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
    color: '#A5A5E4',
  },
}));

const Sidebar = (props) => {
  const styles=useStyles();
  const userdata = ['Profile', 'Posts', 'Gallery', 'ToDo'];
  const [pageNo, setPageNo] = useState(0);
  const [selCol, setSelCol] = useState('#A5A5E4');

  const clickHandler = (id) => {
    if(id === 0) {
       props.changePage(id); setPageNo(0); document.getElementById('id_0').style.color="#ffffff";
       document.getElementById('id_1').style.color="#A5A5E4";document.getElementById('id_2').style.color="#A5A5E4";document.getElementById('id_3').style.color="#A5A5E4";
    } else if(id === 1) { 
      props.changePage(id); setPageNo(1); document.getElementById('id_1').style.color="#ffffff";
      document.getElementById('id_0').style.color="#A5A5E4";document.getElementById('id_2').style.color="#A5A5E4";document.getElementById('id_3').style.color="#A5A5E4";
    } else if(id === 2) { 
      props.changePage(id); setPageNo(2); document.getElementById('id_0').style.color="#A5A5E4";
      document.getElementById('id_1').style.color="#A5A5E4";document.getElementById('id_2').style.color="#ffffff";document.getElementById('id_3').style.color="#A5A5E4";
    } else if(id === 3) {
       props.changePage(id); setPageNo(3); document.getElementById('id_0').style.color="#A5A5E4";
       document.getElementById('id_1').style.color="#A5A5E4";document.getElementById('id_2').style.color="#A5A5E4";document.getElementById('id_3').style.color="#ffffff";
    } 
  }
  return (
    <Auxiliary>
      <div className={styles.root}>
        <Paper elevation={10} style={{maxHeight: window.screen.height-200, borderRadius: 35, backgroundColor: '#4153C8'}}>
        <div style={{marginTop: '60%'}}>
        {userdata.length && userdata.map((obj, i) => (
          <div key={i}> 
            <Row gap={0.2} p={2.5} style={{cursor: 'pointer'}}>
              <Row wrap grow gap={2} minWidth={0}>
                <Item grow minWidth={0}>
                  <div id={i===0? 'id_0': i===1 ? 'id_1' : i === 2 ? 'id_2' : 'id_3'} className={cx(styles.name, styles.text)} style={{color: `${selCol}`}} onClick={() => {clickHandler(i); props.handleChange(i); }}>{obj}</div>
                </Item>
              </Row>
            </Row>
            <Divider variant={'middle'} className={styles.divider} />
          </div>  
        ))}
        </div>
        </Paper>
      </div>
    </Auxiliary>
  );
};

const matchDispatchToProps = (dispatch) => {
  return {
    changePage: (id) => dispatch(changePage(id))
  }
} 

export default withRouter(connect(null, matchDispatchToProps)(Sidebar));
