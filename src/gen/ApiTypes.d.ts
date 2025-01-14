declare namespace ApiTypes {
  namespace Bosses {
    type List = {
      "name1"?: string; // 模糊搜索：名称1 
      "name2"?: string; // 模糊搜索：名称2 
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
    type Changepassword = {
      "old_password": string; // 老密码 
      "new_password": string; // 新密码 
      "re_new_password": string; // 重复新密码 
    };
    type Preupload = {
      "filename": string; // 文件名称 
    };
  }
  namespace Admins {
    type List = {
      "username"?: string; // 模糊搜索：名称 
    };
    type Store = {
      "username": string; // 用户名 
      "password": string; // 密码hidden 
    };
    type Update = {
      "id": number; // id 
      "username": string; // 用户名 
      "password"?: string; // 密码hidden 
    };
    type Delete = {
      "id": number; // id 
    };
  }
}
