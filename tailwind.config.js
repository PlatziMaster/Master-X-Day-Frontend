module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "180": "27rem",
        "192": "30rem"
      }
    },
    textColor: theme => theme('colors'),
     textColor: {
      'white': "#FFFFFF",
      'MTBlack': '#171616',
      'MTDarkBlue': '#0D1C2E',
      'MTLightGreen': '#67A2A7',
      'MTDarkGreen': '#204051',
      'MTWhite': '#EFEFEF', 
      'MTGraphRed': '#FF8C8C',
      'MTGraphRedBackground': '#FFE5E5',
      'MTGraphBlue': '#75A1C1',
      'MTGraphBlueBackground': '#B7E1FF',
      'MTGraphGreen': '#89DF73',
      'MTGraphGreenBackground': '#C7FFB9',
     },
    backgroundColor: theme => ({
      ...theme('colors'),
      'MTBlack': '#171616',
      'MTDarkBlue': '#0D1C2E',
      'MTLightGreen': '#67A2A7',
      'MTDarkGreen': '#204051',
      'MTWhite': '#EFEFEF', 
      'MTGraphRed': '#FF8C8C',
      'MTGraphRedBackground': '#FFE5E5',
      'MTGraphBlue': '#75A1C1',
      'MTGraphBlueBackground': '#B7E1FF',
      'MTGraphGreen': '#89DF73',
      'MTGraphGreenBackground': '#C7FFB9',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
