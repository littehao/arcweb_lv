import storeCreat from '~/store/index'
let store = storeCreat();

export default function(context) {
    let userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent)){
        context.userAgent = 'mobile'
    }else{
        context.userAgent = 'default'
    }
    store.commit('setAgent', context.userAgent)
}