/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/cs/enviroment/hexo github搭建博客/index.html","ea294a21488212aeb281e3000277724c"],["/2024/10/13/cs/enviroment/dabian/index.html","e5e1f12331da7438509b021636c882ff"],["/2024/10/14/cs/web/sqli-labs/sqli-labs-less_1,4,11/index.html","60c9d6407aa6157830edc827873e58b3"],["/2024/10/30/cs/web/sqli-labs/sqli-labs-less_7,8/index.html","dd9941521ec7d9d31806534bdb2f5b86"],["/2024/11/07/cs/enviroment/v-for中控制特定元素/index.html","b58975e84e0a947993c00b6f879dcbed"],["/2024/11/08/cs/algo/二叉数非递归遍历/index.html","083e4ef4cceff4243bba4f7a3860b6ce"],["/2024/11/08/cs/misc/进程使用端口记录/index.html","f9bc824bb7c6c557a9a5858b7b4a601c"],["/2024/11/08/cs/web/python/bottle_反序列化[xyctf2025]signin/index.html","35f723539c15f685645369b00ad78b00"],["/2024/11/10/cs/enviroment/hexo-neat不能压缩部分js文件-解决/index.html","9ac63011b01caade759adb3899ca7baf"],["/2024/11/11/cs/enviroment/Hexo的md解析器将半角单引号转换成全角/index.html","80d73a83074bafe17b689c6874d6ed1a"],["/2024/11/20/cs/web/sqli-labs/sqli-labs-less-1-10/index.html","c71f07e26fba091228c194ecc1ae144a"],["/2024/11/22/cs/web/sqli-labs/sqli-labs-less-11-22/index.html","ac410cae1f757e06eb33ab4389ed04f2"],["/2024/11/24/cs/web/sqli-labs/sqli-labs-less-23-27/index.html","5f1b8b208511cbb76d80482a51965c9c"],["/2024/11/28/cs/web/sqli-labs/sqli-labs-less-28-37/index.html","ecf4e9047bc4eacc256f7bf8fdb4fe7b"],["/2024/12/04/cs/web/sqli-labs/sqli-labs-less-35-45/index.html","128ffd8135d66fdc4897405a0a699b98"],["/2024/12/07/cs/web/upload-labs/upload-labs/index.html","7ad347f9c4693378eb782eaecd77372f"],["/2025/04/20/cs/web/sqli-labs/[xyctf2025]ezsql/index.html","580b5963d4d17a416c204c81df4aa836"],["/2025/05/03/cs/web/php/php无参RCE/index.html","207991f0e4c65c5ab6310fcf8d939202"],["/2025/05/10/cs/enviroment/安卓动态调试环境/index.html","b9c1cc953e89236604402d2358a628f2"],["/2025/05/10/cs/web/php/php 传参妙妙trick/index.html","3ddabc6f6e2815529011a44a08ce370c"],["/2025/05/12/cs/enviroment/php调试环境/index.html","bbdb042fa3775f56e987575db4453853"],["/2025/08/16/cs/web/python/SSTI-jinja [xyctf2025] now you see me/index.html","d4d6f878386e7bac32b8531c4bc0e171"],["/2025/08/22/cs/enviroment/intel单核显SR-IOV虚拟化直通QEMU_KVM/index.html","5eeaa48d5c8387a4ef591cac0019adf8"],["/2025/10/23/cs/web/php/php长度限制_字符限制RCE/index.html","6c0e68de91cb04d7efb6738110fbb344"],["/2025/10/29/cs/web/php/[geek2025]popself/index.html","dd4ed4214f869a4b2e2cc30a06c2a096"],["/2025/12/17/cs/reverse/ezre/index.html","506c859fcb8b03bdc8190dae0f13faa9"],["/archives/2024/10/index.html","0fecb91d74c09c6626060ac92697e468"],["/archives/2024/11/index.html","dc998a43553a9b4d13dafd64f2274309"],["/archives/2024/12/index.html","8b3844e10ccbb062788e64ae201f2f83"],["/archives/2024/index.html","280cbb591f1bd4915c1c478c656387f6"],["/archives/2024/page/2/index.html","27dd06374c1a360ebb460bb45b5e1b77"],["/archives/2025/04/index.html","42981e5b74412892c49e6363e60353fa"],["/archives/2025/05/index.html","541b521ceaec83c19f880d15ecf970b2"],["/archives/2025/08/index.html","f2301aa30d10b0d074452a3f7676cefc"],["/archives/2025/10/index.html","79e2e656824c00baf7248bb4d21c074c"],["/archives/2025/12/index.html","4e4c5fc7d85d30a116f83492c96a4fac"],["/archives/2025/index.html","9a31eb4e332013726aada243bcd51649"],["/archives/index.html","6aef0d2a606a8c6bc198ef461332e4fd"],["/archives/page/2/index.html","f3ef9fe576719e3dedccc63056357a4f"],["/archives/page/3/index.html","be3abcbea9ed57b08afacbd1d6c789c4"],["/categories/algo/index.html","94b9a7cea7ad0f6522d727eff98d8ad5"],["/categories/index.html","e9abd7cf33578d54980b49c5c097c484"],["/categories/misc/index.html","16279d5716d978fa4a0c8ec3fdacd483"],["/categories/php/RCE/index.html","50944c59e2d63175bdb0564fe15ba738"],["/categories/php/index.html","bbb508023b509b408c3032905636c72a"],["/categories/php/unserialize/index.html","a3d183beec1e9db6c7b461ec9b118222"],["/categories/python/SSTI/index.html","55f138b4ba943fa93dad8988512f9b92"],["/categories/python/index.html","1b25f6d7d14a380f8359fe1edd4ce6eb"],["/categories/reverse/index.html","749a51adcec1f3256c0a78d88b26e315"],["/categories/reverse/vm/index.html","f2d4ecc76963f82074a3b8c99b5018e7"],["/categories/sqli/index.html","bb113e9d86a05e692b6069092330721b"],["/categories/upload/index.html","4943cf8625ecdbd1d219cf8650b4a9a2"],["/categories/web/index.html","742a9e033ca8f4b9e97bccc2f809ecd4"],["/categories/web/php/index.html","3d18bd79cc637ca79aebab9a12821b52"],["/categories/web/python/index.html","285ab58f988982c7c747b2af5057a449"],["/categories/web/python/unserialize/index.html","dc286a5f98471cbe6b588498b74f0872"],["/categories/web/python/unserialize/pickle/index.html","34ddf86564696bc27a185be207f43a5a"],["/categories/环境/hexo/index.html","594a3f744452c88d4c5d976ce03aa0dd"],["/categories/环境/index.html","87ae1aadcb0d6dae9d178ef60823d438"],["/categories/环境/mobile/index.html","86d81027fb16a6b9e5b7eb34dad1bea6"],["/categories/环境/php/index.html","f2c2451b9c8612e27693adae767e4702"],["/categories/环境/vue3/index.html","a5822d7af62e9e9983f91423651dd57d"],["/categories/环境/虚拟化/index.html","857dd3248b2e5f3b2825a1b509001ec8"],["/css/main.css","7b5b6cc4d60bd418d986f75668d367c3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hexo-neat不能压缩部分js/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/hexo-neat不能压缩部分js/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/ida使用/引用.png","04b8f3bf7d9123ce2b6010223e227301"],["/images/ida使用/插入结构体.png","3ba09e9da9754a94ba5dbb0476d43cb7"],["/images/ida使用/搞错了.png","dd6529ce6b236c188de81e4f5d1561b3"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/php无参RCE/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php无参RCE/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/vscode配置cmake环境/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/vscode配置cmake环境/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/vscode配置cmake环境/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/vscode配置cmake环境/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/vscode配置cmake环境/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542327-144503_2e2f28ea60d4400aa.png","24397ac27d6e4492ff3d01460df60d7d"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542526-210443_61d514a0f5b2447ea.png","01df6015608c26aa92ebb0ef73ae2b3f"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542722-215211_7f2eaa82683440ab9.png","aa542b02630507bf123d1b5e75bfe93a"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542869-210109_f4086838ba3e4e0d9.png","0881ac75abbb73b62533e56f2a97c80c"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543110-182782_b8f087b38c284834b.png","d95a688f84876a4f4384ae37d2833b89"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543380-808680_d180df3b06bd4ee8b.png","ab986e1cbe19ffd129e1329a3673eaf9"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543570-100418_7c933b5dfdd94f969.png","92b8875253a1b308f18013c3edbbdb2d"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543852-837886_c02ac0ee16e349939.png","afb830ff5831a55891f9b30f2452cf23"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544074-556149_65117fc5b6dd4d678.png","bed94370ddc18dac573d680e7833abff"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544268-223023_612649b429d4407db.png","c71bf600f817e101cae944dbabd9060b"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544479-192560_3171553a0f0b4332b.png","8507a2a447bda25a56b6b30a4dff3bfb"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544774-137777_16b6bfcb83fc47eca.png","f4c2f81480415053dc99711f17ee1a0e"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544968-733520_2ae0b457e540478ca.png","9c90a02702cb3bcd6c7ec32c414cb93d"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545159-109972_3d2066c2960e4254b.png","739a24ab1bc108088f5dc73261e0f49c"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545385-211814_37c9da40bd344726b.png","9b17a59f1a3c24d5c3907e34476514e7"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545543-126616_3cfef6072067485e9.png","2c3d97fcd05d08ad53c75133114c2101"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545699-998906_7f11faee4de5489fb.png","1b9581f0bfb578333717ce1cad6d22a0"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545876-708429_f5754a6b719f4f38b.png","ffe920470fd36a0d8a73d577fd08f3a4"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210546074-271902_e4b3ba03c7c049ceb.png","1a2a31e72ec82b0558f0cfa6f2e8e3b5"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210546246-191347_f4a5a8bfb2fd485a9.png","850950db59d1fdf2c99dc65e65e27241"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210546448-110113_9470621b41cc4bd48.png","c1cf7af763b22c4aaa89120f37ff1ca1"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547075-879787_80dfc6e28f9043b4a.png","f1e578a3b15fd138628a31f4b500cb5e"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547448-158471_b454c365d14c4bf7a.png","63a7d270ea59b62eab136bba711be74c"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547676-782393_9076ebed1fd442309.png","1f2bddbbe2e32ad12e4579fb26665220"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547846-356458_b2e87a5904994e179.png","39ed587b6d5904bb430f7e04ac6b1696"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210548031-171835_aedafaecee4d4e329.png","a24ce045887dc47e2557c5e5649d7441"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210548251-686390_8ea5f3c6e9684d619.png","cb7f2649c52ced22abd3feabe2da81cf"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210548425-202198_ae6d45774d2a42deb.png","63e723ee30dd93aca4049b4f426a537e"],["/images/安卓动态调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/安卓动态调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/安卓动态调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","da256a03ee788f39e7a8a21d5964b028"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","5df57635941badad79e7e26853593ed9"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","eb7d0bc7efd3ce53a434b19fdd6333c5"],["/page/3/index.html","f6dbe87936dbf28421258a0cc3b80195"],["/sw-register.js","c5129065396aa4d8102ff987cf83cb6a"],["/tags/RCE/index.html","610faa5ac73639e1b7c910c698feb5c4"],["/tags/SSTI/index.html","9b5a7fedd8a006f187d9632009145745"],["/tags/bash/index.html","0367b1d2e2ebafb344403bdfe74f5001"],["/tags/bottle/index.html","751302ac5dc1b935f3b8652fc45246d8"],["/tags/c/index.html","1c0751dcdf4cb7c32dd8d84bdb53a221"],["/tags/deb/index.html","b2959f91d2ae172e10a7f1269e73eb62"],["/tags/hexo/index.html","199a847256aed9516022a895e027a4cc"],["/tags/index.html","87414286661f70d733202a89de0c6e81"],["/tags/mobile/index.html","4e70502c0c41e0f16a847f6e04b5039e"],["/tags/php/index.html","91f5d4add31c3d25e2a73228e300eec8"],["/tags/pickle/index.html","858e4aba8623d396631c38035f49bbc8"],["/tags/pop/index.html","af720901041f4f960a1b94e5bfc3bfc7"],["/tags/python/index.html","b7c9217a9c3641ae7f8cc3b50865523e"],["/tags/rce/index.html","d264fae8db0b0737dfc03a38f08844df"],["/tags/re/index.html","b8dfc28fdaa03c728105a26bf2246fd0"],["/tags/sqli/index.html","01a5589627b9913a5ac135812e40d786"],["/tags/tricks/index.html","693792bf3b9f9bce829f20c15e302b0f"],["/tags/unserialize/index.html","b6f9dc2bf22375e337b947a7add798bd"],["/tags/upload/index.html","0a904e2c5f550c83002b5ded2b266954"],["/tags/vm/index.html","251f33af061d1eed157b09b9b93c5c6a"],["/tags/vscode/index.html","2f0a99753a62c6ab02217485465445c6"],["/tags/vue3/index.html","b392ce47e4e68cc60b74db5cfa544848"],["/tags/web/index.html","60ffe1101d4b749ded70a064bd4f3bfd"],["/tags/乱七八糟/index.html","5c8de756bd7f1a68796d9c388d38ba23"],["/tags/初见/index.html","e6bbb9c4ea7f5457e4e5de7b481bbb2d"],["/tags/虚拟化/index.html","02a8739f8ff8a57cdc7e95cc4dd594da"]];
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
