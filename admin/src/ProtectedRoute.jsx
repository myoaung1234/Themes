import { useNavigate } from 'react-router-dom';
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    let location = useLocation();
    const user = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null;

    if(!user) {
        return <Navigate to="/auth/login" state={{ from: location}} replace />
    }
    return children
};

export default ProtectedRoute;