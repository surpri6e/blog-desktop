import './Header.scss'
import { database } from '../../main'
import { Link, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { IFirebase } from '../../types/IFirebase'
import { DocumentReference, doc } from 'firebase/firestore'
import FixedMessages from '../FixedMessages/FixedMessages'
import { fixMessages } from '../../utils/fixMessages'
import { FC } from 'react'

interface IHeader {
  fixedNeeded: boolean
}

const Header: FC<IHeader> = ({ fixedNeeded }) => {
  const { nickname } = useParams()
  const [value] = useDocumentData<IFirebase>(
    doc(database, 'users', nickname ? nickname : ' ') as DocumentReference<IFirebase>
  )

  return (
    <div className="header">
      <div className="_Container">
        <div className="header_body">
          <div className="header_left">
            {/* If user has fixed message shows it */}
            {value &&
            value.blocks.filter((elem) => !elem.isPrivate).filter((elem) => elem.isFixed).length >
              0 &&
            fixedNeeded ? (
              <FixedMessages blocks={fixMessages(value.blocks.filter((elem) => !elem.isPrivate))} />
            ) : fixedNeeded ? (
              <div className="other-text">Нет закрепленных сообщений.</div>
            ) : (
              <div className="other-text">Страницы без закрепленных сообщений.</div>
            )}
          </div>

          <div className="header_right">
            <Link to={'/'} className="buttons">
              Найти пользователя
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
