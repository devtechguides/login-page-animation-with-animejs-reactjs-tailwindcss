const Input = ({ label, ...props }) => {

  return (
    <div className="relative">
      {
        label && <label className="font-bold">{ label }</label>
      }
      <input 
        {...props}
        className="h-14 focus:outline outline-blue-600 outline-4 duration-75 font-bold rounded-md border-4 w-full px-6"
      />
    </div>
  )
}

Input.defaultProps = {
  label: null,
  type: 'text'
}

export default Input