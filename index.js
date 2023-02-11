const sql = require("mssql/msnodesqlv8")

var config= {
    server:"DESKTOP-19A3TOA\\MIS",
    database:"RH",
    driver:"msnodesqlv8",
    user:"sa",
    password:"",
        options:{
            trustedConnection:true,
        }
}

sql.connect(config,function(err){
    if(err)console.log(err);
    var request=new sql.Request();
request.query("Select  * from tblfuncionarios WHERE MATRICULA=1048",function(err,records){
    if(err)console.log(err);
    else
    console.log(records);

})

})