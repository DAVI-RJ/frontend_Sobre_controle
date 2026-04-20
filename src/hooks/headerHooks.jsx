import {useState, useCallback, useEffect} from 'react'; 
import { useNavigate } from 'react-router-dom';

import { useAxiosErrorHandler } from '@/context/error/ErrorContext';
import { logout } from '@/context/auth/SectionAuthentication';
import { useCompanyServices } from '@/features/company/companyApi/CompanyServices';

export function useHeader(){
  const navigate = useNavigate(); 
  const { errorMessage, setErrorMessage, handleError } = useAxiosErrorHandler();
  const [ loading, setLoading] = useState(false)
  const [ companyName, setCompanyName ] = useState(null);
  const { getPerfilCompany } = useCompanyServices();

  useEffect(() => {
    let mounted = true;
    const fetchCompany = async () => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const perfil = await getPerfilCompany();
        if (mounted && perfil) setCompanyName(perfil.name ?? null);
      } catch (err) {
        if (mounted) handleError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchCompany();
    return () => {
      mounted = false;
    };
  }, []);
  
  const handleLogout = useCallback(() => {
    logout(); 
    navigate("/"); 
  }, [navigate]);

  return {companyName, errorMessage, loading, handleLogout}
}