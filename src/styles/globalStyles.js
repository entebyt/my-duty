import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
  /* */
  title: {
    fontSize: 24,
    color: colors.textprimary,
  },
  appTitle: {
    fontSize: 36,
    color: '#22215B',
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
  mt8: {marginTop: 8},
  mt16: {marginTop: 16},
  mt40: {marginTop: 40},
  mt60: {marginTop: 60},
  mt80: {marginTop: 80},
  my24: {
    marginVertical: 24,
  },
  my16: {marginVertical: 16},
  my60: {marginVertical: 60},
  my8: {marginVertical: 8},
  ml32: {marginLeft: 32},
  ml16: {
    marginLeft: 16,
  },
  ml8: {marginLeft: 8},

  mb20: {marginBottom: 20},
  px20: {paddingHorizontal: 20},
  px30: {paddingHorizontal: 30},
  px40: {paddingHorizontal: 40},
  px60: {paddingHorizontal: 60},
  pt40: {paddingTop: 40},
  pt60: {paddingTop: 60},
  p0: {padding: 0},
  py20: {paddingVertical: 20},
  /* */
  container: {flex: 1, padding: 40, backgroundColor: colors.white},
  alignCenter: {alignItems: 'center'},
  selfCenter: {alignSelf: 'center'},
  justifyCenter: {justifyContent: 'center'},
  row: {flexDirection: 'row'},
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
  flex1: {flex: 1},
});
