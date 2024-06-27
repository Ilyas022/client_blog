'use client'

import mapboxgl from 'mapbox-gl'
import {
	GeolocateControl,
	FullscreenControl,
	NavigationControl,
	ScaleControl,
	Marker,
	Map,
} from 'react-map-gl'

import { initialViewState, mapStyle, styles } from './config'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY

function MapSection() {
	return (
		<Map
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
			initialViewState={initialViewState}
			style={styles}
			mapStyle={mapStyle}
		>
			<GeolocateControl position="top-left" />
			<FullscreenControl position="top-left" />
			<NavigationControl position="top-left" />
			<ScaleControl />
			<div>
				<Marker longitude={31.24} latitude={30.05} anchor="bottom" />
				<Marker longitude={13.15} latitude={32.6} anchor="bottom" />
				<Marker longitude={44.36} latitude={33.31} anchor="bottom" />
			</div>
		</Map>
	)
}

export default MapSection
