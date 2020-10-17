import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import RateIcon from './RateIcon';
import { themeVariables } from '../../theme';
import { Currency, CurrencySymbol } from '../../types';

const useStyles = makeStyles(() => ({
  liveRateContainer: {
    position: 'absolute',
    top: '214px',
    left: '110px',
    border: `1px solid ${themeVariables.colors.lightGrey}`,
    borderRadius: '16px',
    height: '30px',
    minWidth: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '0 5px',
  },
  liveRateText: {
    color: themeVariables.colors.blue,
  },
}));

type Props = {
  rate: number | undefined;
  sourceCurrency: Currency;
  destinationCurrency: Currency;
};

const LiveRate = ({ rate, sourceCurrency, destinationCurrency }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.liveRateContainer}>
      <RateIcon fill={themeVariables.colors.blue} />
      <Typography variant="body1" className={classes.liveRateText}>
        {`1 ${CurrencySymbol[sourceCurrency]} = ${rate} ${CurrencySymbol[destinationCurrency]}`}
      </Typography>
    </div>
  );
};

export default LiveRate;
