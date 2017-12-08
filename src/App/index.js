import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchAds } from './state';
import { selectAds } from './state/selectors';
import Component from './component';

const mapStateToProps = createStructuredSelector({
  ads: selectAds,
});

const AppContainer = connect(mapStateToProps, { fetchAds })(Component);

export default AppContainer;
