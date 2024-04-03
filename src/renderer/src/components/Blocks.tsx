import { FC } from 'react'
import { IBlock } from '../types/IFirebase'
import Block from './Block/Block'
import '../styles/libs/Blocks.scss'

interface IBlocks {
  blocks: IBlock[]
}

const Blocks: FC<IBlocks> = ({ blocks }) => {
  return (
    <div className="blocks">
      {blocks.length != 0 ? (
        blocks.map((elem, ind) => (
          <Block
            title={elem.title}
            message={elem.message}
            date={elem.date}
            isFixed={elem.isFixed}
            isPrivate={elem.isPrivate}
            image={elem.image}
            key={ind}
            ind={ind}
          />
        ))
      ) : (
        <div className="other-text other-text--center">Постов тут нет</div>
      )}
    </div>
  )
}

export default Blocks
