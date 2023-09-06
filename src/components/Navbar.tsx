import { Layout, Row, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from '../router/index';
import { useTypedSelector, useAppDispatch } from '../hooks/useTypedSelector';
import { logout } from '../features/auth/actions';

const Navbar: React.FC = () => {
  const history = useNavigate();
  const auth = useTypedSelector(state => state.auth.isAuth);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <Layout.Header>
      <Row justify="end">
        {
          auth
            ?
            <>
              <div style={{color: 'white'}}>User</div>
              <Menu theme="dark" mode="vertical" selectable={false}>
                <Menu.Item key={1} onClick={onLogout}>Log out</Menu.Item>
              </Menu>
            </>
            :
            <Menu theme="dark" mode="vertical" selectable={false}>
              <Menu.Item key={2} onClick={() => history(RouteNames.LOGIN)}>Login</Menu.Item>
            </Menu>
        }
      </Row>
    </Layout.Header>
  );
}

export default Navbar;