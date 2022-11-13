import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;