
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

let raster = {
  metadata: {
    columns:          5440, // 5500
    rows:             3987, // 4000
    xLowerLeftCorner: 351672.35,
    yLowerLeftCorner: 381166.0433,
    cellSize:         10,
    noData:           -1
  },
  lookup: {
    '11': {
      count: 1890363,
      form: "Built",
      function: "Urban Other",
      landscape: "Urban Other Built"
    },
    '13': {
      count: 1082581,
      form: "Built",
      function: "Domestic Gardens",
      landscape: "Domestic Gardens Built"
    },
    '14': {
      count: 65683,
      form: "Built",
      function: "Public Recreation",
      landscape: "Public Recreation Built"
    },
    '15': {
      count: 251800,
      form: "Built",
      function: "Amenity",
      landscape: "Amenity Built"
    },
    '16': {
      count: 33834,
      form: "Built",
      function: "Previously Developed",
      landscape: "Previously Developed Built"
    },
    '17': {
      count: 93415,
      form: "Built",
      function: "Institutional",
      landscape: "Institutional Built"
    },
    '18': {
      count: 60,
      form: "Built",
      function: "Urban Other",
      landscape: "Urban Other Built"
    },
    '21': {
      count: 9262,
      form: "Water",
      function: "Urban Other",
      landscape: "Urban Other Water"
    },
    '23': {
      count: 1949,
      form: "Water",
      function: "Domestic Gardens",
      landscape: "Domestic Gardens Water"
    },
    '24': {
      count: 90817,
      form: "Water",
      function: "Public Recreation",
      landscape: "Public Recreation Water"
    },
    '25': {
      count: 37082,
      form: "Water",
      function: "Amenity",
      landscape: "Amenity Water"
    },
    '26': {
      count: 232,
      form: "Water",
      function: "Previously Developed",
      landscape: "Previously Developed Water"
    },
    '27': {
      count: 302,
      form: "Water",
      function: "Institutional",
      landscape: "Institutional Water"
    },
    '28': {
      count: 87463,
      form: "Water",
      function: "Peri-urban",
      landscape: "Peri-urban Water"
    },
    '31': {
      count: 152910,
      form: "Grasses",
      function: "Urban Other",
      landscape: "Urban Other Grasses"
    },
    '33': {
      count: 312356,
      form: "Grasses",
      function: "Domestic Gardens",
      landscape: "Domestic Gardens Grasses"
    },
    '34': {
      count: 270989,
      form: "Grasses",
      function: "Public Recreation",
      landscape: "Public Recreation Grasses"
    },
    '35': {
      count: 368232,
      form: "Grasses",
      function: "Amenity",
      landscape: "Amenity Grasses"
    },
    '36': {
      count: 4803,
      form: "Grasses",
      function: "Previously Developed",
      landscape: "Previously Developed Grasses"
    },
    '37': {
      count: 52626,
      form: "Grasses",
      function: "Institutional",
      landscape: "Institutional Grasses"
    },
    '38': {
      count: 959678,
      form: "Grasses",
      function: "Peri-urban",
      landscape: "Peri-urban Grasses"
    },
    '41': {
      count: 205147,
      form: "Forbs and shrubs",
      function: "Urban Other",
      landscape: "Urban Other Forbs and shrubs"
    },
    '43': {
      count: 422170,
      form: "Forbs and shrubs",
      function: "Domestic Gardens",
      landscape: "Domestic Gardens Forbs and shrubs"
    },
    '44': {
      count: 349814,
      form: "Forbs and shrubs",
      function: "Public Recreation",
      landscape: "Public Recreation Forbs and shrubs"
    },
    '45': {
      count: 778452,
      form: "Forbs and shrubs",
      function: "Amenity",
      landscape: "Amenity Forbs and shrubs"
    },
    '46': {
      count: 11460,
      form: "Forbs and shrubs",
      function: "Previously Developed",
      landscape: "Previously Developed Forbs and shrubs"
    },
    '47': {
      count: 57490,
      form: "Forbs and shrubs",
      function: "Institutional",
      landscape: "Institutional Forbs and shrubs"
    },
    '48': {
      count: 2557302,
      form: "Forbs and shrubs",
      function: "Peri-urban",
      landscape: "Peri-urban Forbs and shrubs"
    },
    '51': {
      count: 266714,
      form: "Tree canopy",
      function: "Urban Other",
      landscape: "Urban Other Tree canopy"
    },
    '53': {
      count: 557844,
      form: "Tree canopy",
      function: "Domestic Gardens",
      landscape: "Domestic Gardens Tree canopy"
    },
    '54': {
      count: 401480,
      form: "Tree canopy",
      function: "Public Recreation",
      landscape: "Public Recreation Tree canopy"
    },
    '55': {
      count: 795895,
      form: "Tree canopy",
      function: "Amenity",
      landscape: "Amenity Tree canopy"
    },
    '56': {
      count: 7136,
      form: "Tree canopy",
      function: "Previously Developed",
      landscape: "Previously Developed Tree canopy"
    },
    '57': {
      count: 46286,
      form: "Tree canopy",
      function: "Institutional",
      landscape: "Institutional Tree canopy"
    },
    '58': {
      count: 535310,
      form: "Tree canopy",
      function: "Peri-urban",
      landscape: "Peri-urban Tree canopy"
    }
  },
  dictionary: [
    {
      field: "form",
      term: "Built",
      description: "Sealed surfaces including roads, buildings and hardstanding"
    },
    {
      field: "form",
      term: "Water",
      description: "Areas covered by natural and man-made water bodies and water courses"
    },
    {
      field: "form",
      term: "Grasses",
      description: "Areas covered by lawns, mown grass or grass-like (graminoid) crops"
    },
    {
      field: "form",
      term: "Forbs and shrubs",
      description: "Land dominated by herbaceous flowering plants and shrubs"
    },
    {
      field: "form",
      term: "Tree Canopy",
      description: "Tree canopy"
    },
    {
      field: "function",
      term: "Urban Other",
      description: "Land-use not assigned to any other function in this list and existing in urban areas"
    },
    {
      field: "function",
      term: "Domestic Gardens",
      description: "Private domestic gardens"
    },
    {
      field: "function",
      term: "Public Recreation",
      description: "Public Parks and Recreation. Accessible sites designated for leisure and recreation"
    },
    {
      field: "function",
      term: "Amenity",
      description: "Green areas primarily aimed at increasing aesthetic value located between buildings, roads and other land-uses"
    },
    {
      field: "function",
      term: "Previously Developed",
      description: "Brownfield sites and transitional land-use"
    },
    {
      field: "function",
      term: "Institutional",
      description: "Intitutional land (e.g. on hospital, adminstrative or school grounds)"
    },
    {
      field: "function",
      term: "Peri-urban",
      description: "Non-urban land-use within Greater Manchester"
    },
    {
      field: "function",
      term: "Urban Other Built",
      description: "Land-use: Urban other; Land-cover: Built"
    },
    {
      field: "function",
      term: "Urban Other Water",
      description: "Land-use: Urban other; Land-cover: Water"
    },
    {
      field: "function",
      term: "Urban Other Grasses",
      description: "Land-use: Urban other; Land-cover: Grasses"
    },
    {
      field: "function",
      term: "Urban Other Forbs and shrubs",
      description: "Land-use: Urban other; Land-cover: Forbs and Shrubs"
    },
    {
      field: "function",
      term: "Urban Other Tree canopy",
      description: "Land-use: Urban other; Land-cover: Tree Canopy"
    },
    {
      field: "function",
      term: "Public Recreation Built",
      description: "Land-use: Public Parks and Recreation: Land-cover: Built"
    },
    {
      field: "function",
      term: "Public Recreation Water",
      description: "Land-use: Public Parks and Recreation: Land-cover: Water"
    },
    {
      field: "function",
      term: "Public Recreation Grasses",
      description: "Land-use: Public Parks and Recreation: Land-cover: Grasses"
    },
    {
      field: "function",
      term: "Public Recreation Forbs and shrubs",
      description: "Land-use: Public Parks and Recreation: Land-cover: Forbs and Shrubs"
    },
    {
      field: "function",
      term: "Public Recreation Tree canopy",
      description: "Land-use: Public Parks and Recreation: Land-cover: Tree Canopy"
    },
    {
      field: "function",
      term: "Amenity Built",
      description: "Land-use: Amenity; Land-cover: Built"
    },
    {
      field: "function",
      term: "Amenity Water",
      description: "Land-use: Amenity; Land-cover: Water"
    },
    {
      field: "function",
      term: "Amenity Grasses",
      description: "Land-use: Amenity; Land-cover: Grasses"
    },
    {
      field: "function",
      term: "Amenity Forbs and Shrubs",
      description: "Land-use: Amenity; Land-cover: Forbs and Shrubs"
    },
    {
      field: "function",
      term: "Amenity Tree canopy",
      description: "Land-use: Amenity; Land-cover: Tree Canopy"
    },
    {
      field: "function",
      term: "Domestic Gardens Buillt",
      description: "Land-use: Domestic Gardens; Land-cover: Built"
    },
    {
      field: "function",
      term: "Domestic Gardens Water",
      description: "Land-use: Domestic Gardens; Land-cover: Water"
    },
    {
      field: "function",
      term: "Domestic Gardens Grasses",
      description: "Land-use: Domestic Gardens; Land-cover: Grasses"
    },
    {
      field: "function",
      term: "Domestic Gardens Forbs and Shrubs",
      description: "Land-use: Domestic Gardens; Land-cover: Forbs and Shrubs"
    },
    {
      field: "function",
      term: "Domestic Gardens Tree canopy",
      description: "Land-use: Domestic Gardens; Land-cover: Tree Canopy"
    },
    {
      field: "function",
      term: "Institutional Built",
      description: "Land-use: Institutional Land; Land-cover: Built"
    },
    {
      field: "function",
      term: "Institutional Water",
      description: "Land-use: Institutional Land; Land-cover: Water"
    },
    {
      field: "function",
      term: "Institutional Grasses",
      description: "Land-use: Institutional Land; Land-cover: Grasses"
    },
    {
      field: "function",
      term: "Institutional Forbs and shrubs",
      description: "Land-use: Institutional Land; Land-cover: Forbs and Shrubs"
    },
    {
      field: "function",
      term: "Institutional Tree canopy",
      description: "Land-use: Institutional Land; Land-cover: Tree Canopy"
    },
    {
      field: "function",
      term: "Previously Developed Built",
      description: "Land-use: Previously developed; Land-cover: Built"
    },
    {
      field: "function",
      term: "Previously Developed Water",
      description: "Land-use: Previously developed; Land-cover: Water"
    },
    {
      field: "function",
      term: "Previously Developed Grasses",
      description: "Land-use: Previously developed; Land-cover: Grasses"
    },
    {
      field: "function",
      term: "Previously Developed Forbs",
      description: "Land-use: Previously developed; Land-cover: Forbs and Shrubs"
    },
    {
      field: "function",
      term: "Previously Developed Tree canopy",
      description: "Land-use: Previously developed; Land-cover: Tree Canopy"
    },
    {
      field: "function",
      term: "Peri-urban Built",
      description: "Land-use: Peri-urban; Land-cover: Built"
    },
    {
      field: "function",
      term: "Peri-urban Water",
      description: "Land-use: Peri-urban; Land-cover: Water"
    },
    {
      field: "function",
      term: "Peri-urban Grasses",
      description: "Land-use: Peri-urban; Land-cover: Grasses"
    },
    {
      field: "function",
      term: "Peri-urban Forbs and shrubs",
      description: "Land-use: Peri-urban; Land-cover: Forbs and Shrubs"
    },
    {
      field: "function",
      term: "Peri-urban Tree canopy",
      description: "Land-use: Peri-urban; Land-cover: Tree Canopy"
    }
  ]
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
          weight: 0.5,
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
         * Instruct leaflet.pm to ignore this layer.
         */
        pmIgnore: true,

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
          color: ColorPalettes.Material.blue900.hex,
          weight: 0.5,
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
         * Instruct leaflet.pm to ignore this layer.
         */
        pmIgnore: true,

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
   * The LSOA polygons layer
   */
  lsoa: {

    /**
     * The name of the layer.
     */
    name: 'lsoa',

    /**
     * The attribution to add on the map related to the NUTS3 layer.
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
         * Instruct leaflet.pm to ignore this layer.
         */
        pmIgnore: true,

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
        Spatial.getReportByPoint(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);

        // Spatial.testPost1();
      }
      else if (feature.geometry.type === 'Polygon') {

        Spatial.getReportByPolygon(feature.geometry);

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

  },



  getReportByPoint: function(lat, lon) {

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


  getReportByPolygon: function(polygon) {

    let url = 'http://maps.humanities.manchester.ac.uk/ghia-raster-server/report';
    // let url = 'http://localhost:8083/report';

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
      MapLayers.lsoa.renderLayer();

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

Spatial.sidebar.open('map-controls');

//
// ================================================================================
