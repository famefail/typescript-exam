import { useCallback, useState } from "react"

export const UseMainController = () => {
  
    const [shapes, setShapes] = useState(['square', 'circle', 'oval', 'trapezoid', 'rectangle', 'parallelogram'])
    const [reverse, setReverse] = useState(false)
    const clickNextShape = useCallback(() => {
        const updatedShape = []
        for (let i = 0; i < (shapes.length); i++) {
            if (i == 0) {
                updatedShape.push(shapes[5])
            }
            else {
                updatedShape.push(shapes[i - 1])
            }

        }
        setShapes((updatedShape))
    }, [shapes])

    const clickBackShape = useCallback(() => {
        const updatedShape = []
        for (let i = 0; i < (shapes.length); i++) {
            if (i === 5) {
                updatedShape.push(shapes[0])
            }
            else {
                updatedShape.push(shapes[i + 1])
            }
        }
        setShapes((updatedShape))
    }, [shapes])

    const clickRandomShape = useCallback(() => {
        const updatedShape = [...shapes]
        updatedShape.sort(() => Math.random() - 0.5)
        console.log(updatedShape)
        setShapes((updatedShape))
    }, [shapes])
    return {
        shapes,  
        reverse,
        setReverse,
        clickNextShape,
        clickBackShape,
        clickRandomShape
    }
}