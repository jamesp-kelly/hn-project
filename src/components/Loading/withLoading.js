import React from 'react';
import Loading from './loading';

//higher oder component. Will display Loading compoenent or passed component based on isLoading


const withLoading = (Component) => ({isLoading, ...rest }) =>
  isLoading ? <Loading /> : <Component { ...rest } />

export default withLoading;