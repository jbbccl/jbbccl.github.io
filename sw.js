/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/cs/enviroment/hexo github搭建博客/index.html","6f01ad6e914a476d5bf983cdc38ff924"],["/2024/10/13/cs/enviroment/dabian/index.html","a3ef131aa73f3a2f6b41a8a2f96e37af"],["/2024/10/14/cs/web/sqli-labs/sqli-labs-less_1,4,11/index.html","912a2f6d18f0eb8b75067db4800d2a48"],["/2024/10/30/cs/web/sqli-labs/sqli-labs-less_7,8/index.html","95d428d0cd3114c554483eae05246da7"],["/2024/11/07/cs/enviroment/v-for中控制特定元素/index.html","872c494f1a87aeac87474fbf64d537ed"],["/2024/11/08/cs/algo/二叉数非递归遍历/index.html","28ae0a025a2d35bb19dead0657bcfc63"],["/2024/11/08/cs/misc/进程使用端口记录/index.html","0840983cc78292a6c3cbea7491f3ac9b"],["/2024/11/08/cs/web/python/bottle_反序列化[xyctf2025]signin/index.html","e3b6f69306c0cdb24b5733d741f4897e"],["/2024/11/10/cs/enviroment/hexo-neat不能压缩部分js文件-解决/index.html","ad2cc5671f2668af90cf8a6932711c35"],["/2024/11/11/cs/enviroment/Hexo的md解析器将半角单引号转换成全角/index.html","c350d0ea7e6a4247b9e112594a80cd1d"],["/2024/11/20/cs/web/sqli-labs/sqli-labs-less-1-10/index.html","e2d12d5538397d95bda9f5f8a6fb7016"],["/2024/11/22/cs/web/sqli-labs/sqli-labs-less-11-22/index.html","07a422af56316c56c01072aff7867531"],["/2024/11/24/cs/web/sqli-labs/sqli-labs-less-23-27/index.html","b83075575a111781bf96d64eaafeeefa"],["/2024/11/28/cs/web/sqli-labs/sqli-labs-less-28-37/index.html","3c6bad89924823986d90808717e44ea8"],["/2024/12/04/cs/web/sqli-labs/sqli-labs-less-35-45/index.html","fe2f9ff5650fd12ff540151868461d04"],["/2024/12/07/cs/web/upload-labs/upload-labs/index.html","e5e3b2cebc5197d6d8d092797c2108f4"],["/2025/04/20/cs/web/sqli-labs/[xyctf2025]ezsql/index.html","cd84f3361f049d6bfaba4ed383d9c9b6"],["/2025/05/03/cs/web/php/php无参RCE/index.html","960ebbe6897185a60222a62e2d421173"],["/2025/05/10/cs/enviroment/安卓动态调试环境/index.html","8e18d7fccd107b77c2a50026eafd0905"],["/2025/05/12/cs/enviroment/php调试环境/index.html","8c674b98f39ad0b19dd80bc448cf0481"],["/2025/08/16/cs/web/python/SSTI-jinja_/index.html","976a1641d85aa0a3d2296c9ea81285cf"],["/2025/08/22/cs/enviroment/intel单核显SR-IOV虚拟化直通QEMU_KVM/index.html","7034a322da73a3d5e8c81d0b00794ce6"],["/2025/10/23/cs/web/php/php长度限制_字符限制RCE/index.html","d15577b2554d828e4b652f9a7582bbf1"],["/2025/10/29/cs/web/php/[geek2025]popself/index.html","fbd53110528c0d6dfdaeec34db60b5f2"],["/2025/12/12/cs/enviroment/podman容器图形应用/index.html","9a3e9d965bbe89c8eea3b7a3953f85b7"],["/2025/12/22/cs/enviroment/RX6000系A卡加速yolo11训练/index.html","6e0932ee54cdb81495b263752ef937db"],["/2026/01/22/cs/reverse/ida使用/index.html","6c70aa01ec9de1e0ec3cbd0dbe5d2c14"],["/2026/03/22/cs/algo/bfs错误/index.html","9992757bf7989dfa692859826d698974"],["/2026/05/03/cs/web/http/hgame/index.html","622751fd19b2073757da88e576bbf9a7"],["/2026/08/29/cs/pentest/[sqli-jeecg-boot]脱敏/index.html","bdef5117ad4241c55a060e121afe3fce"],["/2026/09/02/cs/pentest/资产收集/index.html","5bb517175c8d148eee52349302e2e8d7"],["/archives/2024/10/index.html","e0391b9de6166d65f6a7b22bc701050d"],["/archives/2024/11/index.html","ef9b7ad310be4c8d995fcfa6163f83cc"],["/archives/2024/12/index.html","e9dc5dee378981e34b352b3a7084d3dc"],["/archives/2024/index.html","71ad17dd1cd29a90a2533d9096cde25d"],["/archives/2024/page/2/index.html","6f526c10acee6f6167929c838e1ffab9"],["/archives/2025/04/index.html","58bb552d3416844c5aea6e21bc73abaf"],["/archives/2025/05/index.html","aadb4a268238c47de731f0f8de618066"],["/archives/2025/08/index.html","206bce9de7d5a7244419f3ff7735e08e"],["/archives/2025/10/index.html","992d218514cdb3e947e133234b3662b1"],["/archives/2025/12/index.html","36000d96ae3336b1e4bb757e7111e089"],["/archives/2025/index.html","fb8d863c62c922e9c5cca43fbc7800d4"],["/archives/2026/01/index.html","4ea66f82434e22df563ee005cb5c0e11"],["/archives/2026/03/index.html","7a4a1b133ce364cd88ea9db6a799c25c"],["/archives/2026/05/index.html","aee8e2d6ea6b259742c4be57f8f294fd"],["/archives/2026/08/index.html","a87408b1064a31ca14eebe33ed41e565"],["/archives/2026/09/index.html","1054d9755648b15baf5a0a3f968b801c"],["/archives/2026/index.html","f429cc44bc5ec48dbdb7fe32f26a8504"],["/archives/index.html","7593fa7ec47e82c962e5aca7c2354106"],["/archives/page/2/index.html","f3ffcab5366517d3603648cd7ff4fcc9"],["/archives/page/3/index.html","a6530175c25a4e9048e73aab83cc4d5d"],["/archives/page/4/index.html","bdeeec832c90ebbee8785deedbd9905e"],["/categories/algo/index.html","3d4d1bc4b9503238ffeb94c9d8d72784"],["/categories/index.html","3b22a490cf8f1458ac016309ebb52ab3"],["/categories/misc/index.html","960b9e445d3782a10bd85bc58cac3af9"],["/categories/pentest/index.html","7f602ebb5c809c2135cdea216c3ab662"],["/categories/php/RCE/index.html","520a9aa5244de14807c7e4168cefa672"],["/categories/php/index.html","9358e16a78abb0de93ae8c73f313bc6d"],["/categories/php/unserialize/index.html","e1a2e0191929782042127905b6726e86"],["/categories/python/SSTI/index.html","4744c0f073ab7b916a2f834bd40184d7"],["/categories/python/index.html","832eae554cf2d803c8bb101a6e8683b8"],["/categories/reverse/ida/index.html","9e10eb95b5f7f1c0e094eebf738b14fa"],["/categories/reverse/index.html","7c92b2979b3f47b240dc7fe1243f3b40"],["/categories/sqli/index.html","20b11fd17376c496e40e177910b07b39"],["/categories/upload/index.html","5c273238b0098162076fec762c3d1419"],["/categories/web/index.html","ee373068b377ec08e2bc21e8e81927c3"],["/categories/web/php/index.html","853c7888cab22a8c40babd35bd10426d"],["/categories/web/python/index.html","dcddc70b37b196ed8d4595b27561ab40"],["/categories/web/python/unserialize/index.html","c9ed284bc2cebbf0d01fb7b9e9aab5cf"],["/categories/web/python/unserialize/pickle/index.html","f071208721f94c07586f2db8240e2bfd"],["/categories/环境/dotfile/index.html","ded3d691d9c3a76485c21b89b51a740c"],["/categories/环境/hexo/index.html","e0d2c982a88949c5e00c4309e5a64ed4"],["/categories/环境/index.html","7baee0fad1f20bec2b17299528621efe"],["/categories/环境/mobile/index.html","fd74236cb156feda1a0c8b0fe6999e81"],["/categories/环境/php/index.html","675d50021084e76e4ef07321bd271d03"],["/categories/环境/vue3/index.html","d60c9696a9d3d386063e37cc02e2cb8d"],["/categories/环境/虚拟化/index.html","6f1f710c1ddbed043156ff3e8f304193"],["/css/main.css","4a7b7f7453a89f340b2a2c942e3d4acc"],["/css/noscript.css","fe08f3d37c5773e67e880f70809d4f27"],["/images/Pasted image 20261013165752.png","848b7ca128b713600fa39ef033958e05"],["/images/Pasted image 20261013165806.png","848b7ca128b713600fa39ef033958e05"],["/images/RX6000系A卡加速yolo11训练/BoxF1_curve.png","adab676ec97a581793af76ffdeaa8d55"],["/images/RX6000系A卡加速yolo11训练/BoxPR_curve.png","8e1307bc3a45f9442622100d3f27e777"],["/images/RX6000系A卡加速yolo11训练/traing.png","d6ad320c8b8091054839bdbef1236eb8"],["/images/RX6000系A卡加速yolo11训练/tree.png","99b1fd67d86b39b67004be150156b40e"],["/images/RX6000系A卡加速yolo11训练/val_batch2_labels.jpg","0eeac947affe7f6a0541aa4793eec29c"],["/images/RX6000系A卡加速yolo11训练/val_batch2_pred.jpg","500b21ab52f71ac7e70b588dda50f3d1"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hexo-neat不能压缩部分js/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/hexo-neat不能压缩部分js/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/ida使用/引用.png","04b8f3bf7d9123ce2b6010223e227301"],["/images/ida使用/插入结构体.png","3ba09e9da9754a94ba5dbb0476d43cb7"],["/images/ida使用/搞错了.png","dd6529ce6b236c188de81e4f5d1561b3"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/pentest/jbsqli.png","e6bcc72f567e8f8e234435ca6bc2d056"],["/images/pentest/mssqli.png","be3f6ef4bc2820c9f77aa5781c3cde21"],["/images/pentest/mssqli1.png","1b705163571b8c79f80174d87502716c"],["/images/pentest/mssqli2.png","edf2482e9265ff0240faf6b2e6d65141"],["/images/php_SSTI/Smarty引擎.png","db8e6dcf861e44b9af3798ab9de6a6a8"],["/images/php_SSTI/Smarty文档.png","f1c84ce2d975329d7b6d037a245fe4ac"],["/images/php_SSTI/点位.png","16e5da53f3b2726265660f81e16051a7"],["/images/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/php无参RCE/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/php无参RCE/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/tmp/Hgame_mcp.png.png","9a1a572ac4c0c375f13979e84c7dd843"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/vscode配置cmake环境/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/vscode配置cmake环境/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/vscode配置cmake环境/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/vscode配置cmake环境/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/vscode配置cmake环境/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/外部/新版flask的pin码计算/3475290-20241105210542327-144503_2e2f28ea60d4400aa.png","24397ac27d6e4492ff3d01460df60d7d"],["/images/外部/新版flask的pin码计算/3475290-20241105210542526-210443_61d514a0f5b2447ea.png","01df6015608c26aa92ebb0ef73ae2b3f"],["/images/外部/新版flask的pin码计算/3475290-20241105210542722-215211_7f2eaa82683440ab9.png","aa542b02630507bf123d1b5e75bfe93a"],["/images/外部/新版flask的pin码计算/3475290-20241105210542869-210109_f4086838ba3e4e0d9.png","0881ac75abbb73b62533e56f2a97c80c"],["/images/外部/新版flask的pin码计算/3475290-20241105210543110-182782_b8f087b38c284834b.png","d95a688f84876a4f4384ae37d2833b89"],["/images/外部/新版flask的pin码计算/3475290-20241105210543380-808680_d180df3b06bd4ee8b.png","ab986e1cbe19ffd129e1329a3673eaf9"],["/images/外部/新版flask的pin码计算/3475290-20241105210543570-100418_7c933b5dfdd94f969.png","92b8875253a1b308f18013c3edbbdb2d"],["/images/外部/新版flask的pin码计算/3475290-20241105210543852-837886_c02ac0ee16e349939.png","afb830ff5831a55891f9b30f2452cf23"],["/images/外部/新版flask的pin码计算/3475290-20241105210544074-556149_65117fc5b6dd4d678.png","bed94370ddc18dac573d680e7833abff"],["/images/外部/新版flask的pin码计算/3475290-20241105210544268-223023_612649b429d4407db.png","c71bf600f817e101cae944dbabd9060b"],["/images/外部/新版flask的pin码计算/3475290-20241105210544479-192560_3171553a0f0b4332b.png","8507a2a447bda25a56b6b30a4dff3bfb"],["/images/外部/新版flask的pin码计算/3475290-20241105210544774-137777_16b6bfcb83fc47eca.png","f4c2f81480415053dc99711f17ee1a0e"],["/images/外部/新版flask的pin码计算/3475290-20241105210544968-733520_2ae0b457e540478ca.png","9c90a02702cb3bcd6c7ec32c414cb93d"],["/images/外部/新版flask的pin码计算/3475290-20241105210545159-109972_3d2066c2960e4254b.png","739a24ab1bc108088f5dc73261e0f49c"],["/images/外部/新版flask的pin码计算/3475290-20241105210545385-211814_37c9da40bd344726b.png","9b17a59f1a3c24d5c3907e34476514e7"],["/images/外部/新版flask的pin码计算/3475290-20241105210545543-126616_3cfef6072067485e9.png","2c3d97fcd05d08ad53c75133114c2101"],["/images/外部/新版flask的pin码计算/3475290-20241105210545699-998906_7f11faee4de5489fb.png","1b9581f0bfb578333717ce1cad6d22a0"],["/images/外部/新版flask的pin码计算/3475290-20241105210545876-708429_f5754a6b719f4f38b.png","ffe920470fd36a0d8a73d577fd08f3a4"],["/images/外部/新版flask的pin码计算/3475290-20241105210546074-271902_e4b3ba03c7c049ceb.png","1a2a31e72ec82b0558f0cfa6f2e8e3b5"],["/images/外部/新版flask的pin码计算/3475290-20241105210546246-191347_f4a5a8bfb2fd485a9.png","850950db59d1fdf2c99dc65e65e27241"],["/images/外部/新版flask的pin码计算/3475290-20241105210546448-110113_9470621b41cc4bd48.png","c1cf7af763b22c4aaa89120f37ff1ca1"],["/images/外部/新版flask的pin码计算/3475290-20241105210547075-879787_80dfc6e28f9043b4a.png","f1e578a3b15fd138628a31f4b500cb5e"],["/images/外部/新版flask的pin码计算/3475290-20241105210547448-158471_b454c365d14c4bf7a.png","63a7d270ea59b62eab136bba711be74c"],["/images/外部/新版flask的pin码计算/3475290-20241105210547676-782393_9076ebed1fd442309.png","1f2bddbbe2e32ad12e4579fb26665220"],["/images/外部/新版flask的pin码计算/3475290-20241105210547846-356458_b2e87a5904994e179.png","39ed587b6d5904bb430f7e04ac6b1696"],["/images/外部/新版flask的pin码计算/3475290-20241105210548031-171835_aedafaecee4d4e329.png","a24ce045887dc47e2557c5e5649d7441"],["/images/外部/新版flask的pin码计算/3475290-20241105210548251-686390_8ea5f3c6e9684d619.png","cb7f2649c52ced22abd3feabe2da81cf"],["/images/外部/新版flask的pin码计算/3475290-20241105210548425-202198_ae6d45774d2a42deb.png","63e723ee30dd93aca4049b4f426a537e"],["/images/安卓动态调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/安卓动态调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/安卓动态调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","638aec2896f81e1cd2fb2008742b47ef"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","63574b7b401beb4635964da5ff6db35a"],["/js/pjax.js","b8cf673cb986e175da6188379ca8d918"],["/js/schedule.js","b486a529182d17221cc23aef4822c8a8"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","f5f9c1a37e18a068a6da114fcefca78e"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","061c14d3ba73ff6256e463f04dace299"],["/js/third-party/comments/disqus.js","abfd13cd9738d2bfbeea54801dbe2418"],["/js/third-party/comments/disqusjs.js","1ad71d07f9cf0784087896f213245957"],["/js/third-party/comments/gitalk.js","85e6378484725ce90671b7d2393b9da3"],["/js/third-party/comments/isso.js","a58076e3d641979e5df4dda05aa21b44"],["/js/third-party/comments/livere.js","efc1869e3bda61d86c8a0d34d10f236e"],["/js/third-party/comments/utterances.js","e49ef86026739b837b5e04b6d017a139"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","961cc7b833796e6383097656f50c1f63"],["/js/third-party/search/local-search.js","00364b680de714e73845d018e60e08e1"],["/js/third-party/statistics/firestore.js","a45b8765d447cb2132bcd63d026e1910"],["/js/third-party/statistics/lean-analytics.js","76173d4f418ca139dbc4904be5905e88"],["/js/third-party/tags/mermaid.js","3f161c4f1439779555745f8991a3a6d1"],["/js/third-party/tags/pdf.js","907e0778e9c2a384e662702d15932a72"],["/js/third-party/tags/wavedrom.js","3cc40bc51a87927d18edb0ba01cb05f3"],["/js/utils.js","f15f1788b3b9167a08efddc77097742c"],["/page/2/index.html","a3d5db2f9fa07cb1ec0a6aef79ad056d"],["/page/3/index.html","ae7039bad1d7a29f205b12a26c336caf"],["/page/4/index.html","24a97df32b478742055a59b74b59bc64"],["/sw-register.js","6de2937c71b157471da315ded40cfa0b"],["/tags/RCE/index.html","b8eb8d22ad089b08f7e4765d8e1cbaab"],["/tags/SSTI/index.html","7200bdbf5cdf28fb56e40c9e4f15a1d8"],["/tags/bash/index.html","5fe0edabc897c6ecf001ada6713d3b3b"],["/tags/bottle/index.html","4cf1f82a7c578321d1efa1e0c4fe63ae"],["/tags/c/index.html","d2dd8bf27d3dbba069fab18a3133fb73"],["/tags/deb/index.html","cdcb05af7df64da4e0a5a1573d30031b"],["/tags/docker/index.html","9a00811b3257416f5bccffce76fac53d"],["/tags/flask/index.html","16b736031faf601bed59a31a881f008c"],["/tags/hexo/index.html","95ffa9f888e8f06baa7fd62bffd2399f"],["/tags/ida/index.html","0e9dc15baf026344fc7198e7391eb0c1"],["/tags/index.html","b655ef9e113bfc50832c86e2020eeca4"],["/tags/mobile/index.html","792ed1d33ffd942219fc53fd9aa92943"],["/tags/php/index.html","7092fcc3478e363ed98723be9a44badb"],["/tags/pickle/index.html","adc002573fd7d14a0bfc007fa14370de"],["/tags/podman/index.html","cc7e93faf32d87c26c5ff4117dabfc2e"],["/tags/pop/index.html","2ed9fb5880c8dfe3189f8616e0e37642"],["/tags/python/index.html","242fafb43a9b3856bc20ac1806cb1c7c"],["/tags/rce/index.html","142c204acbf7f38b6c63fb1452ffa9a2"],["/tags/re/index.html","815464b4ef3f6040000de02839f3ced0"],["/tags/sqli/index.html","734902f3fa742c6af2bd6b7fa9ec4166"],["/tags/tricks/index.html","7e2c5d02a89516a33239e618aeeb5eaa"],["/tags/unserialize/index.html","134a649acc4d12a14b98d3094b3d3257"],["/tags/upload/index.html","faa4689a4799512f78a685829e2cbe0a"],["/tags/vscode/index.html","0990634446f9af130209354666d946e2"],["/tags/vue3/index.html","caa68922f3f3c64d33f9f67efd7c6c7e"],["/tags/web/index.html","ec789c4dfa7b067a54d0b16a880b2a5e"],["/tags/乱七八糟/index.html","1ea7a5c74ce9b65c6dd75c058ff85fb8"],["/tags/初见/index.html","1eb365ad368c86d5b12d74c4632936a9"],["/tags/虚拟化/index.html","f7bf4abbbfa104730e234d7ec863d11b"]];
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
