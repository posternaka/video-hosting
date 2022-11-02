import { useLocation, Navigate } from 'react-router-dom';

function Auth({ children }) {
    const location = useLocation();

    const user = localStorage.getItem('token');

    if(!user) {
        console.log("Не верные данные");
        return <Navigate to='/' state={{from : location}} />
    }

  return children;
}

export default Auth;