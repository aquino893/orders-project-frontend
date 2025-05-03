import React from 'react';
//import OrderForm from './components/OrderForm/OrderForm';
//import { CssBaseline, Container } from '@mui/material';
import OrderPage  from './pages/OrderPage';

const App: React.FC = () => {
  return (
    <>
      {/* <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <OrderForm />
      </Container> */}
      <OrderPage />
     
      
    </>
  );
};

export default App;