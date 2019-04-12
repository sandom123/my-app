//这个文件是Angular根模块，告诉Angular如何组装应用

//BrowserModule ,浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';

//Angular 核心模块
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';//根组件

//@NgModule装饰器,接收一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [//配置当前项目运行的组件(声明模块里有什么东西 只能声明：组件/指令/管道)
    AppComponent
  ],
  imports: [//配置当前模块运行依赖的其他模块// 声明该模块所依赖的模块
    BrowserModule
  ],
  providers: [],//配置项目所需的服务
  bootstrap: [AppComponent]//指定应用的主视图(称为根组件) 通过引导根AppModule来启动应用,这里一般写的是根组件// 声明模块的主组件是什么
})

//根模块不需要导出任何东西，因为其他模块不需要导入根模块
export class AppModule { }
