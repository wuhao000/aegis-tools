import {GenericAPI, StringIdAPI, NumberIdAPI} from 'aegis-api-proxy';
import {
  AgentService,
	AgentStatus,
	CallCenterAgent,
	Contacts,
	CountData,
	DependCondition,
	Extention,
	ModelAndView,
	Organization,
	Page,
	QueryParams,
	ResponseEntity,
	RestResult,
	Role,
	Type,
	User,
	View,
	WorkordersExtraField
} from './api-beans';

interface GeneratedApis<T> {
	admin: AdminAPI<T>;
	ai: AiAPI<T>;
	api: ApiAPI<T>;
	apiFakeData: ApiFakeDataAPI<T>;
	apps: AppsAPI<T>;
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
  list: GenericAPI<T>;
}

export interface AdminAPI<T> {
	user: AdminUserAPI<T>;
}

export interface AiXiaoeAPI<T> {
  /**
   * 获取对话内容
   */
  chat: GenericAPI<T>;
}

export interface AiAPI<T> {
	xiaoe: AiXiaoeAPI<T>;
}

export interface ApiAgentuserAPI<T> {
  /**
   * 获取当前正在对话的访客信息，包含多种渠道来源的访客
   */
  list: GenericAPI<T>;
}

export interface ApiChatmessageAPI<T> {
  /**
   * 获取访客对话内容
   */
  list: GenericAPI<T>;
}

export interface ApiContactsAPI<T> {
  /**
   * 返回联系人列表，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T>;
  /**
   * 新增或修改联系人，联系人部分字段是字典选项，请从字典接口获取数据
   */
  put: GenericAPI<T>;
  /**
   * 删除联系人，联系人删除是逻辑删除，将 datastatus字段标记为 true，即已删除
   */
  delete: GenericAPI<T>;
}

export interface LeavemsgListAPI<T> {
  /**
   * 获取留言列表
   */
  list: GenericAPI<T>;
}

export interface ApiLeavemsgAPI<T> {
	list: LeavemsgListAPI<T>;
}

export interface OnlineUserAPI<T> {
  /**
   * 获取在线客服
   */
  list: GenericAPI<T>;
}

export interface ApiOnlineAPI<T> {
	user: OnlineUserAPI<T>;
}

export interface ApiOrganAPI<T> {
  /**
   * 返回所有部门
   */
  list: GenericAPI<T>;
  /**
   * 新增或修改部门
   */
  put: GenericAPI<T>;
  /**
   * 删除机构，只提供 按照用户ID删除
   */
  delete: GenericAPI<T>;
}

export interface ApiQualityAPI<T> {
  /**
   * 获取质检列表
   */
  list: GenericAPI<T>;
}

export interface ApiQuickreplyAPI<T> {
  /**
   * 返回快捷回复列表，cate为分类id，通过/api/quicktype 获取分类id，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T>;
  /**
   * 新增或修改快捷回复
   */
  put: GenericAPI<T>;
  /**
   * 根据id删除快捷回复
   */
  delete: GenericAPI<T>;
}

export interface ApiQuicktypeAPI<T> {
  /**
   * 返回快捷回复分类
   */
  list: GenericAPI<T>;
  /**
   * 新增或修改快捷回复
   */
  put: GenericAPI<T>;
  /**
   * 删除快捷回复分类,并且删除分类下的快捷回复
   */
  delete: GenericAPI<T>;
}

export interface ApiServicequeneAPI<T> {
  /**
   * 获取队列统计信息，包含当前队列服务中的访客数，排队人数，坐席数
   */
  list: GenericAPI<T>;
  /**
   * 坐席状态操作，就绪、未就绪、忙
   */
  agentStatus: GenericAPI<T>;
}

export interface ApiSysdicAPI<T> {
  /**
   * 获取在线客服
   */
  list: GenericAPI<T>;
}

export interface ApiTagsAPI<T> {
  /**
   * 按照分类获取标签列表，Type 参数类型来自于 枚举，可选值目前有三个 ： user  workorders summary
   */
  list: GenericAPI<T>;
}

export interface ApiUserAPI<T> {
  /**
   * 返回用户列表，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T>;
  /**
   * 新增或修改用户用户 ，在修改用户信息的时候，如果用户 密码未改变，请设置为 NULL
   */
  put: GenericAPI<T>;
  /**
   * 删除用户，只提供 按照用户ID删除 ， 并且，不能删除系统管理员
   */
  delete: GenericAPI<T>;
}

export interface WebimAgentAPI<T> {
  /**
   * 获取在线客服会话历史消息
   */
  agent: GenericAPI<T>;
}

export interface WebimAiAPI<T> {
  /**
   * 获取在线客服会话ID
   */
  session: GenericAPI<T>;
}

export interface ChatHisAPI<T> {
  /**
   * 获取在线客服会话历史消息
   */
  history: GenericAPI<T>;
}

export interface WebimChatAPI<T> {
	his: ChatHisAPI<T>;
}

export interface WebimHotAPI<T> {
  /**
   * 获取推荐知识
   */
  hot: GenericAPI<T>;
}

export interface ImageUploadAPI<T> {
  /**
   * upload
   */
  upload: GenericAPI<T>;
}

export interface WebimImageAPI<T> {
	upload: ImageUploadAPI<T>;
}

export interface LeavemsgSaveAPI<T> {
  /**
   * 保存留言功能
   */
  leavemsg: GenericAPI<T>;
}

export interface WebimLeavemsgAPI<T> {
	save: LeavemsgSaveAPI<T>;
}

export interface MessageUnusefulAPI<T> {
  /**
   * 获取满意度调查
   */
  unuseful: GenericAPI<T>;
}

export interface MessageUsefulAPI<T> {
  /**
   * 获取满意度调查
   */
  useful: GenericAPI<T>;
}

export interface WebimMessageAPI<T> {
	unuseful: MessageUnusefulAPI<T>;
	useful: MessageUsefulAPI<T>;
}

export interface WebimQueryAPI<T> {
  /**
   * 获取推荐知识
   */
  query: GenericAPI<T>;
}

export interface SatisSaveAPI<T> {
  /**
   * 获取满意度调查
   */
  satissave: GenericAPI<T>;
}

export interface WebimSatisAPI<T> {
  /**
   * 获取满意度调查
   */
  satis: GenericAPI<T>;
	save: SatisSaveAPI<T>;
}

export interface WebimSessionAPI<T> {
  /**
   * 获取在线客服会话ID
   */
  session: GenericAPI<T>;
}

export interface SuggestMobileAPI<T> {
  /**
   * mobilesuggest
   */
  mobilesuggest: GenericAPI<T>;
}

export interface WebimSuggestAPI<T> {
	mobile: SuggestMobileAPI<T>;
}

export interface WebimUrlAPI<T> {
  /**
   * 获取图片和语音信息资源的访问URL地址信息
   */
  url: GenericAPI<T>;
}

export interface ApiWebimAPI<T> {
  /**
   * 获取在线客服
   */
  list: StringIdAPI<T>;
  /**
   * 修改在线客服信息，只提供修改操作
   */
  put: GenericAPI<T>;
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
  list: GenericAPI<T>;
}

export interface WorkordersClosedAPI<T> {
  /**
   * 返回所有已关闭的工单列表
   */
  list: GenericAPI<T>;
}

export interface WorkordersCommentAPI<T> {
  /**
   * 回复工单
   */
  list: GenericAPI<T>;
}

export interface WorkordersContactsAPI<T> {
  /**
   * 返回联系人的工单列表，联系人ID不能为空
   */
  list: GenericAPI<T>;
}

export interface WorkordersDetailAPI<T> {
  /**
   * 返回所有已关闭的工单列表
   */
  list: GenericAPI<T>;
}

export interface WorkordersFavoritesAPI<T> {
  /**
   * 返回我的关注的工单列表
   */
  list: GenericAPI<T>;
}

export interface WorkordersProcessAPI<T> {
  /**
   * 回复工单
   */
  list: GenericAPI<T>;
}

export interface WorkordersWorkitemAPI<T> {
  /**
   * 返回我的待办工单列表
   */
  list: GenericAPI<T>;
}

export interface ApiWorkordersAPI<T> {
  /**
   * 返回我创建的工单
   */
  list: GenericAPI<T>;
  /**
   * 新建工单，自动分配工单编号
   */
  put: GenericAPI<T>;
  /**
   * 删除工单，只提供 按照工单ID删除 ， 工单删除是逻辑删除，将该条数据标记为已删除
   */
  delete: GenericAPI<T>;
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
  list: GenericAPI<T>;
  /**
   * 新增/编辑知识分类
   */
  put: GenericAPI<T>;
  /**
   * 删除知识库分类
   */
  delete: GenericAPI<T>;
}

export interface TopicDetailAPI<T> {
  /**
   * 返回单条知识库条目
   */
  list: GenericAPI<T>;
}

export interface XiaoeTopicAPI<T> {
  /**
   * 返回知识库列表，支持分页，分页参数为 p=1&ps=50，默认分页尺寸为 20条每页
   */
  list: GenericAPI<T>;
  /**
   * 新增/编辑知识内容
   */
  put: GenericAPI<T>;
  /**
   * 删除知识库内容
   */
  delete: GenericAPI<T>;
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
  appointmentReviewList: GenericAPI<T>;
}

export interface ApiFakeDataCaseQueryListAPI<T> {
  /**
   * 案件查询
   */
  caseQueryList: GenericAPI<T>;
}

export interface ApiFakeDataCaseReserveQueryListAPI<T> {
  /**
   * 预约立案
   */
  caseReserveQueryList: GenericAPI<T>;
}

export interface ApiFakeDataExecutionInfoListAPI<T> {
  /**
   * 执行查询
   */
  executionInfo: GenericAPI<T>;
}

export interface ApiFakeDataLitigationConsultationAPI<T> {
  /**
   * 诉讼咨询
   */
  litigationConsultation: StringIdAPI<T>;
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
  getByMobile: StringIdAPI<T>;
}

export interface ContactsUuidAPI<T> {
  /**
   * 生成uuid
   */
  getUUID: GenericAPI<T>;
}

export interface AppsContactsAPI<T> {
	byMobile: ContactsByMobileAPI<T>;
	uuid: ContactsUuidAPI<T>;
  /**
   * 根据id获取联系人详情
   */
  get: StringIdAPI<T>;
}

export interface AppsAPI<T> {
	contacts: AppsContactsAPI<T>;
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
  caseList: GenericAPI<T>;
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
  caseReserveByCbh: StringIdAPI<T>;
}

export interface QueryCenterCaseReserveDetailAPI<T> {
  /**
   * 立案预约
   */
  caseReserveDetail: GenericAPI<T>;
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
	executionInfo: QueryCenterExecutionInfoAPI<T>;
	letterAndVisitDetail: QueryCenterLetterAndVisitDetailAPI<T>;
	letterAndVisitList: QueryCenterLetterAndVisitListAPI<T>;
	queryCenterFile: QueryCenterQueryCenterFileAPI<T>;
	reservationLoan: QueryCenterReservationLoanAPI<T>;
}

export interface CallMonitorAPI<T> {
  /**
   * 监控语音网关状态
   */
  monitor: GenericAPI<T>;
}

export interface RestCallAPI<T> {
	monitor: CallMonitorAPI<T>;
}

export interface WebimAgentAPI<T> {
  /**
   * 获取在线客服会话历史消息
   */
  agent: GenericAPI<T>;
}

export interface WebimHostAPI<T> {
  /**
   * 拦截请求
   */
  host: GenericAPI<T>;
}

export interface MessageUnusefulAPI<T> {
  /**
   * 获取满意度调查
   */
  unuseful: GenericAPI<T>;
}

export interface MessageUsefulAPI<T> {
  /**
   * 获取满意度调查
   */
  useful: GenericAPI<T>;
}

export interface WebimMessageAPI<T> {
	unuseful: MessageUnusefulAPI<T>;
	useful: MessageUsefulAPI<T>;
}

export interface RestWebimAPI<T> {
	agent: WebimAgentAPI<T>;
	host: WebimHostAPI<T>;
	message: WebimMessageAPI<T>;
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
  error: GenericAPI<T>;
}

export interface TokensAPI<T> {
  /**
   * user
   */
  user: GenericAPI<T>;
  /**
   * 登录服务，传入登录账号和密码
   */
  login: GenericAPI<T>;
  /**
   * logout
   */
  logout: StringIdAPI<T>;
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
  list: GenericAPI<T>;
}

export interface AppsOrganizationAPI<T> {
  /**
   * 添加组织信息
   */
  save: GenericAPI<T>;
  /**
   * 更新组织信息
   */
  update: GenericAPI<T>;
	list: OrganizationListAPI<T>;
  /**
   * 获取组织信息
   */
  get: StringIdAPI<T>;
  /**
   * 删除组织
   */
  delete: StringIdAPI<T>;
}

export interface WorkordersAddAPI<T> {
  /**
   * 查询新建工单基础数据
   */
  add: GenericAPI<T>;
}

export interface ClosedSaveAPI<T> {
  /**
   * closedSave
   */
  closedSave: GenericAPI<T>;
}

export interface WorkordersClosedAPI<T> {
  /**
   * closedorders
   */
  closedorders: GenericAPI<T>;
	save: ClosedSaveAPI<T>;
}

export interface WorkordersCommentsAPI<T> {
  /**
   * 获取工单评论
   */
  comments: GenericAPI<T>;
}

export interface WorkordersCountDataAPI<T> {
  /**
   * 获取工单数量统计数据
   */
  countData: GenericAPI<T>;
}

export interface DeptUserAPI<T> {
  /**
   * add
   */
  add: GenericAPI<T>;
}

export interface WorkordersDeptAPI<T> {
	user: DeptUserAPI<T>;
}

export interface DetailCommentsAPI<T> {
  /**
   * 获取工单详细评论
   */
  detailComments: GenericAPI<T>;
}

export interface DetailDataeventAPI<T> {
  /**
   * dataEvent
   */
  dataEvent: GenericAPI<T>;
}

export interface WorkordersDetailAPI<T> {
	comments: DetailCommentsAPI<T>;
	dataevent: DetailDataeventAPI<T>;
  /**
   * 获取工单详情
   */
  detail: StringIdAPI<T>;
}

export interface WorkordersEditAPI<T> {
  /**
   * edit
   */
  edit: GenericAPI<T>;
}

export interface EmbedAddAPI<T> {
  /**
   * embedadd
   */
  embedadd: GenericAPI<T>;
}

export interface EmbedSaveAPI<T> {
  /**
   * embedsave
   */
  embedsave: GenericAPI<T>;
}

export interface WorkordersEmbedAPI<T> {
	add: EmbedAddAPI<T>;
	save: EmbedSaveAPI<T>;
}

export interface FieldByTypeAPI<T> {
  /**
   * byType
   */
  byType: StringIdAPI<T>;
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
  favorder: GenericAPI<T>;
}

export interface WorkordersFavAPI<T> {
	order: FavOrderAPI<T>;
}

export interface FavoritesSaveAPI<T> {
  /**
   * favoritesSave
   */
  favoritesSave: GenericAPI<T>;
}

export interface WorkordersFavoritesAPI<T> {
  /**
   * favorites
   */
  favorites: GenericAPI<T>;
	save: FavoritesSaveAPI<T>;
}

export interface FilesDeleteAPI<T> {
  /**
   * filesdelete
   */
  filesdelete: GenericAPI<T>;
}

export interface WorkordersFilesAPI<T> {
	delete: FilesDeleteAPI<T>;
}

export interface WorkordersIndexAPI<T> {
  /**
   * index
   */
  index: GenericAPI<T>;
}

export interface MyordersSaveAPI<T> {
  /**
   * myorderssave
   */
  myorderssave: GenericAPI<T>;
}

export interface WorkordersMyordersAPI<T> {
  /**
   * myOrders
   */
  myOrders: GenericAPI<T>;
	save: MyordersSaveAPI<T>;
}

export interface NotassignedProcessAPI<T> {
  /**
   * notassignedprocess
   */
  notassignedprocess: GenericAPI<T>;
}

export interface WorkordersNotassignedAPI<T> {
  /**
   * notassigned
   */
  notassigned: GenericAPI<T>;
	process: NotassignedProcessAPI<T>;
}

export interface WorkordersPagesAPI<T> {
  /**
   * pages
   */
  pages: GenericAPI<T>;
}

export interface WorkordersSaveAPI<T> {
  /**
   * save
   */
  save: GenericAPI<T>;
}

export interface UpdateAllAPI<T> {
  /**
   * updateall
   */
  updateall: GenericAPI<T>;
}

export interface WorkordersUpdateAPI<T> {
	all: UpdateAllAPI<T>;
}

export interface WorkordersUploadAPI<T> {
  /**
   * upload
   */
  upload: GenericAPI<T>;
}

export interface WorkflowApprovalAPI<T> {
  /**
   * workflowapproval
   */
  workflowapproval: GenericAPI<T>;
}

export interface WorkflowDetailAPI<T> {
  /**
   * workflowdetail
   */
  workflowdetail: GenericAPI<T>;
}

export interface WorkflowProcessAPI<T> {
  /**
   * workflowprocess
   */
  workflowprocess: GenericAPI<T>;
}

export interface WorkflowSaveAPI<T> {
  /**
   * workflowsave
   */
  workflowsave: GenericAPI<T>;
}

export interface WorkordersWorkflowAPI<T> {
  /**
   * workitem
   */
  workitem: GenericAPI<T>;
	approval: WorkflowApprovalAPI<T>;
	detail: WorkflowDetailAPI<T>;
	process: WorkflowProcessAPI<T>;
	save: WorkflowSaveAPI<T>;
}

export interface WorkitemProcessAPI<T> {
  /**
   * workitemprocess
   */
  workitemprocess: GenericAPI<T>;
}

export interface WorkordersWorkitemAPI<T> {
  /**
   * workitem
   */
  workitem: GenericAPI<T>;
	process: WorkitemProcessAPI<T>;
}

export interface AppsWorkordersAPI<T> {
  /**
   * 删除工单
   */
  delete: GenericAPI<T>;
	add: WorkordersAddAPI<T>;
	closed: WorkordersClosedAPI<T>;
	comments: WorkordersCommentsAPI<T>;
	countData: WorkordersCountDataAPI<T>;
	dept: WorkordersDeptAPI<T>;
	detail: WorkordersDetailAPI<T>;
	edit: WorkordersEditAPI<T>;
	embed: WorkordersEmbedAPI<T>;
	extra: WorkordersExtraAPI<T>;
	fav: WorkordersFavAPI<T>;
	favorites: WorkordersFavoritesAPI<T>;
	files: WorkordersFilesAPI<T>;
	index: WorkordersIndexAPI<T>;
	myorders: WorkordersMyordersAPI<T>;
	notassigned: WorkordersNotassignedAPI<T>;
	pages: WorkordersPagesAPI<T>;
	save: WorkordersSaveAPI<T>;
	update: WorkordersUpdateAPI<T>;
	upload: WorkordersUploadAPI<T>;
	workflow: WorkordersWorkflowAPI<T>;
	workitem: WorkordersWorkitemAPI<T>;
}

export interface ApiAppsAPI<T> {
	callcenter: AppsCallcenterAPI<T>;
	organization: AppsOrganizationAPI<T>;
	workorders: AppsWorkordersAPI<T>;
}

export interface V5ApiAPI<T> {
	apps: ApiAppsAPI<T>;
}

export interface V5API<T> {
	api: V5ApiAPI<T>;
}
