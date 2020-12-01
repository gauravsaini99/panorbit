import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComingSoon from '../ComingSoon/ComingSoon';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'fixed',
    marginTop: window.screen.height/16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  root_: {
    flexGrow: 1,
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

const Home = (props) => {
  const styles=useStyles();
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {
    console.log(pageNum, "----- pageNum");
  }, [pageNum])

  const handleChangeHome = (id) => {
    console.log('%cHome.js line:11 i m hit @ id', 'color: #007acc;', id);
    setPageNum(id);
  }

  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Sidebar handleChange={handleChangeHome} /> 
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Header page={pageNum} />
          </Grid>
          <Grid  xs={12}>
            { pageNum === 0 ? <Profile /> : <ComingSoon /> }
          </Grid>
        </Grid>
      </Grid>
      <div style={{position: 'absolute', bottom: -100, right: 0}}>
        <Footer />
      </div>
    </div>
  );

};

export default Home;