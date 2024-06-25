const colorObject = {
  "transparent": "transparent",
  "current": "currentColor",

  "primary": "var(--fallback-p,lch(var(--p)/<alpha-value>))",
  "primary-content": "var(--fallback-pc,lch(var(--pc)/<alpha-value>))",

  "secondary": "var(--fallback-s,lch(var(--s)/<alpha-value>))",
  "secondary-content": "var(--fallback-sc,lch(var(--sc)/<alpha-value>))",

  "accent": "var(--fallback-a,lch(var(--a)/<alpha-value>))",
  "accent-content": "var(--fallback-ac,lch(var(--ac)/<alpha-value>))",

  "neutral": "var(--fallback-n,lch(var(--n)/<alpha-value>))",
  "neutral-content": "var(--fallback-nc,lch(var(--nc)/<alpha-value>))",

  "base-100": "var(--fallback-b1,lch(var(--b1)/<alpha-value>))",
  "base-200": "var(--fallback-b2,lch(var(--b2)/<alpha-value>))",
  "base-300": "var(--fallback-b3,lch(var(--b3)/<alpha-value>))",
  "base-content": "var(--fallback-bc,lch(var(--bc)/<alpha-value>))",

  "info": "var(--fallback-in,lch(var(--in)/<alpha-value>))",
  "info-content": "var(--fallback-inc,lch(var(--inc)/<alpha-value>))",

  "success": "var(--fallback-su,lch(var(--su)/<alpha-value>))",
  "success-content": "var(--fallback-suc,lch(var(--suc)/<alpha-value>))",

  "warning": "var(--fallback-wa,lch(var(--wa)/<alpha-value>))",
  "warning-content": "var(--fallback-wac,lch(var(--wac)/<alpha-value>))",

  "error": "var(--fallback-er,lch(var(--er)/<alpha-value>))",
  "error-content": "var(--fallback-erc,lch(var(--erc)/<alpha-value>))",
}

module.exports = colorObject
