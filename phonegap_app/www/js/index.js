
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    
    onDeviceReady: function() {
        console.log('deviceready');
        
        
        var callback = app.receivedFrequency;
        window.pitchDetection.registerFrequency( "18000", callback );
        window.pitchDetection.registerFrequency( "18200", callback );
        window.pitchDetection.registerFrequency( "18400", callback );
        window.pitchDetection.registerFrequency( "18600", callback );
        window.pitchDetection.registerFrequency( "18800", callback );
        window.pitchDetection.startListener();
        
    },

    receivedFrequency: function(frequency) {
        var chapter;
        if (frequency == 18000) {
            chapter = 1;
        }
        if (frequency == 18200) {
            chapter = 2;
        }
        if (frequency == 18400) {
            chapter = 3;
        }
        if (frequency == 18600) {
            chapter = 4;
        }
        if (frequency == 18800) {
            chapter = 5;
        }
        if (frequency == 19000) {
            chapter = 6;
        }
        
        var message = "Frequency " + frequency + "Hz Detected.</br><h3>Chapter " + chapter + "</h2>";
        document.getElementById( "feedback" ).innerHTML = message;
        console.log(message);
    }
};
