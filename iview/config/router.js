//加载模板文件  
import index from '../page/index'  
import list from '../page/list'  
//路由规则设置  
export default [  
    {  
        path: '/',  
        component: index  
    },  
    {  
        path: '/list',  
        component: list  
    }  
]  