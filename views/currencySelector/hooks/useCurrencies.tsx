import { useState } from 'react'
import { useEffect } from 'react'
import { DataCurrencySelectorType } from '../models/currencySelector.model'
import { currencySelectorAdapter } from '../adapters/CurrencySelector.adapter'
import { useGetCurrenciesApiQuery } from '@/redux/api/currenciesApi'

const useCurrency = (): {
    currencySelectorData: DataCurrencySelectorType[]
    isLoadingCurrencySelector: boolean
    isErrorCurrencySelector: boolean
    refetchCurrencySelector: () => void
} => {
    // STATE
    const [currencySelectorData, setCurrencySelectorData] = useState<any>(null)

    // TRAER LOS TIPOS DE CURRENCY
    const {
        isError: isErrorCurrencySelector,
        isLoading: isLoadingCurrencySelector,
        data,
        refetch: refetchCurrencySelector,
    } = useGetCurrenciesApiQuery()

    useEffect(() => {
        if (data !== undefined) {
            setCurrencySelectorData(currencySelectorAdapter(data!))
        }
    }, [data])

    return {
        currencySelectorData,
        isLoadingCurrencySelector,
        isErrorCurrencySelector,
        refetchCurrencySelector,
    }
}

export default useCurrency
