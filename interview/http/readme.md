- http 各个版本的特点和细节
    - http 0.9 
    1991 只支持GET 请求，响应内容为纯文本
    - http 1.0 1996
    引入了 POST HEAD PUT 等方法 restful
    支持响应头，状态码，字符集，多部分发送，代理
        Cookie
        Web app
        B/S C/S
    - HTTP 1.1 1999
        持久化连接 keepAlive
            TCP 三次握手 四次挥手 非常耗费性能
        管道传输 pipline
            同一个TCP 上发送多个请求，
            节省了每次请求建立连接的开销
        Cache 值有哪些？
            - public
                Cache-Control: public, max-age=86400,CDN或代理服务器缓存 中间商
            - private
                只能被客户端缓存 不允许中间节点缓存
            - 只设置max-age
                单位为秒
            - no-store
                谁也不可以缓存，走缓存
            - no-cache
                客户端或中间服务器需要发起验证请求，已确认缓存中的响应数据是否过期，过期则需要向服务器请求
            - must-revalidate
                客户端或中间服务器不得缓存过期的响应，并要求验证
                If-Modified—Since If-None-Match
        
        - 虚拟主机
            服务器建站角度 我们头脑中的一对一 但域名 n -> 1 ip 映射
            解决了
                服务器的共享
                HOST 字段 指定的域名  -> 

    - HTTP 2.0 
        多路复用的能力 双向八车道 
            二进制分帧（Frame） 每个frame 都是一个二进制数据块，大小可控 id
            多路复用
        服务器推送
    
    - HTTP 3.0

- HTTPS 
    HTTPS = HTTP + SSL/TLS
        SSL 安全层
        TLS 传输层安全
        HTTP  这是明文信息
        HTTPS 283hd9saj9cdsncihquhs99ndso
        HTTPS 传输的不再是文本，而是二进制工作流，传输更高效，且加密处理更安全

        A  中间人  B
        对称加密算法  摩斯密码 加密解密一样 一个密码就能加密解密
        加密算法如何传递呢？
        非对称加密 公匙和密匙

        非对称加密（自己加密解密 性能差开销大）-> 打开的箱子不被中间人攻击（证书颁发机构 CA） 服务器把自己的公匙登录到CA

        - 客户端发送HTTPS 请求 连接到服务器的443端口，进行三次握手
        - 服务器端向客户端发送数字证书，其中包含公匙（证明你是谁），证书颁发者（浏览器证明权威性），到期日期
            服务器会在服务器上使用RSA 等非对称加密算法生成公匙和私匙
        - 客户端受到证书，会验证书的有效性（浏览器），
            生成一个随机的pre-master key 将它通过接收到的公匙发送给服务器
        - 服务器使用私匙 得到pre-master key
        - 对称加密



