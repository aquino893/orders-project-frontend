import React from 'react';
import OrderForm from './components/OrderForm/OrderForm';
import { CssBaseline, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <OrderForm />
      </Container>
    </>
  );
};

export default App;