import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createGlobalStyle } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { auth } from "../firebase";
import Layout from "../components/Layout";
import store from "../redux";
import { reauthenticate } from "../redux/actions/auth";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #ada2a4;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ada2a4;
    }

    * {
      box-sizing: border-box;
      color: #555;
      font-family: 'Raleway', sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
    }

    a {
      cursor:pointer;
      text-decoration: none;
    }

    .burger-icon {
      width: 30px;
      height: 1px;
      background-color: black;
      display: block;
      margin-bottom: 8px;
    }

    .middle {
      width: 15px;
    }

    .bottom{
      margin-bottom: 0;
    }
`;

function MyApp({ Component, pageProps, store }) {
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>
      store.dispatch(reauthenticate(user))
    );
    return () => unsubscribe();
  }, []);
  return (
    <Provider store={store}>
      <Layout dispatch={store.dispatch}>
        {(data) => (
          <React.Fragment>
            <GlobalStyle />
            <Component {...pageProps} {...data} />
          </React.Fragment>
        )}
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  ctx.store.dispatch(reauthenticate(auth.currentUser));
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default withRedux(store)(MyApp);
