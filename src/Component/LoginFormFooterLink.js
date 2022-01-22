const LoginFormFooterLink = ({ href, children, ...props }) => {
  return (
    <a 
      className="text-white font-bold"
      href={href}
      {...props}
    >
      { children }
    </a>
  )
}

LoginFormFooterLink.defaultProps = {
  href: '#'
}

export default LoginFormFooterLink