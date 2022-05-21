import React from 'react';
import './assets/scss/normalize.scss';
import UserPage from './entities/UsersPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <UserPage />
    </PageLayout>
  );
};

export default App;
