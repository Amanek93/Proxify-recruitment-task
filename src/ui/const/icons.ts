import {Platform} from 'react-native';

const IS_IOS = Platform.OS === 'ios';

export const GLOBAL_ICONS = {
  menu: IS_IOS ? 'ios-menu' : 'md-menu',
};
