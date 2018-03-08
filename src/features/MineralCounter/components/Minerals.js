import { Grid, Typography } from 'material-ui';
import { flow, map } from 'lodash/fp';
import { green, orange, purple, yellow } from 'material-ui/colors';
import { vitaminC, vitaminPrice } from '../helpers';

import React from 'react';

export default ({
  products = [
    {
      name: 'Apples',
      color: yellow[700]
    },
    {
      name: 'Oranges',
      color: orange[700]
    },
    {
      name: 'Kiwis',
      color: green[700]
    }
  ],
  counters,
  setCounters
}) => (
  <div
    style={{
      padding: '20px',
      backgroundColor: 'white',
      height: '100vh'
    }}
  >
    <br />
    <Typography
      style={{
        color: 'black'
      }}
      align={'center'}
      variant={'display3'}
    >
      Choose amount
    </Typography>
    <br />
    <br />
    <br />
    <Grid container spacing={0}>
      {flow(
        map(product => (
          <Grid
            item
            xs={12}
            md={4}
            key={product.name}
            style={{
              padding: '50px',
              backgroundColor: product.color,
              marginBottom: '10px'
            }}
            spacing={16}
          >
            <Typography align={'center'} variant={'headline'} gutterBottom>
              {product.name}
            </Typography>
            <br />
            <input
              style={{ width: '100%' }}
              type={'range'}
              min={0}
              max={2000}
              value={counters[product.name]}
              onChange={e =>
                setCounters({
                  ...counters,
                  [product.name]: e.target.value
                })
              }
            />
            <br />
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>{counters[product.name]} g.</div>
          </Grid>
        ))
      )(products)}

      <Grid container style={{ marginTop: '100px' }}>
        <Grid xs={12} md={6}>
          <Typography style={{ color: 'black' }} variant={'display1'}>
            Vitamic C
          </Typography>
          <Typography style={{ color: 'black' }} variant={'display1'}>
            {flow(
              counters => vitaminC(counters.Oranges, counters.Kiwis, counters.Apples),
              Math.round
            )(counters)}{' '}
            mg
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Typography style={{ color: 'black', textAlign: 'right' }} variant={'display1'}>
            Total price
          </Typography>
          <Typography style={{ color: 'black', textAlign: 'right' }} variant={'display1'}>
            {flow(
              counters =>
                vitaminPrice(
                  counters.Oranges / 1000,
                  counters.Kiwis / 1000,
                  counters.Apples / 1000
                ),
              Math.round
            )(counters)}{' '}
            UAH
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </div>
);
