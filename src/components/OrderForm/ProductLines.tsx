import React from 'react';
import { Control, UseFormRegister } from 'react-hook-form';
import { OrderFormData } from '../../types/types';
import { TextField, Button, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ProductLinesProps {
  control: Control<OrderFormData>;
  register: UseFormRegister<OrderFormData>;
}

const ProductLines: React.FC<ProductLinesProps> = ({ control, register }) => {
  const [lines, setLines] = React.useState([0]); // Índices de líneas

  const addLine = () => {
    setLines([...lines, lines.length]);
  };

  const removeLine = (index: number) => {
    if (lines.length > 1) {
      setLines(lines.filter((_, i) => i !== index));
    }
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Product Lines
      </Typography>
      
      {lines.map((lineIndex, index) => (
        <Box key={lineIndex} sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <TextField
            {...register(`products.${index}.productId`, { required: 'Product is required' })}
            label="Product"
            fullWidth
            size="small"
          />
          <TextField
            {...register(`products.${index}.quantity`, { 
              required: 'Quantity is required',
              min: { value: 1, message: 'Minimum 1' }
            })}
            label="Qty"
            type="number"
            size="small"
            sx={{ width: 80 }}
          />
          <TextField
            {...register(`products.${index}.unitPrice`, { 
              required: 'Unit price is required',
              min: { value: 0.01, message: 'Must be positive' }
            })}
            label="Unit P."
            type="number"
            size="small"
            sx={{ width: 100 }}
          />
          <TextField
            label="Total"
            size="small"
            sx={{ width: 100 }}
            disabled
            value={0} // Aquí calcularías el total basado en cantidad * precio
          />
          <Button 
            onClick={() => removeLine(index)} 
            color="error"
            size="small"
            disabled={lines.length <= 1}
          >
            <RemoveIcon />
          </Button>
        </Box>
      ))}
      
      <Button 
        onClick={addLine} 
        variant="outlined" 
        startIcon={<AddIcon />}
        size="small"
      >
        Add Line
      </Button>
    </Box>
  );
};

export default ProductLines;