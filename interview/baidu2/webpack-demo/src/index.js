document.addEventListener('DOMContentLoaded', function () {
    const btnIndex = document.getElementById('btn-index');
    const btnLogin = document.getElementById('btn-login');

    btnIndex.addEventListener('click', function () {
        import(/* webpackChunkName: "index" */ './pages/index').then((module) => {
            const index = module.default;
            index();
        });
    });

    btnLogin.addEventListener('click', function () {
        import(/* webpackChunkName: "login" */ './pages/login').then((module) => {
            const login = module.default;
            login();
        });
    });
});
