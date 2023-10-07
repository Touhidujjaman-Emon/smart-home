module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1150px',
      'xl': '1440px',
    },
   

    extend: {
      
      colors: {
        
      },

      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        cursive: ['Audiowide', 'cursive'],
      },
      fontSize: {
         heading1: '6.43rem',
         hadingV2: '3.125rem',
         subtitle:'3.625rem',
         button:'1.68rem',
         heading2:'3.1rem',
         subtitle2:'2.31rem',
         text1:'1.56rem',
         mainNav:'1.11rem',
         sec2H1:'4rem',
      },
      lineHeight: {
      text1:'33px',
      heading2:'62px',
      
      },
      maxWidth: {
      container:'1300px',

      },
    },
  },
  plugins: [],
}
