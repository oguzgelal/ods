import createStyle from '../../utils/createStyle';
import { lighten } from 'polished';

export default createStyle('color', theme => ({
  black:      '#000000',
  white:      '#FFFFFF',
  darkGray1:  '#212121',
  darkGray2:  lighten(0.01, '#212121'),
  darkGray3:  lighten(0.03, '#212121'),
  darkGray4:  lighten(0.05, '#212121'),
  darkGray5:  lighten(0.14, '#212121'),
  gray1:      '#484848',
  gray2:      lighten(0.01, '#484848'),
  gray3:      lighten(0.03, '#484848'),
  gray4:      lighten(0.05, '#484848'),
  gray5:      lighten(0.14, '#484848'),
  lightGray1: '#e0e0e0',
  lightGray2: lighten(0.01, '#e0e0e0'),
  lightGray3: lighten(0.03, '#e0e0e0'),
  lightGray4: lighten(0.05, '#e0e0e0'),
  lightGray5: lighten(0.14, '#e0e0e0'),

}))
