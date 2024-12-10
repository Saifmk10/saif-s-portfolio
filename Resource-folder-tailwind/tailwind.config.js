/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "C:\\Users\\saif\\Desktop\\Portfolio\\index.html" ], //adding the index.html path here
  theme: {
    extend: {
      colors:{
        'Primary-Color' : '#D9D9D9',
        'Email-section' : '#dfdedf',
        'buttons' : '#ffffff',
      },

      height:{
        'home-parent-container': '750px',
        'home-parent-container-sm' :'600px',
      },

      screens: {
        sm: '320px',
        md: '640px',
        tablet: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      
      
      // section holding the fonts 
      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // fonts for instumental sans are used mostly across the website (navbar-navbarButton-navbarLink)
      // instrumental sans reffered to be as isf (instrumental sans font)
      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // The kanit font is used mainly for the intro(HEY I DO)
      // Kanit font reffered to be as kf (kanit font)
      fontFamily:{
        'isf' : ['"Instrument Sans"', 'serif'],
        'kf' : ['"Kanit"', 'sans-serif'], 
      },

      fontOpticalSizing:{
        'isf-opticalSizing' :'auto',
      },

      fontWeight:{
        'isf-weight': '500', // the font weight can be between 400-700
        'kf-weight' : '450  ', // the font weight can be between 100-900 ref web for other styles
      },

      fontStyle:{
        'isf-fontStyle':'normal',
        'kf-fontStyle' :'normal',
      },

      fontSize:{
        'sm-font': '320px',
        'md-font': '640px',
        'lg-font': '50 px',
        'laptop-font': '1024px',
      },

    },
  },
  plugins: [],
}

