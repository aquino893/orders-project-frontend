import { ToolbarActions } from '../components/OrderForm/ToolbarActions'
import { OrderFormFields } from '../components/OrderForm/OrderFormFields'
import { OrderLines } from '../components/OrderForm/OrderLines'
import { ValidatedAddress } from '../components/OrderForm/ValidatedAddress'
//import { LoadScript } from '@react-google-maps/api'

//const GOOGLE_MAPS_API_KEY = 'AIzaSyCjHveQ_q2vYbkPKEVMMLFhqbvitRNdDoY'
export default function OrderPage() {
  return (
    <div className="p-6 space-y-6">
      <ToolbarActions />
     
        <OrderFormFields />

      
      <OrderLines />
      <ValidatedAddress />
    </div>
  )
}
