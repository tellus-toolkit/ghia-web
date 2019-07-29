
// ================================================================================
//  TellUs Toolkit Ltd.
//  https://www.tellus-toolkit.com/
//
//  Name:            green-map.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 24/07/2019.
//  Updated:
// ================================================================================


// https://stackoverflow.com/questions/14338683/how-can-i-support-cors-when-using-restify
// https://github.com/Tabcorp/restify-cors-middleware
// https://codepunk.io/using-cors-with-restify-in-nodejs/
// https://www.npmjs.com/package/restify-cors-middleware
// https://www.google.com/search?q=restify+CORS&rlz=1C1GCEU_en&oq=restify+CORS&aqs=chrome..69i57.5679j0j7&sourceid=chrome&ie=UTF-8
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141
// https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check


/**
 * Provides functions used globally.
 */
let GlobalFunctions = {

  /**
   * Converts a hex colour to an rgba string.
   *
   * @param hex - The hex colour.
   * @param opacity - The opacity percentage of the rgba colour.
   *
   * @returns {string|*} - The rgba string that can be used to set colours in html.
   */
  hexColourToRgbaString: function(hex, opacity) {

    hex = hex.replace('#', '');

    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';

    return rgba;

  }

};

/**
 * The AppState object holds the application state.
 */
let AppState = {

  /**
   * Indicates whether the bootstrap material tooltip is enabled or not.
   */
  bootstrapMaterialTooltipEnabled: false,

  /**
   * The transparent color is used in those cases that a highly transparent color needs to be rendered.
   */
  transparentColor: { fillColor: '#ffffff', fillOpacity: 0.01 }

};

/**
 * The BaseMapLayers object provides properties and methods related to basemap layers.
 */
let BaseMapLayers = {

  /**
   * All the names of the basemap layers that are defined by the leaflet providers plugin.
   */
  leafletProviderBaseLayers: {
    OpenStreetMap: {
      Mapnik: ['OpenStreetMap.Mapnik', undefined],
      BlackAndWhite: ['OpenStreetMap.BlackAndWhite', undefined],
      DE: ['OpenStreetMap.DE', undefined],
      CH: ['OpenStreetMap.CH', undefined],
      France: ['OpenStreetMap.France', undefined],
      HOT: ['OpenStreetMap.HOT', undefined],
      BZH: ['OpenStreetMap.BZH', undefined]
    },
    OpenTopoMap: ['OpenTopoMap', undefined],
    Thunderforest: {
      OpenCycleMap: ['Thunderforest.OpenCycleMap', { apikey: '' }],
      Transport: ['Thunderforest.Transport', { apikey: '' }],
      TransportDark: ['Thunderforest.TransportDark', { apikey: '' }],
      SpinalMap: ['Thunderforest.SpinalMap', { apikey: '' }],
      Landscape: ['Thunderforest.Landscape', { apikey: '' }],
      Outdoors: ['Thunderforest.Outdoors', { apikey: '' }],
      Pioneer: ['Thunderforest.Pioneer', { apikey: '' }],
    },
    OpenMapSurfer: {
      Roads: ['OpenMapSurfer.Roads', undefined],
      Grayscale: ['OpenMapSurfer.Grayscale', undefined]
    },
    Hydda: {
      Full: ['Hydda.Full', undefined],
      Base: ['Hydda.Base', undefined]
    },
    MapBox: ['MapBox', undefined],
    Stamen: {
      Toner: ['Stamen.Toner', undefined],
      TonerBackground: ['Stamen.TonerBackground', undefined],
      TonerLite: ['Stamen.TonerLite', undefined],
      Watercolor: ['Stamen.Watercolor', undefined],
      Terrain: ['Stamen.Terrain', undefined],
      TerrainBackground: ['Stamen.TerrainBackground', undefined],
      TopOSMRelief: ['Stamen.TopOSMRelief', undefined],
      TonerHybrid: ['Stamen.TonerHybrid', undefined],
      TonerLines: ['Stamen.TonerLines', undefined],
      TonerLabels: ['Stamen.TonerLabels', undefined],
      TopOSMFeatures: ['Stamen.TopOSMFeatures', undefined]
    },
    Esri: {
      WorldStreetMap: ['Esri.WorldStreetMap', undefined],
      DeLome: ['Esri.DeLome', undefined],
      WorldTopoMap: ['Esri.WorldTopoMap', undefined],
      WorldImagery: ['Esri.WorldImagery', undefined],
      WorldTerrain: ['Esri.WorldTerrain', undefined],
      WorldShadedRelief: ['Esri.WorldShadedRelief', undefined],
      WorldPhysical: ['Esri.WorldPhysical', undefined],
      OceanBaseMap: ['Esri.OceanBasemap', undefined],
      NatGeoWorldMap: ['Esri.NatGeoWorldMap', undefined],
      WorldGrayCanvas: ['Esri.WorldGrayCanvas', undefined]
    },
    HERE: {
      normalDay: ['HERE.normalDay', {app_id: '', app_code: ''}],
      basicMap: ['HERE.basicMap', {app_id: '', app_code: ''}],
      hybridDay: ['HERE.hybridDay', {app_id: '', app_code: ''}]
    },
    FreeMapSK: 'FreeMapSK',
    MtbMap: ['MtbMap', undefined],
    CartoDB: {
      Positron: ['CartoDB.Positron', undefined],
      PositronNoLabels: ['CartoDB.PositronNoLabels', undefined],
      PositronOnlyLabels: ['CartoDB.PositronOnlyLabels', undefined],
      DarkMatter: ['CartoDB.DarkMatter', undefined],
      DarkMatterNoLabels: ['CartoDB.DarkMatterNoLabels', undefined],
      DarkMatterOnlyLabels: ['CartoDB.DarkMatterOnlyLabels', undefined]
    },
    HikeBike: {
      HikeBike: ['HikeBike.HikeBike', undefined],
      HillShading: ['HikeBike.HillShading', undefined]
    },
    BasemapAT: {
      basemap: ['BasemapAT.basemap', undefined],
      grau: ['BasemapAT.grau', undefined],
      overlay: ['BasemapAT.overlay', undefined],
      highdpi: ['BasemapAT.highdpi', undefined],
      orthophoto: ['BasemapAT.orthophoto', undefined]
    },
    nlmaps: {
      standaard: ['nlmaps.standaard', undefined],
      pastel: ['nlmaps.pastel', undefined],
      grijs: ['nlmaps.grijs', undefined],
      luchtfoto: ['nlmaps.luchtfoto', undefined]
    },
    NASAGIBS: {
      ModisTerraTrueColorCR: ['NASAGIBS.ModisTerraTrueColorCR', undefined],
      ModisTerraBands367CR: ['NASAGIBS.ModisTerraBands367CR', undefined],
      ViirsEarthAtNight2012: ['NASAGIBS.ViirsEarthAtNight2012', undefined]
    },
    NLS: ['NLS', undefined],
    Wikimedia: ['Wikimedia', undefined]
  },

  /**
   * All the names of the overlay layers that are defined by the leaflet providers plugin.
   */
  leafletProviderOverlayLayers: {
    OpenInfraMap: {
      Power: ['OpenInfraMap.Power', undefined],
      Telecom: ['OpenInfraMap.Telecom', undefined],
      Petroleum: ['OpenInfraMap.Petroleum', undefined],
      Water: ['OpenInfraMap.Water', undefined]
    },
    OpenSeaMap: ['OpenSeaMap', undefined],
    OpenPtMap: ['OpenPtMap', undefined],
    OpenRailwayMap: ['OpenRailwayMap', undefined],
    OpenFireMap: ['OpenFireMap', undefined],
    SafeCast: ['SafeCast', undefined],
    OpenMapSurfer: {
      AdminBounds: ['OpenMapSurfer.AdminBounds', undefined]
    },
    Hydda: {
      RoadsAndLabels: ['Hydda.RoadsAndLabels', undefined]
    },
    Stamen: {
      TonerHybrid: ['Stamen.TonerHybrid', undefined],
      TonerLines: ['Stamen.TonerLines', undefined],
      TonerLabels: ['Stamen.TonerLabels', undefined],
      TopOSMFeatures: ['Stamen.TopOSMFeatures', undefined]
    },
    OpenWeatherMap: {
      Clouds: ['OpenWeatherMap.Clouds', undefined],
      Pressure: ['OpenWeatherMap.Pressure', undefined],
      Wind: ['OpenWeatherMap.Wind', undefined]
    },
    NASAGIBS: {
      ModisTerraLSTDay: ['NASAGIBS.ModisTerraLSTDay', undefined],
      ModisTerraSnowCover: ['NASAGIBS.ModisTerraSnowCover', undefined],
      ModisTerraAOD: ['NASAGIBS.ModisTerraAOD', undefined],
      ModisTerraChlorophyll: ['NASAGIBS.ModisTerraChlorophyll', undefined]
    },
    JusticeMap: {
      income: ['JusticeMap.income', undefined],
      americanIndian: ['JusticeMap.americanIndian', undefined],
      asian: ['JusticeMap.asian', undefined],
      black: ['JusticeMap.black', undefined],
      hispanic: ['JusticeMap.hispanic', undefined],
      multi: ['JusticeMap.multi', undefined],
      nonWhite: ['JusticeMap.nonWhite', undefined],
      white: ['JusticeMap.white', undefined],
      plurality: ['JusticeMap.plurality', undefined]
    }
  },

  /**
   * The named base map layers.
   */
  namedBasemapLayers: {

    /**
     * The basemap layer named Light.
     */
    light: {
      name: 'Light',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Dark.
     */
    dark: {
      name: 'Dark',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Roads.
     */
    roads: {
      name: 'Roads',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Physical.
     */
    physical: {
      name: 'Physical',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Terrain.
     */
    terrain: {
      name: 'Terrain',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Satellite.
     */
    satellite: {
      name: 'Satellite',
      leafletProvider: null,
      mapLayer: null
    }

  },

  /**
   * Sets the the named base map layers.
   */
  setNamedBasemapLayers: function() {

    // Light
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.BlackAndWhite;
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale;
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Toner;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerBackground;
    this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.Positron;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronNoLabels;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronOnlyLabels;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas;

    // Dark
    this.namedBasemapLayers.dark.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterOnlyLabels;

    // Roads
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.Mapnik
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.HOT;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Roads;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Full;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLite;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldStreetMap;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.HikeBike.HikeBike;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels;
    this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Wikimedia;

    // Physical
    this.namedBasemapLayers.physical.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Base;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldPhysical;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTopoMap;

    // Terrain
    this.namedBasemapLayers.terrain.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Terrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TerrainBackground;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTerrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldShadedRelief;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.HikeBike.HillShading;

    // Satellite
    this.namedBasemapLayers.satellite.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldImagery;

  },

  /**
   * Creates the BaseMap layers.
   */
  createBaseMapLayers: function() {

    // Loop through all the named basemap layers and instantiate them.
    for (let namedLayer in this.namedBasemapLayers) {
      if (this.namedBasemapLayers.hasOwnProperty(namedLayer)) {

        const nameIndex = 0;
        const optionsIndex = 1;

        let baseLayer = this.namedBasemapLayers[namedLayer];

        if (baseLayer.leafletProvider[optionsIndex] === undefined) {
          baseLayer.mapLayer = L.tileLayer.provider(baseLayer.leafletProvider[nameIndex]);
        }
        else {
          baseLayer.mapLayer = L.tileLayer.provider(
            baseLayer.leafletProvider[nameIndex],
            baseLayer.leafletProvider[optionsIndex]
          );
        }

      }
    }

  }

};

/**
 * The MapLayers object provides properties and methods related to map layers.
 */
let MapLayers = {
  // TODO: Update the documentation.

  /**
   * The GHIA raster Area of interest layer
   */
  ghiaAOI: {

    /**
     * The name of the layer.
     */
    name: 'ghiaAOI',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the
       * GHIA Area of Interest layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object dark is used to define the styles used to render the
       * GHIA Area of Interest layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Dark Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red900.hex,
          weight: 1,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object roads is used to define the styles used to render the
       * GHIA Area of Interest layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Roads Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object physical is used to define the styles used to render the
       * GHIA Area of Interest layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Physical Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object terrain is used to define the styles used to render the
       * GHIA Area of Interest layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Terrain Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object satellite is used to define the styles used to render the
       * GHIA Area of Interest layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Satellite Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red900.hex,
          weight: 1,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      }

    },

    /**
     * The leaflet map layer.
     */
    mapLayer: null,

    /**
     * The GeoJSON used to create the leaflet map layer.
     */
    geoJSON: null,

    /**
     * The LSOA feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected LSOA feature.
     */
    selectedInternalLayer: null,

    /**
     * Creates the GHIA Area of Interest layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.geoJSON = AppData.ghiaAoi;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * Style the features of the layer using the associated default style defined for this layer.
         * The default style for this layer depends on the selected background map.
         *
         * @param feature - The feature to style.
         * @returns {Style} - A Style capable of styling polygon features.
         */
        style: function(feature) {
          return MapLayers.ghiaAOI.namedBasemapLayers[namedBaseMap].defaultStyle;
        }

      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

    },

    /**
     * Renders the GHIA Area of Interest layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the GHIA Area of Interest polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether GHIA area of Interest features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        this.mapLayer.eachLayer(function(layer) {
          layer.setStyle(MapLayers.ghiaAOI.namedBasemapLayers[currentBaseMap].defaultStyle);
        });

      }

    }

  },

  /**
   * The GHIA 1km tiles layer
   */
  ghiaTiles1000: {

    /**
     * The name of the layer.
     */
    name: 'ghiaTiles1000',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the
       * GHIA 1 km tiles layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render the GHIA 1km tiles layer on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.blue900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object dark is used to define the styles used to render the
       * GHIA 1 km tiles layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render the GHIA 1 km tiles layer on top of the Dark Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object roads is used to define the styles used to render the
       * GHIA 1 km tiles layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render the GHIA 1km tiles layer on top of the Roads Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.blue900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object physical is used to define the styles used to render the
       * GHIA 1 km tiles layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render the GHIA 1 km tiles layer on top of the Physical Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.blue900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object terrain is used to define the styles used to render the
       * GHIA 1 km tiles layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render the GHIA 1 km tiles layer on top of the Terrain Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.blue900.hex,
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object satellite is used to define the styles used to render the
       * GHIA 1 km tiles layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render the GHIA 1 km tiles layer on top of the Satellite Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 0.7,
          opacity: 1,
          fill: true,
          fillColor: '#ffffff',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      }

    },

    /**
     * The leaflet map layer.
     */
    mapLayer: null,

    /**
     * The GeoJSON used to create the leaflet map layer.
     */
    geoJSON: null,

    /**
     * The LSOA feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected LSOA feature.
     */
    selectedInternalLayer: null,

    /**
     * Creates the GHIA Area of Interest layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.geoJSON = AppData.ghiaTiles1000Polygons;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * Style the features of the layer using the associated default style defined for this layer.
         * The default style for this layer depends on the selected background map.
         *
         * @param feature - The feature to style.
         * @returns {Style} - A Style capable of styling polygon features.
         */
        style: function(feature) {
          return MapLayers.ghiaTiles1000.namedBasemapLayers[namedBaseMap].defaultStyle;
        },

      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

    },

    /**
     * Renders the GHIA Tiles 1000 layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the GHIA Tiles 1000 polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether GHIA Tiles 1000 features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        this.mapLayer.eachLayer(function(layer) {
          layer.setStyle(MapLayers.ghiaTiles1000.namedBasemapLayers[currentBaseMap].defaultStyle);
        });

      }

    }

  },

  /**
   * The LSOA polygons layer
   */
  lsoa: {

    /**
     * The name of the layer.
     */
    name: 'lsoa',

    /**
     * The attribution to add on the map related to the LSOA layer.
     */
    attribution: 'Data source: ' +
      '<a href="https://www.ordnancesurvey.co.uk/" target="_cf">Crown Copyright - Ordnance Survey</a>',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the LSOA layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render LSOA polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current LSOA polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object dark is used to define the styles used to render the LSOA layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render LSOA polygons on top of the Dark Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#dcdcdc',
          weight: 0.3,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current LSOA polygon on top of the Dark Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#ff4500',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object roads is used to define the styles used to render the LSOA layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render LSOA polygons on top of the Roads Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#2f4f4f',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current LSOA polygon on top of the Roads Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#2f4f4f',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object physical is used to define the styles used to render the LSOA layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render LSOA polygons on top of the Physical Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current LSOA polygon on top of the Physical Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object terrain is used to define the styles used to render the LSOA layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render LSOA polygons on top of the Terrain Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current LSOA polygon on top of the Terrain Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object satellite is used to define the styles used to render the LSOA layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render LSOA polygons on top of the Satellite Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#dcdcdc',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current LSOA polygon on top of the Satellite Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      }

    },

    /**
     * The leaflet map layer.
     */
    mapLayer: null,

    /**
     * The GeoJSON used to create the leaflet map layer.
     */
    geoJSON: null,

    /**
     * The dictionary used to retrieve an internal feature layer based on a feature key.
     * The key used in this case is the LSOA feature code.
     */
    featureToInternalLayerDictionary: {},

    /**
     * The LSOA feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected LSOA feature.
     */
    selectedInternalLayer: null,

    /**
     * The classes metadata in the form of a dictionary whose keys are the values of classes.
     */
    classes: {
      '1': {
        class: 1, visible: true, name: 'Younger Low Income'
      },
      '2': {
        class: 2, visible: true, name: 'Younger Medium Income'
      },
      '3': {
        class: 3, visible: true, name: 'Younger High Income'
      },
      '4': {
        class: 4, visible: true, name: 'Middle Low Income'
      },
      '5': {
        class: 5, visible: true, name: 'Middle Medium Income'
      },
      '6': {
        class: 6, visible: true, name: 'Middle High Income'
      },
      '7': {
        class: 7, visible: true, name: 'Older Low Income'
      },
      '8': {
        class: 8, visible: true, name: 'Older Middle Income'
      },
      '9': {
        class: 9, visible: true, name: 'Older Higher Income'
      }
    },

    /**
     * Creates the LSOA layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.geoJSON = AppData.lsoaPolygons;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * The LSOA layer attribution to insert on the map.
         */
        attribution: MapLayers.lsoa.attribution,

        /**
         * Style the features of the layer using the associated default style defined for this layer.
         * The default style for this layer depends on the selected background map.
         *
         * @param feature - The feature to style.
         * @returns {Style} - A Style capable of styling polygon features.
         */
        style: function(feature) {
          return MapLayers.lsoa.namedBasemapLayers[namedBaseMap].defaultStyle;
        }

      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

      // Loop through all the internal layers.
      // Create the feature to internal layer dictionary and bind the layer tooltips.
      // this.mapLayer.eachLayer(function(layer) {
      //   MapLayers.lsoa.featureToInternalLayerDictionary[layer.feature.properties.lsoa11cd] = layer._leaflet_id;
      //
      //   layer.bindTooltip('', {
      //     // TODO: RESIN - Check here the final tooltip options.
      //     direction: 'top', // TODO: RESIN - APPVAR
      //     offset: [0, -30], // TODO: RESIN - APPVAR
      //     sticky: true
      //   });
      // });

    },

    /**
     * Renders the LSOA layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the LSOA polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether LSOA features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        this.mapLayer.eachLayer(function(layer) {
          layer.setStyle(MapLayers.lsoa.namedBasemapLayers[currentBaseMap].defaultStyle);
        });

      }

    }

  }

};

/**
 * The Spatial object provides properties and methods related to spatial operations.
 */
let Spatial = {
  // TODO: Update the documentation here.

  /**
   * The member variables of this application.
   */
  Members: {

    /**
     * The web page sidebar name.
     */
    sidebarName: 'sidebar',

    /**
     * The webpage sidebar position.
     */
    sidebarPosition: 'right',

  },

  /**
   * The sidebar of the map.
   */
  sidebar: null,

  /**
   * The map of the application.
   */
  map: null,

  /**
   * The options used to create the map.
   */
  mapOptions: {
    //54.5
    center: [53.505, -2.24],
    zoom: 11,
    minZoom: 3,
    maxZoom: 18
  },

  /**
   * Initializes the map.
   */
  initializeMap: function() {

    //spinnerViewModel.isVisible = true;

    Spatial.map = L.map('map', {
      center: Spatial.mapOptions.center,
      zoom: Spatial.mapOptions.zoom,
      minZoom: Spatial.mapOptions.minZoom,
      maxZoom: Spatial.mapOptions.maxZoom,
      doubleClickZoom: false,
      editable: true
    });

    Spatial.map.on('editable:drawing:end', function(e) {

      let fLayers = e.layer.options.editOptions.editTools.featuresLayer.getLayers();

      let feature = fLayers[0].toGeoJSON();

      if (feature.geometry.type === 'Point') {

        RestClient.getReportByPoint(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);

        // Spatial.testPost1();
      }
      else if (feature.geometry.type === 'Polygon') {

        RestClient.getReportByPolygon(feature.geometry);

        // Spatial.testPost1();
      }

      e.layer.options.editOptions.editTools.featuresLayer.clearLayers();

    });

    // Move the attribution control to the bottom-left.
    Spatial.map.attributionControl.setPosition('bottomleft');

    // Create the sidebar and add it on the map.
    // TODO: RESIN
    Spatial.sidebar = L.control.sidebar(Spatial.Members.sidebarName, { position: Spatial.Members.sidebarPosition });
    Spatial.sidebar.addTo(Spatial.map);


    BaseMapLayers.setNamedBasemapLayers();
    BaseMapLayers.createBaseMapLayers();

    MapLayers.ghiaTiles1000.createLayer();
    MapLayers.ghiaAOI.createLayer();
    MapLayers.lsoa.createLayer();


    Spatial.setInitialBaseMapLayer();

    // spinnerViewModel.isVisible = false;

  },

  /**
   * Sets the initial basemap layer.
   */
  setInitialBaseMapLayer: function() {

    // Get the current basemap that has been selected by the user.
    let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;
    let baseLayer = BaseMapLayers.namedBasemapLayers[namedBaseMap].mapLayer;

    // Add the basemap layer in to the map.
    baseLayer.addTo(Spatial.map);
    baseLayer.bringToBack();

  }

};

/**
 * Used to provide the raster metadata and to hold the extracted values.
 */
let Raster = {
  metadata: undefined,
  query: {
    type: undefined,
    data: undefined
  },
  data: undefined
};

/**
 * Provides methods to get raster information from the REST GHIA raster server.
 */
let RestClient = {

  /**
   * The base url of the GHIA raster server.
   */
  baseURL: 'http://maps.humanities.manchester.ac.uk/ghia-raster-server',

  /**
   * Gets the raster metadata.
   */
  getMetadata: function() {

    let url = this.baseURL + '/raster-metadata';

    axios.get(url)
      .then(function(response) {

        Raster.metadata = response.data;

      }).catch(function(error) {

        // TODO: Change this Alert !!!

        let result =
          'ERROR:\r\n'  + '----------------------------------------\r\n' +
          'MESSAGE: '     + error.message + '\r\n' +
          'STACK: \r\n'   + error.stack + '\r\n\r\n' +
          'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
          'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
          'STATUS: '      + error.status + '\r\n' +
          'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
          'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
          'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';

        alert(result);

      }).finally(function() {
        // TODO: Decide about finally.
      });

  },

  /**
   * Gets the raster cells report using a geographic location.
   * Uses the GET verb.
   *
   * @param lat - The latitude of the geographic location.
   * @param lon - The longitude of the geographic location.
   */
  getReportByPoint: function(lat, lon) {

    let url = this.baseURL + '/report/@' + lat + ',' + lon;

    axios.get(url)
      .then(function(response) {

        let result =
          'SUCCESS:\r\n'  + '----------------------------------------\r\n' +
          'STATUS: '      + response.status + '\r\n' +
          'STATUS TEXT: ' + response.statusText + '\r\n\r\n' +
          'HEADERS: \r\n' + JSON.stringify(response.headers) + '\r\n\r\n' +
          'DATA: \r\n'    + JSON.stringify(response.data) + '\r\n\r\n' +
          'REQUEST: \r\n' + JSON.stringify(response.request) + '\r\n\r\n' +
          'CONFIG: \r\n'  + JSON.stringify(response.config) + '\r\n';

        alert(result);

      }).catch(function(error) {

      let result =
        'ERROR:\r\n'  + '----------------------------------------\r\n' +
        'MESSAGE: '     + error.message + '\r\n' +
        'STACK: \r\n'   + error.stack + '\r\n\r\n' +
        'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
        'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
        'STATUS: '      + error.status + '\r\n' +
        'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
        'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
        'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';

      alert(result);

    }).finally(function() {
      // TODO: Decide about finally.
    });

  },

  testGet1: function(lat, lon) {

    // let url = 'http://maps.humanities.manchester.ac.uk/resin2/';

    // let url = 'http://maps.humanities.manchester.ac.uk/resin/';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/nuts/codes/:level';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/nuts/codes/0';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/nuts/codes/1';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/nuts/codes/2';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/nuts/codes/3';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/nuts/codes/:level/:prev_levels_nuts_code';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/nuts/codes/3/AT11';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/typology/:name';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/typology/supergroups';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/typology/groups';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/typology/indicators';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/geospatial/:geometry_type/:nuts_id';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/geospatial/centroids/EL512';
    // let url = 'http://maps.humanities.manchester.ac.uk/resin/geospatial/polygons/EL512';

    // let url = 'http://maps.humanities.manchester.ac.uk/spatial/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-filtered-epsg-4326&cql_filter=rc=102004008&outputFormat=application/json';


    // let url = 'localhost:8083';
    // let url = 'http://maps.humanities.manchester.ac.uk/ghia-raster-server';
    // let url = 'localhost:8083/raster-metadata';
    // let url = 'http://maps.humanities.manchester.ac.uk/ghia-raster-server/raster-metadata';
    // let url = 'localhost:8083/report/@' + lat + ',' + lon;
    let url = 'http://maps.humanities.manchester.ac.uk/ghia-raster-server/report/@' + lat + ',' + lon;


    axios.get(url)
      .then(function(response) {

        let result =
          'SUCCESS:\r\n'  + '----------------------------------------\r\n' +
          'STATUS: '      + response.status + '\r\n' +
          'STATUS TEXT: ' + response.statusText + '\r\n\r\n' +
          'HEADERS: \r\n' + JSON.stringify(response.headers) + '\r\n\r\n' +
          'DATA: \r\n'    + JSON.stringify(response.data) + '\r\n\r\n' +
          'REQUEST: \r\n' + JSON.stringify(response.request) + '\r\n\r\n' +
          'CONFIG: \r\n'  + JSON.stringify(response.config) + '\r\n';

        alert(result);

      }).catch(function(error) {

      let result =
        'ERROR:\r\n'  + '----------------------------------------\r\n' +
        'MESSAGE: '     + error.message + '\r\n' +
        'STACK: \r\n'   + error.stack + '\r\n\r\n' +
        'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
        'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
        'STATUS: '      + error.status + '\r\n' +
        'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
        'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
        'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';

      alert(result);

    }).finally(function() {

    });

  },

  /**
   * Gets the raster cells report using a geographic polygon.
   * Uses the POST verb.
   *
   * @param polygon - The geographic polygon used to retrieve the raster cells.
   */
  getReportByPolygon: function(polygon) {

    let url = this.baseURL + '/report';

    let data =  {
      polygon: {
        geographic: {
          type: "Polygon",
          coordinates: [[[-2.283783, 53.54602], [-2.242584, 53.545204], [-2.248764, 53.512143], [-2.318802, 53.508876], [-2.283783, 53.54602]]]
        },
        projected: {
          type: "Polygon",
          coordinates: [[
            [381293.28000357543, 405524.4198418361],
            [384022.91574372555, 405423.53947639425],
            [383600.5501975797, 401746.7627054498],
            [378954.3333445564, 401401.8078244587],
            [381293.28000357543, 405524.4198418361]
          ]]
        }
      },
      rasterExtract: {
        envelope: {
          minRow: 1564,
          minCol: 2728,
          maxRow: 1976,
          maxCol: 3235
        },
        histogram: {
          11: 18641,
          13: 14676,
          14: 1825,
          15: 1779,
          16: 199,
          17: 1449,
          21: 35,
          23: 7,
          24: 2181,
          25: 478,
          26: 1,
          28: 383,
          31: 2491,
          33: 6553,
          34: 5895,
          35: 1852,
          36: 44,
          37: 378,
          38: 1676,
          41: 1635,
          43: 4894,
          44: 9426,
          45: 4453,
          46: 15,
          47: 520,
          48: 3581,
          51: 4658,
          53: 12297,
          54: 21948,
          55: 15365,
          56: 149,
          57: 721,
          58: 2847,
          totalCells: 143052
        }
      }
    };



    axios.post(url, {
      polygon: polygon
    }).then(function(response) {

      let result =
        'SUCCESS:\r\n'  + '----------------------------------------\r\n' +
        'STATUS: '      + response.status + '\r\n' +
        'STATUS TEXT: ' + response.statusText + '\r\n\r\n' +
        'HEADERS: \r\n' + JSON.stringify(response.headers) + '\r\n\r\n' +
        'DATA: \r\n'    + JSON.stringify(response.data) + '\r\n\r\n' +
        'REQUEST: \r\n' + JSON.stringify(response.request) + '\r\n\r\n' +
        'CONFIG: \r\n'  + JSON.stringify(response.config) + '\r\n';

      alert(result);

    }).catch(function(error) {

      let result =
        'ERROR:\r\n'  + '----------------------------------------\r\n' +
        'MESSAGE: '     + error.message + '\r\n' +
        'STACK: \r\n'   + error.stack + '\r\n\r\n' +
        'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
        'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
        'STATUS: '      + error.status + '\r\n' +
        'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
        'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
        'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';

      alert(result);

    }).finally(function() {

    });


  },

  testPost1: function() {

    // let url = 'http://localhost:8083/report/?polygon={"type": "Polygon", "coordinates": [[[-2.2576904296875004, 53.46837962792356], [-2.226791381835938, 53.47900545831375], [-2.19503402709961, 53.45882432637676], [-2.227392196655274, 53.45867101524035], [-2.2594928741455083, 53.4496246783658], [-2.2576904296875004, 53.46837962792356]]]}';

    // let json = '{"type": "Polygon", "coordinates": [[[-2.2576904296875004, 53.46837962792356], [-2.226791381835938, 53.47900545831375], [-2.19503402709961, 53.45882432637676], [-2.227392196655274, 53.45867101524035], [-2.2594928741455083, 53.4496246783658], [-2.2576904296875004, 53.46837962792356]]]}';

    let url = 'http://localhost:8083/testpost1/';


    axios.post(url, {
      id: 12345
    }).then(function(response) {

      let result =
        'SUCCESS:\r\n'  + '----------------------------------------\r\n' +
        'STATUS: '      + response.status + '\r\n' +
        'STATUS TEXT: ' + response.statusText + '\r\n\r\n' +
        'HEADERS: \r\n' + JSON.stringify(response.headers) + '\r\n\r\n' +
        'DATA: \r\n'    + JSON.stringify(response.data) + '\r\n\r\n' +
        'REQUEST: \r\n' + JSON.stringify(response.request) + '\r\n\r\n' +
        'CONFIG: \r\n'  + JSON.stringify(response.config) + '\r\n';

      alert(result);

    }).catch(function(error) {

      let result =
        'ERROR:\r\n'  + '----------------------------------------\r\n' +
        'MESSAGE: '     + error.message + '\r\n' +
        'STACK: \r\n'   + error.stack + '\r\n\r\n' +
        'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
        'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
        'STATUS: '      + error.status + '\r\n' +
        'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
        'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
        'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';

      alert(result);

    }).finally(function() {

    });

  }

};

// ================================================================================
//  View Models.

/**
 * The spinnerViewModel provides the data and logic to toggle the visibility of spinner.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
// let spinnerViewModel = new Vue({
//
//   /**
//    * The name of the view model.
//    */
//   el: '#spinnerVM',
//
//   /**
//    * The model of the view model.
//    */
//   data: {
//
//     /**
//      * Indicates whether the spinner is visible or not.
//      */
//     isVisible: false
//
//   }
//
// });



/**
 * The sidebarTabsViewModel provides tha data and logic to toggle the sidebar itself or its contents.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let sidebarTabsViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#sidebarTabsVM',

  /**
   * The model of the view model.
   */
  data: {

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Hides the tooltip that is displayed on the specified element.
     * @param element - The element from which the tooltip will be hidden.
     */
    hideTooltip(element) {
      if (AppState.bootstrapMaterialTooltipEnabled) {
        $(element).tooltip('hide');
      }
    }

  }

});






/**
 * The toggleBaseMapViewModel provides tha data and logic to toggle the BaseMap layer.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let toggleBaseMapViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#toggleBaseMapButtonsVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The current base map.
     */
    currentBaseMap: 'light',

    /**
     * The dictionary whose keys are the names of basemaps and items are objects providing the
     * names, icon names and descriptions of the buttons.
     * The descriptions can be used in aria-labels or as tooltips.
     */
    dictionary: {
      'light':     { name: 'Light',     iconName: 'map',            description: 'Light Basemap'     },
      'dark':      { name: 'Dark',      iconName: 'map',            description: 'Dark Basemap'      },
      'roads':     { name: 'Roads',     iconName: 'directions_car', description: 'Roads Basemap'     },
      'physical':  { name: 'Physical',  iconName: 'panorama',       description: 'Physical Basemap'  }, /* 'image, panorama, photo' */
      'terrain':   { name: 'Terrain',   iconName: 'terrain',        description: 'Terrain Basemap'   },  /* 'terrain, landscape' */
      'satellite': { name: 'Satellite', iconName: 'healing',        description: 'Satellite Basemap' } /* 'satellite, cast, healing, photo_camera, local_see' */
    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Sets the current basemap.
     *
     * @param namedBaseMap - The named basemap.
     */
    setCurrentBaseMap(namedBaseMap) {

      // Remove the current basemap layer.
      Spatial.map.removeLayer(BaseMapLayers.namedBasemapLayers[this.currentBaseMap].mapLayer);

      this.currentBaseMap = namedBaseMap;

      // if (AppState.bootstrapMaterialTooltipEnabled) {
      //   let element = '#' + namedBaseMap + 'Button';
      //   $(element).tooltip('hide');
      // }

      // Add the new current basemap layer.
      let baseLayer = BaseMapLayers.namedBasemapLayers[this.currentBaseMap].mapLayer;

      baseLayer.addTo(Spatial.map);
      baseLayer.bringToBack();

      MapLayers.lsoa.renderLayer();
      MapLayers.ghiaTiles1000.renderLayer();
      MapLayers.ghiaAOI.renderLayer();

    }

  }

});




let reportViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#reportVM',

  /**
   * The model of the view model.
   */
  data: {

  },

  /**
   * The methods of the view model.
   */
  methods: {

    reportByPoint(point) {
      Spatial.map.editTools.startMarker();
    },


    reportByPolygon(polygon) {
      // alert('polygon');

      Spatial.map.editTools.startPolygon();

    }

  }

});




//
// ================================================================================


// ================================================================================
//  Main Body

$(document).ready(function(){
  AppState.bootstrapMaterialTooltipEnabled = true;
  $('[data-toggle="tooltip"]').tooltip();
});

Raster.metadata = RestClient.getMetadata();

Spatial.initializeMap();



Spatial.sidebar.open('map-controls');

//
// ================================================================================
