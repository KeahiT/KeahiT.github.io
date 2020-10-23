(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(10, 700 - 32, 5, 2);    // DO NOT DELETE

        // example:
        createPlatform(100, 250, 0.5, 0.5);
        createPlatform(50, 550, 2, 1);
        createPlatform(50, 390, 0.5, 0.4);
        createPlatform(0, 320, 0.5, 2);
        createPlatform(200, 440, 0.5, 0.4);
        createPlatform(300, 460, 2, 0.6);
        createPlatform(580, 580, 0.56, 0.3);
        createPlatform(430, 380, 0.4, 0.4);
        createPlatform(310, 620, 0.4, 0.4);
        createPlatform(600, 100, 0.4, 29);
        createPlatform(550, 260, 0.4, 0.7);
        createPlatform(580, 120, 0.3, 0.6);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);