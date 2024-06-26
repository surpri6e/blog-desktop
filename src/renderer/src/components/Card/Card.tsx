import { IAbout, IName } from '@renderer/types/IFirebase'
import { FC } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

interface ICard extends IName, IAbout {
  imageUrl: string
  uid: string
}

export const Card: FC<ICard> = ({ about, imageUrl, name, uid }) => {
  return (
    <Link to={`/a/${uid}`} className="card">
      <div className="card_avatar">
        <img src={imageUrl} alt="avatar" />
      </div>
      <div className="card_info">
        <div className="card_name">{name}</div>
        <div className="card_about">{about}</div>
      </div>
    </Link>
  )
}
