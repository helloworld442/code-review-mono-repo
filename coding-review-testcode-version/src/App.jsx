import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router />
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
