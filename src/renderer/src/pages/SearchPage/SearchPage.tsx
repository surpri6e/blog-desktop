import './SearchPage.scss'
import Header from '@renderer/components/Header/Header'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { DocumentData, Query, collection, endAt, orderBy, query, startAt } from 'firebase/firestore'
import { database } from '@renderer/main'
import { IFirebase } from '@renderer/types/IFirebase'
import Loader from '@renderer/components/Loader/Loader'
import { Card } from '@renderer/components/Card/Card'
import { useState } from 'react'

const SearchPage = (): JSX.Element => {
  const [userName, setUserName] = useState('')
  // const [userNameDebounced] = useDebounce(userName, 150)

  const [values, loading, error] = useCollectionData<IFirebase>(
    query(
      collection(database, 'users') as Query<IFirebase, DocumentData>,

      // Repair this because it do each rerender
      orderBy('name'),
      startAt(userName),
      endAt(`${userName}\uf8ff`)
    )
  )

  console.log(values, userName)

  return (
    <div className="search">
      <div className="_Container">
        <div className="search_body">
          <Header fixedNeeded={false} />
          <div className="search_padding">
            <input
              type="text"
              className="inputs"
              placeholder="Найти пользователя"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          {loading ? (
            <Loader />
          ) : error || !values ? (
            <div className="other-text">Что-то пошло не так.</div>
          ) : (
            <div className="search_users">
              {values.length != 0 ? (
                values.map((elem) => (
                  <Card
                    about={`${elem.about.length > 101 ? `${elem.about.slice(0, 101)}...` : elem.about}`}
                    imageUrl={elem.imageUrl}
                    name={`${elem.name.length > 21 ? `${elem.name.slice(0, 21)}...` : elem.name}`}
                    key={elem.imageUrl}
                  />
                ))
              ) : (
                <div className="other-text">Пользователей не найдено.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
