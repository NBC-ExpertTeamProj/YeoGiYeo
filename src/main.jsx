import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from './styles/GlobalStyles/GlobalStyle.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <App />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
