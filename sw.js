/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/cs/enviroment/hexo github搭建博客/index.html","b9c016eb2044fcaf3ff1a081f8ebce3c"],["/2024/10/13/cs/enviroment/dabian/index.html","3f31c36271bd2c26a297456f9e27417c"],["/2024/10/14/cs/web/sqli-labs/sqli-labs-less_1,4,11/index.html","29e9ea0458a148dce79982ab68a9285e"],["/2024/10/30/cs/web/sqli-labs/sqli-labs-less_7,8/index.html","a454215d793da6bb76eff84aa7953614"],["/2024/11/07/cs/enviroment/v-for中控制特定元素/index.html","baf290435ca9ec2a72146c338af36059"],["/2024/11/08/cs/algo/二叉数非递归遍历/index.html","fad9c0579164416759fd71964919c13d"],["/2024/11/08/cs/misc/进程使用端口记录/index.html","73af7269d07499e6cddceb8e8be735b1"],["/2024/11/08/cs/web/python/bottle_反序列化[xyctf2025]signin/index.html","3cc4e6d4a22ecd7568db4ae18bd5ed2f"],["/2024/11/10/cs/enviroment/hexo-neat不能压缩部分js文件-解决/index.html","77e2256133d0bda8e1ae7a591ba81564"],["/2024/11/11/cs/enviroment/Hexo的md解析器将半角单引号转换成全角/index.html","2c548500b04914ecdf36b3fb53a2dea3"],["/2024/11/20/cs/web/sqli-labs/sqli-labs-less-1-10/index.html","92a0aabbff2de4396e8973c43ccbb083"],["/2024/11/22/cs/web/sqli-labs/sqli-labs-less-11-22/index.html","efc940281c12d9f8b7ce28f34e636280"],["/2024/11/24/cs/web/sqli-labs/sqli-labs-less-23-27/index.html","cff60e063b887e2e9009a48d3c023e37"],["/2024/11/28/cs/web/sqli-labs/sqli-labs-less-28-37/index.html","258f82ffcfe1e2ff219787c441b2e01b"],["/2024/12/04/cs/web/sqli-labs/sqli-labs-less-35-45/index.html","c5544fecdf8b1c78d68b52e2ca1a8345"],["/2024/12/07/cs/web/upload-labs/upload-labs/index.html","34e53755e447ca898192033d7ab80709"],["/2025/04/20/cs/web/sqli-labs/[xyctf2025]ezsql/index.html","2a69fb4c8702bd36d78e4dfccb7a4e69"],["/2025/05/03/cs/web/php/php无参RCE/index.html","e1036abacbe308d6847b5a363376e6f3"],["/2025/05/10/cs/enviroment/安卓动态调试环境/index.html","59e2d51d1285f28ecf4b2a2e18d3747c"],["/2025/05/12/cs/enviroment/php调试环境/index.html","86a736a4cf6784dc77d16cd33c6feb0f"],["/2025/08/16/cs/web/python/SSTI-jinja [xyctf2025] now you see me/index.html","c0cef5c5667e204c1900fdc03860bd57"],["/2025/08/22/cs/enviroment/intel单核显SR-IOV虚拟化直通QEMU_KVM/index.html","865121783cc25212cc07ac13b17a0c78"],["/2025/10/23/cs/web/php/php长度限制_字符限制RCE/index.html","d0e48bc73347ae40f02fd5068d747249"],["/2025/10/29/cs/web/php/[geek2025]popself/index.html","22af1360458dea4df209edd10f7bbd58"],["/2025/12/17/cs/reverse/ezre/index.html","053e375c3d5068700ce6a18c7fe8b484"],["/archives/2024/10/index.html","bc4a7d3d65cf33a0282161e046d39160"],["/archives/2024/11/index.html","709cb8efef87a4db148dd69dfad26808"],["/archives/2024/12/index.html","f5ce43ed3e454b5fbb4bbba5569a1424"],["/archives/2024/index.html","879045030f3a5b48cf7fedbaf81a12c0"],["/archives/2024/page/2/index.html","d5ed564491ece35593a0d3fb756fc3e5"],["/archives/2025/04/index.html","cab8d2bdd4d6e562912f089f130ee562"],["/archives/2025/05/index.html","b11266303e6c89b71901dfeb50e71358"],["/archives/2025/08/index.html","8cfaaf5a0b1308ef003e1c89fa98ad10"],["/archives/2025/10/index.html","75b0c2c83bb4dd1e1df7168d35cfcd34"],["/archives/2025/12/index.html","1bff49affab3c62fe70247efe4080046"],["/archives/2025/index.html","a96560cd14f72d9aa1dd5e48060587c3"],["/archives/index.html","e652262bb1f33febc39bfabbe5a3f6c6"],["/archives/page/2/index.html","562badb17e7238efc2726b07c15dea03"],["/archives/page/3/index.html","5e3ae83b664da222c631084b9caba243"],["/categories/algo/index.html","20b68a0ef1432d8a7a0f51e15a07a674"],["/categories/index.html","09175e0ddfc33c4a8f4ced8dc3ef1ad2"],["/categories/misc/index.html","f4b2e5016dad710552281c226010bce1"],["/categories/php/RCE/index.html","c492a1473f3caebcdbbc4c20d447838d"],["/categories/php/index.html","0c896f6fb758631ea048b03033b78157"],["/categories/php/unserialize/index.html","fb262428469fe2f1f520434965643fa0"],["/categories/python/SSTI/index.html","2d28b0db67f9acebb73b87a33f0c377e"],["/categories/python/index.html","5b84b152ef347c4bbd6bee527b61cdce"],["/categories/reverse/index.html","9c035640061d5a19cf1e950f4940fa26"],["/categories/reverse/vm/index.html","4c90a41798acf60ca6dafb04c8c601c3"],["/categories/sqli/index.html","d5cd663d2e4131a95059a5ea881fbea1"],["/categories/upload/index.html","9a13b8f9c0bf07f597a6bf49a2ef9726"],["/categories/web/index.html","7aeff22f951aea55efa336c013babc80"],["/categories/web/python/index.html","4386e3c99739fa0579b9c9a28ba9c8c0"],["/categories/web/python/unserialize/index.html","82b541da019c4988d475cfe234cb6f81"],["/categories/web/python/unserialize/pickle/index.html","f0a2267b5be62d9a770a0d910b2a7a91"],["/categories/环境/hexo/index.html","8fa5de68afb04fc26fa3aeda9f3ff620"],["/categories/环境/index.html","46c1cfe648ebdcdbd286b83cc9528cd5"],["/categories/环境/mobile/index.html","ac42a2dc595910ad3b4d9f17b9996a41"],["/categories/环境/php/index.html","1b6fb3e7c51b51a938846c4abb2d0dd0"],["/categories/环境/vue3/index.html","8a38183eca33baa84093012d161ac77d"],["/categories/环境/虚拟化/index.html","8ba066834541d78306eedebec3ed4865"],["/css/main.css","369fa2b8f42660e788831b91381ea436"],["/css/noscript.css","eae3e73ec7dd403c48780071e7b91064"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hexo-neat不能压缩部分js/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/hexo-neat不能压缩部分js/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/ida使用/引用.png","04b8f3bf7d9123ce2b6010223e227301"],["/images/ida使用/插入结构体.png","3ba09e9da9754a94ba5dbb0476d43cb7"],["/images/ida使用/搞错了.png","dd6529ce6b236c188de81e4f5d1561b3"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/php无参RCE/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php无参RCE/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/vscode配置cmake环境/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/vscode配置cmake环境/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/vscode配置cmake环境/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/vscode配置cmake环境/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/vscode配置cmake环境/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542327-144503_2e2f28ea60d4400aa.png","24397ac27d6e4492ff3d01460df60d7d"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542526-210443_61d514a0f5b2447ea.png","01df6015608c26aa92ebb0ef73ae2b3f"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542722-215211_7f2eaa82683440ab9.png","aa542b02630507bf123d1b5e75bfe93a"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210542869-210109_f4086838ba3e4e0d9.png","0881ac75abbb73b62533e56f2a97c80c"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543110-182782_b8f087b38c284834b.png","d95a688f84876a4f4384ae37d2833b89"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543380-808680_d180df3b06bd4ee8b.png","ab986e1cbe19ffd129e1329a3673eaf9"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543570-100418_7c933b5dfdd94f969.png","92b8875253a1b308f18013c3edbbdb2d"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210543852-837886_c02ac0ee16e349939.png","afb830ff5831a55891f9b30f2452cf23"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544074-556149_65117fc5b6dd4d678.png","bed94370ddc18dac573d680e7833abff"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544268-223023_612649b429d4407db.png","c71bf600f817e101cae944dbabd9060b"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544479-192560_3171553a0f0b4332b.png","8507a2a447bda25a56b6b30a4dff3bfb"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544774-137777_16b6bfcb83fc47eca.png","f4c2f81480415053dc99711f17ee1a0e"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210544968-733520_2ae0b457e540478ca.png","9c90a02702cb3bcd6c7ec32c414cb93d"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545159-109972_3d2066c2960e4254b.png","739a24ab1bc108088f5dc73261e0f49c"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545385-211814_37c9da40bd344726b.png","9b17a59f1a3c24d5c3907e34476514e7"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545543-126616_3cfef6072067485e9.png","2c3d97fcd05d08ad53c75133114c2101"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545699-998906_7f11faee4de5489fb.png","1b9581f0bfb578333717ce1cad6d22a0"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210545876-708429_f5754a6b719f4f38b.png","ffe920470fd36a0d8a73d577fd08f3a4"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210546074-271902_e4b3ba03c7c049ceb.png","1a2a31e72ec82b0558f0cfa6f2e8e3b5"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210546246-191347_f4a5a8bfb2fd485a9.png","850950db59d1fdf2c99dc65e65e27241"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210546448-110113_9470621b41cc4bd48.png","c1cf7af763b22c4aaa89120f37ff1ca1"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547075-879787_80dfc6e28f9043b4a.png","f1e578a3b15fd138628a31f4b500cb5e"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547448-158471_b454c365d14c4bf7a.png","63a7d270ea59b62eab136bba711be74c"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547676-782393_9076ebed1fd442309.png","1f2bddbbe2e32ad12e4579fb26665220"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210547846-356458_b2e87a5904994e179.png","39ed587b6d5904bb430f7e04ac6b1696"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210548031-171835_aedafaecee4d4e329.png","a24ce045887dc47e2557c5e5649d7441"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210548251-686390_8ea5f3c6e9684d619.png","cb7f2649c52ced22abd3feabe2da81cf"],["/images/外部/新版flask的pin码计算 - m1xian - 博客园/3475290-20241105210548425-202198_ae6d45774d2a42deb.png","63e723ee30dd93aca4049b4f426a537e"],["/images/安卓动态调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/安卓动态调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/安卓动态调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","1a27e2a34f71e65e9c270b1a92c34b87"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","63574b7b401beb4635964da5ff6db35a"],["/js/pjax.js","b8cf673cb986e175da6188379ca8d918"],["/js/schedule.js","b486a529182d17221cc23aef4822c8a8"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","f5f9c1a37e18a068a6da114fcefca78e"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","061c14d3ba73ff6256e463f04dace299"],["/js/third-party/comments/disqus.js","abfd13cd9738d2bfbeea54801dbe2418"],["/js/third-party/comments/disqusjs.js","1ad71d07f9cf0784087896f213245957"],["/js/third-party/comments/gitalk.js","85e6378484725ce90671b7d2393b9da3"],["/js/third-party/comments/isso.js","a58076e3d641979e5df4dda05aa21b44"],["/js/third-party/comments/livere.js","efc1869e3bda61d86c8a0d34d10f236e"],["/js/third-party/comments/utterances.js","e49ef86026739b837b5e04b6d017a139"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","961cc7b833796e6383097656f50c1f63"],["/js/third-party/search/local-search.js","00364b680de714e73845d018e60e08e1"],["/js/third-party/statistics/firestore.js","a45b8765d447cb2132bcd63d026e1910"],["/js/third-party/statistics/lean-analytics.js","76173d4f418ca139dbc4904be5905e88"],["/js/third-party/tags/mermaid.js","3f161c4f1439779555745f8991a3a6d1"],["/js/third-party/tags/pdf.js","907e0778e9c2a384e662702d15932a72"],["/js/third-party/tags/wavedrom.js","3cc40bc51a87927d18edb0ba01cb05f3"],["/js/utils.js","f15f1788b3b9167a08efddc77097742c"],["/page/2/index.html","1ab975e5995c81bfa936fad9ecc48f31"],["/page/3/index.html","0619dc2008340e8778d21133eda7b6d4"],["/sw-register.js","5deb769c5310279ede30a6474d61d867"],["/tags/RCE/index.html","27a346495b881904c1cff721eb3e1dfc"],["/tags/SSTI/index.html","cb0c3981f706109929fe956cffdabf62"],["/tags/bash/index.html","10e9508fdb1dae325d70383d5cb55000"],["/tags/bottle/index.html","45f8681fbd25c931461549117b67141b"],["/tags/c/index.html","5968a6368b5476c6295d57f4db9cbabf"],["/tags/deb/index.html","cab9514f363438f19ef089081e2fe5c3"],["/tags/hexo/index.html","0e5c3c2b6987d8cd7fe8b8b4a467ae18"],["/tags/index.html","12ab50f87427d644bf1663d1f794e2c5"],["/tags/mobile/index.html","05c140110627020c7b555bd309053dfb"],["/tags/php/index.html","df6e754538b2b6e876c9ed48661f631f"],["/tags/pickle/index.html","6205915f243abee24c00e04c54d94981"],["/tags/pop/index.html","df9542997ab3c8a6938078eab34f187a"],["/tags/python/index.html","f27e45adfc8e24dcafaab5cc1734987b"],["/tags/rce/index.html","6d85b008ffa6a4ba19578ea3974c1726"],["/tags/re/index.html","a01ab7a04a6ab466d8d639adb8891d2f"],["/tags/sqli/index.html","c4aca3f560d18c05353d9bd735b1658f"],["/tags/unserialize/index.html","a66f505bfbd4c2eaea674d6efd01b317"],["/tags/upload/index.html","faf194cfe84f2ec6110eb089a7515138"],["/tags/vm/index.html","795f80c5643054ed4c48a3035df9200f"],["/tags/vscode/index.html","0c51ee3404236e438efe17d6fbed87c6"],["/tags/vue3/index.html","6eb6902da3b2c9fbb37371ccda3ff97c"],["/tags/web/index.html","d7a8d76db9a304870f429cd55e216390"],["/tags/乱七八糟/index.html","d8dc5df2fb61d886b24e7eafdcefe4a9"],["/tags/初见/index.html","21fa0c7647cdb614cbbaaf0b723292e5"],["/tags/虚拟化/index.html","9270dfcb83ef12aba85ab772e4d87537"]];
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
