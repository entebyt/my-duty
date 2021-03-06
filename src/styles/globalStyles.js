import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
  /* */
  title: {
    fontSize: 24,
    color: colors.textprimary,
  },
  title2: {fontSize: 30, fontWeight: 'bold', color: colors.tertiary},
  title3: {fontSize: 16, color: colors.tertiary},
  appTitle: {
    fontSize: 36,
    color: colors.tertiary,
  },
  text: {fontSize: 18, color: colors.textprimary},
  bold: {fontWeight: 'bold'},
  label: {
    color: colors.secondary,
    lineHeight: 22,
    fontSize: 16,
  },
  hr: {borderTopWidth: 1, borderColor: colors.gray},
  hrb: {borderBottomWidth: 1, borderColor: colors.gray},
  /* */
  tabContainer: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    paddingTop: 16,
  },
  selectedTabStyle: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
  tabStyle: {},
  tabTextStyle: {color: colors.white, fontSize: 16, marginBottom: 8},

  /* */
  mt4: {marginTop: 2},
  mt8: {marginTop: 8},
  mt12: {marginTop: 12},
  mt16: {marginTop: 16},
  mt20: {marginTop: 20},
  mt24: {marginTop: 24},
  mt30: {marginTop: 30},
  mt40: {marginTop: 40},
  mt60: {marginTop: 60},
  mt80: {marginTop: 80},
  my24: {
    marginVertical: 24,
  },

  my16: {marginVertical: 16},
  my40: {marginVertical: 40},
  my60: {marginVertical: 60},
  my8: {marginVertical: 8},
  my4: {marginVertical: 4},
  ml12: {marginLeft: 12},

  ml32: {marginLeft: 32},
  ml36: {marginLeft: 38},
  ml16: {
    marginLeft: 16,
  },
  ml20: {marginLeft: 20},
  ml8: {marginLeft: 8},
  ml24: {marginLeft: 24},
  mr12: {marginRight: 12},
  mr18: {marginRight: 18},
  mr24: {marginRight: 24},
  mx8: {marginHorizontal: 8},
  mx20: {marginHorizontal: 20},
  mx24: {marginHorizontal: 24},
  mb4: {marginBottom: 4},
  mb10: {marginBottom: 10},
  mb20: {marginBottom: 20},
  m0: {margin: 0},
  ml0: {marginLeft: 0},

  px8: {paddingHorizontal: 8},
  px16: {paddingHorizontal: 16},
  px20: {paddingHorizontal: 20},
  px24: {paddingHorizontal: 24},
  px30: {paddingHorizontal: 30},
  px40: {paddingHorizontal: 40},
  px60: {paddingHorizontal: 60},
  pt0: {paddingTop: 0},
  pt4: {paddingTop: 4},
  pt8: {paddingTop: 8},
  pt14: {paddingTop: 14},
  pt20: {paddingTop: 20},
  pt40: {paddingTop: 40},
  pt60: {paddingTop: 60},
  pb20: {paddingBottom: 20},
  pl8: {paddingLeft: 8},
  p0: {padding: 0},
  p30: {padding: 30},
  py8: {paddingVertical: 8},
  py10: {paddingVertical: 10},
  py16: {paddingVertical: 16},
  py20: {paddingVertical: 20},
  py24: {paddingVertical: 24},
  py40: {paddingVertical: 40},
  /* */
  container: {flex: 1, padding: 40, backgroundColor: colors.white},
  alignCenter: {alignItems: 'center'},
  alignEnd: {alignItems: 'flex-end'},
  selfCenter: {alignSelf: 'center'},
  justifyCenter: {justifyContent: 'center'},
  justifyEnd: {justifyContent: 'flex-end'},
  row: {flexDirection: 'row'},
  flexWrap: {flexWrap: 'wrap'},
  spaceBetween: {justifyContent: 'space-between'},
  spaceAround: {justifyContent: 'space-around'},
  textCenter: {textAlign: 'center'},
  /* */
  iconSmall: {width: 16, height: 16},
  iconMedium: {width: 24, height: 24},
  iconLarge: {width: 32, height: 32},

  /* */
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 20,
    shadowRadius: 40,
    shadowColor: 'black',
  },
  whiteBackground: {backgroundColor: colors.white},
  flex1: {flex: 1},
  font12: {fontSize: 12},
  font13: {fontSize: 13},
  font15: {fontSize: 15},
  font16: {fontSize: 16},
  font18: {fontSize: 18},
  font20: {fontSize: 20},
  listBottom: {paddingBottom: 100},
});
