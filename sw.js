/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/cs/enviroment/hexo github搭建博客/index.html","13b6579170a6880bc8a533c2aa3aef44"],["/2024/10/13/cs/enviroment/dabian/index.html","0b81f51d6688bacf2342852fe5486f1f"],["/2024/10/14/cs/web/sqli-labs/sqli-labs-less_1,4,11/index.html","213b4f20c723c2f5595b3705a65b0e00"],["/2024/10/30/cs/web/sqli-labs/sqli-labs-less_7,8/index.html","c97a59d5dc64eb0402dedb44ef270884"],["/2024/11/07/cs/enviroment/v-for中控制特定元素/index.html","a60d298b5b97339813484a868920f5d8"],["/2024/11/08/cs/algo/二叉数非递归遍历/index.html","0cfba71b7574a991b6cf85d2284e86da"],["/2024/11/08/cs/misc/进程使用端口记录/index.html","1c21adb2a12c4685abbbd4f7c003a4a3"],["/2024/11/08/cs/web/python/bottle_反序列化[xyctf2025]signin/index.html","d0140f43ae9ad82aab2cc9b4a45d6186"],["/2024/11/10/cs/enviroment/hexo-neat不能压缩部分js文件-解决/index.html","86c292e8ccff921265deca3b24453423"],["/2024/11/11/cs/enviroment/Hexo的md解析器将半角单引号转换成全角/index.html","21c2705fc130044d022cf57ec5d97b3d"],["/2024/11/20/cs/web/sqli-labs/sqli-labs-less-1-10/index.html","10f581d4a58fc2a8c5f9fb8c9dbedf7b"],["/2024/11/22/cs/web/sqli-labs/sqli-labs-less-11-22/index.html","fa58187fa730d7c0a486c67612810da4"],["/2024/11/24/cs/web/sqli-labs/sqli-labs-less-23-27/index.html","b2d972af0077e974fa065836002ffa3a"],["/2024/11/28/cs/web/sqli-labs/sqli-labs-less-28-37/index.html","0f2e6d80acafde19bf2226e85c6b0e65"],["/2024/12/04/cs/web/sqli-labs/sqli-labs-less-35-45/index.html","6473cb91fe4b5397d7102e0f2b9c4fef"],["/2024/12/07/cs/web/upload-labs/upload-labs/index.html","21b7f4cd2845408ac2d3783d5ef3080d"],["/2025/04/20/cs/web/sqli-labs/[xyctf2025]ezsql/index.html","79de811362ff41b68718cdc7de0ce467"],["/2025/05/03/cs/web/php/php无参RCE/index.html","4b12441bef64821b392675f6bd8e9136"],["/2025/05/10/cs/enviroment/安卓动态调试环境/index.html","541bb9a40d811edb74f9f41896efb7c7"],["/2025/05/12/cs/enviroment/php调试环境/index.html","37da8253c1bfbcb49d6c642287903299"],["/2025/08/16/cs/web/python/SSTI-jinja_/index.html","24c98258d9f5a6f80e95205085559761"],["/2025/08/22/cs/enviroment/intel单核显SR-IOV虚拟化直通QEMU_KVM/index.html","da733c704614c6f2e7388cc687df72f0"],["/2025/10/23/cs/web/php/php长度限制_字符限制RCE/index.html","effbe7c9a349c8b48bcd42a3b7d67fa6"],["/2025/10/29/cs/web/php/[geek2025]popself/index.html","863937202a6a54c26609207d0d27d024"],["/2025/12/12/cs/enviroment/podman容器图形应用/index.html","f68c24a4a2ee61200fd67b6aae151ebe"],["/2025/12/22/cs/enviroment/RX6000系A卡加速yolo11训练/index.html","eab0037b4c02b1dc1458cb2c19fdd896"],["/2026/01/22/cs/reverse/ida使用/index.html","c44c9895821321f4d884955f73a81fc7"],["/2026/03/22/cs/algo/bfs错误/index.html","7877c670405f25aa12680c038d3f6eb5"],["/2026/05/03/cs/web/http/hgame/index.html","26d4adaa957e1a357788a9838eb67957"],["/2026/08/26/cs/pentest/[sqli-jeecg-boot]脱敏/index.html","cc9f58939131bbf4afffe1a7cb1fda7d"],["/2026/08/26/cs/pentest/资产收集/index.html","3e9b0ad231ede30a33be54633bffa0fe"],["/archives/2024/10/index.html","5e01ca400ee9ae66fb83fc935f64e47d"],["/archives/2024/11/index.html","1671a95a6830e49f1b6b1fcb5ad8c394"],["/archives/2024/12/index.html","1656b73c5119116e4593c3e8bc83faaa"],["/archives/2024/index.html","5003d7aeec5e20b4ccf6006bada28c8c"],["/archives/2024/page/2/index.html","65fcbfae13270050a0a3c0c7e8efb7ec"],["/archives/2025/04/index.html","97f3900f0218bfc65381d270f886c60b"],["/archives/2025/05/index.html","cb94ca43d5c4e5da233f588a42fffecb"],["/archives/2025/08/index.html","4e6b97101c6feccab1ace1d8516b7d0c"],["/archives/2025/10/index.html","c656e1064d166ebd5d10ba85afca2dc6"],["/archives/2025/12/index.html","0b386861fd788b2a858315dfd1518c87"],["/archives/2025/index.html","9d47ab1511ff1f02c8bf3c065373504d"],["/archives/2026/01/index.html","b1235e143dcb4ea76459e35cb5359b37"],["/archives/2026/03/index.html","ddffc28b9154b656a0c4ead8b2bf0396"],["/archives/2026/05/index.html","4f82d15bbbeac11b6099b71d96ec8b75"],["/archives/2026/08/index.html","cbd8f25ea8e79f4282f3fc3937d2ef88"],["/archives/2026/index.html","65f42bc46026f36561f83280481fb2df"],["/archives/index.html","43d31e033d6cb4ac5302d9dc0e648bf3"],["/archives/page/2/index.html","b7b6087aab250425defc171f07403739"],["/archives/page/3/index.html","1c24f52cfde147344d26fa477059c758"],["/archives/page/4/index.html","ade4e2df25dcce8284a1757da746c53c"],["/categories/algo/index.html","5da98327a45c70d29ade5a1ddd17f556"],["/categories/index.html","fbc17981cc349669063c602b5cde7e0d"],["/categories/misc/index.html","806d2525a05f30161bd3cf0e12ec7c77"],["/categories/pentest/index.html","2cb7cb94add487ad8cf758c0d1df82a5"],["/categories/php/RCE/index.html","e764538e217a62cc8277262bdb7e7947"],["/categories/php/index.html","ac90426ef80c52574851dc1a47c0219c"],["/categories/php/unserialize/index.html","e370805383bfd10d3e9ab0f31a2e89fc"],["/categories/python/SSTI/index.html","aa51936b0b38cff8e9b09f9053854956"],["/categories/python/index.html","f2c1652928b35a30c2653841b88dc69f"],["/categories/reverse/ida/index.html","fdb0221ffb1cbf0c903c2d4409eddfbe"],["/categories/reverse/index.html","51587f969ab2a38e9edeb67ee8eadaba"],["/categories/sqli/index.html","630d4f0cce24200f7b193d4646bc3acc"],["/categories/upload/index.html","5081fdf48ea3077564f59208a15aeab8"],["/categories/web/index.html","6c610d0fc8e84f65a479acc514a1f8b2"],["/categories/web/php/index.html","b4a0cc140620d03a6237c2bc521f10bb"],["/categories/web/python/index.html","ebcc9080a6a29b6bed1ef7a3bd89001a"],["/categories/web/python/unserialize/index.html","cbb10daee35551226a84318f475e0b5c"],["/categories/web/python/unserialize/pickle/index.html","ec1ae2cfac650fae18520caad7965cfc"],["/categories/环境/dotfile/index.html","81463a5731f1c600e4ff92fbf02e570d"],["/categories/环境/hexo/index.html","a50a2918a38a9ca34f95e77969a71eee"],["/categories/环境/index.html","e97d22d1744411ede3d49fd56be81059"],["/categories/环境/mobile/index.html","16736b515a3169b976e3fe7db3335111"],["/categories/环境/php/index.html","4d924209ec4c9f305dd45c73e5aeff34"],["/categories/环境/vue3/index.html","231f1dd97b052bd013591bb1c7c63a93"],["/categories/环境/虚拟化/index.html","847f1f3393a05299a988d11beb52206b"],["/css/main.css","f6811f2eb7e1b53d661ed050b36939b7"],["/css/noscript.css","9917b01c9670a2825f1e4b88f6451450"],["/images/RX6000系A卡加速yolo11训练/BoxF1_curve.png","adab676ec97a581793af76ffdeaa8d55"],["/images/RX6000系A卡加速yolo11训练/BoxPR_curve.png","8e1307bc3a45f9442622100d3f27e777"],["/images/RX6000系A卡加速yolo11训练/traing.png","d6ad320c8b8091054839bdbef1236eb8"],["/images/RX6000系A卡加速yolo11训练/tree.png","99b1fd67d86b39b67004be150156b40e"],["/images/RX6000系A卡加速yolo11训练/val_batch2_labels.jpg","0eeac947affe7f6a0541aa4793eec29c"],["/images/RX6000系A卡加速yolo11训练/val_batch2_pred.jpg","500b21ab52f71ac7e70b588dda50f3d1"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hexo-neat不能压缩部分js/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/hexo-neat不能压缩部分js/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/ida使用/引用.png","04b8f3bf7d9123ce2b6010223e227301"],["/images/ida使用/插入结构体.png","3ba09e9da9754a94ba5dbb0476d43cb7"],["/images/ida使用/搞错了.png","dd6529ce6b236c188de81e4f5d1561b3"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/pentest/jbsqli.png","e6bcc72f567e8f8e234435ca6bc2d056"],["/images/pentest/mssqli.png","be3f6ef4bc2820c9f77aa5781c3cde21"],["/images/pentest/mssqli1.png","1b705163571b8c79f80174d87502716c"],["/images/pentest/mssqli2.png","edf2482e9265ff0240faf6b2e6d65141"],["/images/php_SSTI/Smarty引擎.png","db8e6dcf861e44b9af3798ab9de6a6a8"],["/images/php_SSTI/Smarty文档.png","f1c84ce2d975329d7b6d037a245fe4ac"],["/images/php_SSTI/点位.png","16e5da53f3b2726265660f81e16051a7"],["/images/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/php无参RCE/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php无参RCE/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/tmp/Hgame_mcp.png.png","9a1a572ac4c0c375f13979e84c7dd843"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/vscode配置cmake环境/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/vscode配置cmake环境/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/vscode配置cmake环境/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/vscode配置cmake环境/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/vscode配置cmake环境/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/外部/新版flask的pin码计算/3475290-20241105210542327-144503_2e2f28ea60d4400aa.png","24397ac27d6e4492ff3d01460df60d7d"],["/images/外部/新版flask的pin码计算/3475290-20241105210542526-210443_61d514a0f5b2447ea.png","01df6015608c26aa92ebb0ef73ae2b3f"],["/images/外部/新版flask的pin码计算/3475290-20241105210542722-215211_7f2eaa82683440ab9.png","aa542b02630507bf123d1b5e75bfe93a"],["/images/外部/新版flask的pin码计算/3475290-20241105210542869-210109_f4086838ba3e4e0d9.png","0881ac75abbb73b62533e56f2a97c80c"],["/images/外部/新版flask的pin码计算/3475290-20241105210543110-182782_b8f087b38c284834b.png","d95a688f84876a4f4384ae37d2833b89"],["/images/外部/新版flask的pin码计算/3475290-20241105210543380-808680_d180df3b06bd4ee8b.png","ab986e1cbe19ffd129e1329a3673eaf9"],["/images/外部/新版flask的pin码计算/3475290-20241105210543570-100418_7c933b5dfdd94f969.png","92b8875253a1b308f18013c3edbbdb2d"],["/images/外部/新版flask的pin码计算/3475290-20241105210543852-837886_c02ac0ee16e349939.png","afb830ff5831a55891f9b30f2452cf23"],["/images/外部/新版flask的pin码计算/3475290-20241105210544074-556149_65117fc5b6dd4d678.png","bed94370ddc18dac573d680e7833abff"],["/images/外部/新版flask的pin码计算/3475290-20241105210544268-223023_612649b429d4407db.png","c71bf600f817e101cae944dbabd9060b"],["/images/外部/新版flask的pin码计算/3475290-20241105210544479-192560_3171553a0f0b4332b.png","8507a2a447bda25a56b6b30a4dff3bfb"],["/images/外部/新版flask的pin码计算/3475290-20241105210544774-137777_16b6bfcb83fc47eca.png","f4c2f81480415053dc99711f17ee1a0e"],["/images/外部/新版flask的pin码计算/3475290-20241105210544968-733520_2ae0b457e540478ca.png","9c90a02702cb3bcd6c7ec32c414cb93d"],["/images/外部/新版flask的pin码计算/3475290-20241105210545159-109972_3d2066c2960e4254b.png","739a24ab1bc108088f5dc73261e0f49c"],["/images/外部/新版flask的pin码计算/3475290-20241105210545385-211814_37c9da40bd344726b.png","9b17a59f1a3c24d5c3907e34476514e7"],["/images/外部/新版flask的pin码计算/3475290-20241105210545543-126616_3cfef6072067485e9.png","2c3d97fcd05d08ad53c75133114c2101"],["/images/外部/新版flask的pin码计算/3475290-20241105210545699-998906_7f11faee4de5489fb.png","1b9581f0bfb578333717ce1cad6d22a0"],["/images/外部/新版flask的pin码计算/3475290-20241105210545876-708429_f5754a6b719f4f38b.png","ffe920470fd36a0d8a73d577fd08f3a4"],["/images/外部/新版flask的pin码计算/3475290-20241105210546074-271902_e4b3ba03c7c049ceb.png","1a2a31e72ec82b0558f0cfa6f2e8e3b5"],["/images/外部/新版flask的pin码计算/3475290-20241105210546246-191347_f4a5a8bfb2fd485a9.png","850950db59d1fdf2c99dc65e65e27241"],["/images/外部/新版flask的pin码计算/3475290-20241105210546448-110113_9470621b41cc4bd48.png","c1cf7af763b22c4aaa89120f37ff1ca1"],["/images/外部/新版flask的pin码计算/3475290-20241105210547075-879787_80dfc6e28f9043b4a.png","f1e578a3b15fd138628a31f4b500cb5e"],["/images/外部/新版flask的pin码计算/3475290-20241105210547448-158471_b454c365d14c4bf7a.png","63a7d270ea59b62eab136bba711be74c"],["/images/外部/新版flask的pin码计算/3475290-20241105210547676-782393_9076ebed1fd442309.png","1f2bddbbe2e32ad12e4579fb26665220"],["/images/外部/新版flask的pin码计算/3475290-20241105210547846-356458_b2e87a5904994e179.png","39ed587b6d5904bb430f7e04ac6b1696"],["/images/外部/新版flask的pin码计算/3475290-20241105210548031-171835_aedafaecee4d4e329.png","a24ce045887dc47e2557c5e5649d7441"],["/images/外部/新版flask的pin码计算/3475290-20241105210548251-686390_8ea5f3c6e9684d619.png","cb7f2649c52ced22abd3feabe2da81cf"],["/images/外部/新版flask的pin码计算/3475290-20241105210548425-202198_ae6d45774d2a42deb.png","63e723ee30dd93aca4049b4f426a537e"],["/images/安卓动态调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/安卓动态调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/安卓动态调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","58688766591557997184963ff582c512"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","63574b7b401beb4635964da5ff6db35a"],["/js/pjax.js","b8cf673cb986e175da6188379ca8d918"],["/js/schedule.js","b486a529182d17221cc23aef4822c8a8"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","f5f9c1a37e18a068a6da114fcefca78e"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","061c14d3ba73ff6256e463f04dace299"],["/js/third-party/comments/disqus.js","abfd13cd9738d2bfbeea54801dbe2418"],["/js/third-party/comments/disqusjs.js","1ad71d07f9cf0784087896f213245957"],["/js/third-party/comments/gitalk.js","85e6378484725ce90671b7d2393b9da3"],["/js/third-party/comments/isso.js","a58076e3d641979e5df4dda05aa21b44"],["/js/third-party/comments/livere.js","efc1869e3bda61d86c8a0d34d10f236e"],["/js/third-party/comments/utterances.js","e49ef86026739b837b5e04b6d017a139"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","961cc7b833796e6383097656f50c1f63"],["/js/third-party/search/local-search.js","00364b680de714e73845d018e60e08e1"],["/js/third-party/statistics/firestore.js","a45b8765d447cb2132bcd63d026e1910"],["/js/third-party/statistics/lean-analytics.js","76173d4f418ca139dbc4904be5905e88"],["/js/third-party/tags/mermaid.js","3f161c4f1439779555745f8991a3a6d1"],["/js/third-party/tags/pdf.js","907e0778e9c2a384e662702d15932a72"],["/js/third-party/tags/wavedrom.js","3cc40bc51a87927d18edb0ba01cb05f3"],["/js/utils.js","f15f1788b3b9167a08efddc77097742c"],["/page/2/index.html","bcd9bf50bba11ef909cad8d23596914a"],["/page/3/index.html","f62d81a7cdba16291e92c75dab3d49f9"],["/page/4/index.html","a804d6a5c66910268d77cfd4b62345d0"],["/sw-register.js","54e146bdbd58684890855542a4957045"],["/tags/RCE/index.html","fb010c9bf9159f65c39db77960ca324a"],["/tags/SSTI/index.html","6e46f841ac2a22c1ff8628fcb67733cb"],["/tags/bash/index.html","26f425cc70f7cf97316c090cb869c194"],["/tags/bottle/index.html","e8d3bba7473688676d278a57993b0d1d"],["/tags/c/index.html","77bdd77f72d74c4381e2949d6961b834"],["/tags/deb/index.html","48831f5864a87ed67580c8f65df3b680"],["/tags/docker/index.html","5b9dd89b9f6899140dfb039f7babbcd6"],["/tags/flask/index.html","6279c7801d47fb6176f6c9450168801a"],["/tags/hexo/index.html","7dab4206894a888fc1572d0081b15018"],["/tags/ida/index.html","b01da9cc348a0ccbfb3b3499400b37ef"],["/tags/index.html","b5cfc2fcdcc1bf8d84e7693760e5d625"],["/tags/mobile/index.html","8bf37b71ead82a41887e9495a52b9631"],["/tags/php/index.html","e11e0b6841f2bea6aef7f25d02131b82"],["/tags/pickle/index.html","3852ff3b1188f65f888aeaa370501dc8"],["/tags/podman/index.html","f30dc91d596ca7d2abe464e734ac8c97"],["/tags/pop/index.html","401160769733cd18d7ac51f30737474e"],["/tags/python/index.html","52c1d62075f8e28925c4b7de2cd11c69"],["/tags/rce/index.html","04cbf72a542b9bd1586d8442e75ca7cc"],["/tags/re/index.html","8ba1eef43901864660fbbb421d47a27c"],["/tags/sqli/index.html","7b97ea76311fa745cf7501a9f52d97c9"],["/tags/tricks/index.html","e0a035ac440946540cf5fa63ddcdc021"],["/tags/unserialize/index.html","712d5c9eb61805ffec91101450534867"],["/tags/upload/index.html","c6536b65400028e18e9c4c3ea6a871ed"],["/tags/vscode/index.html","b79620f5e57aee9fdb5aa7978768a7f1"],["/tags/vue3/index.html","f097879e40246e34e63ad62bc3ed3809"],["/tags/web/index.html","1defffa085af0863f053ee1ec9201cc5"],["/tags/乱七八糟/index.html","1ae023ab0ddef474670ab6bd7ac198a4"],["/tags/初见/index.html","3028199f4d2ad84a0053d54c85baac8b"],["/tags/虚拟化/index.html","647c7579816ac71f0bf13d7817e10ddb"]];
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
