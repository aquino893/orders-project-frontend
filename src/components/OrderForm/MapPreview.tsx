import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '300px'
}

const center = {
  lat: 13.692940, // ejemplo: San Salvador
  lng: -89.218191
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyCjHveQ_q2vYbkPKEVMMLFhqbvitRNdDoY'

export const MapPreview = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) {
    return <div className="text-center py-4 text-gray-500">Cargando mapa...</div>
  }

  return (
    <div className="border border-black rounded overflow-hidden">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}
