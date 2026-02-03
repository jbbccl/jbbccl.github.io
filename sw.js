/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/cs/enviroment/hexo github搭建博客/index.html","ebd18449cbe58ccef76c0b26f0b6e785"],["/2024/10/13/cs/enviroment/dabian/index.html","56f67caa834b20534e33c5767c9444fa"],["/2024/10/14/cs/web/sqli-labs/sqli-labs-less_1,4,11/index.html","2945b89809202a20bdaecc3220f98d7d"],["/2024/10/30/cs/web/sqli-labs/sqli-labs-less_7,8/index.html","58d248ea423084af5b0c53aa398fc145"],["/2024/11/07/cs/enviroment/v-for中控制特定元素/index.html","0d6d207a595b08d8ad670ceffbdbc15a"],["/2024/11/08/cs/algo/二叉数非递归遍历/index.html","19d0837dd34ac3ca78704fd2a53a237b"],["/2024/11/08/cs/misc/进程使用端口记录/index.html","22dae97dc59d39e23f19a4577cd070e8"],["/2024/11/08/cs/web/python/bottle_反序列化[xyctf2025]signin/index.html","d366ec6d5eea1830a8f79fb12a10a4d2"],["/2024/11/10/cs/enviroment/hexo-neat不能压缩部分js文件-解决/index.html","1fb2cc5b7e9f194d19c884387b8cba92"],["/2024/11/11/cs/enviroment/Hexo的md解析器将半角单引号转换成全角/index.html","cd7d281c7114f3d2cc66d2aeb7bbd221"],["/2024/11/20/cs/web/sqli-labs/sqli-labs-less-1-10/index.html","ba80f55a3f03b8e6ee24f2e5bf4eed9a"],["/2024/11/22/cs/web/sqli-labs/sqli-labs-less-11-22/index.html","bba44c142ecec42c621bdfe51db827cd"],["/2024/11/24/cs/web/sqli-labs/sqli-labs-less-23-27/index.html","6c8c9cf2cbb2cfa489a5a263e509362d"],["/2024/11/28/cs/web/sqli-labs/sqli-labs-less-28-37/index.html","777d31a0cb258637ef07b4c4af2fdbfe"],["/2024/12/04/cs/web/sqli-labs/sqli-labs-less-35-45/index.html","700c80cf53adc7bac08b5521e52a527b"],["/2024/12/07/cs/web/upload-labs/upload-labs/index.html","cb45317391f94e8df169c984354005b9"],["/2025/04/20/cs/web/sqli-labs/[xyctf2025]ezsql/index.html","fb0bfa94db452cf412afede93efbc5af"],["/2025/05/03/cs/web/php/php无参RCE/index.html","1b399446956546e3c20fcde22b343047"],["/2025/05/10/cs/enviroment/安卓动态调试环境/index.html","024cebab7d5c5e8011f0a381a7283528"],["/2025/05/12/cs/enviroment/php调试环境/index.html","4eac3f039f1067ce486d4f79c688b496"],["/2025/08/16/cs/web/python/SSTI-jinja_/index.html","1c53c516b0a0c8f439214f0e266ccea7"],["/2025/08/22/cs/enviroment/intel单核显SR-IOV虚拟化直通QEMU_KVM/index.html","b6e75e3b07a76f1c66ef8b9fc6af25a4"],["/2025/10/23/cs/web/php/php长度限制_字符限制RCE/index.html","65264fd9b8c34b78ffe2b3e0f6eebe18"],["/2025/10/29/cs/web/php/[geek2025]popself/index.html","e276e70e40de213d4519a3807e0c8012"],["/2025/12/12/cs/enviroment/podman容器图形应用/index.html","dab4d87d4971310b35d0dd657a7cb495"],["/2025/12/22/cs/enviroment/RX6000系A卡加速yolo11训练/index.html","1702fdba1d8972b5a4fb93d9595a01b0"],["/archives/2024/10/index.html","3e175fe9bd96d06dabad52fb9816620d"],["/archives/2024/11/index.html","1378508b189f3069e220160c124fca6e"],["/archives/2024/12/index.html","ec97e6e78a0d0666b2ecbcf50f9c02c5"],["/archives/2024/index.html","2d3d33b59e3061ad7fa0f52aeb641ede"],["/archives/2024/page/2/index.html","4b635bf7437216076fc24198f436fda6"],["/archives/2025/04/index.html","51961419b05acec6f6713896a0256d24"],["/archives/2025/05/index.html","ee0ab669ed057c5a5ae44bb5891a3e52"],["/archives/2025/08/index.html","52e86e99cf25a5b69a4f76808507cf96"],["/archives/2025/10/index.html","04f639311e8db752a4df41ad17ac8c9b"],["/archives/2025/12/index.html","63e62ddba5d6fd0e50c76adbb5eabb54"],["/archives/2025/index.html","adb6596a6423c7d90bd3ad855a1ba87e"],["/archives/index.html","c88caeda1831071978d4aabe8f7cb797"],["/archives/page/2/index.html","6ba442c75bfa9cef884ac2490f4bc820"],["/archives/page/3/index.html","cc65b1fb60eb50de459af5ed75b7f836"],["/categories/algo/index.html","cd68660529a2d816345b5e92320fc090"],["/categories/index.html","6bb2e7c2211a6921e80dfdfd5cd101ba"],["/categories/misc/index.html","70a8c5a89116f6172213df0506773b16"],["/categories/php/RCE/index.html","193f2f39e0150b997f3087b68ebbffb5"],["/categories/php/index.html","8ba449a95ae09c26a28dad8a930592a6"],["/categories/php/unserialize/index.html","967a820d34f33ea659358448c48ecba5"],["/categories/python/SSTI/index.html","fdad6967e3b1b871bb6f0f3d68cbfe1a"],["/categories/python/index.html","66604dc16fcd3465bd70ec10d265841f"],["/categories/sqli/index.html","9c47bb5c265563a371b4ce55e9def3b1"],["/categories/upload/index.html","e5e7dccec9ac484c2ed79d901de03238"],["/categories/web/index.html","6889d0761f6a51816bfeaf668b15a646"],["/categories/web/python/index.html","4b3097e3d5d77104f0b5c36e372d0e1f"],["/categories/web/python/unserialize/index.html","30a10fa27f1dcfa4f6665b81b94872fd"],["/categories/web/python/unserialize/pickle/index.html","c07c17db052d516c94d881c6548acf7c"],["/categories/环境/dotfile/index.html","1ddf2986c93710a3244b218a5c181bd2"],["/categories/环境/hexo/index.html","87d46fd7a77bdc19b15016681772ad98"],["/categories/环境/index.html","b2a0b8837f4bec84796acb86dde6de38"],["/categories/环境/mobile/index.html","e9b4ea470d347d3944b2f699559ae69d"],["/categories/环境/php/index.html","557185728be019d6942a7e536f49bfd7"],["/categories/环境/vue3/index.html","4ed931ff55831c215b1c54d964c51827"],["/categories/环境/虚拟化/index.html","3f0b15b7a38944a3db45e588c7e69e56"],["/css/main.css","cab147d507aeafa49b2bf47e45147e54"],["/css/noscript.css","e3e9e87b309c9d3f74c841960d9e2c0e"],["/images/RX6000系A卡加速yolo11训练/BoxF1_curve.png","adab676ec97a581793af76ffdeaa8d55"],["/images/RX6000系A卡加速yolo11训练/BoxPR_curve.png","8e1307bc3a45f9442622100d3f27e777"],["/images/RX6000系A卡加速yolo11训练/traing.png","d6ad320c8b8091054839bdbef1236eb8"],["/images/RX6000系A卡加速yolo11训练/tree.png","99b1fd67d86b39b67004be150156b40e"],["/images/RX6000系A卡加速yolo11训练/val_batch2_labels.jpg","0eeac947affe7f6a0541aa4793eec29c"],["/images/RX6000系A卡加速yolo11训练/val_batch2_pred.jpg","500b21ab52f71ac7e70b588dda50f3d1"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hexo-neat不能压缩部分js/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/hexo-neat不能压缩部分js/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/ida使用/引用.png","04b8f3bf7d9123ce2b6010223e227301"],["/images/ida使用/插入结构体.png","3ba09e9da9754a94ba5dbb0476d43cb7"],["/images/ida使用/搞错了.png","dd6529ce6b236c188de81e4f5d1561b3"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/php_SSTI/Smarty引擎.png","db8e6dcf861e44b9af3798ab9de6a6a8"],["/images/php_SSTI/Smarty文档.png","f1c84ce2d975329d7b6d037a245fe4ac"],["/images/php_SSTI/点位.png","16e5da53f3b2726265660f81e16051a7"],["/images/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/php无参RCE/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php无参RCE/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/vscode配置cmake环境/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/vscode配置cmake环境/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/vscode配置cmake环境/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/vscode配置cmake环境/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/vscode配置cmake环境/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/外部/新版flask的pin码计算/3475290-20241105210542327-144503_2e2f28ea60d4400aa.png","24397ac27d6e4492ff3d01460df60d7d"],["/images/外部/新版flask的pin码计算/3475290-20241105210542526-210443_61d514a0f5b2447ea.png","01df6015608c26aa92ebb0ef73ae2b3f"],["/images/外部/新版flask的pin码计算/3475290-20241105210542722-215211_7f2eaa82683440ab9.png","aa542b02630507bf123d1b5e75bfe93a"],["/images/外部/新版flask的pin码计算/3475290-20241105210542869-210109_f4086838ba3e4e0d9.png","0881ac75abbb73b62533e56f2a97c80c"],["/images/外部/新版flask的pin码计算/3475290-20241105210543110-182782_b8f087b38c284834b.png","d95a688f84876a4f4384ae37d2833b89"],["/images/外部/新版flask的pin码计算/3475290-20241105210543380-808680_d180df3b06bd4ee8b.png","ab986e1cbe19ffd129e1329a3673eaf9"],["/images/外部/新版flask的pin码计算/3475290-20241105210543570-100418_7c933b5dfdd94f969.png","92b8875253a1b308f18013c3edbbdb2d"],["/images/外部/新版flask的pin码计算/3475290-20241105210543852-837886_c02ac0ee16e349939.png","afb830ff5831a55891f9b30f2452cf23"],["/images/外部/新版flask的pin码计算/3475290-20241105210544074-556149_65117fc5b6dd4d678.png","bed94370ddc18dac573d680e7833abff"],["/images/外部/新版flask的pin码计算/3475290-20241105210544268-223023_612649b429d4407db.png","c71bf600f817e101cae944dbabd9060b"],["/images/外部/新版flask的pin码计算/3475290-20241105210544479-192560_3171553a0f0b4332b.png","8507a2a447bda25a56b6b30a4dff3bfb"],["/images/外部/新版flask的pin码计算/3475290-20241105210544774-137777_16b6bfcb83fc47eca.png","f4c2f81480415053dc99711f17ee1a0e"],["/images/外部/新版flask的pin码计算/3475290-20241105210544968-733520_2ae0b457e540478ca.png","9c90a02702cb3bcd6c7ec32c414cb93d"],["/images/外部/新版flask的pin码计算/3475290-20241105210545159-109972_3d2066c2960e4254b.png","739a24ab1bc108088f5dc73261e0f49c"],["/images/外部/新版flask的pin码计算/3475290-20241105210545385-211814_37c9da40bd344726b.png","9b17a59f1a3c24d5c3907e34476514e7"],["/images/外部/新版flask的pin码计算/3475290-20241105210545543-126616_3cfef6072067485e9.png","2c3d97fcd05d08ad53c75133114c2101"],["/images/外部/新版flask的pin码计算/3475290-20241105210545699-998906_7f11faee4de5489fb.png","1b9581f0bfb578333717ce1cad6d22a0"],["/images/外部/新版flask的pin码计算/3475290-20241105210545876-708429_f5754a6b719f4f38b.png","ffe920470fd36a0d8a73d577fd08f3a4"],["/images/外部/新版flask的pin码计算/3475290-20241105210546074-271902_e4b3ba03c7c049ceb.png","1a2a31e72ec82b0558f0cfa6f2e8e3b5"],["/images/外部/新版flask的pin码计算/3475290-20241105210546246-191347_f4a5a8bfb2fd485a9.png","850950db59d1fdf2c99dc65e65e27241"],["/images/外部/新版flask的pin码计算/3475290-20241105210546448-110113_9470621b41cc4bd48.png","c1cf7af763b22c4aaa89120f37ff1ca1"],["/images/外部/新版flask的pin码计算/3475290-20241105210547075-879787_80dfc6e28f9043b4a.png","f1e578a3b15fd138628a31f4b500cb5e"],["/images/外部/新版flask的pin码计算/3475290-20241105210547448-158471_b454c365d14c4bf7a.png","63a7d270ea59b62eab136bba711be74c"],["/images/外部/新版flask的pin码计算/3475290-20241105210547676-782393_9076ebed1fd442309.png","1f2bddbbe2e32ad12e4579fb26665220"],["/images/外部/新版flask的pin码计算/3475290-20241105210547846-356458_b2e87a5904994e179.png","39ed587b6d5904bb430f7e04ac6b1696"],["/images/外部/新版flask的pin码计算/3475290-20241105210548031-171835_aedafaecee4d4e329.png","a24ce045887dc47e2557c5e5649d7441"],["/images/外部/新版flask的pin码计算/3475290-20241105210548251-686390_8ea5f3c6e9684d619.png","cb7f2649c52ced22abd3feabe2da81cf"],["/images/外部/新版flask的pin码计算/3475290-20241105210548425-202198_ae6d45774d2a42deb.png","63e723ee30dd93aca4049b4f426a537e"],["/images/安卓动态调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/安卓动态调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/安卓动态调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","3fabe6015841385d7c97ec92dec961d8"],["/js/bookmark.js","6b200a43ddf02b320306cef4aa3803b1"],["/js/comments-buttons.js","beaa03ce59f0ad590f7ede9c25ed6fd6"],["/js/comments.js","6702dd42446ce8b6a9c5562462de6c85"],["/js/config.js","2ff922509a52a0eb23009121e4a1cce7"],["/js/motion.js","1263a36e09b61799d5fb4faff348856c"],["/js/next-boot.js","16283e469b991d35bf661eb243032d58"],["/js/pjax.js","33197c4c744969bdaefba0cf6e06d72e"],["/js/schedule.js","3164cfb379035992fa6f73e7886b720b"],["/js/sidebar.js","cdc2d748a6fe247dfe5ef80872ae901b"],["/js/third-party/addtoany.js","a80fd4820ae92cc6aab5d6eb13eacbb0"],["/js/third-party/analytics/baidu-analytics.js","0450e6298ccd8f53628e6fbc3fad1dd3"],["/js/third-party/analytics/google-analytics.js","4402ac9384a41d1801dd82b922b1918d"],["/js/third-party/analytics/growingio.js","566dbd061e2c7d2e25c21e66f21739df"],["/js/third-party/analytics/matomo.js","15ec6a3f226b2db98aa68ee5b02a1c4b"],["/js/third-party/chat/chatra.js","8afe2d3266779b2631844b60f3211fc8"],["/js/third-party/chat/tidio.js","b76ee7b7a3868fea082f9eb030ccfef2"],["/js/third-party/comments/changyan.js","76fa00b0d5757a227a3b22cb41ba95e3"],["/js/third-party/comments/disqus.js","d20572911ae85b3f0961322295f92897"],["/js/third-party/comments/disqusjs.js","ea221037a8c552e1a3cdb4bd689d4964"],["/js/third-party/comments/gitalk.js","13dc946d29c70ffc4753420504f090b6"],["/js/third-party/comments/isso.js","2dc8535cef1635fd9616ebc2d029bfb8"],["/js/third-party/comments/livere.js","8f32c7257f71a745d1c7fa397fd03ac7"],["/js/third-party/comments/utterances.js","409a029927ef8a53ffd1186d1075f645"],["/js/third-party/fancybox.js","26e9e976d0760992874f4d136eb88624"],["/js/third-party/math/katex.js","c1a1d7eb2e00e8109b87ed5b895d453c"],["/js/third-party/math/mathjax.js","be23d61bb6bed89975853dacb66627a7"],["/js/third-party/pace.js","1115acc323d693514777063395b3984e"],["/js/third-party/quicklink.js","4c79bf56591a3f7f12f2e0094cd6b268"],["/js/third-party/search/algolia-search.js","dfbf4effa9f681edcd5988393bbea08b"],["/js/third-party/search/local-search.js","b3fe54e961b14778eeefc2279ed287bc"],["/js/third-party/statistics/firestore.js","38e902bf8d54cd07485a42d2d050aa7e"],["/js/third-party/statistics/lean-analytics.js","aef9aa66a4a01801fbc3646bb56e2f4d"],["/js/third-party/tags/mermaid.js","5c08dc7fb0275359cf5f1db32af13746"],["/js/third-party/tags/pdf.js","37a88a002adbd8bc7b069325221194fd"],["/js/third-party/tags/wavedrom.js","ebfcaa5da27f925ad80aaf0940a572be"],["/js/utils.js","6a2cedf8f5ae23cd74f2e48e7ccb5158"],["/page/2/index.html","1763380870044ad0fe61e9728109d6ea"],["/page/3/index.html","7cd26498679ab0c6a70e260a1447bd1e"],["/sw-register.js","b69ce8b6cf0feb86ac5d9d03c5b34eba"],["/tags/RCE/index.html","5fe8e0463ce12983afa3b12e00d95884"],["/tags/SSTI/index.html","f30fe6e41346d7da127bd24941ae1f4d"],["/tags/bash/index.html","218fa70b1d485317f1c6e11a68cb7f49"],["/tags/bottle/index.html","85ec700b99a59275c65e4d86510569c1"],["/tags/c/index.html","f13693e2dcaf3a1435f0a152e9540d62"],["/tags/deb/index.html","872e7790fc421c1854688511152d34da"],["/tags/docker/index.html","969008de90b2504ff5f646780b03e7b3"],["/tags/flask/index.html","6bc0b1692b3a27facd4316681423b8f0"],["/tags/hexo/index.html","154c68997ebe6b9d8ee75d5987f63817"],["/tags/index.html","d7dff634054d85f89652089dfada8aeb"],["/tags/mobile/index.html","0d0c5203ebb273e615716d7511a1b316"],["/tags/php/index.html","babfeb4855c900c73ac7f7297cc2b10a"],["/tags/pickle/index.html","90996202692f860f3e505d8cde287562"],["/tags/podman/index.html","009cecb50c7a250afd5da7f04843f626"],["/tags/pop/index.html","320d00df4c374906a903c2d9fabcb4f5"],["/tags/python/index.html","78102640fea084cfb0f54b8238eac226"],["/tags/rce/index.html","95257db8c11afe591a9b4ff7926d5197"],["/tags/re/index.html","3a10c0d8c4a63f06620080591838e0b8"],["/tags/sqli/index.html","c1659fe2132ce5f1fc5cc09d15f67e7e"],["/tags/unserialize/index.html","98ade7d4b546d0c092419c40622c6342"],["/tags/upload/index.html","1953c1efba8974c7661502aa0ef0f700"],["/tags/vscode/index.html","a334762e9a023774a44aae7704615d9a"],["/tags/vue3/index.html","cb7aaf061c7f8e060caab9386558b46c"],["/tags/web/index.html","c726758f68455a8528f1e35fe37823f2"],["/tags/乱七八糟/index.html","a9fe78f83ed57deb1fb3988a9b74a62c"],["/tags/初见/index.html","32c17fe9a1b4b413523f70682fc19527"],["/tags/虚拟化/index.html","c0ad484d190086fbf48446b192bc51ed"],["/tmp.html","e05220df939ad80a5b2e3317483e0ea0"]];
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
