import { MyResponseType } from '@/common';
import { request } from '@umijs/max';

export const Apis = {
  Admins: {
    List(data?: ApiTypes.Admins.List): Promise<MyResponseType> {
      return request('admin/admins/list', { data });
    },
    Store(data: ApiTypes.Admins.Store): Promise<MyResponseType> {
      return request('admin/admins/store', { data });
    },
    Update(data: ApiTypes.Admins.Update): Promise<MyResponseType> {
      return request('admin/admins/update', { data });
    },
    Delete(data: ApiTypes.Admins.Delete): Promise<MyResponseType> {
      return request('admin/admins/delete', { data });
    },
  },
  Auth: {
    Captcha(): Promise<MyResponseType> {
      return request('admin/auth/captcha', {});
    },
    Login(data: ApiTypes.Auth.Login): Promise<MyResponseType> {
      return request('admin/auth/login', { data });
    },
    Logout(): Promise<MyResponseType> {
      return request('admin/auth/logout', {});
    },
    Me(): Promise<MyResponseType> {
      return request('admin/auth/me', {});
    },
    ChangePassword(data: ApiTypes.Auth.ChangePassword): Promise<MyResponseType> {
      return request('admin/auth/change_password', { data });
    },
    PreUpload(data: ApiTypes.Auth.PreUpload): Promise<MyResponseType> {
      return request('admin/auth/pre_upload', { data });
    },
  },
  Companies: {
    List(data?: ApiTypes.Companies.List): Promise<MyResponseType> {
      return request('admin/companies/list', { data });
    },
    Store(data: ApiTypes.Companies.Store): Promise<MyResponseType> {
      return request('admin/companies/store', { data });
    },
    Update(data: ApiTypes.Companies.Update): Promise<MyResponseType> {
      return request('admin/companies/update', { data });
    },
    Move(data: ApiTypes.Companies.Move): Promise<MyResponseType> {
      return request('admin/companies/move', { data });
    },
    Show(data: ApiTypes.Companies.Show): Promise<MyResponseType> {
      return request('admin/companies/show', { data });
    },
    SoftDelete(data: ApiTypes.Companies.SoftDelete): Promise<MyResponseType> {
      return request('admin/companies/soft_delete', { data });
    },
    Restore(data: ApiTypes.Companies.Restore): Promise<MyResponseType> {
      return request('admin/companies/restore', { data });
    },
    Delete(data: ApiTypes.Companies.Delete): Promise<MyResponseType> {
      return request('admin/companies/delete', { data });
    },
    Select(data?: ApiTypes.Companies.Select): Promise<MyResponseType> {
      return request('admin/companies/select', { data });
    },
  },
  CompanyEmployees: {
    List(data?: ApiTypes.CompanyEmployees.List): Promise<MyResponseType> {
      return request('admin/company_employees/list', { data });
    },
    Store(data: ApiTypes.CompanyEmployees.Store): Promise<MyResponseType> {
      return request('admin/company_employees/store', { data });
    },
    Update(data: ApiTypes.CompanyEmployees.Update): Promise<MyResponseType> {
      return request('admin/company_employees/update', { data });
    },
    Show(data: ApiTypes.CompanyEmployees.Show): Promise<MyResponseType> {
      return request('admin/company_employees/show', { data });
    },
    SoftDelete(data: ApiTypes.CompanyEmployees.SoftDelete): Promise<MyResponseType> {
      return request('admin/company_employees/soft_delete', { data });
    },
    Restore(data: ApiTypes.CompanyEmployees.Restore): Promise<MyResponseType> {
      return request('admin/company_employees/restore', { data });
    },
    Delete(data: ApiTypes.CompanyEmployees.Delete): Promise<MyResponseType> {
      return request('admin/company_employees/delete', { data });
    },
  },
  Dormigories: {
    List(data?: ApiTypes.Dormigories.List): Promise<MyResponseType> {
      return request('admin/dormigories/list', { data });
    },
    Store(data: ApiTypes.Dormigories.Store): Promise<MyResponseType> {
      return request('admin/dormigories/store', { data });
    },
    Update(data: ApiTypes.Dormigories.Update): Promise<MyResponseType> {
      return request('admin/dormigories/update', { data });
    },
    Show(data: ApiTypes.Dormigories.Show): Promise<MyResponseType> {
      return request('admin/dormigories/show', { data });
    },
    SoftDelete(data: ApiTypes.Dormigories.SoftDelete): Promise<MyResponseType> {
      return request('admin/dormigories/soft_delete', { data });
    },
    Restore(data: ApiTypes.Dormigories.Restore): Promise<MyResponseType> {
      return request('admin/dormigories/restore', { data });
    },
    Delete(data: ApiTypes.Dormigories.Delete): Promise<MyResponseType> {
      return request('admin/dormigories/delete', { data });
    },
  },
  SysPermissions: {
    List(data: ApiTypes.SysPermissions.List): Promise<MyResponseType> {
      return request('admin/sys_permissions/list', { data });
    },
    Tree(data: ApiTypes.SysPermissions.Tree): Promise<MyResponseType> {
      return request('admin/sys_permissions/tree', { data });
    },
    Store(data: ApiTypes.SysPermissions.Store): Promise<MyResponseType> {
      return request('admin/sys_permissions/store', { data });
    },
    Update(data: ApiTypes.SysPermissions.Update): Promise<MyResponseType> {
      return request('admin/sys_permissions/update', { data });
    },
    Delete(data: ApiTypes.SysPermissions.Delete): Promise<MyResponseType> {
      return request('admin/sys_permissions/delete', { data });
    },
    Move(data: ApiTypes.SysPermissions.Move): Promise<MyResponseType> {
      return request('admin/sys_permissions/move', { data });
    },
    SelectApi(): Promise<MyResponseType> {
      return request('admin/sys_permissions/select_api', {});
    },
  },
  SysRoles: {
    List(data?: ApiTypes.SysRoles.List): Promise<MyResponseType> {
      return request('admin/sys_roles/list', { data });
    },
    Store(data: ApiTypes.SysRoles.Store): Promise<MyResponseType> {
      return request('admin/sys_roles/store', { data });
    },
    Update(data: ApiTypes.SysRoles.Update): Promise<MyResponseType> {
      return request('admin/sys_roles/update', { data });
    },
    Delete(data: ApiTypes.SysRoles.Delete): Promise<MyResponseType> {
      return request('admin/sys_roles/delete', { data });
    },
    Select(): Promise<MyResponseType> {
      return request('admin/sys_roles/select', {});
    },
    GetPermissions(data: ApiTypes.SysRoles.GetPermissions): Promise<MyResponseType> {
      return request('admin/sys_roles/get_permissions', { data });
    },
    SetPermissions(data: ApiTypes.SysRoles.SetPermissions): Promise<MyResponseType> {
      return request('admin/sys_roles/set_permissions', { data });
    },
  },
}