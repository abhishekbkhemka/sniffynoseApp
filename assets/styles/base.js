import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  bluetext:'#222ba8',
  primary: '#f7d82f',
  secondary: '#254B5A',
  tertiary: '#5DA6A7',
  bg:'#000000',
  white:'#ffffff',
  black:'#231f20',
  disabled:'#f2f2f2',
  error:'#ff4d79',
}


export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 16,
  md: 20,
  lg: 28,
  primary: 'Cochin'
}


const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
  const value = percentage * viewportWidth / 100;
  return Math.round(value);
}

export const slideWidth = wp(39.4);
export const sliderItemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth - 20;
export const sliderItemWidth = slideWidth + sliderItemHorizontalMargin * 2;
