const middleone=  function(req, res, next){


    console.log("This is first middleware");
    
    next();
    
    }

    module.exports = middleone;
    