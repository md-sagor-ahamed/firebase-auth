import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Forgot_password from './Forgot_password';
import Login from './Login';
import Nav from './Nav';
import Private from './Private';
import Profile from './Profile';
import Register from './Register';
import Reset_password from './Reset_password';
import { AuthProvider } from './context/Auth.context'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<Forgot_password />} />
          <Route path='/reset-password' element={<Reset_password />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/private' element={<Private />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
