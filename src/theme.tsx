import { createMuiTheme } from '@material-ui/core/styles';

const octopusDeployTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#2F80D8'
      },
      secondary: {
        main: '#4CB065'
      },
    },
    typography: {
        fontSize: 16,
    }
  });
  
  export default octopusDeployTheme;