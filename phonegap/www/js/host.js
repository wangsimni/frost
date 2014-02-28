
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        document.getElementById('host').contentWindow.app = app;
    },
    open: function(url, name) {
        window.open(url, name);
    }
};
