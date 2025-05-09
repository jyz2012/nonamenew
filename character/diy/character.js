const characters = {
	noname: ["female", "key", 3, ["noname_zhuyuan", "noname_duocai"], ["name:null|无"]],
	ns_shijian: ["female", "key", 4, ["nspianwu"]],

	ns_huangchengyan: ["male", "shu", 3, ["nslongyue", "nszhenyin"]],
	ns_sunchensunjun: ["male", "wu", 5, ["nsxianhai", "nsxingchu"], ["name:孙|綝-孙|峻"]],
	ns_yuanxi: ["male", "qun", 4, ["nsshengyan", "nsdaizhan"]],
	ns_caoshuang: ["male", "wei", 4, ["nsjiquan", "nsfuwei"]],
	ns_sunyi: ["male", "wu", 4, ["nsguolie"]],
	ns_huangwudie: ["female", "shu", 4, ["nsdiewu", "nslingying", "nspojian"]],
	ns_chentai: ["male", "wei", 4, ["nsweiyuan", "nsjuxian"]],
	ns_zhangning: ["female", "qun", 3, ["nsfuzhou", "nsguidao", "nstaiping"]],
	ns_yanghu: ["male", "jin", 3, ["nsbizhao", "nsqingde", "nsyidi"], ["hiddenSkill"]],
	ns_zanghong: ["male", "qun", 4, ["nsshimeng"]],
	ns_ruanji: ["male", "wei", 3, ["nsshizui", "nsxiaoye"]],
	ns_limi: ["male", "jin", 3, ["nstuilun"]],
	ns_zhonglimu: ["male", "wu", 4, ["nskuanhuai", "nsdingbian"], ["name:钟离|牧"]],
	prp_zhugeliang: ["male", "shu", 3, ["nsxingyun", "nshanlang"], ["name:诸葛|亮"]],

	ns_zhangwei: ["female", "shu", 3, ["nsqiyue", "nsxuezhu"]],
	diy_wenyang: ["male", "wei", "4/6", ["lvli", "choujue"]],
	// diy_caocao:['male','wei',4,['xicai','diyjianxiong','hujia']],
	diy_hanlong: ["male", "wei", 4, ["siji", "ciqiu"]],
	diy_feishi: ["male", "shu", 3, ["nsshuaiyan", "moshou"]],
	diy_liuyan: ["male", "qun", 3, ["juedao", "geju"]],
	// diy_luxun:['male','wu',3,['shaoying','zonghuo']],
	diy_yuji: ["male", "qun", 3, ["diyguhuo", "diychanyuan"]],
	// diy_zhouyu:['male','wu',3,['jieyan','honglian']],
	// diy_zhouyu:['male','wu',3,['xiongzi','yaliang']],
	diy_caiwenji: ["female", "qun", 3, ["beige", "guihan"], ["name:蔡|琰"]],
	diy_lukang: ["male", "wu", 4, ["luweiyan", "qianxun"]],
	// diy_xuhuang:['male','wei',4,['diyduanliang']],
	// diy_dianwei:['male','wei',4,['diyqiangxi']],
	// diy_huangzhong:['male','shu',4,['liegong','fuli']],
	// diy_weiyan:['male','shu',4,['diykuanggu']],
	diy_zhenji: ["female", "wei", 3, ["diy_jiaoxia", "yiesheng"]],
	// diy_menghuo:['male','shu',4,['huoshou','zaiqix']],

	diy_liufu: ["male", "wei", 3, ["zhucheng", "duoqi"]],
	diy_xizhenxihong: ["male", "shu", 4, ["fuchou", "jinyan"], ["name:习|珍-习|宏"]],
	diy_liuzan: ["male", "wu", 4, ["kangyin"]],
	diy_zaozhirenjun: ["male", "wei", 3, ["liangce", "jianbi", "diyjuntun"], ["name:枣|祗-任|峻"]],
	diy_yangyi: ["male", "shu", 3, ["choudu", "liduan"]],
	diy_tianyu: ["male", "wei", 4, ["chezhen", "youzhan"]],

	ns_zuoci: ["male", "qun", 3, ["nsxinsheng", "nsdunxing"]],
	ns_lvzhi: ["female", "qun", 3, ["nsnongquan", "nsdufu"], ["name:吕|雉"]],
	ns_wangyun: ["male", "qun", 4, ["liangji", "jugong", "chengmou"]],
	ns_nanhua: ["male", "qun", 3, ["nshuanxian", "nstaiping_nh", "nsshoudao"], ["name:庄|周"]],
	ns_nanhua_left: ["male", "qun", 2, [], ["unseen", "name:null|null"]],
	ns_nanhua_right: ["female", "qun", 2, [], ["unseen", "name:null|null"]],
	ns_huamulan: ["female", "qun", 3, ["nscongjun", "xiaoji", "gongji"], ["name:null|null"]],
	ns_huangzu: ["male", "qun", 4, ["nsjihui", "nsmouyun"]],
	ns_jinke: ["male", "qun", 4, ["nspinmin", "nsshishou"]],
	ns_yanliang: ["male", "qun", 4, ["nsduijue", "nsshuangxiong", "dualside"], ["dualside:ns_wenchou"]],
	ns_wenchou: ["male", "qun", 2, ["nsguanyong", "dualside"], ["unseen"]],

	ns_caocao: ["male", "wei", 4, ["nscaiyi", "nsgefa", "nshaoling"]],
	ns_caocaosp: ["male", "qun", 3, ["nsjianxiong", "nsxionglue"]],
	ns_zhugeliang: ["male", "shu", 3, ["nsguanxing", "kongcheng", "nsyunxing"], ["name:诸葛|亮"]],
	ns_wangyue: ["male", "qun", 4, ["nsjianshu", "nscangjian"]],
	ns_yuji: ["male", "qun", 3, ["nsyaowang", "nshuanhuo"]],
	ns_xinxianying: ["female", "wei", 3, ["nsdongcha", "nscaijian", "nsgongjian"]],
	ns_guanlu: ["male", "wei", 3, ["nsbugua", "nstuiyan", "nstianji"]],
	ns_simazhao: ["male", "wei", 3, ["nszhaoxin", "nsxiuxin", "nsshijun"], ["name:司马|昭"]],
	ns_sunjian: ["male", "wu", 4, ["nswulie", "nshunyou", "nscangxi"]],

	ns_duangui: ["male", "qun", 3, ["nscuanquan", "nsjianning", "nschangshi", "nsbaquan"]],
	ns_zhangbao: ["male", "qun", 3, ["nsfuhuo", "nswangfeng"]],
	ns_masu: ["male", "shu", 3, ["nstanbing", "nsxinzhan"]],
	ns_zhangxiu: ["male", "qun", 4, ["nsbaiming", "nsfuge"]],
	ns_lvmeng: ["male", "wu", 3, ["nsqinxue", "nsbaiyi"]],
	ns_shenpei: ["male", "qun", 3, ["nshunji", "shibei"]],

	ns_yujisp: ["male", "qun", 3, ["nsguhuo"]],
	ns_yangyi: ["male", "shu", 3, ["nsjuanli", "nsyuanchou"]],
	ns_liuzhang: ["male", "qun", 3, ["nsanruo", "nsxunshan", "nskaicheng"]],
	ns_xinnanhua: ["male", "qun", 3, ["ns_xiandao", "ns_xiuzheng", "ns_chuanshu"], ["name:庄|周"]],
	ns_caimao: ["male", "qun", 4, ["nsdingzhou"]],
	ns_luyusheng: ["female", "wu", 3, ["nshuaishuang", "nsfengli"]],
	ns_chengpu: ["male", "wu", 4, ["decadelihuo", "decadechunlao"]],
	ns_sundeng: ["male", "wu", 4, ["xinkuangbi"]],
	ns_duji: ["male", "wei", 3, ["xinfu_andong", "xinyingshi"]],
	old_majun: ["male", "wei", 3, ["xinfu_jingxie", "xinfu_qiaosi"]],
	ns_mengyou: ["male", "qun", 4, ["nsmanzhi"]],

	diy_zhujun: ["male", "qun", "4/4", ["xinyangjie", "diy_juxiang", "houfeng"], ["character:sp_zhujun"]],
	diy_liaohua: ["male", "shu", "4/4", ["redangxian", "diy_fuli"], ["character:xin_liaohua"]],
	diy_zhangfei: ["male", "shu", "4/4", ["diy_paoxiao", "diy_tishen"], ["character:re_zhangfei"]],

	junk_zhangrang: ["male", "qun", 3, ["junktaoluan"], ["sex:male_castrated"]],
	old_bulianshi: ["female", "wu", 3, ["anxu", "zhuiyi"]],
	ol_maliang: ["male", "shu", 3, ["zishu", "xinyingyuan"]],
	junk_liubei: ["male", "shu", 4, ["junkrende", "jijiang"], ["zhu"]],
	junk_huangyueying: ["female", "shu", 3, ["junkjizhi", "junkqicai"]],
	junk_lidian: ["male", "wei", 3, ["xunxun", "junkwangxi"]],
	junk_duanwei: ["male", "qun", 4, ["langmie"]],
	junk_xuyou: ["male", "qun", 3, ["nzry_chenglve", "junkshicai", "nzry_cunmu"]],
	junk_guanyu: ["male", "shu", 4, ["olsbfumeng", "olsbguidao"]],
	junk_liuyan: ["male", "qun", "4/6", ["olpianan", "olyinji", "olkuisi"]],
};

export default characters;
