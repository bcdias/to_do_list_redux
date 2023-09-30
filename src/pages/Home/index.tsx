import AddButton from '../../components/AddButton'
import SideBar from '../../containers/Sidebar'
import TodoList from '../../containers/TodoList'

const Home = () => (
  <>
    <SideBar showFilters />
    <TodoList />
    <AddButton />
  </>
)

export default Home
