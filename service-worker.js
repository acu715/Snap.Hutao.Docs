if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const t=e=>a(e,c),b={module:{uri:c},exports:d,require:t};s[c]=Promise.all(i.map((e=>b[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-CGsAVEYM.js",revision:"333c126c814a9c4799d2bbea7b30a4e6"},{url:"assets/achievements.html-Bh0qI4R6.js",revision:"001778826a1863b75fb71573046d0a29"},{url:"assets/achievements.html-CdNejsgd.js",revision:"9130f08c8b7fea693ac10fe853892dee"},{url:"assets/achievements.html-CEw4w-AW.js",revision:"1c4536904be30752ae7c698690206d71"},{url:"assets/achievements.html-DwIP_dXw.js",revision:"7af6e0ad2972495f770f476912214977"},{url:"assets/app-C1fVp8-O.js",revision:"0db2ce671618cb9974feb176d25d0e45"},{url:"assets/bug-report.html-BFTFyuKz.js",revision:"7095566466974af0b2e0aa4574f83128"},{url:"assets/bug-report.html-BjYJ0AF2.js",revision:"96e7eaff8c2f6c52246c78d5b11b16ea"},{url:"assets/bug-report.html-CL24yzuj.js",revision:"c40b3d6fbc89141b3f4fe90d3e59cd9c"},{url:"assets/bug-report.html-CZuv2mLE.js",revision:"fd8f99ebad9c09ce8c675a5781fc593d"},{url:"assets/character-data.html-B9hKxfCg.js",revision:"8f66b48ec8bb69d5a1d761f0b9a4adb3"},{url:"assets/character-data.html-BAeqvocA.js",revision:"0e9d055f501417b5fcf9a90e3e114aa9"},{url:"assets/character-data.html-f3wawok7.js",revision:"31b6f8eed1fa54924f703cfe63913611"},{url:"assets/character-data.html-tOnUtmKc.js",revision:"1a0cd1f4e95f4d6ac362568401585628"},{url:"assets/character-wiki.html-BYoLGMKE.js",revision:"e1dc7155133d0e27b3a434650b153a1e"},{url:"assets/character-wiki.html-Co1LRlqk.js",revision:"dd2fef8000a9422a8141175192144061"},{url:"assets/character-wiki.html-DmO5xLlf.js",revision:"29d82fa45986adc5c28a3f86c739c635"},{url:"assets/character-wiki.html-DUqZMAw5.js",revision:"b1bfe26342eb273872049a06ca4445b5"},{url:"assets/community.html-C9_zjEkU.js",revision:"8e2db47a3729f56bcf07056b6a717a7e"},{url:"assets/community.html-CUncEV7p.js",revision:"f6424f3bb88955fabcd20da60207e289"},{url:"assets/community.html-DXfz97DL.js",revision:"b632c3df33bc378142fedee6a9c5a915"},{url:"assets/community.html-nuaDC6tU.js",revision:"2898f4cad27cc28fd39028d2d8f2e280"},{url:"assets/contribute.html-BIK-w4gQ.js",revision:"d016828cf408e941509fb7d01dce5fda"},{url:"assets/contribute.html-Cuagn3te.js",revision:"38ebe18349e6c38a69ab666c9991808a"},{url:"assets/contribute.html-D7fBYZcg.js",revision:"5167160e425bdbc84beeb4312b61e237"},{url:"assets/contribute.html-Dx-6iBHV.js",revision:"e28517cccaee8b0da5237ce1f7a788ba"},{url:"assets/dashboard.html-BGs407nu.js",revision:"bf976e732961990c6761dfa0445743fa"},{url:"assets/dashboard.html-BNtyXGP-.js",revision:"df7f844686d788e9479fc919190640bc"},{url:"assets/dashboard.html-CFU7W5gm.js",revision:"dbad18ce9636ddeba8239220cd34a66c"},{url:"assets/dashboard.html-CqbFz7g2.js",revision:"9753ff75ef46dc8e8ba91573b248b2b2"},{url:"assets/dependency.html-CptacnSZ.js",revision:"5f747090e83cc1547873d25d09bf8740"},{url:"assets/dependency.html-NvMjeRzU.js",revision:"82c56664fa6b679744b71ef823bd241c"},{url:"assets/develop-plan.html-BB6CXFaq.js",revision:"d4d8c53a68e7b4004b4390f435f9bfbe"},{url:"assets/develop-plan.html-CIyqi_Xy.js",revision:"896c998781ef70ea342405b2ca68b4a7"},{url:"assets/develop-plan.html-CK_y8fuJ.js",revision:"d044809a61cc6a01ac01bc383111efc6"},{url:"assets/develop-plan.html-mtr04D3q.js",revision:"7579be28fb4abd3bc50a21bcd6442398"},{url:"assets/digitalocean-horizontal-Nm6MkYI3.js",revision:"eaa4cbd043bf24493eda53d39fbaf796"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-aHTmiAXc.js",revision:"d38f015dac9409adf2247038a498b796"},{url:"assets/exceptions.html-B-djpBTc.js",revision:"5b92b1e30babbb3e809d25a7053b544e"},{url:"assets/exceptions.html-Dvxv_00o.js",revision:"1308045dc9accf7a423a2649d2e818b3"},{url:"assets/exceptions.html-FVe3hnyO.js",revision:"93e4f6d45bf898206d0ac05e6a55a283"},{url:"assets/FAQ.html-BAXUPpq1.js",revision:"1f43a487b3f6dd22c62cee83e21e7e63"},{url:"assets/FAQ.html-C1Q-uQXg.js",revision:"0824fd7f8c6353145f6a655df6c4d587"},{url:"assets/FAQ.html-D00_6aBs.js",revision:"d750d46c427a4e572d66ac1129810124"},{url:"assets/FAQ.html-D4-Nu1pa.js",revision:"25a33c8303682edf2fda4889682154ec"},{url:"assets/feedback-center.html-B5g7sWDE.js",revision:"cc79c0005bd12989361484c491b537a0"},{url:"assets/feedback-center.html-D_tLefvh.js",revision:"698f683d2ce75ef22c1b19752883ed79"},{url:"assets/Gacha-system-and-export-principal.html-BcafhMHn.js",revision:"a4b5641fde7836e82a8887cf7502e275"},{url:"assets/Gacha-system-and-export-principal.html-Cek-994V.js",revision:"479a0cbabbefea8acdde4d768cbce6f0"},{url:"assets/Gacha-system-and-export-principal.html-COYzqABL.js",revision:"d31d841b0ee5380e5f0a12a68dd0aa5f"},{url:"assets/Gacha-system-and-export-principal.html-D_WqJpHR.js",revision:"697e8e52aa1e8a9afd17922e0821f9dd"},{url:"assets/game-launcher.html-BoBkykdT.js",revision:"13855a17670d3cf68738a4e107c865b9"},{url:"assets/game-launcher.html-BP8hUROg.js",revision:"ad79199aa552618cc0b668df1b185f41"},{url:"assets/game-launcher.html-BtTc34Ft.js",revision:"95d1a6a4edf9e7840c006efdf84d2314"},{url:"assets/game-launcher.html-fwD7Qs51.js",revision:"47af5be299e0288e12fc28c65e5ca2ec"},{url:"assets/get-stoken-cookie-from-the-third-party.html-BLuLnS81.js",revision:"8121fe1a5962281bfa612060a5e0c3bd"},{url:"assets/get-stoken-cookie-from-the-third-party.html-CUFZDKZL.js",revision:"f3090fe4ab73e7d4467f025a290f162e"},{url:"assets/get-stoken-cookie-from-the-third-party.html-CUs3Vh39.js",revision:"4380b7fae27d20bc2c55ec8b61cbcb3c"},{url:"assets/get-stoken-cookie-from-the-third-party.html-DHYYO72K.js",revision:"43c19c3ed0350a8461ba462bc5315fca"},{url:"assets/giscus-7BMGhbDA.js",revision:"dae7c2db562e417dc4bde3be5134780b"},{url:"assets/hutao-API.html-CwJP7Jqz.js",revision:"6269b2b7e2bffd61e772c09a91b82952"},{url:"assets/hutao-API.html-D-dYu8n3.js",revision:"705630531e7730b16af54ff2c8035d93"},{url:"assets/hutao-API.html-DVq7Un5W.js",revision:"bd99210b53e77a265808cb76bb8f1e3a"},{url:"assets/hutao-API.html-V2gXz3sF.js",revision:"342c35e39cc3362f237922ad49d54d5f"},{url:"assets/hutao-passport.html-BoIbEbQ8.js",revision:"a3835c78a90c42f30a7535587ef523b8"},{url:"assets/hutao-passport.html-Byi_48GE.js",revision:"652957586062a019794f277cefa39839"},{url:"assets/hutao-settings.html-Cg6ZvIJt.js",revision:"e0f4ef799f7137a93b7eef6a63101a85"},{url:"assets/hutao-settings.html-Hy4y4Tlz.js",revision:"ea6e92be67c3c1b0c9e7be898fe33c62"},{url:"assets/hutao-settings.html-JnKCMjqX.js",revision:"1eefe5a928887ced23d260e1111fee2d"},{url:"assets/hutao-settings.html-rdeeCzCF.js",revision:"4dd95c902c5be62fa3f80113423514b6"},{url:"assets/i18n.html-7WQ_bqTw.js",revision:"3ccd6cfaf44608161e2be69adbd14755"},{url:"assets/i18n.html-A0kI-rUk.js",revision:"0b0ecb57a2755fde0e367aa5f05092cf"},{url:"assets/i18n.html-BvLWj86V.js",revision:"3218653c5bcf3f1f427f68e3ba2f9f2c"},{url:"assets/i18n.html-FkDEwiEL.js",revision:"995abe5c8441bc4a0fa53a47ea40df83"},{url:"assets/index-Ds2TtRM5.js",revision:"4b2541a3a6e4abc1431da28a1aa02b8c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_EEmh7qO.js",revision:"b07281806a70f03f0745b5c5d1908ea6"},{url:"assets/index.html-7B_ImEdb.js",revision:"c34d96fbc89fcb174467b666a52d6486"},{url:"assets/index.html-B-YXp2cS.js",revision:"75d28f3d0d4ab445c20c3e9f9146b8f1"},{url:"assets/index.html-B3vXpC7G.js",revision:"112198ec9397e61017ace730b35c05e6"},{url:"assets/index.html-Bccpe9tQ.js",revision:"2feb3233beb6fbf703091bb10c571203"},{url:"assets/index.html-BCGipcO1.js",revision:"42345970e6d266dc789f6f80c7f90a42"},{url:"assets/index.html-BGhNr7pM.js",revision:"e4de984c9c4cc06c6f1198fd14b1d3f6"},{url:"assets/index.html-BHQs4fsn.js",revision:"876a4380803c54f48330c46531444028"},{url:"assets/index.html-BuZHbsLz.js",revision:"07297d9e5ea5ce833616aceb4bf426ab"},{url:"assets/index.html-BWE3KrK8.js",revision:"06bfc0bf44b4e0aa8003b1826e11da73"},{url:"assets/index.html-BwzTpYYO.js",revision:"0bd0b15ae82f2d7587b7458e43f7123d"},{url:"assets/index.html-ByFcN-E8.js",revision:"726979fc4d0afb07c2530b70c83d6b39"},{url:"assets/index.html-BzQYaWWt.js",revision:"2e9f25f58b36b9d5759e312de1904a51"},{url:"assets/index.html-C9Pt9Bgl.js",revision:"3970256c83ca7506b5d08e24e4276a13"},{url:"assets/index.html-CfSZ8gmh.js",revision:"65b47099a249a36cdf0c37f565485772"},{url:"assets/index.html-CJcwU5Bz.js",revision:"870f172f2652639469bbacdb43d578e3"},{url:"assets/index.html-CLUrXEW7.js",revision:"870aec3143252a93c8b73560cf3caa19"},{url:"assets/index.html-Cnb0_Lde.js",revision:"f9c06aee179c60e52c572d92c85d5722"},{url:"assets/index.html-CU8zdQ9y.js",revision:"0f6f7ab002713258e1c9375ed5204871"},{url:"assets/index.html-DjaI5YfS.js",revision:"48ed20ee0e92e87fda6726b72fefcf25"},{url:"assets/index.html-DNgIuZZW.js",revision:"9d007c9c7679eba3954a5b824c9099d9"},{url:"assets/index.html-DtTsrcG-.js",revision:"96db22dbd47d2497784d1374f99b5c18"},{url:"assets/index.html-uwcyKqqB.js",revision:"323c4b841c43e96743bc3df0e1254ced"},{url:"assets/index.html-W7MQRISg.js",revision:"b800ae36d00e46a29587da6796537d0c"},{url:"assets/join.html-07lUZL04.js",revision:"081d7160f793b689e9bf52da5e175895"},{url:"assets/join.html-Bh--0Gic.js",revision:"a320fd5e6f8066941a4972b8d55b8f1d"},{url:"assets/join.html-D0gpb2SV.js",revision:"1daac544dfd18cec674cb9102f1f6f66"},{url:"assets/known-issue.html-CJUJBGsZ.js",revision:"e8650bf2ac276d094986f4a3258cbd88"},{url:"assets/known-issue.html-CnvSDrt5.js",revision:"3b64e1665c9fc6f339d51c580520d939"},{url:"assets/known-issue.html-DJ5XrL64.js",revision:"6831d5ff67612ddf9d29598d1bb6dd18"},{url:"assets/known-issue.html-rUGhuE8O.js",revision:"ae76534aeef91b5b42829ab592ded3b5"},{url:"assets/menu.html-BKPMBPSv.js",revision:"eebc123ecdd524675c6091e0e1a85572"},{url:"assets/menu.html-choRYHVp.js",revision:"7ebb1dccf51b858d3f2a1b2cca21bbb6"},{url:"assets/menu.html-Cnqdej4k.js",revision:"1d2e2ad50d460337f7cfae71a7bc70be"},{url:"assets/menu.html-DrDzR4vl.js",revision:"79d48f4f16bb493d9b3dd6d8063aceff"},{url:"assets/mhy-account-switch.html-BWB1UxIZ.js",revision:"24dff01f6116dfba2911086779a21261"},{url:"assets/mhy-account-switch.html-CPZZbN2c.js",revision:"eec25e173b714ecfd39afbf9780e2c35"},{url:"assets/mhy-account-switch.html-N7A_tuO9.js",revision:"50f2a1dba9cf4ed88d68c40663edcdcb"},{url:"assets/mhy-account-switch.html-VBcnVhJm.js",revision:"c911a26bc1dcece71e97d4f0f9575e96"},{url:"assets/monster-wiki.html--CAVeYGC.js",revision:"dbd807150fb5dffcc81a3eb3a922e6b2"},{url:"assets/monster-wiki.html-7GOy82NJ.js",revision:"12c20a772782bf5e698e015576e33b71"},{url:"assets/monster-wiki.html-CPUPMrzi.js",revision:"c07d8f839e668312f412461d635d3837"},{url:"assets/monster-wiki.html-DWTNAgQi.js",revision:"afde1a1840a08c8cf48eb8b933990632"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/platform.html-_9p-eZDT.js",revision:"cae8194d6d41fcf84fec28f670295407"},{url:"assets/platform.html-BJC_ofJa.js",revision:"5f4115e461a63b0bfc4fbb7484c827f0"},{url:"assets/platform.html-CMnjdlg2.js",revision:"a1cd9980ba1e2bca5603484a9e8b85e8"},{url:"assets/platform.html-lGToeY2A.js",revision:"a94963484d9f9f5a125bddcf05c184ff"},{url:"assets/privacy-notice.html-B7HC2YEo.js",revision:"9010256b46c95989178542bd72269426"},{url:"assets/privacy-notice.html-C2eUd9Me.js",revision:"f9f3adc5728369e70911f2575a03b47b"},{url:"assets/privacy-notice.html-Cy8W3ZCz.js",revision:"d0a29fcb2a9c5615d23b5f38cab9ab82"},{url:"assets/privacy-notice.html-pKorDD4m.js",revision:"55c6960e25511b887b0d1d2997fd5309"},{url:"assets/project.html-Bcj9pECU.js",revision:"79d17642788c749cf08c06ff76051c75"},{url:"assets/project.html-C_JXOum8.js",revision:"34ff435d378005b9513f8446f45491ea"},{url:"assets/project.html-D3Av--6E.js",revision:"e224460a19fb390b2ac6a0098aa937d4"},{url:"assets/project.html-DFGYR7zb.js",revision:"6f91ba34b27046ba414ec1bcdef4c034"},{url:"assets/quick-start.html-BRgWwXyg.js",revision:"66e1337bce7a9f39960280790b01f40f"},{url:"assets/quick-start.html-CKnnpBf8.js",revision:"0ec9f9f193f0a897723d065fbac1e240"},{url:"assets/quick-start.html-CRlBodXJ.js",revision:"48919315f81dab7ebff7d52e8078c98c"},{url:"assets/quick-start.html-DBQHc4Df.js",revision:"e26bb2a7f7e065c5163d68be4d399e27"},{url:"assets/real-time-notes.html-B2HSnHlq.js",revision:"45fc27faa2e5d4feebc6b06617c952d2"},{url:"assets/real-time-notes.html-C6TEAmWE.js",revision:"90e4788d8a5f37a4b2dd7c1365fd1961"},{url:"assets/real-time-notes.html-CKa0s6c4.js",revision:"ee8cda5bd31f2a8b083217fe5978d123"},{url:"assets/real-time-notes.html-DljHXE9H.js",revision:"2986ead85d088e1c97342e34a203ecc1"},{url:"assets/setup.html-B6ZWjZzz.js",revision:"6a2971725907b697c0ffc3ffbf8afd89"},{url:"assets/setup.html-dcdl1LF2.js",revision:"a3f4000b9bd0f58b6a6a8bfd345aad12"},{url:"assets/setup.html-JMaxCltn.js",revision:"cf6c9ecf2b4d5b721413d52f1edea909"},{url:"assets/setup.html-zZFpPoXh.js",revision:"7d9692af1afa85d26e7b9c867a7b1739"},{url:"assets/side-load.html-BosNwWP2.js",revision:"abb1e211837aa3e49a9dd0c3ce1b61bd"},{url:"assets/side-load.html-CHu9VvJH.js",revision:"69dce706014a3339d1a594228a7c9561"},{url:"assets/side-load.html-CqDrB3Uj.js",revision:"bcc8b1412ea09bfb9d6be09f4fbddae8"},{url:"assets/side-load.html-CU5_8jQX.js",revision:"ad0bff7eb864fd3500e1179836d7bf49"},{url:"assets/star-request.html-BAtmiXJE.js",revision:"cd22563cfd6337e5d14dd9ad9fde8955"},{url:"assets/star-request.html-BVW6jZh-.js",revision:"37903f0e25a020ddc323fc67da093f12"},{url:"assets/star-request.html-C8Mmt10F.js",revision:"0bbde8a727c278c57e8a4b23000cc40c"},{url:"assets/star-request.html-DO6fu8I9.js",revision:"69565525a97352af2588e7c081dc6df1"},{url:"assets/style-D-w9hcHR.css",revision:"41466e6e8a493b82059302cd531cb555"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/support-us.html-4gnzsikY.js",revision:"ba7003d4bba2db6b821afa9e98cf9141"},{url:"assets/support-us.html-Cdn3xbHg.js",revision:"6be8af24d820ab577ca722a0e04beebf"},{url:"assets/support-us.html-DkD64mmh.js",revision:"0d2b39e3b099bd102c949142df2b6ee8"},{url:"assets/support-us.html-Q6LzDu66.js",revision:"e4161c3f3bb58af976e2ede88a327c50"},{url:"assets/symposium1.html-CoGRd3Zk.js",revision:"abf15e1fc4b9fced65d2fa8c8ce29e8a"},{url:"assets/symposium2.html-Cxc_PNhg.js",revision:"75de2f6c2ecb8823091528c05130e4cc"},{url:"assets/tos.html-2kpAzNNX.js",revision:"6ca68e6e9047b7a77de7563d532a8984"},{url:"assets/tos.html-B-z2s70D.js",revision:"da5001469e87b49b61200c144d456a56"},{url:"assets/tos.html-DBKjxXLY.js",revision:"54546ab34bb718c701323b1714ba8b1d"},{url:"assets/tos.html-DFuuN1Rc.js",revision:"c219b7e79f21fc47ab16cec22af1e447"},{url:"assets/uninstall.html-Bj21g5BD.js",revision:"c56cc955aec23ef83a0cb5c1c874e2f1"},{url:"assets/uninstall.html-ByVlnuOJ.js",revision:"95b7966636baeb7c3dc65bfed0a9a1c0"},{url:"assets/uninstall.html-CE3Ee6Fn.js",revision:"2e930234ee1b668fec971560a43ad457"},{url:"assets/uninstall.html-CJpperq5.js",revision:"6a2c3e3f3576bc87c531bd196f300246"},{url:"assets/update-log.html-BD4IhhNA.js",revision:"79cedbf49c596e48ca542668a9f47cd1"},{url:"assets/update-log.html-BLe3z3u1.js",revision:"7f86276203439182c3bb3ec910a7c360"},{url:"assets/update-log.html-CiTUM1x-.js",revision:"f9568c06fc325b85573f76c65b5646cf"},{url:"assets/update-log.html-RqJpQil0.js",revision:"a412681a9b78a9e2f15d5677fe1df4aa"},{url:"assets/version-1-9-0-breaking-changes.html-Bq19-2Kx.js",revision:"0369b11066bdc41b27743ed5884b775a"},{url:"assets/version-1-9-0-breaking-changes.html-BxhawVvI.js",revision:"ef928b088cc3db888163b87c43dfe498"},{url:"assets/version-1-9-0-breaking-changes.html-tAggLtYM.js",revision:"9fb029258c7a0ad6a12bda26b9a38b59"},{url:"assets/version-1-9-0-breaking-changes.html-vqEQP2Wr.js",revision:"a52aec12dbdbfb6fa0ec711b985ddd46"},{url:"assets/weapon-wiki.html-BNpts9dX.js",revision:"53349c2af6a6eedfbb911a8151241b94"},{url:"assets/weapon-wiki.html-CBcXMUiI.js",revision:"98ffa14c9c0a3eb03452544caa92f752"},{url:"assets/weapon-wiki.html-the3S7uT.js",revision:"2927c530b8938bb50ea29fad423fdcb8"},{url:"assets/weapon-wiki.html-YbmGyYSY.js",revision:"09f203114661ee5ec53df74e366d13d6"},{url:"assets/wish-export.html-0fS756W5.js",revision:"8311b10928a5c840994822a476b6a337"},{url:"assets/wish-export.html-BttydJeb.js",revision:"e267358e173e32e6a49f9713014ca865"},{url:"assets/wish-export.html-CnspAURq.js",revision:"e6a762fb56f0bc09a79e33c73c0c7396"},{url:"assets/wish-export.html-Du5Krrnq.js",revision:"ddf121a90f25f5c4d31810d02eb7133f"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"svg/afd-official.svg",revision:"bec79d5731d1c28c509746469eaafd0c"},{url:"svg/afdian.svg",revision:"22e22e64ee9da786e70d0ead0dc1ef26"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"d740e6b280b4bd7a6e917703790b79c8"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
