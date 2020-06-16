// Because too many lazy loading pages will cause webpack hot update too slow, so the development environment does not use lazy loading, only the production environment uses lazy loading
const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {
  // keepAlive: true
  disableCache: false
}

const frameIn = [{
    path: "/:id(\\d)::cmd(text)/:path",
    component: _import("page/GoText"),
    meta: {
      ...meta,
      view: 'text',
      requiresAuth: true,
    }
  },
  {
    path: "/:id(\\d)::cmd(pdf)/:path",
    component: _import("page/GoPdf"),
    meta: {
      ...meta,
      view: 'pdf',
      requiresAuth: true,
    }
  },
  {
    path: "/",
    component: _import("page/GoList"),
    meta: {
      ...meta,
      redirect: true,
    }
  },
  {
    path: "/:id(\\d)::cmd(video)/:path",
    component: _import("page/GoVideo"),
    meta: {
      ...meta,
      view: 'video',
      requiresAuth: true,
    }
  },
  {
    path: "/:id(\\d)::cmd(audio)/:path",
    component: _import("page/GoAudio"),
    meta: {
      ...meta,
      view: 'audio',
      requiresAuth: true,
    }
  },
  {
    path: "/:id(\\d)::cmd(image)/:path",
    component: _import("page/GoImg"),
    meta: {
      ...meta,
      view: 'image',
      requiresAuth: true,
    }
  },
  {
    path: "/:id(\\d)::cmd(search)(/?q=)*",
    component: _import("page/GoList"),
    meta: {
      ...meta,
      view: 'list',
      requiresAuth: true,
    }
  },
  {
    path: "/:id(\\d):/:path*",
    component: _import("page/GoList"),
    meta: {
      ...meta,
      view: 'list',
      requiresAuth: true,
    }
  },
  {
      path: '/:id(\\d)::cmd(login)/',
      name: 'login',
      component: _import("page/pages/Login"),
      meta: {
          ...meta,
          guest: true
      }
  },
  {
      path: '/:id(\\d)::cmd(register)/user',
      name: 'register',
      component: _import("page/pages/Register-user"),
      meta: {
          ...meta,
          requiresAuth: true,
          admin: true
      }
  },
  {
      path: '/:id(\\d)::cmd(register)/admin',
      name: 'register-admin',
      component: _import("page/pages/Register-admin"),
      meta: {
          ...meta,
          requiresAuth: true,
          admin: true,
          superadmin: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(register)/superadmin',
      name: 'register-superadmin',
      component: _import("page/pages/Register-superadmin"),
      meta: {
          ...meta,
          requiresAuth: true,
          admin: true,
          superadmin: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(register)/otp',
      name: 'otp',
      component: _import("page/pages/OTP-Register"),
      meta: {
          ...meta,
          guest: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(home)/',
      name: 'home',
      component: _import("page/pages/Home"),
      meta: {
          ...meta,
          guest: true,
          home: true
      }
  },
  {
      path: '/:id(\\d)::cmd(result)/',
      name: 'results',
      component: _import("page/pages/ResultPage"),
      meta: {
          ...meta,
          guest: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(register)/request/user',
      name: 'request',
      component: _import("page/pages/Request"),
      meta: {
          ...meta,
          guest: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(settings)/changepassword',
      name: 'changepassword',
      component: _import("page/pages/ChangePassword"),
      meta: {
          ...meta,
          requiresAuth: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(admin)/',
      name: 'admin',
      component: _import("page/pages/AdminArea"),
      meta: {
          ...meta,
          requiresAuth: true,
          admin: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(superadmin)/',
      name: 'superadmin',
      component: _import("page/pages/SuperAdminArea"),
      meta: {
          ...meta,
          requiresAuth: true,
          admin: true,
      }
  },
  {
      path: '/:id(\\d)::cmd(settings)/',
      name: 'settings',
      component: _import("page/pages/Settings"),
      meta: {
          ...meta,
          requiresAuth: true,
      }
  }
];

export default frameIn;
