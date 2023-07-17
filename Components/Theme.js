import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  primary: '#3C4390',
 
};

export const SIZES = {
  //global sizes
  base: screenHeight * 0.01,
  font: screenHeight * 0.0175,
  radius: 5,
  padding: screenHeight * 0.03,

  // font sizes
  navTitle: screenHeight * 0.04375,
  h1: screenHeight * 0.0375,
  h2: screenHeight * 0.0275,
  h3: screenHeight * 0.0225,
  h4: screenHeight * 0.0175,
  h5: screenHeight * 0.015,
  body1: screenHeight * 0.0375,
  body2: screenHeight * 0.025,
  body3: screenHeight * 0.0225,
  body4: screenHeight * 0.0175,
  body5: screenHeight * 0.015,
  intro: screenHeight * 0.04,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  navTitle: {fontFamily: 'AeonikTRIAL-Bold', fontSize: SIZES.navTitle},
  largeTitleBold: {
    fontFamily: 'AeonikTRIAL-Bold',
    fontSize: SIZES.h1 * 1.5,
    lineHeight: screenHeight * 0.05,
  },
  h1: {
    fontFamily: 'AeonikTRIAL-Bold',
    fontSize: SIZES.h1,
    lineHeight: screenHeight * 0.05,
  },
  h2: {
    fontFamily: 'AeonikTRIAL-Light',
    fontSize: SIZES.h2,
    lineHeight: screenHeight * 0.0375,
  },
  h3: {
    fontFamily: 'WorkSans-VariableFont_wght',
    fontSize: SIZES.h3,
    lineHeight: screenHeight * 0.025,
  },
  h3a: {
    fontFamily: 'AkayaKanadaka-Regular',
    fontSize: SIZES.h3,
    lineHeight: screenHeight * 0.025,
  },
  h4: {
    fontFamily: 'AeonikTRIAL-Light',
    fontSize: SIZES.h4,
    lineHeight: screenHeight * 0.025,
  },
  h5: {
    fontFamily: 'AeonikTRIAL-Light',
    fontSize: SIZES.h5,
    lineHeight: screenHeight * 0.025,
  },
  body1: {
    fontFamily: 'AeonikTRIAL-Bold',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'AeonikTRIAL-Light',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body2a: {
    fontFamily: 'AeonikTRIAL-Bold',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'AeonikTRIAL-Light',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body3a: {
    fontFamily: 'AeonikTRIAL-Bold',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'AeonikTRIAL-Light',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'AeonikTRIAL-Light',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH};

export default appTheme;
