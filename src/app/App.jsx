import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorProvider } from "@/core/context/error/ErrorProvider.jsx";
import ErrorBoundary from "@/core/context/error/error-boundary/ErrorBoundary";
import AppRoutes from "@/core/config/routes/Routes.jsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ErrorBoundary onReset={() => queryClient.resetQueries()}>
      <ErrorProvider>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ErrorProvider>
    </ErrorBoundary>
  );
}
