import { AutoComplete } from "antd"
import { UseNavBarController } from "./controller"
import '../../App.scss'
import { useTranslation } from "react-i18next"
const Navbar = () => {
    const { option,
        changeLanguage,
        options, } = UseNavBarController()
    const { t } = useTranslation()

    return (
        <div className="header">
            <label>{t('Layout & Style')}</label>
            <AutoComplete
                style={{ width: 200 }}
                value={option}
                options={options}
                onChange={(evt) => changeLanguage(evt)}
            />
        </div>
    )
}
export default Navbar