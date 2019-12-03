const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/api",proxy({
        target:"https://wap.tripyum.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}