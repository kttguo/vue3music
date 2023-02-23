// 封装axios,将基础路径抽取出来。放置域名axi
// 使用的时候指定的配置将与实例的配置合并
import axios from 'axios';
let service=axios.create({
    baseURL:"http://localhost:3000/",
    timeout:3000,
})

export default service