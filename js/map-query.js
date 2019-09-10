//
// ================================================================================
//  TellUs Toolkit Ltd.
//  https://www.tellus-toolkit.com/
//
//  Name:            green-map.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 07/09/2019.
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
   * The Greater Manchester Outline layer
   */
  greaterManchesterOutline: {

    /**
     * The name of the layer.
     */
    name: 'greaterManchesterOutline',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the
       * Greater Manchester Outline layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object dark is used to define the styles used to render the
       * Greater Manchester Outline layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Dark Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.orange.hex,
          weight: 2,
          opacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object roads is used to define the styles used to render the
       * Greater Manchester Outline layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Roads Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object physical is used to define the styles used to render the
       * Greater Manchester Outline layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Physical Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.deepOrange.hex,
          weight: 2,
          opacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object terrain is used to define the styles used to render the
       * Greater Manchester Outline layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Terrain Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red.hex,
          weight: 2,
          opacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object satellite is used to define the styles used to render the
       * Greater Manchester Outline layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render the GHIA Area of Interest layer on top of the Satellite Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 2,
          opacity: 1
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
     * Creates the Greater Manchester Outline layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.geoJSON = AppData.greaterManchesterOutline;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * Style the features of the layer using the associated default style defined for this layer.
         * The default style for this layer depends on the selected background map.
         *
         * @param feature - The feature to style.
         * @returns {Style} - A Style capable of styling polygon features.
         */
        style: function(feature) {
          return MapLayers.greaterManchesterOutline.namedBasemapLayers[namedBaseMap].defaultStyle;
        }

      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

    },

    /**
     * Renders the Greater Manchester Outline layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the Greater Manchester Outline polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether Greater Manchester Outline features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        this.mapLayer.eachLayer(function(layer) {
          layer.setStyle(MapLayers.greaterManchesterOutline.namedBasemapLayers[currentBaseMap].defaultStyle);
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
    // TODO: Check attribution of LSOA
    // attribution: 'Data source: ' +
    //   '<a href="https://www.ordnancesurvey.co.uk/" target="_cf">Crown Copyright - Ordnance Survey</a>',
    attribution: '',

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
     * Creates the LSOA layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      if (this.geoJSON === null) {
        this.geoJSON = AppData.lsoaPolygons;
      }

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
        },

        /**
         * Define the behaviour of each feature.
         *
         * @param feature - The feature whose behaviour will be defined.
         * @param layer - The internal layer of each feature.
         */
        onEachFeature: function(feature, layer) {
          layer.on({

            /**
             * Raised when the mouse is over a feature.
             */
            mouseover: function() {
              //MapLayers.lsoa.showTooltip(layer);
              MapLayers.lsoa.highlightFeature(feature, layer);
            },

            /**
             * Raised when the mouse is going out of a feature.
             */
            mouseout: function() {
              // MapLayers.nuts3.hideTooltip(layer);
              MapLayers.lsoa.resetFeatureStyle(feature, layer);
              // MapLayers.nuts3.reselectNuts3();
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              MapLayers.lsoa.selectFeature(feature);
              // MapLayers.lsoa.updateInfo(feature);
            }

          });
        }

      });

      // Add the layer in to the map and make sure it is visible.
      //this.mapLayer.addTo(Spatial.map);
      //this.mapLayer.bringToFront();

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

      // this.mapLayer.eachLayer(function(layer) {
      //
      //   let f = layer.feature;
      //
      //   if (f.geometry.coordinates[0].length > 1) {
      //     alert(f.properties.id + ' : ' + f.properties.cd + ' : '  + f.properties.nm + ' has a hole');
      //   }
      //
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

    },

    /**
     * Adds the LSOA layer on the map.
     */
    addLayer: function() {

      if (!Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.addLayer(this.mapLayer);
        this.mapLayer.bringToFront();
      }

    },

    /**
     * Removes the LSOA layer from the map.
     */
    removeLayer: function() {

      if (Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.removeLayer(this.mapLayer);
      }

    },

    /**
     * Highlights a feature.
     *
     * @param feature - The feature that will be highlighted.
     * @param layer - The internal layer of the feature that will be highlighted.
     */
    highlightFeature: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Highlight the current LSOA feature.
      layer.setStyle(this.namedBasemapLayers[namedBaseMap].defaultHighlightingStyle);

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
      }

    },

    /**
     * Resets the feature style. This is called once a mouseout event has been fired.
     *
     * @param feature - The feature that whose style will be reset.
     * @param layer - The internal layer of the feature whose style will be reset.
     */
    resetFeatureStyle: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Render the LSOA feature using the default style.
      layer.setStyle(this.namedBasemapLayers[namedBaseMap].defaultStyle);

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToBack();
      }

    },

    /**
     * Select the specified feature.
     *
     * @param feature - The feature that will be selected.
     * @param layer - The internal layer that will be selected.
     */
    selectFeature: function(feature) {

      let polygon = {
        "type": "Polygon",
        "coordinates": feature.geometry.coordinates[0]
      };

      //   feature.geometry;
      // polygon.type = 'Polygon';

      RestClient.getReportByPolygon(polygon);

    },

    /**
     * Shows an information tooltip over a feature.
     *
     * @param layer - The internal layer whose information will be displayed over using the tooltip.
     */
    showTooltip: function(layer) {

      // TODO: RESIN - This is what needs to change to support name of NUTS3 in native language.
      //this.nuts3Name = AppData.nuts3[nuts3id].nameAscii;
      //this.nuts3NativeName = AppData.nuts3[nuts3id].nutsName;

      let properties = layer.feature.properties;

      let nuts3id = properties.NUTS_ID;
      let sg = properties.SG;
      let g = properties.G;

      let html = '<div>' +

        // ASCII Name
        '<div>' +
        '<h5 class="text-danger">' + AppData.nuts3[nuts3id].nameAscii + '</h5>' +
        '</div>' +

        '<table class="table table-sm mt-4">' +
        '<tbody>' +

        // Supergroup
        '<tr>' +
        '<td class="pb-3">' +
        '<div class="typology-class-header">Class:</div>' +
        '<h6>' + MapLayers.nuts3.supergroups[sg].name + '</h6>' +
        '</td>' +
        '</tr>' +

        // Group
        '<tr>' +
        '<td>' +
        '<div class="typology-class-header">Subclass:</div>' +
        '<h6>' + MapLayers.nuts3.groups[g].name + '</h6>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>' +

        '</div>';

      layer.setTooltipContent(html);

      if (!layer.isTooltipOpen()) {
        layer.openTooltip();
      }

    },

    /**
     * Hides the information tooltip over a feature.
     *
     * @param layer - The internal layer whose tooltip will be hidden.
     */
    hideTooltip: function(layer) {
      if (layer.isTooltipOpen()) {
        layer.closeTooltip();
      }

      layer.setTooltipContent('');
    }

  },

  /**
   * The Wards polygons layer
   */
  wards: {

    /**
     * The name of the layer.
     */
    name: 'wards',

    /**
     * The attribution to add on the map related to the Wards layer.
     */
    // TODO: Check attribution of Wards
    // attribution: 'Data source: ' +
    //   '<a href="https://www.ordnancesurvey.co.uk/" target="_cf">Crown Copyright - Ordnance Survey</a>',
    attribution: '',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the wards layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render wards polygons on top of the Light Basemap.
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
         * The default style used to highlight the current wards polygon on top of the Light Basemap.
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
       * Object dark is used to define the styles used to render the wards layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render wards polygons on top of the Dark Basemap.
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
         * The default style used to highlight the current wards polygon on top of the Dark Basemap.
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
       * Object roads is used to define the styles used to render the wards layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render wards polygons on top of the Roads Basemap.
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
         * The default style used to highlight the current wards polygon on top of the Roads Basemap.
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
       * Object physical is used to define the styles used to render the wards layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render wards polygons on top of the Physical Basemap.
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
         * The default style used to highlight the current wards polygon on top of the Physical Basemap.
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
       * Object terrain is used to define the styles used to render the wards layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render wards polygons on top of the Terrain Basemap.
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
         * The default style used to highlight the current wards polygon on top of the Terrain Basemap.
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
       * Object satellite is used to define the styles used to render the wards layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render wards polygons on top of the Satellite Basemap.
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
         * The default style used to highlight the current wards polygon on top of the Satellite Basemap.
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
     * The key used in this case is the ward feature code.
     */
    featureToInternalLayerDictionary: {},

    /**
     * The ward feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected ward feature.
     */
    selectedInternalLayer: null,

    /**
     * Creates the wards layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      if (this.geoJSON === null) {
        this.geoJSON = AppData.wardsPolygons;
      }

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * The wards layer attribution to insert on the map.
         */
        attribution: MapLayers.wards.attribution,

        /**
         * Style the features of the layer using the associated default style defined for this layer.
         * The default style for this layer depends on the selected background map.
         *
         * @param feature - The feature to style.
         * @returns {Style} - A Style capable of styling polygon features.
         */
        style: function(feature) {
          return MapLayers.wards.namedBasemapLayers[namedBaseMap].defaultStyle;
        },

        /**
         * Define the behaviour of each feature.
         *
         * @param feature - The feature whose behaviour will be defined.
         * @param layer - The internal layer of each feature.
         */
        onEachFeature: function(feature, layer) {
          layer.on({

            /**
             * Raised when the mouse is over a feature.
             */
            mouseover: function() {
              //MapLayers.lsoa.showTooltip(layer);
              MapLayers.wards.highlightFeature(feature, layer);
            },

            /**
             * Raised when the mouse is going out of a feature.
             */
            mouseout: function() {
              // MapLayers.nuts3.hideTooltip(layer);
              MapLayers.wards.resetFeatureStyle(feature, layer);
              // MapLayers.nuts3.reselectNuts3();
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              MapLayers.wards.selectFeature(feature);
              // MapLayers.lsoa.updateInfo(feature);
            }

          });
        }

      });

      // Add the layer in to the map and make sure it is visible.
      // this.mapLayer.addTo(Spatial.map);
      // this.mapLayer.bringToFront();

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

      // this.mapLayer.eachLayer(function(layer) {
      //
      //   let f = layer.feature;
      //
      //   if (f.geometry.coordinates[0].length > 1) {
      //     alert(f.properties.cmwd11cd + ' : '  + f.properties.cmwd11nm + ' has a hole');
      //   }
      //
      // });

    },

    /**
     * Renders the wards layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the wards polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether wards features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        this.mapLayer.eachLayer(function(layer) {
          layer.setStyle(MapLayers.wards.namedBasemapLayers[currentBaseMap].defaultStyle);
        });

      }

    },

    /**
     * Adds the wards layer on the map.
     */
    addLayer: function() {

      if (!Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.addLayer(this.mapLayer);
        this.mapLayer.bringToFront();
      }

    },

    /**
     * Removes the wards layer from the map.
     */
    removeLayer: function() {

      if (Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.removeLayer(this.mapLayer);
      }

    },

    /**
     * Highlights a feature.
     *
     * @param feature - The feature that will be highlighted.
     * @param layer - The internal layer of the feature that will be highlighted.
     */
    highlightFeature: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Highlight the current ward feature.
      layer.setStyle(this.namedBasemapLayers[namedBaseMap].defaultHighlightingStyle);

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
      }

    },

    /**
     * Resets the feature style. This is called once a mouseout event has been fired.
     *
     * @param feature - The feature that whose style will be reset.
     * @param layer - The internal layer of the feature whose style will be reset.
     */
    resetFeatureStyle: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Render the ward feature using the default style.
      layer.setStyle(this.namedBasemapLayers[namedBaseMap].defaultStyle);

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToBack();
      }

    },

    /**
     * Select the specified feature.
     *
     * @param feature - The feature that will be selected.
     * @param layer - The internal layer that will be selected.
     */
    selectFeature: function(feature) {

      let polygon = {
        "type": "Polygon",
        "coordinates": feature.geometry.coordinates[0]
      };

      // let polygon = feature.geometry;
      // polygon.type = 'Polygon';

      RestClient.getReportByPolygon(polygon);

    },

    /**
     * Shows an information tooltip over a feature.
     *
     * @param layer - The internal layer whose information will be displayed over using the tooltip.
     */
    showTooltip: function(layer) {

      // TODO: RESIN - This is what needs to change to support name of NUTS3 in native language.
      //this.nuts3Name = AppData.nuts3[nuts3id].nameAscii;
      //this.nuts3NativeName = AppData.nuts3[nuts3id].nutsName;

      let properties = layer.feature.properties;

      let nuts3id = properties.NUTS_ID;
      let sg = properties.SG;
      let g = properties.G;

      let html = '<div>' +

        // ASCII Name
        '<div>' +
        '<h5 class="text-danger">' + AppData.nuts3[nuts3id].nameAscii + '</h5>' +
        '</div>' +

        '<table class="table table-sm mt-4">' +
        '<tbody>' +

        // Supergroup
        '<tr>' +
        '<td class="pb-3">' +
        '<div class="typology-class-header">Class:</div>' +
        '<h6>' + MapLayers.nuts3.supergroups[sg].name + '</h6>' +
        '</td>' +
        '</tr>' +

        // Group
        '<tr>' +
        '<td>' +
        '<div class="typology-class-header">Subclass:</div>' +
        '<h6>' + MapLayers.nuts3.groups[g].name + '</h6>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>' +

        '</div>';

      layer.setTooltipContent(html);

      if (!layer.isTooltipOpen()) {
        layer.openTooltip();
      }

    },

    /**
     * Hides the information tooltip over a feature.
     *
     * @param layer - The internal layer whose tooltip will be hidden.
     */
    hideTooltip: function(layer) {
      if (layer.isTooltipOpen()) {
        layer.closeTooltip();
      }

      layer.setTooltipContent('');
    }

  },

  /**
   * The polygons of the queried locations.
   */
  queriedPolygons: {

    /**
     * The name of the layer.
     */
    name: 'queriedPolygons',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the wards layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render queried polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.blue600.hex,
          weight: 3,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.gray500.hex,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current queried polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 3,
          opacity: 1,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object dark is used to define the styles used to render the wards layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render queried polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red.hex,
          weight: 3,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.blueGray100.hex,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current queried polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 3,
          opacity: 1,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object roads is used to define the styles used to render the wards layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render queried polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.blue600.hex,
          weight: 3,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.gray500.hex,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current queried polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 3,
          opacity: 1,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object physical is used to define the styles used to render the wards layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render queried polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red.hex,
          weight: 3,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.gray600.hex,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current queried polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 3,
          opacity: 1,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object terrain is used to define the styles used to render the wards layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render queried polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.red.hex,
          weight: 3,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.gray600.hex,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current queried polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 3,
          opacity: 1,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }

      },

      /**
       * Object satellite is used to define the styles used to render the wards layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render queried polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 3,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.brown300.hex,
          fillOpacity: 0.5
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current queried polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: ColorPalettes.Material.amber.hex,
          weight: 3,
          opacity: 1,
          fillOpacity: 0.5
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
    geoJSON: {
      type: "FeatureCollection",
      features: [
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [0, 0], [0, 0.1], [0.1, 0.1], [0.1, 0], [0, 0]
              ]
            ]
          }
        }
      ]
    },

    /**
     * The dictionary used to retrieve an internal feature layer based on a feature key.
     * The key used in this case is the ward feature code.
     */
    featureToInternalLayerDictionary: {},

    /**
     * The queried polygon feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected queried polygon feature.
     */
    selectedInternalLayer: null,

    /**
     * Creates the queried polygons layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * Style the features of the layer using the associated default style defined for this layer.
         * The default style for this layer depends on the selected background map.
         *
         * @param feature - The feature to style.
         * @returns {Style} - A Style capable of styling polygon features.
         */
        style: function(feature) {
          return MapLayers.queriedPolygons.namedBasemapLayers[namedBaseMap].defaultStyle;
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
     * Renders the queried polygons layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the queried polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether queried polygon features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        this.mapLayer.eachLayer(function(layer) {
          layer.setStyle(MapLayers.queriedPolygons.namedBasemapLayers[currentBaseMap].defaultStyle);
        });

      }

    },

    /**
     * Adds the queried polygons layer on the map.
     */
    addLayer: function() {

      if (!Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.addLayer(this.mapLayer);
        this.mapLayer.bringToFront();
      }

    },

    /**
     * Removes the queried polygons layer from the map.
     */
    removeLayer: function() {

      if (Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.removeLayer(this.mapLayer);
      }

    },

    /**
     * Updates the Layer using newly retrieved data.
     */
    updateLayer: function(data) {

      let r = null;
      let polygon = null;

      if (queryStateViewModel.getCurrentState() === 'point') {

        r = data.rectangle.geographic;

        polygon = {
          "type": "Polygon",
          "coordinates": [
            [
              [r.minLon, r.minLat], [r.minLon, r.maxLat], [r.maxLon, r.maxLat], [r.maxLon, r.minLat], [r.minLon, r.minLat]
            ]
          ]
        };

      }
      else {

        polygon = data.polygon.geographic;

      }

      this.geoJSON.features = [];
      this.geoJSON.features.push(polygon);
      this.mapLayer.clearLayers();
      this.mapLayer.addData(this.geoJSON);
      this.renderLayer();

    }

  },

  /**
   * The centroids of the queried locations.
   */
  queriedCentroids: {

    /**
     * The name of the layer.
     */
    name: 'queriedCentroids',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the queried centroids layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render centroids on top of the Light Basemap.
         */
        defaultStyle: {
          radius: 4,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.amber.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },
        // defaultIcon: {
        //   className: 'simple-red-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // },

        /**
         * The default style used to highlight the current centroid on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          radius: 6,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.yellow400.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }
        // defaultHighlightingIcon: {
        //   className: 'simple-yellow-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // }

      },

      /**
       * Object dark is used to define the styles used to render the queried centroids layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render centroids on top of the Dark Basemap.
         */
        defaultStyle: {
          radius: 4,
          stroke: true,
          color: ColorPalettes.Material.orange.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.pink.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },
        // defaultIcon: {
        //   className: 'simple-red-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // },

        /**
         * The default style used to highlight the current centroid on top of the Dark Basemap.
         */
        defaultHighlightingStyle: {
          radius: 3,
          stroke: true,
          color: ColorPalettes.Material.yellow600.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.yellow600.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }
        // defaultHighlightingIcon: {
        //   className: 'simple-yellow-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // }

      },

      /**
       * Object roads is used to define the styles used to render the queried centroids layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render centroids on top of the Roads Basemap.
         */
        defaultStyle: {
          radius: 4,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.amber.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },
        // defaultIcon: {
        //   className: 'simple-red-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // },

        /**
         * The default style used to highlight the current centroid on top of the Roads Basemap.
         */
        defaultHighlightingStyle: {
          radius: 6,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.yellow400.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }
        // defaultHighlightingIcon: {
        //   className: 'simple-yellow-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // }

      },

      /**
       * Object physical is used to define the styles used to render the wards layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render centroids on top of the Physical Basemap.
         */
        defaultStyle: {
          radius: 4,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.amber.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },
        // defaultIcon: {
        //   className: 'simple-red-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // },

        /**
         * The default style used to highlight the current centroid on top of the Physical Basemap.
         */
        defaultHighlightingStyle: {
          radius: 6,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.yellow400.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }
        // defaultHighlightingIcon: {
        //   className: 'simple-yellow-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // }

      },

      /**
       * Object terrain is used to define the styles used to render the wards layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render centroids on top of the Terrain Basemap.
         */
        defaultStyle: {
          radius: 4,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.amber.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },
        // defaultIcon: {
        //   className: 'simple-red-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // },

        /**
         * The default style used to highlight the current centroid on top of the Terrain Basemap.
         */
        defaultHighlightingStyle: {
          radius: 6,
          stroke: true,
          color: ColorPalettes.Material.indigo.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.yellow400.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }
        // defaultHighlightingIcon: {
        //   className: 'simple-yellow-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // }

      },

      /**
       * Object satellite is used to define the styles used to render the wards layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render centroids on top of the Satellite Basemap.
         */
        defaultStyle: {
          radius: 4,
          stroke: true,
          color: ColorPalettes.Material.pink.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.amber.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },
        // defaultIcon: {
        //   className: 'simple-red-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // },

        /**
         * The default style used to highlight the current centroid on top of the Satellite Basemap.
         */
        defaultHighlightingStyle: {
          radius: 6,
          stroke: true,
          color: ColorPalettes.Material.pink.hex,
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: ColorPalettes.Material.amber.hex,
          fillOpacity: 1
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        }
        // defaultHighlightingIcon: {
        //   className: 'simple-yellow-div-icon',
        //   // html:'<i class="fa fa-location-arrow fa-2x"></i>',
        //   iconAnchor: [0,0],
        //   iconSize: null,
        //   popupAnchor: [0,0]
        // }

      }

    },

    /**
     * The leaflet map layer.
     */
    mapLayer: null,

    /**
     * The GeoJSON used to create the leaflet map layer.
     */
    geoJSON: {
      type: "FeatureCollection",
      features: [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [0, 0]
          }
        }
      ]
    },

    /**
     * The dictionary used to retrieve an internal feature layer based on a feature key.
     */
    featureToInternalLayerDictionary: {},

    /**
     * The queried centroid feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected queried centroid feature.
     */
    selectedInternalLayer: null,

    /**
     * Creates the queried centroids layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * Style the features of the layer using the associated default style defined for this layer.
         * The default style for this layer depends on the selected background map.
         *
         * @param feature - The feature to style.
         * @returns {CircleMarker} - A CircleMarker capable of styling point features.
         */
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, MapLayers.queriedCentroids.namedBasemapLayers[namedBaseMap].defaultStyle);
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
     * Renders the queried centroids layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the queried centroids polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether queried centroids features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        this.mapLayer.eachLayer(function(layer) {
          layer.setStyle(MapLayers.queriedCentroids.namedBasemapLayers[currentBaseMap].defaultStyle);
        });

      }

    },

    /**
     * Adds the queried centroids layer on the map.
     */
    addLayer: function() {

      if (!Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.addLayer(this.mapLayer);
        this.mapLayer.bringToFront();
      }

    },

    /**
     * Removes the queried centroids layer from the map.
     */
    removeLayer: function() {

      if (Spatial.map.hasLayer(this.mapLayer)) {
        Spatial.map.removeLayer(this.mapLayer);
      }

    },

    /**
     * Updates the Layer using newly retrieved data.
     */
    updateLayer: function(data) {

      let point = null;

      if (queryStateViewModel.getCurrentState() === 'point') {

        let p = data.location.geographic;

        point = {
          "type": "Point",
          "coordinates": [p.lon, p.lat]
        };

      }
      else {

        point = data.centroid.geographic;

      }



      this.geoJSON.features[0].geometry = point;
      this.mapLayer.clearLayers();
      this.mapLayer.addData(this.geoJSON);
      this.renderLayer();

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
    center: [53.505, -2.14],
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

    Spatial.map.editTools.drawingCanceled = false;

    /**
     * Event occurs once the editable drawing operation is canceled.
     */
    Spatial.map.on('editable:drawing:cancel', function(e) {

      e.editTools.drawingCanceled = true;

    });

    /**
     * Event occurs once the editable drawing operation ends.
     */
    Spatial.map.on('editable:drawing:end', function(e) {

      if (e.editTools.drawingCanceled) {
        e.editTools.drawingCanceled = false;
        return;
      }

      // let fLayers = e.layer.options.editOptions.editTools.featuresLayer.getLayers();
      let fLayers = e.editTools.featuresLayer.getLayers();

      let feature = fLayers[0].toGeoJSON();
      // feature.geometry.type === 'Point' | 'Polygon';

      if (queryStateViewModel.getCurrentState() === 'point') {
        RestClient.getReportByPoint(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
        Spatial.map.editTools.startMarker();
      }
      else if (queryStateViewModel.getCurrentState() === 'polygon') {
        RestClient.getReportByPolygon(feature.geometry);
        Spatial.map.editTools.startPolygon();
      }
      else if (queryStateViewModel.getCurrentState() === 'lsoa') {
        //RestClient.getReportByPolygon(feature.geometry);
      }

      e.editTools.featuresLayer.clearLayers();

    });

    // Move the attribution control to the bottom-left.
    Spatial.map.attributionControl.setPosition('bottomleft');

    // Create the sidebar and add it on the map.
    // TODO: RESIN
    Spatial.sidebar = L.control.sidebar(Spatial.Members.sidebarName, { position: Spatial.Members.sidebarPosition });
    Spatial.sidebar.addTo(Spatial.map);

    BaseMapLayers.setNamedBasemapLayers();
    BaseMapLayers.createBaseMapLayers();

    // MapLayers.ghiaTiles1000.createLayer();
    // MapLayers.ghiaAOI.createLayer();
    MapLayers.lsoa.createLayer();
    MapLayers.wards.createLayer();
    MapLayers.queriedPolygons.createLayer();
    MapLayers.queriedCentroids.createLayer();
    MapLayers.greaterManchesterOutline.createLayer();

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

        let data = response.data;

        Raster.query.type = queryStateViewModel.getCurrentState();
        Raster.query.data = {
          location: data.location,
          rectangle: data.rectangle,
          polygon: undefined
        };

        MapLayers.queriedPolygons.updateLayer(data);
        MapLayers.queriedCentroids.updateLayer(data);

        // Raster.setData(data.rasterExtract);
        Raster.setData2(data.rasterExtract);

        if (displayResultsViewModel.getCurrentMethod() === 'report') {
          reportViewModel.updateView();
        }
        else {
          diagramViewModel.updateView();
        }

        // let result =
        //   'SUCCESS:\r\n'  + '----------------------------------------\r\n' +
        //   'STATUS: '      + response.status + '\r\n' +
        //   'STATUS TEXT: ' + response.statusText + '\r\n\r\n' +
        //   'HEADERS: \r\n' + JSON.stringify(response.headers) + '\r\n\r\n' +
        //   'DATA: \r\n'    + JSON.stringify(response.data) + '\r\n\r\n' +
        //   'REQUEST: \r\n' + JSON.stringify(response.request) + '\r\n\r\n' +
        //   'CONFIG: \r\n'  + JSON.stringify(response.config) + '\r\n';
        //
        // alert(result);

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

  /**
   * Gets the raster cells report using a geographic polygon.
   * Uses the POST verb.
   *
   * @param polygon - The geographic polygon used to retrieve the raster cells.
   */
  getReportByPolygon: function(polygon) {

    let url = this.baseURL + '/report';

    // let data =  {
    //   polygon: {
    //     geographic: {
    //       type: "Polygon",
    //       coordinates: [[[-2.283783, 53.54602], [-2.242584, 53.545204], [-2.248764, 53.512143], [-2.318802, 53.508876], [-2.283783, 53.54602]]]
    //     },
    //     projected: {
    //       type: "Polygon",
    //       coordinates: [[
    //         [381293.28000357543, 405524.4198418361],
    //         [384022.91574372555, 405423.53947639425],
    //         [383600.5501975797, 401746.7627054498],
    //         [378954.3333445564, 401401.8078244587],
    //         [381293.28000357543, 405524.4198418361]
    //       ]]
    //     }
    //   },
    //   rasterExtract: {
    //     envelope: {
    //       minRow: 1564,
    //       minCol: 2728,
    //       maxRow: 1976,
    //       maxCol: 3235
    //     },
    //     histogram: {
    //       11: 18641,
    //       13: 14676,
    //       14: 1825,
    //       15: 1779,
    //       16: 199,
    //       17: 1449,
    //       21: 35,
    //       23: 7,
    //       24: 2181,
    //       25: 478,
    //       26: 1,
    //       28: 383,
    //       31: 2491,
    //       33: 6553,
    //       34: 5895,
    //       35: 1852,
    //       36: 44,
    //       37: 378,
    //       38: 1676,
    //       41: 1635,
    //       43: 4894,
    //       44: 9426,
    //       45: 4453,
    //       46: 15,
    //       47: 520,
    //       48: 3581,
    //       51: 4658,
    //       53: 12297,
    //       54: 21948,
    //       55: 15365,
    //       56: 149,
    //       57: 721,
    //       58: 2847,
    //       totalCells: 143052
    //     }
    //   }
    // };

    axios.post(url, {
      polygon: polygon
    }).then(function(response) {

      let data = response.data;

      Raster.query.type = queryStateViewModel.getCurrentState();
      Raster.query.data = {
        location: undefined,
        rectangle: undefined,
        polygon: data.polygon
      };

      MapLayers.queriedPolygons.updateLayer(data);
      MapLayers.queriedCentroids.updateLayer(data);

      // Raster.setData(data.rasterExtract);
      Raster.setData2(data.rasterExtract);

      if (displayResultsViewModel.getCurrentMethod() === 'report') {
        reportViewModel.updateView();
      }
      else {
        diagramViewModel.updateView();
      }

      // let result =
      //   'SUCCESS:\r\n'  + '----------------------------------------\r\n' +
      //   'STATUS: '      + response.status + '\r\n' +
      //   'STATUS TEXT: ' + response.statusText + '\r\n\r\n' +
      //   'HEADERS: \r\n' + JSON.stringify(response.headers) + '\r\n\r\n' +
      //   'DATA: \r\n'    + JSON.stringify(response.data) + '\r\n\r\n' +
      //   'REQUEST: \r\n' + JSON.stringify(response.request) + '\r\n\r\n' +
      //   'CONFIG: \r\n'  + JSON.stringify(response.config) + '\r\n';
      //
      // alert(result);

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
 * The sidebarTabsViewModel provides the data and logic to toggle the sidebar itself or its contents.
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
 * The toggleBaseMapViewModel provides the data and logic to toggle the BaseMap layer.
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
      'light':     { name: 'Light',     description: 'Light Basemap',     iconName: 'map'            },
      'dark':      { name: 'Dark',      description: 'Dark Basemap',      iconName: 'map'            },
      'roads':     { name: 'Roads',     description: 'Roads Basemap',     iconName: 'directions_car' },
      'physical':  { name: 'Physical',  description: 'Physical Basemap',  iconName: 'panorama'       }, /* 'image, panorama, photo' */
      'terrain':   { name: 'Terrain',   description: 'Terrain Basemap',   iconName: 'terrain'        }, /* 'terrain, landscape' */
      'satellite': { name: 'Satellite', description: 'Satellite Basemap', iconName: 'healing'        }  /* 'satellite, cast, healing, photo_camera, local_see' */
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

      if (queryStateViewModel.getCurrentState() === 'lsoa') {
        MapLayers.lsoa.renderLayer();
      }
      if (queryStateViewModel.getCurrentState() === 'wards') {
        MapLayers.wards.renderLayer();
      }

      // MapLayers.ghiaTiles1000.renderLayer();
      // MapLayers.ghiaAOI.renderLayer();
      MapLayers.queriedPolygons.renderLayer();
      MapLayers.queriedCentroids.renderLayer();
      MapLayers.greaterManchesterOutline.renderLayer();

    }

  }

});

/**
 * The queryStateViewModel provides the data and logic to toggle the query state of the application.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let queryStateViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: "#queryStateVM",

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The possible states of the query mechanism.
     */
    states: {
      point: {
        isCurrent: true,
        icon: 'fas fa-map-marker-alt',
        buttonText: 'Point',
        helpText: 'Click on the map to get a report of the green cover. A square of 1 km size with its centre positioned on the clicked location will be used to retrieve the information.'
      },
      polygon: {
        isCurrent: false,
        icon: 'fas fa-draw-polygon',
        buttonText: 'Polygon',
        helpText: 'Click on the map to draw a polygon. Double click to finish the polygon. A report will be generated with details about the green cover inside the drawn polygon.'
      },
      lsoa: {
        isCurrent: false,
        icon: 'fas fa-map-marked-alt',
        buttonText: 'LSOA',
        helpText: 'Click on the map to select an LSOA polygon. A report will be generated with details about the green cover inside the LSOA polygon.'
      },
      wards: {
        isCurrent: false,
        icon: 'fas fa-map-marked-alt',
        buttonText: 'Ward',
        helpText: 'Click on the map to select a ward polygon. A report will be generated with details about the green cover inside the ward polygon.'
      }
    },

    /**
     * Gets the current query mechanism state.
     *
     * @returns {string} - A string with the query mechanism state name.
     */
    getCurrentState: function() {

      let currentState = '';

      for (let property in this.states) {
        if (this.states.hasOwnProperty(property)) {
          if (this.states[property].isCurrent) {
            currentState = property;
            break;
          }
        }
      }

      return currentState;

    },

    /**
     * Gets the help text associated with the current query mechanism state.
     *
     * @returns {string} - A string with the query mechanism help text.
     */
    getHelpText: function() {

      let helpText = '';

      for (let property in this.states) {
        if (this.states.hasOwnProperty(property)) {
          if (this.states[property].isCurrent) {
            helpText = this.states[property].helpText;
            break;
          }
        }
      }

      return helpText;

    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Sets the current query mechanism state.
     *
     * @param state - The state of the query mechanism. Valid values are: {'point' | 'polygon' | 'lsoa'}.
     */
    setCurrentState(state) {

      for (let property in this.states) {
        if (this.states.hasOwnProperty(property)) {
          this.states[property].isCurrent = property === state;
        }
      }

      if (state === 'point') {
        if (Spatial.map.editTools.drawing()) {
          Spatial.map.editTools.stopDrawing();
        }

        Spatial.map.editTools.startMarker();

        if (MapLayers.lsoa.mapLayer !== null) {
          MapLayers.lsoa.removeLayer();
        }
        if (MapLayers.wards.mapLayer !== null) {
          MapLayers.wards.removeLayer();
        }
      }
      else if (state === 'polygon') {
        if (Spatial.map.editTools.drawing()) {
          Spatial.map.editTools.stopDrawing();
        }

        Spatial.map.editTools.startPolygon();

        MapLayers.lsoa.removeLayer();
        MapLayers.wards.removeLayer();
      }
      else if (state === 'lsoa') {
        if (Spatial.map.editTools.drawing()) {
          Spatial.map.editTools.stopDrawing();
        }

        Spatial.map.editTools.startMarker();

        MapLayers.wards.removeLayer();
        MapLayers.lsoa.renderLayer();
        MapLayers.lsoa.addLayer();
        MapLayers.queriedPolygons.mapLayer.bringToFront();
        MapLayers.queriedCentroids.mapLayer.bringToFront();
        MapLayers.greaterManchesterOutline.mapLayer.bringToFront();
      }
      else if (state === 'wards') {
        if (Spatial.map.editTools.drawing()) {
          Spatial.map.editTools.stopDrawing();
        }

        Spatial.map.editTools.startMarker();

        MapLayers.lsoa.removeLayer();
        MapLayers.wards.renderLayer();
        MapLayers.wards.addLayer();
        MapLayers.queriedPolygons.mapLayer.bringToFront();
        MapLayers.queriedCentroids.mapLayer.bringToFront();
        MapLayers.greaterManchesterOutline.mapLayer.bringToFront();
      }

    }

  }

});

/**
 * The displayResultsViewModel provides the data and logic to toggle
 * the method of displaying the results of the queried raster.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let displayResultsViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: "#displayResultsVM",

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The possible methods of displaying the results.
     */
    methods: {
      diagram: {
        isCurrent: true,
        icon: 'fas fa-poll', // 'fas fa-chart-line', 'fas fa-chart-pie'
        buttonText: 'Diagram'
      },
      report: {
        isCurrent: false,
        icon: 'fas fa-book',
        buttonText: 'Selected Data'
      }
    },

    /**
     * Gets the current method of displaying the results.
     *
     * @returns {string} - A string with the method of displaying the results.
     */
    getCurrentMethod: function() {

      let currentMethod = '';

      for (let property in this.methods) {
        if (this.methods.hasOwnProperty(property)) {
          if (this.methods[property].isCurrent) {
            currentMethod = property;
            break;
          }
        }
      }

      return currentMethod;

    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Sets the current method of displaying the results.
     *
     * @param method - The method of displaying the results. Valid values are: {'report' | 'diagram'}.
     */
    setCurrentMethod(method) {

      for (let property in this.methods) {
        if (this.methods.hasOwnProperty(property)) {
          this.methods[property].isCurrent = property === method;
        }
      }

      if (method === 'report') {
        reportViewModel.updateView();
      }
      else {
        diagramViewModel.updateView();
      }

    }

  }

});

/**
 * The reportViewModel provides the data and logic to render on the web page
 * the report with the green cover of the queried area.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let reportViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#reportVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Determines if a number is odd.
     *
     * @param number - The number to check.
     */
    isOdd(number) {
      return number % 2;
    },

    /**
     * Gets the envelope of the extracted values.
     */
    envelope: {},

    /**
     * Gets the histogram of extracted raster values.
     */
    histogram: {},

    /**
     * Gets the count of the histogram.
     */
    histogramCount: 0,

    /**
     * Gets the count of the histogram entries.
     *
     * @returns {number} - A number with the counted entries.
     */
    histogramEntriesCount: function () {
      return Object.keys(Raster.data.histogram).length;
    },

    /**
     * Gets the percentage of the specified histogram entry raster values compared to the total extracted raster values.
     *
     * @param histogramEntry - The entry of the histogram whose raster values count will be used to calculate the percentage.
     * @returns {number} - A number representing the percentage.
     */
    percentage(histogramEntry) {
      return (histogramEntry.count / this.histogramCount) * 100;
    },

    /**
     * Gets whether the view is visible or not.
     */
    isViewVisible() {
      return displayResultsViewModel.methods.report.isCurrent;
    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Updates the view with the new extracted raster values.
     */
    updateView() {

      this.envelope = Raster.data.envelope;
      this.histogram = Raster.data.histogram;
      this.histogramCount = Raster.data.count;

    }

  }

});


/**
 * The diagramViewModel provides the data and logic to render on the web page
 * the diagram displaying the green cover of the queried area.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let diagramViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#diagramVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Gets the envelope of the extracted values.
     */
    envelope: {},

    /**
     * Gets the histogram of extracted raster values.
     */
    histogram: {},

    /**
     * Gets the count of the histogram.
     */
    histogramCount: 0,

    /**
     * Gets whether the view is visible or not.
     */
    isViewVisible() {
      return displayResultsViewModel.methods.diagram.isCurrent;
    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Updates the view with the new extracted raster values.
     */
    updateView() {

      this.envelope = Raster.data.envelope;
      this.histogram = Raster.data.histogram;
      this.histogramCount = Raster.data.count;

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

// Raster.metadata = RestClient.getMetadata();

Spatial.initializeMap();

Spatial.sidebar.open('map-controls');

queryStateViewModel.setCurrentState('point');

//
// ================================================================================
