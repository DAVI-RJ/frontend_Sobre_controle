import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorProvider } from "@/core/context/error/ErrorProvider.jsx";
import { AppRoutes } from "@/core/config/routes/Routes.jsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ErrorProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ErrorProvider>
  );
}
