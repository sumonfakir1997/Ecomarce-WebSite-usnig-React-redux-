const { color } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {
  
       spacing:{
        15:"3.75rem",// h-15 
        2.5:"0.625rem",//pl-2.5for 10px 
        1.25:"0.3125rem",
        135:"33.75rem",
        125: "31.25rem", //slide h-125 =500px 
        300: "18.75rem",
      
        "13.75":"3.4375rem", //text size 
      
        "87.5":"21.87500rem",//h-87.5 for 350px
      },
      // width: {
       
      //   75:"18.75rem", //w-75
      // },
      // Width: {
      //   300: "18.75rem",
      // },
      // minHeight:{
      //   350:'21.87500rem',
      // },
      colors:{
        'navbg':'#8a4af3',
        'silver':'#C0C0C0',
        
      },

      borderWidth: {
        DEFAULT: '1px',
         0: '0',
         1:'1px',
         2: '2px',
         3: '3px',
         4: '4px',
         6: '6px',
         8: '8px',
         9: '9px',
        10: '10px',//border-10 = 10px 
        
      },
      
      fontSize: {
        
        xxl: ['25px', '32px'],
        xxxl:['30px'],
        xxxxl:['50px'],
        sText:['55px'],
        tx:['40px']
      }

      }
     
    },
  
  plugins: [],
}
