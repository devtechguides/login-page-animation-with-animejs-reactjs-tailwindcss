import classNames from 'classnames'

const Shape = ({ classes }) => {

  const listClasses = classNames(
    'absolute top-0 left-0', 
    classes
  )

  return (
    <div className={listClasses}></div>
  )
}

Shape.defaultProps = {
  classes: null
}

export default Shape