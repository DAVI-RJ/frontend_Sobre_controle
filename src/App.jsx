import {AuthProvider} from './context/SectionAutentication';
import AppRoutes from './routes/Routes.jsx';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
      
  );
}

export default App;