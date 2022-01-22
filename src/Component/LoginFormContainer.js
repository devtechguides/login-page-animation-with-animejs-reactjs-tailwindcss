const LoginFormContainer = ({ children, ...props }) => {
  return (
    <form 
      {...props}
      className="px-8 md:px-16 py-16 bg-white shadow-lg rounded-md space-y-6"
    >
      { children }
    </form>
  )
}

export default LoginFormContainer