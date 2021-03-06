(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createPlatform(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
         
        createCannon("top", 450);
        createCannon("top", 150, 13000);
        createCannon("top", 200, 13000);
        createCannon("top", 100, 13000);
        createCannon("top", 150, 14000);
        createCannon("top", 200, 14000);
        createCannon("top", 100, 14000);
        createCannon("top", 150, 15000);
        createCannon("top", 200, 15000);
        createCannon("top", 100, 15000);
        createCannon("top", 150, 16000);
        createCannon("top", 200, 16000);
        createCannon("top", 100, 16000);
        createCannon("top", 150, 17000);
        createCannon("top", 200, 17000);
        createCannon("top", 100, 17000);
        createCannon("top", 150, 18000);
        createCannon("top", 200, 18000);
        createCannon("top", 100, 18000);
        createCannon("right", 650, );
        createCannon("right", 610, 1500);
        createCannon("left", 140, 10000)
        createCannon("bottom", 120, 4000);
        createCannon("bottom", 700, 1000);
        createCannon("bottom", 750, 2000);
        createCannon("bottom", 650);
        createCannon("bottom", 850, 3000);
        createCannon("bottom", 800);
        createCannon("bottom", 330, 3000);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
