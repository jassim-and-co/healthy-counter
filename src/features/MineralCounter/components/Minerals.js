import { Grid, Typography } from 'material-ui';
import { flow, map } from 'lodash/fp';
import { green, orange, purple, yellow } from 'material-ui/colors';

import React from 'react';

function VitaminC(orangeWeight, kiwiWeight, appleWeight) {
  var orange = 60 / 100; //содержание витамина С в 1г. фрукта
  var kiwi = 90 / 100; //содержание витамина С в 1г. фрукта
  var apple = 10 / 100; // содержание витамина С в 1г. фрукта

  var weightSum = orangeWeight + kiwiWeight + appleWeight; //суммарный вес всех фруктов

  var vitaminSum = orangeWeight * orange + kiwiWeight * kiwi + appleWeight * apple;
  //суммарное содержание витамина С во всех фруктах

  return vitaminSum; //суммарное содержание витамина С во всех фруктах
}

function vitaminPrice(orangeWeight, kiwiWeight, appleWeight) {
  var orangePrice = 26; //стоимость 1000г.фрукта в грн.
  var kiwiPrice = 60; //стоимость 1000г.фрукта грн.
  var applePrice = 27; //стоимость 1000г.фрукта грн.

  var orangePayment = orangeWeight * orangePrice; //стоимость данного фрукта в зависимости от веса
  var kiwiPayment = kiwiWeight * kiwiPrice; //стоимость данного фрукта в зависимости от веса
  var applePayment = appleWeight * applePrice; //стоимость данного фрукта в зависимости от веса

  var weightSum = orangeWeight + kiwiWeight + appleWeight; //суммарный вес всех фруктов

  var paymentResult = orangePayment + kiwiPayment + applePayment; //итоговая стоимость всех фруктов в зависмости от веса

  return paymentResult;
}

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
              counters => VitaminC(counters.Oranges, counters.Kiwis, counters.Apples),
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
