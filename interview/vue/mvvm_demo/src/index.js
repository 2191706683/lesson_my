import MVVM from './mvvm';

var vm = new MVVM({
    el: '#mvvm-app',
    // vue 2.0 options api
    data: {
        title: 'hello world'
    },
    methods: {
        clickBtn: function(e) {
            // this.title 代理 defineProperty
            this.title = '你好'
        }
    }
})

// setTimeout(() => {
//     vm.title =  '达瓦里希'
// }, 1000)