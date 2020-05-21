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
} from '@apparatus/meta-start-preset'

export * from '@apparatus/meta-start-preset'

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

export const patchDependencies = () => plugin('patchDependencies', ({ logMessage }) => async () => {
  const { readFile, writeFile } = await import('pifs')
  const { resolve } = await import('path')

  const files = [
    [
      'link-android-dependency.js.template',
      resolve('node_modules', '@rebox', 'android', 'node', 'link-android-dependency.js'),
    ],
    [
      'package.json.template',
      resolve('node_modules', '@react-native-community', 'async-storage', 'package.json'),
    ],
  ]

  return Promise.all(files.map(async ([fileName, target]) => {
    logMessage(`patching ${fileName}`)

    const contents = await readFile(resolve('tasks', 'patchDependencies', fileName))

    await writeFile(target, contents)
  }))
})
