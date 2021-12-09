// App.js
import React from 'react';
import ItemModal from './views/itemModal';
import Layout from './components/layout';
// import Tac30 from '../images/tac30-cutout.png';
import AP63 from './images/9x19ap.png'

const App = () => {
  return (
    <Layout variant="hideout">
      <ItemModal title="9x19mm AP 6.3" image={AP63} />
    </Layout>
  );
};
export default App;
