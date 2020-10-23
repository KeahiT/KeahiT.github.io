(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 100000000},
        max: {assetKey: 'max', points: 200},
        steve: {assetKey: 'steve', points: 300},
        grace: {assetKey: 'grace', points: 400},
        kennedi: {assetKey: 'kennedi', points: 500}
    };
    
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCollectable(type.kennedi, 100, -1000, 1000, 0.1);
        createCollectable(type.kennedi, 400, 600, 1000, 1000);
        createCollectable(type.kennedi, 380, 600, 1100, 1100);
        createCollectable(type.kennedi, 420, 600, 900, 800);
        createCollectable(type.steve, 0, -1000, 1000, 0.1);
        createCollectable(type.max, 360, -1000, 1000, 0.1);
        createCollectable(type.db, 360, 430, 80, 60);
        createCollectable(type.db, 740, 250, 0.01, 60);
        createCollectable(type.grace, 200, -1000, 1000, 0.1);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);