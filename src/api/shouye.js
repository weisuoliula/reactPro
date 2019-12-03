import http from 'utils/request';

export const banner =()=>http.post({
    url:"/ajax/Ajax/getSyData",
    data:{
        
    }
})

export const sousuo =(target_str)=>http.post({
    url:"/ajax/Ajax/fsqSearch",
    data:{
        target_str:target_str,
        p: 1,
        p_num: 10
    }
})