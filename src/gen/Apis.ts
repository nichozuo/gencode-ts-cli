import { MyResponseType } from '@/common';
import { request } from '@umijs/max';

export const Apis = {
  Bosses: {
    List(data?: ApiTypes.Bosses.List) {
      return request('/admin/bosses/list', { data });
    },
    Store(data: ApiTypes.Bosses.Store): Promise<MyResponseType> {
      return request('/admin/bosses/store', { data });
    },
    Update(data: ApiTypes.Bosses.Update): Promise<MyResponseType> {
      return request('/admin/bosses/update', { data });
    },
    Delete(data: ApiTypes.Bosses.Delete): Promise<MyResponseType> {
      return request('/admin/bosses/delete', { data });
    },
  },
  Auth: {
    Captcha(): Promise<MyResponseType> {
      return request('/admin/auth/captcha', {});
    },
    Login(data: ApiTypes.Auth.Login): Promise<MyResponseType> {
      return request('/admin/auth/login', { data });
    },
    Logout(): Promise<MyResponseType> {
      return request('/admin/auth/logout', {});
    },
    Me(): Promise<MyResponseType> {
      return request('/admin/auth/me', {});
    },
    Changepassword(data: ApiTypes.Auth.Changepassword): Promise<MyResponseType> {
      return request('/admin/auth/change_password', { data });
    },
    Preupload(data: ApiTypes.Auth.Preupload): Promise<MyResponseType> {
      return request('/admin/auth/pre_upload', { data });
    },
  },
  Admins: {
    List(data?: ApiTypes.Admins.List): Promise<MyResponseType> {
      return request('/admin/admins/list', { data });
    },
    Store(data: ApiTypes.Admins.Store): Promise<MyResponseType> {
      return request('/admin/admins/store', { data });
    },
    Update(data: ApiTypes.Admins.Update): Promise<MyResponseType> {
      return request('/admin/admins/update', { data });
    },
    Delete(data: ApiTypes.Admins.Delete): Promise<MyResponseType> {
      return request('/admin/admins/delete', { data });
    },
  },
}