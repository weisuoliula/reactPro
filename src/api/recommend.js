import http from "utils/request"
export const getGoodsListApi = (type_id,p,p_num) => http.post({
    url: "/ajax/Ajax/getGoodsList",
    headers: {
        "content-type":"application/x-www-form-urlencoded;"
    },
    data: {
        type_id,
        p,
        p_num
    }

})

export const detailApi = (art_id) => http.post({
    url: "/ajax/Ajax/getGoodDetail",
    //https://wap.tripyum.com/Ajax/getGoodDetail
    headers: {
        "content-type":"application/x-www-form-urlencoded;"
    },
    data: {
        art_id:art_id
    }

})
export const registerApi = (username,password) => http.post({
    url: "/api/users/register",
    /* headers: {
        "content-type":"application/x-www-form-urlencoded; "
    }, */
    data: {
        username,
        password
    }

})
export const loginApi = (username,password) => http.post({
    url: "/api/users/login",
    /* headers: {
        "content-type":"application/x-www-form-urlencoded; "
    }, */
    data: {
        username,
        password
    },
    
})