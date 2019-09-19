//
// ================================================================================
//  TellUs Toolkit Ltd.
//  https://www.tellus-toolkit.com/
//
//  Name:            raster.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 14/09/2019.
//  Updated:
// ================================================================================

var Raster = {

  /**
   * The metadata of the raster.
   */
  metadata: {
    cellSize: 10,
    tileSize: 1000,
    minimumX: 351672.3499999996,
    minimumY: 381166.0432999991,
    columns: 5500,
    rows: 4000,
    numberOfValues: 0,
    band: {
      dataType: "UInt32",
      noDataValue: 4294967295,
      statistics: {
        minimum: 11,
        maximum: 58,
        average: 36.751935525663,
        standardDeviation: 16.283957789472
      },
      lookup: {
        11: {
          count: 1890363,
          form: "Built",
          function: "Urban Other",
          landscape: "Urban Other Built"
        },
        13: {
          count: 1082581,
          form: "Built",
          function: "Domestic Gardens",
          landscape: "Domestic Gardens Built"
        },
        14: {
          count: 65683,
          form: "Built",
          function: "Public Recreation",
          landscape: "Public Recreation Built"
        },
        15: {
          count: 251800,
          form: "Built",
          function: "Amenity",
          landscape: "Amenity Built"
        },
        16: {
          count: 33834,
          form: "Built",
          function: "Previously Developed",
          landscape: "Previously Developed Built"
        },
        17: {
          count: 93415,
          form: "Built",
          function: "Institutional",
          landscape: "Institutional Built"
        },
        18: {
          count: 60,
          form: "Built",
          function: "Peri-urban",
          landscape: "Peri-urban Built"
        },
        21: {
          count: 9262,
          form: "Water",
          function: "Urban Other",
          landscape: "Urban Other Water"
        },
        23: {
          count: 1949,
          form: "Water",
          function: "Domestic Gardens",
          landscape: "Domestic Gardens Water"
        },
        24: {
          count: 90817,
          form: "Water",
          function: "Public Recreation",
          landscape: "Public Recreation Water"
        },
        25: {
          count: 37082,
          form: "Water",
          function: "Amenity",
          landscape: "Amenity Water"
        },
        26: {
          count: 232,
          form: "Water",
          function: "Previously Developed",
          landscape: "Previously Developed Water"
        },
        27: {
          count: 302,
          form: "Water",
          function: "Institutional",
          landscape: "Institutional Water"
        },
        28: {
          count: 87463,
          form: "Water",
          function: "Peri-urban",
          landscape: "Peri-urban Water"
        },
        31: {
          count: 152910,
          form: "Grasses",
          function: "Urban Other",
          landscape: "Urban Other Grasses"
        },
        33: {
          count: 312356,
          form: "Grasses",
          function: "Domestic Gardens",
          landscape: "Domestic Gardens Grasses"
        },
        34: {
          count: 270989,
          form: "Grasses",
          function: "Public Recreation",
          landscape: "Public Recreation Grasses"
        },
        35: {
          count: 368232,
          form: "Grasses",
          function: "Amenity",
          landscape: "Amenity Grasses"
        },
        36: {
          count: 4803,
          form: "Grasses",
          function: "Previously Developed",
          landscape: "Previously Developed Grasses"
        },
        37: {
          count: 52626,
          form: "Grasses",
          function: "Institutional",
          landscape: "Institutional Grasses"
        },
        38: {
          count: 959678,
          form: "Grasses",
          function: "Peri-urban",
          landscape: "Peri-urban Grasses"
        },
        41: {
          count: 205147,
          form: "Forbs and shrubs",
          function: "Urban Other",
          landscape: "Urban Other Forbs and shrubs"
        },
        43: {
          count: 422170,
          form: "Forbs and shrubs",
          function: "Domestic Gardens",
          landscape: "Domestic Gardens Forbs and shrubs"
        },
        44: {
          count: 349814,
          form: "Forbs and shrubs",
          function: "Public Recreation",
          landscape: "Public Recreation Forbs and shrubs"
        },
        45: {
          count: 778452,
          form: "Forbs and shrubs",
          function: "Amenity",
          landscape: "Amenity Forbs and shrubs"
        },
        46: {
          count: 11460,
          form: "Forbs and shrubs",
          function: "Previously Developed",
          landscape: "Previously Developed Forbs and shrubs"
        },
        47: {
          count: 57490,
          form: "Forbs and shrubs",
          function: "Institutional",
          landscape: "Institutional Forbs and shrubs"
        },
        48: {
          count: 2557302,
          form: "Forbs and shrubs",
          function: "Peri-urban",
          landscape: "Peri-urban Forbs and shrubs"
        },
        51: {
          count: 266714,
          form: "Tree canopy",
          function: "Urban Other",
          landscape: "Urban Other Tree canopy"
        },
        53: {
          count: 557844,
          form: "Tree canopy",
          function: "Domestic Gardens",
          landscape: "Domestic Gardens Tree canopy"
        },
        54: {
          count: 401480,
          form: "Tree canopy",
          function: "Public Recreation",
          landscape: "Public Recreation Tree canopy"
        },
        55: {
          count: 795895,
          form: "Tree canopy",
          function: "Amenity",
          landscape: "Amenity Tree canopy"
        },
        56: {
          count: 7136,
          form: "Tree canopy",
          function: "Previously Developed",
          landscape: "Previously Developed Tree canopy"
        },
        57: {
          count: 46286,
          form: "Tree canopy",
          function: "Institutional",
          landscape: "Institutional Tree canopy"
        },
        58: {
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
          term: "Tree canopy",
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
          field: "landscape",
          term: "Urban Other Built",
          description: "Land-use: Urban other; Land-cover: Built"
        },
        {
          field: "landscape",
          term: "Urban Other Water",
          description: "Land-use: Urban other; Land-cover: Water"
        },
        {
          field: "landscape",
          term: "Urban Other Grasses",
          description: "Land-use: Urban other; Land-cover: Grasses"
        },
        {
          field: "landscape",
          term: "Urban Other Forbs and shrubs",
          description: "Land-use: Urban other; Land-cover: Forbs and Shrubs"
        },
        {
          field: "landscape",
          term: "Urban Other Tree canopy",
          description: "Land-use: Urban other; Land-cover: Tree canopy"
        },
        {
          field: "landscape",
          term: "Public Recreation Built",
          description: "Land-use: Public Parks and Recreation: Land-cover: Built"
        },
        {
          field: "landscape",
          term: "Public Recreation Water",
          description: "Land-use: Public Parks and Recreation: Land-cover: Water"
        },
        {
          field: "landscape",
          term: "Public Recreation Grasses",
          description: "Land-use: Public Parks and Recreation: Land-cover: Grasses"
        },
        {
          field: "landscape",
          term: "Public Recreation Forbs and shrubs",
          description: "Land-use: Public Parks and Recreation: Land-cover: Forbs and Shrubs"
        },
        {
          field: "landscape",
          term: "Public Recreation Tree canopy",
          description: "Land-use: Public Parks and Recreation: Land-cover: Tree canopy"
        },
        {
          field: "landscape",
          term: "Amenity Built",
          description: "Land-use: Amenity; Land-cover: Built"
        },
        {
          field: "landscape",
          term: "Amenity Water",
          description: "Land-use: Amenity; Land-cover: Water"
        },
        {
          field: "landscape",
          term: "Amenity Grasses",
          description: "Land-use: Amenity; Land-cover: Grasses"
        },
        {
          field: "landscape",
          term: "Amenity Forbs and Shrubs",
          description: "Land-use: Amenity; Land-cover: Forbs and Shrubs"
        },
        {
          field: "landscape",
          term: "Amenity Tree canopy",
          description: "Land-use: Amenity; Land-cover: Tree canopy"
        },
        {
          field: "landscape",
          term: "Domestic Gardens Built",
          description: "Land-use: Domestic Gardens; Land-cover: Built"
        },
        {
          field: "landscape",
          term: "Domestic Gardens Water",
          description: "Land-use: Domestic Gardens; Land-cover: Water"
        },
        {
          field: "landscape",
          term: "Domestic Gardens Grasses",
          description: "Land-use: Domestic Gardens; Land-cover: Grasses"
        },
        {
          field: "landscape",
          term: "Domestic Gardens Forbs and Shrubs",
          description: "Land-use: Domestic Gardens; Land-cover: Forbs and Shrubs"
        },
        {
          field: "landscape",
          term: "Domestic Gardens Tree canopy",
          description: "Land-use: Domestic Gardens; Land-cover: Tree canopy"
        },
        {
          field: "landscape",
          term: "Institutional Built",
          description: "Land-use: Institutional Land; Land-cover: Built"
        },
        {
          field: "landscape",
          term: "Institutional Water",
          description: "Land-use: Institutional Land; Land-cover: Water"
        },
        {
          field: "landscape",
          term: "Institutional Grasses",
          description: "Land-use: Institutional Land; Land-cover: Grasses"
        },
        {
          field: "landscape",
          term: "Institutional Forbs and shrubs",
          description: "Land-use: Institutional Land; Land-cover: Forbs and Shrubs"
        },
        {
          field: "landscape",
          term: "Institutional Tree canopy",
          description: "Land-use: Institutional Land; Land-cover: Tree canopy"
        },
        {
          field: "landscape",
          term: "Previously Developed Built",
          description: "Land-use: Previously developed; Land-cover: Built"
        },
        {
          field: "landscape",
          term: "Previously Developed Water",
          description: "Land-use: Previously developed; Land-cover: Water"
        },
        {
          field: "landscape",
          term: "Previously Developed Grasses",
          description: "Land-use: Previously developed; Land-cover: Grasses"
        },
        {
          field: "landscape",
          term: "Previously Developed Forbs and shrubs",
          description: "Land-use: Previously developed; Land-cover: Forbs and Shrubs"
        },
        {
          field: "landscape",
          term: "Previously Developed Tree canopy",
          description: "Land-use: Previously developed; Land-cover: Tree canopy"
        },
        {
          field: "landscape",
          term: "Peri-urban Built",
          description: "Land-use: Peri-urban; Land-cover: Built"
        },
        {
          field: "landscape",
          term: "Peri-urban Water",
          description: "Land-use: Peri-urban; Land-cover: Water"
        },
        {
          field: "landscape",
          term: "Peri-urban Grasses",
          description: "Land-use: Peri-urban; Land-cover: Grasses"
        },
        {
          field: "landscape",
          term: "Peri-urban Forbs and shrubs",
          description: "Land-use: Peri-urban; Land-cover: Forbs and Shrubs"
        },
        {
          field: "landscape",
          term: "Peri-urban Tree canopy",
          description: "Land-use: Peri-urban; Land-cover: Tree canopy"
        }
      ]
    }
  },

  /**
   * The query used to extract the data from the raster.
   */
  query: {

    /**
     * The type of the query.
     * Valid values are 'point' | 'polygon' | 'lsoa' | 'wards'.
     */
    type: undefined,

    /**
     * The data used to define the query.
     */
    data: undefined

  },

  /**
   * The data of the raster that have been extracted by the query.
   */
  data: {

  },

  /**
   * Sets the number of values excluding no data returned in metadata.
   */
  setNumberOfValues() {

    let lookup = this.metadata.band.lookup;

    let numberOfValues = 0;

    for (let key in lookup) {
      if (lookup.hasOwnProperty(key)) {

        numberOfValues += lookup[key].count;

      }
    }

    this.metadata.numberOfValues = numberOfValues;

  },

  /**
   * Sets the raster data.
   *
   * @param rasterExtract - The raster data extract to set.
   */
  setData(rasterExtract) {

    this.data = {};

    this.data.envelope = rasterExtract.envelope;
    this.data.histogram = {};

    let lookup = this.metadata.band.lookup;

    for (let key in lookup) {
      if (rasterExtract.histogram.hasOwnProperty(key)) {
        this.data.histogram[key] = rasterExtract.histogram[key];
      }
      else {
        this.data.histogram[key] = 0;
      }
    }

    let noDataValue = this.metadata.band.noDataValue;

    if (rasterExtract.histogram.hasOwnProperty(noDataValue)) {
      this.data.histogram[noDataValue] = rasterExtract.histogram[noDataValue];
    }
    else {
      this.data.histogram[noDataValue] = 0;
    }

  },

  /**
   * Sets the raster data.
   *
   * @param rasterExtract - The raster data extract to set.
   */
  setData2(rasterExtract) {

    this.data = {};

    this.data.envelope = rasterExtract.envelope;
    this.data.histogram = {};
    this.data.count = rasterExtract.histogram.totalCells;

    // Add the number of values equal to those of the total cells and
    // subtract the number of no data values if such exist later.
    this.data.countValues = rasterExtract.histogram.totalCells;

    let lookup = this.metadata.band.lookup;
    let dictionary = this.metadata.band.dictionary;

    let keys = Object.keys(lookup);
    let rasterValues = [];

    keys.forEach(k => rasterValues.push(parseInt(k)));

    rasterValues.sort();

    let index = 0;

    for (let i = 0; i < rasterValues.length; i++) {

      let rasterValue = rasterValues[i];

      if (rasterExtract.histogram.hasOwnProperty(rasterValue)) {

        index++;

        let formEntry = dictionary.find(el => el.field === 'form' && el.term === lookup[rasterValue].form);
        let functionEntry = dictionary.find(el => el.field === 'function' && el.term === lookup[rasterValue].function);

        this.data.histogram[index] = {
          value: rasterValue,
          count: rasterExtract.histogram[rasterValue],
          form: Raster.metadata.band.lookup[rasterValue].form,
          formDescription: formEntry.description,
          function: Raster.metadata.band.lookup[rasterValue].function,
          functionDescription: functionEntry.description
        };

      }

    }

    let noDataValue = this.metadata.band.noDataValue;

    if (rasterExtract.histogram.hasOwnProperty(noDataValue)) {

      this.data.histogram[index++] = {
        value: noDataValue,
        count: rasterExtract.histogram[noDataValue],
        form: 'No Data',
        formDescription: 'A portion of the area is located outside the borders of Greater Manchester',
        function: 'No Data',
        functionDescription: 'A portion of the area is located outside the borders of Greater Manchester'
      };

      this.data.countValues -= rasterExtract.histogram[noDataValue];

    }

  },

  /**
   * Sets the histogram of the values based on the Form.
   * This is actually a grouping of all functions having the same form.
   */
  setHistogramByForm() {



  }

};

Raster.setData2({
  envelope: {
    minRow: 0,
    minCol: 0,
    maxRow: 0,
    maxCol: 0
  },
  histogram: {
    totalCells: 0
  }
});
