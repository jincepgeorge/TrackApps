cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-market.Market",
        "file": "plugins/cordova-plugin-market/www/market.js",
        "pluginId": "cordova-plugin-market",
        "clobbers": [
            "cordova.plugins.market"
        ]
    },
    {
        "id": "cordova-plugin-spinnerdialog.SpinnerDialog",
        "file": "plugins/cordova-plugin-spinnerdialog/www/spinner.js",
        "pluginId": "cordova-plugin-spinnerdialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-email-composer.EmailComposer",
        "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
        "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-market": "1.2.0",
    "cordova-plugin-spinnerdialog": "1.3.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-email-composer": "0.8.15",
    "cordova-plugin-statusbar": "2.4.1"
};
// BOTTOM OF METADATA
});