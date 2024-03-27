const middletwo=  function(req, res, next){


    console.log("This is second middleware");
    
    next();
    
    }

    module.exports = middletwo;