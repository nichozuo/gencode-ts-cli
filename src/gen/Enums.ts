// AccountableTypeEnum
export const AccountableTypeEnum = {
  'App\\Models\\Agents': {'text':'代理商','color':'#ff0000','value':'App\\Models\\Agents'}, 
  'App\\Models\\Companies': {'text':'公司','color':'#00ff00','value':'App\\Models\\Companies'}, 
};

// AuditEnum
export const AuditEnum = {
  'PASS': {'text':'通过','color':'#52c41a','value':'PASS'}, 
  'REJECT': {'text':'不通过',"color":"#ff4d4f","value":"REJECT"}, 
};

// CommonStatusEnum
export const CommonStatusEnum = {
  '1': {"text":"待处理","color":"#1890ff","value":"1"}, 
  '2': {"text":"成功","color":"#52c41a","value":"2"}, 
  '3': {"text":"失败","color":"#ff4d4f","value":"3"}, 
  '4': {"text":"已取消","color":"#faad14","value":"4"}, 
};

// CompaniesTypeEnum
export const CompaniesTypeEnum = {
  'out': {"text":"外部公司","color":"#ff0000","value":"out"}, 
  'head_tail': {"text":"首尾公司","color":"#00ff00","value":"head_tail"}, 
  'middle': {"text":"中间公司","color":"#0000ff","value":"middle"}, 
};

// CompanyAccountLogsTypeEnum
export const CompanyAccountLogsTypeEnum = {
  'Outbound': {"text":"出库","color":"#ff4d4f","value":"Outbound"}, 
  'Inbound': {"text":"入库","color":"#52c41a","value":"Inbound"}, 
  'Transfer': {"text":"首尾互转","color":"#1890ff","value":"Transfer"}, 
  'Manual': {"text":"手动操作","color":"#fa8c16","value":"Manual"}, 
};

// ConfigKeysEnum
export const ConfigKeysEnum = {
  'order_meal': {"text":"订餐时间","color":"#1890ff","value":"order_meal"}, 
  'ues_meal': {"text":"用餐时间","color":"#52c41a","value":"ues_meal"}, 
  'refund_meal': {"text":"退餐时间","color":"#faad14","value":"refund_meal"}, 
  'penalty': {"text":"惩罚机制","color":"#f5222d","value":"penalty"}, 
  'user_group_privilege': {"text":"用户分组权益","color":"#fa8c16","value":"user_group_privilege"}, 
};

// FlowLogsTypeEnum
export const FlowLogsTypeEnum = {
  'SUBMIT': {"text":"提交","color":"#1890ff","value":"SUBMIT"}, 
  'AUDIT_PASS': {"text":"审核通过","color":"#52c41a","value":"AUDIT_PASS"}, 
  'AUDIT_REJECT': {"text":"审核不通过","color":"#ff4d4f","value":"AUDIT_REJECT"}, 
};

// FlowMoneysStatusEnum
export const FlowMoneysStatusEnum = {
  'PENDING': {"text":"未开始","color":"#bfbfbf","value":"PENDING"}, 
  'IN_PROGRESS': {"text":"进行中","color":"#1890ff","value":"IN_PROGRESS"}, 
  'COMPLETED': {"text":"已完成","color":"#52c41a","value":"COMPLETED"}, 
  'NEED_CONFIRM': {"text":"待确认","color":"#faad14","value":"NEED_CONFIRM"}, 
  'CANCELED': {"text":"已取消","color":"#bfbfbf","value":"CANCELED"}, 
};

// FlowMoneysTypeEnum
export const FlowMoneysTypeEnum = {
  'BY_AMOUNT': {"text":"根据金额","color":"#00bcd4","value":"BY_AMOUNT"}, 
  'BY_STOCK': {"text":"根据商品","color":"#8bc34a","value":"BY_STOCK"}, 
};

// 权限类型
export const SysPermissionsTypeEnum = {
  'Directory': {"text":"目录","color":"#11b594","value":"Directory"}, 
  'Page': {"text":"页面","color":"#c10bc1","value":"Page"}, 
  'Button': {"text":"按钮","color":"#a0b72c","value":"Button"}, 
};

// SysTasksStatusEnum
export const SysTasksStatusEnum = {
  '1': {"text":"未开始","color":"#bfbfbf","value":"1"}, 
  '2': {"text":"进行中","color":"#1890ff","value":"2"}, 
  '3': {"text":"已完成","color":"#a0d911","value":"3"}, 
  '4': {"text":"错误","color":"#f5222d","value":"4"}, 
};

// UnitEnum
export const UnitEnum = {
  '台': {"text":"台","color":"#3f51b5","value":"台"}, 
  '个': {"text":"个","color":"#9e9e9e","value":"个"}, 
  '项': {"text":"项","color":"#fa8c16","value":"项"}, 
};

