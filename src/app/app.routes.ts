import { LoginComponent } from './login/login.component';
import {SysLoginComponent} from './login/sys-login/sys-login.component';
import {ComMemberComponent} from './login/non-sys-login/com-member/com-member.component';
import {BhcoComponent} from './login/non-sys-login/bhco/bhco.component';
import {ForgetPwdComponent} from './login/forget-pwd/forget-pwd.component';
/**
 * 这里是全局路由配置，全局路由只有2个，login和workspace，用户从login登录之后跳转到workspace
 */
export const appRoutes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'workspace',
		loadChildren: './global-layout/workspace/workspace.module#WorkspaceModule'
	},

  {
    path: 'cmemberLogin',
    component: ComMemberComponent
  },

  {
    path: 'bhcoLogin',
    component: BhcoComponent
  },

  {
    path: 'sysLogin',
    component: SysLoginComponent
  },

  {
    path: 'forgetPwd',
    component: ForgetPwdComponent
  },

	{
		path: '**', // fallback router must in the last
		component: LoginComponent
	}

];
