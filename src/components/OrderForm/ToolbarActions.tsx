import { Button } from 'primereact/button'

export const ToolbarActions = () => (
  <div className="flex justify-between items-center">
    <div className="space-x-2">
      <Button className='px-2 bg-gray-300 rounded-none' label="New" />
      <Button className='px-2 bg-gray-300 rounded-none' label="Save" />
      <Button className='px-2 bg-gray-900 rounded-none text-white' label="Delete" />
    </div>
    <div className="space-x-2">
      <Button className='px-2 bg-gray-900 text-white rounded-none' label="Generate" />
      <Button className='px-2 bg-gray-900 text-white rounded-full' icon="pi pi-chevron-left" />
      <Button className='px-2 bg-gray-900 text-white rounded-full' icon="pi pi-chevron-right" />
      <Button className='px-2 bg-gray-900 text-white rounded-full' icon="pi pi-search" />
    </div>
  </div>
)
