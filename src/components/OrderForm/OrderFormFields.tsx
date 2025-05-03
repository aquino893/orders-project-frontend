import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'

export const OrderFormFields = () => (
  <div className="bg-gray-100 border border-gray-300 p-6 rounded-2xl shadow-md space-y-6">
    <h3 className="text-xl font-semibold text-gray-800">Order Details</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Customer</label>
        <InputText className="w-full p-inputtext-sm border-black" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Shipping address</label>
        <div className="flex items-center gap-2">
          <InputText className="w-full p-inputtext-sm border-black" />
          <Button
            icon="pi pi-check"
            className="p-button-sm p-button-success px-2 bg-gray-900 text-white rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Order date</label>
        <Calendar className="w-full p-inputtext-sm border-black" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Employee</label>
        <Dropdown className="w-full p-inputtext-sm border-black" />
      </div>
    </div>
  </div>
)
