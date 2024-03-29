import './Header.scss'
import { database } from '../../main'
import { Link, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { IFirebase } from '../../types/IFirebase'
import { DocumentReference, doc } from 'firebase/firestore'
import FixedMessages from '../FixedMessages/FixedMessages'
import { fixMessages } from '../../utils/fixMessages'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { FC } from 'react'

interface IHeader {
  fixedNeeded: boolean
}

const Header: FC<IHeader> = ({ fixedNeeded }) => {
  const { nickname } = useParams()
  const [value, loading, error] = useDocumentData<IFirebase>(
    doc(database, 'users', nickname ? nickname : ' ') as DocumentReference<IFirebase>
  )

  return (
    <div className="header">
      <div className="_Container">
        <div className="header_body">
          {/* Handle error */}
          {error ? (
            <></>
          ) : (
            <>
              <div className="header_left">
                {/* If user has fixed message shows it */}
                {loading ? (
                  <></>
                ) : value &&
                  value.blocks.filter((elem) => elem.isFixed).length > 0 &&
                  fixedNeeded ? (
                  <FixedMessages blocks={fixMessages(value.blocks)} />
                ) : fixedNeeded ? (
                  <div className="other-text">Нет закрепленных сообщений.</div>
                ) : (
                  <div className="other-text">Страницы без закрепленных сообщений.</div>
                )}
              </div>

              <div className="header_right">
                <BurgerMenu />

                <Link to={'/'} className="buttons">
                  Найти пользователя
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
