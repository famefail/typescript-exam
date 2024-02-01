import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import '../../../i18n'

export const UseNavBarController = () => {

    const { i18n } = useTranslation();
    const [option, setOption] = useState('eng')
    const options = [
        { value: 'eng' },
        { value: 'ไทย' }
    ]
    const changeLanguage = useCallback((evt: string) => {
        setOption(evt)
    }, [])

    useEffect(() => {
        if (option === 'ไทย') {
            i18n.changeLanguage('th')
        }
        else {
            i18n.changeLanguage('en')
        }
    }, [i18n, option])

    return {
        option,
        options,
        changeLanguage
    }
}