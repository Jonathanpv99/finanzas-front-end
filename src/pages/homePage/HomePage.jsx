import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tarjeta from '../../assets/tarjeta.png';
import oficina from '../../assets/oficina.png';
import banco from '../../assets/banco.png';
import dinero from '../../assets/dinero.png';

const HomePage = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className=" mt-5 flex justify-around items-center">
            <div>
                <h1 className='m-8 text-justify text-lg'>
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                </h1>
            </div>
            <div className='max-w-xl text-center'>
                <Slider {...settings} >
                <div>
                    <h1>Tarjetas credito ó debito</h1>
                    <img src={ oficina } alt="tarjeta" />
                </div>
                <div>
                    <h1>Tramites</h1>
                    <img src={ dinero } alt="oficina" />
                </div>
                <div>
                    <h1> evita las filas</h1>
                    <img src={ banco } alt="banco" />
                </div>
                <div>
                    <h1> invierte </h1>
                    <img src={ tarjeta } alt="grafica1" />
                </div>
                </Slider>
            </div>
        
        </div>
    )
}

export default HomePage;