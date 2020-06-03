import Head from "next/head";
import styled from "styled-components";
import Router from "next/router";
import Loader from "../components/Base/Loader";
import { auth } from "../firebase";
import authenticate from "../utils/authenticate";

const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 30%;
  margin: 0 auto;
  @media (max-width: 620px) {
    max-width: 90%;
  }
  @media (min-width: 621px) and (max-width: 920px) {
    max-width: 70%;
  }
`;

const Input = styled.input`
  font-size: 15px;
  line-height: 1.2;
  color: #333;
  display: block;
  width: 100%;
  background: #fff;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 30px;
  border: 1px solid #808080;
  margin-top: 20px;
  outline: none;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 15px;
  line-height: 1.2;
  color: #e0e0e0;
  display: block;
  width: 100%;
  background: #fff;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 53px;
  border: 1px solid #808080;
  margin-top: 20px;
  outline: none;
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const Error = styled.p`
  color: red;
  padding: 0 20px;
`;

function AdminPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        setError(false);
        setLoading(true);
        await auth.signInWithEmailAndPassword(email.value, password.value);
        Router.replace("/");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [Router]
  );
  return (
    <React.Fragment>
      <Head>
        <title>Tablespoon | Admin panel</title>
      </Head>
      <AdminForm onSubmit={handleSubmit}>
        <Loader loading={loading} />
        <LogoWrapper>
          <Logo src="/images/Logo.png" alt="logo" />
        </LogoWrapper>
        {error && <Error>{error}</Error>}
        <Input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <Input type="password" placeholder="Password" name="password" />
        <Button type="submit" bgColor="#333">
          Login
        </Button>
      </AdminForm>
    </React.Fragment>
  );
}

AdminPage.getInitialProps = (ctx) => {
  authenticate(ctx);
  return {};
};

export default AdminPage;
