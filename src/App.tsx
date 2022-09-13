import style from './App.module.css'
import powerImage from './assets/powered.png'
import { useState } from 'react'

const App = () => {
  const  [ heightField , setHeightField ] = useState<number>(0)
  const [ weightField , setWeightField ] = useState<number>(0)


  const eventButtonCalculator = () => {
    if(heightField && weightField) {

    } else {
      alert('Preencha todos os campos')
    }
  }
  
  return ( 
    <div className={style.main}>
      <header>
        <div className={style.headerContainer}>
          <img src={powerImage} alt="" width={150}/>
        </div>          
      </header>

      <section>
        <div className={style.sectionLeft}>
          <h1 className={style.titleApp}>Calcule o seu IMC.</h1>
          <div className={style.information}>O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal</div>
          <input 
              type="number"
              className={style.inputHeight} 
              placeholder="Digite a sua altura"
              value={heightField > 0 ? heightField : ''}
          />
          <input 
            type="number" 
            className={style.inputWeight} 
            placeholder="Digite o seu peso"
            value={weightField > 0 ? weightField : ''}
          />
          <button onClick={eventButtonCalculator}>Calcular</button>
        </div>

        <div className={style.sectionRight}>
            <div className="weightThin">
            <div className="img">img</div>
            <div className="weightTtle">Magreza</div>
            <div className="imcInfo">IMC está entre {} e {}</div>
          </div>
          <div className="weighNormal">
            <div className="img">img</div>
            <div className="weightTitle">Normal</div>
            <div className="imcInfo">IMC está entre {} e {}</div>
          </div>
          <div className="weighOverweight">
            <div className="img">img</div>
            <div className="weightTitle">Sobrepeso</div>
            <div className="imcInfo">IMC está entre {} e {}</div>
          </div>
          <div className="weighObesity">
            <div className="img">img</div>
            <div className="weightTitle">Obesidade</div>
            <div className="imcInfo">IMC está entre {} e {}</div>
          </div>
        </div>
      </section>

      <footer>

      </footer>
    </div>
  )
}


export default App