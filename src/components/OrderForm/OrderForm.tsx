import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { OrderFormData } from '../../types/types';
import AddressValidation from './AddressValidation';
import ProductLines from './ProductLines';
import { Address } from '../../types/types';
import { Button, TextField, Paper, Typography, Box } from '@mui/material';

const OrderForm: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<OrderFormData>();
  const [showValidatedAddress, setShowValidatedAddress] = useState(false);
  const [validatedAddress, setValidatedAddress] = useState<Address | null>(null);

  const onSubmit = (data: OrderFormData) => {
    console.log(data);
    // Aquí enviarías los datos al backend
  };

  const handleAddressValidation = async (address: string) => {
    try {
      // Simulamos la validación de dirección
      const mockResponse = {
        street: "123 Main St",
        postalCode: "12345",
        city: "Chicago",
        state: "IL",
        country: "USA",
        latitude: 41.8781,
        longitude: -87.6298
      };
      setValidatedAddress(mockResponse);
      setShowValidatedAddress(true);
    } catch (error) {
      console.error("Error validating address:", error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>New Order</Typography>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Order Date */}
        <TextField
          {...register('orderDate', { required: 'Order date is required' })}
          label="Order Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          error={!!errors.orderDate}
          helperText={errors.orderDate?.message}
        />

        {/* Product Lines */}
        <ProductLines control={control} register={register} />

        {/* Shipping Address */}
        <TextField
          {...register('shippingAddress', { required: 'Shipping address is required' })}
          label="Shipping Address"
          fullWidth
          margin="normal"
          error={!!errors.shippingAddress}
          helperText={errors.shippingAddress?.message}
          onBlur={(e) => {
            if (e.target.value) {
              handleAddressValidation(e.target.value);
            }
          }}
        />

        {/* Validated Address (condicional) */}
        {showValidatedAddress && validatedAddress && (
          <AddressValidation address={validatedAddress} />
        )}

        {/* Employee Selection */}
        <TextField
          {...register('employeeId', { required: 'Employee is required' })}
          label="Employee"
          select
          fullWidth
          margin="normal"
          SelectProps={{ native: true }}
        >
          <option value="">Select an employee</option>
          <option value="1">Employee 1</option>
          <option value="2">Employee 2</option>
        </TextField>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Save Order
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default OrderForm;