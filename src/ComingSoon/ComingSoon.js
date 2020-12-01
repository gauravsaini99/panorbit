import React from 'react';
import Auxiliary from '../Hoc/Auxiliary';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%'
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
    fontSize: '7rem',
    color: '#A5A5E4',
  },
}));

const ComingSoon = (props) => {
  const styles = useStyles();
  return (
    <Auxiliary>
      <div className={styles.root} style={{transform: 'translate(-50%, -50%)'}}>
        <div className={cx(styles.name, styles.text)}>
          <p>Coming Soon</p>
        </div>
      </div>
    </Auxiliary>
  );
};

export default ComingSoon;