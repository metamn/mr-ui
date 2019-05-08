import { create } from '@storybook/theming'

export default create({
    base: 'light',

    colorPrimary: 'beige',
    colorSecondary: 'black',

    // UI
    appBg: 'beige',
    appContentBg: 'beige',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'grey',
    barSelectedColor: 'black',
    barBg: 'beige',

    // Form colors
    inputBg: 'white',
    inputBorder: 'grey',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'MR-UI',
    brandUrl: 'https://metamn.io/mr-ui',
})
