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
   * Styles used to render the GUI based on raster values.
   */
  styles: {
    1: {
      rowStyle: 'row-built-style'
    },
    11: {
      rowStyle: 'row-built-style'
    },
    13: {
      rowStyle: 'row-built-style'
    },
    14: {
      rowStyle: 'row-built-style'
    },
    15: {
      rowStyle: 'row-built-style'
    },
    16: {
      rowStyle: 'row-built-style'
    },
    17: {
      rowStyle: 'row-built-style'
    },
    18: {
      rowStyle: 'row-built-style'
    },
    2: {
      rowStyle: 'row-water-style'
    },
    21: {
      rowStyle: 'row-water-style'
    },
    23: {
      rowStyle: 'row-water-style'
    },
    24: {
      rowStyle: 'row-water-style'
    },
    25: {
      rowStyle: 'row-water-style'
    },
    26: {
      rowStyle: 'row-water-style'
    },
    27: {
      rowStyle: 'row-water-style'
    },
    28: {
      rowStyle: 'row-water-style'
    },
    3: {
      rowStyle: 'row-grass-style'
    },
    31: {
      rowStyle: 'row-grass-style'
    },
    33: {
      rowStyle: 'row-grass-style'
    },
    34: {
      rowStyle: 'row-grass-style'
    },
    35: {
      rowStyle: 'row-grass-style'
    },
    36: {
      rowStyle: 'row-grass-style'
    },
    37: {
      rowStyle: 'row-grass-style'
    },
    38: {
      rowStyle: 'row-grass-style'
    },
    4: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    41: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    43: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    44: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    45: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    46: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    47: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    48: {
      rowStyle: 'row-forbs-shrubs-style'
    },
    5: {
      rowStyle: 'row-tree-canopy-style'
    },
    51: {
      rowStyle: 'row-tree-canopy-style'
    },
    53: {
      rowStyle: 'row-tree-canopy-style'
    },
    54: {
      rowStyle: 'row-tree-canopy-style'
    },
    55: {
      rowStyle: 'row-tree-canopy-style'
    },
    56: {
      rowStyle: 'row-tree-canopy-style'
    },
    57: {
      rowStyle: 'row-tree-canopy-style'
    },
    58: {
      rowStyle: 'row-tree-canopy-style'
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
   * Gets the count of the values aggregated by Form.
   */
  getFormCount() {

    let lookup = Raster.metadata.band.lookup;

    let formCount = [0, 0, 0, 0, 0];
    let formKey = 1;
    let count = 0;

    for (let key in lookup) {
      if (key.substring(0, 1) !== formKey.toString()) {
        formKey++;
      }

      formCount[formKey] += lookup[key].count;
    }

    return formCount;

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

    this.data = {
      isNew: true
    };

    // Initialize variables and correct their values later in the process.
    this.data.envelope = rasterExtract.envelope;
    this.data.histogram = {};
    this.data.formHistogram = {};
    this.data.count = rasterExtract.histogram.totalCells;

    // Add the number of values equal to those of the total cells and
    // subtract the number of no-data values if such exist later.

    // Assume the number of actual values are equal to the number of extracted cells.
    // Later correct the countValues if no-data has been found.
    this.data.countValues = rasterExtract.histogram.totalCells;

    let lookup = this.metadata.band.lookup;
    let dictionary = this.metadata.band.dictionary;

    // Get all the keys of the lookup.
    let keys = Object.keys(lookup);

    // Create empty arrays to store the raster 'function' and 'form' values found in the raster extract.
    let rasterValues = [];
    let formValues = [];

    // Fill the rasterValues and formValues with the appropriate values.
    keys.forEach(function(k) {

      rasterValues.push(parseInt(k));

      let f = parseInt(k.substring(0, 1));

      if (formValues.indexOf(f) === -1) {
        formValues.push(f);
      }

    });

    // Make sure the arrays are sorted.
    rasterValues.sort();
    formValues.sort();

    //
    // Set the histogram and formHistogram.
    //
    for (let i = 0; i < rasterValues.length; i++) {

      let rasterValue = rasterValues[i];
      let formValue = parseInt(rasterValue.toString().substring(0, 1));

      if (rasterExtract.histogram.hasOwnProperty(rasterValue)) {

        // Get the entries for form and function.
        let formEntry = dictionary.find(el => el.field === 'form' && el.term === lookup[rasterValue].form);
        let functionEntry = dictionary.find(el => el.field === 'function' && el.term === lookup[rasterValue].function);

        // Add a new object in the histogram.
        this.data.histogram[rasterValue] = {
          value: rasterValue,
          count: rasterExtract.histogram[rasterValue],
          form: Raster.metadata.band.lookup[rasterValue].form,
          formDescription: formEntry.description,
          function: Raster.metadata.band.lookup[rasterValue].function,
          functionDescription: functionEntry.description
        };

        if (!this.data.formHistogram.hasOwnProperty((formValue))) {

          // Add a new form value.
          this.data.formHistogram[formValue] = {
            value: formValue,
            count: rasterExtract.histogram[rasterValue],
            form: Raster.metadata.band.lookup[rasterValue].form,
            formDescription: formEntry.description
          };

        }
        else {

          // Increase the count of the existing formValue.
          this.data.formHistogram[formValue].count += rasterExtract.histogram[rasterValue];

        }

      }

    }

    //
    // Add the nodata in the histogram and update the countValues variable.
    //
    let noDataValue = this.metadata.band.noDataValue;

    if (rasterExtract.histogram.hasOwnProperty(noDataValue)) {

      this.data.histogram[noDataValue] = {
        value: noDataValue,
        count: rasterExtract.histogram[noDataValue],
        form: 'No Data',
        formDescription: 'A portion of the area is located outside the borders of Greater Manchester',
        function: 'No Data',
        functionDescription: 'A portion of the area is located outside the borders of Greater Manchester'
      };

      this.data.countValues -= rasterExtract.histogram[noDataValue];

    }

  }

};

Raster.setData({
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
