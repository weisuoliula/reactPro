import http from 'utils/request';

export const banner =()=>http.post({
    url:"/api/Ajax/getSyData",
    data:{
        
    }
})

export const sousuo =()=>http.post({
    url:"/api/Ajax/fsqSearch",
    data:{
        
    }
})