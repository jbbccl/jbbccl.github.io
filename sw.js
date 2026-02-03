/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/cs/enviroment/hexo github搭建博客/index.html","6b481284662779f475d27c1874eab4b9"],["/2024/10/13/cs/enviroment/dabian/index.html","055ca2c73d54910e822dc7adacb8c8d4"],["/2024/10/14/cs/web/sqli-labs/sqli-labs-less_1,4,11/index.html","234461b70038fb280f7b608756c24958"],["/2024/10/30/cs/web/sqli-labs/sqli-labs-less_7,8/index.html","4771027c4909c34b9815952b75412a8f"],["/2024/11/07/cs/enviroment/v-for中控制特定元素/index.html","7615174f34aa423be009375fc7ec88f9"],["/2024/11/08/cs/algo/二叉数非递归遍历/index.html","7314cfd4035b5b4d82799f7404c2b633"],["/2024/11/08/cs/misc/进程使用端口记录/index.html","aa82c567ccdf1ce58d4940f1b4b79246"],["/2024/11/08/cs/web/python/bottle_反序列化[xyctf2025]signin/index.html","9b97efc870059c22715c30f9aa315edd"],["/2024/11/10/cs/enviroment/hexo-neat不能压缩部分js文件-解决/index.html","2f7341012b38e93b416f2199ba7ade76"],["/2024/11/11/cs/enviroment/Hexo的md解析器将半角单引号转换成全角/index.html","1539073590b874dc017f2517b8a2156d"],["/2024/11/20/cs/web/sqli-labs/sqli-labs-less-1-10/index.html","f1815d4c73f2c2c3c3ba58db05972db6"],["/2024/11/22/cs/web/sqli-labs/sqli-labs-less-11-22/index.html","f73475711422daabca443161ef6ded1e"],["/2024/11/24/cs/web/sqli-labs/sqli-labs-less-23-27/index.html","1d9226eda341881da0d1a6c8c0682552"],["/2024/11/28/cs/web/sqli-labs/sqli-labs-less-28-37/index.html","1aaf6ebad41d2016a26465369c1896f8"],["/2024/12/04/cs/web/sqli-labs/sqli-labs-less-35-45/index.html","71e95c577ec112ac9514525a8433eaf9"],["/2024/12/07/cs/web/upload-labs/upload-labs/index.html","123024f312dc8efb1227bdcffd4a49f7"],["/2025/04/20/cs/web/sqli-labs/[xyctf2025]ezsql/index.html","38de516f55daa44116a89566161e56ff"],["/2025/05/03/cs/web/php/php无参RCE/index.html","5279b7e78fcb126d293a2e50701b6d73"],["/2025/05/10/cs/enviroment/安卓动态调试环境/index.html","99c1c9c154e2b211fe53b57ed99f58c6"],["/2025/05/12/cs/enviroment/php调试环境/index.html","a6ed7faa35c155ee48e7a76aaffee533"],["/2025/08/16/cs/web/python/SSTI-jinja_/index.html","a0fc12c8a09374e809dc1361789bcb57"],["/2025/08/22/cs/enviroment/intel单核显SR-IOV虚拟化直通QEMU_KVM/index.html","4a9c4b4ad8e6e7d799568dd788cbc704"],["/2025/10/23/cs/web/php/php长度限制_字符限制RCE/index.html","163c668d7566404648bcdae3cdfe7ba9"],["/2025/10/29/cs/web/php/[geek2025]popself/index.html","cd4b25452f6eea9c0275e85a48f9d6b6"],["/2025/12/12/cs/enviroment/podman容器图形应用/index.html","b407f3730c306bc113a5c01cfffae57d"],["/2025/12/22/cs/enviroment/RX6000系A卡加速yolo11训练/index.html","1a8adefa393d6fbfc01d3207876c9d79"],["/archives/2024/10/index.html","d24ce677b0a637e248e7ce23c4ec5779"],["/archives/2024/11/index.html","7cb9a458e5c49efaffe8b4ff5cbe9ead"],["/archives/2024/12/index.html","0e745f7af826dc2ca66f2de57dea94d3"],["/archives/2024/index.html","45619c154a855d2fa1691e136cd87ef3"],["/archives/2024/page/2/index.html","e57745532507b628b6a311c575d0f81d"],["/archives/2025/04/index.html","75e711341ad0aa6ebc9a6cd81dddbc54"],["/archives/2025/05/index.html","2048427b941a43c0a243c43a0570eb0b"],["/archives/2025/08/index.html","4e1fd0763cd1f1fd71b67d3bf0d43279"],["/archives/2025/10/index.html","a302242cce21817c7db03748d6f632ff"],["/archives/2025/12/index.html","a9366a23966a0f34e9de5b09a84cd15a"],["/archives/2025/index.html","25cded8b33e5f832412b6584fa51bf99"],["/archives/index.html","116e920b95fec80468b60dd637ee1a27"],["/archives/page/2/index.html","b77df02fd0abd0e6fecc804d88396bd9"],["/archives/page/3/index.html","ab5c0e8d38bc3eca96a9285e35b4bb0b"],["/categories/algo/index.html","63cc563c52d765e8d92b179ae5864925"],["/categories/index.html","49d11458117c69a34ad902b617d89428"],["/categories/misc/index.html","70e45ce77337d2f26d9507782c65583a"],["/categories/php/RCE/index.html","70fc3a9ccd6ce6fc2efb56f6a9d2a913"],["/categories/php/index.html","46ee8b34f9f33a966a674297475231f6"],["/categories/php/unserialize/index.html","2f7223ce7508c51564585660ac45135b"],["/categories/python/SSTI/index.html","f2c6e97f08751a32482adc29e555e0cb"],["/categories/python/index.html","643748e1b6ab1cd81ac0f2d83665eb5d"],["/categories/sqli/index.html","842222eb93e50f9cb3840f78e9ec00d8"],["/categories/upload/index.html","81fae5b47978bd841f958b70c15a3c4a"],["/categories/web/index.html","dc7f296da5c80e1595f9b83594cd9a0f"],["/categories/web/python/index.html","a8afd1d14ac8608abdb89995be1cfde5"],["/categories/web/python/unserialize/index.html","f0b79407da8ad6af2deaa732d91bb7b4"],["/categories/web/python/unserialize/pickle/index.html","0e9e85d519baed8188d0e149a5d053a2"],["/categories/环境/dotfile/index.html","283a0cb3edae542f620a5e519b9340ca"],["/categories/环境/hexo/index.html","6573300a06aa23e157ab3dca5cd477c8"],["/categories/环境/index.html","06237e670973696bdd02b7d06e4a66e6"],["/categories/环境/mobile/index.html","a97553d41824d44f2c4b629de24bfb5d"],["/categories/环境/php/index.html","28ffe383562fc249b008b84982d066ab"],["/categories/环境/vue3/index.html","2a20534871ea8d043efc16999ce7c459"],["/categories/环境/虚拟化/index.html","ed3f27e7a5cf98ac61b93e2a3b2632a6"],["/css/main.css","566565f9fa9b61de6176ae2f43bcf29a"],["/css/noscript.css","9eaae719d19871849d744b11159020ca"],["/images/RX6000系A卡加速yolo11训练/BoxF1_curve.png","adab676ec97a581793af76ffdeaa8d55"],["/images/RX6000系A卡加速yolo11训练/BoxPR_curve.png","8e1307bc3a45f9442622100d3f27e777"],["/images/RX6000系A卡加速yolo11训练/traing.png","d6ad320c8b8091054839bdbef1236eb8"],["/images/RX6000系A卡加速yolo11训练/tree.png","99b1fd67d86b39b67004be150156b40e"],["/images/RX6000系A卡加速yolo11训练/val_batch2_labels.jpg","0eeac947affe7f6a0541aa4793eec29c"],["/images/RX6000系A卡加速yolo11训练/val_batch2_pred.jpg","500b21ab52f71ac7e70b588dda50f3d1"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hexo-neat不能压缩部分js/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/hexo-neat不能压缩部分js/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/ida使用/引用.png","04b8f3bf7d9123ce2b6010223e227301"],["/images/ida使用/插入结构体.png","3ba09e9da9754a94ba5dbb0476d43cb7"],["/images/ida使用/搞错了.png","dd6529ce6b236c188de81e4f5d1561b3"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/php_SSTI/Smarty引擎.png","db8e6dcf861e44b9af3798ab9de6a6a8"],["/images/php_SSTI/Smarty文档.png","f1c84ce2d975329d7b6d037a245fe4ac"],["/images/php_SSTI/点位.png","16e5da53f3b2726265660f81e16051a7"],["/images/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/php无参RCE/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php无参RCE/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/vscode配置cmake环境/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/vscode配置cmake环境/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/vscode配置cmake环境/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/vscode配置cmake环境/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/vscode配置cmake环境/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/外部/新版flask的pin码计算/3475290-20241105210542327-144503_2e2f28ea60d4400aa.png","24397ac27d6e4492ff3d01460df60d7d"],["/images/外部/新版flask的pin码计算/3475290-20241105210542526-210443_61d514a0f5b2447ea.png","01df6015608c26aa92ebb0ef73ae2b3f"],["/images/外部/新版flask的pin码计算/3475290-20241105210542722-215211_7f2eaa82683440ab9.png","aa542b02630507bf123d1b5e75bfe93a"],["/images/外部/新版flask的pin码计算/3475290-20241105210542869-210109_f4086838ba3e4e0d9.png","0881ac75abbb73b62533e56f2a97c80c"],["/images/外部/新版flask的pin码计算/3475290-20241105210543110-182782_b8f087b38c284834b.png","d95a688f84876a4f4384ae37d2833b89"],["/images/外部/新版flask的pin码计算/3475290-20241105210543380-808680_d180df3b06bd4ee8b.png","ab986e1cbe19ffd129e1329a3673eaf9"],["/images/外部/新版flask的pin码计算/3475290-20241105210543570-100418_7c933b5dfdd94f969.png","92b8875253a1b308f18013c3edbbdb2d"],["/images/外部/新版flask的pin码计算/3475290-20241105210543852-837886_c02ac0ee16e349939.png","afb830ff5831a55891f9b30f2452cf23"],["/images/外部/新版flask的pin码计算/3475290-20241105210544074-556149_65117fc5b6dd4d678.png","bed94370ddc18dac573d680e7833abff"],["/images/外部/新版flask的pin码计算/3475290-20241105210544268-223023_612649b429d4407db.png","c71bf600f817e101cae944dbabd9060b"],["/images/外部/新版flask的pin码计算/3475290-20241105210544479-192560_3171553a0f0b4332b.png","8507a2a447bda25a56b6b30a4dff3bfb"],["/images/外部/新版flask的pin码计算/3475290-20241105210544774-137777_16b6bfcb83fc47eca.png","f4c2f81480415053dc99711f17ee1a0e"],["/images/外部/新版flask的pin码计算/3475290-20241105210544968-733520_2ae0b457e540478ca.png","9c90a02702cb3bcd6c7ec32c414cb93d"],["/images/外部/新版flask的pin码计算/3475290-20241105210545159-109972_3d2066c2960e4254b.png","739a24ab1bc108088f5dc73261e0f49c"],["/images/外部/新版flask的pin码计算/3475290-20241105210545385-211814_37c9da40bd344726b.png","9b17a59f1a3c24d5c3907e34476514e7"],["/images/外部/新版flask的pin码计算/3475290-20241105210545543-126616_3cfef6072067485e9.png","2c3d97fcd05d08ad53c75133114c2101"],["/images/外部/新版flask的pin码计算/3475290-20241105210545699-998906_7f11faee4de5489fb.png","1b9581f0bfb578333717ce1cad6d22a0"],["/images/外部/新版flask的pin码计算/3475290-20241105210545876-708429_f5754a6b719f4f38b.png","ffe920470fd36a0d8a73d577fd08f3a4"],["/images/外部/新版flask的pin码计算/3475290-20241105210546074-271902_e4b3ba03c7c049ceb.png","1a2a31e72ec82b0558f0cfa6f2e8e3b5"],["/images/外部/新版flask的pin码计算/3475290-20241105210546246-191347_f4a5a8bfb2fd485a9.png","850950db59d1fdf2c99dc65e65e27241"],["/images/外部/新版flask的pin码计算/3475290-20241105210546448-110113_9470621b41cc4bd48.png","c1cf7af763b22c4aaa89120f37ff1ca1"],["/images/外部/新版flask的pin码计算/3475290-20241105210547075-879787_80dfc6e28f9043b4a.png","f1e578a3b15fd138628a31f4b500cb5e"],["/images/外部/新版flask的pin码计算/3475290-20241105210547448-158471_b454c365d14c4bf7a.png","63a7d270ea59b62eab136bba711be74c"],["/images/外部/新版flask的pin码计算/3475290-20241105210547676-782393_9076ebed1fd442309.png","1f2bddbbe2e32ad12e4579fb26665220"],["/images/外部/新版flask的pin码计算/3475290-20241105210547846-356458_b2e87a5904994e179.png","39ed587b6d5904bb430f7e04ac6b1696"],["/images/外部/新版flask的pin码计算/3475290-20241105210548031-171835_aedafaecee4d4e329.png","a24ce045887dc47e2557c5e5649d7441"],["/images/外部/新版flask的pin码计算/3475290-20241105210548251-686390_8ea5f3c6e9684d619.png","cb7f2649c52ced22abd3feabe2da81cf"],["/images/外部/新版flask的pin码计算/3475290-20241105210548425-202198_ae6d45774d2a42deb.png","63e723ee30dd93aca4049b4f426a537e"],["/images/安卓动态调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/安卓动态调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/安卓动态调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","1bf83edaeef9b4edb625900e227914e9"],["/js/bookmark.js","6b200a43ddf02b320306cef4aa3803b1"],["/js/comments-buttons.js","beaa03ce59f0ad590f7ede9c25ed6fd6"],["/js/comments.js","6702dd42446ce8b6a9c5562462de6c85"],["/js/config.js","2ff922509a52a0eb23009121e4a1cce7"],["/js/motion.js","1263a36e09b61799d5fb4faff348856c"],["/js/next-boot.js","16283e469b991d35bf661eb243032d58"],["/js/pjax.js","33197c4c744969bdaefba0cf6e06d72e"],["/js/schedule.js","3164cfb379035992fa6f73e7886b720b"],["/js/sidebar.js","cdc2d748a6fe247dfe5ef80872ae901b"],["/js/third-party/addtoany.js","a80fd4820ae92cc6aab5d6eb13eacbb0"],["/js/third-party/analytics/baidu-analytics.js","0450e6298ccd8f53628e6fbc3fad1dd3"],["/js/third-party/analytics/google-analytics.js","4402ac9384a41d1801dd82b922b1918d"],["/js/third-party/analytics/growingio.js","566dbd061e2c7d2e25c21e66f21739df"],["/js/third-party/analytics/matomo.js","15ec6a3f226b2db98aa68ee5b02a1c4b"],["/js/third-party/chat/chatra.js","8afe2d3266779b2631844b60f3211fc8"],["/js/third-party/chat/tidio.js","b76ee7b7a3868fea082f9eb030ccfef2"],["/js/third-party/comments/changyan.js","76fa00b0d5757a227a3b22cb41ba95e3"],["/js/third-party/comments/disqus.js","d20572911ae85b3f0961322295f92897"],["/js/third-party/comments/disqusjs.js","ea221037a8c552e1a3cdb4bd689d4964"],["/js/third-party/comments/gitalk.js","13dc946d29c70ffc4753420504f090b6"],["/js/third-party/comments/isso.js","2dc8535cef1635fd9616ebc2d029bfb8"],["/js/third-party/comments/livere.js","8f32c7257f71a745d1c7fa397fd03ac7"],["/js/third-party/comments/utterances.js","409a029927ef8a53ffd1186d1075f645"],["/js/third-party/fancybox.js","26e9e976d0760992874f4d136eb88624"],["/js/third-party/math/katex.js","c1a1d7eb2e00e8109b87ed5b895d453c"],["/js/third-party/math/mathjax.js","be23d61bb6bed89975853dacb66627a7"],["/js/third-party/pace.js","1115acc323d693514777063395b3984e"],["/js/third-party/quicklink.js","4c79bf56591a3f7f12f2e0094cd6b268"],["/js/third-party/search/algolia-search.js","dfbf4effa9f681edcd5988393bbea08b"],["/js/third-party/search/local-search.js","b3fe54e961b14778eeefc2279ed287bc"],["/js/third-party/statistics/firestore.js","38e902bf8d54cd07485a42d2d050aa7e"],["/js/third-party/statistics/lean-analytics.js","aef9aa66a4a01801fbc3646bb56e2f4d"],["/js/third-party/tags/mermaid.js","5c08dc7fb0275359cf5f1db32af13746"],["/js/third-party/tags/pdf.js","37a88a002adbd8bc7b069325221194fd"],["/js/third-party/tags/wavedrom.js","ebfcaa5da27f925ad80aaf0940a572be"],["/js/utils.js","6a2cedf8f5ae23cd74f2e48e7ccb5158"],["/page/2/index.html","a805439474614184b458d39ee855fab5"],["/page/3/index.html","f4c5360e1b9bdf4172a3925a42c62145"],["/sw-register.js","55cd17fac56b761dc379d3e60579064e"],["/tags/RCE/index.html","947fb3b87e1cfbb7e4bd1c2d9ccef3d5"],["/tags/SSTI/index.html","03e838d134a891bd7b737017fde0f09b"],["/tags/bash/index.html","da35598e304959c8919900fe016369f9"],["/tags/bottle/index.html","a2707cff1947d339037527666171e1d0"],["/tags/c/index.html","65feb935967374712c293b353adb3c29"],["/tags/deb/index.html","25bc678b75f8a62e1e464be507aced32"],["/tags/docker/index.html","edf741b0cf0830030d1194bb9eb40aee"],["/tags/flask/index.html","7a503d5b99017b80a7b2af7364210015"],["/tags/hexo/index.html","4c5c0b64e5f276f010092f1b2ab9f2c7"],["/tags/index.html","7d4e9fad03a8310b9aabed494306c105"],["/tags/mobile/index.html","ebe338e5724a07e2b9e814a689c1f813"],["/tags/php/index.html","eddc7f9ce53c823879d304d0e5e0443c"],["/tags/pickle/index.html","982b8fd276175cb2ab50a01cedbd24fe"],["/tags/podman/index.html","bf31c199b479d5cc30fdfdd0e9dddf5e"],["/tags/pop/index.html","dc262d96e61bbebf793b5b1d9246da59"],["/tags/python/index.html","ce659a2a70576151b8850512c9b7e9b1"],["/tags/rce/index.html","14261a187b3ea20bda328bf524c10c8c"],["/tags/re/index.html","c5b3dc957d47f9cd9be0b2e254f2b1e0"],["/tags/sqli/index.html","1550b137a302a911b759145ae968d6a1"],["/tags/unserialize/index.html","272ac0b2296582490a1f94f9320a1207"],["/tags/upload/index.html","70eeb2910407c71f422cdddede15c327"],["/tags/vscode/index.html","12130d41ca0730830dd4559eda0a7ab5"],["/tags/vue3/index.html","8b5dda931ac0f8ff645b81092323d35e"],["/tags/web/index.html","1ebc8aedede316ac9ededd3ff5d5ed1f"],["/tags/乱七八糟/index.html","91130f1fa90bc16e89d413d0362d00c4"],["/tags/初见/index.html","a04a02b0553a5e575d09d2d42a472805"],["/tags/虚拟化/index.html","d1a687123e4c5ea03da05f3067ce13cc"]];
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
