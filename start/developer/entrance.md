# 入口文件

入口文件 `Senparc.Web\Program.cs`

进入到.Net6时代以后，入口的命名空间的引用全部都归集到了 `Senparc.Web\GlobalUsings.cs` 的文件中，内容如下

```
global using Microsoft.AspNetCore.Builder;
global using Microsoft.AspNetCore.Hosting;
global using Microsoft.Extensions.Hosting;
global using Senparc.Ncf.Database;
global using Senparc.Web;
global using Dapr.Client;
```

所有需要公共需要应用的命名空间都可以放到这里

## 项目的sdk设定

主要看 `Senparc.Web\global.json` 这个文件，内容如下

```
{
  "sdk": {
    "version": "6.0.100"
  }
}
```

可以通过修改sdk的版本号来修改当前项目使用sdk的版本
