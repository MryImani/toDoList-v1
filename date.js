

exports.getDate = function (){
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
      
    }
    
    return today.toLocaleDateString("fa-IR", options);
}

exports.getYear = function ()
{
    let today = new Date();
    return today.getFullYear();
}
