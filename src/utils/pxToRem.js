const rootFontSize = 16

export const rem = (px = 0) => `${(px / rootFontSize).toFixed(3)}rem`
