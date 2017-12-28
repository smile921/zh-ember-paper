# zh-ember-paper

## 使用 ember-paper 
练习使用这个插件，熟悉这个插件，先来个小目标。把它的文档实现一遍，并中文化。

## 首页效果
![https://github.com/smile921/zh-ember-paper/raw/master/public/img/firstpage.png](https://github.com/smile921/zh-ember-paper/raw/master/public/img/firstpage.png)
## 使用的环境依赖 
* ember 2.16
* yarn 1.3.2
* spacemacs
* chrome 
## ember 学习手札
+ application
  + customEvents
  + eventDispatcher
  + resolver
  + rootElement
  * DOMContentReady 
  * deferReadiness()
  * advanceReadiness()
  * ready() to setup a router
+ initializer
+ InstanceInitializer 在所有的 initializer 之后执行

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd zh-ember-paper`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Ember DDAU 笔记
*  action 定义在 component 可以直接在 template中使用 action 即可
*  action 定义在 controller 中，需要在 route的template 中使用 component是作为action 传递到组件 actionName=(action 'actionName'),在组件中使用时可以直接this.sendAction('actionName',parmas);
*  action 定义在 route 中，不能直接在route的template 中使用，也不需要显示的向下传递，在组件中可以直接定义 一个属性 actionName:'actionName',组件就可以直接this.sendAction('actionName',params);