const characterIntro = {
	huangzhong: "字汉升，今河南南阳人。汉末三国时期蜀汉名将。本为刘表部下中郎将，后归刘备，并助刘备攻益州刘璋，在定军山一战中阵斩曹操部下名将夏侯渊。备称汉中王后改封后将军，赐关内侯。",
	weiyan: "字文长，义阳人。三国时期蜀汉名将，诸葛亮死后，魏延因被陷害谋反而遭杨仪一党所杀。",
	xiahouyuan: "字妙才，沛国谯人。东汉末年曹操部下名将，夏侯惇之族弟，八虎骑之一。群雄征讨董卓时随曹操一同起兵，后征战四方，屡立功勋。在平定马超叛乱后负责西北防线的镇守。公元219年刘备攻打汉中，被刘备部将黄忠所杀。",
	caoren: "字子孝，沛国谯人，曹操的从弟。三国时期曹魏名将，官至大司马。谥曰忠侯。",
	xiaoqiao: "庐江皖县人也。父桥国老德尊于时。小乔国色流离，资貌绝伦。建安三年，周瑜协策攻皖，拔之。娶小乔为妻。后人谓英雄美女，天作之合。",
	zhoutai: "字幼平，九江下蔡人，三国时期吴国武将。早年与蒋钦随孙策左右，立过数次战功。孙策讨伐六县山贼时，周泰胆气绝伦，保卫孙权，勇战退敌，身受十二处伤。有诗云：三番救主出重围，忠勇如公世所稀。遍体疮痍犹痛饮，血痕残酒满征衣。",
	yuji: "自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。",
	zhangjiao: "乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。",
	dianwei: "己吾城村人。东汉末年曹魏猛将。擅使大双戟，为人壮猛任侠，曾为乡人刘氏报仇，杀人出市，人莫敢近。相貌魁梧，膂力过人。建安二年（197），张绣背叛曹操，典韦为保护曹操而独挡叛军，击杀多人，但最终因寡不敌众而战死。",
	xunyu: "荀彧，字文若，颍川颍阴（今河南许昌）人。东汉末年曹操帐下首席谋臣，杰出的战略家。自小被世人称作“王佐之才”。",
	pangtong: "庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。",
	sp_zhugeliang: "字孔明，号卧龙居士，琅琊阳都人。刘备曾“三顾茅庐”得见卧龙。卧龙以一篇《隆中对》分析天下形势，提出先取荆州，再取益州成鼎足之势的说法。《三国演义》中的诸葛亮善用“火攻”，曾用火攻战术赢得多场战役，如“火烧赤壁”、“火烧博望坡”、“火烧藤甲兵”等。",
	taishici: "太史慈，字子义，东莱黄县（今山东龙口东黄城集）人。东汉末年武将，守言应诺，恪遵信义，始终如一，弭息诽论。官至建昌都尉。弓马熟练，箭法精良。原为刘繇部下，后被孙策收降，于赤壁之战前病逝，死时才四十一岁。",
	pangde: "字令明，东汉末年雍州南安郡狟道县（今甘肃天水市武山县四门镇）人。曹操部下重要将领。官至立义将军，拜关门亭侯。谥曰壮侯。有一子庞会。",
	yanwen: "东汉末年河北袁绍部下武将，素有威名。颜良与文丑一起作为袁绍军队的勇将而闻名。建安四年（199），袁绍以颜良、文丑为将，率精卒十万，准备攻许都；次年，兵进黎阳，遣颜良攻白马。终均亡于关羽刀下。",
	yuanshao: "字本初，汉族，汝南汝阳人，出身名门望族，自曾祖父起四代有五人位居三公，自己也居三公之上，其家族也因此有“四世三公”之称。曾于初平元年被推举为反董卓联合军的盟主，联军瓦解后，在汉末群雄割据的过程中，袁绍先占据冀州，又先后夺青、并二州，并于建安四年击败了割据幽州的军阀公孙瓒，势力达到顶点；但在建安五年的官渡之战中败于曹操。在平定冀州叛乱之后，于建安七年病死。",
	xuhuang: "字公明，河东杨人。三国时期曹魏名将，本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。",
	caopi: "字子桓，三国时期著名的政治家、文学家，曹魏的开国皇帝，公元220－226年在位。沛国谯人，魏武帝曹操与武宣卞皇后的长子。去世后庙号高祖，谥为文皇帝，葬于首阳陵。",
	sunjian: "字文台，汉族，吴郡富春人。东汉末期地方军阀，著名将领。史书说他“容貌不凡，性阔达，好奇节”，是大军事家孙武的后裔。汉末群雄之一，三国中吴国的奠基人。孙权建国后，追谥孙坚为武烈皇帝。",
	dongzhuo: "字仲颖，陇西临洮人。东汉末年少帝、献帝时权臣，西凉军阀。官至太师、郿侯。其为人残忍嗜杀，倒行逆施，招致群雄联合讨伐，但联合军在董卓迁都长安不久后瓦解。后被其亲信吕布所杀。",
	zhurong: "据传为火神祝融氏后裔，南蛮王孟获之妻。武艺超群，善使飞刀，是《三国演义》中写到的唯一真正上过战场的女性。曾与孟获一起抵抗蜀军，在诸葛亮七擒七纵孟获之后，随孟获投降蜀汉。",
	menghuo: "中国三国时期南中少数族首领。系东汉末益州建宁郡( 今云南晋宁东 )大姓，身材肥硕。生卒年不详。官至御史中丞。曾被诸葛亮七擒七纵，传为佳话。",
	jiaxu: "字文和，武威姑臧人。三国时期魏国著名谋士。曾先后担任三国军阀李傕、张绣、曹操的谋士。官至魏国太尉，谥曰肃侯。",
	lusu: "字子敬，汉族，临淮东城人，中国东汉末年东吴的著名军事统帅。他曾为孙权提出鼎足江东的战略规划，因此得到孙权的赏识，于周瑜死后代替周瑜领兵，守陆口。曾单刀赴会关羽于荆州。",
	zhanghe: "字儁乂，河间鄚人。三国时期魏国名将。官渡之战时，本为袁绍部将的张郃投降了曹操，并在曹操帐下多立功勋，于曹魏建立后加封为征西车骑将军。诸葛亮六出祁山之间，张郃多次抵御蜀军的进攻，于公元231年在木门道被诸葛亮设伏射死。后谥曰壮侯。为曹魏“五子良将”之一。",
	dengai: "字士载，义阳棘阳人。三国时期魏国杰出的军事家、将领。公元263年他与钟会分别率军攻打蜀汉，最后他率先进入成都，使得蜀汉灭亡。后因遭到钟会的污蔑和陷害，被司马昭猜忌而被收押，最后与其子邓忠一起被卫瓘派遣的武将田续所杀害。",
	jiangwei: "字伯约，天水冀人。三国时期蜀汉著名将领、军事统帅。原为曹魏天水郡的中郎将，后降蜀汉，官至凉州刺史、大将军。诸葛亮去世后继承诸葛亮的遗志，继续率领蜀汉军队北伐曹魏，与曹魏名将陈泰、郭淮、邓艾等多次交手。",
	liushan: "蜀汉后主，字公嗣。小名阿斗。刘备之子，母亲是昭烈皇后甘氏。三国时期蜀汉第二位皇帝，公元223－263年在位。公元263年蜀汉被曹魏所灭，刘禅投降曹魏，被封为安乐公。",
	sunce: "字伯符，吴郡富春人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期吴国的奠基者。三国演义中绰号“小霸王”，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。",
	zhangzhang: "张昭，字子布，彭城人，三国时期吴国重臣，善丹青。拜辅吴将军，班亚三司，改封娄侯。年八十一卒，谥曰文侯。张纮，字子纲，广陵人。东吴谋士，和张昭一起合称“二张”。孙策平定江东时亲自登门邀请，张纮遂出仕为官。张纮后来建议孙权迁都秣陵，孙权正在准备时张纮病逝，其年六十岁。孙权为之流涕。",
	zuoci: "左慈，字元放，东汉末方士，汉族，庐江（今安徽庐江西南）人。在道教历史上，东汉时期的丹鼎派道术是从他一脉相传。",
	caiwenji: "名琰，原字昭姬，晋时避司马昭讳，改字文姬，东汉末年陈留圉（今河南开封杞县）人，东汉大文学家蔡邕的女儿，是中国历史上著名的才女和文学家，精于天文数理，既博学能文，又善诗赋，兼长辩才与音律。代表作有《胡笳十八拍》、《悲愤诗》等 。",

	yanyan: "严颜，东汉末年武将，初为刘璋部下，担任巴郡太守。建安十九年，刘备进攻江州，严颜战败被俘，张飞对严颜说：“大军至，何以不降而敢拒战？”，严颜回答说：“卿等无状，侵夺我州，我州但有断头将军，无降将军也！”，张飞生气，命左右将严颜牵去砍头，严颜表情不变地说：“砍头便砍头，何为怒邪！”张飞敬佩严颜的勇气，遂释放严颜并以严颜为宾客，之后的事迹不在正史中出现。",
	wangping: "王平，字子均，巴西宕渠（今四川省渠县东北）人，籍贯益州。三国时蜀汉后期大将。原属曹操，曹操与刘备争汉中，得以投降刘备。诸葛亮第一次北伐时与马谡一同守街亭，之后深受诸葛亮的器重，率领蜀汉的王牌军队无当飞军，多次随诸葛亮北伐。诸葛亮死后，拜前监军、镇北大将军，镇守汉中，曹爽率领十万大军攻汉中时，被王平所击退，累封安汉侯。延熙十一年，王平去世，其子王训继承了爵位。",
	luji: "陆绩（公元188年－公元219年），字公纪，吴郡吴县（今苏州）人，汉末庐江太守陆康之子。陆绩成年后，博学多识，通晓天文、历算，星历算数无不涉览。孙权征其为奏曹掾，常以直道见惮。后出为郁林太守，加偏将军。在军中不废著作，曾作《浑天图》，注《易经》，撰写《太玄经注》。",
	sunliang: "孙亮（243－260年），字子明，吴郡富春（今浙江杭州富阳区）人。三国时期吴国的第二位皇帝，公元252－258年在位。吴大帝孙权第七子，母潘皇后。史称吴少帝、吴废帝、会稽王。建兴元年（252年），十岁登基为帝，太平二年（257年），十五岁亲政，但一年后（258年）就被权臣孙綝废为会稽王。永安三年（260年），孙亮再被贬为候官侯，在前往封地途中自杀（一说被毒杀），终年18岁。西晋太康年间，原先任职吴国的官员戴显将孙亮的遗骨葬在赖乡。",
	xuyou: "许攸（？－204年），字子远，南阳（治今河南南阳）人。本为袁绍帐下谋士，官渡之战时其家人因犯法而被收捕，许攸因此背袁投曹，并为曹操设下偷袭袁绍军屯粮之所乌巢的计策，袁绍因此而大败于官渡。后许攸随曹操平定冀州，因自恃其功而屡屡口出狂言，终因触怒曹操而被杀。",
	yl_luzhi: "卢植（139年—192年），字子干。涿郡涿县（今河北涿州）人。东汉末年经学家、将领。卢植性格刚毅，师从太尉陈球、大儒马融等，为郑玄、管宁、华歆的同门师兄。曾先后担任九江、庐江太守，平定蛮族叛乱。后与马日磾、蔡邕等一起在东观校勘儒学经典书籍，并参与续写《汉记》。黄巾起义时为北中郎将，率军与张角交战，后被诬陷下狱，皇甫嵩平定黄巾后力救卢植，于是复任为尚书。后因上谏激怒董卓被免官，隐居在上谷军都山，被袁绍请为军师。初平三年（192年）去世。著有《尚书章句》、《三礼解诂》等，今皆失佚。唐代时配享孔子，北宋时被追封为良乡伯。白马将军公孙瓒以及后来的蜀汉昭烈帝刘备皆为卢植门下弟子。范阳卢氏后来也成为著名的家族。",
	kuailiangkuaiyue: "蒯良，字子柔，襄阳中庐人。归刘表。蒯良为刘表定下安抚荆楚的政治方向，佐其成业，被刘表誉为“雍季之论”。之后，蒯良就被刘表擢升为主簿（bù）。其后蒯良的生平，就不得而知了，《三国志》亦没有记载其卒年。与蒯越、以及同样活跃于襄阳的蒯祺（诸葛亮姐夫）或为同族兄弟。蒯越（？－214年），字异度，襄阳中庐（今湖北襄阳西南）人。东汉末期人物，演义中为蒯良之弟。原本是荆州牧刘表的部下，曾经在刘表初上任时帮助刘表铲除荆州一带的宗贼（以宗族、乡里关系组成的武装集团）。刘表病逝后与刘琮一同投降曹操，后来官至光禄勋。",

	guanqiujian: "毌丘俭，字仲恭，河东闻喜（今山西闻喜县）人。三国时期曹魏后期的重要将领。继承父毌丘兴爵位高阳乡侯，任平原侯文学。魏明帝即位后，上疏劝魏明帝停止加建皇宫的工程，升为荆州刺史。景初二年（238年）从司马懿攻灭公孙渊；正始五年（244年）至正始六年（245年）两次率兵征讨高句丽，攻破丸都，几亡其国，刻石纪功而还；253年击退吴国诸葛恪的大举进犯，战功累累。司马师废帝，毌丘俭感昔日魏明帝之恩，为曹魏政权做拼死一搏，于正元二年（255年）发动兵变，即后人所谓“淮南三叛”（王凌、毌丘俭、诸葛诞）之一，惜准备不足，兵败身亡。",
	haozhao: "郝昭（生卒年不详），字伯道，太原人，中国东汉末年至曹魏初年著名将领。郝昭少年从军，屡立战功，逐渐晋升为杂号将军，后受曹真的推荐镇守陈仓（在小说三国演义中是司马懿推荐），防御蜀汉。太和二年（228年），诸葛亮率军北伐，为郝昭所阻，劝降不成，昼夜相攻二十余日后被迫退军。魏明帝因此封其为关内侯。不久因染疾而病死。",
	zhugezhan: "诸葛瞻，字思远，琅邪阳都（今山东沂南县）人。三国时期蜀汉大臣，蜀汉丞相诸葛亮之子。邓艾伐蜀时，他与长子诸葛尚及蜀将张遵、李球、黄崇等人防御绵竹（今四川德阳），因不听黄崇速占险要的建议而坐失良机，后来出城与邓艾决战，在交战时阵亡，绵竹也随后失守。",
	zhoufei: "周妃（210年？—？），一说本名周彻。周瑜独女，生母无载，疑为汉末美女小乔，因嫁孙登为太子妃，故称周妃。周瑜英年早逝，其遗孤都得到孙权厚遇，除却她本人在黄武四年（225年）嫁予太子外，兄长周循亦娶孙权长女孙鲁班为妻。",
	lukang: "陆抗，字幼节，吴郡吴县（今江苏苏州）人。三国时期吴国名将，丞相陆逊次子。陆抗袭父爵为江陵侯，为建武校尉，领其父众五千人。后迁立节中郎将、镇军将军等。孙皓为帝，任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事，驻乐乡（今湖北江陵西南）。凤凰元年（272年），击退晋将羊祜进攻，并攻杀叛将西陵督步阐。后拜大司马、荆州牧，卒于官，终年49岁。与陆逊皆是吴国的中流砥柱，并称“逊抗 ”，被誉为吴国最后的名将。",
	zhangxiu: "张绣，武威祖厉（今甘肃靖远）人。骠骑将军张济的从子。东汉末年割据宛城的军阀，汉末群雄之一。初随张济征伐，张济死后与刘表联合。后降曹操，因曹操调戏其嫂而突袭曹操，复与刘表连和。官渡之战前夕，听从贾诩的建议再次投降曹操，参加官渡之战，官至破羌将军，封宣威侯。在北征乌桓（207年）途中去世（一说为曹丕逼死），谥定侯。",
	chendao: "陈到，字叔至，生卒年不详，豫州汝南（今河南驻马店平舆县）人。三国时期蜀汉将领，刘备帐下白毦兵统领，名位常亚于赵云，以忠勇著称。蜀汉建兴年间，任征西将军、永安都督，封亭侯。在任期间去世。",
};

export default characterIntro;
