import 'bootstrap/dist/css/bootstrap.css'
import Router from "next/router";
import NProgress from 'nprogress';
import "nprogress/nprogress.css";

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

export default function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return <Component {...pageProps} />
}