declare namespace ApiTypes {
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
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 简称 
      "full_name"?: string; // 全称 
      "address"?: string; // 地址 
      "contact"?: string; // 联系人 
      "phone"?: string; // 联系电话 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 简称 
      "full_name"?: string; // 全称 
      "address"?: string; // 地址 
      "contact"?: string; // 联系人 
      "phone"?: string; // 联系电话 
    };
    type Show = {
      "id": number; // id 
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
    };
  }
  namespace Bosses {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 简称 
      "full_name"?: string; // 全称 
      "address"?: string; // 地址 
      "contact"?: string; // 联系人 
      "phone"?: string; // 联系电话 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 简称 
      "full_name"?: string; // 全称 
      "address"?: string; // 地址 
      "contact"?: string; // 联系人 
      "phone"?: string; // 联系电话 
    };
    type Show = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Factories {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 厂家名称 
      "public_key": string; // 下游公钥 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 厂家名称 
      "public_key": string; // 下游公钥 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace LoanCompanies {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 简称 
      "full_name"?: string; // 全称 
      "address"?: string; // 地址 
      "contact"?: string; // 联系人 
      "phone"?: string; // 联系电话 
      "up_merchant_no": string; // 上游商户号 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 简称 
      "full_name"?: string; // 全称 
      "address"?: string; // 地址 
      "contact"?: string; // 联系人 
      "phone"?: string; // 联系电话 
      "up_merchant_no": string; // 上游商户号 
    };
    type Show = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace LoanDailyDetails {
    type List = {
      "merchants_id"?: number; // 商户ID 
      "date"?: Date; // 日期 
      "order_status"?: string; // 订单状态:LoansOrderStatusEnum 
    };
    type Export = {
      "merchants_id"?: number; // 商户ID 
      "date"?: Date; // 日期 
      "order_status"?: string; // 订单状态:LoansOrderStatusEnum 
    };
  }
  namespace Loans {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "merchants_id": number; // 商户id,[ref:merchants] 
      "loan_companies_id": number; // 资金方id,[ref:loan_companies] 
      "name": string; // 显示名称 
      "type"?: string; // 算法类型,[enum:LoansTypeEnum] 
      "loan_amount": number; // 贷款金额（本金） 
      "loan_rate": number; // 贷款利率 
      "started_at": Date; // 开始时间 
      "ended_at": Date; // 结束时间 
      "repayment_date"?: number; // 还款日 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Markets {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 市场名称 
      "market_no": string; // 市场编号 
      "public_key": string; // 上游公钥 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 市场名称 
      "market_no": string; // 市场编号 
      "public_key": string; // 上游公钥 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace MerchantCounters {
    type List = {
      "merchants_id"?: number; // 商户id,[ref:merchants] 
    };
    type Store = {
      "merchants_id": number; // 商户id,[ref:merchants] 
      "markets_id": number; // 上游市场id,[ref:markets] 
      "name": string; // 名称 
      "up_merchant_no": string; // 上游商家编号 
      "commissions": string[]; // 分账配置 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 名称 
      "up_merchant_no": string; // 上游商家编号 
      "commissions": string[]; // 分账配置 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Merchants {
    type List = {
      "agents_id"?: number; // 代理id,[ref:agents] 
      "bosses_id"?: number; // 老板id,[ref:bosses] 
      "factories_id"?: number; // 厂家id,[ref:factories] 
      "platforms_id"?: number; // 平台id,[ref:platforms] 
      "name"?: string; // 商户简称 
      "full_name"?: string; // 商户全称呼 
      "plat_merchant_no"?: string; // 平台商户号 
    };
    type Store = {
      "agents_id": number; // 代理id,[ref:agents] 
      "bosses_id": number; // 老板id,[ref:bosses] 
      "factories_id": number; // 厂家id,[ref:factories] 
      "platforms_id": number; // 平台id,[ref:platforms] 
      "name": string; // 商户简称 
      "full_name": string; // 商户全称呼 
    };
    type Update = {
      "id": number; // id 
      "agents_id": number; // 代理id,[ref:agents] 
      "bosses_id": number; // 老板id,[ref:bosses] 
      "factories_id": number; // 厂家id,[ref:factories] 
      "platforms_id": number; // 平台id,[ref:platforms] 
      "name": string; // 商户简称 
      "full_name": string; // 商户全称呼 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace OrgUsers {
    type List = {
      "type"?: string; // 机构类型,[enum:OrgUsersTypeEnum] 
      "org_name"?: string; // 机构名称 
      "org_id"?: number; // 机构id 
      "username"?: string; // 用户名 
    };
    type Store = {
      "type": string; // 用户类型,[enum:OrgUsersTypeEnum] 
      "org_name": string; // 机构名称 
      "username": string; // 用户名 
      "password": string; // 密码,[hidden] 
    };
    type Update = {
      "id": number; // id 
      "password": string; // 密码,[hidden] 
    };
    type Show = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace PayOrders {
    type List = {
      "merchant_name"?: string; // 模糊搜索：商户简称 
      "type"?: string; // 交易类型,[enum:PayOrdersTypeEnum] 
      "order_status"?: string; // 订单状态,[enum:PayOrderStatusEnum] 
      "day_date"?: Date; // 日期 
      "down_order_no"?: string; // 下游订单号 
      "up_order_no"?: string; // 上游订单号 
      "up_tx_no"?: string; // 上游交易流水号 
      "amount_order"?: string; // 金额 
      "up_order_at_range"?: string[]; // 上游订单时间范围 
    };
  }
  namespace Platforms {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "name": string; // 平台名称 
      "private_key": string; // 平台私钥 
      "public_key": string; // 平台公钥 
    };
    type Update = {
      "id": number; // id 
      "name": string; // 平台名称 
      "private_key": string; // 平台私钥 
      "public_key": string; // 平台公钥 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Select {
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
}
