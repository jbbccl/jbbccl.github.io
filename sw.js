/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/cs/enviroment/hexo github搭建博客/index.html","b7992ba833a55289ab2b0521f62450cd"],["/2024/10/13/cs/enviroment/dabian/index.html","352d2313d985a113d33a97d268b7021b"],["/2024/10/14/cs/web/sqli-labs/sqli-labs-less_1,4,11/index.html","c23d8ed35d481e8299955cd50e1d467d"],["/2024/10/30/cs/web/sqli-labs/sqli-labs-less_7,8/index.html","9b4fcb1c4f01c7de08a248443667afab"],["/2024/11/07/cs/enviroment/v-for中控制特定元素/index.html","71b79439d4b4b4a3b9f54d1b527f2dbe"],["/2024/11/08/cs/algo/二叉数非递归遍历/index.html","051fadbef967910719999db30a1228e0"],["/2024/11/08/cs/misc/进程使用端口记录/index.html","bca9aed77fa49d8c5868e2ee494b2324"],["/2024/11/08/cs/web/python/bottle_反序列化[xyctf2025]signin/index.html","c8949ab2d78a844251fbacd6e2b7029f"],["/2024/11/10/cs/enviroment/hexo-neat不能压缩部分js文件-解决/index.html","cda200d5d6f008f8fd2c9be5834fc4a5"],["/2024/11/11/cs/enviroment/Hexo的md解析器将半角单引号转换成全角/index.html","7713284bb87bfa7f7436002ba027fbb9"],["/2024/11/20/cs/web/sqli-labs/sqli-labs-less-1-10/index.html","f2da53d34dba15b7d69071c69d5e0a0b"],["/2024/11/22/cs/web/sqli-labs/sqli-labs-less-11-22/index.html","efedbfbbe76ac91ddcc34b03325971d1"],["/2024/11/24/cs/web/sqli-labs/sqli-labs-less-23-27/index.html","26a11a83a138de14bbba0023b91b476c"],["/2024/11/28/cs/web/sqli-labs/sqli-labs-less-28-37/index.html","d6da845d5ea4306e9618cc3ead1dee0a"],["/2024/12/04/cs/web/sqli-labs/sqli-labs-less-35-45/index.html","4f59920fb5f0c5ce823f5aab8a0ab7ac"],["/2024/12/07/cs/web/upload-labs/upload-labs/index.html","6e76727f71c75e2e505646cff171a613"],["/2025/04/20/cs/web/sqli-labs/[xyctf2025]ezsql/index.html","bcb83685d5d9954dc90986a1e26cfedd"],["/2025/05/03/cs/web/php/php无参RCE/index.html","5b0211a1306b9200c1831eadf14f249e"],["/2025/05/10/cs/enviroment/安卓动态调试环境/index.html","50ff9aae4e5d2abbc1e62b9ef1e62e48"],["/2025/05/12/cs/enviroment/php调试环境/index.html","2fd9077f113ad52ac1a60494d2b6eb7e"],["/2025/08/16/cs/web/python/SSTI-jinja [xyctf2025] now you see me/index.html","ebb7f32f4a46871a279b081f6ecc81a9"],["/2025/08/22/cs/enviroment/intel单核显SR-IOV虚拟化直通QEMU_KVM/index.html","89355eb3835a58e2a10f80bf1adf6c50"],["/2025/10/23/cs/web/php/php长度限制_字符限制RCE/index.html","3668512af1213b416d34a29a5b2fcc20"],["/2025/10/29/cs/web/php/[geek2025]popself/index.html","50129748a21494461bf0e44880df77bd"],["/2025/12/12/cs/enviroment/podman容器图形应用/index.html","327aa4db6490a18fc5576d988ee2e711"],["/archives/2024/10/index.html","b2b121dea19ab7a87a5a1899ebbb6641"],["/archives/2024/11/index.html","6e0e9bb70eeb4854d8819a7fa8e20d3d"],["/archives/2024/12/index.html","472ae78aeae0ab638956081661185c0e"],["/archives/2024/index.html","2c814521e09f27d11047f3d0c8fbdc90"],["/archives/2024/page/2/index.html","ce47f4d6ab9b0a4daa1aad9217ac1dc5"],["/archives/2025/04/index.html","fcc1124d4fa1c2095873c321cb62af2a"],["/archives/2025/05/index.html","1fb9b83bc17014c03846a6ec98c47478"],["/archives/2025/08/index.html","9c4dba39b3d4ddf700a3ef31985cbe98"],["/archives/2025/10/index.html","cac51b8d59db7f7ffb26d8fb9d1a592e"],["/archives/2025/12/index.html","462e046d3dfb11d4860d000c29fdd52a"],["/archives/2025/index.html","4e01ebc2de9f319017f2ea4cba407784"],["/archives/index.html","ee35dc4b3443c40243b20c31e4891c64"],["/archives/page/2/index.html","4aefbcf4df9cf773f0d5a246cccd82be"],["/archives/page/3/index.html","09408523e7200fd5bde1ddef915c65a5"],["/categories/algo/index.html","bd95dd21f62df75f627cea4e86de2375"],["/categories/index.html","1018707eab362ad03b50406a013a039b"],["/categories/misc/index.html","c0f835e307aef72e80ef979f6a0f6a4a"],["/categories/php/RCE/index.html","b52a3d5e79ad6648de56918eadc54155"],["/categories/php/index.html","8779829f2fec299be6ef3cbbf67cdd79"],["/categories/php/unserialize/index.html","2a5b8561239afedde46f10e3f1d9fc4d"],["/categories/python/SSTI/index.html","03fc52a8768926117df1e982e0490a80"],["/categories/python/index.html","e9f6c5144a8162e6bf6ee38d4fff252f"],["/categories/sqli/index.html","039d982d9d6295d6ab00f8f27f17077a"],["/categories/upload/index.html","3dd9fc36a9fe64c6dc099d2fd5b81e4b"],["/categories/web/index.html","6269e04ae78c21ca58b4484c81ceb0c1"],["/categories/web/python/index.html","18e2b382c416269e311e961cbcb1430b"],["/categories/web/python/unserialize/index.html","9d667ec8fe377268e0ac2c4f66647b95"],["/categories/web/python/unserialize/pickle/index.html","93db923426c352ea3f68521fc2d4b289"],["/categories/环境/dotfile/index.html","fa2dfd9156af43624d25b6d937c3e168"],["/categories/环境/hexo/index.html","f0456976c34d7520bbd43ebd38206051"],["/categories/环境/index.html","7dc5170beba303f2fc8bfe574fe03426"],["/categories/环境/mobile/index.html","225d9d5e7467010e5c3cd8f0fa705f27"],["/categories/环境/php/index.html","ecd8ac929c7a5dae20454f8e98fbeaf9"],["/categories/环境/vue3/index.html","46dc383454003b108ff9bc0b6ef56fab"],["/categories/环境/虚拟化/index.html","1cf1c94e0ab96890776d49ac4c6106c8"],["/css/main.css","369fa2b8f42660e788831b91381ea436"],["/css/noscript.css","eae3e73ec7dd403c48780071e7b91064"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hexo-neat不能压缩部分js/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/hexo-neat不能压缩部分js/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/ida使用/引用.png","04b8f3bf7d9123ce2b6010223e227301"],["/images/ida使用/插入结构体.png","3ba09e9da9754a94ba5dbb0476d43cb7"],["/images/ida使用/搞错了.png","dd6529ce6b236c188de81e4f5d1561b3"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/php_SSTI/Smarty引擎.png","db8e6dcf861e44b9af3798ab9de6a6a8"],["/images/php_SSTI/Smarty文档.png","f1c84ce2d975329d7b6d037a245fe4ac"],["/images/php_SSTI/点位.png","16e5da53f3b2726265660f81e16051a7"],["/images/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/php无参RCE/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php无参RCE/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/vscode配置cmake环境/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/vscode配置cmake环境/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/vscode配置cmake环境/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/vscode配置cmake环境/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/vscode配置cmake环境/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/外部/新版flask的pin码计算/3475290-20241105210542327-144503_2e2f28ea60d4400aa.png","24397ac27d6e4492ff3d01460df60d7d"],["/images/外部/新版flask的pin码计算/3475290-20241105210542526-210443_61d514a0f5b2447ea.png","01df6015608c26aa92ebb0ef73ae2b3f"],["/images/外部/新版flask的pin码计算/3475290-20241105210542722-215211_7f2eaa82683440ab9.png","aa542b02630507bf123d1b5e75bfe93a"],["/images/外部/新版flask的pin码计算/3475290-20241105210542869-210109_f4086838ba3e4e0d9.png","0881ac75abbb73b62533e56f2a97c80c"],["/images/外部/新版flask的pin码计算/3475290-20241105210543110-182782_b8f087b38c284834b.png","d95a688f84876a4f4384ae37d2833b89"],["/images/外部/新版flask的pin码计算/3475290-20241105210543380-808680_d180df3b06bd4ee8b.png","ab986e1cbe19ffd129e1329a3673eaf9"],["/images/外部/新版flask的pin码计算/3475290-20241105210543570-100418_7c933b5dfdd94f969.png","92b8875253a1b308f18013c3edbbdb2d"],["/images/外部/新版flask的pin码计算/3475290-20241105210543852-837886_c02ac0ee16e349939.png","afb830ff5831a55891f9b30f2452cf23"],["/images/外部/新版flask的pin码计算/3475290-20241105210544074-556149_65117fc5b6dd4d678.png","bed94370ddc18dac573d680e7833abff"],["/images/外部/新版flask的pin码计算/3475290-20241105210544268-223023_612649b429d4407db.png","c71bf600f817e101cae944dbabd9060b"],["/images/外部/新版flask的pin码计算/3475290-20241105210544479-192560_3171553a0f0b4332b.png","8507a2a447bda25a56b6b30a4dff3bfb"],["/images/外部/新版flask的pin码计算/3475290-20241105210544774-137777_16b6bfcb83fc47eca.png","f4c2f81480415053dc99711f17ee1a0e"],["/images/外部/新版flask的pin码计算/3475290-20241105210544968-733520_2ae0b457e540478ca.png","9c90a02702cb3bcd6c7ec32c414cb93d"],["/images/外部/新版flask的pin码计算/3475290-20241105210545159-109972_3d2066c2960e4254b.png","739a24ab1bc108088f5dc73261e0f49c"],["/images/外部/新版flask的pin码计算/3475290-20241105210545385-211814_37c9da40bd344726b.png","9b17a59f1a3c24d5c3907e34476514e7"],["/images/外部/新版flask的pin码计算/3475290-20241105210545543-126616_3cfef6072067485e9.png","2c3d97fcd05d08ad53c75133114c2101"],["/images/外部/新版flask的pin码计算/3475290-20241105210545699-998906_7f11faee4de5489fb.png","1b9581f0bfb578333717ce1cad6d22a0"],["/images/外部/新版flask的pin码计算/3475290-20241105210545876-708429_f5754a6b719f4f38b.png","ffe920470fd36a0d8a73d577fd08f3a4"],["/images/外部/新版flask的pin码计算/3475290-20241105210546074-271902_e4b3ba03c7c049ceb.png","1a2a31e72ec82b0558f0cfa6f2e8e3b5"],["/images/外部/新版flask的pin码计算/3475290-20241105210546246-191347_f4a5a8bfb2fd485a9.png","850950db59d1fdf2c99dc65e65e27241"],["/images/外部/新版flask的pin码计算/3475290-20241105210546448-110113_9470621b41cc4bd48.png","c1cf7af763b22c4aaa89120f37ff1ca1"],["/images/外部/新版flask的pin码计算/3475290-20241105210547075-879787_80dfc6e28f9043b4a.png","f1e578a3b15fd138628a31f4b500cb5e"],["/images/外部/新版flask的pin码计算/3475290-20241105210547448-158471_b454c365d14c4bf7a.png","63a7d270ea59b62eab136bba711be74c"],["/images/外部/新版flask的pin码计算/3475290-20241105210547676-782393_9076ebed1fd442309.png","1f2bddbbe2e32ad12e4579fb26665220"],["/images/外部/新版flask的pin码计算/3475290-20241105210547846-356458_b2e87a5904994e179.png","39ed587b6d5904bb430f7e04ac6b1696"],["/images/外部/新版flask的pin码计算/3475290-20241105210548031-171835_aedafaecee4d4e329.png","a24ce045887dc47e2557c5e5649d7441"],["/images/外部/新版flask的pin码计算/3475290-20241105210548251-686390_8ea5f3c6e9684d619.png","cb7f2649c52ced22abd3feabe2da81cf"],["/images/外部/新版flask的pin码计算/3475290-20241105210548425-202198_ae6d45774d2a42deb.png","63e723ee30dd93aca4049b4f426a537e"],["/images/安卓动态调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/安卓动态调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/安卓动态调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","0bfc9460bd4ac11c61832405ae214f16"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","63574b7b401beb4635964da5ff6db35a"],["/js/pjax.js","b8cf673cb986e175da6188379ca8d918"],["/js/schedule.js","b486a529182d17221cc23aef4822c8a8"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","f5f9c1a37e18a068a6da114fcefca78e"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","061c14d3ba73ff6256e463f04dace299"],["/js/third-party/comments/disqus.js","abfd13cd9738d2bfbeea54801dbe2418"],["/js/third-party/comments/disqusjs.js","1ad71d07f9cf0784087896f213245957"],["/js/third-party/comments/gitalk.js","85e6378484725ce90671b7d2393b9da3"],["/js/third-party/comments/isso.js","a58076e3d641979e5df4dda05aa21b44"],["/js/third-party/comments/livere.js","efc1869e3bda61d86c8a0d34d10f236e"],["/js/third-party/comments/utterances.js","e49ef86026739b837b5e04b6d017a139"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","961cc7b833796e6383097656f50c1f63"],["/js/third-party/search/local-search.js","00364b680de714e73845d018e60e08e1"],["/js/third-party/statistics/firestore.js","a45b8765d447cb2132bcd63d026e1910"],["/js/third-party/statistics/lean-analytics.js","76173d4f418ca139dbc4904be5905e88"],["/js/third-party/tags/mermaid.js","3f161c4f1439779555745f8991a3a6d1"],["/js/third-party/tags/pdf.js","907e0778e9c2a384e662702d15932a72"],["/js/third-party/tags/wavedrom.js","3cc40bc51a87927d18edb0ba01cb05f3"],["/js/utils.js","f15f1788b3b9167a08efddc77097742c"],["/page/2/index.html","61ad62185fafce10217da6bf5f4dedf1"],["/page/3/index.html","96e77961855277efb6e6b580459a3f6c"],["/sw-register.js","c359ba5a2b4b6888211ffdceb669f2c8"],["/tags/RCE/index.html","9e9688ce6986efd3a3545de43ee3955a"],["/tags/SSTI/index.html","eac5980a790e73b5b601a6403192c03a"],["/tags/bash/index.html","e46f85320bc247b99719640c0e5157d4"],["/tags/bottle/index.html","8a543390d95b8a2d35036363b3f56b2b"],["/tags/c/index.html","50a0de97f2e9fa5c23a61029eec8e525"],["/tags/deb/index.html","cb1ca1b819a321b4b74b2e02d6f2b78e"],["/tags/docker/index.html","afcb2a7550f98f468fe61d4b34fac316"],["/tags/hexo/index.html","e92f1d49bdcf26495adbf77f3d654c66"],["/tags/index.html","559674a5537d496358b229c38b2e0dab"],["/tags/mobile/index.html","5b56ebb0bf3faf1225998c02fe50583d"],["/tags/php/index.html","74321bd279707af059aeeccebec75ebb"],["/tags/pickle/index.html","22c3482ff7f3dafb557ae3c390ba93ec"],["/tags/podman/index.html","f65ae5e7cdc7f17aecf2fbe2efad6e20"],["/tags/pop/index.html","1f6695d0ead705b008f96d50e2016fcf"],["/tags/python/index.html","421ecaf1048d9b33a4e9edbf8ccf6d91"],["/tags/rce/index.html","82dbd35086e23d5c01db6c4b0963c7db"],["/tags/re/index.html","2d3274842a67ed4ccba6564ef4abf530"],["/tags/sqli/index.html","6cc024371e6ab0ad09e0639ce52a6097"],["/tags/unserialize/index.html","d2fb0e39a75be4337954ebff2aa61552"],["/tags/upload/index.html","977e1be91327c67b5141cb585ce0ba7e"],["/tags/vscode/index.html","b865e59db39a0348e60f142ac31d8458"],["/tags/vue3/index.html","c1b986c335319c863229fdcfd4bc2772"],["/tags/web/index.html","83b4d88ed9b6e73226f8eed0cf0abd2c"],["/tags/乱七八糟/index.html","a049663f30389002d755f73d8748ff92"],["/tags/初见/index.html","55ef446da67763d6c3d39537a204ee73"],["/tags/虚拟化/index.html","7c3fed70ee76f9ed0bf103fcc618f91a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
