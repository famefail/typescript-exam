import { Button } from "antd/es/radio"
import '../../App.scss'
import { UseMainController } from "./controller"
const MainPage = () => {
    const {
        shapes,
        clickNextShape,
        clickBackShape,
        clickRandomShape,
        reverse,
        setReverse,
    } = UseMainController()
    return (
        <body className='container'>
            <div className="grid-container">
                <Button className="button" onClick={clickBackShape}>
                    <div className="shape triangle left" />
                </Button>
                <Button className="button top-down" onClick={() => setReverse(!reverse)}>
                    <div className="shape triangle down" />
                    <div className="shape triangle up" />
                </Button>
                <Button className="button" onClick={clickNextShape}>
                    <div className="shape triangle right" />
                </Button>
            </div>

            <div className={`grid-container row2 ${reverse ? 'reverse' : ''}`}>
                {shapes.map((shape, key) => (
                    <Button className="button" key={key} onClick={clickRandomShape} >
                        <div className={`shape ${shape}`} />
                    </Button>
                ))}
            </div>
        </body>
    )
}
export default MainPage