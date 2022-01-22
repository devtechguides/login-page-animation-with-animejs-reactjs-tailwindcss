import './App.css';
import { useEffect, useRef, useState } from 'react';
import { 
  animateShowElement, 
  animateShapes, 
  animateForm, 
  animateFooterLinks,
  animateHideForm,
  animateHideFooterLinks, 
  animateFitShape,
  animateWelcomeMessage } from './Lib/animations';
import Shape from './Component/Shape';
import Input from './Component/Input';
import Button from './Component/Button';
import LoginFormFooter from './Component/LoginFormFooter';
import LoginFormFooterLink from './Component/LoginFormFooterLink';
import LoginFormContainer from './Component/LoginFormContainer';
import delay from 'delay'

function App() {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const shapeContainerRef = useRef()
  const welcomeContainerRef = useRef()
  const formRef = useRef()
  const footerRef = useRef()

  useEffect(() => {
    animateShowElement(shapeContainerRef.current.children)
    animateShapes(shapeContainerRef.current.children)
    animateForm(formRef.current, 400)
    animateFooterLinks(footerRef.current, 600)
  }, [])

  const fakeLogin = async e => {

    e.preventDefault()

    setIsAuthenticating(true)

    await delay(1000)

    animateHideForm(formRef.current, 100)
    animateHideFooterLinks(footerRef.current, 100)
    animateFitShape(shapeContainerRef.current.children, 300)

    setTimeout(() => {
      animateWelcomeMessage(welcomeContainerRef.current.children, 100)
    }, 500)

  }

  return (
    <div>
      <div ref={shapeContainerRef}>
        <Shape 
          classes="bg-blue-500 w-full min-h-screen opacity-0"
        />
        <Shape 
          classes="bg-blue-600 w-1/2 min-h-screen opacity-0"
        />
      </div>
      <div ref={welcomeContainerRef} className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <p className="text-white font-black md:text-6xl opacity-0">Welcome</p>
        <span className="text-white font-black md:text-5xl opacity-0">
          John Doe!
        </span>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col px-6">
        <div className="flex items-center justify-center w-full flex-1">
          <div className="max-w-md w-full">
            <div ref={formRef} className="opacity-0">
              <LoginFormContainer onSubmit={fakeLogin}>
                <Input label="Email" type="email" autoFocus />
                <Input label="Password" type="password" />
                <Button disabled={isAuthenticating}>
                  {
                    isAuthenticating
                    ?
                    'Authenticating...'
                    :
                    'Access account'
                  }
                </Button>
              </LoginFormContainer>
            </div>
            <div ref={footerRef} className="opacity-0">
              <LoginFormFooter>
                <LoginFormFooterLink href="/forgot-password">
                  Forgot my password
                </LoginFormFooterLink>
                <LoginFormFooterLink href="/create-account">
                  Create account
                </LoginFormFooterLink>
              </LoginFormFooter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
