import { expect, test } from "bun:test"
import { wcagContrast } from "culori"
import * as colorFunctions from "../theming/functions"
import * as themes from "../theming/themes"
import { trimThemeName } from "./utils"
import { colorPairs, ContrastRatioErrorThreshold, ContrastRatioWarningThreshold } from "./data"

for (const themeKey in themes) {
  if (themeKey === "default") continue
  // for each variable name
  for (const variableName of colorPairs) {
    test(`${trimThemeName(themeKey)}: \t${variableName[0].substring(2)}/${variableName[1].substring(
      2
    )} \tcontrast = ${wcagContrast(
      `lch(${colorFunctions.convertColorFormat(themes[themeKey], "lch")[variableName[0]]})`,
      `lch(${colorFunctions.convertColorFormat(themes[themeKey], "lch")[variableName[1]]})`
    ).toFixed(2)}:1`, () => {
      expect(
        wcagContrast(
          `lch(${colorFunctions.convertColorFormat(themes[themeKey], "lch")[variableName[0]]})`,
          `lch(${colorFunctions.convertColorFormat(themes[themeKey], "lch")[variableName[1]]})`
        )
      ).toBeGreaterThan(ContrastRatioErrorThreshold)
    })
  }
}
