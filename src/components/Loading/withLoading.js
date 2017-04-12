import React from 'react';
import Loading from './loading';

//higher oder compoenent. Will display loading or passed component based on isLoading


const withLoading = (Component) => ({isLoading, ...rest }) =>
  isLoading ? <Loading /> : <Component { ...rest } />

export default withLoading;