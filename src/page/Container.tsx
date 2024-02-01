import Exam1 from '../page/exam1/Container.tsx'
import Exam2 from './exam2/Container.tsx'
import '../App.scss'
import Navbar from '../page/navbar/Container.tsx'
import '../../i18n'
import { Provider } from 'react-redux'
import store from '../storage/store.ts'

const MainPage = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <Exam1/>
            <Exam2 />
        </Provider>
    )
}

export default MainPage