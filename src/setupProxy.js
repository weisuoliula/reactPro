const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://wap.tripyum.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
    app.use("/api",proxy({
        target:"http://39.105.204.151:3000",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}