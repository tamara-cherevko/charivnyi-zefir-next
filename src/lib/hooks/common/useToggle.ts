import { useCallback, useState } from 'react'

export const useToggle = (initialState: boolean): [boolean, () => void, (newState: boolean) => void] => {
  const [state, setToggleState] = useState(initialState)
  const toggle = useCallback(() => {
    setToggleState((state) => !state)
  }, [])

  return [state, toggle, setToggleState]
}
