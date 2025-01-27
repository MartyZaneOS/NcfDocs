# 关于NCF

<img src="./images/logo.png" width="300" />

NeuCharFramework(NCF) 是一整套可用于构建基础项目的框架，包含了基础的缓存、数据库、模型、验证及配套管理后台，模块化，具有高度的可扩展性和耐造性。

当前版本：`0.3.1-beta3`

## 理念：简单、灵活、可扩展

### 简单
提供健壮、耐造的底层框架，不追求完美，但一定要实用。

### 灵活
更加严格的 DDD 模式设计，结合模块化应用灵活应对变化。

### 可扩展
提供高度模块化的架构，1 键安装、1 秒集成。

## 支持的.NET Core版本

NCF 已全面兼容 .NET Core 3.1 和 .NET 5.0 、 .NET 6.0、.NET 7.0。

## 支持的数据库

目前已支持 SQLite、SQL Server、MySQL、PostgreSQL、Oracle 等数据库

## 开源协议

Apache License V2.0

**100% 开源，支持商用**

## 源码地址

|       | GitHub   |  Gitee    | 说明 
|-------|----------|-----------|---------
NCF 模板|[NCF](https://github.com/NeuCharFramework/NCF)|[NCF](https://gitee.com/NeuCharFramework/NCF)| 可直接用于开发的基础代码框架，常规开发只需要下载此项目。
NcfPackageSources |[NcfPackageSources](https://github.com/NeuCharFramework/NcfPackageSources)  |[NcfPackageSources](https://gitee.com/NeuCharFramework/NcfPackageSources)| `NCF 模板`项目所引用的基础库代码，以 Nuget  包形式发布，被 `NCF 模板`引用，同样 100% 开源，如需深度开发或研究基础原理可以下载。

<!-- NCF 模板|[https://github.com/NeuCharFramework/NCF](https://github.com/NeuCharFramework/NCF)|[https://gitee.com/NeuCharFramework/NCF](https://gitee.com/NeuCharFramework/NCF)| 可直接用于开发的基础代码框架，常规开发只需要下载此项目。
NcfPackageSources |[https://github.com/NeuCharFramework/NcfPackageSources](https://github.com/NeuCharFramework/NcfPackageSources)  |[https://gitee.com/NeuCharFramework/NcfPackageSources](https://gitee.com/NeuCharFramework/NcfPackageSources)| `NCF 模板`项目所引用的基础库代码，以 Nuget  包形式发布，被 `NCF 模板`引用，同样 100% 开源，如需深度开发或研究基础原理可以下载。 -->

> 当前快速更新分支：[Developer](https://github.com/NeuCharFramework/NCF/tree/Developer)

## 说明
> NCF 由盛派（Senparc）团队经过多年优化迭代的自用系统底层框架 SenparcCore 整理而来，经历了 .NET 3.5/4.5 众多系统的实战检验，并最终移植到 .NET Core（同时支持 .NET 5.0/6.0/7.0），高度模块化。NCF 目前已在多个 .NET Core 系统中稳定运行，在将其转型为开源项目的过程中，需要进行一系列的重构、注释完善和兼容性升级，目前尚处于雏形阶段，希望大家多提意见，我们会争取在最短的时间内优化并发布第一个正式版。感谢大家一直以来的支持，欢迎加入社区贡献者的行列！

> Preview1 版本中，我们将提供更加完善的模块化架构和辅助工具，当前源码已经可用于学习和测试使用。


<center><img src="https://weixin.senparc.com/images/NCF/login.jpg" /></center>

> 我们欢迎第三方开源组件提供自己的解决方案，我们将会测试并集成到 NCF 中。


NCF 除了会为大家提供完善的框架代码，我们还在着手：


1. [x] 提供完善的项目自动生成服务（参考 [WeChatSampleBuilder](http://sdk.weixin.senparc.com/Home/WeChatSampleBuilder)），为开发者提供项目定制生成服务。

1. [x] 提供快捷的模块化开发和安装方法。  

1. [ ] 开源 [NeuChar.com](https://www.neuchar.com/) 中的微信功能模块，可使用独立模块集成。

1. [ ]提供完善的示例代码和文档。

1. [ ]提供博客和视频教程（也欢迎开发者参与或发起）。

1. [ ]提供交流社区，包括但不仅限于[问答网站](https://weixin.senparc.com/QA)、[QQ群](#qq-技术交流群)、微信群、直播群。

## QQ 技术交流群

<img src="https://sdk.weixin.senparc.com/images/QQ_Group_Avatar/NCF/QQ-Group.jpg" width="380" />
