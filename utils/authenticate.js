export default function authenticate(ctx) {
  if (ctx.isServer && ctx.store.getState().auth.loggedIn) {
    ctx.res.writeHead({ Location: "/" });
    ctx.res.end();
  }
}
