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
  namespace Companies {
    type List = {
      "name"?: string; // 模糊搜索：名称 
      "parent_id"?: number; // 父级ID 
    };
    type Store = {
      "name": string; // 组织名称 
      "type": string; // 类型,[enum:CompaniesTypeEnum] 
      "parent_id"?: number; //  
    };
    type Update = {
      "id": number; // id 
      "name": string; // 组织名称 
      "type": string; // 类型,[enum:CompaniesTypeEnum] 
    };
    type Move = {
      "id": number; // ID 
      "type": string; // 类型：up 升级，down 降级 
    };
    type Show = {
      "id": number; // id 
    };
    type SoftDelete = {
      "id": number; // id 
    };
    type Restore = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
    type Select = {
      "keywords"?: string; // 关键词 
      "type"?: string; // 机构类型:CompanyTypeEnum 
    };
  }
  namespace CompanyEmployees {
    type List = {
      "name"?: string; // 模糊搜索：名称 
      "company_name"?: string; // 模糊搜索：组织名称 
    };
    type Store = {
      "name"?: string; // 员工名称 
      "phone": string; // 手机号 
      "sex": string; // 性别,[enum:SexEnum] 
      "employment_type": string; // 用工形式,[enum:CompanyEmployeesEmploymentTypeEnum] 
      "sap_code"?: string; // SAP编码 
      "position"?: string; // 岗位 
      "position_level"?: string; // 岗位级别 
      "position_category"?: string; // 岗位序列 
      "companies_id": number; // 组织id,[ref:companies] 
      "businesses_id": number; // 业务单元IDid,[ref:companies] 
      "managements_id": number; // 管理部IDid,[ref:companies] 
      "is_active"?: number; // 是否在职：0-否，1-是 
    };
    type Update = {
      "id": number; // id 
      "name"?: string; // 员工名称 
      "phone": string; // 手机号 
      "sex": string; // 性别,[enum:SexEnum] 
      "employment_type": string; // 用工形式,[enum:CompanyEmployeesEmploymentTypeEnum] 
      "sap_code"?: string; // SAP编码 
      "position"?: string; // 岗位 
      "position_level"?: string; // 岗位级别 
      "position_category"?: string; // 岗位序列 
      "companies_id": number; // 组织id,[ref:companies] 
      "businesses_id": number; // 业务单元IDid,[ref:companies] 
      "managements_id": number; // 管理部IDid,[ref:companies] 
      "is_active"?: number; // 是否在职：0-否，1-是 
    };
    type Show = {
      "id": number; // id 
    };
    type SoftDelete = {
      "id": number; // id 
    };
    type Restore = {
      "id": number; // id 
    };
    type Delete = {
      "id": number; // id 
    };
  }
  namespace Dormigories {
    type List = {
      "name"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "community_name": string; // 小区名称 
      "community_type": string; // 小区类型,[enum:DormigoriesCommunityTypeEnum] 
      "building_name": string; // 楼栋名称 
      "unit_name": string; // 单元名称 
      "room_name": string; // 房号 
      "dormigory_full_name"?: string; // 宿舍合称 
      "room": number; // 房 
      "hall"?: number; // 厅 
      "kitchen"?: number; // 厨 
      "bathroom"?: number; // 卫 
      "balcony"?: number; // 阳台 
      "area"?: number; // 面积 
      "companies_id": number; // 组织id,[ref:companies] 
      "businesses_id": number; // 业务单元IDid,[ref:companies] 
      "managements_id": number; // 管理部IDid,[ref:companies] 
      "acquisition_method": string; // 获取方式,[enum:DormigoriesAcquisitionMethodEnum] 
      "start_date"?: Date; // 使用期限开始日期 
      "end_date"?: Date; // 使用期限结束日期 
      "monthly_rent"?: number; // 月租金 
      "deposit"?: number; // 押金 
      "rent_day"?: number; // 每月的租金结算日 
      "is_ye_cai"?: number; // 是否录业财: 0-否,1-是 
      "ye_cai_id"?: string; // 业财ID 
    };
    type Update = {
      "id": number; // id 
      "community_name": string; // 小区名称 
      "community_type": string; // 小区类型,[enum:DormigoriesCommunityTypeEnum] 
      "building_name": string; // 楼栋名称 
      "unit_name": string; // 单元名称 
      "room_name": string; // 房号 
      "dormigory_full_name"?: string; // 宿舍合称 
      "room": number; // 房 
      "hall"?: number; // 厅 
      "kitchen"?: number; // 厨 
      "bathroom"?: number; // 卫 
      "balcony"?: number; // 阳台 
      "area"?: number; // 面积 
      "companies_id": number; // 组织id,[ref:companies] 
      "businesses_id": number; // 业务单元IDid,[ref:companies] 
      "managements_id": number; // 管理部IDid,[ref:companies] 
      "acquisition_method": string; // 获取方式,[enum:DormigoriesAcquisitionMethodEnum] 
      "start_date"?: Date; // 使用期限开始日期 
      "end_date"?: Date; // 使用期限结束日期 
      "monthly_rent"?: number; // 月租金 
      "deposit"?: number; // 押金 
      "rent_day"?: number; // 每月的租金结算日 
      "is_ye_cai"?: number; // 是否录业财: 0-否,1-是 
      "ye_cai_id"?: string; // 业财ID 
    };
    type Show = {
      "id": number; // id 
    };
    type SoftDelete = {
      "id": number; // id 
    };
    type Restore = {
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
}
