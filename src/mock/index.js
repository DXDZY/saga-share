import Mock from 'mockjs';

//设置响应时间
Mock.setup({timeout:0});

Mock.mock('api/fetchData',function(options){
    console.log(options);
    return '登陆成功'
});
