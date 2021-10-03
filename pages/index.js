import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderWords } from "../defaults/messages/sliderWords";
import HowHelp from "../components/Howhelp/Howhelp";
import WhyUs from "../components/WhyUs/WhyUs";
import Auction from "../components/Auction/Auction";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <div>
      <div className='banner'>
        <div className='banner__text text-center'>
          <p className='maintext vBig'>Анти<span>Коллектор</span></p>
          <h2 className='secondarytext'>Мы защитим Вас от Коллекторов, ЧСИ И МФО</h2>
        </div>
        <div className='banner__content'>
          <Slider {...settings}>
            {sliderWords.map((s,index)=>(
              <div className="slider">
                <img src={`/img/slider/${index+1}.svg`} />
                <div className='slider__text'>
                  <p className='text-center'>{s.text}</p>
                  </div>
              </div>
            ))}
          </Slider>

          <div className="banner__buttons text-center">
            <h2 className="bigUpper">У НАС ЕСТЬ РЕШЕНИЕ!</h2>
            <a className='freeBtn'>Бесплатно</a>
            <a className='btn2'>Защити меня</a>
          </div>
        </div>
      </div>
      {/* <HowHelp /> */}
      <WhyUs />
      <Auction />
      {/* <Nav /> */}
        {/* <h2>Hello</h2> */}
    
    </div>
  )
}
