import { Nav } from '@jasonruesch/portfolio-ui';
import { Layout } from '@jasonruesch/shared-ui';
import { Outlet } from 'react-router';

export function App() {
  return (
    <Layout nav={<Nav />}>
      <Outlet />
    </Layout>
  );
}

export default App;
