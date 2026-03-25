var fs = require("fs");
fs.writeFile("Source.txt","dhandha ma dhyan apo brbr chee ??!",function(err){
    if(err){
        console.log(err);
    }
    else{
        fs.copyFile("Source.txt","Dest.txt",function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("file copied")
            }
        })
    }
})