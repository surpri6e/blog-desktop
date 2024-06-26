import About from '../../components/About/About'
import Avatar from '../../components/Avatar/Avatar'
import Blocks from '../../components/Blocks'
import Name from '../../components/Name/Name'
import './MainPage.scss'
import { database } from '../../main'
import Loader from '../../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { DocumentReference, doc } from 'firebase/firestore'
import { IFirebase } from '../../types/IFirebase'
import deafultAvatar from '../../images/defaultAvatar.png'

const MainPage = (): JSX.Element => {
  const { nickname } = useParams()
  const [value, loading, error] = useDocumentData<IFirebase>(
    doc(database, 'users', nickname ? nickname : ' ') as DocumentReference<IFirebase>
  )

  return (
    <div className="main">
      <div className="_Container">
        <div className="main_body">
          <Header fixedNeeded={true} />
          {loading ? (
            <Loader />
          ) : error ? (
            // Handle error
            <div className="main_padding">
              <div className="other-text">Что-то пошло не так.</div>
            </div>
          ) : value ? (
            <>
              <div className="main_info main_padding">
                <Avatar
                  imageUrl={value.imageUrl ? value.imageUrl : deafultAvatar}
                  socialUrl={value.socialUrl}
                />
                <Name name={value.name} />
                <About about={value.about} />
                <div className="other-text">Просмотрено раз: {value.watchers}</div>
              </div>
              <Blocks blocks={value.blocks} />
            </>
          ) : (
            <div className="main_padding">
              <div className="other-text">Этого пользователя не существует.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainPage
