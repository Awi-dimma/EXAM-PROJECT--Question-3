import './App.css'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import LogIn from './components/LogIn'
import SignInRedirect from './components/RedirectPage'
import NotFound from './components/NotFound'
import React from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/redirectionpage" element={<SignInRedirect />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ErrorBoundary />
      </BrowserRouter>
    </main>
  )
}

export default App;
