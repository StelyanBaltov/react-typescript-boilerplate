import styles from './App.module.css'
import { CarouselContainer } from 'react-carousel-infinite-scroll-ts'
import { carouselData } from './data/carouselData'

const App: React.FC = () => {
    const { container, carousel, item, bigContainer, label } = styles

    return (
        <div className={container}>
            <div className={label}>Carousel Examples</div>
            <CarouselContainer items={carouselData} carouselClassName={carousel} visibleElementsCount={5} />
            <CarouselContainer items={carouselData} visibleElementsCount={10} />
            <CarouselContainer
                items={carouselData}
                carouselClassName={bigContainer}
                visibleElementsCount={20}
                itemClassName={item}
            />
        </div>
    )
}

export default App
