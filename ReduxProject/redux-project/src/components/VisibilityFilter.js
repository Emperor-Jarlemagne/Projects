
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
      All <input type="radio" name="filter" onChange={() => dispatch(filterChange('ALL'))} />
      Important <input type="radio"name="filter" onChange={() => dispatch(filterChange('IMPORTANT'))} />
      Nonimportant <input type="radio" name="filter"nonChange={() => dispatch(filterChange('NONIMPORTANT'))} />
    </div>
  )
}

export default VisibilityFilter