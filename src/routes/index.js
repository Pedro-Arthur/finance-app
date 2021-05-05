import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Loading from '../components/Loading';

function Routes() {

  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
}

export default Routes;