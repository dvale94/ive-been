import { use } from 'react';
import { ApiProvider } from '@/api/ApiProvider';

const html = '<!DOCTYPE html>\n' +
'<html>\n' +
'<head>\n' +
'    \n' +
'    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />\n' +
'    \n' +
'        <script>\n' +
'            L_NO_TOUCH = false;\n' +
'            L_DISABLE_3D = false;\n' +
'        </script>\n' +
'    \n' +
'    <style>html, body {width: 100%;height: 100%;margin: 0;padding: 0;}</style>\n' +
'    <style>#map {position:absolute;top:0;bottom:0;right:0;left:0;}</style>\n' +
'    <script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js"></script>\n' +
'    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>\n' +
'    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>\n' +
'    <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"></script>\n' +
'    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css"/>\n' +
'    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>\n' +
'    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"/>\n' +
'    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css"/>\n' +
'    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"/>\n' +
'    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css"/>\n' +
'    \n' +
'            <meta name="viewport" content="width=device-width,\n' +
'                initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />\n' +
'            <style>\n' +
'                #map_8bed3a5012139a8137df3cb8d455a0f8 {\n' +
'                    position: relative;\n' +
'                    width: 100.0%;\n' +
'                    height: 100.0%;\n' +
'                    left: 0.0%;\n' +
'                    top: 0.0%;\n' +
'                }\n' +
'                .leaflet-container { font-size: 1rem; }\n' +
'            </style>\n' +
'        \n' +
'</head>\n' +
'<body>\n' +
'    \n' +
'    \n' +
'            <div class="folium-map" id="map_8bed3a5012139a8137df3cb8d455a0f8" ></div>\n' +
'        \n' +
'</body>\n' +
'<script>\n' +
'    \n' +
'    \n' +
'            var map_8bed3a5012139a8137df3cb8d455a0f8 = L.map(\n' +
'                "map_8bed3a5012139a8137df3cb8d455a0f8",\n' +
'                {\n' +
'                    center: [0, 0],\n' +
'                    crs: L.CRS.EPSG3857,\n' +
'                    zoom: 1,\n' +
'                    zoomControl: true,\n' +
'                    preferCanvas: false,\n' +
'                }\n' +
'            );\n' +
'\n' +
'            \n' +
'\n' +
'        \n' +
'    \n' +
'            var tile_layer_5199e3119ddc106ba07172aab0651914 = L.tileLayer(\n' +
'                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",\n' +
'                {"attribution": "Data by \\u0026copy; \\u003ca target=\\"_blank\\" href=\\"http://openstreetmap.org\\"\\u003eOpenStreetMap\\u003c/a\\u003e, under \\u003ca target=\\"_blank\\" href=\\"http://www.openstreetmap.org/copyright\\"\\u003eODbL\\u003c/a\\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}\n' +
'            ).addTo(map_8bed3a5012139a8137df3cb8d455a0f8);\n' +
'        \n' +
'</script>\n' +
'</html>'

export function Map() {
  // const html = use(ApiProvider.getDefaultMap());

  return(
      <iframe className='w-full h-full' srcDoc={html} />
  )
};
