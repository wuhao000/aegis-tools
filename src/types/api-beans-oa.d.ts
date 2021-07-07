export type ApprovalEventLeaveType = 'Absence'
    | 'Annual'
    | 'Funeral'
    | 'Ill'
    | 'Marriage'
    | 'Maternity'
    | 'Other'
    | 'Paternity'
    | 'ProductionInspection'
    | 'Vacation';

export type ApprovalEventType = 'Annual'
    | 'GoOut'
    | 'Leave'
    | 'OvertimeWork'
    | 'SupplyCheckIn'
    | 'Travel';

export type BaseFlowActionType = 'ChangeData'
    | 'ChangeOwner'
    | 'CorpWechatNotice'
    | 'EmailNotice'
    | 'SmsNotice'
    | 'TriggerBusinessFlow';

/**
 * 比较的类型
 */
export type BranchConditionReqCompareType = 'Eq'
    | 'Ge'
    | 'Gt'
    | 'Include'
    | 'Le'
    | 'Lt'
    | 'Ne'
    | 'NotInclude'
    | 'NotNull'
    | 'Null';

export type BusinessEntityDataLogOperationType = 'AddMember'
    | 'ChangeMemberRole'
    | 'ChangeOwner'
    | 'Close'
    | 'Delete'
    | 'Execute'
    | 'Export'
    | 'Import'
    | 'Open'
    | 'Other'
    | 'Query'
    | 'Reject'
    | 'Save'
    | 'Update';

export type BusinessEntityLayoutType = 'detail'
    | 'edit'
    | 'export'
    | 'list';

export type BusinessEntityPropertyDataType = 'area'
    | 'avatar'
    | 'boolean'
    | 'calculate'
    | 'city'
    | 'date'
    | 'datetime'
    | 'dic'
    | 'double'
    | 'email'
    | 'file'
    | 'html'
    | 'integer'
    | 'json'
    | 'password'
    | 'phone'
    | 'picture'
    | 'province'
    | 'related'
    | 'string'
    | 'text'
    | 'url';

export type BusinessEntityRoleAuthorityAuthority = 'CHANGE_OWNED_DEPARTMENT'
    | 'CHANGE_OWNER'
    | 'CREATE'
    | 'DELETE'
    | 'EXPORT'
    | 'FILE_DELETE'
    | 'FILE_DOWNLOAD'
    | 'FILE_UPLOAD'
    | 'GET_DETAIL'
    | 'GET_LIST'
    | 'IMPORT'
    | 'MEMBER_ADD'
    | 'MEMBER_MODIFY'
    | 'MEMBER_REMOVE'
    | 'MODIFY';

/**
 * 统计图类型
 */
export type BusinessEntityStatisticsDefinitionChartType = 'Bar'
    | 'Funnel'
    | 'Gauge'
    | 'Line'
    | 'Map'
    | 'Pie'
    | 'Radar'
    | 'Table';

export type BusinessWorkflowTriggerAction = 'Add'
    | 'Delete'
    | 'Modify'
    | 'Schedule';

export type CheckInDescriptionCheckInType = 'GoOut'
    | 'OffWork'
    | 'ToWork';

export type CollectType = 'avg'
    | 'sum';

export type CommentType = 'Agree'
    | 'Cancel'
    | 'Comment'
    | 'Read'
    | 'Reject';

export type CorpWechatNoticeActionContentType = 'Script'
    | 'Text';

/**
 * 编码类型,1-数字编码，2-字符编码
 */
export type DicEncodeType = '1'
    | '2';

export type EntityDataSearchConditionCompareType = 'field'
    | 'script'
    | 'value';

export type EntitySearchFormSortDirection = 'ASC'
    | 'DESC';

export type FieldChangePropsType = 'SetNull'
    | 'SetToDefault'
    | 'SetValue';

/**
 * 字段权限
 */
export type FieldVisibilityVOReqVisibility = 'Editable'
    | 'Hidden'
    | 'Readonly';

/**
 * 平台选择
 */
export type FormPlatform = 'Desktop'
    | 'Mobile';

/**
 * 表单状态
 */
export type FormDataState = 'Canceled'
    | 'Finished'
    | 'None'
    | 'Ongoing'
    | 'Read'
    | 'Rejected';

export type FormFieldDefinitionComponentName = 'AreaField'
    | 'Attachment'
    | 'BreakOffSuit'
    | 'CalculateField'
    | 'DateField'
    | 'DateRangeField'
    | 'DepartmentField'
    | 'ExternalContactField'
    | 'GoOutSuit'
    | 'Grid'
    | 'InnerContactField'
    | 'LeaveSuit'
    | 'MoneyField'
    | 'MultiSelectField'
    | 'NumberField'
    | 'OvertimeWorkSuit'
    | 'PhotoField'
    | 'Rate'
    | 'RelateField'
    | 'SelectField'
    | 'Statistics'
    | 'SubFormField'
    | 'SwitchField'
    | 'TableField'
    | 'TextField'
    | 'TextNote'
    | 'TextareaField'
    | 'TimeAndLocationField'
    | 'TravelSuit';

/**
 * 地区类型，1-省份，2-城市，3-省市区
 */
export type FormFieldPropsAreaType = '1'
    | '2'
    | '3';

/**
 * 选项来源，当组件为单选或多选时有效，1-自定义选项，2-内建选项,3-数据字典
 */
export type FormFieldPropsOptionsSource = '1'
    | '2'
    | '3'
    | '4';

/**
 * 统计类型
 */
export type FormFieldPropsStatisticsMode = 'MultipleFields'
    | 'SubFormField';

/**
 * 统计类型
 */
export type FormFieldPropsStatisticsType = 'Average'
    | 'Max'
    | 'Min'
    | 'Sum';

export type FormFieldValueValueType = 'Boolean'
    | 'Date'
    | 'FormFieldValueList'
    | 'FormFilter'
    | 'Location'
    | 'None'
    | 'Number'
    | 'NumberList'
    | 'Object'
    | 'Scope'
    | 'StringList'
    | 'Text';

export type FunctionParamType = 'any'
    | 'boolean'
    | 'date'
    | 'integer'
    | 'string';

export type MemberConfigurationId = 'AddToAllTapdProject'
    | 'DefaultLeader'
    | 'NewProductNotice'
    | 'NewProjectNotice'
    | 'NoneReport'
    | 'TodayAttendanceExclude';

export type MenuItemType = 'CustomPage'
    | 'EntityDataList'
    | 'Group'
    | 'Route'
    | 'Url';

export type OrderNullHandling = 'NATIVE'
    | 'NULLS_FIRST'
    | 'NULLS_LAST';

export type PageComponentType = 'Chart'
    | 'ExternalPage'
    | 'None';

/**
 * 节点处理类型
 */
export type ProcessFlowStepType = 'Approval'
    | 'Branch'
    | 'CC'
    | 'Handle';

/**
 * 处理类型
 */
export type ProcessNodePropsReqHandleType = '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6';

export type PropertyOptionsNumberValueType = 'Money'
    | 'Percentage'
    | 'Progress';

export type PropertyOptionsScriptResultType = 'Boolean'
    | 'ComponentTemplate'
    | 'Date'
    | 'Double'
    | 'Int'
    | 'String';

export type ScriptFunctionParameterType = 'Boolean'
    | 'Date'
    | 'Double'
    | 'Int'
    | 'String';

export type SimpleStaffTemporaryInfoVOType = 'BankCardInfo'
    | 'BasicInfo'
    | 'ContractInfo'
    | 'EducationInfo'
    | 'EmergencyContactInfo'
    | 'FamilyInfo'
    | 'MaterialInfo'
    | 'PersonalInfo'
    | 'WorkingInfo';

export type StatisticalDimensionIntervalType = 'Date'
    | 'Month'
    | 'Season'
    | 'Year';

export type StatisticalIndexType = 'Avg'
    | 'Count'
    | 'Max'
    | 'Min'
    | 'Sum';

export type SysLogLevel = 'DEBUG'
    | 'ERROR'
    | 'FATAL'
    | 'INFO'
    | 'OFF'
    | 'TRACE'
    | 'WARN';

export type TapdCheckResultItemType = 'CategoryError';

export type TimeSheetVOSpentType = 'Common'
    | 'Product'
    | 'Project';

export type TodoVOState = 'Canceled'
    | 'Checked'
    | 'Created'
    | 'Delayed'
    | 'Finished'
    | 'Processing';

export type TriggerTimeType = 'Cron';

export interface ApprovalEvent {
  begin?: string;
  end?: string;
  id?: number;
  leaveType?: ApprovalEventLeaveType;
  place?: string;
  reason?: string;
  type?: ApprovalEventType;
  user?: AttendanceUser;
}


export interface ApprovalProcess {
  createTime?: string;
  createUserId?: string;
  definition?: ProcessDefinitionRes;
  id?: string;
  name?: string;
}


export interface AttendanceStatistics {
  attendanceStatistics?: Array<UserAttendanceStatistics>;
  checkInStatistics?: Array<UserCheckInStatistics>;
  userCheckData?: Array<UserAttendanceData>;
  workDays?: Array<any>;
}


export interface AttendanceStatisticsConfig {
  extraWorkDays?: Array<number>;
  minOvertimeWorkHours?: number;
  month?: number;
  specificDate?: number;
  userIds?: Array<string>;
  weekendAsWorkdays?: Array<number>;
  workdayAsHolidays?: Array<number>;
  year?: number;
}


export interface AttendanceUser {
  departmentNames?: Array<string>;
  id?: string;
  name?: string;
  position?: string;
}


export interface AuthoritiesSaveVO {
  authorities?: Array<string>;
  entityId?: string;
  role?: string;
}


export interface BaseFlowAction {
  id?: string;
  type?: BaseFlowActionType;
}


export interface BaseFlowActionReq {
  id?: string;
  type?: BaseFlowActionType;
}


export interface BaseFlowActionRes {
  id?: string;
  type?: BaseFlowActionType;
}


export interface BaseLayoutComponent {
  component?: string;
  id?: string;
  props?: any;
}


export interface BranchConditionReq {
  /**
   * 比较的类型
   */
  compareType?: BranchConditionReqCompareType;
  /**
   * 条件字段id，0-提单人，2-提单人职位
   */
  fieldId?: string;
  numberValue?: number;
  optionsValue?: Array<string>;
  /**
   * 比较的值
   */
  scopeValue?: VisibleScopeVOReq;
  stringValue?: string;
}


export interface BranchConditionRes {
  /**
   * 比较的类型
   */
  compareType?: BranchConditionReqCompareType;
  /**
   * 条件字段id，0-提单人，2-提单人职位
   */
  fieldId?: string;
  numberValue?: number;
  optionsValue?: Array<string>;
  /**
   * 比较的值
   */
  scopeValue?: VisibleScopeVORes;
  stringValue?: string;
}


export interface BucketVO {
  balance?: number;
  money?: number;
  month?: number;
  subjectId?: string;
}


export interface Budget {
  money?: number;
  month?: number;
  subjectId?: string;
}


export interface BudgetReq {
  money?: number;
  month?: number;
  subjectId?: string;
}


export interface BudgetRes {
  money?: number;
  month?: number;
  subjectId?: string;
}


export interface BusinessEntity {
  id?: string;
  lastUpdateTime?: string;
  modules?: Array<string>;
  name?: string;
  notes?: string;
  tableName?: string;
}


export interface BusinessEntityAuthorityVO {
  name?: string;
  zhName?: string;
}


export interface BusinessEntityDataLog {
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  dataId?: string;
  dataName?: string;
  entityId?: string;
  id?: string;
  logInfo?: Array<BusinessEntityDataLogItem>;
  operationType?: BusinessEntityDataLogOperationType;
}


export interface BusinessEntityDataLogItem {
  oldValue?: any;
  propertyPath?: string;
  value?: any;
}


export interface BusinessEntityDetailVO {
  entity?: BusinessEntity;
  properties?: Array<BusinessEntityPropertyVO>;
}


export interface BusinessEntityLayout {
  apiName?: string;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  entityId?: string;
  id?: string;
  layout?: any;
  name?: string;
  platform?: number;
  type?: BusinessEntityLayoutType;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessEntityListView {
  allowedSystemRoles?: Array<string>;
  apiName?: string;
  conditions?: Array<EntityDataSearchConditionRes>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  description?: string;
  entityId?: string;
  id?: string;
  name?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessEntityListViewReq {
  allowedSystemRoles?: Array<string>;
  apiName?: string;
  conditions?: Array<EntityDataSearchConditionReq>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  description?: string;
  entityId?: string;
  id?: string;
  name?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessEntityListViewRes {
  allowedSystemRoles?: Array<string>;
  apiName?: string;
  conditions?: Array<EntityDataSearchConditionRes>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  description?: string;
  entityId?: string;
  id?: string;
  name?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessEntityProperty {
  collection?: boolean;
  dataType?: BusinessEntityPropertyDataType;
  /**
   * 字典编码，当dataType为dic时有效
   */
  dicCode?: string;
  displayScript?: string;
  /**
   * 所属对象
   */
  entityId?: string;
  /**
   * 导出样式
   */
  exportStyle?: ExportStyle;
  id?: string;
  lastUpdateTime?: string;
  locked?: boolean;
  /**
   * 字段名称
   */
  name?: string;
  options?: PropertyOptions;
  path?: string;
  placeholder?: string;
  readonly?: boolean;
  relatedEntityDisplayField?: string;
  relatedEntityId?: string;
  /**
   * 单位，当字段为数值时有效
   */
  unit?: string;
  /**
   * 校验规则
   */
  validateRules?: ValidateRules;
  zhAlias?: Array<string>;
}


export interface BusinessEntityPropertySaveDTO {
  collection?: boolean;
  dataType?: BusinessEntityPropertyDataType;
  /**
   * 字典编码，当dataType为dic时有效
   */
  dicCode?: string;
  displayScript?: string;
  /**
   * 所属对象
   */
  entityId?: string;
  exportStyle?: ExportStyle;
  /**
   * 字段名称
   */
  name?: string;
  options?: PropertyOptions;
  path?: string;
  placeholder?: string;
  readonly?: boolean;
  relatedEntityDisplayField?: string;
  relatedEntityId?: string;
  /**
   * 单位，当字段为数值时有效
   */
  unit?: string;
  validateRules?: ValidateRules;
  zhAlias?: Array<string>;
}


export interface BusinessEntityPropertyVO {
  collection?: boolean;
  dataType?: BusinessEntityPropertyDataType;
  /**
   * 字典编码，当dataType为dic时有效
   */
  dicCode?: string;
  displayScript?: string;
  editable?: boolean;
  /**
   * 所属对象
   */
  entityId?: string;
  /**
   * 导出样式
   */
  exportStyle?: ExportStyle;
  id?: string;
  lastUpdateTime?: string;
  locked?: boolean;
  /**
   * 字段名称
   */
  name?: string;
  options?: PropertyOptions;
  path?: string;
  placeholder?: string;
  readonly?: boolean;
  relatedEntityDisplayField?: string;
  relatedEntityId?: string;
  /**
   * 单位，当字段为数值时有效
   */
  unit?: string;
  /**
   * 校验规则
   */
  validateRules?: ValidateRules;
  zhAlias?: Array<string>;
}


export interface BusinessEntityRoleAuthority {
  authority?: BusinessEntityRoleAuthorityAuthority;
  entityId?: string;
  id?: number;
  systemRole?: string;
}


export interface BusinessEntitySaveVO {
  id?: string;
  modules?: Array<string>;
  name?: string;
  notes?: string;
  persistent?: boolean;
}


export interface BusinessEntityStatisticsDefinition {
  /**
   * 统计图类型
   */
  chartType?: BusinessEntityStatisticsDefinitionChartType;
  conditionGroups?: Array<Array<any>>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  /**
   * 统计描述
   */
  description?: string;
  dimensions?: Array<StatisticalDimension>;
  /**
   * 统计的对象
   */
  entityId?: string;
  id?: string;
  indexes?: Array<StatisticalIndex>;
  limit?: number;
  /**
   * 统计名称
   */
  name?: string;
  options?: any;
  sortOptions?: SortOptions;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessEntityStatisticsDefinitionDetail {
  definition?: BusinessEntityStatisticsDefinitionRes;
  entity?: BusinessEntity;
  properties?: Array<BusinessEntityPropertyVO>;
}


export interface BusinessEntityStatisticsDefinitionForm {
  conditionGroups?: Array<Array<any>>;
  dimensions?: Array<StatisticalDimensionReq>;
  /**
   * 统计的对象
   */
  entityId?: string;
  indexes?: Array<StatisticalIndexReq>;
  limit?: number;
  options?: any;
  sortOptions?: SortOptionsReq;
}


export interface BusinessEntityStatisticsDefinitionReq {
  /**
   * 统计图类型
   */
  chartType?: BusinessEntityStatisticsDefinitionChartType;
  conditionGroups?: Array<Array<any>>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  /**
   * 统计描述
   */
  description?: string;
  dimensions?: Array<StatisticalDimensionReq>;
  /**
   * 统计的对象
   */
  entityId?: string;
  id?: string;
  indexes?: Array<StatisticalIndexReq>;
  limit?: number;
  /**
   * 统计名称
   */
  name?: string;
  options?: any;
  sortOptions?: SortOptionsReq;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessEntityStatisticsDefinitionRes {
  /**
   * 统计图类型
   */
  chartType?: BusinessEntityStatisticsDefinitionChartType;
  conditionGroups?: Array<Array<any>>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  /**
   * 统计描述
   */
  description?: string;
  dimensions?: Array<StatisticalDimensionRes>;
  /**
   * 统计的对象
   */
  entityId?: string;
  id?: string;
  indexes?: Array<StatisticalIndexRes>;
  limit?: number;
  /**
   * 统计名称
   */
  name?: string;
  options?: any;
  sortOptions?: SortOptionsRes;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessEntityUpdateVO {
  id?: string;
  modules?: Array<string>;
  name?: string;
  notes?: string;
  persistent?: boolean;
}


export interface BusinessEntityViewSaveDTO {
  apiName?: string;
  entityId?: string;
  id?: string;
  layout?: any;
  name?: string;
  platform?: number;
  type?: BusinessEntityLayoutType;
}


export interface BusinessWorkflow {
  apiName?: string;
  conditionGroups?: Array<Array<any>>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  data?: WorkflowData;
  description?: string;
  entityId?: string;
  id?: string;
  name?: string;
  triggerAction?: BusinessWorkflowTriggerAction;
  triggerTime?: TriggerTime;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessWorkflowReq {
  apiName?: string;
  conditionGroups?: Array<Array<any>>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  data?: WorkflowDataReq;
  description?: string;
  entityId?: string;
  id?: string;
  name?: string;
  triggerAction?: BusinessWorkflowTriggerAction;
  triggerTime?: TriggerTimeReq;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface BusinessWorkflowRes {
  apiName?: string;
  conditionGroups?: Array<Array<any>>;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  data?: WorkflowDataRes;
  description?: string;
  entityId?: string;
  id?: string;
  name?: string;
  triggerAction?: BusinessWorkflowTriggerAction;
  triggerTime?: TriggerTimeRes;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface CRMApp {
  businessInfo?: string;
  enable?: boolean;
}


export interface ChangeDataAction {
  changes?: Array<FieldChangeProps>;
  id?: string;
  type?: BaseFlowActionType;
}


export interface ChangeOwnerAction {
  id?: string;
  ownerId?: string;
  type?: BaseFlowActionType;
}


export interface CheckInDate {
  checkInTime?: Array<CheckInTime>;
  flexTime?: number;
  limitAheadTime?: number;
  noOffWorkCheck?: boolean;
  workdays?: Array<number>;
}


export interface CheckInDescription {
  abnormal?: boolean;
  abnormalTypes?: Array<string>;
  checkInTime?: string;
  checkInType?: CheckInDescriptionCheckInType;
  fixEvents?: Array<ApprovalEvent>;
  fixType?: ApprovalEventType;
  fixTypeName?: string;
  location?: string;
  notes?: string;
  userId?: string;
  workDay?: boolean;
}


export interface CheckInRule {
  checkInDate?: Array<CheckInDate>;
  date?: string;
  groupId?: number;
  groupName?: string;
  groupType?: number;
  id?: string;
  userId?: string;
}


export interface CheckInTime {
  offWorkTime?: LocalTime;
  remindOffWorkTime?: LocalTime;
  remindWorkTime?: LocalTime;
  workTime?: LocalTime;
}


export interface Collect {
  field?: string;
  name?: string;
  type?: CollectType;
}


export interface CollectResult {
  field?: string;
  name?: string;
  type?: CollectType;
  unit?: string;
  value?: any;
}


export interface Comment {
  content?: string;
  time?: string;
  type?: CommentType;
  userId?: string;
}


export interface CommentVO {
  content?: string;
  time?: string;
  type?: CommentType;
  user?: MemberVORes;
}


export interface CorpWechatNoticeAction {
  content?: string;
  contentType?: CorpWechatNoticeActionContentType;
  id?: string;
  receivers?: MessageReceiver;
  title?: string;
  type?: BaseFlowActionType;
}


export interface CostCenter {
  /**
   * 使用状态(已启用true 未启用false)
   */
  enabled?: boolean;
  /**
   * 有效期结束时间
   */
  endTime?: string;
  /**
   * 成本中心id
   */
  id?: string;
  /**
   * 负责人
   */
  leaders?: Array<string>;
  /**
   * 成本中心名称
   */
  name?: string;
  /**
   * 默认相关人
   */
  relatedUsers?: Array<string>;
  /**
   * 有效期开始时间
   */
  startTime?: string;
  /**
   * 所属类型（1产品 2项目 3部门）
   */
  type?: number;
  /**
   * 所属类型ID
   */
  typeId?: string;
}


export interface CostCenterDTO {
  enabled?: boolean;
  endTime?: string;
  id?: string;
  leaders?: Array<MemberVOReq>;
  name?: string;
  relatedUsers?: Array<MemberVOReq>;
  startTime?: string;
  type?: number;
  typeId?: string;
}


export interface CostCenterVO {
  /**
   * 使用状态(已启用true 未启用false)
   */
  enabled?: boolean;
  /**
   * 有效期结束时间
   */
  endTime?: string;
  /**
   * 成本中心id
   */
  id?: string;
  /**
   * 负责人
   */
  leaders?: Array<MemberVORes>;
  /**
   * 成本中心名称
   */
  name?: string;
  /**
   * 默认相关人
   */
  relatedUsers?: Array<MemberVORes>;
  /**
   * 有效期开始时间
   */
  startTime?: string;
  /**
   * 所属类型（1产品 2项目 3部门）
   */
  type?: number;
  /**
   * 所属类型ID
   */
  typeId?: string;
}


export interface CostSheet {
  /**
   * 导入的预算表
   */
  budget?: Array<BudgetRes>;
  /**
   * 成本中心
   */
  costCenterId?: string;
  /**
   * 预算ID
   */
  id?: string;
  /**
   * 成本中心名称
   */
  name?: string;
  /**
   * 预警阈值
   */
  threshold?: number;
  /**
   * 预算年份
   */
  year?: number;
}


export interface CostSheetDTO {
  budget?: Array<BudgetReq>;
  costCenterId?: string;
  id?: string;
  name?: string;
  threshold?: number;
  year?: number;
}


export interface CurrentInfo {
  staff?: StaffDTO;
  temporaryStaff?: StaffDTO;
  temporaryTypeReflect?: any;
}


export interface CustomPage {
  apiName?: string;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  id?: string;
  layout?: PageLayout;
  layoutId?: number;
  title?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface DataTableData {
  rows?: Array<Array<any>>;
  titles?: Array<DataTableTitle>;
}


export interface DataTableTitle {
  name?: string;
  noRender?: boolean;
  style?: ExportStyle;
}


export interface DepartmentVO {
  id?: number;
  name?: string;
}


export interface DepartmentVOReq {
  id?: number;
  name?: string;
}


export interface DepartmentVORes {
  id?: number;
  name?: string;
}


export interface DetailInfoComponent {
  cols?: number;
  component?: string;
  displayMode?: number;
  fields?: Array<ViewField>;
  hideNullFields?: boolean;
  id?: string;
  props?: any;
}


export interface Dic {
  /**
   * 自动生成编码
   */
  autoGenerateCode?: boolean;
  /**
   * 数据代码
   */
  code?: string;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 编码类型,1-数字编码，2-字符编码
   */
  encodeType?: DicEncodeType;
  /**
   * 国标代码
   */
  gbCode?: string;
  /**
   * 自增主键
   */
  id?: string;
  /**
   * 是否锁定，true：锁定，false：未锁定。（锁定：该基础数据下数据项不允许修改，删除，添加操作）
   */
  locked?: boolean;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序方式, 1-根据编码排序，2-指定序号排序
   */
  sortType?: number;
  /**
   * 指定来源
   */
  specificSource?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface DicItem {
  /**
   * 数据编码，数字或字符串
   */
  code?: string;
  /**
   * 页面展示时的背景色或字体颜色
   */
  color?: string;
  /**
   * 是否启用
   */
  enable?: boolean;
  /**
   * 自定义字段信息
   */
  extras?: any;
  /**
   * 图标名称
   */
  icon?: string;
  /**
   * 图标类型, 取值Antd或FontAwesome
   */
  iconType?: string;
  id?: string;
  /**
   * 数据项名称
   */
  name?: string;
  /**
   * 排序
   */
  order?: number;
  /**
   * 所属的上一级数据编码
   */
  parentCode?: any;
  /**
   * 基础数据分类编码
   */
  type?: string;
}


export interface DicItemSaveVO {
  code?: string;
  color?: string;
  /**
   * 自定义字段信息
   */
  extras?: any;
  icon?: string;
  iconType?: string;
  id?: string;
  name?: string;
  order?: number;
  type?: string;
}


export interface DicResponseDTO {
  /**
   * 基础数据定义
   */
  definition?: Dic;
  /**
   * 基础数据项列表
   */
  items?: Array<DicItem>;
}


export interface DicResponseVO {
  /**
   * 基础数据定义
   */
  definition?: Dic;
  /**
   * 基础数据项列表
   */
  items?: Array<DicItem>;
}


export interface DicVO {
  /**
   * 是否自动生成编码
   */
  autoGenerateCode?: boolean;
  /**
   * 数据描述
   */
  description?: string;
  encodeType?: number;
  /**
   * 国标编码
   */
  gbCode?: string;
  /**
   * 基础数据id，不能为空
   */
  id?: string;
  /**
   * 是否锁定，true：锁定，false：未锁定。（锁定：该基础数据下数据项不允许修改，删除，添加操作）
   */
  locked?: boolean;
  /**
   * 名称
   */
  name?: string;
  /**
   * 排序方式，1-按编码，2-自定义
   */
  sortType?: number;
  /**
   * 指定地址读取数据
   */
  specificSource?: string;
}


export interface CommercialOpportunity {
  businessType?: string;
  ccPersonIds?: string;
  ccPersonNames?: string;
  clientCode?: string;
  clientName?: string;
  comment?: string;
  contactName?: string;
  content?: string;
  createTime?: string;
  creator?: string;
  departmentName?: string;
  estimatedDate?: string;
  estimatedSale?: string;
  id?: string;
  loseReasonDesc?: string;
  loseReasonId?: string;
  optionMap?: any;
  personName?: string;
  relativePersonIds?: string;
  relativePersonNames?: string;
  stage?: string;
  title?: string;
  updateTime?: string;
  wxUserId?: string;
}


export interface Contract {
  id?: string;
  name?: string;
}


export interface CustomObjectBaseVO {
  id?: string;
  name?: string;
}


export interface Customer {
  chargePersonWxIds?: string;
  clientCode?: string;
  clientId?: string;
  clientName?: string;
  relatviePersonWxIds?: string;
}


export interface DynamicInfoComponent {
  component?: string;
  id?: string;
  props?: any;
}


export interface EmailNoticeAction {
  content?: string;
  contentType?: CorpWechatNoticeActionContentType;
  id?: string;
  receivers?: MessageReceiver;
  type?: BaseFlowActionType;
}


export interface EntityDataDetail {
  data?: any;
  entity?: BusinessEntity;
  id?: string;
  properties?: Array<BusinessEntityPropertyVO>;
  view?: BusinessEntityLayout;
}


export interface EntityDataFieldSaveDTO {
  entityId?: string;
  field?: string;
  id?: string;
  value?: any;
  viewId?: string;
}


export interface EntityDataSaveDTO {
  data?: any;
  entityId?: string;
  id?: string;
  viewId?: string;
}


export interface EntityDataSearchCondition {
  compareOperator?: BranchConditionReqCompareType;
  compareType?: EntityDataSearchConditionCompareType;
  compareValue?: any;
  fields?: Array<string>;
  searchNull?: boolean;
}


export interface EntityDataSearchConditionReq {
  compareOperator?: BranchConditionReqCompareType;
  compareType?: EntityDataSearchConditionCompareType;
  compareValue?: any;
  fields?: Array<string>;
  searchNull?: boolean;
}


export interface EntityDataSearchConditionRes {
  compareOperator?: BranchConditionReqCompareType;
  compareType?: EntityDataSearchConditionCompareType;
  compareValue?: any;
  fields?: Array<string>;
  searchNull?: boolean;
}


export interface EntityEditData {
  data?: any;
  entity?: BusinessEntity;
  id?: string;
  properties?: Array<BusinessEntityPropertyVO>;
  view?: BusinessEntityLayout;
}


export interface EntityListViewData {
  allProperties?: Array<BusinessEntityPropertyVO>;
  entity?: BusinessEntity;
  layout?: BusinessEntityLayout;
  listViews?: Array<BusinessEntityListView>;
  properties?: Array<BusinessEntityPropertyVO>;
}


export interface EntityPageData {
  collects?: Array<CollectResult>;
  layout?: BusinessEntityLayout;
  page?: PageImpl<{[key: string]: any}>;
}


export interface EntitySearchForm {
  conditionGroups?: Array<Array<any>>;
  conditions?: Array<EntityDataSearchConditionReq>;
  entityId?: string;
  keywords?: string;
  layoutName?: string;
  listViewName?: string;
  page?: number;
  platform?: number;
  size?: number;
  sortDirection?: EntitySearchFormSortDirection;
  sortField?: string;
}


export interface EvaluateStep {
  handleType?: number;
  perUserWeight?: number;
  specificUserIds?: Array<string>;
  type?: number;
}


export interface EvaluationForm {
  /**
   * 面试评价
   */
  data?: SubmitDataReq;
  /**
   * 简历ID
   */
  id?: string;
}


export interface ExpenseItemDetailsVO {
  businessCost?: number;
  developCost?: number;
  itemName?: string;
  mainBusinessCost?: number;
  manageCost?: number;
  total?: number;
}


export interface ExpireDuration {
  /**
   * 节点持续天数
   */
  days?: number;
  /**
   * 节点持续小时数
   */
  hours?: number;
  /**
   * 节点持续分钟数
   */
  minutes?: number;
}


export interface ExpireHandleProps {
  /**
   * 超时时长
   */
  duration?: ExpireDuration;
  /**
   * 处理方式，1-退回提交节点，2-自动转到下一节点
   */
  handleType?: number;
}


export interface ExpireNoticeProps {
  /**
   * 提醒内容
   */
  content?: string;
  /**
   * 超时时长
   */
  duration?: ExpireDuration;
  /**
   * 提醒次数
   */
  repeatCount?: number;
  /**
   * 提醒间隔
   */
  repeatIntervalMinutes?: number;
}


export interface ExportStyle {
  arraySeparator?: string;
  horizontalAlignment?: string;
  verticalAlignment?: string;
  width?: number;
}


export interface ExportTask {
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  fileName?: string;
  fileStoreId?: string;
  finishTime?: string;
  id?: string;
  name?: string;
  params?: any;
  progress?: number;
  status?: number;
  type?: string;
}


export interface ExternalOptionsProperties {
  keyProperty?: string;
  keyPropertyName?: string;
  nameProperty?: string;
  namePropertyName?: string;
  showKey?: boolean;
}


export interface ExtraDefinition {
  /**
   * 是否数组
   */
  array?: boolean;
  /**
   * 显示依赖条件
   */
  depends?: Array<ShowFieldCondition>;
  /**
   * 字段显示名称
   */
  displayName?: string;
  /**
   * 自定义字段后缀
   */
  extra?: string;
  id?: number;
  /**
   * 字段名称，只允许使用英文，驼峰命名
   */
  name?: string;
  /**
   * 选项来源（从基础数据类型中选择）
   */
  optionSource?: string;
  /**
   * 排序
   */
  orderNo?: number;
  /**
   * 字段校验的正则
   */
  pattern?: string;
  /**
   * 输入提示信息
   */
  placeholder?: string;
  /**
   * 是否为必填字段
   */
  required?: boolean;
  /**
   * 标签，用于区分自定义字段的用途
   */
  tag?: string;
  /**
   * 自定义字段类型
   */
  type?: string;
}


export interface FieldChangeProps {
  field?: string;
  type?: FieldChangePropsType;
  value?: any;
}


export interface FieldType {
  childrenRequired?: boolean;
  code?: string;
  fields?: Array<ViewFieldVO>;
  formatRequired?: boolean;
  inputComponent?: boolean;
  labelRequired?: boolean;
  name?: string;
  optionsRequired?: boolean;
  placeholderRequired?: boolean;
  platform?: string;
  showRequired?: boolean;
  suit?: boolean;
  type?: string;
  unitRequired?: boolean;
}


export interface FieldVisibilityVOReq {
  /**
   * 表单字段id
   */
  fieldId?: string;
  /**
   * 字段权限
   */
  visibility?: FieldVisibilityVOReqVisibility;
}


export interface FieldVisibilityVORes {
  /**
   * 表单字段id
   */
  fieldId?: string;
  /**
   * 字段权限
   */
  visibility?: FieldVisibilityVOReqVisibility;
}


export interface FieldsPermission {
  permissions?: Array<RolePermission>;
}


export interface FileListComponent {
  component?: string;
  id?: string;
  props?: any;
}


export interface FileRecord {
  contentType?: string;
  createTime?: string;
  description?: string;
  entityDataId?: string;
  entityId?: string;
  id?: string;
  name?: string;
  obsKey?: string;
  obsName?: string;
  ownerId?: string;
  size?: number;
  url?: string;
  version?: string;
}


export interface FinancialApp {
  cost?: string;
  costCenter?: string;
  enable?: boolean;
  financialSubject?: string;
}


export interface FixInfo {
  date?: string;
  fixType?: ApprovalEventType;
  type?: CheckInDescriptionCheckInType;
}


export interface Form {
  /**
   * 高级选项
   */
  advancedProps?: FormAdvancedProps;
  apps?: FormApps;
  canModify?: boolean;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 创建用户
   */
  createUserId?: string;
  /**
   * 数据提交后是否允许修改（非审批单）
   */
  dataAllowModify?: boolean;
  /**
   * 表单组件
   */
  definition?: FormDefinition;
  /**
   * 表单描述，备注
   */
  description?: string;
  /**
   * 所属分组，0-其他，1-费用报销，2-出勤休假，3-人事考核
   */
  formGroup?: number;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 表单编号
   */
  id?: string;
  /**
   * 管理员
   */
  manageScope?: VisibleScopeVO;
  /**
   * 表单名称
   */
  name?: string;
  /**
   * 平台选择
   */
  platform?: FormPlatform;
  /**
   * 绑定的流程id
   */
  processId?: string;
  system?: boolean;
  /**
   * 表单类型
   */
  type?: string;
  /**
   * 可见范围
   */
  visibleScope?: VisibleScopeVO;
}


export interface FormAdvancedProps {
  /**
   * 审批人去重策略,1-多次出现只保留一个，2-仅连续出现时去重
   */
  duplicateRemoveMethod?: number;
  /**
   * 审批意见对申请人是否可见
   */
  opinionsInvisibleForApplicant?: boolean;
  /**
   * 审批意见是否必须
   */
  opinionsRequired?: boolean;
  /**
   * 审批意见提示
   */
  opinionsTip?: string;
}


export interface FormApps {
  crm?: CRMApp;
  financial?: FinancialApp;
}


export interface FormBindingVO {
  form?: FormRes;
  formFieldTypes?: Array<FieldType>;
  preview?: boolean;
  process?: ApprovalProcess;
}


export interface FormData {
  comments?: Array<Comment>;
  createTime?: string;
  /**
   * 流程结束时间
   */
  finishTime?: string;
  /**
   * 处理流程
   */
  flow?: ProcessFlowDataRes;
  formId?: string;
  id?: string;
  lastUpdateTime?: string;
  /**
   * 表单名称
   */
  name?: string;
  /**
   * 表单状态
   */
  state?: FormDataState;
  type?: string;
  urgeRecords?: Array<UrgeRecord>;
  /**
   * 提交的用户id
   */
  userId?: string;
  /**
   * 提交的用户姓名
   */
  userName?: string;
  /**
   * 表单数据
   */
  value?: any;
}


export interface FormDataVO {
  /**
   * 是否允许通过操作
   */
  allowAgree?: boolean;
  /**
   * 是否允许撤回
   */
  allowCancel?: boolean;
  /**
   * 是否允许关闭
   */
  allowClose?: boolean;
  /**
   * 是否允许编辑操作
   */
  allowEdit?: boolean;
  /**
   * 是否允许提前结束
   */
  allowFinish?: boolean;
  /**
   * 是否允许驳回操作
   */
  allowReject?: boolean;
  /**
   * 是否允许催办
   */
  allowUrge?: boolean;
  /**
   * 提交的用户
   */
  applicant?: MemberVORes;
  /**
   * 是否允许撤销
   */
  cancelable?: boolean;
  /**
   * 评论列表
   */
  comments?: Array<CommentVO>;
  /**
   * 创建时间
   */
  createTime?: string;
  currentUserId?: string;
  /**
   * 审批流程
   */
  flow?: ProcessFlowDataRes;
  /**
   * 所属表单
   */
  form?: Form;
  formData?: FormData;
  /**
   * 表单项类型(新对象)
   */
  formFieldTypes?: Array<FieldType>;
  /**
   * 所属表单ID
   */
  formId?: string;
  /**
   * 审批单ID
   */
  id?: string;
  /**
   * 审批单名称
   */
  name?: string;
  /**
   * 审批单状态
   */
  state?: FormDataState;
  /**
   * 审批单类型
   */
  type?: string;
  /**
   * 审批单内容
   */
  value?: any;
}


export interface FormDefinition {
  children?: Array<FormFieldDefinition>;
  props?: FormProps;
}


export interface FormDefinitionReq {
  children?: Array<FormFieldDefinitionReq>;
  props?: FormProps;
}


export interface FormDefinitionRes {
  children?: Array<FormFieldDefinitionRes>;
  props?: FormProps;
}


export interface FormDisplayVO {
  canModify?: boolean;
  createTime?: string;
  description?: string;
  form?: FormRes;
  icon?: string;
  id?: string;
  name?: string;
  type?: string;
  typeName?: string;
}


export interface FormFieldDefinition {
  children?: Array<FormFieldDefinition>;
  componentName?: FormFieldDefinitionComponentName;
  props?: FormFieldProps;
}


export interface FormFieldDefinitionReq {
  children?: Array<FormFieldDefinitionReq>;
  componentName?: FormFieldDefinitionComponentName;
  props?: FormFieldPropsReq;
}


export interface FormFieldDefinitionRes {
  children?: Array<FormFieldDefinitionRes>;
  componentName?: FormFieldDefinitionComponentName;
  props?: FormFieldPropsRes;
}


export interface FormFieldProps {
  /**
   * 动作名称
   */
  actionName?: string;
  /**
   * 相关类型,我发起的、抄送我的、我审批的、我处理的
   */
  allowFormRelevanceTypes?: Array<number>;
  /**
   * 审批单是否允许多选
   */
  allowMultiForm?: boolean;
  /**
   * 通讯录是否允许多选
   */
  allowMultipleContact?: boolean;
  /**
   * 地区类型，1-省份，2-城市，3-省市区
   */
  areaType?: FormFieldPropsAreaType;
  /**
   * 栅格组件的布局
   */
  cols?: Array<number>;
  /**
   * 描述，说明文字
   */
  content?: string;
  /**
   * 日期格式,1-年-月-日，2-年-月-日-时-分
   */
  dateFormat?: number;
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 小数位数
   */
  digits?: number;
  duration?: boolean;
  durationLabel?: string;
  /**
   * 结束日期
   */
  endTime?: string;
  /**
   * 外部数据源字段配置
   */
  externalOptionsProperties?: ExternalOptionsProperties;
  /**
   * 选项外部数据源地址
   */
  externalOptionsUrl?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 是否整数
   */
  integer?: boolean;
  /**
   * 名称，标题
   */
  label?: string;
  /**
   * 标签宽度
   */
  labelWidth?: string;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 最多选择
   */
  maxSelect?: number;
  /**
   * 最大值
   */
  maxValue?: number;
  /**
   * 最小长度
   */
  minLength?: number;
  /**
   * 最少选择
   */
  minSelect?: number;
  /**
   * 最小值
   */
  minValue?: number;
  /**
   * 是否数值类型选项
   */
  numberValueOption?: boolean;
  /**
   * 系统内建选项类型
   */
  optionDataSetId?: string;
  /**
   * 选项列表（key,value）
   */
  options?: Array<Item>;
  /**
   * 选项来源，当组件为单选或多选时有效，1-自定义选项，2-内建选项,3-数据字典
   */
  optionsSource?: FormFieldPropsOptionsSource;
  /**
   * 父字段id
   */
  parentId?: string;
  /**
   * 提示信息
   */
  placeholder?: string;
  /**
   * 是否参与打印
   */
  print?: boolean;
  /**
   * 是否流程相关
   */
  processRelated?: boolean;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 允许关联的表单类型id
   */
  relatedFormId?: string;
  relatedShowLogic?: Array<ShowLogic>;
  /**
   * 是否必填
   */
  required?: boolean;
  /**
   * 单选或多选的选择方式
   */
  selectMode?: DicEncodeType;
  /**
   * 栅格数
   */
  span?: number;
  /**
   * 起始日期
   */
  startTime?: string;
  /**
   * 待统计子表单控件id
   */
  statisticsFieldId?: string;
  /**
   * 统计类型为MultipleFields时，统计的字段列表
   */
  statisticsFields?: Array<string>;
  /**
   * 统计类型
   */
  statisticsMode?: FormFieldPropsStatisticsMode;
  /**
   * 待统计子表单的子控件id
   */
  statisticsSubFieldId?: string;
  /**
   * 统计类型
   */
  statisticsType?: FormFieldPropsStatisticsType;
  /**
   * 是否校验唯一性（一般用于提交信息单时的手机号、身份证号等校验）
   */
  unique?: boolean;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 选择成员或部门
   */
  userOrDepartment?: string;
}


export interface FormFieldPropsReq {
  /**
   * 动作名称
   */
  actionName?: string;
  /**
   * 相关类型,我发起的、抄送我的、我审批的、我处理的
   */
  allowFormRelevanceTypes?: Array<number>;
  /**
   * 审批单是否允许多选
   */
  allowMultiForm?: boolean;
  /**
   * 通讯录是否允许多选
   */
  allowMultipleContact?: boolean;
  /**
   * 地区类型，1-省份，2-城市，3-省市区
   */
  areaType?: FormFieldPropsAreaType;
  /**
   * 栅格组件的布局
   */
  cols?: Array<number>;
  /**
   * 描述，说明文字
   */
  content?: string;
  /**
   * 日期格式,1-年-月-日，2-年-月-日-时-分
   */
  dateFormat?: number;
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 小数位数
   */
  digits?: number;
  duration?: boolean;
  durationLabel?: string;
  /**
   * 结束日期
   */
  endTime?: string;
  /**
   * 外部数据源字段配置
   */
  externalOptionsProperties?: ExternalOptionsProperties;
  /**
   * 选项外部数据源地址
   */
  externalOptionsUrl?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 是否整数
   */
  integer?: boolean;
  /**
   * 名称，标题
   */
  label?: string;
  /**
   * 标签宽度
   */
  labelWidth?: string;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 最多选择
   */
  maxSelect?: number;
  /**
   * 最大值
   */
  maxValue?: number;
  /**
   * 最小长度
   */
  minLength?: number;
  /**
   * 最少选择
   */
  minSelect?: number;
  /**
   * 最小值
   */
  minValue?: number;
  /**
   * 是否数值类型选项
   */
  numberValueOption?: boolean;
  /**
   * 系统内建选项类型
   */
  optionDataSetId?: string;
  /**
   * 选项列表（key,value）
   */
  options?: Array<ItemReq>;
  /**
   * 选项来源，当组件为单选或多选时有效，1-自定义选项，2-内建选项,3-数据字典
   */
  optionsSource?: FormFieldPropsOptionsSource;
  /**
   * 父字段id
   */
  parentId?: string;
  /**
   * 提示信息
   */
  placeholder?: string;
  /**
   * 是否参与打印
   */
  print?: boolean;
  /**
   * 是否流程相关
   */
  processRelated?: boolean;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 允许关联的表单类型id
   */
  relatedFormId?: string;
  relatedShowLogic?: Array<ShowLogicReq>;
  /**
   * 是否必填
   */
  required?: boolean;
  /**
   * 单选或多选的选择方式
   */
  selectMode?: DicEncodeType;
  /**
   * 栅格数
   */
  span?: number;
  /**
   * 起始日期
   */
  startTime?: string;
  /**
   * 待统计子表单控件id
   */
  statisticsFieldId?: string;
  /**
   * 统计类型为MultipleFields时，统计的字段列表
   */
  statisticsFields?: Array<string>;
  /**
   * 统计类型
   */
  statisticsMode?: FormFieldPropsStatisticsMode;
  /**
   * 待统计子表单的子控件id
   */
  statisticsSubFieldId?: string;
  /**
   * 统计类型
   */
  statisticsType?: FormFieldPropsStatisticsType;
  /**
   * 是否校验唯一性（一般用于提交信息单时的手机号、身份证号等校验）
   */
  unique?: boolean;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 选择成员或部门
   */
  userOrDepartment?: string;
}


export interface FormFieldPropsRes {
  /**
   * 动作名称
   */
  actionName?: string;
  /**
   * 相关类型,我发起的、抄送我的、我审批的、我处理的
   */
  allowFormRelevanceTypes?: Array<number>;
  /**
   * 审批单是否允许多选
   */
  allowMultiForm?: boolean;
  /**
   * 通讯录是否允许多选
   */
  allowMultipleContact?: boolean;
  /**
   * 地区类型，1-省份，2-城市，3-省市区
   */
  areaType?: FormFieldPropsAreaType;
  /**
   * 栅格组件的布局
   */
  cols?: Array<number>;
  /**
   * 描述，说明文字
   */
  content?: string;
  /**
   * 日期格式,1-年-月-日，2-年-月-日-时-分
   */
  dateFormat?: number;
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 小数位数
   */
  digits?: number;
  duration?: boolean;
  durationLabel?: string;
  /**
   * 结束日期
   */
  endTime?: string;
  /**
   * 外部数据源字段配置
   */
  externalOptionsProperties?: ExternalOptionsProperties;
  /**
   * 选项外部数据源地址
   */
  externalOptionsUrl?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 是否整数
   */
  integer?: boolean;
  /**
   * 名称，标题
   */
  label?: string;
  /**
   * 标签宽度
   */
  labelWidth?: string;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 最多选择
   */
  maxSelect?: number;
  /**
   * 最大值
   */
  maxValue?: number;
  /**
   * 最小长度
   */
  minLength?: number;
  /**
   * 最少选择
   */
  minSelect?: number;
  /**
   * 最小值
   */
  minValue?: number;
  /**
   * 是否数值类型选项
   */
  numberValueOption?: boolean;
  /**
   * 系统内建选项类型
   */
  optionDataSetId?: string;
  /**
   * 选项列表（key,value）
   */
  options?: Array<ItemRes>;
  /**
   * 选项来源，当组件为单选或多选时有效，1-自定义选项，2-内建选项,3-数据字典
   */
  optionsSource?: FormFieldPropsOptionsSource;
  /**
   * 父字段id
   */
  parentId?: string;
  /**
   * 提示信息
   */
  placeholder?: string;
  /**
   * 是否参与打印
   */
  print?: boolean;
  /**
   * 是否流程相关
   */
  processRelated?: boolean;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 允许关联的表单类型id
   */
  relatedFormId?: string;
  relatedShowLogic?: Array<ShowLogicRes>;
  /**
   * 是否必填
   */
  required?: boolean;
  /**
   * 单选或多选的选择方式
   */
  selectMode?: DicEncodeType;
  /**
   * 栅格数
   */
  span?: number;
  /**
   * 起始日期
   */
  startTime?: string;
  /**
   * 待统计子表单控件id
   */
  statisticsFieldId?: string;
  /**
   * 统计类型为MultipleFields时，统计的字段列表
   */
  statisticsFields?: Array<string>;
  /**
   * 统计类型
   */
  statisticsMode?: FormFieldPropsStatisticsMode;
  /**
   * 待统计子表单的子控件id
   */
  statisticsSubFieldId?: string;
  /**
   * 统计类型
   */
  statisticsType?: FormFieldPropsStatisticsType;
  /**
   * 是否校验唯一性（一般用于提交信息单时的手机号、身份证号等校验）
   */
  unique?: boolean;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 选择成员或部门
   */
  userOrDepartment?: string;
}


export interface FormFieldValue {
  displayValue?: string;
  fieldType?: FormFieldDefinitionComponentName;
  label?: string;
  value?: any;
  valueType?: FormFieldValueValueType;
}


export interface FormFieldValueReq {
  displayValue?: string;
  fieldType?: FormFieldDefinitionComponentName;
  label?: string;
  value?: any;
  valueType?: FormFieldValueValueType;
}


export interface FormFieldValueRes {
  displayValue?: string;
  fieldType?: FormFieldDefinitionComponentName;
  label?: string;
  value?: any;
  valueType?: FormFieldValueValueType;
}


export interface FormId {
  formId?: string;
  processId?: string;
}


export interface FormProps {
  labelWidth?: string;
}


export interface FormReq {
  /**
   * 高级选项
   */
  advancedProps?: FormAdvancedProps;
  apps?: FormApps;
  canModify?: boolean;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 创建用户
   */
  createUserId?: string;
  /**
   * 数据提交后是否允许修改（非审批单）
   */
  dataAllowModify?: boolean;
  /**
   * 表单组件
   */
  definition?: FormDefinitionReq;
  /**
   * 表单描述，备注
   */
  description?: string;
  /**
   * 所属分组，0-其他，1-费用报销，2-出勤休假，3-人事考核
   */
  formGroup?: number;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 表单编号
   */
  id?: string;
  /**
   * 管理员
   */
  manageScope?: VisibleScopeVOReq;
  /**
   * 表单名称
   */
  name?: string;
  /**
   * 平台选择
   */
  platform?: FormPlatform;
  /**
   * 绑定的流程id
   */
  processId?: string;
  system?: boolean;
  /**
   * 表单类型
   */
  type?: string;
  /**
   * 可见范围
   */
  visibleScope?: VisibleScopeVOReq;
}


export interface FormRes {
  /**
   * 高级选项
   */
  advancedProps?: FormAdvancedProps;
  apps?: FormApps;
  canModify?: boolean;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 创建用户
   */
  createUserId?: string;
  /**
   * 数据提交后是否允许修改（非审批单）
   */
  dataAllowModify?: boolean;
  /**
   * 表单组件
   */
  definition?: FormDefinitionRes;
  /**
   * 表单描述，备注
   */
  description?: string;
  /**
   * 所属分组，0-其他，1-费用报销，2-出勤休假，3-人事考核
   */
  formGroup?: number;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 表单编号
   */
  id?: string;
  /**
   * 管理员
   */
  manageScope?: VisibleScopeVORes;
  /**
   * 表单名称
   */
  name?: string;
  /**
   * 平台选择
   */
  platform?: FormPlatform;
  /**
   * 绑定的流程id
   */
  processId?: string;
  system?: boolean;
  /**
   * 表单类型
   */
  type?: string;
  /**
   * 可见范围
   */
  visibleScope?: VisibleScopeVORes;
}


export interface FormSaveVO {
  form?: FormReq;
  preview?: boolean;
  process?: ProcessDefinitionReq;
}


export interface FunctionParam {
  type?: FunctionParamType;
  zhName?: string;
}


export interface GetEntityOptionParams {
  displayField?: string;
  entityId?: string;
  extraFields?: Array<string>;
  keywords?: string;
  size?: number;
  value?: any;
}


export interface HandleRecord {
  /**
   * 处理意见
   */
  comment?: string;
  /**
   * 处理状态，1-通过，2-拒绝
   */
  state?: number;
  /**
   * 处理时间
   */
  time?: string;
  /**
   * 处理的用户id（企业微信id）
   */
  userId?: string;
}


export interface HandlingOpinionsVO {
  content?: string;
  formDataId?: string;
}


export interface HighLevelFunctionVO {
  name?: string;
  params?: Array<FunctionParam>;
  returnType?: FunctionParamType;
  zhName?: string;
}


export interface ImportResult {
  added?: number;
  errors?: Array<string>;
  updated?: number;
}


export interface ImportantInfoComponent {
  columns?: number;
  component?: string;
  fields?: Array<ViewField>;
  iconField?: string;
  id?: string;
  props?: any;
  titleField?: string;
}


export interface InterviewData {
  data?: SubmitDataRes;
  time?: string;
  user?: MemberVORes;
}


export interface Item {
  id?: string;
  name?: string;
}


export interface ItemReq {
  id?: string;
  name?: string;
}


export interface ItemRes {
  id?: string;
  name?: string;
}


export interface ListViewLayout {
  collect?: Array<Collect>;
  fields?: Array<ViewField>;
  operations?: Array<string>;
  searchFields?: Array<string>;
}


export interface LocalTime {
  hour?: number;
  minute?: number;
  nano?: number;
  second?: number;
}


export interface MemberConfiguration {
  id?: MemberConfigurationId;
  members?: Array<MemberVOReq>;
}


export interface MemberConfigurationVO {
  id?: string;
  members?: Array<MemberVORes>;
  zhName?: string;
}


export interface MemberVO {
  avatar?: string;
  id?: string;
  leaderInDep?: Array<boolean>;
  mobile?: string;
  name?: string;
  position?: string;
}


export interface MemberVOReq {
  avatar?: string;
  id?: string;
  leaderInDep?: Array<boolean>;
  mobile?: string;
  name?: string;
  position?: string;
}


export interface MemberVORes {
  avatar?: string;
  id?: string;
  leaderInDep?: Array<boolean>;
  mobile?: string;
  name?: string;
  position?: string;
}


export interface MenuItem {
  /**
   * 是否启用菜单项
   */
  enable?: boolean;
  /**
   * 是否启用菜单项
   */
  enabled?: boolean;
  /**
   * 菜单项图标名称
   */
  icon?: string;
  /**
   * 菜单项id（uuid）
   */
  id?: string;
  /**
   * 菜单项显示的名称
   */
  label?: string;
  /**
   * 菜单项级别
   */
  level?: number;
  options?: MenuOptions;
  /**
   * 菜单项序号（用于排序）
   */
  order?: number;
  /**
   * 上级菜单项id，顶级菜单为null
   */
  parentId?: string;
  /**
   * 有访问权限的角色集合，为空表示不限制
   */
  roles?: Array<string>;
  type?: MenuItemType;
  /**
   * 菜单项链接
   */
  uri?: string;
}


export interface MenuItemVO {
  children?: Array<MenuItemVO>;
  icon?: string;
  id?: string;
  label?: string;
  options?: MenuOptions;
  parentId?: string;
  type?: MenuItemType;
  uri?: string;
}


export interface MenuOptions {
  customPageApiName?: string;
  entityId?: string;
  layoutApiName?: string;
  listViewApiName?: string;
  routeName?: string;
}


export interface MessageReceiver {
  departmentIds?: Array<string>;
  entityProperties?: Array<string>;
  entityRoles?: Array<string>;
  positions?: Array<string>;
  systemRoles?: Array<string>;
  tags?: Array<string>;
  userIds?: Array<string>;
}


export interface MissingInfoVO {
  id?: string;
  missingInfo?: Array<string>;
  name?: string;
}


export interface NoticeMessageVO {
  /**
   * 模板编码
   */
  code?: string;
  /**
   * 模板参数
   */
  contentParam?: any;
  /**
   * 链接中占位符
   */
  linkParam?: any;
  /**
   * 企业微信id（注意：如果该字段为空，则使用数据库默认通知人员）
   */
  weChatId?: Array<string>;
}


export interface NoticeTemplateDTO {
  /**
   * 编码
   */
  code?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 参数
   */
  contentParam?: Array<string>;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 创建人
   */
  createUserId?: string;
  /**
   * 是否可删除
   */
  deletable?: boolean;
  /**
   * 描述
   */
  description?: string;
  id?: number;
  /**
   * 最后修改时间
   */
  lastModifiedTime?: string;
  /**
   * 通知跳转的链接
   */
  link?: string;
  /**
   * 通知跳转的链接参数
   */
  linkParam?: Array<string>;
  /**
   * 机器人发送消息类型，文本类型(type)，带格式类型(markdown类型)
   */
  msgType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 默认通知人员
   */
  noticeUser?: Array<string>;
  /**
   * 标题
   */
  title?: string;
  /**
   * 标识发送普通微信消息(0)，还是机器人消息(1)
   */
  type?: number;
  types?: any;
  /**
   * 机器人webHook地址
   */
  webHook?: string;
}


export interface NoticeTemplateForm {
  /**
   * 编码
   */
  code?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 参数
   */
  contentParam?: Array<string>;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 创建人
   */
  createUserId?: string;
  /**
   * 是否可删除
   */
  deletable?: boolean;
  /**
   * 描述
   */
  description?: string;
  /**
   * 最后修改时间
   */
  lastModifiedTime?: string;
  /**
   * 通知跳转的链接
   */
  link?: string;
  /**
   * 通知跳转的链接参数
   */
  linkParam?: Array<string>;
  /**
   * 机器人发送消息类型，文本类型(type)，带格式类型(markdown类型)
   */
  msgType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 默认通知人员
   */
  noticeUser?: Array<string>;
  /**
   * 标题
   */
  title?: string;
  /**
   * 标识发送普通微信消息(0)，还是机器人消息(1)
   */
  type?: number;
  /**
   * 机器人webHook地址
   */
  webHook?: string;
}


export interface NoticeTemplateVO {
  /**
   * 编码
   */
  code?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 参数
   */
  contentParam?: Array<string>;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 创建人
   */
  createUserId?: string;
  /**
   * 是否可删除
   */
  deletable?: boolean;
  /**
   * 描述
   */
  description?: string;
  /**
   * 模板id
   */
  id?: number;
  /**
   * 最后修改时间
   */
  lastModifiedTime?: string;
  /**
   * 通知跳转的链接
   */
  link?: string;
  /**
   * 通知跳转的链接参数
   */
  linkParam?: Array<string>;
  /**
   * 机器人发送消息类型，文本类型(type)，带格式类型(markdown类型)
   */
  msgType?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 默认通知人员
   */
  noticeUser?: Array<string>;
  /**
   * 标题
   */
  title?: string;
  /**
   * 标识发送普通微信消息(0)，还是机器人消息(1)
   */
  type?: number;
  /**
   * 机器人webHook地址
   */
  webHook?: string;
}


export interface NsArea {
  /**
   * 行政区划编码
   */
  id?: string;
  /**
   * 级别
   */
  level?: number;
  /**
   * 行政区划名称
   */
  name?: string;
  /**
   * 父节点编码
   */
  parentId?: string;
  /**
   * 父节点名称
   */
  parentName?: string;
  simpleName?: string;
}


export interface Order {
  direction?: EntitySearchFormSortDirection;
  ignoreCase?: boolean;
  nullHandling?: OrderNullHandling;
  property?: string;
}


export interface PageComponent {
  id?: string;
  options?: any;
  type?: PageComponentType;
}


export interface PageImpl<T> {
  content?: Array<any>;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  total?: number;
  totalElements?: number;
  totalPages?: number;
}


export interface PageLayout {
  center?: Array<PageComponent>;
  footer?: Array<PageComponent>;
  header?: Array<PageComponent>;
}


export interface Page<T> {
  content?: Array<BusinessWorkflowRes>;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}


export interface PerformanceEvaluationForm {
  id?: string;
  maxScore?: number;
  sections?: Array<PerformanceEvaluationSection>;
  title?: string;
}


export interface PerformanceEvaluationRule {
  departmentIds?: Array<number>;
  enable?: boolean;
  flow?: Array<EvaluateStep>;
  formId?: string;
  id?: string;
  postIds?: Array<string>;
  priority?: number;
  title?: string;
  userIds?: Array<string>;
}


export interface PerformanceEvaluationSection {
  description?: string;
  items?: Array<ScoringItem>;
  ranges?: Array<ScoringRange>;
  singleItemMaxScore?: number;
  title?: string;
  weight?: number;
}


export interface ProcessConditionBranchReq {
  conditions?: Array<BranchConditionReq>;
  content?: string;
  id?: string;
  nodes?: Array<ProcessNodeDataReq>;
  title?: string;
}


export interface ProcessConditionBranchRes {
  conditions?: Array<BranchConditionRes>;
  content?: string;
  id?: string;
  nodes?: Array<ProcessNodeDataRes>;
  title?: string;
}


export interface ProcessDefinitionReq {
  nodes?: Array<ProcessNodeDataReq>;
}


export interface ProcessDefinitionRes {
  nodes?: Array<ProcessNodeDataRes>;
}


export interface ProcessFlow {
  steps?: Array<ProcessFlowStep>;
}


export interface ProcessFlowDataReq {
  steps?: Array<ProcessFlowStepDataReq>;
}


export interface ProcessFlowDataRes {
  steps?: Array<ProcessFlowStepDataRes>;
}


export interface ProcessFlowStep {
  /**
   * 是否允许加签
   */
  allowAddApprover?: boolean;
  allowCallNotice?: boolean;
  allowCancel?: boolean;
  allowClose?: boolean;
  allowExpireHandle?: boolean;
  allowExpireNotice?: boolean;
  allowFinish?: boolean;
  handleType?: number;
  id?: string;
  /**
   * 同一节点多人审批时的审批方式, 1-依次审批，2-会签，3-或签
   */
  multiApprovalType?: FormFieldPropsAreaType;
  /**
   * 步骤标题
   */
  title?: string;
  /**
   * 节点处理类型
   */
  type?: ProcessFlowStepType;
  users?: Array<MemberVORes>;
}


export interface ProcessFlowStepDataReq {
  /**
   * 是否允许加签
   */
  allowAddApprover?: boolean;
  allowCallNotice?: boolean;
  allowCancel?: boolean;
  allowClose?: boolean;
  allowExpireHandle?: boolean;
  allowExpireNotice?: boolean;
  allowFinish?: boolean;
  handleRecords?: Array<HandleRecord>;
  handleType?: number;
  id?: string;
  /**
   * 同一节点多人审批时的审批方式, 1-依次审批，2-会签，3-或签
   */
  multiApprovalType?: FormFieldPropsAreaType;
  readRecords?: Array<ReadRecord>;
  state?: FormDataState;
  time?: string;
  /**
   * 步骤标题
   */
  title?: string;
  /**
   * 节点处理类型
   */
  type?: ProcessFlowStepType;
  users?: Array<MemberVOReq>;
}


export interface ProcessFlowStepDataRes {
  /**
   * 是否允许加签
   */
  allowAddApprover?: boolean;
  allowCallNotice?: boolean;
  allowCancel?: boolean;
  allowClose?: boolean;
  allowExpireHandle?: boolean;
  allowExpireNotice?: boolean;
  allowFinish?: boolean;
  handleRecords?: Array<HandleRecord>;
  handleType?: number;
  id?: string;
  /**
   * 同一节点多人审批时的审批方式, 1-依次审批，2-会签，3-或签
   */
  multiApprovalType?: FormFieldPropsAreaType;
  readRecords?: Array<ReadRecord>;
  remainHandleUserIds?: Array<string>;
  state?: FormDataState;
  time?: string;
  /**
   * 步骤标题
   */
  title?: string;
  /**
   * 节点处理类型
   */
  type?: ProcessFlowStepType;
  users?: Array<MemberVORes>;
}


export interface ProcessNodeDataReq {
  /**
   * 节点分支条件列表
   */
  branches?: Array<ProcessConditionBranchReq>;
  /**
   * 节点描述
   */
  content?: string;
  /**
   * 节点id
   */
  id?: string;
  nodes?: Array<ProcessNodeDataReq>;
  /**
   * 节点其他属性
   */
  props?: ProcessNodePropsReq;
  /**
   * 节点标题
   */
  title?: string;
  /**
   * 节点类型
   */
  type?: ProcessFlowStepType;
}


export interface ProcessNodeDataRes {
  /**
   * 节点分支条件列表
   */
  branches?: Array<ProcessConditionBranchRes>;
  /**
   * 节点描述
   */
  content?: string;
  /**
   * 节点id
   */
  id?: string;
  nodes?: Array<ProcessNodeDataRes>;
  /**
   * 节点其他属性
   */
  props?: ProcessNodePropsRes;
  /**
   * 节点标题
   */
  title?: string;
  /**
   * 节点类型
   */
  type?: ProcessFlowStepType;
}


export interface ProcessNodePropsReq {
  /**
   * 是否允许加签
   */
  allowAddApprover?: boolean;
  /**
   * 允许使用呼叫提醒
   */
  allowCallNotice?: boolean;
  /**
   * 是否允许撤回审批
   */
  allowCancel?: boolean;
  /**
   * 是否允许关闭审批（审批状态变更为已关闭且后续节点无法继续审批）
   */
  allowClose?: boolean;
  /**
   * 超时处理
   */
  allowExpireHandle?: boolean;
  /**
   * 超时提醒
   */
  allowExpireNotice?: boolean;
  /**
   * 是否允许结束审批（审批状态变更为已通过且后续节点无法继续审批）
   */
  allowFinish?: boolean;
  /**
   * 允许上一节点指定当前节点处理人（当处理人存在多个时）
   */
  allowLastChoose?: boolean;
  /**
   * 启用审批意见（默认为启用）
   */
  allowOpinion?: boolean;
  /**
   * 是否自动审批
   */
  autoApproval?: boolean;
  /**
   * 自动审批类型，1-上一节点审批过的成员本节点自动审批，2-前面任一节点审批过的成员本节点自动审批
   */
  autoApprovalType?: number;
  /**
   * 去重方式,1-重复时只保留第一个，2-连续重复时去重，3-不去重
   */
  duplicateRemoveType?: FormFieldPropsAreaType;
  /**
   * 当审批人为空时的处理方式，1-自动通过，2-由管理员审批
   */
  emptyHandleType?: DicEncodeType;
  /**
   * 结束审批的主管级别
   */
  endSupervisorLevel?: number;
  /**
   * 超时处理设置
   */
  expireHandleDetails?: Array<ExpireHandleProps>;
  /**
   * 超时提醒详细设置
   */
  expireNoticeDetails?: Array<ExpireNoticeProps>;
  /**
   * 字段可见性
   */
  fieldVisibility?: Array<FieldVisibilityVOReq>;
  /**
   * 处理类型
   */
  handleType?: ProcessNodePropsReqHandleType;
  /**
   * 当审批人类型为表单联系人时，所使用的表单项id
   */
  memberFieldId?: string;
  /**
   * 同一节点多人审批时的审批方式, 1-依次审批，2-会签，3-或签
   */
  multiApprovalType?: FormFieldPropsAreaType;
  /**
   * 当类型为表单联系人时，节点处理人来源的字段id
   */
  relatedFieldId?: string;
  /**
   * 当类型为表单联系人时，节点处理人来源的字段相关属性
   */
  relatedFieldProp?: string;
  /**
   * 当审批人为发起人自选时，自选审批人最大数量
   */
  selfChooseMax?: number;
  /**
   * 当审批人为发起人自选时，自选审批人范围
   */
  selfChooseScope?: VisibleScopeVOReq;
  /**
   * 指定审批的成员，当handleType为1时有效
   */
  specificUsers?: Array<MemberVOReq>;
  /**
   * 当审批人为主管时，主管的级别，1-直接主管
   */
  supervisorLevel?: number;
  /**
   * 是否使用手写签名
   */
  useHandwrittenSignature?: boolean;
}


export interface ProcessNodePropsRes {
  /**
   * 是否允许加签
   */
  allowAddApprover?: boolean;
  /**
   * 允许使用呼叫提醒
   */
  allowCallNotice?: boolean;
  /**
   * 是否允许撤回审批
   */
  allowCancel?: boolean;
  /**
   * 是否允许关闭审批（审批状态变更为已关闭且后续节点无法继续审批）
   */
  allowClose?: boolean;
  /**
   * 超时处理
   */
  allowExpireHandle?: boolean;
  /**
   * 超时提醒
   */
  allowExpireNotice?: boolean;
  /**
   * 是否允许结束审批（审批状态变更为已通过且后续节点无法继续审批）
   */
  allowFinish?: boolean;
  /**
   * 允许上一节点指定当前节点处理人（当处理人存在多个时）
   */
  allowLastChoose?: boolean;
  /**
   * 启用审批意见（默认为启用）
   */
  allowOpinion?: boolean;
  /**
   * 是否自动审批
   */
  autoApproval?: boolean;
  /**
   * 自动审批类型，1-上一节点审批过的成员本节点自动审批，2-前面任一节点审批过的成员本节点自动审批
   */
  autoApprovalType?: number;
  /**
   * 去重方式,1-重复时只保留第一个，2-连续重复时去重，3-不去重
   */
  duplicateRemoveType?: FormFieldPropsAreaType;
  /**
   * 当审批人为空时的处理方式，1-自动通过，2-由管理员审批
   */
  emptyHandleType?: DicEncodeType;
  /**
   * 结束审批的主管级别
   */
  endSupervisorLevel?: number;
  /**
   * 超时处理设置
   */
  expireHandleDetails?: Array<ExpireHandleProps>;
  /**
   * 超时提醒详细设置
   */
  expireNoticeDetails?: Array<ExpireNoticeProps>;
  /**
   * 字段可见性
   */
  fieldVisibility?: Array<FieldVisibilityVORes>;
  /**
   * 处理类型
   */
  handleType?: ProcessNodePropsReqHandleType;
  /**
   * 当审批人类型为表单联系人时，所使用的表单项id
   */
  memberFieldId?: string;
  /**
   * 同一节点多人审批时的审批方式, 1-依次审批，2-会签，3-或签
   */
  multiApprovalType?: FormFieldPropsAreaType;
  /**
   * 当类型为表单联系人时，节点处理人来源的字段id
   */
  relatedFieldId?: string;
  /**
   * 当类型为表单联系人时，节点处理人来源的字段相关属性
   */
  relatedFieldProp?: string;
  /**
   * 当审批人为发起人自选时，自选审批人最大数量
   */
  selfChooseMax?: number;
  /**
   * 当审批人为发起人自选时，自选审批人范围
   */
  selfChooseScope?: VisibleScopeVORes;
  /**
   * 指定审批的成员，当handleType为1时有效
   */
  specificUsers?: Array<MemberVORes>;
  /**
   * 当审批人为主管时，主管的级别，1-直接主管
   */
  supervisorLevel?: number;
  /**
   * 是否使用手写签名
   */
  useHandwrittenSignature?: boolean;
}


export interface PropertyOptions {
  defaultValue?: any;
  dependProperties?: Array<string>;
  numberValueType?: PropertyOptionsNumberValueType;
  scriptResultType?: PropertyOptionsScriptResultType;
}


export interface ReadRecord {
  /**
   * 处理时间
   */
  time?: string;
  /**
   * 处理的用户id（企业微信id）
   */
  userId?: string;
}


export interface RelatedEntityData {
  data?: Array<any>;
  entity?: BusinessEntity;
  properties?: Array<BusinessEntityPropertyVO>;
  statistics?: Array<StatisticsResult>;
  total?: number;
}


export interface RelatedEntityDataListComponent {
  component?: string;
  conditions?: Array<EntityDataSearchCondition>;
  entityId?: string;
  fields?: Array<ViewField>;
  id?: string;
  props?: any;
}


export interface RelatedEntitySearchForm {
  conditions?: Array<EntityDataSearchConditionReq>;
  entityDataId?: string;
  entityId?: string;
  page?: number;
  relatedEntityFields?: Array<string>;
  relatedEntityId?: string;
  size?: number;
  statisticsDefinitionIds?: Array<string>;
}


export interface ReportCheckItem {
  problems?: Array<ReportProblem>;
  user?: SimpleCorpWechatUser;
}


export interface ReportCheckResult {
  data?: Array<ReportCheckItem>;
  emailCount?: number;
  noReplyCount?: number;
  noReportCount?: number;
  notSentToLeaderCount?: number;
  userCount?: number;
}


export interface ReportProblem {
  relatedUsers?: Array<SimpleCorpWechatUser>;
  type?: number;
}


export interface Result {
  createTime?: string;
  from?: string;
  originTo?: string;
  smsMsgId?: string;
  status?: string;
}


export interface Resume {
  /**
   * 年龄
   */
  age?: number;
  /**
   * 约定时间
   */
  appointedTime?: string;
  /**
   * 确认入职时间
   */
  confirmTime?: string;
  /**
   * 创建人
   */
  createUser?: MemberVORes;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 学历编码
   */
  educationCode?: string;
  /**
   * 期望薪资
   */
  expectSalary?: number;
  /**
   * 简历文件名
   */
  fileKey?: string;
  filterUserId?: string;
  /**
   * 简历id
   */
  id?: string;
  interviewConfirmContent?: string;
  interviewConfirmed?: boolean;
  /**
   * 面试记录的id集合
   */
  interviewRecords?: Array<InterviewData>;
  /**
   * 最后修改时间
   */
  lastModifiedTime?: string;
  /**
   * 邮箱
   */
  mailbox?: string;
  /**
   * md5编码
   */
  md5Code?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 工作地点编码
   */
  placeCode?: string;
  /**
   * 应聘职位编码
   */
  postId?: string;
  regionId?: string;
  /**
   * 简历来源
   */
  resumeSource?: string;
  /**
   * 性别
   */
  sexCode?: number;
  /**
   * 简历状态变更记录
   */
  statusChangeRecord?: Array<ResumeStatusRecord>;
  /**
   * 简历状态编码
   */
  statusCode?: string;
  /**
   * 工作年限
   */
  workingYears?: number;
}


export interface ResumeAggByDayVO {
  day?: string;
  resumeNum?: string;
}


export interface ResumeAllAttrDTO {
  /**
   * 年龄
   */
  age?: number;
  /**
   * 约定时间
   */
  appointedTime?: string;
  /**
   * 确认入职时间
   */
  confirmTime?: string;
  /**
   * 创建人
   */
  createUser?: MemberVORes;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 学历编码
   */
  educationCode?: number;
  /**
   * 期望薪资
   */
  expectSalary?: string;
  /**
   * 简历文件名
   */
  fileKey?: string;
  /**
   * 简历id
   */
  id?: string;
  /**
   * 最后修改时间
   */
  lastModifiedTime?: string;
  /**
   * 邮箱
   */
  mailbox?: string;
  /**
   * md5编码
   */
  md5Code?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 地区编码
   */
  placeCode?: string;
  /**
   * 应聘职位编码
   */
  postId?: string;
  /**
   * 简历来源
   */
  resumeSource?: string;
  /**
   * 性别
   */
  sex?: string;
  /**
   * 性别编码
   */
  sexCode?: number;
  /**
   * 简历状态变更记录
   */
  statusChangeRecord?: Array<ResumeStatusRecord>;
  /**
   * 简历状态编码
   */
  statusCode?: number;
  /**
   * 工作年限
   */
  workingYears?: number;
}


export interface ResumeAppointVO {
  id?: string;
  time?: string;
}


export interface ResumeChooseDTO {
  /**
   * 学历
   */
  education?: string;
  /**
   * 学历编码
   */
  educationCode?: string;
  /**
   * 扩展字段
   */
  extras?: any;
  /**
   * id
   */
  id?: string;
  /**
   * 行政区
   */
  place?: string;
  /**
   * 行政区编码
   */
  placeCode?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 职位编码
   */
  postId?: string;
  /**
   * 类型：筛选人(chooseResume)or面试人(interview)
   */
  type?: string;
  /**
   * 筛选人or面试人
   */
  users?: Array<UserRes>;
  /**
   * 工作年限
   */
  workingYears?: number;
}


export interface ResumeChooseForm {
  /**
   * 学历编码
   */
  educationCode?: string;
  /**
   * 扩展字段，可以放任意字段
   */
  extras?: any;
  /**
   * id
   */
  id?: string;
  /**
   * 地区编码
   */
  place?: string;
  /**
   * 职位编码
   */
  postId?: string;
  /**
   * 类型：筛选人(0)or面试人(1)
   */
  type?: number;
  /**
   * 筛选人or面试人
   */
  users?: Array<UserReq>;
  /**
   * 工作年限
   */
  workingYears?: number;
}


export interface ResumeDTO {
  /**
   * 年龄
   */
  age?: number;
  /**
   * 约定时间
   */
  appointedTime?: string;
  /**
   * 确认入职时间
   */
  confirmTime?: string;
  /**
   * 创建人
   */
  createUser?: MemberVORes;
  /**
   * 创建时间
   */
  createdTime?: string;
  /**
   * 学历
   */
  education?: string;
  /**
   * 学历编码
   */
  educationCode?: string;
  /**
   * 期望薪资
   */
  expectSalary?: string;
  /**
   * 简历文件名
   */
  fileKey?: string;
  /**
   * 简历筛选人员
   */
  filterUser?: User;
  /**
   * 简历id
   */
  id?: string;
  /**
   * 约面回复内容
   */
  interviewConfirmContent?: string;
  /**
   * 面试记录的id集合
   */
  interviewRecords?: Array<InterviewData>;
  /**
   * 最后修改时间
   */
  lastModifiedTime?: string;
  /**
   * 邮箱
   */
  mailbox?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 地区
   */
  place?: string;
  /**
   * 地区编码
   */
  placeCode?: string;
  /**
   * 应聘职位
   */
  position?: string;
  /**
   * 应聘职位编码
   */
  postId?: string;
  /**
   * 所属区域
   */
  region?: string;
  /**
   * 简历来源
   */
  resumeSource?: string;
  /**
   * 性别
   */
  sex?: string;
  /**
   * 性别编码
   */
  sexCode?: number;
  /**
   * 简历状态
   */
  status?: string;
  /**
   * 简历状态变更记录
   */
  statusChangeRecord?: Array<ResumeStatusRecord>;
  /**
   * 简历状态编码
   */
  statusCode?: string;
  /**
   * 工作年限
   */
  workingYears?: number;
}


export interface ResumeDetailVO {
  /**
   * 简历内容
   */
  content?: string;
  /**
   * 简历基本信息
   */
  resume?: ResumeDTO;
}


export interface ResumeForm {
  /**
   * 年龄
   */
  age?: number;
  /**
   * 约面时间
   */
  appointedTime?: string;
  /**
   * 确认入职时间
   */
  confirmTime?: string;
  /**
   * 学历编码
   */
  educationCode?: string;
  /**
   * 期望薪资
   */
  expectSalary?: number;
  /**
   * 简历id
   */
  id?: string;
  /**
   * 邮箱
   */
  mailbox?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 工作地点
   */
  place?: string;
  /**
   * 应聘职位id
   */
  postId?: string;
  /**
   * 性别
   */
  sex?: number;
  /**
   * 简历状态码
   */
  status?: string;
  /**
   * 工作年限
   */
  workingYears?: number;
}


export interface ResumeStatusRecord {
  from?: string;
  time?: string;
  to?: string;
  userId?: string;
}


export interface ResumeVO {
  /**
   * 约面时间
   */
  appointedTime?: string;
  /**
   * 学历编码
   */
  educationCode?: string;
  /**
   * 学历编码(支持多选)
   */
  educationCodeList?: Array<number>;
  /**
   * 时间范围查询，结束时间
   */
  endTime?: string;
  /**
   * 邮箱
   */
  mailbox?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  page?: number;
  /**
   * 工作地点
   */
  place?: string;
  /**
   * 应聘职位id
   */
  postId?: string;
  /**
   * 应聘职位id(支持多选)
   */
  postIdList?: Array<string>;
  size?: number;
  /**
   * 时间范围查询，开始时间
   */
  startTime?: string;
  /**
   * 简历状态码
   */
  status?: string;
  /**
   * 简历状态码(支持多选)
   */
  statusList?: Array<number>;
  /**
   * 工作年限
   */
  workingYears?: number;
}


export interface RoleFieldPermission {
  field?: string;
  /**
   * 2-读写，1-只读，0-不可见
   */
  permission?: FormFieldPropsAreaType;
}


export interface RolePermission {
  fieldsPermission?: Array<RoleFieldPermission>;
}


export interface RolePermissionForm {
  entityId?: string;
  permission?: RolePermission;
  role?: string;
}


export interface SaveMenuItemsFormVO {
  items?: Array<MenuItem>;
}


export interface SaveOrUpdateResult {
  added?: number;
  updated?: number;
}


export interface ScheduleJob {
  concurrent?: boolean;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  cron?: string;
  groupName?: string;
  id?: number;
  invokeTarget?: string;
  misfirePolicy?: string;
  name?: string;
  nextValidTime?: string;
  status?: number;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface ScheduleJobLog {
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  exceptionInfo?: string;
  groupName?: string;
  id?: number;
  invokeTarget?: string;
  jobName?: string;
  message?: string;
  startTime?: string;
  status?: string;
  stopTime?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface ScheduleJobReq {
  concurrent?: boolean;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  cron?: string;
  groupName?: string;
  id?: number;
  invokeTarget?: string;
  misfirePolicy?: string;
  name?: string;
  status?: number;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface ScheduleJobRes {
  concurrent?: boolean;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  cron?: string;
  groupName?: string;
  id?: number;
  invokeTarget?: string;
  misfirePolicy?: string;
  name?: string;
  nextValidTime?: string;
  status?: number;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface ScoringItem {
  basis?: Array<string>;
  id?: string;
  title?: string;
}


export interface ScoringRange {
  max?: number;
  min?: number;
}


export interface ScriptFunction {
  bindingEntityId?: string;
  content?: string;
  description?: string;
  id?: string;
  name?: string;
  namespace?: string;
  parameters?: Array<ScriptFunctionParameter>;
  returnType?: PropertyOptionsScriptResultType;
  zhName?: string;
}


export interface ScriptFunctionParameter {
  defaultValue?: any;
  name?: string;
  type?: ScriptFunctionParameterType;
  zhName?: string;
}


export interface SelectOption {
  children?: Array<SelectOption>;
  label?: string;
  value?: string;
}


export interface SettingItem {
  code?: string;
  createTime?: string;
  createUser?: string;
  description?: string;
  id?: number;
  lastUpdateTime?: string;
  lastUpdateUser?: string;
  module?: string;
  name?: string;
  type?: string;
  value?: any;
}


export interface SettingItemSaveVO {
  code?: string;
  description?: string;
  module?: string;
  name?: string;
  type?: string;
  value?: any;
}


export interface SettingItemUpdateVO {
  code?: string;
  description?: string;
  id?: number;
  module?: string;
  name?: string;
  type?: string;
  value?: any;
}


export interface ShowFieldCondition {
  operator?: string;
  property?: string;
  value?: any;
}


export interface ShowLogic {
  fieldId?: string;
  show?: boolean;
  value?: string;
}


export interface ShowLogicReq {
  fieldId?: string;
  show?: boolean;
  value?: string;
}


export interface ShowLogicRes {
  fieldId?: string;
  show?: boolean;
  value?: string;
}


export interface SimpleBusinessEntityVO {
  id?: string;
  name?: string;
  notes?: string;
}


export interface SimpleCorpWechatDepartment {
  /**
   * 所有上级部门
   */
  ancestorIds?: Array<number>;
  ancestorNames?: Array<string>;
  fullName?: string;
  /**
   * 企业部门id
   */
  id?: number;
  /**
   * 企业部门名称
   */
  name?: string;
  /**
   * 在同级部门中的排序
   */
  order?: number;
  /**
   * 上级部门id
   */
  parentId?: number;
}


export interface SimpleCorpWechatDepartmentVO {
  /**
   * 所有上级部门
   */
  ancestorIds?: Array<number>;
  ancestorNames?: Array<string>;
  fullName?: string;
  /**
   * 企业部门id
   */
  id?: number;
  /**
   * 企业部门名称
   */
  name?: string;
  namePinYin?: string;
  /**
   * 在同级部门中的排序
   */
  order?: number;
  /**
   * 上级部门id
   */
  parentId?: number;
}


export interface SimpleCorpWechatUser {
  allDepartments?: Array<string>;
  avatar?: string;
  crmHeadImagePath?: string;
  departments?: Array<string>;
  email?: string;
  errorDescription?: string;
  gender?: number;
  id?: string;
  leaderInDep?: Array<boolean>;
  mainDepartment?: string;
  mainDepartmentName?: string;
  mobile?: string;
  name?: string;
  orders?: Array<number>;
  position?: string;
  status?: number;
}


export interface SimpleCorpWechatUserVO {
  allDepartments?: Array<string>;
  avatar?: string;
  crmHeadImagePath?: string;
  departments?: Array<string>;
  email?: string;
  errorDescription?: string;
  gender?: number;
  id?: string;
  leaderInDep?: Array<boolean>;
  mainDepartment?: string;
  mainDepartmentName?: string;
  mobile?: string;
  name?: string;
  namePinYin?: string;
  orders?: Array<number>;
  position?: string;
  status?: number;
}


export interface SimpleCustomPageVO {
  apiName?: string;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  title?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface SimpleListLayoutVO {
  apiName?: string;
  name?: string;
}


export interface SimpleListViewVO {
  apiName?: string;
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  name?: string;
  updateTime?: string;
  updaterId?: string;
  updaterName?: string;
}


export interface SimpleStaffTemporaryInfoVO {
  createTime?: string;
  id?: number;
  staffId?: number;
  staffName?: string;
  type?: SimpleStaffTemporaryInfoVOType;
}


export interface SimpleUser {
  avatar?: string;
  id?: string;
  mobile?: string;
  name?: string;
}


export interface SimpleUserReq {
  avatar?: string;
  id?: string;
  mobile?: string;
  name?: string;
}


export interface SimpleUserRes {
  avatar?: string;
  id?: string;
  mobile?: string;
  name?: string;
}


export interface SingleDayAttendanceData {
  data?: UserCheckInItem;
  departmentNames?: Array<string>;
  name?: string;
  position?: string;
}


export interface SingleDayAttendanceResult {
  abnormalData?: Array<SingleDayAttendanceData>;
  normalCount?: number;
  total?: number;
}


export interface SmsNoticeAction {
  content?: string;
  contentType?: CorpWechatNoticeActionContentType;
  id?: string;
  receivers?: MessageReceiver;
  type?: BaseFlowActionType;
}


export interface SmsResult {
  code?: string;
  description?: string;
  result?: Array<Result>;
}


export interface SmsVO {
  /**
   * 约面时间
   */
  appointedTime?: string;
  /**
   * 简历id
   */
  id?: string;
}


export interface Sort {
  orders?: Array<Order>;
}


export interface SortData {
  list?: Array<SortDef>;
  tag?: string;
}


export interface SortDef {
  id?: number;
  order?: number;
}


export interface SortOptions {
  direction?: EntitySearchFormSortDirection;
  field?: string;
}


export interface SortOptionsReq {
  direction?: EntitySearchFormSortDirection;
  field?: string;
}


export interface SortOptionsRes {
  direction?: EntitySearchFormSortDirection;
  field?: string;
}


export interface SpentRecordVO {
  beginTime?: string;
  description?: string;
  endTime?: string;
  entityId?: string;
  entityType?: string;
  id?: string;
  spent?: number;
  tapdWorksapceId?: string;
}


export interface StaffBankCardInfoDTO {
  /**
   * 银行编码
   */
  bank?: string;
  /**
   * 卡号
   */
  cardNo?: string;
  extras?: any;
  /**
   * 开户行
   */
  openingBank?: string;
}


export interface StaffBankCardInfoVO {
  /**
   * 银行编码
   */
  bank?: string;
  /**
   * 卡号
   */
  cardNo?: string;
  extras?: any;
  /**
   * 员工id
   */
  id?: string;
  /**
   * 开户行
   */
  openingBank?: string;
}


export interface StaffBasicInfoVO {
  /**
   * 企业微信id
   */
  corpWechatId?: string;
  /**
   * 部门id列表
   */
  departmentIds?: Array<string>;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 基本信息扩展
   */
  extras?: any;
  /**
   * 员工id
   */
  id?: string;
  /**
   * 是否为部门领导
   */
  leaderInDep?: Array<string>;
  /**
   * 主部门id
   */
  mainDepartmentId?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 职位id
   */
  positionIds?: Array<string>;
  /**
   * 性别
   */
  sex?: string;
  /**
   * 办公城市
   */
  workingCity?: string;
  /**
   * 工号
   */
  workingNumber?: string;
  /**
   * 工作地点
   */
  workingPlace?: string;
}


export interface StaffContractInfoDTO {
  /**
   * 合同生效时间
   */
  beginTime?: string;
  /**
   * 合同终止时间
   */
  endTime?: string;
  extras?: any;
  /**
   * 续签次数
   */
  renewalNum?: number;
  /**
   * 签约公司
   */
  signingCompany?: string;
  /**
   * 合同期限
   */
  term?: string;
  /**
   * 合同类型
   */
  type?: string;
}


export interface StaffDTO {
  /**
   * 银行卡信息
   */
  bankCardInfo?: StaffBankCardInfoDTO;
  /**
   * 合同信息
   */
  contractInfo?: StaffContractInfoDTO;
  /**
   * 企业微信id
   */
  corpWechatId?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 部门id列表
   */
  departmentIds?: Array<string>;
  /**
   * 教育信息
   */
  educationInfo?: Array<StaffEducationInfoDTO>;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 紧急联系人
   */
  emergencyContactInfo?: Array<StaffEmergencyContactInfo>;
  /**
   * 基本信息扩展
   */
  extras?: any;
  /**
   * 家庭成员
   */
  familyInfo?: Array<StaffFamilyInfo>;
  id?: number;
  /**
   * 是否为部门领导
   */
  leaderInDep?: Array<string>;
  /**
   * 主部门id
   */
  mainDepartmentId?: string;
  /**
   * 个人材料信息
   */
  materialInfo?: StaffMaterialInfo;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 个人信息
   */
  personalInfo?: StaffPersonalInfoDTO;
  /**
   * 职位id
   */
  positionIds?: Array<string>;
  /**
   * 性别
   */
  sex?: string;
  /**
   * 办公城市
   */
  workingCity?: string;
  /**
   * 工作信息
   */
  workingInfo?: StaffWorkingInfoDTO;
  /**
   * 工号
   */
  workingNumber?: string;
  /**
   * 工作地点
   */
  workingPlace?: string;
}


export interface StaffDepartmentChangedRecordDTO {
  /**
   * 变更申请
   */
  changeApply?: string;
  /**
   * 变更时间
   */
  changeTime?: string;
  /**
   * 部门编码
   */
  departmentNames?: any;
  id?: number;
  /**
   * 变更后部门
   */
  laterDepartmentIds?: Array<number>;
  /**
   * 变更后主部门
   */
  laterMainDepartmentId?: number;
  /**
   * 操作人
   */
  operatingUser?: string;
  /**
   * 变更前部门
   */
  previousDepartmentIds?: Array<number>;
  /**
   * 变更前主部门
   */
  previousMainDepartmentId?: number;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: number;
}


export interface StaffDepartmentChangedRecordVO {
  /**
   * 变更时间
   */
  changeTime?: string;
  /**
   * 变更后员工部门id列表
   */
  laterDepartmentIds?: Array<string>;
  /**
   * 变更后员工主部门id
   */
  laterMainDepartmentId?: string;
  /**
   * 变更前员工部门id列表
   */
  previousDepartmentIds?: Array<string>;
  /**
   * 变更前员工主部门id
   */
  previousMainDepartmentId?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffEducationInfo {
  /**
   * 学历编码
   */
  education?: string;
  /**
   * 入学时间
   */
  enterSchoolTime?: string;
  extras?: any;
  /**
   * 毕业学校
   */
  graduationSchool?: string;
  /**
   * 毕业时间
   */
  graduationTime?: string;
  /**
   * 专业
   */
  major?: string;
}


export interface StaffEducationInfoDTO {
  /**
   * 学历编码
   */
  education?: string;
  /**
   * 入学时间
   */
  enterSchoolTime?: string;
  extras?: any;
  /**
   * 毕业学校
   */
  graduationSchool?: string;
  /**
   * 毕业时间
   */
  graduationTime?: string;
  /**
   * 专业
   */
  major?: string;
}


export interface StaffEducationInfoVO {
  /**
   * 员工id
   */
  id?: string;
  values?: Array<StaffEducationInfo>;
}


export interface StaffEmergencyContactInfo {
  extras?: any;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 关系
   */
  relationship?: string;
}


export interface StaffEmergencyContactInfoVO {
  /**
   * 员工id
   */
  id?: string;
  values?: Array<StaffEmergencyContactInfo>;
}


export interface StaffFamilyInfo {
  /**
   * 生日
   */
  birthday?: string;
  extras?: any;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 职业
   */
  profession?: string;
  /**
   * 关系
   */
  relationship?: string;
  /**
   * 性别
   */
  sex?: string;
}


export interface StaffFamilyInfoVO {
  /**
   * 员工id
   */
  id?: string;
  values?: Array<StaffFamilyInfo>;
}


export interface StaffMaterialInfo {
  /**
   * 学位证书照片
   */
  degreeCertificatePic?: string;
  extras?: any;
  /**
   * 毕业证书照片
   */
  graduationCertificate?: string;
  /**
   * 身份证正面照片
   */
  idCardObversePhoto?: string;
  /**
   * 身份证反面照片
   */
  idCardReversePhoto?: string;
  /**
   * 前公司离职证明
   */
  leavingCertificatePic?: string;
  /**
   * 个人照片
   */
  personPhoto?: string;
}


export interface StaffMaterialInfoVO {
  /**
   * 学位证书照片
   */
  degreeCertificatePic?: string;
  extras?: any;
  /**
   * 毕业证书照片
   */
  graduationCertificate?: string;
  /**
   * 员工id
   */
  id?: string;
  /**
   * 身份证正面照片
   */
  idCardObversePhoto?: string;
  /**
   * 身份证反面照片
   */
  idCardReversePhoto?: string;
  /**
   * 前公司离职证明
   */
  leavingCertificatePic?: string;
  /**
   * 个人照片
   */
  personPhoto?: string;
}


export interface StaffPersonalInfoDTO {
  /**
   * 住址
   */
  address?: string;
  /**
   * 出生日期
   */
  birthday?: string;
  extras?: any;
  /**
   * 首次工作时间
   */
  firstWorkingTime?: string;
  /**
   * 身高（cm）
   */
  height?: number;
  /**
   * 户籍类型
   */
  household?: string;
  /**
   * 身份证地址
   */
  idCardAddress?: string;
  /**
   * 身份证姓名
   */
  idCardName?: string;
  /**
   * 身份证号
   */
  idCardNumber?: string;
  /**
   * 婚姻状况
   */
  maritalType?: string;
  /**
   * 民族编码
   */
  nation?: string;
  nativePlace?: string;
  /**
   * 政治面貌
   */
  politicalType?: string;
  /**
   * 公积金账号
   */
  providentFundAccount?: string;
  /**
   * 社保账号
   */
  socialSecurityAccount?: string;
  /**
   * 身份证有效期（开始日期）
   */
  validityPeriodFrom?: string;
  /**
   * 身份证有效期（结束日期）
   */
  validityPeriodTo?: string;
  /**
   * 体重（kg）
   */
  weight?: number;
}


export interface StaffPersonalInfoVO {
  /**
   * 住址
   */
  address?: string;
  /**
   * 出生日期
   */
  birthday?: string;
  extras?: any;
  /**
   * 首次工作时间
   */
  firstWorkingTime?: string;
  /**
   * 身高（cm）
   */
  height?: number;
  /**
   * 户籍类型
   */
  household?: string;
  /**
   * 员工id
   */
  id?: string;
  /**
   * 身份证地址
   */
  idCardAddress?: string;
  /**
   * 身份证姓名
   */
  idCardName?: string;
  /**
   * 身份证号
   */
  idCardNumber?: string;
  /**
   * 婚姻状况
   */
  maritalType?: string;
  /**
   * 民族编码
   */
  nation?: string;
  nativePlace?: string;
  /**
   * 政治面貌
   */
  politicalType?: string;
  /**
   * 公积金账号
   */
  providentFundAccount?: string;
  /**
   * 社保账号
   */
  socialSecurityAccount?: string;
  /**
   * 身份证有效期（开始日期）
   */
  validityPeriodFrom?: string;
  /**
   * 身份证有效期（结束日期）
   */
  validityPeriodTo?: string;
  /**
   * 体重（kg）
   */
  weight?: number;
}


export interface StaffPositionChangedRecord {
  /**
   * 变更申请
   */
  changeApply?: string;
  /**
   * 变更时间
   */
  changeTime?: string;
  id?: number;
  /**
   * 变更后职位
   */
  laterPositionIds?: Array<string>;
  /**
   * 操作人
   */
  operatingUser?: string;
  /**
   * 变更前职位
   */
  previousPositionIds?: Array<string>;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffPositionChangedRecordVO {
  /**
   * 变更时间
   */
  changeTime?: string;
  /**
   * 员工职位变更后id列表
   */
  laterPositionIds?: Array<string>;
  /**
   * 员工职位变更前id列表
   */
  previousPositionIds?: Array<string>;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffPromotedRecord {
  /**
   * 变更申请
   */
  changeApply?: string;
  /**
   * 变更时间
   */
  changeTime?: string;
  id?: number;
  laterPositionLevel?: string;
  /**
   * 操作人
   */
  operatingUser?: string;
  previousPositionLevel?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffPromotedRecordVO {
  /**
   * 变更时间
   */
  changeTime?: string;
  /**
   * 变更后员工职级
   */
  laterPositionLevel?: string;
  /**
   * 变更前员工职级
   */
  previousPositionLevel?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffRegularRecord {
  /**
   * 变更申请
   */
  changeApply?: string;
  /**
   * 变更时间
   */
  changeTime?: string;
  id?: number;
  /**
   * 变更后员工状态
   */
  laterStaffState?: string;
  /**
   * 操作人
   */
  operatingUser?: string;
  /**
   * 变更前员工状态
   */
  previousStaffState?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffRegularRecordVO {
  /**
   * 变更时间
   */
  changeTime?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffResignedRecord {
  /**
   * 变更申请
   */
  changeApply?: string;
  /**
   * 变更时间
   */
  changeTime?: string;
  id?: number;
  /**
   * 变更后员工状态
   */
  laterStaffState?: string;
  /**
   * 操作人
   */
  operatingUser?: string;
  /**
   * 变更前员工状态
   */
  previousStaffState?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffResignedRecordVO {
  /**
   * 变更时间
   */
  changeTime?: string;
  /**
   * 备注
   */
  remarks?: string;
  /**
   * 员工id
   */
  staffId?: string;
}


export interface StaffWorkingInfoDTO {
  extras?: any;
  /**
   * 入职时间
   */
  joinTime?: string;
  /**
   * 岗位职级
   */
  positionLevel?: string;
  /**
   * 试用期
   */
  probation?: number;
  /**
   * 转正日期
   */
  regularTime?: string;
  /**
   * 离职日期
   */
  resignTime?: string;
  /**
   * 员工状态
   */
  staffStatus?: string;
  /**
   * 员工类型
   */
  staffType?: string;
}


export interface StaffWorkingInfoVO {
  extras?: any;
  /**
   * 员工id
   */
  id?: string;
  /**
   * 入职时间
   */
  joinTime?: string;
  /**
   * 岗位职级
   */
  positionLevel?: string;
  /**
   * 试用期
   */
  probation?: number;
  /**
   * 转正日期
   */
  regularTime?: string;
  /**
   * 离职日期
   */
  resignTime?: string;
  /**
   * 员工状态
   */
  staffStatus?: string;
  /**
   * 员工类型
   */
  staffType?: string;
}


export interface StatisticalDimension {
  field?: string;
  intervalType?: StatisticalDimensionIntervalType;
}


export interface StatisticalDimensionReq {
  field?: string;
  intervalType?: StatisticalDimensionIntervalType;
}


export interface StatisticalDimensionRes {
  field?: string;
  intervalType?: StatisticalDimensionIntervalType;
}


export interface StatisticalIndex {
  field?: string;
  type?: StatisticalIndexType;
}


export interface StatisticalIndexReq {
  field?: string;
  type?: StatisticalIndexType;
}


export interface StatisticalIndexRes {
  field?: string;
  type?: StatisticalIndexType;
}


export interface StatisticsResult {
  data?: Array<any>;
  definition?: BusinessEntityStatisticsDefinition;
  entityInfo?: BusinessEntityDetailVO;
  total?: number;
}


export interface StructureDataVO {
  /**
   * 企业部门列表
   */
  departments?: Array<SimpleCorpWechatDepartmentVO>;
  /**
   * 企业成员列表
   */
  users?: Array<SimpleCorpWechatUserVO>;
}


export interface Subject {
  /**
   * 科目描述
   */
  description?: string;
  /**
   * 科目编号
   */
  id?: string;
  /**
   * 科目名称
   */
  name?: string;
  /**
   * 父级科目编号
   */
  parentId?: string;
  /**
   * 可见范围
   */
  scope?: VisibleScope;
  /**
   * 排序
   */
  sort?: number;
}


export interface SubjectReq {
  /**
   * 科目描述
   */
  description?: string;
  /**
   * 科目编号
   */
  id?: string;
  /**
   * 科目名称
   */
  name?: string;
  /**
   * 父级科目编号
   */
  parentId?: string;
  /**
   * 可见范围
   */
  scope?: VisibleScopeReq;
  /**
   * 排序
   */
  sort?: number;
}


export interface SubjectRes {
  /**
   * 科目描述
   */
  description?: string;
  /**
   * 科目编号
   */
  id?: string;
  /**
   * 科目名称
   */
  name?: string;
  /**
   * 父级科目编号
   */
  parentId?: string;
  /**
   * 可见范围
   */
  scope?: VisibleScopeRes;
  /**
   * 排序
   */
  sort?: number;
}


export interface SubmitData {
  /**
   * 待修改的数据ID
   */
  dataId?: string;
  flow?: ProcessFlowDataReq;
  /**
   * 表单id
   */
  formId?: string;
  /**
   * 流程id
   */
  processId?: string;
  /**
   * 表单数据
   */
  value?: any;
}


export interface SubmitDataReq {
  /**
   * 待修改的数据ID
   */
  dataId?: string;
  flow?: ProcessFlowDataReq;
  /**
   * 表单id
   */
  formId?: string;
  /**
   * 流程id
   */
  processId?: string;
  /**
   * 表单数据
   */
  value?: any;
}


export interface SubmitDataRes {
  /**
   * 待修改的数据ID
   */
  dataId?: string;
  flow?: ProcessFlowDataRes;
  /**
   * 表单id
   */
  formId?: string;
  /**
   * 流程id
   */
  processId?: string;
  /**
   * 表单数据
   */
  value?: any;
}


export interface SwaggerModels {
  branchConditionCompareType?: BranchConditionReqCompareType;
  businessWorkflow?: BusinessWorkflow;
  changeDataAction?: ChangeDataAction;
  changeOwnerAction?: ChangeOwnerAction;
  detailComponent?: DetailInfoComponent;
  dynamicInfoComponent?: DynamicInfoComponent;
  emailNoticeAction?: EmailNoticeAction;
  fieldsPermission?: FieldsPermission;
  fileListComponent?: FileListComponent;
  formFieldValue?: FormFieldValue;
  importantInfoComponent?: ImportantInfoComponent;
  listViewLayout?: ListViewLayout;
  relatedEntityDataListComponent?: RelatedEntityDataListComponent;
  scheduleJob?: ScheduleJob;
  scheduleJobLog?: ScheduleJobLog;
  showLogic?: ShowLogic;
  smsNoticeAction?: SmsNoticeAction;
  tabsComponent?: TabsComponent;
  teamComponent?: TeamComponent;
  teamMember?: TeamMember;
  triggerBusinessFlowAction?: TriggerBusinessFlowAction;
  user?: User;
  viewField?: ViewField;
  visibleScope?: VisibleScope;
  wechatNoticeAction?: CorpWechatNoticeAction;
}


export interface SysLog {
  content?: string;
  createTime?: string;
  id?: string;
  level?: SysLogLevel;
  tag?: string;
}


export interface SystemRole {
  name?: string;
  zhName?: string;
}


export interface TabsComponent {
  component?: string;
  content?: Array<Array<any>>;
  id?: string;
  names?: Array<string>;
  props?: any;
}


export interface TapdCheckResultItem {
  description?: string;
  type?: TapdCheckResultItemType;
  user?: string;
}


export interface TapdWorkspace {
  created?: string;
  creator?: string;
  id?: string;
  member_count?: number;
  name?: string;
  productId?: string;
  productLineId?: string;
  projectId?: string;
  status?: string;
  type?: WorkspaceType;
}


export interface TeamComponent {
  component?: string;
  id?: string;
  props?: any;
}


export interface TeamDetail {
  members?: Array<TeamMemberRes>;
  owner?: User;
  roles?: Array<TeamRole>;
}


export interface TeamMember {
  entityDataId?: string;
  entityId?: string;
  id?: string;
  role?: string;
  user?: SimpleUser;
  userId?: string;
}


export interface TeamMemberReq {
  entityDataId?: string;
  entityId?: string;
  id?: string;
  role?: string;
  user?: SimpleUserReq;
  userId?: string;
}


export interface TeamMemberRes {
  entityDataId?: string;
  entityId?: string;
  id?: string;
  role?: string;
  user?: SimpleUserRes;
  userId?: string;
}


export interface TeamRole {
  entityId?: string;
  id?: string;
  maxCount?: number;
  name?: string;
  role?: string;
}


export interface TimeSheetVO {
  created?: string;
  entity_id?: string;
  entity_type?: string;
  id?: string;
  memo?: string;
  owner?: string;
  spentProjectName?: string;
  spentType?: TimeSheetVOSpentType;
  spentdate?: string;
  timespent?: number;
  workspace_id?: string;
}


export interface TimeSpentDescriptor {
  details?: Array<TimeSheetVO>;
  owner?: string;
  total?: number;
}


export interface TodoFinishRecord {
  comment?: string;
  time?: string;
  userId?: string;
}


export interface TodoSaveVO {
  beginTime?: string;
  content?: string;
  earlyWarningMinutesBeforeEnd?: number;
  earlyWarningMinutesBeforeStart?: number;
  endTime?: string;
  headUsers?: Array<MemberVOReq>;
  noticeTime?: string;
  parent?: boolean;
  participants?: Array<MemberVOReq>;
  relatedItem?: ItemReq;
  relatedType?: string;
  relatedUsers?: Array<MemberVOReq>;
}


export interface TodoVO {
  canUrge?: boolean;
  ccList?: Array<MemberVORes>;
  content?: string;
  createTime?: string;
  createUser?: MemberVORes;
  finishRecords?: Array<TodoFinishRecord>;
  id?: string;
  lastNoticeTime?: string;
  noticeTime?: string;
  participants?: Array<MemberVORes>;
  relatedItem?: ItemRes;
  relatedType?: string;
  state?: TodoVOState;
  urged?: boolean;
}


export interface TriggerBusinessFlowAction {
  id?: string;
  type?: BaseFlowActionType;
}


export interface TriggerTime {
  expression?: string;
  jobId?: number;
  type?: TriggerTimeType;
}


export interface TriggerTimeReq {
  expression?: string;
  jobId?: number;
  type?: TriggerTimeType;
}


export interface TriggerTimeRes {
  expression?: string;
  jobId?: number;
  type?: TriggerTimeType;
}


export interface UploadFile {
  id?: string;
  name?: string;
  size?: number;
  type?: string;
  url?: string;
}


export interface UploadResult {
  /**
   * 简历信息
   */
  resume?: Resume;
  /**
   * 上传文件状态，0-成功，1-失败，2-已存在
   */
  status?: number;
}


export interface UploadResultAggVO {
  /**
   * 文件已存在个数
   */
  existsCount?: number;
  /**
   * 文件上传失败个数
   */
  failedCount?: number;
  /**
   * 文件上传成功个数
   */
  successCount?: number;
  /**
   * 单个文件上传结果详情
   */
  uploadResultList?: Array<UploadResult>;
}


export interface UrgeRecord {
  time?: string;
  userIds?: Array<string>;
}


export interface User {
  /**
   * 图片url
   */
  avatar?: string;
  /**
   * 部门code
   */
  departments?: Array<string>;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 性别code
   */
  gender?: number;
  /**
   * 用户id
   */
  id?: string;
  /**
   * 是否为部门领导
   */
  leaderInDep?: Array<boolean>;
  mainDepartment?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 用户姓名
   */
  name?: string;
  orders?: Array<number>;
  /**
   * 职位
   */
  position?: string;
  status?: number;
}


export interface UserAccessControlVO {
  id?: string;
  staffManageScope?: Array<number>;
}


export interface UserAttendanceData {
  approvalEvents?: Array<ApprovalEvent>;
  checkInList?: Array<CheckInDescription>;
  extraWorkDays?: Array<any>;
  fixCheckIn?: Array<FixInfo>;
  overTimeWorkEvents?: Array<ApprovalEvent>;
  rule?: CheckInRule;
  user?: AttendanceUser;
  workDays?: Array<any>;
}


export interface UserAttendanceStatistics {
  /**
   * 实际出勤天数
   */
  actualCheckInDays?: number;
  /**
   * 是否全勤
   */
  allCheckInNormal?: boolean;
  /**
   * 全天缺卡次数
   */
  allDayNotCheckInCount?: number;
  allLeaveHours?: number;
  /**
   * 审批请假工时（含调休）
   */
  approvalLeaveHours?: number;
  /**
   * 调休工时
   */
  breakOffHours?: number;
  checkInStates?: Array<boolean>;
  /**
   * 员工部门（名称）
   */
  departments?: Array<string>;
  /**
   * 可调休时长
   */
  exchangeWorkdayOffHours?: number;
  /**
   * 员工ID
   */
  id?: string;
  /**
   * 病假次数
   */
  illLeaveCount?: number;
  /**
   * 病假小时数
   */
  illLeaveHours?: number;
  /**
   * 病假扣除
   */
  illLeaveNotIncludedHours?: number;
  /**
   * 迟到次数
   */
  lateCount?: number;
  /**
   * 迟到计入请假工时
   */
  lateLeaveHours?: number;
  /**
   * 婚假、产假、陪产假
   */
  marryLeaveHours?: number;
  /**
   * 员工姓名
   */
  name?: string;
  /**
   * 正常打卡次数
   */
  normalCheckInCount?: number;
  /**
   * 下班缺卡次数
   */
  offWorkNotCheckInCount?: number;
  /**
   * 加班时长
   */
  overtimeWorkHours?: number;
  /**
   * 员工职位
   */
  position?: string;
  /**
   * 应打卡次数
   */
  shouldCheckInCount?: number;
  /**
   * 应出勤天数
   */
  shouldCheckInDays?: number;
  /**
   * 上班缺卡次数
   */
  toWorkNotCheckInCount?: number;
  /**
   * 出差天数
   */
  travelDays?: number;
  /**
   * 年假
   */
  yearLeaveHours?: number;
}


export interface UserCheckInItem {
  absent?: boolean;
  absentReason?: string;
  date?: string;
  earlyLeaveMinutes?: number;
  isWeekend?: boolean;
  lateMinutes?: number;
  offWorkAbnormalTypes?: Array<string>;
  offWorkExceptionType?: Array<string>;
  offWorkFixType?: string;
  offWorkFixed?: boolean;
  offWorkState?: string;
  offWorkTime?: LocalTime;
  toWorkAbnormalTypes?: Array<string>;
  toWorkExceptionType?: Array<string>;
  toWorkFixType?: string;
  toWorkFixed?: boolean;
  toWorkState?: string;
  toWorkTime?: LocalTime;
}


export interface UserCheckInStatistics {
  data?: Array<UserCheckInItem>;
  departmentNames?: Array<string>;
  name?: string;
  position?: string;
  userId?: string;
}


export interface UserReq {
  /**
   * 图片url
   */
  avatar?: string;
  /**
   * 部门code
   */
  departments?: Array<string>;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 性别code
   */
  gender?: number;
  /**
   * 用户id
   */
  id?: string;
  /**
   * 是否为部门领导
   */
  leaderInDep?: Array<boolean>;
  mainDepartment?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 用户姓名
   */
  name?: string;
  orders?: Array<number>;
  /**
   * 职位
   */
  position?: string;
  status?: number;
}


export interface UserRes {
  /**
   * 图片url
   */
  avatar?: string;
  /**
   * 部门code
   */
  departments?: Array<string>;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 性别code
   */
  gender?: number;
  /**
   * 用户id
   */
  id?: string;
  /**
   * 是否为部门领导
   */
  leaderInDep?: Array<boolean>;
  mainDepartment?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 用户姓名
   */
  name?: string;
  orders?: Array<number>;
  /**
   * 职位
   */
  position?: string;
  status?: number;
}


export interface ValidateRules {
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  regexp?: string;
  required?: boolean;
  unique?: boolean;
  validateScript?: string;
}


export interface ViewField {
  common?: boolean;
  forTitle?: boolean;
  hide?: boolean;
  link?: boolean;
  linkProperty?: string;
  name?: string;
  type?: string;
  value?: string;
}


export interface ViewFieldVO {
  /**
   * 数组类型
   */
  array?: boolean;
  /**
   * 字段数据类型
   */
  dataType?: BusinessEntityPropertyDataType;
  /**
   * 数据字典编码
   */
  dicCode?: string;
  /**
   * 显示转换脚本
   */
  displayScript?: string;
  /**
   * 字段名称
   */
  name?: string;
  /**
   * 选项内容
   */
  optionValues?: any;
  /**
   * 字段路径
   */
  path?: string;
  readonly?: boolean;
  /**
   * 校验规则
   */
  validateRules?: ValidateRules;
}


export interface VisibleScope {
  departmentIds?: Array<number>;
  tags?: Array<string>;
  userIds?: Array<string>;
  workPlaces?: Array<string>;
}


export interface VisibleScopeReq {
  departmentIds?: Array<number>;
  tags?: Array<string>;
  userIds?: Array<string>;
  workPlaces?: Array<string>;
}


export interface VisibleScopeRes {
  departmentIds?: Array<number>;
  tags?: Array<string>;
  userIds?: Array<string>;
  workPlaces?: Array<string>;
}


export interface VisibleScopeVO {
  departments?: Array<DepartmentVO>;
  users?: Array<MemberVORes>;
}


export interface VisibleScopeVOReq {
  departments?: Array<DepartmentVOReq>;
  users?: Array<MemberVOReq>;
}


export interface VisibleScopeVORes {
  departments?: Array<DepartmentVORes>;
  users?: Array<MemberVORes>;
}


export interface WechatTagVO {
  tagid?: number;
  tagname?: string;
}


export interface WorkflowActivity {
  actions?: Array<BaseFlowAction>;
  conditionGroups?: Array<Array<any>>;
  id?: string;
  name?: string;
}


export interface WorkflowActivityReq {
  actions?: Array<BaseFlowActionReq>;
  conditionGroups?: Array<Array<any>>;
  id?: string;
  name?: string;
}


export interface WorkflowActivityRes {
  actions?: Array<BaseFlowActionRes>;
  conditionGroups?: Array<Array<any>>;
  id?: string;
  name?: string;
}


export interface WorkflowData {
  activities?: Array<WorkflowActivity>;
}


export interface WorkflowDataReq {
  activities?: Array<WorkflowActivityReq>;
}


export interface WorkflowDataRes {
  activities?: Array<WorkflowActivityRes>;
}


export interface WorkingHoursSaveVO {
  begin?: string;
  description?: string;
  end?: string;
  relatedItem?: Item;
  relatedType?: string;
  value?: number;
}


export interface WorkingHoursUpdateVO {
  begin?: string;
  description?: string;
  end?: string;
  id?: string;
  value?: number;
}


export interface WorkingHoursVO {
  begin?: string;
  createTime?: string;
  createUser?: MemberVO;
  description?: string;
  end?: string;
  relatedItem?: Item;
  relatedType?: string;
  tapd?: boolean;
  tapdEntityId?: string;
  tapdEntityType?: string;
  tapdWorkspaceId?: string;
  value?: number;
}


export interface WorkspaceError {
  errors?: Array<TapdCheckResultItem>;
  nameError?: boolean;
  type?: WorkspaceType;
  workspace?: TapdWorkspace;
}


export interface WorkspaceType {
  zhName?: string;
}


export interface YearBudgetVO {
  budgets?: Array<Budget>;
  subject?: Subject;
}


export interface undefined {
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 需求反馈
   */
  demandFeed?: string;
  id?: string;
  /**
   * 最迟需求支撑时间
   */
  latestDemandTime?: string;
  name?: string;
  /**
   * 负责人
   */
  owner?: string;
  /**
   * 计划需求支撑时间
   */
  planDemandTime?: string;
  /**
   * 产品1级
   */
  productOne?: string;
  /**
   * 产品2级
   */
  productTwo?: string;
  /**
   * 支撑方式
   */
  supportMethod?: string;
}
