import zrCheckboxGroup from './zrCheckboxGroup.vue'
//将组件注册为插件 导出
export default {
    install: (app: any) => {
        app.component(zrCheckboxGroup.name, zrCheckboxGroup)
    }
}