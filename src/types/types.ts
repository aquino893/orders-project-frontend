export interface ProductLine {
    productId: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }
  
  export interface Address {
    street: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    latitude?: number;
    longitude?: number;
  }
  
  export interface OrderFormData {
    orderDate: string;
    products: ProductLine[];
    shippingAddress: string;
    validatedAddress?: Address;
    employeeId: string;
  }