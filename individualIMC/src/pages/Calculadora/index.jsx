import { useEffect, useState } from 'react'
import './CalculadoraImc.module.css'

export default function CalculadoraImc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [pesoIdeal, setPesoIdeal] = useState('');

  useEffect(() => {
    if (imc < 18.5) {
      setPesoIdeal("Abaixo do peso");
    } else if (18.5 <= imc && imc < 25) {
      setPesoIdeal("Peso ideal");
    } else if (25 <= imc && imc < 30) {
      setPesoIdeal("Sobrepeso");
    } else if (30 <= imc && imc < 35) {
      setPesoIdeal("Obesidade I");
    } else if (35 <= imc && imc < 40) {
      setPesoIdeal("Obesidade II");
    } else if (40 < imc) {
      setPesoIdeal("Obesidade extrema");
    }
  }, [imc])

  return (
    <section>
      <div>
        <label>Peso: </label>
        <input
          type="number"
          placeholder="Digite seu peso"
          name="peso"
          onChange={(e) => setPeso(e.target.value)}
        />

        <p />
        <label>Altura: </label>
        <input
          type="number"
          placeholder="Digite sua altura"
          name="altura"
          onChange={(e) => setAltura(e.target.value)}
        />

        <p />
        <button onClick={() => setImc(peso / (altura * altura))}>Calcular</button>

        <p>I.M.C.: {imc.toFixed(2)}</p>
        <p>{pesoIdeal}</p>
      </div>
    </section>
  )
}