import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorProvider } from "@/context/error/ErrorProvider";
import AppRoutes from "./config/routes/Routes.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ErrorProvider>
  );
}

export default App;
