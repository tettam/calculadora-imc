import style from './App.module.css'
import powerImage from './assets/powered.png'
import { useState } from 'react'
import { levels , calculateImc, Level} from './helpers/imc'
import { GridItem } from './components/GridItem'

const App = () => {
  const  [heightField , setHeightField] = useState<number>(0)
  const [weightField , setWeightField] = useState<number>(0)
  const [toShow , setToShow] = useState<Level | null>(null)


  const eventButtonCalculator = () => {
    if(heightField && weightField) {/* Abrir grid relacionado ao IMC */
      setToShow(calculateImc(heightField, weightField))
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
              placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
              value={heightField > 0 ? heightField : ''}
              onChange = {e => setHeightField(parseFloat(e.target.value))}
          />
          <input 
            type="number" 
            className={style.inputWeight} 
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange = {e => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={eventButtonCalculator}>Calcular</button>
        </div>

        <div className={style.sectionRight}>
          {!toShow && /* Condição para abrir o GRID IMC */
            <div className={style.grid}>
              {levels.map((item,key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow && 
            <div className={style.rightBig}>
              <div className={style.rightArrow}></div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </section>

      <footer>

      </footer>
    </div>
  )
}


export default App