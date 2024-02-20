import Footer from '@components/blocks/Footer'
import Header from '@components/blocks/Header'
import SignIn from '@pages/SignIn'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      {window.localStorage.getItem('accessToken') ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <SignIn />
      )}
      <Footer />
    </>
  )
}

export default App
