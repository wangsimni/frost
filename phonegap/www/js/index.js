
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var networkState = app.checkConnection();
        if (networkState == Connection.NONE) {
            window.location.replace('connection.html');
        } else {
            setTimeout(function() {
                window.location.replace(app.webAppUrl);
            }, app.timeout);
        }
    },

    checkConnection: function() {
        var networkState = navigator.network.connection.type;
        return networkState;
    },

    webAppUrl: 'http://frost.wangsimni.mintrupt.com/',
    timeout: 2000
};
