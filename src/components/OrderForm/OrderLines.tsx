import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export const OrderLines = () => (
  <div className="border p-4 bg-gray-100 rounded space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Lines</h2>
      <div className="space-x-2">
        <Button className='px-2 bg-gray-300 rounded-none' label="New" />
        <Button className='px-2 bg-gray-300 rounded-none' label="Save" />
        <Button className='px-2 bg-gray-900 rounded-none text-white' label="Delete" />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-4 font-bold border-b pb-2">
      <span>Product</span>
      <span>Qty</span>
      <span>Unit P.</span>
      <span>Total</span>
    </div>
    {/* Sample row */}
    <div className="grid grid-cols-4 gap-4">
      <InputText />
      <InputText />
      <InputText />
      <InputText />
    </div>
  </div>
)
