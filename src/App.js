// App.js
import React from 'react';
import ItemModal from './views/itemModal';
import Layout from './components/layout';

const App = () => {
  return (
    <Layout variant="hideout">
      <ItemModal title="test" />
    </Layout>
  );
};
export default App;
