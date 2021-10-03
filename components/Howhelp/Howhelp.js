import { howHelp } from "../../defaults/messages/howHelp";

const HowHelp = () => {
  return (
    <div className='howHelp'>
      <div className='howHelp__top text-center'>
        <h2 className='block_headertext'>Как мы защищаем от Коллекторов, ЧСИ, МФО?</h2>
        <a className='freeBtn text-center'>Бесплатно</a>
      </div>
      <div className="container howHelp__lists">
        {howHelp.map((w,index)=> (
        <div className={`howHelp__list ${parseInt(index)%2 != 0 ? "howHelp__list__right" : ""}`}>
          {/* <img src="/img/lines/lineRight.svg" /> */}
          <div className='howHelp__list__line'>
            <div className='howHelp__list__circle'>{index+1}</div>
            {index+1 ===2 ? <img src="/img/lines/lineCurved.svg"/> : <img src="/img/lines/lineRight.svg"/>}
          </div>
          
          <p>{w.text}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default HowHelp;