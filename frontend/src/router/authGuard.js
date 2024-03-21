
export default function authGuard(to, from, next) {

  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (isAuthenticated == 'true') {
    // Se o usuário estiver autenticado, permita que ele entre na rota
    next();
  } else {
    // Se o usuário não estiver autenticado, redirecione-o para a página de login
    next('/login'); 
  }

}
