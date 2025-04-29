import React from 'react';
import { Address } from '../../types/types';
import { Box, Typography, Paper } from '@mui/material';

interface AddressValidationProps {
  address: Address;
}

const AddressValidation: React.FC<AddressValidationProps> = ({ address }) => {
  return (
    <Paper elevation={2} sx={{ padding: 2, marginTop: 2, marginBottom: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Validated Address
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
        <Typography variant="body2"><strong>Street:</strong> {address.street}</Typography>
        <Typography variant="body2"><strong>Postal Code:</strong> {address.postalCode}</Typography>
        <Typography variant="body2"><strong>City:</strong> {address.city}</Typography>
        <Typography variant="body2"><strong>State:</strong> {address.state}</Typography>
        <Typography variant="body2"><strong>Country:</strong> {address.country}</Typography>
        {address.latitude && address.longitude && (
          <Typography variant="body2">
            <strong>Coordinates:</strong> {address.latitude}, {address.longitude}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default AddressValidation;