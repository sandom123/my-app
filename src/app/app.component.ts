//这里从Angular核心模块中引入了component装饰器
import { Component } from '@angular/core';

//用装饰器定义了一个组件以及组件的元数据，所有的组件都必须使用这个装饰器来注解
@Component({
  /**
   * 组件元数据 Angular会通过这里的属性来渲染组件并执行逻辑
   */
  selector: 'app-root',//selector就是css选择器,表示这个组件可以通过app-root来调用,index.html中有个<app-root>Loading...</app-root>标签，这个标签用来展示该组件的内容
  templateUrl: './app.component.html',//组件的模板，定义了组件的布局和内容
  styleUrls: ['./app.component.css']//该模板引用哪个css样式
})
/**
 * AppComponent本身就是一个普通的TypeScript类，但是上面的组件元数据装饰器告诉Angular,AppComponent是一个组件，
 * 需要把一些元数据附加到这个类上，Angular就会把AppComponent当组件来处理
 */
export class AppComponent {
  //这个类实际上就是该组件的控制器，我们的业务逻辑就在这个类中编写
  title = '学习Angular';
}
