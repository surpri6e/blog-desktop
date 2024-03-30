import { FC } from 'react'

interface ISearchInput {
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
}

const SearchInput: FC<ISearchInput> = ({ userName, setUserName }) => {
  return (
    <input
      type="text"
      className="inputs"
      placeholder="Найти пользователя"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
  )
}

export default SearchInput
