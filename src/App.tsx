import { CarouselContainer } from 'react-carousel-infinite-scroll-ts'
import { carouselData } from './data/carouselData'
import { useEffect, useState } from 'react'

import axios, { AxiosResponse } from 'axios'
import styles from './App.module.css'

const url = 'http://localhost:9999/api/images'

const App: React.FC = () => {
    const { container, carousel, item, bigContainer, label } = styles

    // set the default caraousel data if the images server is down
    const [images, setImages] = useState(carouselData)

    useEffect(() => {
        axios
            .get(url)
            .then((response: AxiosResponse) => {
                setImages(response.data)
            })
            .catch((error): void => {
                console.log('Error fetching images', error)
            })
    }, [])

    return (
        <div className={container}>
            <div className={label}>Carousel Examples</div>
            <CarouselContainer items={images} carouselClassName={carousel} visibleElementsCount={5} />
            <CarouselContainer items={images} visibleElementsCount={10} />
            <CarouselContainer
                items={images}
                carouselClassName={bigContainer}
                visibleElementsCount={20}
                itemClassName={item}
            />
        </div>
    )
}

export default App
