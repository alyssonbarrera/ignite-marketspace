import { useContext } from 'react'
import { FilterContext } from '@contexts/FilterContext'

export function useFilter() {
  const context = useContext(FilterContext)

  return context
}
