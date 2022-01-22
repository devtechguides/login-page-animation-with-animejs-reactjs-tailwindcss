const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="font-bold px-4 py-2 shadow-md bg-blue-600 text-white rounded-md"
    >
      { children }
    </button>
  )
}

export default Button