import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorProvider } from "@/core/context/error/ErrorProvider.jsx";
import ErrorBoundary from "@/core/context/error/error-boundary/ErrorBoundary";
import AppRoutes from "@/core/config/routes/Routes.jsx";
import { useAuthInitialization } from "@/core/hooks/useAuthInitialization";

const queryClient = new QueryClient();

function AppContent() {
  useAuthInitialization();

  return (
    <ErrorProvider>
      <AppRoutes />
    </ErrorProvider>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset}>
            <AppContent />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}
