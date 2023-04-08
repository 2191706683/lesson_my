# typescript 业务点
- 登录业务
    v-model usename password
    interface LoginInfo {
      username: string;
      password: string;
    }

    const param = reactive<LoginInfo>({
        username: 'admin',
        password: '123123'
    })
    
    el-input v-model="param.username"
    import type { FormInstance, FormRules } from 'element-plus'
    const rules: FormRules = {

    }
    const login = ref<FormInstance>()
    formEl : FormInstance | undefined
    
    interface ObjectList {
        [key: string]: stinrg[]
    }

- 权限深入定制方案
    - 登录 localStorage.getItem('ms_username')
        排除登录页本身
    - 角色 设置权限数组
        - permissStore 
            key  设置当前
            defaultList  admin use
            权限数组  to.permiss 是否在里面
    - 路由守卫
         - document.title
         - 登录拦截
         - 角色拦截
