var CONFIG = {
    // Language of templates to use ( should be name of directory under www/templates/ )
    LANGUAGE: 'en',

    // Name of app to use in alert dialog titles amongst other things
    APP_NAME: 'GC Reporter',

    // URL of the fixmystreet install to report to. See also config.xml-example
    // Make sure it does *not* end with a slash.
    FMS_URL: 'https://reporting.ground-control.co.uk',

    // Name of the cobrand to use for templates, stylesheets etc.
    // Cobrand files should be placed in a new directory within www/cobrands/
    // Leave as null to use the default templates.
    COBRAND: 'groundcontrol',

    // If the cobrand needs extra JavaScript files included in index.html,
    // list them (with full paths) here.
    COBRAND_EXTRA_JS: [
        'cobrands/groundcontrol/js/views/pothole_details.js',
        'cobrands/groundcontrol/js/views/submit.js',
        'cobrands/groundcontrol/js/views/quote.js',
        'cobrands/groundcontrol/js/groundcontrol_router.js'
    ],

    // Type of map to use; possible options currently are 'OSM', 'Bing' or
    // 'FMS' (UK only). The default is OSM.
    MAP_TYPE: 'OSM',

    // namespace for storing drafts etc in. Should not need to change
    NAMESPACE: 'fixmystreet',

    // directory to store draft photos in. Should not need to change
    FILES_DIR: 'photos',

    // accuracy in meters required before geolocation is successful
    ACCURACY: 100,

    // how long, in milliseconds, before photo uploads timeout. Defaults to 120000 ( 2 minutes )
    UPLOAD_TIMEOUT: 120000,

    // Set to 1 to log debug messages to the console
    DEBUG: 0,

    // Bing Maps API key if needed
    BING_MAPS_API_KEY: '',

    // Set this to true if you want to disable the help button on the right hand
    // side of the screen. NB you'll also need to hide #display-help and #help
    // elements in your CSS.
    HELP_DISABLED: true,

    // Set this to true if the user must provide at least one photo when making
    // a report. If this is true the 'skip' button on the photo page is removed
    // and 'next' doesn't appear until at least one photo is attached.
    PHOTO_REQUIRED: true,

    // The maximum number of photos the user can attach to a report.
    MAX_PHOTOS: 10,

    // If this is true then the user must login as the first step after
    // installing the app, and before making any reports.
    LOGIN_REQUIRED: true,

    PINS: {
        location: {
            image: 'images/pin@x2.png',
            background: 'images/pin_shadow@x2.png',
            image_svg: 'images/pin.svg',
            background_svg: 'images/pin_shadow.svg',
        }
    },

    // The ratio of the data bounds to the viewport bounds (in each dimension).
    // See http://dev.openlayers.org/releases/OpenLayers-2.13.1/doc/apidocs/files/OpenLayers/Strategy/BBOX-js.html
    MAP_LOADING_RATIO: 3,

    SKIP_CONFIRM_REPORT: true,

    POTHOLE_SIZES: {
        tiny: "XS: up to 20cm diameter",
        small: "S: up to 35cm diameter",
        medium: "M: up to 50cm diameter",
        large: "L: up to 60cm diameter and deep",
        crater: "XL: avg. 70cm - 100cm diameter and deep",
        "": "Not pothole"
    }
};

// This bit is so this can be imported as a nodejs module for hook processing
var module = module || {};
module.exports = CONFIG;
