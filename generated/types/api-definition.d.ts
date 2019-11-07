import {GenericAPI, StringIdAPI, NumberIdAPI} from 'aegis-api-proxy';
import {
  AgentService,
	AgentStatus,
	CallCenterAgent,
	Contacts,
	CountData,
	CurrentUserVO,
	DataEvent,
	DependCondition,
	Extention,
	Favorites,
	ModelAndView,
	NewWorkOrder,
	OperationResult,
	Organ,
	Organization,
	Page,
	Pair,
	Party,
	PropertiesEvent,
	Quality,
	QualityCase,
	QualityGroup,
	QualityObjection,
	QualityResult,
	QueryLimiterSetting,
	QueryParams,
	ResponseEntity,
	RestResult,
	Role,
	SimplePage,
	Sort,
	SysDic,
	Type,
	User,
	View,
	WorkOrders,
	WorkOrdersConsult,
	WorkOrdersExtra,
	WorkordersExtraField,
	WorkordersMessage
} from './api-beans';

interface GeneratedApis<T> {
	admin: AdminAPI<T>;
	ai: AiAPI<T>;
	api: ApiAPI<T>;
	apiFakeData: ApiFakeDataAPI<T>;
	apps: AppsAPI<T>;
	currentUser: CurrentUserAPI<T>;
	queryCenter: QueryCenterAPI<T>;
	rest: RestAPI<T>;
	session: SessionAPI<T>;
	tokens: TokensAPI<T>;
	v5: V5API<T>;
}

export interface AdminUserAPI<T> {
  /**
   * 获取列表
   */
  list: GenericAPI<T, Page<User>>;
}

export interface AdminAPI<T> {
	user: AdminUserAPI<T>;
}

export interface AiXiaoeAPI<T> {
  /**
   * 获取对话内容
   */
  chat: GenericAPI<T, RestResult>;
}

export interface AiAPI<T> {
	xiaoe: AiXiaoeAPI<T>;
}

export interface ApiAgentuserAPI<T> {
  /**
   * 获取当前正在对话的访客信息，包含多种渠道来源的访客
   */
  list: GenericAPI<T, RestResult>;
}

export interface ApiChatmessageAPI<T> {
  /**
   * 获取访客对话内容
   */
  list: GenericAPI<T, RestResult>;
}

export interface ApiContactsAPI<T> {
  /**
   * 返回联系人列表，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新增或修改联系人，联系人部分字段是字典选项，请从字典接口获取数据
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 删除联系人，联系人删除是逻辑删除，将 datastatus字段标记为 true，即已删除
   */
  delete: GenericAPI<T, RestResult>;
}

export interface LeavemsgListAPI<T> {
  /**
   * 获取留言列表
   */
  list: GenericAPI<T, Page<AgentService>>;
}

export interface ApiLeavemsgAPI<T> {
	list: LeavemsgListAPI<T>;
}

export interface OnlineUserAPI<T> {
  /**
   * 获取在线客服
   */
  list: GenericAPI<T, RestResult>;
}

export interface ApiOnlineAPI<T> {
	user: OnlineUserAPI<T>;
}

export interface ApiOrganAPI<T> {
  /**
   * 返回所有部门
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新增或修改部门
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 删除机构，只提供 按照用户ID删除
   */
  delete: GenericAPI<T, RestResult>;
}

export interface ApiQualityAPI<T> {
  /**
   * 获取质检列表
   */
  list: GenericAPI<T, RestResult>;
}

export interface ApiQuickreplyAPI<T> {
  /**
   * 返回快捷回复列表，cate为分类id，通过/api/quicktype 获取分类id，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新增或修改快捷回复
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 根据id删除快捷回复
   */
  delete: GenericAPI<T, RestResult>;
}

export interface ApiQuicktypeAPI<T> {
  /**
   * 返回快捷回复分类
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新增或修改快捷回复
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 删除快捷回复分类,并且删除分类下的快捷回复
   */
  delete: GenericAPI<T, RestResult>;
}

export interface ApiServicequeneAPI<T> {
  /**
   * 获取队列统计信息，包含当前队列服务中的访客数，排队人数，坐席数
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 坐席状态操作，就绪、未就绪、忙
   */
  agentStatus: GenericAPI<T, RestResult>;
}

export interface ApiSysdicAPI<T> {
  /**
   * 获取在线客服
   */
  list: GenericAPI<T, RestResult>;
}

export interface ApiTagsAPI<T> {
  /**
   * 按照分类获取标签列表，Type 参数类型来自于 枚举，可选值目前有三个 ： user  workorders summary
   */
  list: GenericAPI<T, RestResult>;
}

export interface ApiUserAPI<T> {
  /**
   * 返回用户列表，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新增或修改用户用户 ，在修改用户信息的时候，如果用户 密码未改变，请设置为 NULL
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 删除用户，只提供 按照用户ID删除 ， 并且，不能删除系统管理员
   */
  delete: GenericAPI<T, RestResult>;
}

export interface WebimAgentAPI<T> {
  /**
   * 获取在线客服会话历史消息
   */
  agent: GenericAPI<T, RestResult>;
}

export interface WebimAiAPI<T> {
  /**
   * 获取在线客服会话ID
   */
  session: GenericAPI<T, RestResult>;
}

export interface ChatHisAPI<T> {
  /**
   * 获取在线客服会话历史消息
   */
  history: GenericAPI<T, RestResult>;
}

export interface WebimChatAPI<T> {
	his: ChatHisAPI<T>;
}

export interface WebimHotAPI<T> {
  /**
   * 获取推荐知识
   */
  hot: GenericAPI<T, RestResult>;
}

export interface ImageUploadAPI<T> {
  /**
   * upload
   */
  upload: GenericAPI<T, ModelAndView>;
}

export interface WebimImageAPI<T> {
	upload: ImageUploadAPI<T>;
}

export interface LeavemsgSaveAPI<T> {
  /**
   * 保存留言功能
   */
  leavemsg: GenericAPI<T, RestResult>;
}

export interface WebimLeavemsgAPI<T> {
	save: LeavemsgSaveAPI<T>;
}

export interface MessageUnusefulAPI<T> {
  /**
   * 获取满意度调查
   */
  unuseful: GenericAPI<T, RestResult>;
}

export interface MessageUsefulAPI<T> {
  /**
   * 获取满意度调查
   */
  useful: GenericAPI<T, RestResult>;
}

export interface WebimMessageAPI<T> {
	unuseful: MessageUnusefulAPI<T>;
	useful: MessageUsefulAPI<T>;
}

export interface WebimQueryAPI<T> {
  /**
   * 获取推荐知识
   */
  query: GenericAPI<T, RestResult>;
}

export interface SatisSaveAPI<T> {
  /**
   * 获取满意度调查
   */
  satissave: GenericAPI<T, RestResult>;
}

export interface WebimSatisAPI<T> {
  /**
   * 获取满意度调查
   */
  satis: GenericAPI<T, RestResult>;
	save: SatisSaveAPI<T>;
}

export interface WebimSessionAPI<T> {
  /**
   * 获取在线客服会话ID
   */
  session: GenericAPI<T, RestResult>;
}

export interface SuggestMobileAPI<T> {
  /**
   * mobilesuggest
   */
  mobilesuggest: GenericAPI<T, RestResult>;
}

export interface WebimSuggestAPI<T> {
	mobile: SuggestMobileAPI<T>;
}

export interface WebimUrlAPI<T> {
  /**
   * 获取图片和语音信息资源的访问URL地址信息
   */
  url: GenericAPI<T, RestResult>;
}

export interface ApiWebimAPI<T> {
  /**
   * 获取在线客服
   */
  list: StringIdAPI<T, RestResult>;
  /**
   * 修改在线客服信息，只提供修改操作
   */
  put: GenericAPI<T, RestResult>;
	agent: WebimAgentAPI<T>;
	ai: WebimAiAPI<T>;
	chat: WebimChatAPI<T>;
	hot: WebimHotAPI<T>;
	image: WebimImageAPI<T>;
	leavemsg: WebimLeavemsgAPI<T>;
	message: WebimMessageAPI<T>;
	query: WebimQueryAPI<T>;
	satis: WebimSatisAPI<T>;
	session: WebimSessionAPI<T>;
	suggest: WebimSuggestAPI<T>;
	url: WebimUrlAPI<T>;
}

export interface WorkordersAssignedAPI<T> {
  /**
   * 返回我的待办工单列表
   */
  list: GenericAPI<T, RestResult>;
}

export interface WorkordersClosedAPI<T> {
  /**
   * 返回所有已关闭的工单列表
   */
  list: GenericAPI<T, RestResult>;
}

export interface WorkordersCommentAPI<T> {
  /**
   * 回复工单
   */
  list: GenericAPI<T, RestResult>;
}

export interface WorkordersContactsAPI<T> {
  /**
   * 返回联系人的工单列表，联系人ID不能为空
   */
  list: GenericAPI<T, RestResult>;
}

export interface WorkordersDetailAPI<T> {
  /**
   * 返回所有已关闭的工单列表
   */
  list: GenericAPI<T, RestResult>;
}

export interface WorkordersFavoritesAPI<T> {
  /**
   * 返回我的关注的工单列表
   */
  list: GenericAPI<T, RestResult>;
}

export interface WorkordersProcessAPI<T> {
  /**
   * 回复工单
   */
  list: GenericAPI<T, RestResult>;
}

export interface WorkordersWorkitemAPI<T> {
  /**
   * 返回我的待办工单列表
   */
  list: GenericAPI<T, RestResult>;
}

export interface ApiWorkordersAPI<T> {
  /**
   * 返回我创建的工单
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新建工单，自动分配工单编号
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 删除工单，只提供 按照工单ID删除 ， 工单删除是逻辑删除，将该条数据标记为已删除
   */
  delete: GenericAPI<T, RestResult>;
	assigned: WorkordersAssignedAPI<T>;
	closed: WorkordersClosedAPI<T>;
	comment: WorkordersCommentAPI<T>;
	contacts: WorkordersContactsAPI<T>;
	detail: WorkordersDetailAPI<T>;
	favorites: WorkordersFavoritesAPI<T>;
	process: WorkordersProcessAPI<T>;
	workitem: WorkordersWorkitemAPI<T>;
}

export interface XiaoeCateAPI<T> {
  /**
   * 返回分类列表
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新增/编辑知识分类
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 删除知识库分类
   */
  delete: GenericAPI<T, RestResult>;
}

export interface TopicDetailAPI<T> {
  /**
   * 返回单条知识库条目
   */
  list: GenericAPI<T, RestResult>;
}

export interface XiaoeTopicAPI<T> {
  /**
   * 返回知识库列表，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T, RestResult>;
  /**
   * 新增/编辑知识内容
   */
  put: GenericAPI<T, RestResult>;
  /**
   * 删除知识库内容
   */
  delete: GenericAPI<T, RestResult>;
	detail: TopicDetailAPI<T>;
}

export interface ApiXiaoeAPI<T> {
	cate: XiaoeCateAPI<T>;
	topic: XiaoeTopicAPI<T>;
}

export interface ApiAPI<T> {
	agentuser: ApiAgentuserAPI<T>;
	chatmessage: ApiChatmessageAPI<T>;
	contacts: ApiContactsAPI<T>;
	leavemsg: ApiLeavemsgAPI<T>;
	online: ApiOnlineAPI<T>;
	organ: ApiOrganAPI<T>;
	quality: ApiQualityAPI<T>;
	quickreply: ApiQuickreplyAPI<T>;
	quicktype: ApiQuicktypeAPI<T>;
	servicequene: ApiServicequeneAPI<T>;
	sysdic: ApiSysdicAPI<T>;
	tags: ApiTagsAPI<T>;
	user: ApiUserAPI<T>;
	webim: ApiWebimAPI<T>;
	workorders: ApiWorkordersAPI<T>;
	xiaoe: ApiXiaoeAPI<T>;
}

export interface ApiFakeDataAppointmentReviewListAPI<T> {
  /**
   * 预约阅卷
   */
  appointmentReviewList: GenericAPI<T, any>;
}

export interface ApiFakeDataCaseQueryListAPI<T> {
  /**
   * 案件查询
   */
  caseQueryList: GenericAPI<T, any>;
}

export interface ApiFakeDataCaseReserveQueryListAPI<T> {
  /**
   * 预约立案
   */
  caseReserveQueryList: GenericAPI<T, any>;
}

export interface ApiFakeDataExecutionInfoListAPI<T> {
  /**
   * 执行查询
   */
  executionInfo: GenericAPI<T, any>;
}

export interface ApiFakeDataLitigationConsultationAPI<T> {
  /**
   * 诉讼咨询
   */
  litigationConsultation: StringIdAPI<T, any>;
}

export interface ApiFakeDataAPI<T> {
	appointmentReviewList: ApiFakeDataAppointmentReviewListAPI<T>;
	caseQueryList: ApiFakeDataCaseQueryListAPI<T>;
	caseReserveQueryList: ApiFakeDataCaseReserveQueryListAPI<T>;
	executionInfoList: ApiFakeDataExecutionInfoListAPI<T>;
	litigationConsultation: ApiFakeDataLitigationConsultationAPI<T>;
}

export interface ContactsByMobileAPI<T> {
  /**
   * 根据手机号码获取联系人详情
   */
  getByMobile: StringIdAPI<T, Contacts[]>;
}

export interface ContactsCallerAPI<T> {
  /**
   * 保存来电人信息
   */
  saveContacts: GenericAPI<T, Contacts>;
}

export interface ContactsCheckIdentityAPI<T> {
  /**
   * 1.对身份证进行校验   2.通过身份证号获取性别   3.通过身份证号获取地址（省）
   */
  checkIdentity: StringIdAPI<T, string>;
}

export interface ContactsFindPartyByContactsIdAPI<T> {
  /**
   * 根据来电人的id查询关联的所有当事人
   */
  findPartyByContactsId: StringIdAPI<T>;
}

export interface ContactsFindPartyByPartyIdAPI<T> {
  /**
   * 根据当事人的id查询当事人详情，用于前端当事人的联动
   */
  findPartyByPartyId: StringIdAPI<T, Party>;
}

export interface ContactsFindPartyExistOrNotExistAPI<T> {
  /**
   * 查询当事人信息是否存在
   */
  findPartyExistOrNotExist: GenericAPI<T, Party>;
}

export interface ContactsGetUUIDAPI<T> {
  /**
   * getUUID
   */
  getUUID: GenericAPI<T>;
}

export interface ContactsPartyAPI<T> {
  /**
   * 保存当事人信息,使用来电人的id与当事人信息进行关联，以及校验当前来电人下当事人是否重复
   */
  saveParty: GenericAPI<T, Party>;
}

export interface ContactsUuidAPI<T> {
  /**
   * 生成uuid
   */
  uuid: GenericAPI<T, string>;
}

export interface AppsContactsAPI<T> {
	byMobile: ContactsByMobileAPI<T>;
	caller: ContactsCallerAPI<T>;
	checkIdentity: ContactsCheckIdentityAPI<T>;
	findPartyByContactsId: ContactsFindPartyByContactsIdAPI<T>;
	findPartyByPartyId: ContactsFindPartyByPartyIdAPI<T>;
	findPartyExistOrNotExist: ContactsFindPartyExistOrNotExistAPI<T>;
	getUUID: ContactsGetUUIDAPI<T>;
	party: ContactsPartyAPI<T>;
	uuid: ContactsUuidAPI<T>;
  /**
   * 根据id获取联系人详情
   */
  get: StringIdAPI<T, Contacts>;
}

export interface _12368IndexAPI<T> {
  /**
   * getIndexPage
   */
  getIndexPage: GenericAPI<T, ModelAndView>;
}

export interface _12368ListAPI<T> {
  /**
   * 开始质检列表/以质检列表/我的被质检工单列表
   */
  getList: GenericAPI<T, SimplePage<NewWorkOrder>>;
}

export interface _12368MyQualifiedListAPI<T> {
  /**
   * getMyQualityList
   */
  getMyQualityList: GenericAPI<T, ModelAndView>;
}

export interface _12368MyQualityListMonitorAPI<T> {
  /**
   * getFinishedQualityListMonitor
   */
  getFinishedQualityListMonitor: GenericAPI<T, ModelAndView>;
}

export interface _12368MyQualityListNormalAPI<T> {
  /**
   * getFinishedQualityList
   */
  getFinishedQualityList: GenericAPI<T, ModelAndView>;
}

export interface ObjectionHandleListAPI<T> {
  /**
   * 异议处理列表
   */
  getObjectionList: GenericAPI<T, SimplePage<NewWorkOrder>>;
}

export interface ObjectionHandleObjectionDetailAPI<T> {
  /**
   * 获取异议详细信息页面
   */
  getObjectionDetailPage: GenericAPI<T, ModelAndView>;
}

export interface ObjectionHandleAddAPI<T> {
  /**
   * 新增异议
   */
  addObjection: StringIdAPI<T, string>;
}

export interface ObjectionHandleHandleAPI<T> {
  /**
   * 处理异议
   */
  handlerObjection: GenericAPI<T, string>;
}

export interface _12368ObjectionHandleAPI<T> {
  /**
   * getCasePage
   */
  getCasePage: GenericAPI<T, ModelAndView>;
	list: ObjectionHandleListAPI<T>;
	objectionDetail: ObjectionHandleObjectionDetailAPI<T>;
	add: ObjectionHandleAddAPI<T>;
	handle: ObjectionHandleHandleAPI<T>;
}

export interface _12368QualityDetailAPI<T> {
  /**
   * getQualityDetailPage
   */
  getQualityDetailPage: GenericAPI<T, ModelAndView>;
}

export interface _12368StartQualityAPI<T> {
  /**
   * getStartQualityPage
   */
  getStartQualityPage: GenericAPI<T, ModelAndView>;
}

export interface _12368StartQualityListAPI<T> {
  /**
   * getStartQualityList
   */
  getStartQualityList: GenericAPI<T, ModelAndView>;
}

export interface TaskTeamAPI<T> {
  /**
   * getTeamTask
   */
  getTeamTask: GenericAPI<T, ModelAndView>;
}

export interface TaskTotalAPI<T> {
  /**
   * 查询新建任务基本信息
   */
  getTaskTotal: GenericAPI<T, {[key: string]: number}>;
}

export interface _12368TaskAPI<T> {
  /**
   * getTask
   */
  getTask: GenericAPI<T, Page<Quality>>;
  /**
   * 新增任务
   */
  addTask: GenericAPI<T, string>;
	team: TaskTeamAPI<T>;
	total: TaskTotalAPI<T>;
  /**
   * 删除质检任务
   */
  delTask: StringIdAPI<T, string>;
}

export interface Qc12368API<T> {
	index: _12368IndexAPI<T>;
	list: _12368ListAPI<T>;
	myQualifiedList: _12368MyQualifiedListAPI<T>;
	myQualityListMonitor: _12368MyQualityListMonitorAPI<T>;
	myQualityListNormal: _12368MyQualityListNormalAPI<T>;
	objectionHandle: _12368ObjectionHandleAPI<T>;
	qualityDetail: _12368QualityDetailAPI<T>;
	startQuality: _12368StartQualityAPI<T>;
	startQualityList: _12368StartQualityListAPI<T>;
	task: _12368TaskAPI<T>;
  /**
   * 保存质检评分
   */
  qcWorkOrder: GenericAPI<T, string>;
  /**
   * 删除质检工单
   */
  delWorkOrder: StringIdAPI<T, string>;
}

export interface _12368AddAPI<T> {
  /**
   * 新增质检小组
   */
  add: GenericAPI<T>;
}

export interface _12368AllAPI<T> {
  /**
   * 获取质检小组
   */
  getAll: GenericAPI<T, QualityGroup[]>;
}

export interface _12368DeleteAPI<T> {
  /**
   * 删除质检小组
   */
  delete: StringIdAPI<T>;
}

export interface _12368GetAPI<T> {
  /**
   * getOne
   */
  getOne: StringIdAPI<T>;
}

export interface Group12368ListAPI<T> {
  /**
   * 质检小组与任务列表
   */
  getAll: GenericAPI<T, SimplePage<QualityGroup>>;
}

export interface _12368MineAPI<T> {
  /**
   * getMyGroups
   */
  getMyGroups: GenericAPI<T, QualityGroup[]>;
}

export interface _12368UpdateAPI<T> {
  /**
   * 编辑质检小组
   */
  update: GenericAPI<T>;
}

export interface _12368UserlistAPI<T> {
  /**
   * 查询小组成员
   */
  getUserList: GenericAPI<T>;
}

export interface Group12368API<T> {
	add: _12368AddAPI<T>;
	all: _12368AllAPI<T>;
	delete: _12368DeleteAPI<T>;
	get: _12368GetAPI<T>;
	list: Group12368ListAPI<T>;
	mine: _12368MineAPI<T>;
	update: _12368UpdateAPI<T>;
	userlist: _12368UserlistAPI<T>;
}

export interface QcGroupAPI<T> {
	_12368: Group12368API<T>;
}

export interface Score12368GetAPI<T> {
  /**
   * getOne
   */
  getOne: StringIdAPI<T>;
}

export interface Score12368ListAPI<T> {
  /**
   * 查询评分标准列表
   */
  getAll: GenericAPI<T>;
}

export interface _12368SaveAPI<T> {
  /**
   * 修改/新增评分标准
   */
  add: StringIdAPI<T>;
}

export interface Score12368API<T> {
	get: Score12368GetAPI<T>;
	list: Score12368ListAPI<T>;
	save: _12368SaveAPI<T>;
}

export interface QcScoreAPI<T> {
	_12368: Score12368API<T>;
}

export interface AppsQcAPI<T> {
	_12368: Qc12368API<T>;
	group: QcGroupAPI<T>;
	score: QcScoreAPI<T>;
}

export interface BusinessWorkOrdersListAPI<T> {
  /**
   * getReportList
   */
  getReportList: GenericAPI<T, ModelAndView>;
}

export interface AppsBusinessAPI<T> {
	WorkOrdersList: BusinessWorkOrdersListAPI<T>;
}

export interface _12368AppsAPI<T> {
	business: AppsBusinessAPI<T>;
}

export interface ConsultListAPI<T> {
  /**
   * 查看工单诉讼咨询列表
   */
  getConsultList: GenericAPI<T, any>;
}

export interface ConsultSaveAPI<T> {
  /**
   * 新增工单诉讼咨询
   */
  saveConsultData: GenericAPI<T, any, Array<any>>;
}

export interface _12368ConsultAPI<T> {
	list: ConsultListAPI<T>;
	save: ConsultSaveAPI<T>;
  /**
   * 查看相关案例下不同级别诉讼列表
   */
  getConsultListByConsistenceId: StringIdAPI<T, any>;
}

export interface _12368ConsultdataAPI<T> {
  /**
   * 删除诉讼咨询列表
   */
  deleteConsultData: GenericAPI<T, any>;
}

export interface _12368DetailAPI<T> {
  /**
   * 获取详情页面
   */
  getDetailPage: GenericAPI<T, ModelAndView>;
}

export interface ExtraBatchAPI<T> {
  /**
   * 批量保存报告
   */
  batchSaveExtraData: GenericAPI<T, any, Array<any>>;
}

export interface ExtraSaveAPI<T> {
  /**
   * 保存工单额外数据，同时也是自动保存,全部提交
   */
  saveExtraData: GenericAPI<T, any>;
}

export interface _12368ExtraAPI<T> {
	batch: ExtraBatchAPI<T>;
	save: ExtraSaveAPI<T>;
  /**
   * 删除当事人
   */
  deleteExtraData: GenericAPI<T, string>;
}

export interface _12368FavAPI<T> {
  /**
   * 收藏工单或取消收藏工单
   */
  favorite: StringIdAPI<T, any>;
}

export interface _12368HistoryAPI<T> {
  /**
   * 获取历史工单页面
   */
  getHistoryPage: GenericAPI<T, ModelAndView>;
}

export interface Workorders12368ListAPI<T> {
  /**
   * 分页查询工单列表
   */
  getList: GenericAPI<T, SimplePage<NewWorkOrder>>;
}

export interface _12368MyordersAPI<T> {
  /**
   * 获取工单页面
   */
  getMyOrdersPage: GenericAPI<T, ModelAndView>;
}

export interface _12368PartiesAPI<T> {
  /**
   * 获取当事人
   */
  getParties: StringIdAPI<T, string[]>;
}

export interface PhoneMarkAPI<T> {
  /**
   * 更新工单来电类型
   */
  modifyState: GenericAPI<T, string>;
}

export interface _12368PhoneAPI<T> {
	mark: PhoneMarkAPI<T>;
}

export interface _12368PhonemarkAPI<T> {
  /**
   * 根据id获取工单的来电类型
   */
  getPhoneMark: StringIdAPI<T, string>;
}

export interface ReportAddAPI<T> {
  /**
   * 获取工单报告添加页面
   */
  getReportAddPage: GenericAPI<T, ModelAndView>;
}

export interface ReportConfirmAPI<T> {
  /**
   * 确认办结接口
   */
  confirmSuccess: StringIdAPI<T, string>;
}

export interface ReportDetailAPI<T> {
  /**
   * 获取报告详细信息页面
   */
  getReportDetailPage: GenericAPI<T, ModelAndView>;
}

export interface ReportGetMsgAPI<T> {
  /**
   * 获取消息列表
   */
  getWorkOrdersMsg: StringIdAPI<T, WorkordersMessage[]>;
}

export interface ReportHistoryAPI<T> {
  /**
   * getChangeHistory
   */
  getChangeHistory: StringIdAPI<T, Pair<WorkOrders, DataEvent[]>>;
}

export interface ReportJudgementAPI<T> {
  /**
   * 判断是否进行过提醒
   */
  judgeRemind: StringIdAPI<T, number>;
}

export interface ReportListAPI<T> {
  /**
   * 工单报告列表及高级搜索接口
   */
  getReportList: GenericAPI<T, SimplePage<WorkOrdersExtra>>;
}

export interface ReportManualAPI<T> {
  /**
   * 手动提醒办理
   */
  manualSend: GenericAPI<T>;
}

export interface ReportMyReportWorkOrdersAPI<T> {
  /**
   * 我的报告
   */
  workOrdersList: GenericAPI<T, SimplePage<WorkOrdersExtra>>;
}

export interface ReportRevertAPI<T> {
  /**
   * 撤回工单报告
   */
  revertReport: StringIdAPI<T, string>;
}

export interface ReportSendAPI<T> {
  /**
   * 回复消息接口
   */
  sendMsg: GenericAPI<T, string>;
}

export interface _12368ReportAPI<T> {
  /**
   * 获取报告页面
   */
  getReportPage: GenericAPI<T, ModelAndView>;
  /**
   * 新增工单报告
   */
  addReport: GenericAPI<T, string>;
	add: ReportAddAPI<T>;
	confirm: ReportConfirmAPI<T>;
	detail: ReportDetailAPI<T>;
	getMsg: ReportGetMsgAPI<T>;
	history: ReportHistoryAPI<T>;
	judgement: ReportJudgementAPI<T>;
	list: ReportListAPI<T>;
	manual: ReportManualAPI<T>;
	myReportWorkOrders: ReportMyReportWorkOrdersAPI<T>;
	revert: ReportRevertAPI<T>;
	send: ReportSendAPI<T>;
  /**
   * 获取工单报告
   */
  getReport: StringIdAPI<T, WorkOrdersExtra>;
  /**
   * 提交工单报告
   */
  editReport: GenericAPI<T>;
  /**
   * 删除工单报告
   */
  delReport: StringIdAPI<T, string>;
}

export interface _12368TodayWorkOrdersAPI<T> {
  /**
   * 今日工单
   */
  getTotalWorkOrders: GenericAPI<T, SimplePage<NewWorkOrder>>;
}

export interface UserCoOrganizerAPI<T> {
  /**
   * 获取协办人列表
   */
  getOrganizer: GenericAPI<T, Array<{[key: string]: string}>>;
}

export interface UserDeptAPI<T> {
  /**
   * getDeptList
   */
  getDeptList: GenericAPI<T, Organ[]>;
  /**
   * getDept
   */
  getDept: StringIdAPI<T, Organ>;
}

export interface UserDeptCascadeAPI<T> {
  /**
   * 查询组织
   */
  getDeptCascade: StringIdAPI<T, Organ[]>;
}

export interface UserJudgeAPI<T> {
  /**
   * 查询部门所属人员
   */
  getJudge: StringIdAPI<T, User[]>;
}

export interface UserNextAPI<T> {
  /**
   * getNextUser
   */
  getNextUser: GenericAPI<T, User[]>;
}

export interface _12368UserAPI<T> {
  /**
   * getUserList
   */
  getUserList: StringIdAPI<T, User[]>;
	coOrganizer: UserCoOrganizerAPI<T>;
	dept: UserDeptAPI<T>;
	deptCascade: UserDeptCascadeAPI<T>;
	judge: UserJudgeAPI<T>;
	next: UserNextAPI<T>;
  /**
   * getUser
   */
  getUser: StringIdAPI<T, User>;
}

export interface Workorders12368API<T> {
  /**
   * 新增工单接口
   */
  add: GenericAPI<T, string>;
	apps: _12368AppsAPI<T>;
	consult: _12368ConsultAPI<T>;
	consultdata: _12368ConsultdataAPI<T>;
	detail: _12368DetailAPI<T>;
  /**
   * 修改工单的类型，保存来电标识
   */
  edit: StringIdAPI<T, string>;
	extra: _12368ExtraAPI<T>;
	fav: _12368FavAPI<T>;
	history: _12368HistoryAPI<T>;
	list: Workorders12368ListAPI<T>;
	myorders: _12368MyordersAPI<T>;
	parties: _12368PartiesAPI<T>;
	phone: _12368PhoneAPI<T>;
	phonemark: _12368PhonemarkAPI<T>;
	report: _12368ReportAPI<T>;
	todayWorkOrders: _12368TodayWorkOrdersAPI<T>;
	user: _12368UserAPI<T>;
  /**
   * 工单详情
   */
  get: GenericAPI<T, NewWorkOrder>;
  /**
   * 删除工单
   */
  delete: StringIdAPI<T, string>;
}

export interface AppsWorkordersAPI<T> {
	_12368: Workorders12368API<T>;
}

export interface AppsAPI<T> {
	contacts: AppsContactsAPI<T>;
	qc: AppsQcAPI<T>;
	workorders: AppsWorkordersAPI<T>;
}

export interface CurrentUserAPI<T> {
  /**
   * 获取当前用户信息
   */
  index: GenericAPI<T, CurrentUserVO>;
}

export interface QueryCenterCaseDetailAPI<T> {
  /**
   * 最高院案件详情
   */
  caseDetail: GenericAPI<T>;
}

export interface QueryCenterCaseListAPI<T> {
  /**
   * 最高院案件查询列表页
   */
  caseList: StringIdAPI<T, any>;
}

export interface QueryCenterCaseQueryDetailAPI<T> {
  /**
   * 最高院案件查询
   */
  caseQueryDetail: GenericAPI<T>;
}

export interface QueryCenterCaseQueryDetailNationalAPI<T> {
  /**
   * 全国案件查询
   */
  caseQueryDetailNational: GenericAPI<T>;
}

export interface QueryCenterCaseReserveByCbhAPI<T> {
  /**
   * 立案预约详情
   */
  caseReserveByCbh: GenericAPI<T, any>;
}

export interface QueryCenterCaseReserveDetailAPI<T> {
  /**
   * 立案预约
   */
  caseReserveDetail: GenericAPI<T>;
}

export interface QueryCenterClearCacheAPI<T> {
  /**
   * clearCache
   */
  clearCache: GenericAPI<T>;
}

export interface QueryCenterExecutionInfoAPI<T> {
  /**
   * 执行查询
   */
  executionInfo: GenericAPI<T>;
}

export interface QueryCenterLetterAndVisitDetailAPI<T> {
  /**
   * 信访查询详情
   */
  letterAndVisitDetail: GenericAPI<T>;
}

export interface QueryCenterLetterAndVisitListAPI<T> {
  /**
   * 信访查询列表
   */
  letterAndVisitList: GenericAPI<T>;
}

export interface LimiterLogAPI<T> {
  /**
   * getLimiterLogs
   */
  getLimiterLogs: GenericAPI<T>;
}

export interface LimiterSettingsAPI<T> {
  /**
   * limiterSetting
   */
  limiterSetting: GenericAPI<T, QueryLimiterSetting[]>;
}

export interface QueryCenterLimiterAPI<T> {
	log: LimiterLogAPI<T>;
	settings: LimiterSettingsAPI<T>;
  /**
   * editMaxRequestCount
   */
  editMaxRequestCount: GenericAPI<T>;
}

export interface QueryCenterQueryCenterFileAPI<T> {
  /**
   * reservationLoanFile
   */
  reservationLoanFile: StringIdAPI<T>;
}

export interface QueryCenterReservationLoanAPI<T> {
  /**
   * 预约借卷
   */
  reservationLoan: GenericAPI<T>;
}

export interface QueryCenterAPI<T> {
	caseDetail: QueryCenterCaseDetailAPI<T>;
	caseList: QueryCenterCaseListAPI<T>;
	caseQueryDetail: QueryCenterCaseQueryDetailAPI<T>;
	caseQueryDetailNational: QueryCenterCaseQueryDetailNationalAPI<T>;
	caseReserveByCbh: QueryCenterCaseReserveByCbhAPI<T>;
	caseReserveDetail: QueryCenterCaseReserveDetailAPI<T>;
	clearCache: QueryCenterClearCacheAPI<T>;
	executionInfo: QueryCenterExecutionInfoAPI<T>;
	letterAndVisitDetail: QueryCenterLetterAndVisitDetailAPI<T>;
	letterAndVisitList: QueryCenterLetterAndVisitListAPI<T>;
	limiter: QueryCenterLimiterAPI<T>;
	queryCenterFile: QueryCenterQueryCenterFileAPI<T>;
	reservationLoan: QueryCenterReservationLoanAPI<T>;
}

export interface CallMonitorAPI<T> {
  /**
   * 监控语音网关状态
   */
  monitor: GenericAPI<T, RestResult>;
}

export interface RestCallAPI<T> {
	monitor: CallMonitorAPI<T>;
}

export interface RestWebimAgentAPI<T> {
  /**
   * 获取在线客服会话历史消息
   */
  agent: GenericAPI<T, RestResult>;
}

export interface WebimHostAPI<T> {
  /**
   * 拦截请求
   */
  host: GenericAPI<T>;
}

export interface WebimMessageUnusefulAPI<T> {
  /**
   * 获取满意度调查
   */
  unuseful: GenericAPI<T, RestResult>;
}

export interface WebimMessageUsefulAPI<T> {
  /**
   * 获取满意度调查
   */
  useful: GenericAPI<T, RestResult>;
}

export interface RestWebimMessageAPI<T> {
	unuseful: WebimMessageUnusefulAPI<T>;
	useful: WebimMessageUsefulAPI<T>;
}

export interface RestWebimAPI<T> {
	agent: RestWebimAgentAPI<T>;
	host: WebimHostAPI<T>;
	message: RestWebimMessageAPI<T>;
}

export interface RestAPI<T> {
	call: RestCallAPI<T>;
	webim: RestWebimAPI<T>;
}

export interface SessionAPI<T> {
  /**
   * 登录服务，传入登录账号和密码
   */
  session: GenericAPI<T>;
}

export interface TokensErrorAPI<T> {
  /**
   * error
   */
  error: GenericAPI<T, ResponseEntity>;
}

export interface TokensAPI<T> {
  /**
   * user
   */
  user: GenericAPI<T, ResponseEntity>;
  /**
   * 登录服务，传入登录账号和密码
   */
  login: GenericAPI<T, ResponseEntity>;
  /**
   * logout
   */
  logout: StringIdAPI<T, ResponseEntity>;
	error: TokensErrorAPI<T>;
}

export interface ExtentionDetailAPI<T> {
  /**
   * 分机登录接口
   */
  detail: GenericAPI<T>;
}

export interface CallcenterExtentionAPI<T> {
	detail: ExtentionDetailAPI<T>;
}

export interface AppsCallcenterAPI<T> {
	extention: CallcenterExtentionAPI<T>;
}

export interface OrganizationListAPI<T> {
  /**
   * 分页获取组织列表
   */
  list: GenericAPI<T, {[key: string]: any[]}>;
}

export interface AppsOrganizationAPI<T> {
  /**
   * 添加组织信息
   */
  save: GenericAPI<T, any>;
  /**
   * 更新组织信息
   */
  update: GenericAPI<T, any>;
	list: OrganizationListAPI<T>;
  /**
   * 获取组织信息
   */
  get: StringIdAPI<T, Organization>;
  /**
   * 删除组织
   */
  delete: StringIdAPI<T, any>;
}

export interface WorkordersAddAPI<T> {
  /**
   * 查询新建工单基础数据
   */
  add: GenericAPI<T, {[key: string]: any}>;
}

export interface ClosedSaveAPI<T> {
  /**
   * closedSave
   */
  closedSave: GenericAPI<T, ModelAndView>;
}

export interface AppsWorkordersClosedAPI<T> {
  /**
   * closedorders
   */
  closedorders: GenericAPI<T, ModelAndView>;
	save: ClosedSaveAPI<T>;
}

export interface WorkordersCommentsAPI<T> {
  /**
   * 获取工单评论
   */
  comments: GenericAPI<T, {[key: string]: any}>;
}

export interface WorkordersCountDataAPI<T> {
  /**
   * 获取工单数量统计数据
   */
  countData: GenericAPI<T, CountData>;
}

export interface DeptUserAPI<T> {
  /**
   * add
   */
  add: GenericAPI<T, {[key: string]: any}>;
}

export interface WorkordersDeptAPI<T> {
	user: DeptUserAPI<T>;
}

export interface DetailCommentsAPI<T> {
  /**
   * 获取工单详细评论
   */
  detailComments: GenericAPI<T, ModelAndView>;
}

export interface DetailDataeventAPI<T> {
  /**
   * dataEvent
   */
  dataEvent: GenericAPI<T, ModelAndView>;
}

export interface AppsWorkordersDetailAPI<T> {
	comments: DetailCommentsAPI<T>;
	dataevent: DetailDataeventAPI<T>;
  /**
   * 获取工单详情
   */
  detail: StringIdAPI<T, {[key: string]: any}>;
}

export interface WorkordersEditAPI<T> {
  /**
   * edit
   */
  edit: GenericAPI<T, ModelAndView>;
}

export interface EmbedAddAPI<T> {
  /**
   * embedadd
   */
  embedadd: GenericAPI<T, ModelAndView>;
}

export interface EmbedSaveAPI<T> {
  /**
   * embedsave
   */
  embedsave: GenericAPI<T, ModelAndView>;
}

export interface WorkordersEmbedAPI<T> {
	add: EmbedAddAPI<T>;
	save: EmbedSaveAPI<T>;
}

export interface FieldByTypeAPI<T> {
  /**
   * byType
   */
  byType: StringIdAPI<T, WorkordersExtraField[]>;
}

export interface ExtraFieldAPI<T> {
	byType: FieldByTypeAPI<T>;
}

export interface WorkordersExtraAPI<T> {
	field: ExtraFieldAPI<T>;
}

export interface FavOrderAPI<T> {
  /**
   * favorder
   */
  favorder: GenericAPI<T, ModelAndView>;
}

export interface WorkordersFavAPI<T> {
	order: FavOrderAPI<T>;
}

export interface FavoritesSaveAPI<T> {
  /**
   * favoritesSave
   */
  favoritesSave: GenericAPI<T, ModelAndView>;
}

export interface AppsWorkordersFavoritesAPI<T> {
  /**
   * favorites
   */
  favorites: GenericAPI<T, ModelAndView>;
	save: FavoritesSaveAPI<T>;
}

export interface FilesDeleteAPI<T> {
  /**
   * filesdelete
   */
  filesdelete: GenericAPI<T, ModelAndView>;
}

export interface WorkordersFilesAPI<T> {
	delete: FilesDeleteAPI<T>;
}

export interface WorkordersIndexAPI<T> {
  /**
   * index
   */
  index: GenericAPI<T, ModelAndView>;
}

export interface MyordersSaveAPI<T> {
  /**
   * myorderssave
   */
  myorderssave: GenericAPI<T, ModelAndView>;
}

export interface WorkordersMyordersAPI<T> {
  /**
   * myOrders
   */
  myOrders: GenericAPI<T, {[key: string]: any}>;
	save: MyordersSaveAPI<T>;
}

export interface NotassignedProcessAPI<T> {
  /**
   * notassignedprocess
   */
  notassignedprocess: GenericAPI<T, ModelAndView>;
}

export interface WorkordersNotassignedAPI<T> {
  /**
   * notassigned
   */
  notassigned: GenericAPI<T, ModelAndView>;
	process: NotassignedProcessAPI<T>;
}

export interface WorkordersPagesAPI<T> {
  /**
   * pages
   */
  pages: GenericAPI<T, ModelAndView>;
}

export interface WorkordersSaveAPI<T> {
  /**
   * save
   */
  save: GenericAPI<T, ModelAndView>;
}

export interface UpdateAllAPI<T> {
  /**
   * updateall
   */
  updateall: GenericAPI<T, ModelAndView>;
}

export interface WorkordersUpdateAPI<T> {
	all: UpdateAllAPI<T>;
}

export interface WorkordersUploadAPI<T> {
  /**
   * upload
   */
  upload: GenericAPI<T, ModelAndView>;
}

export interface WorkflowApprovalAPI<T> {
  /**
   * workflowapproval
   */
  workflowapproval: GenericAPI<T, ModelAndView>;
}

export interface WorkflowDetailAPI<T> {
  /**
   * workflowdetail
   */
  workflowdetail: GenericAPI<T, {[key: string]: any}>;
}

export interface WorkflowProcessAPI<T> {
  /**
   * workflowprocess
   */
  workflowprocess: GenericAPI<T, ModelAndView>;
}

export interface WorkflowSaveAPI<T> {
  /**
   * 工单流程保存
   */
  workflowsave: GenericAPI<T, ModelAndView>;
}

export interface WorkordersWorkflowAPI<T> {
  /**
   * workitem
   */
  workitem: GenericAPI<T, ModelAndView>;
	approval: WorkflowApprovalAPI<T>;
	detail: WorkflowDetailAPI<T>;
	process: WorkflowProcessAPI<T>;
	save: WorkflowSaveAPI<T>;
}

export interface WorkitemProcessAPI<T> {
  /**
   * workitemprocess
   */
  workitemprocess: GenericAPI<T, ModelAndView>;
}

export interface AppsWorkordersWorkitemAPI<T> {
  /**
   * workitem
   */
  workitem: GenericAPI<T, ModelAndView>;
	process: WorkitemProcessAPI<T>;
}

export interface ApiAppsWorkordersAPI<T> {
  /**
   * 删除工单
   */
  delete: GenericAPI<T, any>;
	add: WorkordersAddAPI<T>;
	closed: AppsWorkordersClosedAPI<T>;
	comments: WorkordersCommentsAPI<T>;
	countData: WorkordersCountDataAPI<T>;
	dept: WorkordersDeptAPI<T>;
	detail: AppsWorkordersDetailAPI<T>;
	edit: WorkordersEditAPI<T>;
	embed: WorkordersEmbedAPI<T>;
	extra: WorkordersExtraAPI<T>;
	fav: WorkordersFavAPI<T>;
	favorites: AppsWorkordersFavoritesAPI<T>;
	files: WorkordersFilesAPI<T>;
	index: WorkordersIndexAPI<T>;
	myorders: WorkordersMyordersAPI<T>;
	notassigned: WorkordersNotassignedAPI<T>;
	pages: WorkordersPagesAPI<T>;
	save: WorkordersSaveAPI<T>;
	update: WorkordersUpdateAPI<T>;
	upload: WorkordersUploadAPI<T>;
	workflow: WorkordersWorkflowAPI<T>;
	workitem: AppsWorkordersWorkitemAPI<T>;
}

export interface ApiAppsAPI<T> {
	callcenter: AppsCallcenterAPI<T>;
	organization: AppsOrganizationAPI<T>;
	workorders: ApiAppsWorkordersAPI<T>;
}

export interface SysdicByTypeAPI<T> {
  /**
   * 根据字典编码获取字典数据
   */
  byType: StringIdAPI<T, SysDic[]>;
}

export interface SysdicByTypesAPI<T> {
  /**
   * 根据编码获取多个字典数据
   */
  byTypes: GenericAPI<T, Array<SysDic[]>, Array<any>>;
}

export interface V5ApiSysdicAPI<T> {
	byType: SysdicByTypeAPI<T>;
	byTypes: SysdicByTypesAPI<T>;
}

export interface V5ApiAPI<T> {
	apps: ApiAppsAPI<T>;
	sysdic: V5ApiSysdicAPI<T>;
}

export interface V5API<T> {
	api: V5ApiAPI<T>;
}
