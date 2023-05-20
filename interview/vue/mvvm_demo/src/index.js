import MVVM from './mvvm';

var vm = new MVVM({
    el: '#mvvm-app',
    // vue 2.0 options api
    data: {
        title: 'hello world'
    },
    methods: {
        clickBtn: function(e) {
            // this.title 代理 
            this.title = '你好'
        }
    }
})