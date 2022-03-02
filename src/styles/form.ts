import {
  borderColor,
  borderRadius,
  borderWidth,
  classnames,
  display,
  fontSize,
  width,
  padding,
  margin,
} from 'tailwindcss-classnames'

export const label = classnames(
  display('block'),
  fontSize('text-sm'),
  margin('mb-1')
)

export const form = classnames(width('w-full'))
