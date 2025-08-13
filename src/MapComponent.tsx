// MapComponent.tsx (TypeScript)
import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapLibreTileLayer } from './MapLibreTileLayer';

const { BaseLayer } = LayersControl;

type MapComponentProps = {
  center: [number, number];
  zoom: number;
};

const MAP_CENTER: [number, number] = [51.505, -0.09];
const MAP_ZOOM = 13;

const STADIA_RASTER_URL =
  'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
const STADIA_RASTER_ATTR =
  '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, ' +
  '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> ' +
  '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

const STADIA_VECTOR_STYLE_URL =
  'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json';
const STADIA_VECTOR_ATTR = STADIA_RASTER_ATTR;

const MapComponent: React.FC<MapComponentProps> = ({
  center = MAP_CENTER,
  zoom = MAP_ZOOM,
}) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100vh' }}>
      <LayersControl position="topright">
        <BaseLayer checked name="Stadia Raster">
          <TileLayer url={STADIA_RASTER_URL} attribution={STADIA_RASTER_ATTR} />
        </BaseLayer>
        <BaseLayer name="Stadia Vector">
          <MapLibreTileLayer
            url={STADIA_VECTOR_STYLE_URL}
            attribution={STADIA_VECTOR_ATTR}
          />
        </BaseLayer>
      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;
