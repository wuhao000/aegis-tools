type ModelAndViewStatus = '100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '451' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511';

type RestResultStatus = 'OK' | 'AUTH_ERROR' | 'USER_DELETE' | 'ORGAN_DELETE' | 'LACKDATA' | 'WORKORDERS_DELETE' | 'WORKORDERS_NOTEXIST' | 'XIAOE_TOPIC_DELETE' | 'XIAOE_TOPIC_NOT_EMPTY' | 'XIAOE_TYPE_DELETE';

type WorkOrdersStatusV2 = 'none' | 'uncommitted' | 'unchecked' | 'unread' | 'read' | 'back' | 'hand' | 'success' | 'replyunchecked' | 'replyback' | 'unhandle' | 'handled';

type GetListType = 'RANDOM' | 'MISSION';

export interface AgentService {
  agent?: string;
	agentTip?: boolean;
	agentno?: string;
	agentreplyinterval?: number;
	agentreplys?: number;
	agentreplytime?: number;
	agentservice?: string;
	agentserviceid?: string;
	agentskill?: string;
	agentuserid?: string;
	agentusername?: string;
	aiid?: string;
	aiservice?: boolean;
	aiserviceid?: string;
	appid?: string;
	assuser?: string;
	avgreplyinterval?: number;
	avgreplytime?: number;
	browser?: string;
	channel?: string;
	city?: string;
	contactsid?: string;
	contextid?: string;
	country?: string;
	createdate?: string;
	createtime?: string;
	dataid?: string;
	disconnect?: boolean;
	email?: string;
	endby?: string;
	endtime?: string;
	filteragentscript?: number;
	filterscript?: number;
	firstreplytime?: number;
	foragent?: boolean;
	fromai?: boolean;
	fromhis?: boolean;
	headimgurl?: string;
	id?: string;
	initiator?: string;
	invite?: boolean;
	invitedate?: string;
	ipaddr?: string;
	lastgetmessage?: string;
	lastmessage?: string;
	lastmsg?: string;
	leavemsg?: boolean;
	leavemsgstatus?: string;
	logindate?: string;
	memo?: string;
	msgtimeout?: number;
	msgtimeoutagent?: number;
	name?: string;
	nickname?: string;
	online?: boolean;
	ordertime?: number;
	orgi?: string;
	osname?: string;
	owner?: string;
	phone?: string;
	province?: string;
	qualityactid?: string;
	qualitydisorgan?: string;
	qualitydistime?: string;
	qualitydistype?: string;
	qualitydisuser?: string;
	qualityfilterid?: string;
	qualityorgan?: string;
	qualitypass?: number;
	qualityscore?: number;
	qualitystatus?: string;
	qualitytime?: string;
	qualitytype?: string;
	qualityuser?: string;
	queneindex?: number;
	queuetime?: string;
	region?: string;
	resion?: string;
	satiscomment?: string;
	satisfaction?: boolean;
	satislevel?: string;
	satistime?: string;
	sensitiveword?: number;
	sensitivewordagent?: number;
	servicekind?: string;
	servicetime?: string;
	sessionid?: string;
	sessiontimeout?: number;
	sessiontimes?: number;
	sessiontype?: string;
	skill?: string;
	snsname?: string;
	snsuser?: string;
	solvestatus?: string;
	source?: string;
	status?: string;
	templateid?: string;
	times?: number;
	tip?: boolean;
	tokenum?: number;
	topic?: string;
	trans?: boolean;
	transagent?: boolean;
	transagenttime?: string;
	transmemo?: string;
	transtime?: string;
	transtraceid?: string;
	updatetime?: string;
	useful?: boolean;
	userasks?: number;
	userid?: string;
	username?: string;
	waittingtime?: number;
	waittingtimestart?: string;
}


export interface AgentStatus {
  agentno?: string;
	agentserviceid?: string;
	busy?: boolean;
	createtime?: string;
	id?: string;
	initmaxusers?: number;
	logindate?: string;
	maxusers?: number;
	name?: string;
	orgi?: string;
	pulluser?: boolean;
	serusernum?: number;
	skill?: string;
	skillname?: string;
	status?: string;
	updatetime?: string;
	userid?: string;
	username?: string;
	users?: number;
	workstatus?: string;
}


export interface CallCenterAgent {
  afterprocess?: boolean;
	agent?: string;
	aptime?: number;
	dataid?: string;
	eventid?: string;
	extention?: any;
	extno?: string;
	forecast?: boolean;
	forecastvalue?: string;
	hanguptime?: number;
	metaid?: string;
	nameid?: string;
	offline?: boolean;
	offlinetime?: number;
	organ?: string;
	orgi?: string;
	phonenum?: string;
	ready?: boolean;
	siptrunk?: string;
	skill?: string;
	status?: string;
	time?: string;
	updatetime?: string;
	userid?: string;
	username?: string;
	workstatus?: string;
}


export interface Contacts {
  actid?: string;
	address?: string;
	apstatus?: string;
	assignedto?: string;
	attachment?: boolean;
	business?: string;
	busmemo?: string;
	callresult?: string;
	callstatus?: string;
	calltime?: number;
	calltimes?: number;
	cbirthday?: string;
	ccode?: string;
	city?: string;
	ckind?: string;
	clevel?: string;
	company?: string;
	compper?: string;
	country?: string;
	creater?: string;
	createtime?: string;
	csource?: string;
	ctype?: string;
	cusaddress?: string;
	cuscity?: string;
	cusdescription?: string;
	cusemail?: string;
	cusname?: string;
	cusphone?: string;
	cusprovince?: string;
	cusvalidstatus?: string;
	datadept?: string;
	dataid?: string;
	datastatus?: boolean;
	department?: string;
	deptpr?: string;
	discount?: number;
	distime?: string;
	duty?: string;
	education?: string;
	ekind?: string;
	elevel?: string;
	email?: string;
	emailalt?: string;
	entcusid?: string;
	enterpriseid?: string;
	esource?: string;
	eventid?: string;
	extendMap?: object;
	extend_map_json?: string;
	extension?: string;
	extensionalt?: string;
	faildcall?: number;
	familyphone?: string;
	familyphonealt?: string;
	fax?: string;
	faxalt?: string;
	firstcallstatus?: string;
	firstcalltimes?: number;
	gender?: string;
	hangupcase?: string;
	id?: string;
	identifynumber?: string;
	identifytype?: string;
	incall?: number;
	industry?: string;
	itemid?: string;
	job?: string;
	language?: string;
	marriage?: string;
	maturity?: string;
	memo?: string;
	mobilealt?: string;
	mobileno?: string;
	name?: string;
	nickname?: string;
	optime?: string;
	organ?: string;
	orgi?: string;
	owner?: string;
	ownerai?: string;
	ownerdept?: string;
	ownerforecast?: string;
	owneruser?: string;
	parties?: string[];
	partiesmysql?: string;
	phone?: string;
	phoneMark?: string;
	phonealt?: string;
	pinyin?: string;
	postcode?: string;
	processed?: boolean;
	processid?: string;
	province?: string;
	qqcode?: string;
	reservation?: boolean;
	reservtype?: string;
	ringtime?: number;
	salesmemo?: string;
	salestatus?: string;
	sarea?: string;
	shares?: string;
	sourcetype?: string;
	status?: string;
	succcall?: number;
	touchtime?: string;
	updatetime?: string;
	updateuser?: string;
	updateusername?: string;
	user?: any;
	username?: string;
	validstatus?: string;
	website?: string;
	weibo?: string;
	weiboid?: string;
	weixin?: string;
	weixinid?: string;
	weixinname?: string;
	wfstatus?: string;
	workstatus?: string;
}


export interface CountData {
  closed?: number;
	favorite?: number;
	models?: object;
	my?: number;
	notAssigned?: number;
	user?: any;
	wait?: number;
	workflow?: number;
}


export interface CurrentUserVO {
  user?: any;
}


export interface DataEvent {
  content?: string;
	creater?: string;
	createtime?: string;
	dataid?: string;
	eventList?: any[];
	eventtype?: string;
	id?: string;
	modifyid?: string;
	name?: string;
	orgi?: string;
	user?: any;
}


export interface DependCondition {
  operator?: string;
	property?: string;
	value?: object;
}


export interface Extention {
  action?: string;
	agentno?: string;
	aiid?: string;
	aitype?: string;
	autoanswer?: string;
	bustype?: string;
	callout?: boolean;
	confirmattempts?: string;
	confirmkey?: string;
	confirmmacro?: string;
	creater?: string;
	createtime?: string;
	description?: string;
	digitlen?: number;
	digits?: string;
	enableai?: string;
	enablewebrtc?: boolean;
	eoseng?: number;
	eostime?: number;
	errormessage?: string;
	exitsound?: string;
	extention?: string;
	extype?: string;
	greetlong?: string;
	greetshort?: string;
	hostid?: string;
	id?: string;
	interdigittimeout?: number;
	invalidsound?: string;
	language?: string;
	maxfailures?: number;
	maxtimeouts?: number;
	mediapath?: string;
	orgi?: string;
	param?: string;
	password?: string;
	playnum?: boolean;
	proid?: string;
	queid?: string;
	record?: boolean;
	sceneid?: string;
	siptrunk?: string;
	soseng?: number;
	subtype?: string;
	timeout?: number;
	tipmessage?: string;
	ttsengine?: string;
	ttsvoice?: string;
	uname?: string;
	updatetime?: string;
	userid?: string;
	username?: string;
	waitmsg?: string;
	waittime?: number;
	waittiptimes?: number;
	welcomemsg?: string;
}


export interface Favorites {
  code?: string;
	creater?: string;
	createtime?: string;
	id?: string;
	model?: string;
	name?: string;
	orderid?: string;
	orgi?: string;
	title?: string;
	updatetime?: string;
	username?: string;
	workOrders?: any;
}


export interface ModelAndView {
  empty?: boolean;
	model?: object;
	modelMap?: object;
	reference?: boolean;
	status?: ModelAndViewStatus;
	view?: any;
	viewName?: string;
}


export interface NewWorkOrder {
  closed?: boolean;
	committed?: boolean;
	contactid?: string;
	contacts?: any;
	createtime?: string;
	eventId?: string;
	fav?: boolean;
	id?: string;
	orgi?: string;
	orgid?: string;
	phonemark?: string;
	quality?: any;
	qualityAcceptUser?: any;
	qualityCase?: any;
	qualityObjection?: any;
	qualityResult?: any;
	serviceid?: string;
	updatetime?: string;
	user?: any;
	workOrdersExtras?: any[];
}


export interface OperationResult {
  code?: string;
	name?: string;
}


export interface Organ {
  area?: string;
	code?: string;
	creater?: string;
	createtime?: string;
	id?: string;
	name?: string;
	orgi?: string;
	orgid?: string;
	parent?: string;
	skill?: boolean;
	updatetime?: string;
	username?: string;
}


export interface Organization {
  code?: string;
	createtime?: string;
	id?: string;
	logo?: string;
	memo?: string;
	name?: string;
	orgindustry?: string;
	orgscale?: string;
	orgtype?: string;
	superUser?: string;
}


export interface Page<T> {
  content?: T[];
	first?: boolean;
	last?: boolean;
	number?: number;
	numberOfElements?: number;
	size?: number;
	sort?: any;
	totalElements?: number;
	totalPages?: number;
}


export interface Pair<T, S> {
  first?: T;
	second?: S[];
}


export interface Party {
  callerId?: string;
	creater?: string;
	id?: string;
	legalIdentifyName?: string;
	legalIdentifyNumber?: string;
	legalIdentifyType?: string;
	partyAddress?: string;
	partyGender?: string;
	partyIdentifyNumber?: string;
	partyIdentifyType?: string;
	partyIdentity?: string;
	partyJob?: string;
	partyName?: string;
	partyUnit?: string;
	surname?: string;
	tenantId?: string;
}


export interface PropertiesEvent {
  creater?: string;
	createtime?: string;
	dataid?: string;
	field?: string;
	id?: string;
	modifyid?: string;
	name?: string;
	newvalue?: string;
	oldvalue?: string;
	orgi?: string;
	propertity?: string;
	textvalue?: string;
	tpid?: string;
}


export interface Quality {
  caseCount?: object;
	code?: string;
	creater?: string;
	createtime?: string;
	description?: string;
	enddate?: string;
	groupIds?: string[];
	id?: string;
	name?: string;
	orgi?: string;
	parentid?: string;
	qualityGroups?: any[];
	qualitytype?: string;
	randomCount?: number;
	score?: number;
	startdate?: string;
	updatetime?: string;
	username?: string;
	workOrderCount?: number;
}


export interface QualityCase {
  id?: string;
	name?: string;
	orgi?: string;
}


export interface QualityGroup {
  createtime?: string;
	id?: string;
	name?: string;
	orgi?: string;
	related?: boolean;
	userNames?: string;
	userids?: string[];
}


export interface QualityObjection {
  createtime?: string;
	handler?: any;
	handlertype?: string;
	id?: string;
	maintainreason?: string;
	orgi?: string;
	reason?: string;
	updatetime?: string;
}


export interface QualityResult {
  adcom?: string;
	archivedate?: string;
	arithmetic?: string;
	creater?: string;
	createtime?: string;
	dataid?: string;
	id?: string;
	imcom?: string;
	isadcom?: boolean;
	isimcom?: boolean;
	isitemdir?: boolean;
	isitemrmk?: boolean;
	isqacom?: boolean;
	isrmk?: boolean;
	isvp?: boolean;
	missionid?: string;
	orgi?: string;
	passscore?: number;
	qacom?: string;
	qualifyUser?: any;
	qualityid?: string;
	qualitytype?: string;
	qualityuser?: string;
	remarks?: string;
	score?: number;
	status?: string;
	totalscore?: number;
}


export interface QueryLimiterSetting {
  currentCount?: number;
	desc?: string;
	key?: string;
	maxCount?: number;
	provider?: string;
	requestUrl?: string;
}


export interface QueryParams {
  begin?: string;
	end?: string;
	id?: string;
	p?: string;
	ps?: string;
	type?: string;
}


export interface ResponseEntity {
  body?: object;
	statusCode?: ModelAndViewStatus;
	statusCodeValue?: number;
}


export interface RestResult {
  data?: object;
	status?: RestResultStatus;
}


export interface Role {
  code?: string;
	creater?: string;
	createtime?: string;
	id?: string;
	name?: string;
	orgi?: string;
	orgid?: string;
	portal?: string;
	updatetime?: string;
	username?: string;
}


export interface SimplePage<T> {
  list?: T[];
	page?: number;
	pageCount?: number;
	size?: number;
	total?: number;
}


export interface Sort {
  
}


export interface SysDic {
  catetype?: string;
	code?: string;
	creater?: string;
	createtime?: string;
	ctype?: string;
	defaultvalue?: boolean;
	description?: string;
	dicid?: string;
	discode?: boolean;
	haschild?: boolean;
	iconskin?: string;
	iconstr?: string;
	id?: string;
	memo?: string;
	menutype?: string;
	mlevel?: string;
	module?: string;
	name?: string;
	orgi?: string;
	parentid?: string;
	rules?: string;
	sortindex?: number;
	title?: string;
	updatetime?: string;
	url?: string;
}


export interface Type {
  typeName?: string;
}


export interface User {
  agent?: boolean;
	agentStatus?: any;
	bindext?: boolean;
	birthday?: string;
	callcenter?: boolean;
	ccagent?: any;
	city?: string;
	clientip?: string;
	creater?: string;
	createtime?: string;
	datastatus?: boolean;
	department?: string;
	disabledesk?: boolean;
	email?: string;
	extid?: string;
	extno?: string;
	fans?: number;
	firstname?: string;
	follows?: number;
	gender?: string;
	hostid?: string;
	httpsession?: string;
	id?: string;
	integral?: number;
	jobtitle?: string;
	language?: string;
	lastlogintime?: string;
	lastname?: string;
	login?: boolean;
	maxuser?: number;
	memo?: string;
	midname?: string;
	mobile?: string;
	nickname?: string;
	online?: boolean;
	ordertype?: string;
	organ?: string;
	orgi?: string;
	orgid?: string;
	passupdatetime?: string;
	province?: string;
	roleAuthMap?: object;
	roleList?: any[];
	secureconf?: string;
	sessionid?: string;
	skill?: string;
	status?: string;
	superuser?: boolean;
	uname?: string;
	updatetime?: string;
	username?: string;
	usertype?: string;
}


export interface View {
  contentType?: string;
}


export interface WorkOrders {
  accdept?: string;
	accept?: boolean;
	accuser?: string;
	agent?: string;
	ani?: string;
	anonymous?: boolean;
	answers?: number;
	assigned?: boolean;
	assuser?: string;
	backReason?: string;
	bpmid?: string;
	cate?: string;
	collections?: number;
	comments?: number;
	contacts?: any;
	content?: string;
	creater?: string;
	createtime?: string;
	current?: any;
	currentorgan?: any;
	cusid?: string;
	dataid?: string;
	datastatus?: boolean;
	essence?: boolean;
	eventid?: string;
	fav?: any;
	finish?: boolean;
	followers?: number;
	frommobile?: boolean;
	id?: string;
	initiator?: string;
	key?: string;
	keyword?: string;
	memo?: string;
	orderid?: string;
	orderno?: string;
	organ?: string;
	orgi?: string;
	price?: number;
	priority?: string;
	qualityactid?: string;
	qualitydisorgan?: string;
	qualitydistime?: string;
	qualitydistype?: string;
	qualitydisuser?: string;
	qualityfilterid?: string;
	qualityorgan?: string;
	qualitypass?: number;
	qualityscore?: number;
	qualitystatus?: string;
	qualitytime?: string;
	qualitytype?: string;
	qualityuser?: string;
	replyTime?: string;
	reportType?: string;
	rowcount?: number;
	sessionid?: string;
	shares?: string;
	skill?: string;
	status?: string;
	statusV2?: WorkOrdersStatusV2;
	successTime?: string;
	summary?: string;
	tags?: string;
	taskid?: string;
	templateid?: string;
	title?: string;
	top?: boolean;
	updatetime?: string;
	user?: any;
	username?: string;
	views?: number;
	wotype?: string;
}


export interface WorkOrdersConsult {
  ah?: string;
	consistenceId?: string;
	contactPhone?: string;
	id?: string;
	judgmentDate?: string;
	partyCardNumber?: string;
	partyName?: string;
	spjb?: number;
	ssdw?: string;
}


export interface WorkOrdersExtra {
  accdept?: string;
	acceptUser?: any;
	accuser?: string;
	attachment?: boolean;
	contactName?: string;
	content?: string;
	createTime?: string;
	extraType?: number;
	extradata?: string;
	id?: string;
	operations?: any[];
	orgi?: string;
	orgid?: string;
	party?: any;
	pass?: boolean;
	reason?: string;
	reportType?: string;
	reportid?: string;
	status?: string;
	statusV2?: WorkOrdersStatusV2;
	summary?: string;
	updateTime?: string;
	username?: string;
	workOrders?: any;
	workorderid?: string;
}


export interface WorkordersExtraField {
  /**
	 * 值是否数组类型
	 */
	array?: boolean;
	depends?: any[];
	/**
	 * 字段显示名称
	 */
	displayName?: string;
	id?: number;
	/**
	 * 字段名称（英文）
	 */
	name?: string;
	optionDataCode?: string;
	placeholder?: string;
	props?: object;
	required?: boolean;
	span?: number;
	/**
	 * 字段类型
	 */
	type?: string;
	/**
	 * 绑定的工单类型id
	 */
	workorderType?: string;
}


export interface WorkordersMessage {
  content?: string;
	fromUserId?: string;
	fromUserName?: string;
	fromUserRole?: string;
	id?: string;
	objectId?: string;
	objectType?: number;
	sendTime?: string;
	toUserId?: string;
	toUserName?: string;
	toUserRole?: string;
}
