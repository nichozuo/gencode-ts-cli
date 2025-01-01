import { MyResponseType } from '@/common'; import { request } from '@umijs/max';

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
  Agents: {
    List(data?: ApiTypes.Agents.List): Promise<MyResponseType> {
      return request('admin/agents/list', { data });
    },
    Store(data: ApiTypes.Agents.Store): Promise<MyResponseType> {
      return request('admin/agents/store', { data });
    },
    Update(data: ApiTypes.Agents.Update): Promise<MyResponseType> {
      return request('admin/agents/update', { data });
    },
    Show(data: ApiTypes.Agents.Show): Promise<MyResponseType> {
      return request('admin/agents/show', { data });
    },
    Delete(data: ApiTypes.Agents.Delete): Promise<MyResponseType> {
      return request('admin/agents/delete', { data });
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
  Bosses: {
    List(data?: ApiTypes.Bosses.List): Promise<MyResponseType> {
      return request('admin/bosses/list', { data });
    },
    Store(data: ApiTypes.Bosses.Store): Promise<MyResponseType> {
      return request('admin/bosses/store', { data });
    },
    Update(data: ApiTypes.Bosses.Update): Promise<MyResponseType> {
      return request('admin/bosses/update', { data });
    },
    Show(data: ApiTypes.Bosses.Show): Promise<MyResponseType> {
      return request('admin/bosses/show', { data });
    },
    Delete(data: ApiTypes.Bosses.Delete): Promise<MyResponseType> {
      return request('admin/bosses/delete', { data });
    },
  },
  Factories: {
    List(data?: ApiTypes.Factories.List): Promise<MyResponseType> {
      return request('admin/factories/list', { data });
    },
    Store(data: ApiTypes.Factories.Store): Promise<MyResponseType> {
      return request('admin/factories/store', { data });
    },
    Update(data: ApiTypes.Factories.Update): Promise<MyResponseType> {
      return request('admin/factories/update', { data });
    },
    Delete(data: ApiTypes.Factories.Delete): Promise<MyResponseType> {
      return request('admin/factories/delete', { data });
    },
  },
  LoanCompanies: {
    List(data?: ApiTypes.LoanCompanies.List): Promise<MyResponseType> {
      return request('admin/loan_companies/list', { data });
    },
    Store(data: ApiTypes.LoanCompanies.Store): Promise<MyResponseType> {
      return request('admin/loan_companies/store', { data });
    },
    Update(data: ApiTypes.LoanCompanies.Update): Promise<MyResponseType> {
      return request('admin/loan_companies/update', { data });
    },
    Show(data: ApiTypes.LoanCompanies.Show): Promise<MyResponseType> {
      return request('admin/loan_companies/show', { data });
    },
    Delete(data: ApiTypes.LoanCompanies.Delete): Promise<MyResponseType> {
      return request('admin/loan_companies/delete', { data });
    },
  },
  LoanDailyDetails: {
    List(data?: ApiTypes.LoanDailyDetails.List): Promise<MyResponseType> {
      return request('admin/loan_daily_details/list', { data });
    },
    Export(data?: ApiTypes.LoanDailyDetails.Export): Promise<MyResponseType> {
      return request('admin/loan_daily_details/export', { responseType: 'blob',data });
    },
  },
  Loans: {
    List(data?: ApiTypes.Loans.List): Promise<MyResponseType> {
      return request('admin/loans/list', { data });
    },
    Store(data: ApiTypes.Loans.Store): Promise<MyResponseType> {
      return request('admin/loans/store', { data });
    },
    Delete(data: ApiTypes.Loans.Delete): Promise<MyResponseType> {
      return request('admin/loans/delete', { data });
    },
  },
  Markets: {
    List(data?: ApiTypes.Markets.List): Promise<MyResponseType> {
      return request('admin/markets/list', { data });
    },
    Store(data: ApiTypes.Markets.Store): Promise<MyResponseType> {
      return request('admin/markets/store', { data });
    },
    Update(data: ApiTypes.Markets.Update): Promise<MyResponseType> {
      return request('admin/markets/update', { data });
    },
    Delete(data: ApiTypes.Markets.Delete): Promise<MyResponseType> {
      return request('admin/markets/delete', { data });
    },
  },
  MerchantCounters: {
    List(data?: ApiTypes.MerchantCounters.List): Promise<MyResponseType> {
      return request('admin/merchant_counters/list', { data });
    },
    Store(data: ApiTypes.MerchantCounters.Store): Promise<MyResponseType> {
      return request('admin/merchant_counters/store', { data });
    },
    Update(data: ApiTypes.MerchantCounters.Update): Promise<MyResponseType> {
      return request('admin/merchant_counters/update', { data });
    },
    Delete(data: ApiTypes.MerchantCounters.Delete): Promise<MyResponseType> {
      return request('admin/merchant_counters/delete', { data });
    },
  },
  Merchants: {
    List(data?: ApiTypes.Merchants.List): Promise<MyResponseType> {
      return request('admin/merchants/list', { data });
    },
    Store(data: ApiTypes.Merchants.Store): Promise<MyResponseType> {
      return request('admin/merchants/store', { data });
    },
    Update(data: ApiTypes.Merchants.Update): Promise<MyResponseType> {
      return request('admin/merchants/update', { data });
    },
    Delete(data: ApiTypes.Merchants.Delete): Promise<MyResponseType> {
      return request('admin/merchants/delete', { data });
    },
  },
  OrgUsers: {
    List(data?: ApiTypes.OrgUsers.List): Promise<MyResponseType> {
      return request('admin/org_users/list', { data });
    },
    Store(data: ApiTypes.OrgUsers.Store): Promise<MyResponseType> {
      return request('admin/org_users/store', { data });
    },
    Update(data: ApiTypes.OrgUsers.Update): Promise<MyResponseType> {
      return request('admin/org_users/update', { data });
    },
    Show(data: ApiTypes.OrgUsers.Show): Promise<MyResponseType> {
      return request('admin/org_users/show', { data });
    },
    Delete(data: ApiTypes.OrgUsers.Delete): Promise<MyResponseType> {
      return request('admin/org_users/delete', { data });
    },
  },
  PayOrders: {
    List(data?: ApiTypes.PayOrders.List): Promise<MyResponseType> {
      return request('admin/pay_orders/list', { data });
    },
  },
  Platforms: {
    List(data?: ApiTypes.Platforms.List): Promise<MyResponseType> {
      return request('admin/platforms/list', { data });
    },
    Store(data: ApiTypes.Platforms.Store): Promise<MyResponseType> {
      return request('admin/platforms/store', { data });
    },
    Update(data: ApiTypes.Platforms.Update): Promise<MyResponseType> {
      return request('admin/platforms/update', { data });
    },
    Delete(data: ApiTypes.Platforms.Delete): Promise<MyResponseType> {
      return request('admin/platforms/delete', { data });
    },
  },
  Select: {
    Agents(): Promise<MyResponseType> {
      return request('admin/select/agents', {});
    },
    LoanCompanies(): Promise<MyResponseType> {
      return request('admin/select/loan_companies', {});
    },
    Factories(): Promise<MyResponseType> {
      return request('admin/select/factories', {});
    },
    Platforms(): Promise<MyResponseType> {
      return request('admin/select/platforms', {});
    },
    Bosses(): Promise<MyResponseType> {
      return request('admin/select/bosses', {});
    },
    Markets(): Promise<MyResponseType> {
      return request('admin/select/markets', {});
    },
    Merchants(): Promise<MyResponseType> {
      return request('admin/select/merchants', {});
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