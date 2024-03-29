import WebFont from 'webfontloader'

import { rgba } from 'polished'
import { css } from 'styled-components'
import { normalizeColor, deepFreeze } from 'grommet/utils'

WebFont.load({
  google: {
    families: [
      'Roboto',
      'Open Sans',
      'Open Sans Condensed',
      'Merriweather',
      'Lato',
      'Tangerine',
    ],
  },
})

var controlColor = '#FFCA58'
var accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58']
var neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200']
var statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8',
}
var backgroundColor = 'light-1'
var textColor = 'dark-1'
var borderColor = rgba(255, 255, 255, 0.33)
var activeColor = rgba(102, 102, 102, 0.5)
var colors = {
  active: activeColor,
  background: backgroundColor,
  black: '#000000',
  border: borderColor,
  brand: '#FD6FFF',
  control: controlColor,
  focus: controlColor,
  placeholder: '#AAAAAA',
  text: textColor,
  white: '#FFFFFF',
}

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function(color, index) {
    colors[prefix + '-' + (index + 1)] = color
  })
}

colorArray(accentColors, 'accent')
colorArray(neutralColors, 'neutral')
Object.keys(statusColors).forEach(function(color) {
  colors['status-' + color] = statusColors[color]
})
const custom = deepFreeze({
  global: {
    colors: colors,
    color: 'status-critical',
    drop: {
      background: '#333333',
    },
    focus: {
      border: {
        color: css(['', ';'], function(props) {
          return normalizeColor('focus', props.theme)
        }),
        width: '2px',
      },
    },
    font: {
      family: '"Open Sans Condensed", "Open Sans", "Roboto"',
      size: '60px',
      height: '35px',
    },
    input: {
      weight: 700,
    },
    text: {
      dark: textColor,
      light: '#000000',
    },
  },
  anchor: {
    color: controlColor,
  },
  icon: {
    color: textColor,
    colors: colors,
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: rgba(48, 48, 48, 0.5),
    },
  },
})

export default custom
