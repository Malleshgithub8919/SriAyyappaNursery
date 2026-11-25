export const nurseryLocation = Object.freeze({
  name: 'Sri Ayyappa Nursery',
  address: 'NH-16 Road, Vemagiri, Kadiam (M), Andhra Pradesh',
  latitude: 17.5977105,
  longitude: 82.8463395,
})

const destination = `${nurseryLocation.name}, ${nurseryLocation.address}`
const coordinates = `${nurseryLocation.latitude},${nurseryLocation.longitude}`

export const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(coordinates)}&z=17&output=embed`
export const googleMapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`

export function googleMapsDirectionsUrl(origin) {
  const originCoordinates = typeof origin === 'string'
    ? origin.trim()
    : `${origin.latitude},${origin.longitude}`
  const params = new URLSearchParams({
    api: '1',
    origin: originCoordinates,
    destination,
    travelmode: 'driving',
  })

  return `https://www.google.com/maps/dir/?${params.toString()}`
}
