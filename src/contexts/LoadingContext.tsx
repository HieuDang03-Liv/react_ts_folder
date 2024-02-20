import { useState, createContext, Dispatch, SetStateAction, ReactNode, FC } from 'react'

export const LoadingContext = createContext<{ isLoading: boolean; setIsLoading: Dispatch<SetStateAction<boolean>> }>({
  isLoading: false,
  setIsLoading: () => {},
})

export const LoadingProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  return <LoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingContext.Provider>
}
