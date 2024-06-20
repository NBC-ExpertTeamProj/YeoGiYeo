import { ThemeProvider } from 'styled-components';
import Router from './shared/Router';
import { AppContainer } from './styles/GlobalStyles/AppStyle';
import { theme } from './styles/GlobalStyles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
