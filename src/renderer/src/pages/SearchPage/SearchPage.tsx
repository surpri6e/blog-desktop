import './SearchPage.scss'

import Header from '@renderer/components/Header/Header'

const SearchPage = (): JSX.Element => {
  // const [value, loading, error] = useDocumentData<IFirebase>(
  //   doc(database, 'users', nickname ? nickname : ' ') as DocumentReference<IFirebase>
  // )
  return (
    <div className="search">
      <div className="_Container">
        <div className="search_body">
          <Header fixedNeeded={false} />
          <div className="search_padding">
            <input type="text" className="inputs" placeholder="Найти пользователя" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
