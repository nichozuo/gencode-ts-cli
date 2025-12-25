declare namespace ApiTypes {
  namespace AccountUsers {
    type List = {
      "username"?: string; // 模糊搜索：用户名 
      "accountable_type"?: string; // 类型筛选（App\\Models\\Agents 或 App\\Models\\Companies） 
    };
    type Store = {
      "username": string; // 用户名 
      "password": string; // 密码,[hidden] 
      "phone"?: string; // 手机号 
      "real_name"?: string; // 真实姓名 
      "accountable_type": string; // 多态关联类型 
      "accountable_id": number; // 多态关联ID 
      "is_active"?: boolean; // 是否启用 
      "last_login_ip"?: string; // 最后登录IP 
      "last_login_at"?: Date; // 最后登录时间 
    };
    type Update = {
      "id": number; // id 
      "username": string; // 用户名 
      "password"?: string; // 密码,[hidden] 
      "phone"?: string; // 手机号 
      "real_name"?: string; // 真实姓名 
      "accountable_type": string; // 多态关联类型 
      "accountable_id": number; // 多态关联ID 
      "is_active"?: boolean; // 是否启用 
      "last_login_ip"?: string; // 最后登录IP 
      "last_login_at"?: Date; // 最后登录时间 
    };
    type Show = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Admins {
    type List = {
      "username"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "username": string; // 用户名 
      "password": string; // 密码 
      "roles_id"?: string[]; // 角色 
    };
    type Update = {
      "id": number; // id 
      "username": string; // 用户名/手机号 
      "password"?: string; // 密码,[hidden] 
      "roles_id"?: string[]; // 角色 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Agents {
    type List = {
      "username"?: string; // 模糊搜索：用户名 
    };
    type Store = {
      "username": string; // 用户名 
      "password": string; // 密码,[hidden] 
      "real_name": string; // 真实姓名 
      "contact_phone": string; // 联系人手机号 
    };
    type Update = {
      "id": number; // id 
      "username": string; // 用户名 
      "password"?: string; // 密码,[hidden] 
      "real_name": string; // 真实姓名 
      "contact_phone": string; // 联系人手机号 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Auth {
    type Login = {
      "username": string; // 用户名 
      "password": string; // 密码 
      "captcha": string; // 验证码 
      "captcha_key": string; // 验证码key 
    };
    type ChangePassword = {
      "old_password": string; // 老密码 
      "new_password": string; // 新密码 
      "re_new_password": string; // 重复新密码 
    };
    type PreUpload = {
      "filename": string; // 文件名称 
      "alc": string; // 访问限制 public-read, private 
    };
    type TemporaryUrl = {
      "filename": string; // 文件名称 
    };
  }
  namespace Companies {
    type List = {
      "name"?: string; // 模糊搜索：名称 
      "sort_name"?: string; // - 
      "type"?: string; // 类型,[enum:CompaniesTypeEnum] 
    };
    type Store = {
      "admins_id": number; // 所属管理员ID,[ref:admins] 
      "agents_id": number; // 所属代理商ID,[ref:agents] 
      "type": string; // 类型,[enum:CompaniesTypeEnum] 
      "name": string; // 公司名称 
      "sort_name": string; // - 
      "sn": string; // 公司唯一标识 
      "sn_image": string[]; // 公司唯一标识图片 
      "contact_address": string; // 联系人地址 
      "contact_name": string; // 联系人姓名 
      "contact_phone": string; // 联系人手机号 
      "public_bank_account_name": string; // 对公账户户名 
      "public_bank_name": string; // 开户行名称 
      "public_bank_account_no": string; // 对公账号 
      "public_bank_union_code"?: string; // 联行号 
      "year_plan_trade_amount": number; // 计划年交易量 
      "year_completed_trade_amount"?: number; // 年度已完成交易量 
      "monthly_completed_trade_amount"?: number; // 月度已完成交易量 
      "bank_account_day_limit"?: number; // 银行账户日限额 
      "bank_account_year_limit"?: number; // 银行账户年度限额 
      "monthly_invoice_credit"?: number; // 月可开票额度 
      "completed_monthly_invoice_credit"?: number; // 当月已开票额度 
      "is_general_taxpayer": boolean; // 是否一般纳税人 
      "electronic_tax_account": string; // 电子税局账号 
      "electronic_tax_password": string; // 电子税局密码 
      "margin_rate"?: number; // 利润率 
      "total_fee_rate"?: number; // 总费率 
      "trade_fee_rate"?: number; // 交易费率 
      "channel_fee_rate"?: number; // 代理商费率 
      "margin_fee"?: number; // 保证金 
      "actual_operation_start_date"?: Date; // 公司实际经营时间（起始点） 
      "existing_social_security_count"?: number; // 现有社保人数 
      "existing_operating_cost"?: number; // 现有运营成本（万元） 
      "free_trade_reserve"?: number; // 自由贸易准备金（万元） 
    };
    type Update = {
      "id": number; // id 
      "admins_id": number; // 所属管理员ID,[ref:admins] 
      "agents_id": number; // 所属代理商ID,[ref:agents] 
      "type"?: string; // 类型,[enum:CompaniesTypeEnum] 
      "name": string; // 公司名称 
      "sort_name": string; // - 
      "sn": string; // 公司唯一标识 
      "sn_image": string[]; // 公司唯一标识图片 
      "contact_address": string; // 联系人地址 
      "contact_name": string; // 联系人姓名 
      "contact_phone": string; // 联系人手机号 
      "public_bank_account_name": string; // 对公账户户名 
      "public_bank_name": string; // 开户行名称 
      "public_bank_account_no": string; // 对公账号 
      "public_bank_union_code"?: string; // 联行号 
      "year_plan_trade_amount": number; // 计划年交易量 
      "year_completed_trade_amount"?: number; // 年度已完成交易量 
      "monthly_completed_trade_amount"?: number; // 月度已完成交易量 
      "bank_account_day_limit"?: number; // 银行账户日限额 
      "bank_account_year_limit"?: number; // 银行账户年度限额 
      "monthly_invoice_credit"?: number; // 月可开票额度 
      "completed_monthly_invoice_credit"?: number; // 当月已开票额度 
      "is_general_taxpayer": boolean; // 是否一般纳税人 
      "electronic_tax_account": string; // 电子税局账号 
      "electronic_tax_password": string; // 电子税局密码 
      "margin_rate"?: number; // 利润率 
      "total_fee_rate"?: number; // 总费率 
      "trade_fee_rate"?: number; // 交易费率 
      "channel_fee_rate"?: number; // 代理商费率 
      "margin_fee"?: number; // 保证金 
      "actual_operation_start_date"?: Date; // 公司实际经营时间（起始点） 
      "existing_social_security_count"?: number; // 现有社保人数 
      "existing_operating_cost"?: number; // 现有运营成本（万元） 
      "free_trade_reserve"?: number; // 自由贸易准备金（万元） 
    };
    type Delete = {
      "id": number; // id 
    };
    type Select = {
      "keyword"?: string; // 搜索关键词 
    };
  }
  namespace CompanyAccountLogs {
    type List = {
      "in_bills_id"?: number; // 入库单id,[ref:in_bills] 
      "type"?: string; // 操作类型,[enum:CompanyAccountLogsTypeEnum] 
      "method"?: string; // 操作方法,[enum:CompanyAccountLogsMethodEnum] 
      "company_accounts_id"?: number; // 公司id,[ref:companies] 
    };
    type Store = {
      "type": string; // 操作类型,[enum:CompanyAccountLogsTypeEnum] 
      "method": string; // 操作方法,[enum:CompanyAccountLogsMethodEnum] 
      "from_companies_id": number; // 转出公司id,[ref:companies] 
      "to_companies_id": number; // 转入公司id,[ref:companies] 
      "change_amount": number; // 变更金额 
      "attachment"?: string; // 附件 
    };
    type AddPurchaseInvoice = {
      "in_bills_id": number; // 入库单IDid,[ref:in_bills] 
      "invoice_images"?: string[]; // 附件 
    };
    type AddPurchaseFund = {
      "in_bills_id": number; // 入库单IDid,[ref:in_bills] 
      "amount": number; // 金额 
      "attachment"?: string[]; // 附件 
    };
    type AddSaleInvoice = {
      "in_bills_id": number; // 入库单IDid,[ref:in_bills] 
      "invoice_images"?: string[]; // 附件 
    };
    type AddSaleFund = {
      "in_bills_id": number; // 入库单IDid,[ref:in_bills] 
      "amount": number; // 金额 
      "attachment"?: string[]; // 附件 
    };
  }
  namespace CompanyAccounts {
    type List = {
      "company_name"?: string; // 公司名称,[ref:companies] 
      "company_type"?: string; // 类型,[enum:CompaniesTypeEnum] 
    };
  }
  namespace CompanyTemplates {
    type List = {
      "name"?: string; // 模板名称 
    };
    type Store = {
      "name": string; // 模板名称 
      "template": string[]; // 公司列表 
      "is_auto_create"?: boolean; // 是否自动创建任务 
      "start_amount"?: number; // 自动创建任务开始价格 
      "end_amount"?: number; // 自动创建任务结束价格 
    };
    type Update = {
      "id": number; // 模板ID 
      "name": string; // 模板名称 
      "template": string[]; // 公司列表 
      "is_auto_create"?: boolean; // 是否自动创建任务 
      "start_amount"?: number; // 自动创建任务开始价格 
      "end_amount"?: number; // 自动创建任务结束价格 
    };
    type Show = {
      "id": number; // 模板ID 
    };
    type Delete = {
      "id": number; // 模板ID 
    };
  }
  namespace FlowMoneys {
    type List = {
      "buy_company_id"?: number; // 采购公司ID 
      "sale_company_id"?: number; // 销售公司ID 
      "status"?: string; // 状态 
      "date"?: string[]; // 日期范围 
    };
    type SelectCompaniesTemplate = {
      "keyword"?: string; // - 
    };
    type GetStocksByCompanyId = {
      "companies_id": number; // - 
    };
    type Store = {
      "start_at": Date; // 开始时间 
      "end_at": Date; // 结束时间 
      "type": string; // 资金流类型 
      "buy_company_id": number; // 采购公司 
      "sale_company_id": number; // 销售公司 
      "stock_details"?: string[]; // 商品明细列表 
      "total_quantity": number; // - 
      "total_buy_amount": number; // - 
      "total_sale_amount": number; // - 
      "company_templates_id": number; // 公司模板ID（用于确定起止公司） 
    };
    type FlowMoneyDailyDetails = {
      "flow_money_dailies_id": number; // - 
    };
    type FullFlowMoneyDailyDetails = {
      "day"?: Date; // - 
    };
    type Delete = {
      "id": number; // id 
    };
    type InProgress = {
      "day"?: Date; // - 
    };
    type Audit = {
      "id": number; // - 
      "result": string; // - 
      "description"?: string; // - 
    };
  }
  namespace InBills {
    type List = {
      "name"?: string; // 名称 
      "out_sale_companies_id"?: number; // 外部供应商id,[ref:companies] 
      "out_buy_companies_id"?: number; // 外部购买方id,[ref:companies] 
      "inner_sale_companies_id"?: number; // 内部供应商id,[ref:companies] 
      "inner_buy_companies_id"?: number; // 内部购买方id,[ref:companies] 
      "order_no"?: string; // 订单号 
      "in_date"?: string[]; // 入库日期范围 
    };
    type Store = {
      "out_sale_companies_id": number; // 外部供应商id,[ref:companies] 
      "out_buy_companies_id": number; // 外部购买方id,[ref:companies] 
      "inner_sale_companies_id": number; // 内部供应商id,[ref:companies] 
      "inner_buy_companies_id": number; // 内部购买方id,[ref:companies] 
      "in_date": Date; // 入库日期 
      "name": string; // 名称 
      "total_quantity"?: number; // 总数量 
      "total_buy_price"?: number; // 总采购金额 
      "total_sale_price"?: number; // 总销售金额 
      "total_profit"?: number; // 总利润 
      "details": string[]; // 入库明细列表 
    };
    type Show = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace InvoiceCates {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 项目名称 
      "code": string; // 商品和服务税收分类编码 
      "tax_rate": number; // 税率 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 项目名称 
      "code": string; // 商品和服务税收分类编码 
      "tax_rate": number; // 税率 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Stocks {
    type List = {
      "item_name"?: string; // 模糊搜索：项目名称 
      "spec_model"?: string; // 模糊搜索：规格型号 
    };
    type Store = {
      "companies_id": number; // 公司ID 
      "in_bills_id": number; // 入库单ID 
      "in_bill_details_id": number; // 入库单明细ID 
      "item_name": string; // 项目名称 
      "tax_classification_code"?: string; // 税收分类编码 
      "spec_model"?: string; // 规格型号 
      "unit"?: string; // 单位 
      "quantity"?: number; // 商品数量 
      "unit_price"?: number; // 商品单价 
      "amount": number; // 金额 
      "tax_rate": number; // 税率，0.13代表13% 
      "discount_amount"?: number; // 折扣金额 
      "preferential_policy_type"?: string; // 优惠政策类型 
      "coal_type"?: string; // 煤炭种类 
    };
    type Update = {
      "id": number; // id 
      "companies_id": number; // 公司ID 
      "item_name": string; // 项目名称 
      "tax_classification_code"?: string; // 税收分类编码 
      "spec_model"?: string; // 规格型号 
      "unit"?: string; // 单位 
      "quantity"?: number; // 商品数量 
      "unit_price"?: number; // 商品单价 
      "amount": number; // 金额 
      "tax_rate": number; // 税率，0.13代表13% 
      "discount_amount"?: number; // 折扣金额 
      "preferential_policy_type"?: string; // 优惠政策类型 
      "coal_type"?: string; // 煤炭种类 
    };
    type Show = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace SysPermissions {
    type List = {
      "parent_id"?: number; // 上级ID 
      "guard_name": string; //  
    };
    type Tree = {
      "parent_id"?: number; // 上级ID 
      "guard_name": string; //  
    };
    type Store = {
      "name": string; //  
      "key"?: string; //  
      "guard_name": string; //  
      "icon"?: string; // 图标 
      "type": string; // 类型:SysPermissionsTypeEnum 
      "backend_apis"?: string[]; // 后台api 
      "path"?: string; // 路由 
      "parent_id"?: number; //  
    };
    type Update = {
      "id": number; // ID 
      "name": string; //  
      "key"?: string; //  
      "guard_name": string; //  
      "icon"?: string; // 图标 
      "type": string; // 类型:SysPermissionsTypeEnum 
      "backend_apis"?: string[]; // 后台api 
      "path"?: string; // 路由 
      "parent_id"?: number; //  
    };
    type Delete = {
      "id": number; // ID 
    };
    type Move = {
      "id": number; // ID 
      "type": string; // 类型：up 升级，down 降级 
    };
  }
  namespace SysRoles {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 名称 
      "color"?: string; // 颜色 
    };
    type Update = {
      "id": number; // ID 
      "name": string; // 名称 
      "color"?: string; // 颜色 
    };
    type Delete = {
      "id": number; // ID 
    };
    type GetPermissions = {
      "id": number; // ID 
    };
    type SetPermissions = {
      "id": number; // ID 
      "permissions_ids": string[]; // 权限ID 
    };
  }
  namespace Warehouses {
    type List = {
      "name"?: string; // 模糊搜索：仓库名称 
    };
    type Store = {
      "name": string; // 仓库名称 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 仓库名称 
    };
    type Show = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
}
