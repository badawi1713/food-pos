import { GridLayout } from 'components/organism';
import { Sidebar } from 'components/molecules';
import { Home } from 'pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <GridLayout height='100vh' columns='11rem 12fr' overflow='hidden' >
      <Sidebar />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </GridLayout>
  )
}

export default App