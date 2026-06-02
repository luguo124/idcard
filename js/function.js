function ock(){
	var rNo = document.getElementById("rNo");
	var selp = document.getElementById("p");
	var selc = document.getElementById("c");
	var selr = document.getElementById("r").value;
	var sely = document.getElementById("y").value;
	var selm = padLeft(document.getElementById("m").value,2);
	var seld = padLeft(document.getElementById("d").value,2);
	var selg = GetRadioValue("g");
	var seln = Number(document.getElementById("n").value);
	var operator = document.getElementById("operator").value;
	var s='110000199001015930';
	var d8;
	d8= sely + selm + seld;
	
	// 获取地区文本
	var areaText = selp.options[selp.selectedIndex].text + selc.options[selc.selectedIndex].text + document.getElementById("r").options[document.getElementById("r").selectedIndex].text;
	// 获取性别文本
	var genderText = selg == 1 ? "男" : "女";
	// 获取运营商文本
	var operatorText = document.getElementById("operator").options[document.getElementById("operator").selectedIndex].text;
	// 日期文本
	var dateText = sely + "年" + selm + "月" + seld + "日";
	// 计算年龄
	var age = calculateAge(sely, selm, seld);
	
	rNo.innerHTML=Get_CarNo(selr,d8,selg,seln,operator,areaText,genderText,dateText,operatorText,age);
}

// 计算年龄
function calculateAge(year, month, day) {
	var today = new Date();
	var birthDate = new Date(year, month - 1, day);
	var age = today.getFullYear() - birthDate.getFullYear();
	var monthDiff = today.getMonth() - birthDate.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}


//获取num个身份证
function Get_CarNo(d6,b8,sex,num,operator,areaText,genderText,dateText,operatorText,age){
	var i = 0;
	var q17;
	var reCarNo = '<div class="space-y-4">';
	while (i<num){
		sjs = getRandom(100,999);
		if (sex==1){
			if ((sjs%2)!==0){
				q17 = d6 + b8 + sjs;
				i++;
				var phone = generatePhone(operator);
				var address = generateAddress(areaText);
				var name = generateName(sex);
				var idCard = to18(q17);
				reCarNo = reCarNo + '<div class="bg-white rounded-xl border border-outline-variant/30 p-5 shadow-sm">'
					+ '<div class="flex justify-between items-center py-2 border-b border-surface-variant mb-3"><div class="flex items-center gap-2"><span class="text-on-surface-variant font-label-md">姓名</span><span class="px-2 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center min-w-[20px]">' + i + '</span></div><span class="font-bold text-on-surface">' + name + '</span></div>'
					+ '<div class="flex justify-between items-center py-2"><span class="text-on-surface-variant font-label-md">家庭住址</span><span class="text-on-surface text-right max-w-[200px]">' + address + '</span></div>'
					+ '<div class="flex justify-between items-center py-2"><span class="text-on-surface-variant font-label-md">出生日期</span><span class="font-bold text-on-surface">' + dateText + '</span></div>'
					+ '<div class="flex justify-between items-center py-2"><span class="text-on-surface-variant font-label-md">性别 / 年龄</span><span class="text-on-surface">' + genderText + ' / ' + age + '岁</span></div>'
					+ '<div class="group flex justify-between items-center py-3 bg-surface-container-lowest px-4 rounded-lg border border-transparent hover:border-primary/30 transition-all mt-4"><div class="flex flex-col"><span class="text-on-surface-variant text-[12px] font-label-md mb-1">身份证号</span><span class="font-mono-data text-mono-data text-primary tracking-wider" id="idcard_' + i + '">' + idCard + '</span></div><button class="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all active:scale-90" onclick="copyText(\'idcard_' + i + '\')"><span class="material-symbols-outlined">content_copy</span></button></div>'
					+ '<div class="group flex justify-between items-center py-3 bg-surface-container-lowest px-4 rounded-lg border border-transparent hover:border-primary/30 transition-all"><div class="flex flex-col"><span class="text-on-surface-variant text-[12px] font-label-md mb-1">手机号码</span><span class="font-mono-data text-mono-data text-primary tracking-wider" id="phone_' + i + '">' + phone + '</span></div><button class="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all active:scale-90" onclick="copyText(\'phone_' + i + '\')"><span class="material-symbols-outlined">content_copy</span></button></div>'
					+ '</div>';
			}
		} else {
			if ((sjs%2)==0){
				q17 = d6 + b8 + sjs;
				i++;
				var phone = generatePhone(operator);
				var address = generateAddress(areaText);
				var name = generateName(sex);
				var idCard = to18(q17);
				reCarNo = reCarNo + '<div class="bg-white rounded-xl border border-outline-variant/30 p-5 shadow-sm">'
					+ '<div class="flex justify-between items-center py-2 border-b border-surface-variant mb-3"><div class="flex items-center gap-2"><span class="text-on-surface-variant font-label-md">姓名</span><span class="px-2 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center min-w-[20px]">' + i + '</span></div><span class="font-bold text-on-surface">' + name + '</span></div>'
					+ '<div class="flex justify-between items-center py-2"><span class="text-on-surface-variant font-label-md">家庭住址</span><span class="text-on-surface text-right max-w-[200px]">' + address + '</span></div>'
					+ '<div class="flex justify-between items-center py-2"><span class="text-on-surface-variant font-label-md">出生日期</span><span class="font-bold text-on-surface">' + dateText + '</span></div>'
					+ '<div class="flex justify-between items-center py-2"><span class="text-on-surface-variant font-label-md">性别 / 年龄</span><span class="text-on-surface">' + genderText + ' / ' + age + '岁</span></div>'
					+ '<div class="group flex justify-between items-center py-3 bg-surface-container-lowest px-4 rounded-lg border border-transparent hover:border-primary/30 transition-all mt-4"><div class="flex flex-col"><span class="text-on-surface-variant text-[12px] font-label-md mb-1">身份证号</span><span class="font-mono-data text-mono-data text-primary tracking-wider" id="idcard_' + i + '">' + idCard + '</span></div><button class="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all active:scale-90" onclick="copyText(\'idcard_' + i + '\')"><span class="material-symbols-outlined">content_copy</span></button></div>'
					+ '<div class="group flex justify-between items-center py-3 bg-surface-container-lowest px-4 rounded-lg border border-transparent hover:border-primary/30 transition-all"><div class="flex flex-col"><span class="text-on-surface-variant text-[12px] font-label-md mb-1">手机号码</span><span class="font-mono-data text-mono-data text-primary tracking-wider" id="phone_' + i + '">' + phone + '</span></div><button class="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all active:scale-90" onclick="copyText(\'phone_' + i + '\')"><span class="material-symbols-outlined">content_copy</span></button></div>'
					+ '</div>';
			}
		}
	}
	reCarNo = reCarNo + '</div>';
	return reCarNo;
}

//生成手机号
function generatePhone(operator) {
	var prefixes = {
		mobile: ['134', '135', '136', '137', '138', '139', '147', '148', '150', '151', '152', '157', '158', '159', '165', '172', '178', '182', '183', '184', '187', '188', '195', '197', '198'],
		unicom: ['130', '131', '132', '145', '146', '155', '156', '166', '167', '171', '175', '176', '185', '186', '196'],
		telecom: ['133', '149', '153', '173', '174', '177', '180', '181', '189', '190', '191', '193', '199']
	};
	var prefixList = prefixes[operator];
	var prefix = prefixList[getRandom(0, prefixList.length - 1)];
	var suffix = '';
	for (var i = 0; i < 8; i++) {
		suffix += getRandom(0, 9);
	}
	return prefix + suffix;
}

//生成详细地址
function generateAddress(areaText) {
	// 各地区特色道路名称
	var areaRoads = {
		'北京': ['长安街', '王府井大街', '西单北大街', '东单北大街', '中关村大街', '三里河路', '学院路', '西直门大街', '朝阳门大街', '建国门大街', '复兴门大街', '和平门大街', '广安门大街', '右安门大街', '左安门大街', '永定门大街', '德胜门大街', '安定门大街', '东直门大街', '朝阳路'],
		'上海': ['南京路', '淮海路', '四川路', '西藏路', '河南路', '山东路', '福建路', '浙江路', '广东路', '广西路', '云南路', '贵州路', '九江路', '汉口路', '福州路', '雁荡路', '长乐路', '富民路', '华山路', '衡山路'],
		'广东': ['中山路', '解放路', '东风路', '环市路', '天河路', '黄埔大道', '广州大道', '芳村大道', '花地大道', '龙溪大道', '海八路', '南海大道', '佛山大道', '季华路', '魁奇路', '文昌路', '文明路', '德政路', '仓边路', '越华路'],
		'浙江': ['解放路', '延安路', '武林路', '庆春路', '凤起路', '体育场路', '天目山路', '文三路', '文二路', '文一路', '莫干山路', '湖墅路', '教工路', '学院路', '古墩路', '丰潭路', '紫荆花路', '蒋墩路', '紫金港路', '花蒋路'],
		'江苏': ['中山路', '解放路', '人民路', '中央路', '汉中路', '广州路', '上海路', '云南路', '北京西路', '北京东路', '长江路', '中山东路', '中山南路', '中山北路', '江东北路', '江东南路', '河西大街', '江东中路', '梦都大街', '奥体大街'],
		'四川': ['人民路', '解放路', '春熙路', '总府路', '东大街', '西大街', '南大街', '北大街', '红星路', '蜀都大道', '一环路', '二环路', '三环路', '天府大道', '益州大道', '剑南大道', '剑南大道', '科华路', '人民南路', '人民中路'],
		'山东': ['经十路', '经七路', '经四路', '经一路', '纬二路', '纬六路', '纬十二路', '历山路', '山大路', '解放路', '和平路', '文化东路', '文化西路', '英雄山路', '建设路', '工业南路', '工业北路', '北园大街', '二环东路', '二环西路'],
		'河南': ['人民路', '解放路', '花园路', '文化路', '黄河路', '金水路', '建设路', '中原路', '大学路', '嵩山路', '航海路', '陇海路', '紫荆山路', '东风路', '南阳路', '农业路', '三全路', '开元路', '英才街', '大河路'],
		'湖北': ['中山路', '解放路', '中南路', '中北路', '武珞路', '珞喻路', '雄楚大道', '光谷大道', '民族大道', '关山大道', '和平大道', '友谊大道', '中山路', '张之洞路', '复兴路', '解放路', '临江大道', '友谊大道', '和平大道', '徐东大街'],
		'湖南': ['五一大道', '芙蓉路', '韶山路', '八一路', '中山路', '解放路', '人民路', '车站路', '东风路', '万家丽路', '湘府路', '木莲路', '香樟路', '劳动路', '赤岭路', '书院路', '湘江路', '潇湘路', '橘子洲大桥', '银盆岭大桥'],
		'福建': ['五四路', '五一路', '六一路', '八一七路', '华林路', '湖东路', '鼓屏路', '东街', '南街', '津泰路', '杨桥路', '工业路', '白马路', '乌山路', '古田路', '福马路', '长乐路', '连江路', '国货路', '鳌峰路'],
		'陕西': ['长安路', '朱雀路', '文艺路', '雁塔路', '太乙路', '太白路', '高新路', '唐延路', '沣惠路', '昆明路', '汉城路', '大庆路', '玉祥门', '西门', '南门', '东门', '北门', '解放路', '东大街', '西大街'],
		'重庆': ['解放碑', '较场口', '两路口', '上清寺', '观音桥', '红旗河沟', '沙坪坝', '小龙坎', '天星桥', '石桥铺', '杨家坪', '大坪', '石油路', '歇台子', '石桥铺', '二郎', '陈家坪', '石桥铺', '巴山', '新桥'],
		'天津': ['南京路', '解放南路', '解放北路', '大沽路', '曲阜道', '泰安道', '浙江路', '广东路', '绍兴道', '合肥道', '芜湖道', '湖北路', '香港路', '澳门路', '上海道', '营口道', '承德道', '赤峰道', '哈尔滨道', '长春道'],
		'河北': ['中山路', '解放路', '人民路', '裕华路', '槐安路', '和平路', '建设路', '翟营大街', '建华大街', '体育大街', '谈固大街', '东二环', '西二环', '北二环', '南二环', '中华大街', '胜利大街', '平安大街', '建设大街', '青园街'],
		'山西': ['迎泽大街', '解放路', '建设路', '长风大街', '南内环街', '北中环街', '西中环街', '东中环街', '府东街', '府西街', '五一路', '并州路', '坞城路', '太榆路', '晋阳街', '龙城大街', '滨河东路', '滨河西路', '和平路', '千峰路'],
		'辽宁': ['中山路', '人民路', '解放路', '青年大街', '北京街', '南京街', '和平大街', '建设大路', '兴华街', '保工街', '卫工街', '启工街', '重工街', '肇工街', '沈辽路', '浑南大道', '长青街', '文化东路', '文化西路', '黄河大街'],
		'吉林': ['人民大街', '解放大路', '自由大路', '吉林大路', '亚泰大街', '临河街', '会展大街', '仙台大街', '世纪大街', '洋浦大街', '东环城路', '西环城路', '北环城路', '南环城路', '硅谷大街', '蔚山路', '光谷大街', '飞跃路', '创新路', '越达路'],
		'黑龙江': ['中山路', '红军街', '和兴路', '学府路', '哈平路', '红旗大街', '南直路', '公滨路', '长江路', '珠江路', '华山路', '赣水路', '衡山路', '香山路', '嵩山路', '泰山路', '南直路', '东直路', '北新街', '大新街'],
		'安徽': ['长江路', '芜湖路', '马鞍山路', '徽州大道', '桐城路', '金寨路', '宿松路', '宿松路', '潜山路', '东至路', '石台路', '合作化路', '肥西路', '绩溪路', '黄山路', '太湖路', '望江路', '东流路', '马鞍山路', '当涂路'],
		'江西': ['八一大道', '井冈山大道', '洪城路', '迎宾大道', '京九路', '庐山南大道', '丰和大道', '红谷中大道', '赣江中大道', '赣江南大道', '赣江北大道', '红谷大道', '凤凰大道', '碟子湖大道', '丽景路', '会展路', '世贸路', '春晖路', '绿茵路', '芳华路'],
		'广西': ['民族大道', '朝阳路', '七一路', '五一路', '星光大道', '白沙大道', '葫芦鼎大桥', '竹溪大道', '青山路', '双拥路', '滨湖路', '长湖路', '东葛路', '思贤路', '古城路', '星湖路', '教育路', '桃源路', '植物路', '新民路'],
		'云南': ['北京路', '人民路', '东风路', '拓东路', '金碧路', '西昌路', '滇池路', '广福路', '日新路', '春城路', '关上中路', '民航路', '白龙路', '白塔路', '尚义街', '正义路', '五一路', '西昌路', '西坝路', '西园路'],
		'贵州': ['中山路', '解放路', '人民路', '中华路', '北京路', '延安路', '瑞金路', '枣山路', '浣纱路', '威清路', '头桥路', '二桥路', '三桥路', '改茶路', '花果园大街', '遵义路', '解放路', '市南路', '嘉润路', '富源路'],
		'甘肃': ['中山路', '解放路', '人民路', '张掖路', '庆阳路', '东岗路', '皋兰路', '酒泉路', '金昌路', '平凉路', '定西路', '天水路', '南昌路', '静宁路', '广场南路', '皋兰路', '和政路', '火车站东路', '火车站西路', '和平路'],
		'内蒙古': ['中山路', '新华大街', '呼伦贝尔路', '哲里木路', '兴安路', '昭乌达路', '锡林郭勒路', '乌兰察布路', '鄂尔多斯路', '阿拉善路', '巴彦淖尔路', '乌海路', '腾飞路', '敕勒川大街', '成吉思汗大街', '海拉尔路', '爱民街', '康复街', '新春路', '展览馆东路'],
		'新疆': ['中山路', '解放路', '人民路', '友好路', '北京路', '长江路', '扬子江路', '西北路', '阿勒泰路', '喀什西路', '太原路', '天津路', '长春路', '四平路', '安宁渠路', '米东大道', '卡子湾西街', '喀什东路', '河南路', '苏州路'],
		'海南': ['海秀路', '龙昆路', '丘海大道', '滨海大道', '南海大道', '椰海大道', '凤翔路', '新大洲大道', '滨江路', '海甸五西路', '海甸三东路', '海甸二东路', '和平大道', '人民大道', '白龙路', '青年路', '美苑路', '蓝天路', '西沙路', '南宝路'],
		'宁夏': ['解放街', '中山街', '新华街', '湖滨街', '文化街', '北京街', '上海路', '贺兰山路', '宝湖路', '长城路', '六盘山路', '北京路', '黄河路', '长城路', '凤凰街', '清和街', '丽景街', '友爱街', '永安巷', '利民街'],
		'青海': ['五四大街', '五四西路', '五四东路', '七一路', '长江路', '胜利路', '黄河路', '同仁路', '海晏路', '新宁路', '盐湖路', '冷湖路', '虎台路', '西关大街', '昆仑大道', '海湖路', '通海路', '文苑路', '文博路', '文成路'],
		'西藏': ['北京路', '江苏路', '林廓北路', '林廓东路', '林廓南路', '金珠东路', '金珠西路', '江苏东路', '当热西路', '当热东路', '娘热路', '色拉路', '夺底路', '慈松塘路', '扎基路', '曲米路', '巴尔库路', '民族北路', '民族南路', '罗布林卡路']
	};
	
	// 通用道路名称
	var defaultRoads = ['中山路', '解放路', '人民路', '建设路', '和平路', '胜利路', '幸福路', '朝阳路', '东风路', '红旗路', '文化路', '青年路', '光明路', '平安路', '吉祥路', '如意路', '昌盛路', '兴隆路', '发达路', '兴旺路'];
	
	// 根据地区选择合适的道路
	var roads = defaultRoads;
	for (var key in areaRoads) {
		if (areaText.indexOf(key) !== -1) {
			roads = areaRoads[key];
			break;
		}
	}
	
	var districts = ['花园小区', '阳光小区', '幸福家园', '锦绣园', '丽景苑', '盛世华庭', '东方明珠', '碧水蓝天', '金色家园', '都市花园', '彩虹城', '星光苑', '云顶花园', '山水名居', '翠湖苑', '江湾城', '湖光山色', '龙城花园', '凤凰苑', '麒麟公馆'];
	var buildings = ['1号楼', '2号楼', '3号楼', '5号楼', '6号楼', '8号楼', '9号楼', '10号楼', '12号楼', '15号楼', '16号楼', '18号楼', '20号楼', '22号楼', '25号楼'];
	var units = ['1单元', '2单元', '3单元', '4单元', '5单元'];
	var floors = ['101室', '202室', '303室', '401室', '502室', '603室', '701室', '802室', '903室', '1001室', '1102室', '1203室', '1501室', '1802室', '2003室', '2202室', '2501室'];
	
	var road = roads[getRandom(0, roads.length - 1)];
	var roadNum = getRandom(1, 999) + '号';
	var district = Math.random() > 0.5 ? districts[getRandom(0, districts.length - 1)] : '';
	var building = district ? buildings[getRandom(0, buildings.length - 1)] : '';
	var unit = building ? units[getRandom(0, units.length - 1)] : '';
	var floor = floors[getRandom(0, floors.length - 1)];
	
	var address = road + roadNum;
	if (district) address += ' ' + district;
	if (building) address += ' ' + building;
	if (unit) address += ' ' + unit;
	address += ' ' + floor;
	
	return address;
}

//生成姓名
function generateName(sex) {
	// 常见姓氏
	var surnames = ['王', '李', '张', '刘', '陈', '杨', '黄', '赵', '周', '吴', '徐', '孙', '马', '朱', '胡', '郭', '何', '高', '林', '罗', '郑', '梁', '谢', '宋', '唐', '许', '邓', '冯', '韩', '曹', '曾', '彭', '萧', '蔡', '潘', '田', '董', '袁', '于', '余', '叶', '蒋', '杜', '苏', '魏', '程', '吕', '丁', '沈', '任', '姚', '卢', '傅', '钟', '姜', '崔', '谭', '廖', '范', '汪', '陆', '金', '石', '戴', '贾', '韦', '夏', '邱', '方', '侯', '邹', '熊', '孟', '秦', '白', '江', '阎', '薛', '尹', '段', '雷', '黎', '史', '龙', '贺', '顾', '毛', '郝', '龚', '邵', '万', '钱', '严', '覃', '武', '戚', '戴', '莫', '孔', '汤', '向', '常', '温', '康', '施', '文', '牛', '樊', '葛', '邢', '安', '齐', '易', '乔', '伍', '庞', '颜', '倪', '庄', '聂', '章', '鲁', '岳', '翟', '殷', '詹', '申', '欧', '耿', '关', '兰', '焦', '俞', '左', '柳', '甘', '祝', '包', '宁', '尚', '符', '舒', '阮', '柯', '纪', '梅', '童', '凌', '毕', '单', '季', '裴', '霍', '涂', '成', '苗', '谷', '盛', '曲', '翁', '冉', '骆', '蓝', '路', '游', '辛', '靳', '欧', '管', '柴', '蒙', '鲍', '华', '喻', '祁', '蒲', '房', '滕', '屈', '饶', '解', '牟', '艾', '尤', '阳', '时', '穆', '农', '司', '卓', '古', '吉', '缪', '简', '车', '项', '连', '芦', '麦', '褚', '娄', '窦', '戚', '岑', '景', '党', '宫', '费', '卜', '冷', '晏', '席', '卫', '米', '柏', '宗', '瞿', '桂', '全', '佟', '应', '臧', '闵', '苟', '邬', '边', '卞', '姬', '师', '和', '仇', '栾', '隋', '商', '刁', '沙', '荣', '巫', '寇', '桑', '郎', '甄', '丛', '仲', '虞', '敖', '巩', '明', '佘', '池', '查', '麻', '苑', '迟', '邝', '官', '封', '谈', '匡', '鞠', '惠', '荆', '乐', '冀', '郁', '胥', '南', '班', '储', '原', '栗', '燕', '楚', '郜', '郗', '郏', '秋', '郗', '隆', '宇文', '皇甫', '南宫', '司马', '欧阳', '诸葛', '尉迟', '公孙', '澹台', '公冶', '宗政', '濮阳', '淳于', '单于', '太叔', '申屠', '仲孙', '轩辕', '令狐', '钟离', '宇文', '长孙', '鲜于', '闾丘', '司徒', '司空', '亓官', '司寇', '仉督', '子车', '颛孙', '端木', '巫马', '公西', '漆雕', '乐正', '壤驷', '公良', '拓跋', '夹谷', '宰父', '谷梁', '晋', '楚', '闫', '法', '汝', '鄢', '涂', '钦', '段干', '百里', '东郭', '南门', '呼延', '归海', '羊舌', '微生', '岳', '帅', '缑', '亢', '况', '后', '有', '琴', '梁丘', '左丘', '东门', '西门', '商', '牟', '佘', '佴', '伯', '赏', '南宫', '墨', '哈', '谯', '笪', '年', '爱', '阳', '佟'];
	
	// 男性常用名
	var maleNames = ['伟', '强', '磊', '洋', '勇', '军', '杰', '涛', '明', '超', '秀英', '华', '平', '刚', '桂英', '文', '辉', '建', '国', '海', '洋', '波', '宁', '鹏', '杰', '涛', '明', '超', '秀英', '华', '平', '刚', '桂英', '文', '辉', '建', '国', '海', '洋', '波', '宁', '鹏', '浩', '宇', '轩', '泽', '昊', '博', '睿', '振', '辰', '嘉', '俊', '凯', '健', '彦', '成', '康', '星', '天', '达', '安', '岩', '中', '茂', '进', '林', '有', '坚', '和', '彪', '博', '诚', '先', '敬', '震', '振', '壮', '会', '思', '群', '豪', '心', '邦', '承', '乐', '绍', '功', '松', '善', '厚', '庆', '磊', '民', '友', '裕', '河', '哲', '江', '超', '浩', '亮', '政', '谦', '亨', '奇', '固', '之', '轮', '翰', '朗', '伯', '宏', '言', '若', '鸣', '朋', '斌', '梁', '栋', '维', '启', '克', '伦', '翔', '旭', '鹏', '泽', '晨', '辰', '士', '以', '建', '家', '致', '树', '炎', '德', '行', '时', '泰', '盛', '雄', '琛', '钧', '冠', '策', '腾', '楠', '榕', '风', '航', '弘', '玄', '文', '民', '友', '裕', '河', '哲', '江', '超', '浩', '亮', '政', '谦', '亨', '奇', '固', '之', '轮', '翰', '朗', '伯', '宏', '言', '若', '鸣', '朋', '斌', '梁', '栋', '维', '启', '克', '伦', '翔', '旭', '鹏', '泽', '晨', '辰', '士', '以', '建', '家', '致', '树', '炎', '德', '行', '时', '泰', '盛', '雄', '琛', '钧', '冠', '策', '腾', '楠', '榕', '风', '航', '弘', '玄', '华', '力', '奇', '平', '保', '东', '文', '辉', '力', '明', '永', '健', '世', '广', '志', '义', '兴', '良', '海', '山', '仁', '波', '宁', '贵', '福', '生', '龙', '元', '全', '国', '胜', '学', '祥', '才', '发', '武', '新', '亨', '奇', '固', '之', '轮', '翰', '朗', '伯', '宏', '言', '若', '鸣', '朋', '斌', '梁', '栋', '维', '启', '克', '伦', '翔', '旭', '鹏', '泽', '晨', '辰', '士', '以', '建', '家', '致', '树', '炎', '德', '行', '时', '泰', '盛', '雄', '琛', '钧', '冠', '策', '腾', '楠', '榕', '风', '航', '弘', '玄'];
	
	// 女性常用名
	var femaleNames = ['娜', '静', '敏', '燕', '艳', '丽', '娟', '莉', '芳', '萍', '玲', '丹', '洁', '红', '颖', '琳', '霞', '秀', '秀英', '华', '平', '刚', '桂英', '文', '辉', '建', '国', '海', '洋', '波', '宁', '鹏', '杰', '涛', '明', '超', '秀英', '华', '平', '刚', '桂英', '文', '辉', '建', '国', '海', '洋', '波', '宁', '鹏', '娜', '静', '敏', '燕', '艳', '丽', '娟', '莉', '芳', '萍', '玲', '丹', '洁', '红', '颖', '琳', '霞', '秀', '慧', '敏', '静', '丽', '娟', '芳', '燕', '玲', '萍', '红', '艳', '娜', '丹', '洁', '文', '云', '梅', '兰', '凤', '春', '花', '金', '玉', '珠', '翠', '秀', '英', '惠', '慧', '智', '巧', '美', '静', '丽', '娟', '莉', '芳', '燕', '玲', '萍', '红', '艳', '娜', '丹', '洁', '文', '云', '梅', '兰', '凤', '春', '花', '金', '玉', '珠', '翠', '秀', '英', '惠', '慧', '智', '巧', '美', '娜', '静', '敏', '燕', '艳', '丽', '娟', '莉', '芳', '萍', '玲', '丹', '洁', '红', '颖', '琳', '霞', '秀', '英', '华', '慧', '巧', '美', '静', '丽', '娟', '莉', '芳', '燕', '玲', '萍', '红', '艳', '娜', '丹', '洁', '文', '云', '梅', '兰', '凤', '春', '花', '金', '玉', '珠', '翠', '秀', '英', '惠', '慧', '智', '巧', '美'];
	
	var surname = surnames[getRandom(0, surnames.length - 1)];
	var nameList = sex === 1 ? maleNames : femaleNames;
	
	var nameLength = Math.random() > 0.3 ? 2 : 1; // 30%概率单字名，70%双字名
	var givenName = '';
	for (var i = 0; i < nameLength; i++) {
		givenName += nameList[getRandom(0, nameList.length - 1)];
	}
	
	return surname + givenName;
}

//获取radio选中值
function GetRadioValue(RadioName){
    var obj;   
    obj=document.getElementsByName(RadioName);
    if(obj!=null){
        var i;
        for(i=0;i<obj.length;i++){
            if(obj[i].checked){
                return obj[i].value;           
            }
        }
    }
    return null;
}


//不足位前面加 0
function padLeft(str, lenght) {
	if (str.length >= lenght)
		return str;
	else
		return padLeft("0" + str, lenght);
}

function getRandom(m,n){
	return Math.round((Math.random()*(n-m)+m))
}
function strsub(str,i){
	return str.substr(i-1,1)
}
function to18(str17){
	var num = 0;
	var wei;
	var xis;
	var jmod = 0;
	for (var i=1;i<=17;i++){
		wei = Number(strsub(str17,i));
		xis = Math.pow(2,18-i) % 11;
		num = num + (wei*xis)
	}
	jmod = num % 11
	switch (jmod){
		case 0:
			restr = '1';
			break;
		case 1:
			restr = '0';
			break;
		case 2:
			restr = 'X';
			break;
		case 3:
			restr = '9';
			break;
		case 4:
			restr = '8';
			break;
		case 5:
			restr = '7';
			break;
		case 6:
			restr = '6';
			break;
		case 7:
			restr = '5';
			break;
		case 8:
			restr = '4';
			break;
		case 9:
			restr = '3';
			break;
		case 10:
			restr = '2';
			break;
	}
	return str17+restr;
}

function exportToExcel() {
	var cards = document.querySelectorAll('#rNo .bg-white');
	if (cards.length === 0) {
		showToast('没有可导出的数据', 'error');
		return;
	}
	
	var data = [];
	data.push(['序号', '姓名', '家庭住址', '出生日期', '性别', '年龄', '身份证号', '手机号码']);
	
	cards.forEach(function(card, index) {
		var name = card.querySelector('span.font-bold.text-on-surface')?.textContent || '';
		var address = card.querySelectorAll('div.flex.justify-between.items-center.py-2')[1]?.querySelector('span:last-child')?.textContent || '';
		var birthday = card.querySelectorAll('div.flex.justify-between.items-center.py-2')[2]?.querySelector('span:last-child')?.textContent || '';
		var genderAge = card.querySelectorAll('div.flex.justify-between.items-center.py-2')[3]?.querySelector('span:last-child')?.textContent || '';
		var gender = genderAge.split(' / ')[0] || '';
		var age = genderAge.split(' / ')[1]?.replace('岁', '') || '';
		
		var idcard = '';
		var phone = '';
		var infoBoxes = card.querySelectorAll('div.bg-surface-container-lowest');
		infoBoxes.forEach(function(box) {
			var label = box.querySelector('span.text-on-surface-variant')?.textContent || '';
			var value = box.querySelector('span.font-mono-data')?.textContent || '';
			if (label.includes('身份证号')) {
				idcard = value;
			} else if (label.includes('手机号码')) {
				phone = value;
			}
		});
		
		data.push([index + 1, name, address, birthday, gender, age, idcard, phone]);
	});
	
	var csvContent = data.map(row => row.map(cell => {
		if (cell === null || cell === undefined) return '';
		var escaped = String(cell).replace(/"/g, '""');
		return `"${escaped}"`;
	}).join(',')).join('\n');
	
	var blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
	var link = document.createElement('a');
	var url = URL.createObjectURL(blob);
	link.setAttribute('href', url);
	link.setAttribute('download', '身份信息_' + new Date().toLocaleDateString('zh-CN').replace(/\//g, '-') + '.csv');
	link.style.visibility = 'hidden';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	
	showToast('导出成功', 'success');
}