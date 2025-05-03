import { InputText } from 'primereact/inputtext'
import { MapPreview } from './MapPreview'
import { LoadScript } from '@react-google-maps/api'
const GOOGLE_MAPS_API_KEY = 'AIzaSyCjHveQ_q2vYbkPKEVMMLFhqbvitRNdDoY'

export const ValidatedAddress = () => (
  <div className="bg-gray-100 border border-gray-300 p-6 rounded-2xl shadow-md space-y-6">
    <h3 className="text-xl font-semibold text-gray-800">Validated address</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Street</label>
        <InputText className="w-full p-inputtext-sm" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">City</label>
        <InputText className="w-full p-inputtext-sm" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">State</label>
        <InputText className="w-full p-inputtext-sm" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Postal code</label>
        <InputText className="w-full p-inputtext-sm" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Country</label>
        <InputText className="w-full p-inputtext-sm" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">Geocoded coordinates</label>
        <InputText className="w-full p-inputtext-sm" />
      </div>
    </div>
    <div className="border mt-4 rounded-xl overflow-hidden shadow-sm">
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <MapPreview />
      </LoadScript>
      
    </div>
  </div>
)
