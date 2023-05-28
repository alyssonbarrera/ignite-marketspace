import { ReactNode, createContext, useState } from 'react'

type FilterContextProviderProps = {
  children: ReactNode
}

type FilterDataProps = {
  isNew: boolean | undefined
  acceptTrade: boolean
  paymentMethods: Array<'boleto' | 'pix' | 'cash' | 'card' | 'deposit'>
}

type FilterContextDataProps = {
  filterData: FilterDataProps
  handleFilter: ({
    isNew,
    acceptTrade,
    paymentMethods,
  }: FilterDataProps) => void
  handleModal: (value: boolean) => void
  isModalOpen: boolean
}

export const FilterContext = createContext<FilterContextDataProps>(
  {} as FilterContextDataProps,
)

export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [filterData, setFilterData] = useState<FilterDataProps>({
    isNew: undefined,
    acceptTrade: false,
    paymentMethods: [],
  } as FilterDataProps)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleModal(value: boolean) {
    setIsModalOpen(value)
  }

  function handleFilter({
    isNew,
    acceptTrade,
    paymentMethods,
  }: FilterDataProps) {
    setFilterData({ isNew, acceptTrade, paymentMethods })
  }

  return (
    <FilterContext.Provider
      value={{
        filterData,
        handleFilter,
        handleModal,
        isModalOpen,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
