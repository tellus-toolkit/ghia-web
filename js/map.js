
// TODO: APPVAR

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

var AppData = AppData || {};

AppData.cidrs = {
  '1': { cidr1: [-4.650814072	, -9.301628144, -13.95244222, -18.60325629, -23.25407036], cidr2: [0, 0, 0, 0, 0] },
  '2': { cidr1: [-3.225569044	, -6.451138087, -9.676707131, -12.90227617, -16.12784522], cidr2: [-1.193358336, -2.386716672, -3.580075008, -4.773433344, -5.96679168] },
  '3': { cidr1: [-4.721955092	, -9.443910185, -14.16586528, -18.88782037, -23.60977546], cidr2: [0, 0, 0, 0, 0] },
  '4': { cidr1: [-5.217569945, -10.43513989, -15.65270983, -20.87027978, -26.08784972], cidr2: [-3.060723301, -6.121446601, -9.182169902, -12.2428932, -15.3036165] },
  '5': { cidr1: [-2.960786329, -5.921572657, -8.882358986, -11.84314531, -14.80393164], cidr2: [0, 0, 0, 0, 0] },
  '6': { cidr1: [-0.907805405, -1.815610811, -2.723416216, -3.631221621, -4.539027026], cidr2: [0, 0, 0, 0, 0] },
  '7': { cidr1: [-1.809751256, -3.619502512, -5.429253767, -7.239005023, -9.048756279], cidr2: [0, 0, 0, 0, 0] },
  '8': { cidr1: [-2.277051317, -4.554102633, -6.83115395, -9.108205267, -11.38525658], cidr2: [0, 0, 0, 0, 0] },
  '9': { cidr1: [-1.863333382, -3.726666764, -5.590000146, -7.453333528, -9.31666691], cidr2: [-1.120659266, -2.241318532, -3.361977798, -4.482637064, -5.60329633] }
};

/**
 * The AppState object holds the application state.
 */
// let AppState = {
//
//   /**
//    * Indicates whether the bootstrap material tooltip is enabled or not.
//    */
//   bootstrapMaterialTooltipEnabled: false,
//
//   /**
//    * The transparent color is used in those cases that a highly transparent color needs to be rendered.
//    */
//   transparentColor: { fillColor: '#ffffff', fillOpacity: 0.01 },
//
//   /**
//    * The NUTS3 panel displayed currently on the sidebar.
//    */
//   currentNuts3Panel: 'symbology', // ['symbology' | 'overview' | 'details']
//
//   // Overview
//   // 1.blur_on, 2.local_library, 3.center_focus_weak, all_out, language, wallpaper, calendar_today, 360, trip_origin, fullscreen, public
//   //
//   // Details
//   // 1.blur_circular, 2.event_note, 3.[center_focus_strong, crop_free], book, class, extension, pageview, library_books, menu
//
//
//
//   /**
//    * Sets the visibility of the panels of the web page.
//    */
//   setPanelsVisibility: function() {
//     symbologyViewModel.isVisible = (AppState.currentNuts3Panel === 'symbology');
//     overviewInfoViewModel.isVisible = (AppState.currentNuts3Panel === 'overview');
//     // TODO: RESIN - UNCOMMENT THIS !!!
//     // detailsInfoViewModel.isVisible = (AppState.currentNuts3Panel === 'details');
//   }
//
// };

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
   * The LSOAs polygons layer
   */
  lsoas: {

    /**
     * The name of the layer.
     */
    name: 'lsoas',

    /**
     * The attribution to add on the map related to the NUTS3 layer.
     *
     * Official attribution string. The version used on the map omits UN-FAO and Turkstat.
     * Data source: GISCO - Eurostat (European Commission)
     * Administrative boundaries: © EuroGeographics © UN-FAO © Turkstat.
     */
    attribution: 'Data source: ' +
      '<a href="https://www.ordnancesurvey.co.uk/" target="_cf">Crown Copyright - Ordnance Survey</a>',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the NUTS3 layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render NUTS3 polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Light Basemap.
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
        },

        /**
         * The styles used to render the LSOA polygons based on their cidr1 on top of the Light Basemap.
         */
        pc10: {
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple100.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green100.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal100.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange100.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber100.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray100.hex, fillOpacity: 0.7 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan100.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object dark is used to define the styles used to render the NUTS3 layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render NUTS3 polygons on top of the Dark Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#d3d3d3',
          weight: 0.1,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Dark Basemap.
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
        },

        /**
         * The styles used to render the LSOA polygons based on their cidr1 on top of the Light Basemap.
         */
        pc10: {
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple100.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green100.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal100.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange100.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber100.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray100.hex, fillOpacity: 0.7 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan100.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object roads is used to define the styles used to render the NUTS3 layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render NUTS3 polygons on top of the Roads Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#2f4f4f', //'#2e8b57', //'#4b0082',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Roads Basemap.
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
        },

        /**
         * The styles used to render the LSOA polygons based on their cidr1 on top of the Light Basemap.
         */
        pc10: {
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple100.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green100.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal100.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange100.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber100.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray100.hex, fillOpacity: 0.7 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan100.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object physical is used to define the styles used to render the NUTS3 layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render NUTS3 polygons on top of the Physical Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Physical Basemap.
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
        },

        /**
         * The styles used to render the LSOA polygons based on their cidr1 on top of the Light Basemap.
         */
        pc10: {
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple100.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green100.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal100.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange100.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber100.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray100.hex, fillOpacity: 0.7 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan100.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object terrain is used to define the styles used to render the NUTS3 layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render NUTS3 polygons on top of the Terrain Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Terrain Basemap.
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
        },

        /**
         * The styles used to render the LSOA polygons based on their cidr1 on top of the Light Basemap.
         */
        pc10: {
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple100.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green100.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal100.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange100.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber100.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray100.hex, fillOpacity: 0.7 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan100.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object satellite is used to define the styles used to render the NUTS3 layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render NUTS3 polygons on top of the Satellite Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Satellite Basemap.
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
        },

        /**
         * The styles used to render the LSOA polygons based on their cidr1 on top of the Light Basemap.
         */
        pc10: {
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple100.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green100.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal100.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange100.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber100.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray100.hex, fillOpacity: 0.7 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan100.hex, fillOpacity: 0.7 }
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
     * The NUTS3 feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected NUTS3 feature.
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
     * Creates the LSOAs layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.geoJSON = AppData.lsoaPolygons;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * The LSOAs layer attribution to insert on the map.
         */
        attribution: MapLayers.lsoas.attribution,

        // TODO: RESIN - Correct rendering code to allow the use of the current basemap and the current rendering method (typology supergroups / groups or indicators)
        style: function(feature) {
          // TODO: RESIN - Change next line.

          // TODO: WORKAROUND for the class = 0 bug. (Introduced feature.properties.class !==0 because 2 LSOAs have a class of 0).
          if (feature.properties.class !==0) {
            let isVisible = MapLayers.lsoas.classes[feature.properties.class.toString()].visible;

            if (isVisible) {
              return MapLayers.lsoas.namedBasemapLayers[namedBaseMap].pc10[feature.properties.class];
            }
            else {
              return MapLayers.nuts3.namedBasemapLayers[namedBaseMap].defaultStyle;
            }
          }
          else {
            return MapLayers.nuts3.namedBasemapLayers[namedBaseMap].defaultStyle;
          }

        },

        /**
         * Define the behaviour of each feature.
         *
         * @param feature - The feature whose behaviour will be defined.
         * @param layer - The internal layer of each feature.
         */
        // onEachFeature: function(feature, layer) {
        //   layer.on({
        //
        //     /**
        //      * Raised when the mouse is over a feature.
        //      */
        //     mouseover: function() {
        //       MapLayers.nuts3.showTooltip(layer);
        //       MapLayers.nuts3.highlightNuts3(feature, layer);
        //     },
        //
        //     /**
        //      * Raised when the mouse is going out of a feature.
        //      */
        //     mouseout: function() {
        //       MapLayers.nuts3.hideTooltip(layer);
        //       MapLayers.nuts3.resetNuts3Style(feature, layer, false);
        //       MapLayers.nuts3.reselectNuts3();
        //     },
        //
        //     /**
        //      * Raised when a feature is clicked.
        //      */
        //     click: function() {
        //       MapLayers.nuts3.selectNuts3(feature, layer);
        //       MapLayers.nuts3.updateInfo(feature);
        //     },
        //
        //     /**
        //      * Raised when a feature is double clicked.
        //      */
        //     dblclick: function() {
        //       //MapLayers.nuts3.resetNuts3Style(feature, layer);
        //       //alert('double clicked');
        //       //map.doubleClickZoom.disable();
        //       //map.doubleClickZoom.enable()
        //       // TODO: This is a problem. A click event is fired before the double click. We need to change this behaviour.
        //       //Spatial.map.fitBounds(layer.getBounds());
        //     }
        //
        //   });
        // }
      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

      // Loop through all the internal layers.
      // Create the feature to internal layer dictionary and bind the layer tooltips.
      // this.mapLayer.eachLayer(function(layer) {
      //   MapLayers.nuts3.featureToInternalLayerDictionary[layer.feature.properties.NUTS_ID] = layer._leaflet_id;
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
     * Renders the NUTS3 layer.
     */
    // renderLayer: function() {
    //
    //   // Get the current basemap. This is used to decide the symbology of the NUTS3 polygons.
    //   let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;
    //
    //   // Get the current tab.
    //   let currentTab = symbologyViewModel.currentTab;
    //
    //   // Check whether NUTS3 features exist or not.
    //   if (this.geoJSON !== undefined || this.geoJSON !== null) {
    //
    //     // Loop through the NUTS3 features.
    //     for (i = 0; i < this.geoJSON.features.length; i++) {
    //
    //       // Get the NUTS3 feature, attribute name and the class value.
    //       let feature = this.geoJSON.features[i];
    //
    //       if (currentTab !== 'indicators') {
    //         // Render the layer based on typology classes (supergroups or groups).
    //         let attributeName = this.typologyLevelDictionary[currentTab].attributeName;
    //         let classValue = feature.properties[attributeName].toString();
    //
    //         // Render the NUTS3 polygon having the specified typology class.
    //         this.renderNuts3PolygonByTypologyClass(feature, classValue, currentTab, currentBaseMap);
    //       }
    //       else {
    //         let indicator = symbologyViewModel.selectedIndicators[symbologyViewModel.currentDomain][0];
    //         let zscore = feature.properties[indicator + 'Z'];
    //
    //         // Render the layer based on the selected indicator.
    //         this.renderNuts3PolygonByIndicator(feature, indicator, zscore);
    //       }
    //
    //     }
    //
    //   }
    //
    //   MapLayers.nuts3.reselectNuts3();
    //
    // },


  },



  /**
   * The NUTS3 polygons layer.
   */
  nuts3: {

    /**
     * The name of the layer.
     */
    name: 'nuts3',

    /**
     * The attribution to add on the map related to the NUTS3 layer.
     *
     * Official attribution string. The version used on the map omits UN-FAO and Turkstat.
     * Data source: GISCO - Eurostat (European Commission)
     * Administrative boundaries: © EuroGeographics © UN-FAO © Turkstat.
     */
    attribution: 'Data source: ' +
                   '<a href="http://ec.europa.eu/eurostat/web/gisco/" target="_cf">GISCO</a> - ' +
                   '<a href="http://ec.europa.eu/eurostat/" target="_cf">Eurostat</a> ' +
                   '(<a href="https://ec.europa.eu/commission/index_en/" target="_cf">European Commission</a>) - ' +
                 'Administrative boundaries: ' +
                   '© <a href="https://eurogeographics.org/" target="_cf">EuroGeographics</a>',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the NUTS3 layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render NUTS3 polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Light Basemap.
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
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Light Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Light Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object dark is used to define the styles used to render the NUTS3 layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render NUTS3 polygons on top of the Dark Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#d3d3d3',
          weight: 0.1,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Dark Basemap.
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
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Dark Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink.hex, fillOpacity: 0.6 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.6 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime.hex, fillOpacity: 0.6 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.6 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue900.hex, fillOpacity: 0.6 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.6 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan.hex, fillOpacity: 0.6 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray.hex, fillOpacity: 0.6 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Dark Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink800.hex, fillOpacity: 0.6 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink600.hex, fillOpacity: 0.6 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink400.hex, fillOpacity: 0.6 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink200.hex, fillOpacity: 0.6 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.6 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.6 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.6 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.6 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime800.hex, fillOpacity: 0.6 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime600.hex, fillOpacity: 0.6 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime400.hex, fillOpacity: 0.6 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime200.hex, fillOpacity: 0.6 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.6 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.6 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.6 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.6 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue900.hex, fillOpacity: 0.6 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue700.hex, fillOpacity: 0.6 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue500.hex, fillOpacity: 0.6 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue300.hex, fillOpacity: 0.6 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.6 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.6 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.6 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.6 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.6 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan800.hex, fillOpacity: 0.6 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan600.hex, fillOpacity: 0.6 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan400.hex, fillOpacity: 0.6 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan200.hex, fillOpacity: 0.6 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray800.hex, fillOpacity: 0.6 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray600.hex, fillOpacity: 0.6 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray400.hex, fillOpacity: 0.6 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray200.hex, fillOpacity: 0.6 }
        }

      },

      /**
       * Object roads is used to define the styles used to render the NUTS3 layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render NUTS3 polygons on top of the Roads Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#2f4f4f', //'#2e8b57', //'#4b0082',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Roads Basemap.
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
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Roads Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Roads Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object physical is used to define the styles used to render the NUTS3 layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render NUTS3 polygons on top of the Physical Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Physical Basemap.
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
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Physical Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Physical Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object terrain is used to define the styles used to render the NUTS3 layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render NUTS3 polygons on top of the Terrain Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Terrain Basemap.
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
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Terrain Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Terrain Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object satellite is used to define the styles used to render the NUTS3 layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render NUTS3 polygons on top of the Satellite Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Satellite Basemap.
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
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Satellite Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Satellite Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
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
     * The key used in this case is the NUTS3 feature code.
     */
    featureToInternalLayerDictionary: {},

    /**
     * The NUTS3 feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected NUTS3 feature.
     */
    selectedInternalLayer: null,

    /**
     * The dictionary that associates the typology levels to style names and attribute names.
     */
    typologyLevelDictionary: {
      'supergroups': { styleName: 'supergroupStyles', attributeName: 'SG' },
      'groups': { styleName: 'groupStyles', attributeName: 'G' }
    },

    /**
     * The supergroups metadata in the form of a dictionary whose keys are the values of supergroups.
     */
    // supergroups: {
    //   '1': {
    //     sg: 1, groups: [11, 12, 13, 14],     visible: true, name: 'Inland and Urbanised',
    //     keywords: 'Central and western Europe; major cities; inland; fluvial flooding; affluent and innovative; high critical infrastructure provision.',
    //     description: 'Cities and NUTS3 regions in this class are predominantly located in Central and Western Europe. A number of capital cities are included. Fluvial flooding from rivers is the key climate hazard facing these areas. There is also the potential for greater surface water flooding arising from projected increase in heavy rainfall events over the coming decades. Exposure of people, settlements and critical infrastructure to fluvial flooding is currently relatively high in a European context. Due to their low lying topography, exposure to landslides is relatively low. These are relatively affluent and innovative areas and are projected to experience increases in migration and numbers of young people. They also have well developed road networks and high broadband access and bandwidth capacity. For reasons such as these, they have relatively low sensitivity to climate change hazards and high adaptive capacity, and their vulnerability to climate change is therefore relatively low. However, given that exposure to fluvial flooding is high, climate change and extreme weather remains an important risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Inland and Urbanised typology class.'
    //   },
    //   '2': {
    //     sg: 2, groups: [21, 22, 23, 24],     visible: true, name: 'Inland Hinterlands',
    //     keywords: 'Eastern Europe and central France; multiple climate hazards; exposure to fluvial flooding; peri-urban and rural; relatively low GDP (in a European context); low projected migration.',
    //     description: 'The majority of the cities and NUTS3 regions in this class are concentrated in Eastern Europe and Central France. They face a wide range of climate change hazards including fluvial flooding, rising temperatures and heat waves and wild fires. These areas show relatively high exposure of people, settlements and critical infrastructure to fluvial flooding from rivers, but less so to landslide hazards. They have relatively low provision of critical infrastructure and broadband/bandwidth capacity compared to other parts of Europe. This is related to their peri-urban and rural locations, which also reflects in their relatively low population densities and proportions of built up area. In a European context, they have lower levels of GDP and employment opportunities, and as a result are in receipt of high levels of European funding via priority allocation schemes. This economic situation can also help to explain the projections for low levels of migration and numbers of young people in the population in the future. Due to the range of hazards faced, the notable exposure to fluvial flooding and relatively high levels of vulnerability, climate change risk is an important issue. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Inland Hinterlands typology class.'
    //   },
    //   '3': {
    //     sg: 3, groups: [31, 32, 33, 34],     visible: true, name: 'Northern Lands',
    //     keywords: 'Northern Europe; coastal hazard exposure; cool and wet; projected increase in very heavy rainfall events; affluent and dynamic; high projected migration.',
    //     description: 'As suggested by the name of this class, these cities and NUTS3 regions are located in Northern Europe. Aside from Denmark, much of Scandinavia falls within this class. Parts of Western Scotland, the Baltic States and Iceland (aside from Reykjavik) are also encompassed. These are cool and wet areas, although temperatures are nevertheless rising at a higher than average rate for Europe, with the number of ice days projected to fall significantly. They are also projected to experience a large increase in heavy and very heavy precipitation days compared to other European locations, which may increase the chance of surface water flooding in some areas. Coastal hazards are a threat , which results in high exposure of people, settlements and critical infrastructure to this hazard. These are often large areas with relatively low urban population densities and many smaller rural settlements. Urban areas have high levels of green space, and are not densely built up. Broadband and bandwidth capacity are relatively low, as is the density of transport networks with low numbers of road intersections and transport nodes.  Due to low population densities, the number of critical infrastructure assets per 1000 people (e.g. airports, hospitals etc.) is high from a European perspective. Socio-economically, these are affluent and dynamic places with projected increases in migration and numbers of young people over the coming decades. This increases their capacity to adapt to the changing climate, and lessens their level of climate risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Northern Lands typology class.'
    //   },
    //   '4': {
    //     sg: 4, groups: [41, 42, 43, 44],     visible: true, name: 'Southern Lands',
    //     keywords: 'Mediterranean; increasingly hot and dry; landslides and coastal hazards; relatively low critical infrastructure provision; economic challenges (from a European perspective).',
    //     description: 'This class is principally Mediterranean. It\'s cities and NUTS3 regions cover the majority of Portugal and Spain, France\'s Mediterranean coast, Italy, Croatia and Greece. These areas are hot and dry, and are projected to become increasingly so over the coming decades with climate change. Landslides and coastal hazards are a feature, with people, settlements and infrastructure currently exposed to both of these hazards, particularly landslides. High soil moisture stress and projected water consumption pressure increase the threat of water shortages and drought. Critical infrastructure provision and broadband/bandwidth capacity is relatively low from a European perspective. Urban population density is above the average for Europe, although the coverage of built up areas and green spaces in urban areas is relatively low. Socio-economic indicators highlight that these areas face challenges, with higher than average levels of poverty risk, and lower than average GDP, employment prospects and patent applications. These factors combine to increase vulnerability to climate change hazards and increase overall levels of climate risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Southern Lands typology class.'
    //   },
    //   '5': {
    //     sg: 5, groups: [51, 52, 53, 54, 55], visible: true, name: 'North West Coasts',
    //     keywords: 'Atlantic and North Sea coasts; areas of high population density; high exposure to coastal hazards but not to other climate hazards; projected increases in migration;',
    //     description: 'This class covers the majority of the coastal zones of the UK, northern France and Denmark. Parts of the Belgium, Netherlands and northern Germany are also include. However, this class does not encompass the Scandinavian or Baltic coasts. Coastal hazards are a particular feature of these cities and NUTS3 regions. Given the relatively high urban population densities and numbers of transport nodes in these areas, this translates into high levels of exposure of people, settlements and infrastructure to coastal hazards in comparison to other parts of Europe. Conversely, exposure to fluvial flooding and landslide hazards is relatively low from a European perspective.  Socio-economic indicators do not suggest that these are amongst Europe\'s most affluent and dynamic locations, although they also highlight that they are not amongst the poorest. The number of young people is projected to increase as is migration, and there is relatively good access to broadband and high internet bandwidths. These factors can help to moderate levels of vulnerability to coastal hazards, although the high degree of exposure to this hazard places climate change as a key risk to economic development and health and wellbeing. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the North West Coasts typology class.'
    //   },
    //   '6': {
    //     sg: 6, groups: [61, 62, 63],         visible: true, name: 'Landlocked and Elevated',
    //     keywords: 'Alpine and central European mountains and uplands; high landslide and fluvial flooding exposure; projected increase in very heavy rainfall; dense transport infrastructure; relatively affluent and innovative.',
    //     description: 'This class covers the Alps, upland areas of Germany, parts of the Carpathian Mountains and France\'s Massif Central and Eastern mountain ranges. Aside from several areas in Italy, all cities and NUTS 3 regions are inland. The topography and high rainfall levels contribute to landslides standing out as a key hazard. Climate change is projected to increase the frequency and intensity of heavy and very heavy rainfall days, which could result in an even greater threat of landslides. It is therefore understandable that the exposure of people, settlements and critical infrastructure to landslides is high from a European perspective. Here, high transport infrastructure densities (road intersections, transport nodes) stand out as a particular issue, although population densities are relatively low. Exposure to fluvial flooding is also relatively high. Projections for climate change induced intensification of extreme rainfall may drive exposure levels higher still. These areas are relatively affluent and innovative compared to others in Europe, and are projected to experience increasing migration in the future. It is clear that climate change poses a range of risks to these regions over the coming decades, although their relatively high levels of adaptive capacity may help to lessen levels of risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Landlocked and Elevated typology class.'
    //   },
    //   '7': {
    //     sg: 7, groups: [71, 72, 73, 74],     visible: true, name: 'North West Urban',
    //     keywords: 'North west Europe; predominantly inland; urbanised; relatively low hazard exposure; projected increase in very heavy rainfall; GDP and employment prospects above European average.',
    //     description: 'England, Belgium and Germany dominate this class, although there are outliers in France, Poland and Austria. These are predominantly inland cities and NUTS3 regions. Projections highlight that they will experience an increasing number of consecutive wet days and days with heavy and very heavy rainfall.  Aside from this, their hazard profile is relatively benign. As a result, exposure to hazards including fluvial flooding, landslides and coastal hazards is low in relation to other parts of Europe. These are generally urbanised areas with above average population densities, urban built environment coverage and numbers of road intersections and transport nodes (reflecting dense transport networks). GDP, employment prospects and patent applications indicators are at a level above the European average, suggesting higher levels of adaptive capacity to climate change hazards. This can help to moderate risks associated with increasing rainfall (and potential fluvial and surface water flood risk) that these areas may face in the future. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the North West Urban typology class.'
    //   },
    //   '8': {
    //     sg: 8, groups: [81, 82, 83],         visible: true, name: 'Lowlands and Estuaries',
    //     keywords: 'Low lying and estuarine locations; high exposure to fluvial flooding and coastal hazards; good critical infrastructure provision; relatively strong economies.',
    //     description: 'This class encompasses a relatively small number of cities and NUTS3 regions sited in low lying and estuarine locations, particularly in the Netherlands and Denmark. Other regions sharing these characteristics, for example in North Eastern Italy and Northern Germany, also fall within this class. The key hazards that they face are fluvial flooding and coastal hazards, to a degree that is well above the European average. Exposure of people, settlements and critical infrastructure to these hazards is also particularly high in a European context. There are relatively few people at risk of poverty, and migration levels are projected to increase. GDP, employment prospects and patent applications indicators show values that from an Economic perspective, these areas sit above the average for Europe\'s cities and NUTS3 regions. These locations also have relatively high critical infrastructure provision and access to broadband and high bandwidths. This suggests that capacity to adapt to hazards is relatively high and sensitivity relatively low. However, the severity of the hazards faced by these areas, and the high level of exposure to fluvial flooding and coastal hazards, highlights that climate change stands out as a major risk factor. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Lowlands and Estuaries typology class.'
    //   }
    // },

    /**
     * The groups metadata in the form of a dictionary whose keys are the values of groups.
     */
    // groups: {
    //   '11': {
    //     g: 11, sg: 1, visible: true, name: 'Inland and Urbanised 1',
    //     keywords: 'Cities and their hinterlands; higher landslide hazard and related exposure of transport infrastructure; higher wildfire hazard; becoming warmer and drier; greater soil moisture stress and pressure on water resources; higher projected change in total population, migration and the number of older and younger people; more patent applications.',
    //     description: 'This sub-class encompasses a number of widely dispersed major cities (e.g. Milan, Vienna, Budapest, Lyon, Zurich, Prague) and NUTS 3 regions immediately surrounding major cities (e.g. Paris and Frankfurt). Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes, Inland and Urbanised 1 has the following distinguishing features and characteristics: higher landslide and wildfire hazard; higher projected increase in the number of heat wave days; lower projected increase in the number of wet days; higher exposure of transport infrastructure to landslides; higher soil moisture stress and pressure on water resources; longer and less dense road and rail networks; higher projected change in total population, migration and the number of older and younger people; higher number of patent applications. Other indicators are around the average for the Inland and Urbanised class. The radial diagrams for this sub-class, and the indicator data contained within this online portal, can be used to develop a richer picture of its climate risk characteristics. It is also important to consider this sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '12': {
    //     g: 12, sg: 1, visible: true, name: 'Inland and Urbanised 2',
    //     keywords: 'Capital cities and key urban centres; higher fluvial flood hazard; fewer projected continuous wet days; fewer projected heat wave days; lower exposure of transport infrastructure to landslides; higher urban population density; higher numbers of people at risk of poverty; economically stronger.',
    //     description: 'This sub-class is almost entirely made up of the urban centres of major cities in northern and western Europe, particularly the UK and Germany. Other countries are also represented, for example Paris, Brussels and Geneva all fall within this sub-class. Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes,  Inland and Urbanised 2 has the following distinguishing features and characteristics: higher fluvial flood hazard (which is itself the key hazard facing the Inland and Urbanised class, and is high in a European context); lower projected number of continuous wet days; lower projected number of heat wave days; lower exposure of transport infrastructure to landslides; higher urban population density and proportion of urban green and built up area; lower green urban and built up urban change; higher numbers of people at risk of poverty; higher performance on economic indicators. Other indicators are around the average for the Inland and Urbanised class. The radial diagrams for Inland and Urbanised 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Inland and Urbanised 2 sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '13': {
    //     g: 13, sg: 1, visible: true, name: 'Inland and Urbanised 3',
    //     keywords: 'German and Polish cities; projected to become warmer and wetter; lower soil moisture stress and pressure on water resources; higher exposure of people and transport infrastructure to fluvial flooding; shorter road and rail networks; lower broadband coverage; lower projected change in total population; higher ratio of jobs to people.',
    //     description: 'This sub-class picks up a number of German cities, particularly in the south and the east (including Munich, Frankfurt and Leipzig), and also several of Poland\'s major cities (including Warsaw and Krakow). A cluster of connected NUTS 3 regions to the north of Munich (including the city itself) are also included. Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes, Inland and Urbanised 3 has the following distinguishing features and characteristics: higher projected increase in mean temperature; higher projected increase in the number of consecutive wet days and wet days; lower reduction in the projected number of ice days; lower soil moisture stress and pressure on water resources; higher exposure of people and transport infrastructure to fluvial flooding (cities and NUTS 3 regions in the Inland and Urbanised class are already themselves highly exposed to fluvial flooding in a European context); lower length of road and rail networks; lower broadband coverage and NGA provision; lower projected population growth; higher employment-population balance. Other indicators are around the average for the Inland and Urbanised class. The radial diagrams for Inland and Urbanised 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Inland and Urbanised 3 sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '14': {
    //     g: 14, sg: 1, visible: true, name: 'Inland and Urbanised 4',
    //     keywords: 'Hinterlands surrounding major cities; lower fluvial flooding and landslide hazard and related exposure of people and transport infrastructure; higher drought and wildfire hazard; lower projected increase in heat and rainfall related extremes; slower pace of urban development; more stable population numbers; lower economic performance.',
    //     description: 'NUTS3 regions immediately surrounding major cities in England (e.g. Birmingham), Belgium (e.g. Brussels) and Germany (e.g. Berlin) form this basis of this sub-class. A cluster of regions in the south east of the Netherlands, which includes the city of Eindhoven, are also represented. Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes, Inland and Urbanised 4 has the following distinguishing features and characteristics: lower fluvial flooding and landslide hazard; higher drought and wildfire hazard; lower projected increase in heat and rainfall related extremes; lower exposure of people and transport infrastructure to fluvial flooding and landslide hazards; higher increase in green urban and built up urban change; lower projected change in total population; lower performance on economic indicators (including GVA and employment-population balance). Other indicators are around the average for the Inland and Urbanised class. The radial diagrams for Inland and Urbanised 4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Inland and Urbanised 4 sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '21': {
    //     g: 21, sg: 2, visible: true, name: 'Inland Hinterlands 1',
    //     keywords: 'Baltic states and north east Poland; lower incidence of landslides and fluvial flooding and related exposure of people and transport infrastructure; projected to become wetter but with fewer high temperature extremes; higher urban population density; higher proportion of urban green space; lower projected change in total population; lower economic performance.',
    //     description: 'Inland cities and NUTS 3 regions of the Baltic States of Lithuania, Latvia and Estonia are a key feature of this sub-class, as is a cluster within north east Poland. Although they are largely inland, several areas do have coastlines. Relative to cities and NUTS3 regions within the three other Inland Hinterlands sub-classes, Inland Hinterlands 1 has the following distinguishing features and characteristics: lower incidence of landslides and fluvial flooding hazards; lower projected increase in the number of heat wave days and high temperature extremes; higher projected increase in the number of wet days; lower exposure of people and settlements to fluvial flooding; lower exposure of transport infrastructure to fluvial flooding and landslides; higher urban population density; higher proportion of urban green space; lower projected change in population with lower migration and increases in young people; lower performance on economic indicators. Other indicators are around the average for the Inland Hinterlands class. The radial diagrams for Inland Hinterlands 1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Inland Hinterlands 1 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '22': {
    //     g: 22, sg: 2, visible: true, name: 'Inland Hinterlands 2',
    //     keywords: 'South eastern Europe; higher landslide and wildfire hazard; projected to become warmer and drier; higher exposure of people and transport infrastructure to flooding and landslide; lower provision of transport infrastructure; higher urban population density; lower urban green space cover; lower performance on economic indicators.',
    //     description: 'This sub-class is located in south eastern Europe, and covers much of Romania and Eastern Hungary in addition to regions of Croatia, Slovakia and Bulgaria. Only one of these regions has a coastline. Relative to cities and NUTS3 regions within the three other Inland and Hinterlands sub-classes, Inland Hinterlands 2 has the following distinguishing features and characteristics: higher landslide and wildfire hazard; higher soil moisture stress and pressure on water resources; higher projected increase in the number of heat wave days and high temperature extremes; higher projected increase the number of in continuous dry days; lower projected increase in the number of continuous wet days and heavy rainfall extremes; lower provision of transport infrastructure; higher exposure of people and transport infrastructure to flooding and landslide; higher urban population density; lower urban green space cover; lower performance on economic indicators. Other indicators are around the average for the Inland Hinterlands class. The radial diagrams for Inland Hinterlands 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Inland Hinterlands 2 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '23': {
    //     g: 23, sg: 2, visible: true, name: 'Inland Hinterlands 3',
    //     keywords: 'Widely dispersed with particular concentrations in France and Czech Republic; higher landslide hazard and exposure of transport infrastructure to this hazard; higher critical infrastructure provision (including transport and broadband coverage); higher projected change in total population; stronger economic performance.',
    //     description: 'Cities and NUTS 3 regions falling within this sub-class are widely dispersed across different European countries and do not form a defined geographic cluster like some of the sub-classes. Nevertheless two countries do house the majority, France and the Czech Republic, although cities and NUTS 3 regions falling within this sub-class are also found in Hungary, Poland, Croatia, Italy and Ireland. Relative to cities and NUTS3 regions within the three other Inland Hinterlands sub-classes, Inland Hinterlands 3 has the following distinguishing features and characteristics: higher landslide hazard and exposure of transport infrastructure to this hazard; higher reduction in ice days; higher critical infrastructure provision (including transport and broadband coverage); higher projected change in migration and the number of young people; higher performance on economic indicators (including GVA and patent applications). Other indicators are around the average for the Inland Hinterlands class. The radial diagrams for Inland Hinterlands 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Inland Hinterlands 3 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '24': {
    //     g: 24, sg: 2, visible: true, name: 'Inland Hinterlands 4',
    //     keywords: 'Dominated by Poland; higher fluvial flood hazard; projected to become wetter with fewer high temperature extremes; lower exposure of transport infrastructure to landslides; higher transport infrastructure density; lower urban population density; higher proportion of built up land in urban areas; higher GVA.',
    //     description: 'Poland dominates this sub-class, with the majority of the country falling within it (aside from the major cities and the north eastern region). Cities and regions in north eastern Germany (aside from those surrounding Berlin) also fall within this sub-class, as do several in Croatia, Hungary and Slovenia. Relative to cities and NUTS3 regions within the three other Inland Hinterlands sub-classes, Inland Hinterlands 4 has the following distinguishing features and characteristics: higher fluvial flood hazard (Inland Hinterland has high fluvial flooding hazard potential from a European perspective); higher increase in the number of projected continuous wet days and wet days; lower projected increase in the number of heat wave days and high temperature extremes; lower exposure of transport infrastructure to landslides; higher transport infrastructure density; lower urban population density; higher proportion of built up land in urban areas; higher GVA. Other indicators are around the average for the Inland Hinterlands class. The radial diagrams for Inland Hinterlands 4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Inland Hinterlands 4 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '31': {
    //     g: 31, sg: 3, visible: true, name: 'Northern Lands 1',
    //     keywords: 'Dominated by Norway; coastal and mountainous; higher landslide and coastal hazard and related exposure of people and transport infrastructure; lower fluvial flooding hazard and exposure; lower wildfire hazard; projected to become wetter; lower road infrastructure density; higher critical infrastructure provision; higher economic performance; higher projected change in total population.',
    //     description: 'This sub-class encompasses Iceland (aside from Reykjavik), much of Norway (aside from the south eastern region) and parts of the west coast of Scotland. These are coastal and mountainous areas. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, Northern Lands 1 has the following distinguishing features and characteristics: higher landslide and coastal hazard; lower fluvial flooding and wildfire hazard; higher projected increase in the number of days associated with wet weather extremes; lower exposure to fluvial flooding; higher exposure of people and transport infrastructure to coastal and landslide hazards; lower road infrastructure density; higher critical infrastructure provision (e.g. airports, hospitals) per head of population (due to low population numbers); higher GVA and employment prospects; higher projected change in total population. This appears to be a very distinct sub-class with climate risk indicators generally diverging significantly from the average for the Northern Lands class. The radial diagrams for Northern Lands 1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Northern Lands 1 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '32': {
    //     g: 32, sg: 3, visible: true, name: 'Northern Lands 2',
    //     keywords: 'Sweden, south eastern Norway and Lapland; higher fluvial flooding hazard and related exposure of people and transport infrastructure; higher drought and wildfire hazard; lower projected increase in the number of continuous dry days; lower exposure of people and transport infrastructure to coastal hazard; higher proportion of people at risk of poverty; higher economic performance.',
    //     description: 'The majority of Sweden is covered by this sub-class, aside from its larger metropolitan areas. Other areas include south eastern Norway and Lapland (in Finland). These are generally sparsely populated areas, with significant forest cover punctuated by numerous lakes. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, Northern Lands 2 has the following distinguishing  features and characteristics: higher fluvial flooding; drought and wildfire hazard; lower projected increase in the number of continuous dry days; higher exposure of people and infrastructure to fluvial flooding; lower exposure of people and transport infrastructure to coastal hazard; higher proportion of people at risk of poverty; higher performance on economic indicators (including GVA and patent applications). In contrast to Northern Lands 1, many of the climate risk indicators are around the average for the Northern Lands class. The radial diagrams for Northern Lands 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Northern Lands 2 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '33': {
    //     g: 33, sg: 3, visible: true, name: 'Northern Lands 3',
    //     keywords: 'Finland and the Baltic coast; lower fluvial flooding, coastal, drought and landslide hazard; projected to become warmer and drier; lower exposure of people and transport infrastructure to landslide, fluvial flooding and coastal hazard; lower critical infrastructure provision; lower projected change in total population; lower economic performance.',
    //     description: 'Finland (aside from Lapland and the coastal regions to the south of the country) forms a key part of this sub-class. Several Baltic coast cities and NUTS 3 regions in Sweden, Germany, Latvia and Estonia are also represented. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, Northern Lands 3 has the following distinguishing features and characteristics: lower fluvial flooding, coastal, drought and landslide hazard; higher projected increase in the number of summer days and continuous dry days; lower exposure of people and transport infrastructure to landslide, fluvial flooding and coastal hazard; lower critical infrastructure provision; lower projected change in total population growth and in numbers of older and younger people; lower performance on economic indicators (including GVA and patent applications). Other indicators are around the average for the Northern Lands class. The radial diagrams for Northern Lands 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Northern Lands 3 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '34': {
    //     g: 34, sg: 3, visible: true, name: 'Northern Lands 4',
    //     keywords: 'Major Scandinavian cities; higher fluvial flood hazard; higher coastal hazard and related exposure of people and transport infrastructure; projected to become warmer and drier but with more extreme rainfall events; higher density of transport infrastructure; higher broadband coverage; higher proportion of built up urban area; higher projected change in older and younger people and migration; higher economic performance.',
    //     description: 'This sub-class picks up cities and NUTS 3 regions covering several Scandinavian capitals (including Stockholm and Helsinki) and key urban areas (including Malmo and  Stavanger). Although some capital cities are not included in this sub-class (including Oslo and Riga), their adjoining hinterland NUTS 3 regions are. All regions are coastal. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, Northern Lands 4 has the following features and characteristics: higher fluvial flood and coastal hazard; higher projected increase in the number of summer days and continuous dry days; higher projected increase in the number of very wet days; higher exposure of people and transport infrastructure to coastal hazard; higher density of transport infrastructure; higher broadband coverage and NGA provision; higher proportion of built up urban area; higher projected change in older and younger people and migration; higher performance on economic indicators. Other indicators are around the average for the Northern Lands class. The radial diagrams for Northern Lands 4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Northern Lands 4 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '41': {
    //     g: 41, sg: 4, visible: true, name: 'Southern Lands 1',
    //     keywords: 'Mediterranean islands; lower fluvial flooding hazard and related exposure of people and transport infrastructure; higher exposure of transport infrastructure to coastal flooding; higher landslide hazard; projected to become warmer and drier; lower road and rail length; higher number of ports and airports per head of population; lower proportion of people at risk of poverty; higher projected change in numbers of older and younger people; higher projected increase in total population.',
    //     description: 'A number of the Mediterranean islands fall within this sub-class including the Greek and Balearic islands. Coastal regions of southern Greece and the Algarve in Portugal are also included. Relative to cities and NUTS3 regions within the three other Southern Lands sub-classes, Southern Lands 1 has the following distinguishing features and characteristics: lower fluvial flooding hazard; higher landslide hazard; higher projected increase in the number of summer days and continuous dry days; lower projected increase in the number of wet and very wet days; lower road and rail length; higher number of ports and airports per head of population; lower exposure  of people and transport infrastructure to fluvial flooding; higher exposure  of transport infrastructure to coastal flooding; lower proportion of people at risk of poverty; higher projected change in numbers of older and younger people; higher projected increase in population density. Other indicators are around the average for the Southern Lands class. The radial diagrams for Southern Lands 1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Southern Lands 1 sub-class in relation to the Southern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '42': {
    //     g: 42, sg: 4, visible: true, name: 'Southern Lands 2',
    //     keywords: 'Mediterranean coastline; hills and mountains; higher coastal hazard; higher exposure of people and infrastructure to coastal flooding and landslides; projected to become wetter; higher proportion of built up urban area; higher road and rail length and number of transport nodes; higher broadband provision; higher projected change in total population and numbers of older and younger people; stronger economic performance.',
    //     description: 'This sub-class encompasses cities and NUTS 3 regions of France, Italy and Croatia that have Mediterranean and Adriatic coastlines. The island of Sicily is included, as are parts of Sardinia. Spain\'s north eastern Atlantic coast around Bilbao also features within this sub-class. Geographically, these are coastal, hilly and in some cases mountainous areas. Relative to cities and NUTS3 regions within the three other Southern Lands sub-classes, Southern Lands 2 has the following distinguishing features and characteristics: higher coastal hazard;  lower projected increase in the number of continuous dry days, higher projected increase in the number of continuous wet days and number of days with heavy and very heavy rainfall; higher exposure of people and transport infrastructure to coastal flooding and landslides; higher proportion of built up urban area; higher road and rail length and number of transport nodes; higher broadband and NGA provision; higher projected change in total population and numbers of older and younger people; stronger performance on economic indicators. Other indicators are around the average for the Southern Lands class. The radial diagrams for Southern Lands 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Southern Lands 2 sub-class in relation to the Southern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '43': {
    //     g: 43, sg: 4, visible: true, name: 'Southern Lands 3',
    //     keywords: 'Iberian Peninsula; higher fluvial flooding and related exposure of people and transport infrastructure, higher drought and wildfire hazard; lower landslide hazard; lower exposure of people and transport infrastructure to coastal and landslide hazard; projected to become warmer and drier; higher road and rail length; higher proportion of people at risk of poverty; higher receipt of EU priority allocations funding; lower projected change in population via migration; higher economic performance.',
    //     description: 'This sub-class makes up the majority of the Iberian Peninsula, incorporating the capital cities of Lisbon and Madrid. This sub-class includes areas that contain a diverse range of landscapes. Relative to cities and NUTS3 regions within the three other Southern Lands sub-classes, Southern Lands 3 has the following distinguishing features and characteristics: higher fluvial flooding, drought and wildfire hazard; lower landslide hazard; higher projected increase in the number of days with high temperature extremes; lower projected increase in the number of days with wet weather extremes; higher exposure  of people and transport infrastructure to fluvial flood hazard; lower exposure  of people and transport infrastructure to coastal and landslide hazard; higher road and rail length; higher proportion at risk of poverty; higher receipt of EU priority allocations funding; higher growth in the proportion of urban area covered in green and built up surfaces; lower projected change in population via migration; higher performance on economic indicators. Other indicators are around the average for the Southern Lands class. The radial diagrams for Southern Lands 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Southern Lands 3 sub-class in relation to the Southern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '44': {
    //     g: 44, sg: 4, visible: true, name: 'Southern Lands 4',
    //     keywords: 'Widely dispersed across Europe; inland; mountainous; higher fluvial flood hazard and related exposure of people and transport infrastructure; lower coastal hazard and related exposure of people and transport infrastructure; projected to become warmer and wetter; lower critical infrastructure provision; lower projected change in total population and numbers of younger and older people; lower economic performance.',
    //     description: 'Cities and NUTS3 regions including in this sub-class are widely dispersed across a number of southern European countries, from Portugal in the west to Bulgaria in the east.   The majority are located inland and many are mountainous. Relative to cities and NUTS3 regions within the three other Southern Lands sub-classes, Southern Lands 4 has the following distinguishing features and characteristics: higher fluvial flood hazard; lower coastal hazard; higher projected increase in mean temperature; higher projected increase in the number of continuous wet days and numbre of days with heavy and very heavy rainfall; higher exposure of people and transport infrastructure to fluvial flooding; lower exposure of people and transport infrastructure to coastal hazard; lower critical infrastructure provision; higher growth in the proportion of urban area covered in green and built up surfaces; lower projected change in total population and numbers of younger and older people; lower performance on economic indicators. Other indicators are around the average for the Southern Lands class. The radial diagrams for Southern Lands 4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Southern Lands 4 sub-class in relation to the Southern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '51': {
    //     g: 51, sg: 5, visible: true, name: 'North West Coasts 1',
    //     keywords: 'British Isles; rural, coastal and upland areas; higher fluvial flooding, wildfire and landslide hazard; projected to be cooler with less extreme rainfall events; exposure of people and transport infrastructure higher for fluvial flooding and landslides but lower for coastal hazards; lower water consumption pressure; longer and less dense transport networks; higher broadband coverage; higher proportion of people at risk of poverty; lower projected change in migration.',
    //     description: 'This sub-class incorporates northern and western regions of the British Isles, with one French NUTS 3 region (Seine-Maritime) also included. These tend to be coastal areas and in many cases are characterised by hilly and mountainous landscapes. They are largely rural and are relatively sparsely populated. Relative to cities and NUTS3 regions within the four other North West Coast sub-classes, North West Coasts 1 has the following distinguishing features and characteristics: higher fluvial flooding, wildfire and landslide hazard; lower projected increase in mean temperature, number of summer days and wet days; higher exposure of people and transport infrastructure to fluvial flooding and landslides; lower exposure of people and transport infrastructure to coastal hazards; lower water consumption pressure; higher road and rail lengths; lower number of road intersections and transport nodes; higher fixed broadband coverage; higher proportion of people at risk of poverty; lower projected change in migration. Other indicators are around the average for the North West Coasts class. The radial diagrams for North West Coasts 1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Coasts 1 sub-class in relation to the North West Coasts typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '52': {
    //     g: 52, sg: 5, visible: true, name: 'North West Coasts 2',
    //     keywords: 'North Sea coast and much of Denmark; urbanised; higher fluvial flood hazard; lower landslide hazard; higher exposure of people and transport infrastructure to fluvial flooding and coastal hazard but lower exposure to landslides; projected to become warmer and wetter; higher provision of critical infrastructure; higher number of patent applications.',
    //     description: 'Many of the cities and NUTS3 regions in this sub-class are located on the North Sea coast, with a number also along the coastline of the Western Baltic Sea. Much of Denmark falls within this sub-class. This sub-class does not include major cities and urban areas, but its NUTS 3 regions are nevertheless relatively urbanised in nature. Relative to cities and NUTS3 regions within the four other North West Coast sub-classes, North West Coasts 2 has the following distinguishing features and characteristics: higher fluvial flood hazard, lower landslide hazard; higher projected increase in mean temperature; lower projected increase in the number of consecutive dry days; higher projected increase in the number of consecutive wet days; higher provision of critical infrastructure; higher exposure of people and transport infrastructure to fluvial flooding and coastal hazard, and lower exposure to landslide; higher number of patent applications. Other indicators are around the average for the North West Coasts class. The radial diagrams for North West Coasts 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Coasts 2 sub-class in relation to the North West Coasts typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '53': {
    //     g: 53, sg: 5, visible: true, name: 'North West Coasts 3',
    //     keywords: 'Scottish Islands; coastal; lower fluvial flooding, wildfire and coastal hazard; higher landslide hazard; lower exposure of people and infrastructure to fluvial flooding but higher exposure to landslides; lower soil moisture stress and projected water consumption pressure; projected to be cooler and wetter; lower road and rail infrastructure lengths and densities; higher critical infrastructure provision; lower proportion of built up urban area; lower patent applications.',
    //     description: 'This sub-class contains a small number of NUTS 3 regions, and is made up of peripheral coastal and island regions including the Scottish Islands (Shetlands, Orkneys and Outer Hebrides) and the north west coast of Ireland.  Relative to cities and NUTS3 regions within the four other North West Coast sub-classes, North West Coasts 3 has the following distinguishing features and characteristics: lower fluvial flooding, wildfire and coastal hazard; higher landslide hazard; lower projected increase in the number of summer days; higher projected increase in the number of wet days; lower exposure of people and transport infrastructure to fluvial flooding; higher exposure of people and transport infrastructure to landslides; lower road and rail infrastructure lengths and densities; higher critical infrastructure provision (e.g. airports, hospitals) per head of population (due to low population numbers); lower proportion of built up urban area; lower soil moisture stress and projected water consumption pressure; lower patent applications. Other indicators are around the average for the North West Coasts class. The radial diagrams for North West Coasts 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Coasts 3 sub-class in relation to the North West Coasts typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '54': {
    //     g: 54, sg: 5, visible: true, name: 'North West Coasts 4',
    //     keywords: 'North west Atlantic coasts; peri-urban and rural areas; higher fluvial flooding hazard; higher exposure of people and transport infrastructure to fluvial flooding but lower exposure to coastal hazard;  projected to become warmer and drier; higher soil moisture stress and projected water consumption pressure; higher road and rail lengths; lower critical infrastructure provision; lower urban population densities and proportion of urban built up area; higher projected change in numbers of older people; higher patent applications.',
    //     description: 'This sub-class covers much of the Atlantic coast of France and parts of the Republic of Ireland, northern France and south west England.  These are generally peri-urban and rural regions located away from major cities and urban areas, although some are nevertheless quite densely populated. Relative to cities and NUTS3 regions within the four other North West Coast sub-classes, North West Coasts 4 has the following distinguishing features and characteristics: higher fluvial flooding hazard; higher projected number of summer days and continuous dry days; lower projected numbers of continuous wet days; higher exposure of people and transport infrastructure to fluvial flooding; lower exposure of people and transport infrastructure to coastal hazard; higher soil moisture stress and projected water consumption pressure; higher road and rail lengths; lower critical infrastructure provision; lower urban population densities and proportion of urban built up area; higher change in urban green and urban built up area; higher projected change in older people; higher patent applications. Other indicators are around the average for the North West Coasts class. The radial diagrams for North West Coasts 4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Coasts 4 sub-class in relation to the North West Coasts typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '55': {
    //     g: 55, sg: 5, visible: true, name: 'North West Coasts 5',
    //     keywords: 'Major coastal cities; lower fluvial flooding, wildfire and landslide hazard; lower exposure of people and transport infrastructure to fluvial flooding and landslide hazard but higher exposure to coastal hazard; higher water consumption pressure; denser transport infrastructure; higher broadband provision; higher projected change in population and numbers of older and younger people; higher urban population density and proportion of built up urban area.',
    //     description: 'Many of the UK\'s principal coastal cities fall within this sub-class, including Edinburgh, Cardiff, Liverpool and Southampton, as do coastal cities in other parts of north west Europe including Copenhagen and Bruges. Urban areas adjoining other European capitals (such as Belfast and Amsterdam) are also included. Relative to cities and NUTS3 regions within the four other North West Coast sub-classes, North West Coasts 5 has the following distinguishing features and characteristics: lower fluvial flooding, wildfire and landslide hazard; denser transport infrastructure; higher broadband and NGA provision; lower exposure of people and transport infrastructure to fluvial flooding and landslide hazard; higher exposure of people and transport infrastructure to coastal hazard; higher water consumption pressure; higher projected change in population and numbers of older and younger people; higher urban population density and proportion of built up urban area. Other indicators are around the average for the North West Coasts class. The radial diagrams for North West Coasts 5, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Coasts 5 sub-class in relation to the North West Coasts typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '61': {
    //     g: 61, sg: 6, visible: true, name: 'Landlocked and Elevated 1',
    //     keywords: 'North side of the Alps; higher fluvial flooding and landslide hazard; projected to become wetter with fewer high temperature extremes; higher exposure of people and transport infrastructure to fluvial flooding and landslide hazard; higher broadband coverage; higher projected change in population and numbers of older and younger people; higher GVA.',
    //     description: 'The majority of the cities and NUTS 3 regions in Switzerland and Austria fall into this sub-class, which therefore covers a significant proportion of the Alps. Upland regions in southern and western Germany are also present, as are several parts of south western Belgium, northern Italy and central Slovenia. Relative to cities and NUTS3 regions within the two other Landlocked and Elevated sub-classes, Landlocked and Elevated 1 has the following distinguishing features and characteristics: higher fluvial flooding and landslide hazard; higher projected number of wet and very wet days; lower projected high temperature extremes; higher broadband and NGA coverage; higher exposure of people and transport infrastructure to fluvial flooding and landslide hazard; higher projected change in population and numbers of older and younger people; higher GVA. Other indicators are around the average for the Landlocked and Elevated class. The radial diagrams for Landlocked and Elevated 1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Landlocked and Elevated 1 sub-class in relation to the Landlocked and Elevated typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '62': {
    //     g: 62, sg: 6, visible: true, name: 'Landlocked and Elevated 2',
    //     keywords: 'Dominated by upland areas in Germany; lower fluvial flooding and landslide hazards and related exposure of people and transport infrastructure; projected to become wetter; lower road and rail lengths but with higher road intersections and transport nodes; higher proportion of urban green and built up area; lower projected change in older and younger people and migration.',
    //     description: 'The majority of the cities and NUTS 3 regions in this sub-class are within Germany, particularly to the south and west of the country. Upland regions of Slovakia, the Czech Republic and Belgium also feature. These tend to be rural regions located away from major cities. Relative to cities and NUTS3 regions within the two other Landlocked and Elevated sub-classes, Landlocked and Elevated 2 has the following distinguishing features and characteristics: lower fluvial flooding and landslide hazards; higher projected number of wet and very wet days; lower exposure of people and transport infrastructure to fluvial flooding and landslide hazard; lower road and rail lengths but with higher road intersections and transport nodes; higher proportion of urban green and built up area; lower projected change in older and younger people and migration. Other indicators are around the average for the Landlocked and Elevated class. The radial diagrams for Landlocked and Elevated 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Landlocked and Elevated 2 sub-class in relation to the Landlocked and Elevated typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '63': {
    //     g: 63, sg: 6, visible: true, name: 'Landlocked and Elevated 3',
    //     keywords: 'South side of the Alps and French upland areas; higher wildfire hazard; projected to become warmer and drier; higher soil moisture stress and projected water consumption pressure; higher projected change in the number of young people and migration; longer but less dense transport networks; lower broadband provision; lower employment-population balance; lower GVA.',
    //     description: 'A chain of cities and NUTS 3 regions running along the southern side of the Alps, through France, Italy, Slovenia and Austria feature prominently within this sub-class, as do areas within the Vosges Mountains and Massif Central in France. Several locations in Wales, Luxembourg, Germany, Austria, Slovakia and Romania also fall within this sub-class. Some of the areas within this sub-class contain major urban centres including Luxembourg, Turin and Bologna. Relative to cities and NUTS3 regions within the two other Landlocked and Elevated sub-classes, Landlocked and Elevated 3 has the following distinguishing features and characteristics: higher wildfire hazard; higher projected increase in the number of summer days, heat wave days and consecutive dry days; lower projected increase in the number of consecutive wet days and wet/very wet days; higher soil moisture stress and projected water consumption pressure; higher projected change in the number of young people and migration; longer but less dense transport networks; lower NGA provision; lower employment-population balance; lower GVA. Other indicators are around the average for the Landlocked and Elevated class. The radial diagrams for Landlocked and Elevated 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Landlocked and Elevated 3 sub-class in relation to the Landlocked and Elevated typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '71': {
    //     g: 71, sg: 7, visible: true, name: 'North West Urban 1',
    //     keywords: 'Dominated by Germany; lower fluvial flooding hazard; higher landslide hazard; projected to become wetter; lower exposure of people and transport infrastructure to fluvial flooding; higher exposure of transport infrastructure to landslides; lower urban population density and proportion of green and built up urban area; lower projected change in total population and numbers of old and young people; higher economic performance.',
    //     description: 'All of the cities and NUTS 3 regions in this sub-class are within Germany (aside from one in south east England). These are not Germany\'s largest cities and urban areas, although they are relatively urbanised areas (from a European perspective) and some are located in the periphery of major cities such as Frankfurt and Dusseldorf.  Relative to cities and NUTS3 regions within the three other North West Urban sub-classes, North West Urban 1 has the following distinguishing features and characteristics: lower fluvial flooding hazard; higher landslide hazard; higher projected increase in the number of wet and very wet days; lower exposure of people and transport infrastructure to fluvial flooding; higher exposure of transport infrastructure to landslides; lower urban population density and proportion of green and built up urban area; lower projected change in total population and numbers of old and young people;  higher performance on economic indicators. Other indicators are around the average for the North West Urban class. The radial diagrams for North West Urban 1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Urban 1 sub-class in relation to the North West Urban typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '72': {
    //     g: 72, sg: 7, visible: true, name: 'North West Urban 2',
    //     keywords: 'Widely dispersed across different countries; higher landslide hazard; projected to become warmer and drier; lower exposure of people and transport infrastructure to fluvial flooding but higher exposure to landslides; higher broadband provision; lower urban population density; lower change in green and built up urban area; higher proportion of people at risk of poverty; higher projected change in total population and numbers of old and young people; lower economic performance.',
    //     description: 'This small sub-group is particularly prominent in the south and east of Belgium. Otherwise, the cities and NUTS 3 regions falling within it are widely dispersed and are located in England, Wales, France and Austria.  Relative to cities and NUTS3 regions within the three other North West Urban sub-classes, North West Urban 2 has the following distinguishing features and characteristics: higher landslide hazard; higher projected increase in the number of summer and heat wave days; higher projected increase in the number of continuous dry days; lower projected increase in the number of wet days; lower exposure of people and transport infrastructure to fluvial flooding; higher exposure of transport infrastructure to landslide hazard; higher fixed broadband and NGA provision; lower urban population density; lower change in green and built up urban area; higher proportion of people at risk of poverty; higher projected change in total population and the number of old and young people; lower performance on economic indicators. Other indicators are around the average for the North West Urban class. The radial diagrams for North West Urban 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Urban 2 sub-class in relation to the North West Urban typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '73': {
    //     g: 73, sg: 7, visible: true, name: 'North West Urban 3',
    //     keywords: 'Cities in Germany and south east England; higher fluvial flood hazard; lower landslide hazard; higher exposure of people and transport infrastructure to fluvial flooding but lower exposure to landslides; higher change in urban green and built up area; lower projected change in total population.',
    //     description: 'The cities and NUTS 3 regions within this sub-class are principally found in northern Germany and south east England (including some of the NUTS 3 regions that form the Greater London conurbation). These areas tend to be either part of, or situated close to, major cities  (such as Berlin, Hamburg and Bremen). The city of Manchester also falls within this sub-class.  Relative to cities and NUTS3 regions within the three other North West Urban sub-classes, North West Urban 3 has the following distinguishing features and characteristics: higher fluvial flood hazard; lower landslide hazard; higher exposure of people and transport infrastructure to flooding; lower exposure of transport infrastructure to landslide; higher change in urban green and built up area; lower projected change in total population. Other indicators are around the average for the North West Urban class. The radial diagrams for North West Urban 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Urban 3 sub-class in relation to the North West Urban typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '74': {
    //     g: 74, sg: 7, visible: true, name: 'North West Urban 4',
    //     keywords: 'Industrial cities in the UK and Germany; lower fluvial flooding, landslide and drought hazard; lower projected increase in wet and very wet days; higher soil moisture stress and projected water consumption pressure; lower exposure of people and transport infrastructure to fluvial flooding and landslide hazard; higher broadband provision; higher urban population density and proportion of green and built up urban area; higher projected change in total population and numbers of older and younger people; higher employment-population balance.',
    //     description: 'NUTS3 regions in and around major industrial cities located within the UK and Germany feature prominently in this sub-class. They include regions within Manchester, Sheffield, Birmingham, London, Dortmund, Hannover and Munich. Urban areas in the Netherlands, Belgium and Poland also fall within this sub-class.  Relative to cities and NUTS3 regions within the three other North West Urban sub-classes, North West Urban 4 has the following distinguishing features and characteristics: lower fluvial flooding, landslide and drought hazard; lower projected increase in wet and very wet days; higher soil moisture stress and projected water consumption pressure; lower exposure of people and transport infrastructure to fluvial flooding hazard; lower exposure of transport infrastructure to landslide hazard; higher fixed broadband and NGA provision; higher urban population density and proportion of green and built up urban area; higher projected change in total population and older and younger people. Other indicators are around the average for the North West Urban class. The radial diagrams for North West Urban 4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the North West Urban 4 sub-class in relation to the North West Urban typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '81': {
    //     g: 81, sg: 8, visible: true, name: 'Lowlands and Estuaries 1',
    //     keywords: 'Cities, particularly in the Netherlands and on the Baltic coast; higher drought hazard; lower projected increase in summer days and heatwave days; higher exposure of people and rail network to coastal hazard; shorter but more dense transport infrastructure networks; higher broadband coverage; higher urban population density and urban green cover; higher proportion of people at risk of poverty; higher employment-population balance.',
    //     description: 'Cities and NUTS 3 regions in the Netherlands, including Amsterdam, Groningen and the Hague, fall within this sub-class. In addition, cities on the southern Baltic coast, including Rostock, Gdansk and Riga are also included, as is Hull in England.  Relative to cities and NUTS3 regions within the two other Lowlands and Estuaries sub-classes, Lowlands and Estuaries 1 has the following distinguishing features and characteristics: higher drought hazard; lower projected increase in summer days and heatwave days; higher exposure of people and rail network to coastal hazard; shorter but more dense transport infrastructure networks; higher fixed broadband and NGA coverage; higher urban population density and urban green cover; higher proportion of people at risk of poverty; higher employment-population balance. Other indicators are around the average for the Lowlands and Estuaries class. The radial diagrams for Lowlands and Estuaries 1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Lowlands and Estuaries 1 sub-class in relation to the Lowlands and Estuaries typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '82': {
    //     g: 82, sg: 8, visible: true, name: 'Lowlands and Estuaries 2',
    //     keywords: 'Northern German coast; lower fluvial flooding, drought and wildfire hazard; higher coastal hazard; projected to become wetter; lower water projected water consumption pressure; lower road and rail length; higher density of transport infrastructure; higher broadband provision; lower urban population density; lower proportion of urban green and built up land cover; higher urban green and built up change; lower projected change in total population, migration and numbers of older and younger people; lower economic performance.',
    //     description: 'This sub-class is made up of a small cluster of German NUTS 3 regions located along the North Sea coast to the north of Hamburg and Bremen.  One area on the German Baltic coast is also included. Relative to cities and NUTS3 regions within the two other Lowlands and Estuaries sub-classes, Lowlands and Estuaries 2 has the following distinguishing features and characteristics: lower fluvial flooding, drought and wildfire hazard; higher coastal hazard; higher projected increase in wet days; lower projected increase in continuous dry days; lower water projected water consumption pressure; lower road and rail length; higher density of transport infrastructure; higher fixed broadband coverage; lower NGA provision; lower urban population density; lower proportion of urban green and built up land cover; higher urban green and built up change; lower projected change in total population, migration and numbers of older and younger people; lower performance on economic indicators.  Other indicators are around the average for the Lowlands and Estuaries class. The radial diagrams for Lowlands and Estuaries 2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Lowlands and Estuaries 2 sub-class in relation to the Lowlands and Estuaries typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   },
    //   '83': {
    //     g: 83, sg: 8, visible: true, name: 'Lowlands and Estuaries 3',
    //     keywords: 'Widely dispersed; some cities; higher fluvial flooding and wildfire hazard; lower coastal and drought hazard; projected to become warmer and drier; higher projected water consumption pressure; higher exposure of people to fluvial flooding; lower exposure of people and rail network to coastal hazard; longer road and rail length; higher number of hospital sites per 1000 people; higher projected change in total population, migration and numbers of older and younger people; higher number of patent applications.',
    //     description: 'Cities and NUTS 3 regions contained within this sub-class are dispersed across Germany, the Netherlands, France and Italy. They include cities such as Bordeaux, Rotterdam, Bremen, and Utrecht. The Italian NUTS 3 regions around Venice on the northern Adriatic coast are also present within this sub-class.  These regions are located on or close to the estuaries and deltas of major rivers including the Po, Dordogne and Rhine. Relative to cities and NUTS3 regions within the two other Lowlands and Estuaries sub-classes, Lowlands and Estuaries 3 has the following distinguishing features and characteristics: higher fluvial flooding and wildfire hazard; lower coastal and drought hazard; higher projected increase in summer days, heatwave days and continuous dry days; lower projected increase in wet days; higher projected water consumption pressure; higher exposure of people to fluvial flooding; lower exposure of people and rail network to coastal hazard; longer road and rail length; higher number of hospital sites per 1000 people; higher projected change in total population, migration and numbers of older and younger people; higher number of patent applications. Other indicators are around the average for the Lowlands and Estuaries class. The radial diagrams for Lowlands and Estuaries 3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the Lowlands and Estuaries 3 sub-class in relation to the Lowlands and Estuaries typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
    //   }
    // },

    /**
     * Creates the NUTS3 layer.
     */
    // createLayer: function() {
    //
    //   // TODO: RESIN - Check next line.
    //   // spinnerViewModel.isVisible = true;
    //
    //   // Get the named basemap layer.
    //   let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;
    //
    //   this.geoJSON = AppData.nuts3Polygons;
    //
    //   this.mapLayer = L.geoJSON(this.geoJSON, {
    //
    //     /**
    //      * The NUTS3 layer attribution to insert on the map.
    //      */
    //     attribution: MapLayers.nuts3.attribution,
    //
    //     // TODO: RESIN - Correct rendering code to allow the use of the current basemap and the current rendering method (typology supergroups / groups or indicators)
    //     style: function(feature) {
    //       // TODO: RESIN - Change next line.
    //
    //       let isVisible = MapLayers.nuts3.supergroups[feature.properties.SG].visible;
    //
    //       if (isVisible) {
    //         return MapLayers.nuts3.namedBasemapLayers[namedBaseMap].supergroupStyles[feature.properties.SG];
    //       }
    //       else {
    //         return MapLayers.nuts3.namedBasemapLayers[namedBaseMap].defaultStyle;
    //       }
    //     },
    //
    //     /**
    //      * Define the behaviour of each feature.
    //      *
    //      * @param feature - The feature whose behaviour will be defined.
    //      * @param layer - The internal layer of each feature.
    //      */
    //     onEachFeature: function(feature, layer) {
    //       layer.on({
    //
    //         /**
    //          * Raised when the mouse is over a feature.
    //          */
    //         mouseover: function() {
    //           MapLayers.nuts3.showTooltip(layer);
    //           MapLayers.nuts3.highlightNuts3(feature, layer);
    //         },
    //
    //         /**
    //          * Raised when the mouse is going out of a feature.
    //          */
    //         mouseout: function() {
    //           MapLayers.nuts3.hideTooltip(layer);
    //           MapLayers.nuts3.resetNuts3Style(feature, layer, false);
    //           MapLayers.nuts3.reselectNuts3();
    //         },
    //
    //         /**
    //          * Raised when a feature is clicked.
    //          */
    //         click: function() {
    //           MapLayers.nuts3.selectNuts3(feature, layer);
    //           MapLayers.nuts3.updateInfo(feature);
    //         },
    //
    //         /**
    //          * Raised when a feature is double clicked.
    //          */
    //         dblclick: function() {
    //           //MapLayers.nuts3.resetNuts3Style(feature, layer);
    //           //alert('double clicked');
    //           //map.doubleClickZoom.disable();
    //           //map.doubleClickZoom.enable()
    //           // TODO: This is a problem. A click event is fired before the double click. We need to change this behaviour.
    //           //Spatial.map.fitBounds(layer.getBounds());
    //         }
    //
    //       });
    //     }
    //   });
    //
    //   // Add the layer in to the map and make sure it is visible.
    //   this.mapLayer.addTo(Spatial.map);
    //   this.mapLayer.bringToFront();
    //
    //   // Loop through all the internal layers.
    //   // Create the feature to internal layer dictionary and bind the layer tooltips.
    //   this.mapLayer.eachLayer(function(layer) {
    //     MapLayers.nuts3.featureToInternalLayerDictionary[layer.feature.properties.NUTS_ID] = layer._leaflet_id;
    //
    //     layer.bindTooltip('', {
    //       // TODO: RESIN - Check here the final tooltip options.
    //       direction: 'top', // TODO: RESIN - APPVAR
    //       offset: [0, -30], // TODO: RESIN - APPVAR
    //       sticky: true
    //     });
    //   });
    //
    // },

    /**
     * Renders the NUTS3 layer.
     */
    // renderLayer: function() {
    //
    //   // Get the current basemap. This is used to decide the symbology of the NUTS3 polygons.
    //   let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;
    //
    //   // Get the current tab.
    //   let currentTab = symbologyViewModel.currentTab;
    //
    //   // Check whether NUTS3 features exist or not.
    //   if (this.geoJSON !== undefined || this.geoJSON !== null) {
    //
    //     // Loop through the NUTS3 features.
    //     for (i = 0; i < this.geoJSON.features.length; i++) {
    //
    //       // Get the NUTS3 feature, attribute name and the class value.
    //       let feature = this.geoJSON.features[i];
    //
    //       if (currentTab !== 'indicators') {
    //         // Render the layer based on typology classes (supergroups or groups).
    //         let attributeName = this.typologyLevelDictionary[currentTab].attributeName;
    //         let classValue = feature.properties[attributeName].toString();
    //
    //         // Render the NUTS3 polygon having the specified typology class.
    //         this.renderNuts3PolygonByTypologyClass(feature, classValue, currentTab, currentBaseMap);
    //       }
    //       else {
    //         let indicator = symbologyViewModel.selectedIndicators[symbologyViewModel.currentDomain][0];
    //         let zscore = feature.properties[indicator + 'Z'];
    //
    //         // Render the layer based on the selected indicator.
    //         this.renderNuts3PolygonByIndicator(feature, indicator, zscore);
    //       }
    //
    //     }
    //
    //   }
    //
    //   MapLayers.nuts3.reselectNuts3();
    //
    // },

    /**
     * Renders the specified NUTS3 polygon.
     *
     * @param feature - The feature whose style will be changed.
     * @param typologyClass - The typology class of the NUTS3 polygon.
     * @param currentTypologyLevel - The level of the typology class (ie: supergroup or group).
     * @param currentBaseMap - The current basemap.
     */
    // renderNuts3PolygonByTypologyClass: function(feature, typologyClass, currentTypologyLevel, currentBaseMap) {
    //
    //   // Get the associated feature layer.
    //   let internalLayerKey = this.featureToInternalLayerDictionary[feature.properties.NUTS_ID];
    //   let featureLayer = this.mapLayer._layers[internalLayerKey];
    //
    //   let basemap = this.namedBasemapLayers[currentBaseMap];
    //
    //   // Set the style of the feature layer based on its typology class.
    //   if (this[currentTypologyLevel][typologyClass].visible) {
    //     let styleName = this.typologyLevelDictionary[currentTypologyLevel].styleName;
    //     featureLayer.setStyle(basemap[styleName][typologyClass]);
    //   }
    //   else {
    //     featureLayer.setStyle(basemap.defaultStyle);
    //   }
    //
    // },

    /**
     * Renders the specified NUTS3 polygon based on the z-score value of a specified indicator.
     * The z-score is classified by the function according to its distance from the mean (0).
     * Classes have the size of a standard deviation.
     *
     * @param feature - The feature that will be rendered.
     * @param indicator - The indicator name used to render the feature.
     * @param zscore - The z-score of the indicator whose class will be computed to allow a colour to be assigned to it.
     */
    // renderNuts3PolygonByIndicator: function(feature, indicator, zscore) {
    //
    //   // Get the associated feature layer.
    //   let internalLayerKey = this.featureToInternalLayerDictionary[feature.properties.NUTS_ID];
    //   let featureLayer = this.mapLayer._layers[internalLayerKey];
    //
    //   // Get the standard deviation.
    //   let stdev = AppData.indicatorZScoresStatistics[indicator].stdev;
    //
    //   let i = -1;
    //   let gradient = null;
    //
    //   // Check if zscore is positive or negative.
    //   if (zscore > 0) {
    //     // TODO: Use Math.trunc() to do this.
    //     // Find out how many standard deviations away lies the zscore from the mean (0).
    //     while (stdev * (i + 1) < zscore) {
    //       i++;
    //     }
    //
    //     // Get the gradient.
    //     gradient = symbologyViewModel.positiveGradients.filter(
    //       g => g.value === symbologyViewModel.selectedPositiveGradient
    //     )[0];
    //   }
    //   else {
    //     zscore = zscore * (-1);
    //
    //     // TODO: Use Math.trunc() to do this.
    //     // Find out how many standard deviations away lies the zscore from the mean (0).
    //     while (stdev * (i + 1) < zscore) {
    //       i++;
    //     }
    //
    //     // Get the gradient.
    //     gradient = symbologyViewModel.negativeGradients.filter(
    //       g => g.value === symbologyViewModel.selectedNegativeGradient
    //     )[0];
    //   }
    //
    //   // Make sure that classes with a distance more than 4 standard deviations
    //   // are drawn using the fill colour of the 4th class.
    //   if (i > 3) {
    //     i = 3;
    //   }
    //
    //   // Create the z-score class style and set it to the feature.
    //   let style = {
    //     stroke: true,
    //     color: '#282828',
    //     weight: 0.4,
    //     opacity: 1,
    //     fill: true,
    //     fillColor: gradient.OneStDevGradient[i],
    //     fillOpacity: 0.7
    //   };
    //
    //   featureLayer.setStyle(style);
    //
    // },

    /**
     * Changes the style of a specified typology class.
     * @param typologyClass - The typology class whose style will be changed.
     */
    // changeTypologyClassStyle: function(typologyClass) {
    //
    //   // Get the current basemap. This is used to decide the symbology of the NUTS3 polygons.
    //   let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;
    //
    //   // Get the current typology level.
    //   let currentTypologyLevel = symbologyViewModel.currentTab;
    //
    //   // Check whether NUTS3 features exist or not.
    //   if (this.geoJSON !== undefined || this.geoJSON !== null) {
    //
    //     // Loop through the NUTS3 features.
    //     for (i = 0; i < this.geoJSON.features.length; i++) {
    //
    //       // Get the NUTS3 feature, attribute name and the class value.
    //       let feature = this.geoJSON.features[i];
    //       let attributeName = this.typologyLevelDictionary[currentTypologyLevel].attributeName;
    //       let classValue = feature.properties[attributeName].toString();
    //
    //       // Render the NUTS3 polygon having the specified typology class.
    //       if (classValue === typologyClass) {
    //         this.renderNuts3PolygonByTypologyClass(feature, typologyClass, currentTypologyLevel, currentBaseMap);
    //       }
    //
    //     }
    //
    //   }
    //
    // },

    /**
     * Highlights a NUTS3 polygon.
     *
     * @param feature - The feature that will be highlighted.
     * @param layer - The internal layer of the feature that will be highlighted.
     */
    // highlightNuts3: function(feature, layer) {
    //
    //   // Get the named basemap layer.
    //   let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;
    //
    //   // Highlight the current NUTS3.
    //   layer.setStyle(this.namedBasemapLayers[namedBaseMap].defaultHighlightingStyle);
    //
    //   if (!L.Browser.ie && !L.Browser.opera) {
    //     layer.bringToFront();
    //   }
    //
    // },

    /**
     * Resets the NUTS3 style. This is called once a mouseout event has been fired.
     *
     * @param feature - The feature that whose style will be reset.
     * @param layer - The internal layer of the feature whose style will be reset.
     * @param forceReset - Forces the function to reset the NUTS3 style.
     */
    // resetNuts3Style: function(feature, layer, forceReset) {
    //
    //   // Get the current basemap. This is used to decide the symbology of the NUTS3 polygons.
    //   let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;
    //
    //   // Get the current tab.
    //   let currentTab = symbologyViewModel.currentTab;
    //
    //   if (currentTab !== 'indicators') {
    //     // Get the NUTS3 attribute name and the class value.
    //     let attributeName = this.typologyLevelDictionary[currentTab].attributeName;
    //     let classValue = feature.properties[attributeName].toString();
    //
    //     // Make sure styles of only the non selected NUTS3 polygons are reset.
    //     if (this.selectedFeature !== feature || forceReset) {
    //       // Render the NUTS3 polygon having the specified typology class.
    //       this.renderNuts3PolygonByTypologyClass(feature, classValue, currentTab, currentBaseMap);
    //     }
    //
    //     // // Render the layer based on typology classes (supergroups or groups).
    //     // let attributeName = this.typologyLevelDictionary[currentTab].attributeName;
    //     // let classValue = feature.properties[attributeName].toString();
    //     //
    //     // // Render the NUTS3 polygon having the specified typology class.
    //     // this.renderNuts3PolygonByTypologyClass(feature, classValue, currentTab, currentBaseMap);
    //   }
    //   else {
    //     let indicator = symbologyViewModel.selectedIndicators[symbologyViewModel.currentDomain][0];
    //     let zscore = feature.properties[indicator + 'Z'];
    //
    //     // Make sure styles of only the non selected NUTS3 polygons are reset.
    //     if (this.selectedFeature !== feature || forceReset) {
    //       // Render the layer based on the selected indicator.
    //       this.renderNuts3PolygonByIndicator(feature, indicator, zscore);
    //     }
    //   }
    //
    // },

    /**
     * Select the specified NUTS3 feature.
     *
     * @param feature - The feature that will be selected.
     * @param layer - The internal layer that will be selected.
     */
    // selectNuts3: function(feature, layer) {
    //
    //   // Set the current NUTS3 Panel.
    //   if (AppState.currentNuts3Panel === 'symbology') {
    //     AppState.currentNuts3Panel = 'overview';
    //   }
    //
    //   // Unselect the NUTS3 feature if a selected one exists.
    //   if (this.selectedFeature !== null) {
    //     this.deselectNuts3();
    //   }
    //
    //   // Select the NUTS3 feature.
    //   this.selectedFeature = feature;
    //   this.selectedInternalLayer = layer;
    //
    //   // Highlight the NUTS3 feature.
    //   this.highlightNuts3(this.selectedFeature, this.selectedInternalLayer);
    //
    //   AppState.setPanelsVisibility();
    //
    // },

    /**
     * Deselects the selected NUTS3 feature.
     */
    // deselectNuts3: function() {
    //   this.resetNuts3Style(this.selectedFeature, this.selectedInternalLayer, true);
    //
    //   this.selectedFeature = null;
    //   this.selectedInternalLayer = null;
    // },

    /**
     * Reselects the NUTS3 feature.
     */
    // reselectNuts3: function() {
    //   if (this.selectedFeature !== null) {
    //     this.highlightNuts3(this.selectedFeature, this.selectedInternalLayer);
    //   }
    // },

    /**
     * Updates the information displayed on the web page based on the selected feature.
     *
     * @param feature - The features whose attributes will be displayed on the web page.
     */
    // updateInfo: function(feature) {
    //   overviewInfoViewModel.updateView(feature);
    // },

    /**
     * Shows an information tooltip (name, supergroup, group) over a NUTS3 region.
     *
     * @param layer - The internal layer whose information will be displayed over using the tooltip.
     */
    // showTooltip: function(layer) {
    //
    //   // TODO: RESIN - This is what needs to change to support name of NUTS3 in native language.
    //   //this.nuts3Name = AppData.nuts3[nuts3id].nameAscii;
    //   //this.nuts3NativeName = AppData.nuts3[nuts3id].nutsName;
    //
    //   let properties = layer.feature.properties;
    //
    //   let nuts3id = properties.NUTS_ID;
    //   let sg = properties.SG;
    //   let g = properties.G;
    //
    //   let html = '<div>' +
    //
    //                // ASCII Name
    //                '<div>' +
    //                  '<h5 class="text-danger">' + AppData.nuts3[nuts3id].nameAscii + '</h5>' +
    //                '</div>' +
    //
    //                '<table class="table table-sm mt-4">' +
    //                  '<tbody>' +
    //
    //                    // Supergroup
    //                    '<tr>' +
    //                      '<td class="pb-3">' +
    //                        '<div class="typology-class-header">Class:</div>' +
    //                        '<h6>' + MapLayers.nuts3.supergroups[sg].name + '</h6>' +
    //                      '</td>' +
    //                    '</tr>' +
    //
    //                    // Group
    //                    '<tr>' +
    //                      '<td>' +
    //                        '<div class="typology-class-header">Subclass:</div>' +
    //                        '<h6>' + MapLayers.nuts3.groups[g].name + '</h6>' +
    //                      '</td>' +
    //                    '</tr>' +
    //
    //                  '</tbody>' +
    //                '</table>' +
    //
    //              '</div>';
    //
    //   layer.setTooltipContent(html);
    //
    //   if (!layer.isTooltipOpen()) {
    //     layer.openTooltip();
    //   }
    //
    // },

    /**
     * Hides the information tooltip over a NUTS3 region.
     *
     * @param layer - The internal layer whose tooltip will be hidden.
     */
    // hideTooltip: function(layer) {
    //   if (layer.isTooltipOpen()) {
    //     layer.closeTooltip();
    //   }
    //
    //   layer.setTooltipContent('');
    // }

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
    center: [55, 31],
    zoom: 4,
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
      maxZoom: Spatial.mapOptions.maxZoom
    });

    // Move the attribution control to the bottom-left.
    Spatial.map.attributionControl.setPosition('bottomleft');

    // Create the sidebar and add it on the map.
    // TODO: RESIN
    // Spatial.sidebar = L.control.sidebar(Spatial.Members.sidebarName, { position: Spatial.Members.sidebarPosition });
    // Spatial.sidebar.addTo(Spatial.map);

    BaseMapLayers.setNamedBasemapLayers();
    BaseMapLayers.createBaseMapLayers();

    MapLayers.lsoas.createLayer();

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
// let sidebarTabsViewModel = new Vue({
//
//   /**
//    * The name of the view model.
//    */
//   el: '#sidebarTabsVM',
//
//   /**
//    * The model of the view model.
//    */
//   data: {
//
//   },
//
//   /**
//    * The methods of the view model.
//    */
//   methods: {
//
//     /**
//      * Hides the tooltip that is displayed on the specified element.
//      * @param element - The element from which the tooltip will be hidden.
//      */
//     hideTooltip(element) {
//       if (AppState.bootstrapMaterialTooltipEnabled) {
//         $(element).tooltip('hide');
//       }
//     }
//
//   }
//
// });

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
      'light':     { name: 'Light',     iconName: 'map',            description: 'Light Basemap' },
      'dark':      { name: 'Dark',      iconName: 'map',            description: 'Dark Basemap' },
      'roads':     { name: 'Roads',     iconName: 'directions_car', description: 'Roads Basemap' },
      'physical':  { name: 'Physical',  iconName: 'panorama',       description: 'Physical Basemap' }, /* 'image, panorama, photo' */
      'terrain':   { name: 'Terrain',   iconName: 'terrain',        description: 'Terrain Basemap' },  /* 'terrain, landscape' */
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

      //MapLayers.nuts3.renderLayer();
      MapLayers.lsoas.renderLayer();

    }

  }

});

/**
 * The symbologyViewModel provides tha data and logic
 * to allow a user to setup the NUTS3 layer symbology.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
// let symbologyViewModel = new Vue({
//
//   /**
//    * The name of the view model.
//    */
//   el: '#symbologyVM',
//
//   /**
//    * The model of the view model.
//    */
//   data: {
//
//     /**
//      * Indicates whether the view is visible or not.
//      */
//     isVisible: true,
//
//     /**
//      * The current tab panel.
//      */
//     currentTab: 'supergroups',
//
//     /**
//      * The current domain in the indicators tab panel.
//      */
//     currentDomain: 'hazard',
//
//     /**
//      * Provides a dictionary of objects to allow the rendering of the view.
//      */
//     dictionary: {
//       'supergroups': {
//         name: 'Classes',
//         '1': { isInformationPanelVisible: false, icon: 'far fa-building',     isRadarDiagramVisible: false },
//         '2': { isInformationPanelVisible: false, icon: 'fas fa-leaf',         isRadarDiagramVisible: false },
//         '3': { isInformationPanelVisible: false, icon: 'fas fa-snowflake',    isRadarDiagramVisible: false },
//         '4': { isInformationPanelVisible: false, icon: 'fas fa-sun',          isRadarDiagramVisible: false },
//         '5': { isInformationPanelVisible: false, icon: 'fab fa-servicestack', isRadarDiagramVisible: false },
//         '6': { isInformationPanelVisible: false, icon: 'far fa-image',        isRadarDiagramVisible: false },
//         '7': { isInformationPanelVisible: false, icon: 'fas fa-tint',         isRadarDiagramVisible: false },
//         '8': { isInformationPanelVisible: false, icon: 'fab fa-firstdraft',   isRadarDiagramVisible: false }
//       },
//       'groups': {
//         name: 'Subclasses',
//         '1':  { isInformationPanelVisible: false, icon: 'far fa-building',     isRadarDiagramVisible: false },
//         '11': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '12': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '13': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '14': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '2':  { isInformationPanelVisible: false, icon: 'fas fa-leaf',         isRadarDiagramVisible: false },
//         '21': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '22': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '23': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '24': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '3':  { isInformationPanelVisible: false, icon: 'fas fa-snowflake',    isRadarDiagramVisible: false },
//         '31': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '32': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '33': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '34': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '4':  { isInformationPanelVisible: false, icon: 'fas fa-sun',          isRadarDiagramVisible: false },
//         '41': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '42': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '43': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '44': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '5':  { isInformationPanelVisible: false, icon: 'fab fa-servicestack', isRadarDiagramVisible: false },
//         '51': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '52': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '53': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '54': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '55': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '6':  { isInformationPanelVisible: false, icon: 'far fa-image',        isRadarDiagramVisible: false },
//         '61': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '62': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '63': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '7':  { isInformationPanelVisible: false, icon: 'fas fa-tint',         isRadarDiagramVisible: false },
//         '71': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '72': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '73': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '74': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '8':  { isInformationPanelVisible: false, icon: 'fab fa-firstdraft',   isRadarDiagramVisible: false },
//         '81': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '82': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
//         '83': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false }
//       },
//       'indicators': {
//         name: 'Indicators',
//         'I001': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I002': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I003': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I004': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I005': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I006': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I007': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I008': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I009': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I010': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I011': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I012': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I013': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I014': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I015': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I016': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I017': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I018': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I019': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I020': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I021': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I022': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I023': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I024': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I025': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I026': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I030': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I032': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I033': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I035': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I036': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I037': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I038': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I039': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I040': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I042': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I043': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I045': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I046': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I047': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I048': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I049': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I050': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I052': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I053': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I055': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I056': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I057': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I058': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I059': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I060': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I061': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I062': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I063': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I064': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I065': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I066': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I067': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I068': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I069': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I070': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I073': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I075': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I076': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I077': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I078': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I079': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I081': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
//         'I082': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' }
//       },
//       'domains': [
//         { key: 'hazard',      name: 'Hazard'          },
//         { key: 'exposure',    name: 'Exposure'        },
//         { key: 'sensitivity', name: 'Sensitivity'     },
//         { key: 'adaptivity',  name: 'Adapt. Capacity' }
//       ]
//     },
//
//     /**
//      * The supergroups metadata in the form of a dictionary whose keys are the values of supergroups.
//      */
//     supergroups: MapLayers.nuts3.supergroups,
//
//     /**
//      * The groups metadata in the form of a dictionary whose keys are the values of groups.
//      */
//     groups: MapLayers.nuts3.groups,
//
//     /**
//      * The array of domain objects used to render portions of the view based on indicator domains.
//      */
//     domains: AppData.domains,
//
//     /**
//      * The dictionary of indicator objects used to render portions of the view based on indicators grouped per domain.
//      */
//     domainDictionaryIndicators: AppData.domainDictionaryIndicators,
//
//     /**
//      * The icon used on the information buttons.
//      */
//     infoIconName: 'help_outline', // help, help_outline, live_help, announcement, feedback, info
//
//     /**
//      * The icon used on the radar diagram buttons.
//      */
//     radarIconName: 'timeline', // timeline, bar_chart, track_changes, equalizer, trending_up, insert_chart_outlined, show_chart,
//
//     /**
//      * The array of selected supergroups used by the list of supergroup checkboxes.
//      */
//     checkedSupergroups: [ '1', '2', '3', '4', '5', '6', '7', '8' ],
//
//     /**
//      * The array of selected groups used by the list of group checkboxes.
//      */
//     // TODO: RESIN - Checked Groups need to be updated depending on the final typology.
//     checkedGroups: [
//       '11', '12', '13', '14',
//       '21', '22', '23', '24',
//       '31', '32', '33', '34',
//       '41', '42', '43', '44',
//       '51', '52', '53', '54', '55',
//       '61', '62', '63',
//       '71', '72', '73', '74',
//       '81', '82', '83'
//     ],
//
//     /**
//      * The selected indicators used by the list of the radio buttons in the indicators tab panel.
//      */
//     selectedIndicators: {
//       hazard:      [ 'I001' ],
//       exposure:    [ 'I030' ],
//       sensitivity: [ 'I060' ],
//       adaptivity:  [ 'I077' ]
//     },
//
//     /**
//      * Gradients used to render the positive values of indicators.
//      */
//     positiveGradients: [
//       {
//         name: 'Alizarin',
//         value: 'alizarin',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.alizarin300.hex,
//           ColorPalettes.FlatDesign.alizarin500.hex,
//           ColorPalettes.FlatDesign.alizarin700.hex,
//           ColorPalettes.FlatDesign.alizarin900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.alizarin300.hex,
//           ColorPalettes.FlatDesign.alizarin300.hex,
//           ColorPalettes.FlatDesign.alizarin500.hex,
//           ColorPalettes.FlatDesign.alizarin500.hex,
//           ColorPalettes.FlatDesign.alizarin700.hex,
//           ColorPalettes.FlatDesign.alizarin700.hex,
//           ColorPalettes.FlatDesign.alizarin900.hex,
//           ColorPalettes.FlatDesign.alizarin900.hex
//         ]
//       },
//       {
//         name: 'Amber',
//         value: 'amber',
//         OneStDevGradient: [
//           ColorPalettes.Material.orange300.hex,
//           ColorPalettes.Material.orange500.hex,
//           ColorPalettes.Material.orange700.hex,
//           ColorPalettes.Material.orange900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.orange300.hex,
//           ColorPalettes.Material.orange300.hex,
//           ColorPalettes.Material.orange500.hex,
//           ColorPalettes.Material.orange500.hex,
//           ColorPalettes.Material.orange700.hex,
//           ColorPalettes.Material.orange700.hex,
//           ColorPalettes.Material.orange900.hex,
//           ColorPalettes.Material.orange900.hex
//         ]
//       },
//       {
//         name: 'Amethyst',
//         value: 'amethyst',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.amethyst300.hex,
//           ColorPalettes.FlatDesign.amethyst500.hex,
//           ColorPalettes.FlatDesign.amethyst700.hex,
//           ColorPalettes.FlatDesign.amethyst900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.amethyst300.hex,
//           ColorPalettes.FlatDesign.amethyst300.hex,
//           ColorPalettes.FlatDesign.amethyst500.hex,
//           ColorPalettes.FlatDesign.amethyst500.hex,
//           ColorPalettes.FlatDesign.amethyst700.hex,
//           ColorPalettes.FlatDesign.amethyst700.hex,
//           ColorPalettes.FlatDesign.amethyst900.hex,
//           ColorPalettes.FlatDesign.amethyst900.hex
//         ]
//       },
//       {
//         name: 'Brown',
//         value: 'brown',
//         OneStDevGradient: [
//           ColorPalettes.Material.brown300.hex,
//           ColorPalettes.Material.brown500.hex,
//           ColorPalettes.Material.brown700.hex,
//           ColorPalettes.Material.brown900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.brown300.hex,
//           ColorPalettes.Material.brown300.hex,
//           ColorPalettes.Material.brown500.hex,
//           ColorPalettes.Material.brown500.hex,
//           ColorPalettes.Material.brown700.hex,
//           ColorPalettes.Material.brown700.hex,
//           ColorPalettes.Material.brown900.hex,
//           ColorPalettes.Material.brown900.hex
//         ]
//       },
//       {
//         name: 'Deep Orange',
//         value: 'deepOrange',
//         OneStDevGradient: [
//           ColorPalettes.Material.deepOrange300.hex,
//           ColorPalettes.Material.deepOrange500.hex,
//           ColorPalettes.Material.deepOrange700.hex,
//           ColorPalettes.Material.deepOrange900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.deepOrange300.hex,
//           ColorPalettes.Material.deepOrange300.hex,
//           ColorPalettes.Material.deepOrange500.hex,
//           ColorPalettes.Material.deepOrange500.hex,
//           ColorPalettes.Material.deepOrange700.hex,
//           ColorPalettes.Material.deepOrange700.hex,
//           ColorPalettes.Material.deepOrange900.hex,
//           ColorPalettes.Material.deepOrange900.hex
//         ]
//       },
//       {
//         name: 'Gold',
//         value: 'gold',
//         OneStDevGradient: [
//           ColorPalettes.PatternFly.gold400.hex,
//           ColorPalettes.PatternFly.gold500.hex,
//           ColorPalettes.PatternFly.gold600.hex,
//           ColorPalettes.PatternFly.gold700.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.PatternFly.gold400.hex,
//           ColorPalettes.PatternFly.gold400.hex,
//           ColorPalettes.PatternFly.gold500.hex,
//           ColorPalettes.PatternFly.gold500.hex,
//           ColorPalettes.PatternFly.gold600.hex,
//           ColorPalettes.PatternFly.gold600.hex,
//           ColorPalettes.PatternFly.gold700.hex,
//           ColorPalettes.PatternFly.gold700.hex
//         ]
//       },
//       {
//         name: 'Ochre',
//         value: 'orangeFlatDesign',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.orange300.hex,
//           ColorPalettes.FlatDesign.orange500.hex,
//           ColorPalettes.FlatDesign.orange700.hex,
//           ColorPalettes.FlatDesign.orange900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.orange300.hex,
//           ColorPalettes.FlatDesign.orange300.hex,
//           ColorPalettes.FlatDesign.orange500.hex,
//           ColorPalettes.FlatDesign.orange500.hex,
//           ColorPalettes.FlatDesign.orange700.hex,
//           ColorPalettes.FlatDesign.orange700.hex,
//           ColorPalettes.FlatDesign.orange900.hex,
//           ColorPalettes.FlatDesign.orange900.hex
//         ]
//       },
//       {
//         name: 'Pink',
//         value: 'pink',
//         OneStDevGradient: [
//           ColorPalettes.Material.pink300.hex,
//           ColorPalettes.Material.pink500.hex,
//           ColorPalettes.Material.pink700.hex,
//           ColorPalettes.Material.pink900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.pink300.hex,
//           ColorPalettes.Material.pink300.hex,
//           ColorPalettes.Material.pink500.hex,
//           ColorPalettes.Material.pink500.hex,
//           ColorPalettes.Material.pink700.hex,
//           ColorPalettes.Material.pink700.hex,
//           ColorPalettes.Material.pink900.hex,
//           ColorPalettes.Material.pink900.hex
//         ]
//       },
//       {
//         name: 'Pomegranate',
//         value: 'pomegranate',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.pomegranate300.hex,
//           ColorPalettes.FlatDesign.pomegranate500.hex,
//           ColorPalettes.FlatDesign.pomegranate700.hex,
//           ColorPalettes.FlatDesign.pomegranate900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.pomegranate300.hex,
//           ColorPalettes.FlatDesign.pomegranate300.hex,
//           ColorPalettes.FlatDesign.pomegranate500.hex,
//           ColorPalettes.FlatDesign.pomegranate500.hex,
//           ColorPalettes.FlatDesign.pomegranate700.hex,
//           ColorPalettes.FlatDesign.pomegranate700.hex,
//           ColorPalettes.FlatDesign.pomegranate900.hex,
//           ColorPalettes.FlatDesign.pomegranate900.hex
//         ]
//       },
//       {
//         name: 'Pumpkin',
//         value: 'pumpkin',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.pumpkin300.hex,
//           ColorPalettes.FlatDesign.pumpkin500.hex,
//           ColorPalettes.FlatDesign.pumpkin700.hex,
//           ColorPalettes.FlatDesign.pumpkin900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.pumpkin300.hex,
//           ColorPalettes.FlatDesign.pumpkin300.hex,
//           ColorPalettes.FlatDesign.pumpkin500.hex,
//           ColorPalettes.FlatDesign.pumpkin500.hex,
//           ColorPalettes.FlatDesign.pumpkin700.hex,
//           ColorPalettes.FlatDesign.pumpkin700.hex,
//           ColorPalettes.FlatDesign.pumpkin900.hex,
//           ColorPalettes.FlatDesign.pumpkin900.hex
//         ]
//       },
//       {
//         name: 'Purple',
//         value: 'purple',
//         OneStDevGradient: [
//           ColorPalettes.Material.purple300.hex,
//           ColorPalettes.Material.purple500.hex,
//           ColorPalettes.Material.purple700.hex,
//           ColorPalettes.Material.purple900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.purple300.hex,
//           ColorPalettes.Material.purple300.hex,
//           ColorPalettes.Material.purple500.hex,
//           ColorPalettes.Material.purple500.hex,
//           ColorPalettes.Material.purple700.hex,
//           ColorPalettes.Material.purple700.hex,
//           ColorPalettes.Material.purple900.hex,
//           ColorPalettes.Material.purple900.hex
//         ]
//       },
//       {
//         name: 'Red',
//         value: 'red',
//         OneStDevGradient: [
//           ColorPalettes.Material.red300.hex,
//           ColorPalettes.Material.red500.hex,
//           ColorPalettes.Material.red700.hex,
//           ColorPalettes.Material.red900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.red300.hex,
//           ColorPalettes.Material.red300.hex,
//           ColorPalettes.Material.red500.hex,
//           ColorPalettes.Material.red500.hex,
//           ColorPalettes.Material.red700.hex,
//           ColorPalettes.Material.red700.hex,
//           ColorPalettes.Material.red900.hex,
//           ColorPalettes.Material.red900.hex
//         ]
//       },
//       {
//         name: 'Sand',
//         value: 'orangePatternFly',
//         OneStDevGradient: [
//           ColorPalettes.PatternFly.orange200.hex,
//           ColorPalettes.PatternFly.orange400.hex,
//           ColorPalettes.PatternFly.orange600.hex,
//           ColorPalettes.PatternFly.orange700.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.PatternFly.orange200.hex,
//           ColorPalettes.PatternFly.orange200.hex,
//           ColorPalettes.PatternFly.orange400.hex,
//           ColorPalettes.PatternFly.orange400.hex,
//           ColorPalettes.PatternFly.orange600.hex,
//           ColorPalettes.PatternFly.orange600.hex,
//           ColorPalettes.PatternFly.orange700.hex,
//           ColorPalettes.PatternFly.orange700.hex
//         ]
//       },
//       {
//         name: 'Sunflower',
//         value: 'sunflower',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.sunflower300.hex,
//           ColorPalettes.FlatDesign.sunflower500.hex,
//           ColorPalettes.FlatDesign.sunflower700.hex,
//           ColorPalettes.FlatDesign.sunflower900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.sunflower300.hex,
//           ColorPalettes.FlatDesign.sunflower300.hex,
//           ColorPalettes.FlatDesign.sunflower500.hex,
//           ColorPalettes.FlatDesign.sunflower500.hex,
//           ColorPalettes.FlatDesign.sunflower700.hex,
//           ColorPalettes.FlatDesign.sunflower700.hex,
//           ColorPalettes.FlatDesign.sunflower900.hex,
//           ColorPalettes.FlatDesign.sunflower900.hex
//         ]
//       },
//       {
//         name: 'Wisteria',
//         value: 'wisteria',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.wisteria300.hex,
//           ColorPalettes.FlatDesign.wisteria500.hex,
//           ColorPalettes.FlatDesign.wisteria700.hex,
//           ColorPalettes.FlatDesign.wisteria900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.wisteria300.hex,
//           ColorPalettes.FlatDesign.wisteria300.hex,
//           ColorPalettes.FlatDesign.wisteria500.hex,
//           ColorPalettes.FlatDesign.wisteria500.hex,
//           ColorPalettes.FlatDesign.wisteria700.hex,
//           ColorPalettes.FlatDesign.wisteria700.hex,
//           ColorPalettes.FlatDesign.wisteria900.hex,
//           ColorPalettes.FlatDesign.wisteria900.hex
//         ]
//       },
//       {
//         name: 'Yellow',
//         value: 'yellow',
//         OneStDevGradient: [
//           ColorPalettes.Material.yellow300.hex,
//           ColorPalettes.Material.yellow500.hex,
//           ColorPalettes.Material.yellow700.hex,
//           ColorPalettes.Material.yellow900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.yellow300.hex,
//           ColorPalettes.Material.yellow300.hex,
//           ColorPalettes.Material.yellow500.hex,
//           ColorPalettes.Material.yellow500.hex,
//           ColorPalettes.Material.yellow700.hex,
//           ColorPalettes.Material.yellow700.hex,
//           ColorPalettes.Material.yellow900.hex,
//           ColorPalettes.Material.yellow900.hex
//         ]
//       }
//     ],
//
//     /**
//      * The selected positive gradient.
//      */
//     selectedPositiveGradient: 'amber',
//
//     /**
//      * Gradients used to render the negative values of indicators.
//      */
//     negativeGradients: [
//       {
//         name: 'Belize Hole',
//         value: 'belizeHole',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.belizeHole300.hex,
//           ColorPalettes.FlatDesign.belizeHole500.hex,
//           ColorPalettes.FlatDesign.belizeHole700.hex,
//           ColorPalettes.FlatDesign.belizeHole900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.belizeHole300.hex,
//           ColorPalettes.FlatDesign.belizeHole300.hex,
//           ColorPalettes.FlatDesign.belizeHole500.hex,
//           ColorPalettes.FlatDesign.belizeHole500.hex,
//           ColorPalettes.FlatDesign.belizeHole700.hex,
//           ColorPalettes.FlatDesign.belizeHole700.hex,
//           ColorPalettes.FlatDesign.belizeHole900.hex,
//           ColorPalettes.FlatDesign.belizeHole900.hex
//         ]
//       },
//       {
//         name: 'Blue',
//         value: 'blue',
//         OneStDevGradient: [
//           ColorPalettes.Material.blue300.hex,
//           ColorPalettes.Material.blue500.hex,
//           ColorPalettes.Material.blue700.hex,
//           ColorPalettes.Material.blue900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.blue300.hex,
//           ColorPalettes.Material.blue300.hex,
//           ColorPalettes.Material.blue500.hex,
//           ColorPalettes.Material.blue500.hex,
//           ColorPalettes.Material.blue700.hex,
//           ColorPalettes.Material.blue700.hex,
//           ColorPalettes.Material.blue900.hex,
//           ColorPalettes.Material.blue900.hex
//         ]
//       },
//       {
//         name: 'Deep Purple',
//         value: 'deepPurple',
//         OneStDevGradient: [
//           ColorPalettes.Material.deepPurple300.hex,
//           ColorPalettes.Material.deepPurple500.hex,
//           ColorPalettes.Material.deepPurple700.hex,
//           ColorPalettes.Material.deepPurple900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.deepPurple300.hex,
//           ColorPalettes.Material.deepPurple300.hex,
//           ColorPalettes.Material.deepPurple500.hex,
//           ColorPalettes.Material.deepPurple500.hex,
//           ColorPalettes.Material.deepPurple700.hex,
//           ColorPalettes.Material.deepPurple700.hex,
//           ColorPalettes.Material.deepPurple900.hex,
//           ColorPalettes.Material.deepPurple900.hex
//         ]
//       },
//       {
//         name: 'Emerald',
//         value: 'emerald',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.emerald300.hex,
//           ColorPalettes.FlatDesign.emerald500.hex,
//           ColorPalettes.FlatDesign.emerald700.hex,
//           ColorPalettes.FlatDesign.emerald900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.emerald300.hex,
//           ColorPalettes.FlatDesign.emerald300.hex,
//           ColorPalettes.FlatDesign.emerald500.hex,
//           ColorPalettes.FlatDesign.emerald500.hex,
//           ColorPalettes.FlatDesign.emerald700.hex,
//           ColorPalettes.FlatDesign.emerald700.hex,
//           ColorPalettes.FlatDesign.emerald900.hex,
//           ColorPalettes.FlatDesign.emerald900.hex
//         ]
//       },
//       {
//         name: 'Gray Blue',
//         value: 'blueGray',
//         OneStDevGradient: [
//           ColorPalettes.Material.blueGray300.hex,
//           ColorPalettes.Material.blueGray500.hex,
//           ColorPalettes.Material.blueGray700.hex,
//           ColorPalettes.Material.blueGray900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.blueGray300.hex,
//           ColorPalettes.Material.blueGray300.hex,
//           ColorPalettes.Material.blueGray500.hex,
//           ColorPalettes.Material.blueGray500.hex,
//           ColorPalettes.Material.blueGray700.hex,
//           ColorPalettes.Material.blueGray700.hex,
//           ColorPalettes.Material.blueGray900.hex,
//           ColorPalettes.Material.blueGray900.hex
//         ]
//       },
//       {
//         name: 'Green',
//         value: 'green',
//         OneStDevGradient: [
//           ColorPalettes.Material.green300.hex,
//           ColorPalettes.Material.green500.hex,
//           ColorPalettes.Material.green700.hex,
//           ColorPalettes.Material.green900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.green300.hex,
//           ColorPalettes.Material.green300.hex,
//           ColorPalettes.Material.green500.hex,
//           ColorPalettes.Material.green500.hex,
//           ColorPalettes.Material.green700.hex,
//           ColorPalettes.Material.green700.hex,
//           ColorPalettes.Material.green900.hex,
//           ColorPalettes.Material.green900.hex
//         ]
//       },
//       {
//         name: 'Indigo',
//         value: 'indigo',
//         OneStDevGradient: [
//           ColorPalettes.Material.indigo200.hex,
//           ColorPalettes.Material.indigo400.hex,
//           ColorPalettes.Material.indigo600.hex,
//           ColorPalettes.Material.indigo900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.indigo200.hex,
//           ColorPalettes.Material.indigo200.hex,
//           ColorPalettes.Material.indigo400.hex,
//           ColorPalettes.Material.indigo400.hex,
//           ColorPalettes.Material.indigo600.hex,
//           ColorPalettes.Material.indigo600.hex,
//           ColorPalettes.Material.indigo900.hex,
//           ColorPalettes.Material.indigo900.hex
//         ]
//       },
//       {
//         name: 'Leaf Green',
//         value: 'greenPatternFly',
//         OneStDevGradient: [
//           ColorPalettes.PatternFly.green300.hex,
//           ColorPalettes.PatternFly.green400.hex,
//           ColorPalettes.PatternFly.green600.hex,
//           ColorPalettes.PatternFly.green700.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.PatternFly.green300.hex,
//           ColorPalettes.PatternFly.green300.hex,
//           ColorPalettes.PatternFly.green400.hex,
//           ColorPalettes.PatternFly.green400.hex,
//           ColorPalettes.PatternFly.green600.hex,
//           ColorPalettes.PatternFly.green600.hex,
//           ColorPalettes.PatternFly.green700.hex,
//           ColorPalettes.PatternFly.green700.hex
//         ]
//       },
//       {
//         name: 'Light Green',
//         value: 'lightGreenPatternFly',
//         OneStDevGradient: [
//           ColorPalettes.PatternFly.lightGreen300.hex,
//           ColorPalettes.PatternFly.lightGreen500.hex,
//           ColorPalettes.PatternFly.lightGreen600.hex,
//           ColorPalettes.PatternFly.lightGreen700.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.PatternFly.lightGreen300.hex,
//           ColorPalettes.PatternFly.lightGreen300.hex,
//           ColorPalettes.PatternFly.lightGreen500.hex,
//           ColorPalettes.PatternFly.lightGreen500.hex,
//           ColorPalettes.PatternFly.lightGreen600.hex,
//           ColorPalettes.PatternFly.lightGreen600.hex,
//           ColorPalettes.PatternFly.lightGreen700.hex,
//           ColorPalettes.PatternFly.lightGreen700.hex
//         ]
//       },
//       {
//         name: 'Lime',
//         value: 'lime',
//         OneStDevGradient: [
//           ColorPalettes.Material.lime300.hex,
//           ColorPalettes.Material.lime500.hex,
//           ColorPalettes.Material.lime700.hex,
//           ColorPalettes.Material.lime900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.lime300.hex,
//           ColorPalettes.Material.lime300.hex,
//           ColorPalettes.Material.lime500.hex,
//           ColorPalettes.Material.lime500.hex,
//           ColorPalettes.Material.lime700.hex,
//           ColorPalettes.Material.lime700.hex,
//           ColorPalettes.Material.lime900.hex,
//           ColorPalettes.Material.lime900.hex
//         ]
//       },
//       {
//         name: 'Nephritis',
//         value: 'nephritis',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.nephritis300.hex,
//           ColorPalettes.FlatDesign.nephritis500.hex,
//           ColorPalettes.FlatDesign.nephritis700.hex,
//           ColorPalettes.FlatDesign.nephritis900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.nephritis300.hex,
//           ColorPalettes.FlatDesign.nephritis300.hex,
//           ColorPalettes.FlatDesign.nephritis500.hex,
//           ColorPalettes.FlatDesign.nephritis500.hex,
//           ColorPalettes.FlatDesign.nephritis700.hex,
//           ColorPalettes.FlatDesign.nephritis700.hex,
//           ColorPalettes.FlatDesign.nephritis900.hex,
//           ColorPalettes.FlatDesign.nephritis900.hex
//         ]
//       },
//       {
//         name: 'Neptune',
//         value: 'cyanPatternFly',
//         OneStDevGradient: [
//           ColorPalettes.PatternFly.cyan300.hex,
//           ColorPalettes.PatternFly.cyan400.hex,
//           ColorPalettes.PatternFly.cyan600.hex,
//           ColorPalettes.PatternFly.cyan700.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.PatternFly.cyan300.hex,
//           ColorPalettes.PatternFly.cyan300.hex,
//           ColorPalettes.PatternFly.cyan400.hex,
//           ColorPalettes.PatternFly.cyan400.hex,
//           ColorPalettes.PatternFly.cyan600.hex,
//           ColorPalettes.PatternFly.cyan600.hex,
//           ColorPalettes.PatternFly.cyan700.hex,
//           ColorPalettes.PatternFly.cyan700.hex
//         ]
//       },
//       {
//         name: 'Prussian Blue',
//         value: 'bluePatternFly',
//         OneStDevGradient: [
//           ColorPalettes.PatternFly.blue200.hex,
//           ColorPalettes.PatternFly.blue400.hex,
//           ColorPalettes.PatternFly.blue600.hex,
//           ColorPalettes.PatternFly.gold700.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.PatternFly.blue200.hex,
//           ColorPalettes.PatternFly.blue200.hex,
//           ColorPalettes.PatternFly.blue400.hex,
//           ColorPalettes.PatternFly.blue400.hex,
//           ColorPalettes.PatternFly.blue600.hex,
//           ColorPalettes.PatternFly.blue600.hex,
//           ColorPalettes.PatternFly.gold700.hex,
//           ColorPalettes.PatternFly.gold700.hex
//         ]
//       },
//       {
//         name: 'Sea Green',
//         value: 'greenSea',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.greenSea300.hex,
//           ColorPalettes.FlatDesign.greenSea500.hex,
//           ColorPalettes.FlatDesign.greenSea700.hex,
//           ColorPalettes.FlatDesign.greenSea900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.greenSea300.hex,
//           ColorPalettes.FlatDesign.greenSea300.hex,
//           ColorPalettes.FlatDesign.greenSea500.hex,
//           ColorPalettes.FlatDesign.greenSea500.hex,
//           ColorPalettes.FlatDesign.greenSea700.hex,
//           ColorPalettes.FlatDesign.greenSea700.hex,
//           ColorPalettes.FlatDesign.greenSea900.hex,
//           ColorPalettes.FlatDesign.greenSea900.hex
//         ]
//       },
//       {
//         name: 'Teal',
//         value: 'teal',
//         OneStDevGradient: [
//           ColorPalettes.Material.teal300.hex,
//           ColorPalettes.Material.teal500.hex,
//           ColorPalettes.Material.teal700.hex,
//           ColorPalettes.Material.teal900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.Material.teal300.hex,
//           ColorPalettes.Material.teal300.hex,
//           ColorPalettes.Material.teal500.hex,
//           ColorPalettes.Material.teal500.hex,
//           ColorPalettes.Material.teal700.hex,
//           ColorPalettes.Material.teal700.hex,
//           ColorPalettes.Material.teal900.hex,
//           ColorPalettes.Material.teal900.hex
//         ]
//       },
//       {
//         name: 'Turquoise',
//         value: 'turquoise',
//         OneStDevGradient: [
//           ColorPalettes.FlatDesign.turquoise300.hex,
//           ColorPalettes.FlatDesign.turquoise500.hex,
//           ColorPalettes.FlatDesign.turquoise700.hex,
//           ColorPalettes.FlatDesign.turquoise900.hex
//         ],
//         HalfStDevGradient: [
//           ColorPalettes.FlatDesign.turquoise300.hex,
//           ColorPalettes.FlatDesign.turquoise300.hex,
//           ColorPalettes.FlatDesign.turquoise500.hex,
//           ColorPalettes.FlatDesign.turquoise500.hex,
//           ColorPalettes.FlatDesign.turquoise700.hex,
//           ColorPalettes.FlatDesign.turquoise700.hex,
//           ColorPalettes.FlatDesign.turquoise900.hex,
//           ColorPalettes.FlatDesign.turquoise900.hex
//         ]
//       }
//     ],
//
//     /**
//      * The selected negative gradient.
//      */
//     selectedNegativeGradient: 'indigo'
//
//   },
//
//   /**
//    * The computed properties of the model of the view model.
//    */
//   computed: {
//
//     /**
//      * Gets the fill colors used to render the NUTS3 layer.
//      * The colors are displayed on the supergroups toggle buttons.
//      */
//     supergroupFillColors: function() {
//
//       let fillColors = {};
//
//       let currentBasemap = toggleBaseMapViewModel.currentBaseMap;
//       let supergroupStyles = MapLayers.nuts3.namedBasemapLayers[currentBasemap].supergroupStyles;
//
//       for (let sg in supergroupStyles) {
//         if (supergroupStyles.hasOwnProperty(sg)) {
//           fillColors[sg] = {
//             fillColor: supergroupStyles[sg].fillColor,
//             fillOpacity: supergroupStyles[sg].fillOpacity
//           };
//         }
//       }
//
//       return fillColors;
//
//     },
//
//     /**
//      * Gets the fill colors used to render the NUTS3 layer.
//      * The colors are displayed on the groups toggle buttons.
//      */
//     groupFillColors: function() {
//
//       let fillColors = {};
//
//       let currentBasemap = toggleBaseMapViewModel.currentBaseMap;
//       let groupStyles = MapLayers.nuts3.namedBasemapLayers[currentBasemap].groupStyles;
//
//       for (let g in groupStyles) {
//         if (groupStyles.hasOwnProperty(g)) {
//           fillColors[g] = {
//             fillColor: groupStyles[g].fillColor,
//             fillOpacity: groupStyles[g].fillOpacity
//           };
//         }
//       }
//
//       return fillColors;
//
//     }
//
//   },
//
//   /**
//    * The methods of the view model.
//    */
//   methods: {
//
//     /**
//      * Determines if a number is odd.
//      *
//      * @param number - The number to check.
//      */
//     isOdd(number) {
//       return number % 2;
//     },
//
//     /**
//      * Sets the current tab.
//      *
//      * @param tabName - The name of the tab to activate.
//      */
//     setCurrentTab(tabName) {
//       this.currentTab = tabName;
//
//       MapLayers.nuts3.renderLayer();
//     },
//
//     /**
//      * Sets the current domain.
//      *
//      * @param tabIndex - The index of the tab.
//      */
//     setCurrentDomain(tabIndex) {
//       this.currentDomain = this.dictionary.domains[tabIndex].key;
//       MapLayers.nuts3.renderLayer();
//     },
//
//     /**
//      * Selects all the supergroups or groups depending on the currently selected tab.
//      */
//     selectAll() {
//
//       if (this.currentTab === 'supergroups') {
//         this.checkedSupergroups = [];
//
//         for (let sg in this.supergroups) {
//           if (this.supergroups.hasOwnProperty(sg)) {
//             this.supergroups[sg].visible = true;
//             this.checkedSupergroups.push(sg.toString());
//           }
//         }
//       }
//       else if (this.currentTab === 'groups') {
//         this.checkedGroups = [];
//
//         for (let g in this.groups) {
//           if (this.groups.hasOwnProperty(g)) {
//             this.groups[g].visible = true;
//             this.checkedGroups.push(g.toString());
//           }
//         }
//       }
//
//       MapLayers.nuts3.renderLayer();
//
//     },
//
//     /**
//      * Selects all the supergroups or groups depending on the currently selected tab.
//      */
//     deselectAll() {
//
//       if (this.currentTab === 'supergroups') {
//         for (let sg in this.supergroups) {
//           if (this.supergroups.hasOwnProperty(sg)) {
//             this.supergroups[sg].visible = false;
//           }
//         }
//         this.checkedSupergroups = [];
//       }
//       else if (this.currentTab === 'groups') {
//         for (let g in this.groups) {
//           if (this.groups.hasOwnProperty(g)) {
//             this.groups[g].visible = false;
//           }
//         }
//         this.checkedGroups = [];
//       }
//
//       MapLayers.nuts3.renderLayer();
//
//     },
//
//     /**
//      * Toggles the groups associated with the specified supergroup.
//      *
//      * @param supergroup - The supergroup whose associated groups will be toggled on/off.
//      */
//     toggleGroups(supergroup) {
//
//       let areGroupsVisible = true;
//
//       // Loop through all the associated groups.
//       let groups = this.supergroups[supergroup].groups;
//
//       for (let i = 0; i < groups.length; i++) {
//         // Check the visibility of the associated groups.
//         if (this.groups[groups[i].toString()].visible) {
//           // A group was found visible. Make all invisible.
//           areGroupsVisible = false;
//           break;
//         }
//       }
//
//       // Loop through all the associated groups and set their visibility.
//       for (let i = 0; i < groups.length; i++) {
//         this.groups[groups[i].toString()].visible = areGroupsVisible;
//       }
//
//       // Toggle the groups associated with the specified supergroup.
//       this.checkedGroups = [];
//
//       for (let g in this.groups) {
//         if (this.groups.hasOwnProperty(g)) {
//           if (this.groups[g].visible) {
//             this.checkedGroups.push(g.toString());
//           }
//         }
//       }
//
//       MapLayers.nuts3.renderLayer();
//
//     },
//
//     /**
//      * Renders the regions of the NUTS3 layer having the specified typology class after toggling it on/off.
//      *
//      * @param typologyClass - The typology class that is toggled on/off.
//      */
//     renderNuts3TypologyClass(typologyClass) {
//
//       this[this.currentTab][typologyClass].visible = !this[this.currentTab][typologyClass].visible;
//
//       MapLayers.nuts3.changeTypologyClassStyle(typologyClass);
//
//     },
//
//     /**
//      * Renders the NUTS 3 layer.
//      */
//     renderNuts3Layer() {
//       MapLayers.nuts3.renderLayer();
//     },
//
//     /**
//      * Toggles on/off the information panel of a supergroup, group or indicator.
//      *
//      * @param code - The code [ie: supergroup, group, indicator] that will be used to toggle
//      *               the information of a supergroup, group or indicator.
//      */
//     toggleInfo(code) {
//       this.dictionary[this.currentTab][code].isInformationPanelVisible =
//         !this.dictionary[this.currentTab][code].isInformationPanelVisible;
//
//       // //TODO: RESIN - This code is needed if we need to show a tooltip over the help button.
//       // let l = (this.currentTab === 'supergroups' ? 'sg' : (this.currentTab === 'groups' ? 'g' : 'i'));
//       //
//       // let element = '#toggle-' + l + '-info-' + code;
//       //
//       // this.destroyTooltip(element);
//       //
//       // $('#' + element).tooltip();
//     },
//
//     /**
//      * Toggles on/off the radar diagram modal window.
//      *
//      * @param code - The code [ie: supergroup, group] that will be used to toggle
//      *               the radar diagram modal window of a supergroup or group.
//      */
//     toggleRadarDiagram(code) {
//
//       // TODO: Remove modal related code.
//
//       // Dynamic Heights
//       // If the height of a modal changes while it is open, you should call
//       // $('#myModal').modal('handleUpdate')
//       // to readjust the modal’s position in case a scrollbar appears.
//
//       this.dictionary[this.currentTab][code].isRadarDiagramVisible =
//         !this.dictionary[this.currentTab][code].isRadarDiagramVisible;
//
//       radarDiagramModalViewModel.toggleModal(code);
//
//     },
//
//     /**
//      * Shows the radar diagram container.
//      *
//      * @param code - The code [ie: supergroup, group] that will be used to toggle
//      *               the radar diagram modal window of a supergroup or group.
//      */
//     showRadarDiagram(code) {
//       this.dictionary[this.currentTab][code].isRadarDiagramVisible =
//         !this.dictionary[this.currentTab][code].isRadarDiagramVisible;
//
//       radarContainerViewModel.show(code);
//     }
//
//   }
//
// });

//
// ================================================================================


// ================================================================================
//  Main Body

// $(document).ready(function(){
//   AppState.bootstrapMaterialTooltipEnabled = true;
//   $('[data-toggle="tooltip"]').tooltip();
// });

Spatial.initializeMap();

//Spatial.sidebar.open('map-controls');

//
// ================================================================================
