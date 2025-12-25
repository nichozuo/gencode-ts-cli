import { MyResponseType } from '@/common';
import { request } from '@umijs/max';

export const Apis = {
  AccountUsers: {
    List(data?: ApiTypes.AccountUsers.List): Promise<MyResponseType> {
      return request('admin/account_users/list', { data });
    },
    Store(data: ApiTypes.AccountUsers.Store): Promise<MyResponseType> {
      return request('admin/account_users/store', { data });
    },
    Update(data: ApiTypes.AccountUsers.Update): Promise<MyResponseType> {
      return request('admin/account_users/update', { data });
    },
    Show(data: ApiTypes.AccountUsers.Show): Promise<MyResponseType> {
      return request('admin/account_users/show', { data });
    },
    Delete(data: ApiTypes.AccountUsers.Delete): Promise<MyResponseType> {
      return request('admin/account_users/delete', { data });
    },
  },
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
    Select(): Promise<MyResponseType> {
      return request('admin/admins/select', {});
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
    Delete(data: ApiTypes.Agents.Delete): Promise<MyResponseType> {
      return request('admin/agents/delete', { data });
    },
    Select(): Promise<MyResponseType> {
      return request('admin/agents/select', {});
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
    TemporaryUrl(data: ApiTypes.Auth.TemporaryUrl): Promise<MyResponseType> {
      return request('admin/auth/temporary_url', { data });
    },
    GetBaseData(): Promise<MyResponseType> {
      return request('admin/auth/get_base_data', {});
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
    Delete(data: ApiTypes.Companies.Delete): Promise<MyResponseType> {
      return request('admin/companies/delete', { data });
    },
    Select(data?: ApiTypes.Companies.Select): Promise<MyResponseType> {
      return request('admin/companies/select', { data });
    },
  },
  CompanyAccountLogs: {
    List(data?: ApiTypes.CompanyAccountLogs.List): Promise<MyResponseType> {
      return request('admin/company_account_logs/list', { data });
    },
    Store(data: ApiTypes.CompanyAccountLogs.Store): Promise<MyResponseType> {
      return request('admin/company_account_logs/store', { data });
    },
    AddPurchaseInvoice(data: ApiTypes.CompanyAccountLogs.AddPurchaseInvoice): Promise<MyResponseType> {
      return request('admin/company_account_logs/add_purchase_invoice', { data });
    },
    AddPurchaseFund(data: ApiTypes.CompanyAccountLogs.AddPurchaseFund): Promise<MyResponseType> {
      return request('admin/company_account_logs/add_purchase_fund', { data });
    },
    AddSaleInvoice(data: ApiTypes.CompanyAccountLogs.AddSaleInvoice): Promise<MyResponseType> {
      return request('admin/company_account_logs/add_sale_invoice', { data });
    },
    AddSaleFund(data: ApiTypes.CompanyAccountLogs.AddSaleFund): Promise<MyResponseType> {
      return request('admin/company_account_logs/add_sale_fund', { data });
    },
  },
  CompanyAccounts: {
    List(data?: ApiTypes.CompanyAccounts.List): Promise<MyResponseType> {
      return request('admin/company_accounts/list', { data });
    },
  },
  CompanyTemplates: {
    List(data?: ApiTypes.CompanyTemplates.List): Promise<MyResponseType> {
      return request('admin/company_templates/list', { data });
    },
    Store(data: ApiTypes.CompanyTemplates.Store): Promise<MyResponseType> {
      return request('admin/company_templates/store', { data });
    },
    Update(data: ApiTypes.CompanyTemplates.Update): Promise<MyResponseType> {
      return request('admin/company_templates/update', { data });
    },
    Show(data: ApiTypes.CompanyTemplates.Show): Promise<MyResponseType> {
      return request('admin/company_templates/show', { data });
    },
    Delete(data: ApiTypes.CompanyTemplates.Delete): Promise<MyResponseType> {
      return request('admin/company_templates/delete', { data });
    },
  },
  FlowMoneys: {
    List(data?: ApiTypes.FlowMoneys.List): Promise<MyResponseType> {
      return request('admin/flow_moneys/list', { data });
    },
    SelectCompaniesTemplate(data?: ApiTypes.FlowMoneys.SelectCompaniesTemplate): Promise<MyResponseType> {
      return request('admin/flow_moneys/select_companies_template', { data });
    },
    GetStocksByCompanyId(data: ApiTypes.FlowMoneys.GetStocksByCompanyId): Promise<MyResponseType> {
      return request('admin/flow_moneys/get_stocks_by_company_id', { data });
    },
    Store(data: ApiTypes.FlowMoneys.Store): Promise<MyResponseType> {
      return request('admin/flow_moneys/store', { data });
    },
    FlowMoneyDailyDetails(data: ApiTypes.FlowMoneys.FlowMoneyDailyDetails): Promise<MyResponseType> {
      return request('admin/flow_moneys/flow_money_daily_details', { data });
    },
    FullFlowMoneyDailyDetails(data?: ApiTypes.FlowMoneys.FullFlowMoneyDailyDetails): Promise<MyResponseType> {
      return request('admin/flow_moneys/full_flow_money_daily_details', { data });
    },
    Delete(data: ApiTypes.FlowMoneys.Delete): Promise<MyResponseType> {
      return request('admin/flow_moneys/delete', { data });
    },
    InProgress(data?: ApiTypes.FlowMoneys.InProgress): Promise<MyResponseType> {
      return request('admin/flow_moneys/in_progress', { data });
    },
    Audit(data: ApiTypes.FlowMoneys.Audit): Promise<MyResponseType> {
      return request('admin/flow_moneys/audit', { data });
    },
  },
  InBills: {
    List(data?: ApiTypes.InBills.List): Promise<MyResponseType> {
      return request('admin/in_bills/list', { data });
    },
    Store(data: ApiTypes.InBills.Store): Promise<MyResponseType> {
      return request('admin/in_bills/store', { data });
    },
    Show(data: ApiTypes.InBills.Show): Promise<MyResponseType> {
      return request('admin/in_bills/show', { data });
    },
    Delete(data: ApiTypes.InBills.Delete): Promise<MyResponseType> {
      return request('admin/in_bills/delete', { data });
    },
  },
  InvoiceCates: {
    List(data?: ApiTypes.InvoiceCates.List): Promise<MyResponseType> {
      return request('admin/invoice_cates/list', { data });
    },
    Store(data: ApiTypes.InvoiceCates.Store): Promise<MyResponseType> {
      return request('admin/invoice_cates/store', { data });
    },
    Update(data: ApiTypes.InvoiceCates.Update): Promise<MyResponseType> {
      return request('admin/invoice_cates/update', { data });
    },
    Delete(data: ApiTypes.InvoiceCates.Delete): Promise<MyResponseType> {
      return request('admin/invoice_cates/delete', { data });
    },
  },
  Stocks: {
    List(data?: ApiTypes.Stocks.List): Promise<MyResponseType> {
      return request('admin/stocks/list', { data });
    },
    Store(data: ApiTypes.Stocks.Store): Promise<MyResponseType> {
      return request('admin/stocks/store', { data });
    },
    Update(data: ApiTypes.Stocks.Update): Promise<MyResponseType> {
      return request('admin/stocks/update', { data });
    },
    Show(data: ApiTypes.Stocks.Show): Promise<MyResponseType> {
      return request('admin/stocks/show', { data });
    },
    Delete(data: ApiTypes.Stocks.Delete): Promise<MyResponseType> {
      return request('admin/stocks/delete', { data });
    },
    Select(): Promise<MyResponseType> {
      return request('admin/stocks/select', {});
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
  Warehouses: {
    List(data?: ApiTypes.Warehouses.List): Promise<MyResponseType> {
      return request('admin/warehouses/list', { data });
    },
    Store(data: ApiTypes.Warehouses.Store): Promise<MyResponseType> {
      return request('admin/warehouses/store', { data });
    },
    Update(data: ApiTypes.Warehouses.Update): Promise<MyResponseType> {
      return request('admin/warehouses/update', { data });
    },
    Show(data: ApiTypes.Warehouses.Show): Promise<MyResponseType> {
      return request('admin/warehouses/show', { data });
    },
    Delete(data: ApiTypes.Warehouses.Delete): Promise<MyResponseType> {
      return request('admin/warehouses/delete', { data });
    },
    Select(): Promise<MyResponseType> {
      return request('admin/warehouses/select', {});
    },
  },
}