/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.{html,ts,css,scss,sass,less,styl}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [

      {
        // Custom Dark Theme
        dark: {
          'primary': '#2563EB', 
          'bg': "#663399",
          'secondary': {
            100: '#E2E2D5',
            200: '#888883',
          },          
          'accent': '#F43F5E',
          'neutral': '#111827',
          'base-100': '#1B1B1B', // Background color for dark mode
          'info': '#3B82F6',
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#EF4444',
        },
      },
      {
        // Custom Light Theme
        light: {
          'primary': '#EF4444',  // Define your custom light primary color
          'bg': "#663399",
          'secondary': {
            100: '#E2E2D5',
            200: '#888883',
          },
          //  '#10B981',
          'accent': '#6366F1',
          'neutral': '#374151',
          'base-100': '#ffffff', // Background color for light mode
          'info': '#2563EB',
          'success': '#22C55E',
          'warning': '#F59E0B',
          'error': '#EF4444',
        },
      },
    ],
  },
};
//   theme: {
//     extend: {
//       colors :{
//         primary: '#FF6363',
//         secondary: {
//           100: '#E2E2D5',
//           200: '#888883',
//         },
//         bg: {
//           DEFAULT: "#663399",
//         },
//         secondaryalternative:{
//           DEFAULT : "#2C2C2B"
//         }
//         ,
//         secondarylight:{
//           DEFAULT : "#FBFBFB"
//         }
//       },
//       fontFamily: {
//         body:['Nunito']
//       }
//     },
//   },
//   plugins: [require('daisyui')],
//   daisyui: {
//     themes: [
//       'light',  // Built-in light theme
//       'dark',   // Built-in dark theme
//       'cupcake', // Another built-in theme
//       {
//         myCustomTheme: {    // Define your own custom theme
//           'primary': '#ff5722', // Custom primary color
//           'secondary': '#8bc34a',
//           'accent': '#03a9f4',
//           'neutral': '#607d8b',
//           'base-100': '#ffffff',  // Base background color
//           'info': '#2196f3',
//           'success': '#4caf50',
//           'warning': '#ff9800',
//           'error': '#f44336',
//         },
//       },
//     ],
//   },


// }

