import plugin from '@start/plugin'
import {
  CheckChromeScreenshots,
  CheckFirefoxScreenshots,
  CheckIosScreenshots,
  CheckAndroidScreenshots,
  CheckIosWebScreenshots,
  CheckAndroidWebScreenshots,
  Sandbox,
  CheckChromePerfSnapshots,
} from '@bubble-dev/start-preset'

export * from '@bubble-dev/start-preset'

const FONTS_DIR = 'assets/fonts/'

export const checkChromeScreenshots = CheckChromeScreenshots(FONTS_DIR)
export const checkFirefoxScreenshots = CheckFirefoxScreenshots(FONTS_DIR)
export const checkAndroidScreenshots = CheckAndroidScreenshots(FONTS_DIR)
export const checkIosScreenshots = CheckIosScreenshots(FONTS_DIR)
export const checkIosWebScreenshots = CheckIosWebScreenshots(FONTS_DIR)
export const checkAndroidWebScreenshots = CheckAndroidWebScreenshots(FONTS_DIR)
export const checkChromePerfSnapshots = CheckChromePerfSnapshots(FONTS_DIR)

export const app = Sandbox({
  entryPointPath: './tasks/app/index.tsx',
  htmlTemplatePath: './tasks/app/templates/dev.html',
  fontsDir: FONTS_DIR,
})

export const sandbox = Sandbox({
  entryPointPath: './tasks/sandbox/index.tsx',
  htmlTemplatePath: './tasks/sandbox/templates/dev.html',
  fontsDir: FONTS_DIR,
})

export const run = (file: string) =>
  plugin('main', () => async () => {
    const { resolve } = await import('path')
    const { main } = await import(resolve(file))

    await main()
  })
