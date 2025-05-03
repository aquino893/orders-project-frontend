import { ToolbarActions } from '../components/OrderForm/ToolbarActions'
import { OrderFormFields } from '../components/OrderForm/OrderFormFields'
import { OrderLines } from '../components/OrderForm/OrderLines'
import { ValidatedAddress } from '../components/OrderForm/ValidatedAddress'

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
