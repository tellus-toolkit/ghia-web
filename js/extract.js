//
// ================================================================================
//  TellUs Toolkit Ltd.
//  https://www.tellus-toolkit.com/
//
//  Name:            extract.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 26/11/2019.
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
          color: ColorPalettes.Material.deepOrangeA400.hex,
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
          color: ColorPalettes.Material.deepOrangeA400.hex,
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
              // MapLayers.lsoa.hideTooltip(layer);
              MapLayers.lsoa.resetFeatureStyle(feature, layer);
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              MapLayers.lsoa.selectFeature(feature);
            }

          });
        }

      });

      // Add the layer in to the map and make sure it is visible.
      //this.mapLayer.addTo(Spatial.map);
      //this.mapLayer.bringToFront();

      // Loop through all the internal layers and bind a tooltip.
      this.mapLayer.eachLayer(function(layer) {
        layer.bindTooltip(layer.feature.properties.nm, {
          direction: 'top',
          offset: [0, -10],
          sticky: true
        });
      });

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
          color: ColorPalettes.Material.deepOrangeA400.hex,
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
          color: ColorPalettes.Material.deepOrangeA400.hex,
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
              //MapLayers.wards.showTooltip(layer);
              MapLayers.wards.highlightFeature(feature, layer);
            },

            /**
             * Raised when the mouse is going out of a feature.
             */
            mouseout: function() {
              // MapLayers.wards.hideTooltip(layer);
              MapLayers.wards.resetFeatureStyle(feature, layer);
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              MapLayers.wards.selectFeature(feature);
            }

          });
        }

      });

      // Loop through all the internal layers and bind a tooltip.
      this.mapLayer.eachLayer(function(layer) {
        let ps = layer.feature.properties;

        //ps.lad11nm + '<br>' + ps.cmwd11nm
        layer.bindTooltip(ps.lad19nm + '<br>' + ps.wd19nm, {
          direction: 'top',
          offset: [0, -10],
          sticky: true
        });
      });

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

    spinnerViewModel.isVisible = true;

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
    Spatial.sidebar = L.control.sidebar(
      Spatial.Members.sidebarName, { position: Spatial.Members.sidebarPosition }
    );
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

    spinnerViewModel.isVisible = false;

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
 * The Diagrams object provides properties and methods related to data diagrams.
 */
let Diagrams = {

  /**
   * The name of the current diagram.
   */
  currentDiagram: '',

  /**
   * Holds the data associated with the form aspect of the raster.
   */
  form: {

    /**
     * The data object of the form aspect of the raster.
     */
    data: {

      /**
       * The labels of the datasets.
       */
      labels: [],

      /**
       * The datasets of the diagram.
       */
      datasets: [
        {

          /**
           * The label of the user selected dataset.
           */
          label: 'Extracted Data',

          /**
           * The actual user selected data.
           */
          data: [0, 0, 0, 0, 0],

          /**
           * The background colors of the cohorts of the diagrams.
           */
          backgroundColors: [
            ColorPalettes.Material.brown100.hex,
            ColorPalettes.Material.blue200.hex,
            ColorPalettes.Material.lightGreen500.hex,
            ColorPalettes.Material.lightGreen800.hex,
            ColorPalettes.Material.green900.hex
          ]

        },
        {

          /**
           * The label of the Greater Manchester dataset.
           */
          label: 'GM Average',

          /**
           * The actual Greater Manchester data.
           */
          data: [0, 0, 0, 0, 0],

          /**
           * The background colors of the cohorts of the diagrams.
           */
          backgroundColors: [
            ColorPalettes.Material.brown100.hex,
            ColorPalettes.Material.blue200.hex,
            ColorPalettes.Material.lightGreen500.hex,
            ColorPalettes.Material.lightGreen800.hex,
            ColorPalettes.Material.green900.hex
          ]

        }
      ]

    },

    /**
     * Initializes the labels and Greater Manchester dataset of the form object.
     */
    initialize: function() {

      let lookup = Raster.metadata.band.lookup;

      for (let key in lookup) {
        if (lookup.hasOwnProperty(key)) {

          let index = -1;

          let form = lookup[key].form;
          index = this.data.labels.indexOf(form);

          if (index === -1) {
            this.data.labels.push(form);
          }

          index = this.data.labels.indexOf(form);
          this.data.datasets[1].data[index] += lookup[key].count;
          Raster.authorities.form.data.GM.cells[index] = lookup[key].count;

        }
      }

      let data = this.data.datasets[1].data;

      for (let i = 0; i < data.length; i++) {
        let pc = (data[i] / Raster.metadata.numberOfValues) * 100;
        data[i] = pc.toFixed(3);
        Raster.authorities.form.data.GM.percentages[i] = pc;
      }

    },

    /**
     * Updates the user selected data grouped based on the form aspect of the raster.
     */
    updateData: function() {

      this.data.datasets[0].data = [0, 0, 0, 0, 0];

      let histogram = Raster.data.histogram;

      for (let key in histogram) {
        if (histogram.hasOwnProperty(key)) {

          let form = histogram[key].form;
          index = this.data.labels.indexOf(form);

          this.data.datasets[0].data[index] += histogram[key].count;

        }
      }

      let data = this.data.datasets[0].data;

      for (let i = 0; i < data.length; i++) {
        data[i] = ((data[i] / Raster.data.count) * 100).toFixed(3);
      }

      let authority = diagramViewModel.selectedAuthority;

      this.data.datasets[1].label = Raster.authorities.form.data[authority].label;

      let authorityData = this.data.datasets[1].data;

      for (let i = 0; i < authorityData.length; i++) {
        authorityData[i] = Raster.authorities.form.data[authority].percentages[i].toFixed(3);
      }

    }

  },

  /**
   * Holds the data associated with the landscape aspect of the raster.
   */
  landscape: {

    /**
     * The data object of the landscape aspect of the raster.
     */
    data: {

      /**
       * The labels of the datasets.
       */
      labels: [],

      /**
       * The datasets of the diagram.
       */
      datasets: [
        {

          /**
           * The label of the user selected dataset.
           */
          label: 'Selected Data',

          /**
           * The actual user selected data.
           */
          data: [
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ]
        },
        {

          /**
           * The label of the Greater Manchester dataset.
           */
          label: 'GM Average',

          /**
           * The actual Greater Manchester data.
           */
          data: [
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ]

        }
      ]

    },

    /**
     * Initializes the labels and Greater Manchester dataset of the landscape object.
     */
    initialize: function() {

      let lookup = Raster.metadata.band.lookup;

      for (let key in lookup) {
        if (lookup.hasOwnProperty(key)) {

          let index = -1;

          let landscape = lookup[key].landscape;
          index = this.data.labels.indexOf(landscape);

          if (index === -1) {
            this.data.labels.push(landscape);
          }

          index = Diagrams.landscape.data.labels.indexOf(landscape);
          this.data.datasets[1].data[index] = lookup[key].count;

        }
      }

    },

    /**
     * Updates the user selected data grouped based on the landscape aspect of the raster.
     */
    /**
     * Updates the user selected data grouped based on the form aspect of the raster.
     */
    updateData: function() {

      this.data.datasets[0].data = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ];

      let histogram = Raster.data.histogram;

      for (let key in histogram) {
        if (histogram.hasOwnProperty(key)) {

          let landscape = histogram[key].landscape;
          index = this.data.labels.indexOf(landscape);

          this.data.datasets[0].data[index] = histogram[key].count;

        }
      }

    }

  },

  /**
   * The actual Chart.js chart object.
   */
  diagram: undefined,

  /**
   * Functionality related to doughnut diagram.
   */
  doughnut: {

    update: function() {

      if (Diagrams.currentDiagram !== 'doughnut') {

        // The current diagram is not a doughnut. Update it to be a doughnut.
        Diagrams.currentDiagram = 'doughnut';

        // Create a diagram definition.
        let diagramDefinition = {

          type: 'doughnut',

          data: {
            labels: Diagrams.form.data.labels,
            datasets: [
              {
                label: Diagrams.form.data.datasets[0].label,
                data: Diagrams.form.data.datasets[0].data,
                backgroundColor: Diagrams.form.data.datasets[0].backgroundColors
              },
              {
                label: Diagrams.form.data.datasets[1].label,
                data: Diagrams.form.data.datasets[1].data,
                backgroundColor: Diagrams.form.data.datasets[1].backgroundColors
              }
            ]
          },

          options: {
            legend: {
              labels: {
                boxWidth: 20
              }
            },
            tooltips: {
              callbacks: {
                label: function(item, data) {
                  return data.datasets[item.datasetIndex].label + ' - ' +
                         Diagrams.form.data.labels[item.index] + ': ' +
                         data.datasets[item.datasetIndex].data[item.index];
                }
              }
            }
          }

        };

        $('#diagram').replaceWith($('<canvas id="diagram"></canvas>'));
        let element = $('#diagram');

        Diagrams.diagram = new Chart(element, diagramDefinition);

      }
      else {
        Diagrams.diagram.data.datasets[0].data = Diagrams.form.data.datasets[0].data;
        Diagrams.diagram.data.datasets[1].label = Diagrams.form.data.datasets[1].label;
        Diagrams.diagram.update();
      }

      // diagramViewModel.customLegendExtractedDataLabel = 'Outer Ring: Extracted Data';
      // diagramViewModel.customLegendAuthorityDataLabel = 'Inner Ring: ' + Diagrams.form.data.datasets[1].label;

      $("#customLegendExtractedDataLabel").text('Outer Ring: Extracted Data - ');
      $("#customLegendAuthorityDataLabel").text('Inner Ring: ' + Diagrams.form.data.datasets[1].label);

    }

  },

  /**
   * Functionality related to pie diagram.
   */
  pie: {

    update: function() {

      if (Diagrams.currentDiagram !== 'pie') {

        // The current diagram is not a pie. Update it to be a pie.
        Diagrams.currentDiagram = 'pie';

        // Create a diagram definition.
        let diagramDefinition = {

          type: 'pie',

          data: {
            labels: Diagrams.form.data.labels,
            datasets: [
              {
                label: Diagrams.form.data.datasets[0].label,
                data: Diagrams.form.data.datasets[0].data,
                backgroundColor: Diagrams.form.data.datasets[0].backgroundColors
              },
              {
                label: Diagrams.form.data.datasets[1].label,
                data: Diagrams.form.data.datasets[1].data,
                backgroundColor: Diagrams.form.data.datasets[1].backgroundColors
              }
            ]
          },

          options: {
            legend: {
              labels: {
                boxWidth: 20
              }
            },
            tooltips: {
              callbacks: {
                label: function(item, data) {
                  return data.datasets[item.datasetIndex].label + ' - ' +
                    Diagrams.form.data.labels[item.index] + ': ' +
                    data.datasets[item.datasetIndex].data[item.index];
                }
              }
            }
          }

        };

        $('#diagram').replaceWith($('<canvas id="diagram"></canvas>'));
        let element = $('#diagram');

        Diagrams.diagram = new Chart(element, diagramDefinition);

      }
      else {
        Diagrams.diagram.data.datasets[0].data = Diagrams.form.data.datasets[0].data;
        Diagrams.diagram.data.datasets[1].label = Diagrams.form.data.datasets[1].label;
        Diagrams.diagram.update();
      }

      // diagramViewModel.customLegendExtractedDataLabel = 'Outer Ring: Extracted Data';
      // diagramViewModel.customLegendAuthorityDataLabel = 'Inner Ring: ' + Diagrams.form.data.datasets[1].label;

      $("#customLegendExtractedDataLabel").text('Outer Ring: Extracted Data - ');
      $("#customLegendAuthorityDataLabel").text('Inner Ring: ' + Diagrams.form.data.datasets[1].label);

    }

  },

  /**
   * Functionality related to polarArea diagram.
   */
  polarArea: {

    update: function() {

      // Check if the current diagram is a polarArea.
      if (Diagrams.currentDiagram !== 'polarArea') {

        // The current diagram is not a polarArea. Update it to be a polarArea.
        Diagrams.currentDiagram = 'polarArea';

        // Create a diagram definition.
        let diagramDefinition = {

          type: 'polarArea',

          data: {
            labels: Diagrams.form.data.labels,
            datasets: [
              {
                label: Diagrams.form.data.datasets[0].label,
                data: Diagrams.form.data.datasets[0].data,
                backgroundColor: [
                  GlobalFunctions.hexColourToRgbaString(ColorPalettes.Material.brown100.hex, 60),
                  GlobalFunctions.hexColourToRgbaString(ColorPalettes.Material.blue200.hex, 60),
                  GlobalFunctions.hexColourToRgbaString(ColorPalettes.Material.lightGreen500.hex, 60),
                  GlobalFunctions.hexColourToRgbaString(ColorPalettes.Material.lightGreen800.hex, 60),
                  GlobalFunctions.hexColourToRgbaString(ColorPalettes.Material.green900.hex, 60)
                ],
                borderColor: "rgba(255, 255, 255, 0)",
                borderWidth: 0
              },
              {
                label: Diagrams.form.data.datasets[1].label,
                data: Diagrams.form.data.datasets[1].data,
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: ColorPalettes.Material.indigo.hex
              },
            ]
          },

          options: {
            legend: {
              labels: {
                boxWidth: 20
              }
            },
            tooltips: {
              callbacks: {
                label: function(item, data) {
                  return data.datasets[item.datasetIndex].label + ' - ' +
                    Diagrams.form.data.labels[item.index] + ': ' +
                    data.datasets[item.datasetIndex].data[item.index];
                }
              }
            }
          }

        };

        $('#diagram').replaceWith($('<canvas id="diagram"></canvas>'));
        let element = $('#diagram');

        Diagrams.diagram = new Chart(element, diagramDefinition);

      }
      else {
        Diagrams.diagram.data.datasets[0].data = Diagrams.form.data.datasets[0].data;
        Diagrams.diagram.data.datasets[1].label = Diagrams.form.data.datasets[1].label;
        Diagrams.diagram.update();
      }

      // diagramViewModel.customLegendExtractedDataLabel = 'Coloured cohorts: Extracted Data';
      // diagramViewModel.customLegendAuthorityDataLabel = 'Blue cohorts: ' + Diagrams.form.data.datasets[1].label;

      $("#customLegendExtractedDataLabel").text('Coloured cohorts: Extracted Data - ');
      $("#customLegendAuthorityDataLabel").text('Blue cohorts: ' + Diagrams.form.data.datasets[1].label);

    }

  },

  /**
   * Functionality related to radar diagram.
   */
  radar: {

    update: function() {

      if (Diagrams.currentDiagram !== 'radar') {

        // The current diagram is not a radar. Update it to be a radar.
        Diagrams.currentDiagram = 'radar';

        // Create a diagram definition.
        let diagramDefinition = {

          type: 'radar',

          data: {
            labels: Diagrams.form.data.labels,
            datasets: [
              {
                label: Diagrams.form.data.datasets[0].label,
                data: Diagrams.form.data.datasets[0].data,

                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: ColorPalettes.Material.red.hex,
                pointBackgroundColor: Diagrams.form.data.datasets[0].backgroundColors,
                pointBorderColor: ColorPalettes.Material.gray800.hex,
                pointRadius: 5,
                pointHoverRadius: 6
                // pointHoverBackgroundColor: ,
                // pointHoverBorderColor: ,
              },
              {
                label: Diagrams.form.data.datasets[1].label,
                data: Diagrams.form.data.datasets[1].data,

                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: ColorPalettes.Material.indigo.hex,
                pointBackgroundColor: Diagrams.form.data.datasets[1].backgroundColors,
                pointBorderColor: ColorPalettes.Material.gray800.hex,
                pointRadius: 3,
                pointHoverRadius: 4
                // pointHoverBackgroundColor: ,
                // pointHoverBorderColor: ,
              },
            ]
          },

          options: {
            legend: {
              labels: {
                boxWidth: 20
              }
            }
          }

        };

        $('#diagram').replaceWith($('<canvas id="diagram"></canvas>'));
        let element = $('#diagram');

        Diagrams.diagram = new Chart(element, diagramDefinition);

      }
      else {
        Diagrams.diagram.data.datasets[0].data = Diagrams.form.data.datasets[0].data;
        Diagrams.diagram.data.datasets[1].label = Diagrams.form.data.datasets[1].label;
        Diagrams.diagram.update();
      }

    }

  },

  /**
   * Functionality related to bar diagram.
   */
  bar: {

    update: function() {

      if (Diagrams.currentDiagram !== 'bar') {

        // The current diagram is not a bar. Update it to be a bar.
        Diagrams.currentDiagram = 'bar';

        // Create a diagram definition.
        let diagramDefinition = {

          type: 'bar',

          data: {
            labels: Diagrams.form.data.labels,
            datasets: [
              {
                label: Diagrams.form.data.datasets[0].label,
                data: Diagrams.form.data.datasets[0].data,
                backgroundColor: Diagrams.form.data.datasets[0].backgroundColors,
                borderColor: "rgba(255, 255, 255, 0)",
                borderWidth: 0
              },
              {
                label: Diagrams.form.data.datasets[1].label,
                data: Diagrams.form.data.datasets[1].data,
                backgroundColor: Diagrams.form.data.datasets[1].backgroundColors,
                borderColor: ColorPalettes.Material.gray800.hex,
                borderWidth: 3
              }
            ]
          },

          options: {
            legend: {
              labels: {
                boxWidth: 20
              }
            }
          }

        };

        $('#diagram').replaceWith($('<canvas id="diagram"></canvas>'));
        let element = $('#diagram');

        Diagrams.diagram = new Chart(element, diagramDefinition);

      }
      else {
        Diagrams.diagram.data.datasets[0].data = Diagrams.form.data.datasets[0].data;
        Diagrams.diagram.data.datasets[1].label = Diagrams.form.data.datasets[1].label;
        Diagrams.diagram.update();
      }

    }

  },

  /**
   * Initializes the Diagrams object.
   *
   * @param canvas - The canvas element name.
   */
  initialize: function(canvas) {

    this.form.initialize();
    this.landscape.initialize();

    // Get the context of the canvas element.
    this.diagramElement = $('#' + canvas);

  },

  /**
   * Updates the user selected data.
   */
  updateData: function() {

    Diagrams.form.updateData();
    //Diagrams.landscape.updateData(); // TODO: Deal with it in case the landscape aspect is needed to be showm.

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

        // let result =
        //   'ERROR:\r\n'  + '----------------------------------------\r\n' +
        //   'MESSAGE: '     + error.message + '\r\n' +
        //   'STACK: \r\n'   + error.stack + '\r\n\r\n' +
        //   'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
        //   'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
        //   'STATUS: '      + error.status + '\r\n' +
        //   'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
        //   'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
        //   'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';
        //
        // alert(result);

        let message =
          '<div>' +
            '<p>' +
              '<span>MESSAGE: ' + error.message + '</span><br><br>' +
              '<span>STATUS: ' + error.status + '</span><br>' +
              '<span>STATUS TEXT: ' + error.statusText + '</span><br><br>' +
            '</p>' +
          '<div>';

        popupViewModel.isError = true;
        popupViewModel.title = 'An error has occurred getting results';
        popupViewModel.htmlMessage = message;
        popupViewModel.show();

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

        Raster.setData(data.rasterExtract);

        if (displayResultsViewModel.getCurrentMethod() === 'report') {
          reportViewModel.updateView();
        }
        else {
          diagramViewModel.updateView();
        }

      }).catch(function(error) {

        // let result =
        //   'ERROR:\r\n'  + '----------------------------------------\r\n' +
        //   'MESSAGE: '     + error.message + '\r\n' +
        //   'STACK: \r\n'   + error.stack + '\r\n\r\n' +
        //   'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
        //   'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
        //   'STATUS: '      + error.status + '\r\n' +
        //   'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
        //   'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
        //   'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';
        //
        // alert(result);

        let message =
          '<div>' +
            '<p>' +
              '<span>MESSAGE: ' + error.message + '</span><br><br>' +
              '<span>STATUS: ' + error.status + '</span><br>' +
              '<span>STATUS TEXT: ' + error.statusText + '</span><br><br>' +
            '</p>' +
          '<div>';

        popupViewModel.isError = true;
        popupViewModel.title = 'An error has occurred getting results';
        popupViewModel.htmlMessage = message;
        popupViewModel.show();

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

      Raster.setData(data.rasterExtract);

      if (displayResultsViewModel.getCurrentMethod() === 'report') {
        reportViewModel.updateView();
      }
      else {
        diagramViewModel.updateView();
      }

    }).catch(function(error) {

      // let result =
      //   'ERROR:\r\n'  + '----------------------------------------\r\n' +
      //   'MESSAGE: '     + error.message + '\r\n' +
      //   'STACK: \r\n'   + error.stack + '\r\n\r\n' +
      //   'REQUEST: \r\n' + JSON.stringify(error.request) + '\r\n\r\n' +
      //   'CONFIG: \r\n'  + JSON.stringify(error.config) + '\r\n\r\n' +
      //   'STATUS: '      + error.status + '\r\n' +
      //   'STATUS TEXT: ' + error.statusText + '\r\n\r\n' +
      //   'HEADERS: \r\n' + JSON.stringify(error.headers) + '\r\n\r\n' +
      //   'DATA: \r\n'    + JSON.stringify(error.data) + '\r\n';

      // alert(result);

      let message =
        '<div>' +
          '<p>' +
            '<span>MESSAGE: ' + error.message + '</span><br><br>' +
            '<span>STATUS: ' + error.status + '</span><br>' +
            '<span>STATUS TEXT: ' + error.statusText + '</span><br><br>' +
          '</p>' +
        '<div>';

      popupViewModel.isError = true;
      popupViewModel.title = 'An error has occurred while getting results';
      popupViewModel.htmlMessage = message;
      popupViewModel.show();


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
let spinnerViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#spinnerVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the spinner is visible or not.
     */
    isVisible: false

  }

});

/**
 * The popupViewModel provides the data and logic to show popups on the web page.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let popupViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#popupVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The title of the popup.
     */
    title: '',

    /**
     * The message of the popup in html format.
     */
    htmlMessage: '<p><p>',

    /**
     * Indicates whether the popup displays an error or not.
     */
    isError: false

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Shows the popup.
     */
    show() {
      $('#popupVM').modal('show');
    },

    /**
     * Hides the popup.
     */
    hide() {
      $('#popupVM').modal('hide');
    }

  }

});

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
    currentBaseMap: 'physical',

    /**
     * The dictionary whose keys are the names of basemaps and items are objects providing the
     * names, icon names and descriptions of the buttons.
     * The descriptions can be used in aria-labels or as tooltips.
     */
    dictionary: {
      'physical':  { name: 'Physical',  description: 'Physical Basemap',  iconName: 'panorama'       }, /* 'image, panorama, photo' */
      'satellite': { name: 'Satellite', description: 'Satellite Basemap', iconName: 'healing'        }, /* 'satellite, cast, healing, photo_camera, local_see' */
      'light':     { name: 'Light',     description: 'Light Basemap',     iconName: 'map'            },
      'dark':      { name: 'Dark',      description: 'Dark Basemap',      iconName: 'map'            },
      'roads':     { name: 'Roads',     description: 'Roads Basemap',     iconName: 'directions_car' },
      'terrain':   { name: 'Terrain',   description: 'Terrain Basemap',   iconName: 'terrain'        }  /* 'terrain, landscape' */
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
     * Indicates whether the collapsible panel is collapsed or not.
     */
    isCollapsed: false,

    /**
     * The possible states of the query mechanism.
     */
    states: {
      point: {
        isCurrent: true,
        icon: 'fas fa-map-marker-alt',
        buttonText: 'Point',
        helpText: 'Click on the map to select a point location. Information will be generated with details about the land cover inside a square of 1km size centred on your point.'
      },
      polygon: {
        isCurrent: false,
        icon: 'fas fa-draw-polygon',
        buttonText: 'Polygon',
        helpText: 'Click on the map to draw a polygon. Double click to finish the polygon. Information will be generated about the land cover inside your drawn area.'
      },
      lsoa: {
        isCurrent: false,
        icon: 'fas fa-map-marked-alt',
        buttonText: 'LSOA',
        helpText: 'Click on the map to select a lower-level census zone. Information will be generated about the land cover inside the administrative zone.'
      },
      wards: {
        isCurrent: false,
        icon: 'fas fa-map-marked-alt',
        buttonText: 'Ward',
        helpText: 'Click on the map to select an administrative ward area. Information will be generated about the land cover inside the administrative zone.'
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

    },

    /**
     * Gets the text to display next to the toggle collapsible area button.
     *
     * @returns {string} - The text to display next to the toggle collapsible area button.
     */
    getCollapsibleButtonText: function() {
      return this.isCollapsed ? 'Show section' : 'Collapse section';
    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Toggle the collapsed state of the collapsible panel.
     */
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
      this.showDown = !this.showDown;
      this.showUp = !this.showUp;
    },

    /**
     * Sets the current query mechanism state.
     *
     * @param state - The state of the query mechanism. Valid values are: {'point' | 'polygon' | 'lsoa' | 'wards'}.
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

        spinnerViewModel.isVisible = true;

        MapLayers.wards.removeLayer();
        MapLayers.lsoa.renderLayer();
        MapLayers.lsoa.addLayer();
        MapLayers.queriedPolygons.mapLayer.bringToFront();
        MapLayers.queriedCentroids.mapLayer.bringToFront();
        MapLayers.greaterManchesterOutline.mapLayer.bringToFront();

        spinnerViewModel.isVisible = false;
      }
      else if (state === 'wards') {
        if (Spatial.map.editTools.drawing()) {
          Spatial.map.editTools.stopDrawing();
        }

        Spatial.map.editTools.startMarker();

        spinnerViewModel.isVisible = true;

        MapLayers.lsoa.removeLayer();
        MapLayers.wards.renderLayer();
        MapLayers.wards.addLayer();
        MapLayers.queriedPolygons.mapLayer.bringToFront();
        MapLayers.queriedCentroids.mapLayer.bringToFront();
        MapLayers.greaterManchesterOutline.mapLayer.bringToFront();

        spinnerViewModel.isVisible = false;
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
        buttonText: 'Data Table'
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
     * The list of authorities in Greater Manchester.
     */
    authorities: [
      {
        value: Raster.authorities.names[0],
        name: 'Compare to: ' + Raster.authorities.fullNames[0]
      },
      {
        value: Raster.authorities.names[1],
        name: 'Compare to: ' + Raster.authorities.fullNames[1]
      },
      {
        value: Raster.authorities.names[2],
        name: 'Compare to: ' + Raster.authorities.fullNames[2]
      },
      {
        value: Raster.authorities.names[3],
        name: 'Compare to: ' + Raster.authorities.fullNames[3]
      },
      {
        value: Raster.authorities.names[4],
        name: 'Compare to: ' + Raster.authorities.fullNames[4]
      },
      {
        value: Raster.authorities.names[5],
        name: 'Compare to: ' + Raster.authorities.fullNames[5]
      },
      {
        value: Raster.authorities.names[6],
        name: 'Compare to: ' + Raster.authorities.fullNames[6]
      },
      {
        value: Raster.authorities.names[7],
        name: 'Compare to: ' + Raster.authorities.fullNames[7]
      },
      {
        value: Raster.authorities.names[8],
        name: 'Compare to: ' + Raster.authorities.fullNames[8]
      },
      {
        value: Raster.authorities.names[9],
        name: 'Compare to: ' + Raster.authorities.fullNames[9]
      },
      {
        value: Raster.authorities.names[10],
        name: 'Compare to: ' + Raster.authorities.fullNames[10]
      }
    ],

    /**
     * The selected authority.
     */
    selectedAuthority: 'GM',

    /**
     * The possible diagrams.
     */
    diagrams: {
      doughnut: {
        isCurrent: true,
        icon: 'donut_large',
        tooltip: 'Doughnut Diagram',
        customLegend: {
          isCollapsed: false,
          labels: ['', '']
        }
      },
      pie: {
        isCurrent: false,
        icon: 'pie_chart',
        tooltip: 'Pie Diagram',
        customLegend: {
          isCollapsed: false,
          labels: ['', '']
        }
      },
      polarArea: {
        isCurrent: false,
        icon: 'filter_tilt_shift',
        tooltip: 'Polar Area Diagram',
        customLegend: {
          isCollapsed: false,
          labels: ['', '']
        }
      },
      radar: {
        isCurrent: false,
        icon: 'control_camera',
        tooltip: 'Radar Diagram',
        customLegend: {
          isCollapsed: true,
          labels: ['', '']
        }
      },
      bar: {
        isCurrent: false,
        icon: 'bar_chart',
        tooltip: 'Bar Diagram',
        customLegend: {
          isCollapsed: true,
          labels: ['', '']
        }
      }
    },

    /**
     * The table displayed under the diagram as part of a legend.
     */
    legendTable: {
      forms: ['Built', 'Water', 'Grasses', 'Forbs and shrubs', 'Tree canopy'],
      authorityData: [-1, -1, -1, -1, -1],
      extractedData: [-1, -1, -1, -1, -1]
    },

    /**
     * Gets whether the view is visible or not.
     */
    isViewVisible() {
      return displayResultsViewModel.methods.diagram.isCurrent;
    }

  },

  /**
   * The computed properties of the model of the view model.
   */
  computed: {

    /**
     * Gets the current diagram.
     *
     * @returns {string} - A string with the diagram name.
     */
    currentDiagram: function() {

      let currentDiagram = '';

      for (let property in this.diagrams) {
        if (this.diagrams.hasOwnProperty(property)) {
          if (this.diagrams[property].isCurrent) {
            currentDiagram = property;
            break;
          }
        }
      }

      return currentDiagram;

    },

    /**
     * Gets whether the custom legend is collapsed or not.
     */
    isCustomLegendCollapsed: function() {
      return this.diagrams[this.currentDiagram].customLegend.isCollapsed;
    },

    /**
     * Gets/Sets the label of the extracted data part of custom legend.
     */
    customLegendExtractedDataLabel: {
      get: function() {

        let label = this.diagrams[this.currentDiagram].customLegend.labels[0];

        if (label !== '') {
          label += ' - ';
        }

        return label;

      },
      set: function(newValue) {
        this.diagrams[this.currentDiagram].customLegend.labels[0] = newValue;
      }
    },

    /**
     * Gets/Sets the label of the authority data part of custom legend.
     */
    customLegendAuthorityDataLabel: {
      get: function() {
        return this.diagrams[this.currentDiagram].customLegend.labels[1];
      },
      set: function(newValue) {
        return this.diagrams[this.currentDiagram].customLegend.labels[1] = newValue;
      }
    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Sets the current diagram.
     *
     * @param diagram - The diagram to be displayed. Valid values area: {'doughnut' | 'pie' | 'polarArea' | 'radar' | 'bar'}.
     */
    setCurrentDiagram(diagram) {

      if (this.diagrams[diagram].isCurrent) {
        return;
      }

      for (let property in this.diagrams) {
        if (this.diagrams.hasOwnProperty(property)) {
          this.diagrams[property].isCurrent = property === diagram;
        }
      }

      Diagrams[diagram].update();
      // diagramViewModel.updateView();

    },

    /**
     * Updates the view with the new extracted raster values.
     */
    updateView() {

      // Update the user selected data either in form or landscape.
      // TODO: For the time being only form user selected data are updated.
      Diagrams.updateData();

      // Update the diagram.
      Diagrams[this.currentDiagram].update();

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
     * Gets a report of entries after the combination of histogram and formHistogram.
     */
    report: {}, // TODO: AB

    /**
     * Gets the total count of values (excluding nodata values).
     */
    histogramCount: 0, // TODO: AB

    /**
     * Gets the count of the report entries.
     *
     * @returns {number} - A number with the counted entries.
     */
    reportEntriesCount: function () {
      return Object.keys(this.report).length; // TODO: AB
    },

    /**
     * Gets the percentage of the specified report entry raster value count compared to the histogramCount.
     *
     * @param histogramEntry - The entry of the report whose raster values count will be used to calculate the percentage.
     * @returns {number} - A number representing the percentage.
     */
    percentage(reportEntry) {
      return (reportEntry.count / this.histogramCount) * 100;
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

      if (!Raster.data.isNew) {
        return;
      }

      Raster.data.isNew = false;

      this.envelope = Raster.data.envelope;
      this.histogramCount = Raster.data.countValues;

      // Create an empty report object.
      let report = {};

      let index = 0;

      // Loop through the formHistogram.
      for (let formKey in Raster.data.formHistogram) {
        if (Raster.data.formHistogram.hasOwnProperty(formKey)) {

          // Calculate the form percentage and get the form entry.
          let formPercentage = (Raster.data.formHistogram[formKey].count / Raster.data.countValues) * 100;
          let formEntry = Raster.data.formHistogram[formKey];

          // Update the entry adding the percentage and style.
          formEntry.percentage = formPercentage;
          formEntry.form += ' (total)';
          formEntry.function = '';
          formEntry.functionDescription = '';
          formEntry.style = Raster.styles[formKey].rowStyle;
          // delete formEntry['function'];

          // Add the formEntry as an entry in the report.
          report[index++] = formEntry;

          // Loop through the histogram.
          for (let key in Raster.data.histogram) {
            if (Raster.data.histogram.hasOwnProperty(key)) {

              // Get the histogram entry.
              let entry = Raster.data.histogram[key];

              // Make sure to exclude no-data values.
              if (entry.value !== Raster.metadata.band.noDataValue) {

                // Get the form of the entry.
                let form = key.substring(0, 1);

                // Add all histogram entries under their associated aggregated form entry.
                if (formKey === form) {
                  let percentage = (entry.count / Raster.data.countValues) * 100;
                  // entry.func = entry.function;
                  entry.percentage = percentage;
                  entry.style = Raster.styles[key].rowStyle;
                  // delete entry['function'];

                  report[index++] = entry;
                }
              }

            }
          }

        }
      }

      // Set the report.
      this.report = report;

    }

  }

});

//
// ================================================================================


// ================================================================================
//  Main Body

// $(document).ready(function(){
//   //AppState.bootstrapMaterialTooltipEnabled = true;
//   $('[data-toggle="tooltip"]').tooltip();
// });

// Raster.metadata = RestClient.getMetadata();

Raster.setNumberOfValues();

Diagrams.initialize('diagram');

Spatial.initializeMap();

Spatial.sidebar.open('map-controls');

queryStateViewModel.setCurrentState('point');

//
// ================================================================================
