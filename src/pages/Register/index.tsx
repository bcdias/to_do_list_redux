import FormRegister from '../../containers/FormRegister'
import SideBar from '../../containers/Sidebar'

const Register = () => {
  return (
    <>
      <SideBar showFilters={false} />
      <FormRegister />
    </>
  )
}

export default Register
