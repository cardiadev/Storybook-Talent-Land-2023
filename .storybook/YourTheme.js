// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  
    brandTitle: 'My Travel App',
    brandUrl: 'https://carlosdiaz.dev',
    brandImage: 'https://res.cloudinary.com/cardiadev/image/upload/v1681108072/talent_land_2023/logo_emcsjc.png',
    // brandImage: 'https://res.cloudinary.com/cardiadev/image/upload/v1681108072/talent_land_2023/logo_mujqza.jpg',
    brandTarget: '_self',
  
    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',
  
    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,
  
    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',
  
    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',
  
    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
});
