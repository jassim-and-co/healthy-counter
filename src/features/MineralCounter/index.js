import { setDisplayName, withState } from 'recompose';

import Component from './components/Minerals';
import { compose } from 'lodash/fp';

const mapPropsToQueries = () => [];

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default compose(
  setDisplayName('Minerals'),
  withState('counters', 'setCounters', {
    Apples: 0,
    Oranges: 0,
    Kiwis: 0
  })
)(Component);
