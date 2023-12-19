import "./Tabela.css"

function Table() {

    const indice1 = ["MENOR QUE 18,5", "ENTRE 18,5 E 24,9", "ENTRE 25,0 E 29,9", "ENTRE 30,0 E 39,9", "MAIOR QUE 40,0" ]
    const indice2 = ["MAGREZA", "NORMAL", "SOBREPESO",  "OBESIDADE", "OBESIDADE GRAVE"]
    const indice3 = ["0", "0", "I", "II", "III"]

    const indiceGeral = [indice1, indice2, indice3]

    return (
        <div className="container tabela" >
        <table>
            <thead >
                <tr>
                    <td className="table-head" colspan={3} >Veja a interpretação do IMC</td>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td >IMC</td>
                    <td>Classificação</td>
                    <td>Obesidade (grau)</td>
                </tr>
                {[0, 1, 2, 3, 4].map(item => (
                        <tr  key={item}>
                            <td className="linha"  >{indiceGeral[0][item]}</td>
                            <td className="linha" >{indiceGeral[1][item]}</td>
                            <td className="linha" >{indiceGeral[2][item]}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    )
}

export default Table 