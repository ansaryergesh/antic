import {whyUs} from "../../defaults/messages/whyUs"

const WhyUs = () => {
  return (
    <div className='whyus'>
      <div className='container'>
        <h2 className='md text-center'>Почему мы?</h2>
        <div className='whyus__lists'>
          {whyUs.map((w, index) => (
            <div
              className={`whyus__list ${w.half
              ? "whyus__list__half"
              : ""}`}>
              <img src={`/img/whyus/${index + 1}.svg`}/>
              <p>{w.text}</p>
            </div>
          ))}

        </div>
        <div className='whyus__protected'>
          <span className='md'>Мы уже защитили</span>
          <div className="whyus__protected__counter"></div>
          <span className='md'>людей</span>
        </div>
      </div>
    </div>
  )
}

export default WhyUs