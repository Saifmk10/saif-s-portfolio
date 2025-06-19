/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "D:\\PROJECTS\\Portfolio\\saif-s-portfolio\\index.html" , "D:\\PROJECTS\\Portfolio\\saif-s-portfolio\\custom.css" , "D:\\PROJECTS\\Portfolio\\saif-s-portfolio\\case_study.html" , "D:\\PROJECTS\\Portfolio\\saif-s-portfolio\\AeroCast_case_study.html"], //adding the index.html path here
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
      
      // The unknown keywords here are used for custom size of viewport as some elements where not getting responsive 
      screens: {
        sm: '320px',
        md: '640px',
        ph: '425px',
        mph: '375px',
        mphn: '359px',
        me: '332px',
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
      // -=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=
      // The jetbrain mono is used mainly for the work done(SOFTWARE DEVELOPMENT)
      // Jetbrain Mono font reffered to as Jet
      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // The krona one font is used for the main heading of the body section of the website
      // Krona one font reffered to as kOne
      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // The Kufam font is used in p tags in this website
      // Kufam font reffered to as kufam
      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      //Itim fond is used for the heading of the projects
      // Itim refered to as itim
      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      // Abel font is used in the footer
      // abel refered to as abel
      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      // goblin font is used in the footer the text with high priority
      // goblin refered to as gob

      fontFamily:{
        'isf' : ['"Instrument Sans"', 'serif'],
        'kf' : ['"Kanit"', 'sans-serif'], 
        'jet' : ['"JetBrains Mono"', 'monospace'],
        'kOne' :['"Krona One"' , 'serif'],
        'kufam' :['"Kufam"' , 'serif'],
        'itim' :['"Itim"' , 'serif'],
        'abel' :['"Abel"' , 'serif'],
        'gob' :['"Goblin One"' , 'serif'],
      },

      fontOpticalSizing:{
        'isf-opticalSizing' :'auto',
        'kufam-opticalSizing' :'auto',
      },

      fontWeight:{
        'isf-weight': '500', // the font weight can be between 400-700
        'kf-weight' : '450', // the font weight can be between 100-900 ref web for other styles
        'jet-weight' : '400', // the font weeight can be between 100-800
        'kOne-weight' : '400', // the limit unknown
        'kufam-weight': '500', //the font weight can be between 400 to 900
        'itim-weight': '400',
      },

      fontStyle:{
        'isf-fontStyle':'normal',
        'kf-fontStyle' :'normal',
        'jet-fontStye' :'normal',
        'kOne-fontStyle' :'normal',
        'kufam-fontStyle' :'normal',
        'itim-fontStyle' :'normal',
      },

      fontSize:{
        'sm-font': '320px',
        'md-font': '640px',
        'lg-font': '50px',
        'laptop-font': '1024px',
      },

      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal linear both',
      },

    },
  },

  
  plugins: [require('tailwindcss-motion')],
}

