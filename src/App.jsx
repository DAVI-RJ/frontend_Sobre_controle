import { AuthProvider } from "../src/context/auth/SectionAutentication.jsx";
import AppRoutes from "../src/config/routes/Routes.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
      
  );
}

export default App;