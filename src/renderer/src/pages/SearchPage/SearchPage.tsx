import './SearchPage.scss'
import Header from '@renderer/components/Header/Header'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { DocumentData, Query, collection, endAt, orderBy, query, startAt } from 'firebase/firestore'
import { database } from '@renderer/main'
import { IFirebase } from '@renderer/types/IFirebase'
import Loader from '@renderer/components/Loader/Loader'
import { Card } from '@renderer/components/Card/Card'
import { useState } from 'react'
import SearchInput from '@renderer/components/SearchInput'
import { useDebounce } from 'use-debounce'

const SearchPage = (): JSX.Element => {
  const [userName, setUserName] = useState('')
  const [userNameDebounced] = useDebounce(userName, 300)

  const [values, loading, error] = useCollectionData<IFirebase>(
    query(
      collection(database, 'users') as Query<IFirebase, DocumentData>,
      // Sorting by name
      orderBy('name'),

      // Borders for searching
      startAt(userNameDebounced),
      endAt(`${userNameDebounced}\uf8ff`)
    )
  )

  return (
    <div className="search">
      <div className="_Container">
        <div className="search_body">
          <Header fixedNeeded={false} />
          <div className="search_padding">
            {/* In a separate component so that there is no rerendering */}
            <SearchInput userName={userName} setUserName={setUserName} />
          </div>
          {loading ? (
            <div className="search_padding">
              <Loader />
            </div>
          ) : error || !values ? (
            <div className="other-text other-text--center search_margin">Что-то пошло не так.</div>
          ) : (
            <div className="search_users">
              {values.length != 0 ? (
                values.map((elem) => (
                  <Card
                    about={`${elem.about.length > 101 ? `${elem.about.slice(0, 101)}...` : elem.about}`}
                    imageUrl={elem.imageUrl}
                    name={`${elem.name.length > 21 ? `${elem.name.slice(0, 21)}...` : elem.name}`}
                    key={elem.imageUrl}
                    uid={elem.uid}
                  />
                ))
              ) : (
                <div className="other-text other-text--center search_margin">
                  Пользователей не найдено.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
