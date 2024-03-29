import { Link } from 'react-router-dom'
import './SearchPage.scss'

const SearchPage = (): JSX.Element => {
  return (
    <div className="nothing">
      <div className="_Container">
        <div className="nothing_body">
          <div className="other-text">
            Этой страницы не существует. <Link to={'/a/surpri6e'}>Далее</Link> aasdasdasd as dasd
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
