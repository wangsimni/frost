
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
    
    kakao: function() {
      window.open(app.kakaoUrl, '_system');
    },
    kakaoUrl: 'kakaolink://sendurl?msg=Frost&nbsp;최고!&nbsp;Team&nbsp;Wangsimni에서&nbsp;제공하는&nbsp;왕십리&nbsp;음식점&nbsp;선택&nbsp;서비스입니다.%0A%0A안드로이드&nbsp;애플리케이션을&nbsp;다운로드해&nbsp;보세요%3A&url=https://play.google.com/store/apps/details?id=com.mintrupt.wangsimni.frost&appid=com.mintrupt.wangsimni.frost&appname=Frost&appver=0.3.1',

    window: window
};
