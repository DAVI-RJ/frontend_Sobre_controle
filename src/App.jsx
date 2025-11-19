import { AuthProvider } from "./context/auth/SectionAuthentication.jsx";
import AppRoutes from "../src/config/routes/Routes.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
      
  );
}

export default App;