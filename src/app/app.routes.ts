import { LoginComponent } from './login/login.component';
import {NonSysLoginComponent} from './login/non-sys-login/non-sys-login.component';
import {SysLoginComponent} from './login/sys-login/sys-login.component';
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
    path: 'nonSysLogin',
    component: NonSysLoginComponent
  },

  {
    path: 'sysLogin',
    component: SysLoginComponent
  },

	{
		path: '**', // fallback router must in the last
		component: LoginComponent
	}

];
