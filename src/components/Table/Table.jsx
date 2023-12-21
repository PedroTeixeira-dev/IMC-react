import { useEffect } from "react"
import "./Tabela.css"

function Table({prop}) {

    const indice1 = ["MENOR QUE 18,5", "ENTRE 18,5 E 24,9", "ENTRE 25,0 E 29,9", "ENTRE 30,0 E 39,9", "MAIOR QUE 40,0" ]
    const indice2 = ["MAGREZA", "NORMAL", "SOBREPESO",  "OBESIDADE", "OBESIDADE GRAVE"]
    const indice3 = ["0", "0", "I", "II", "III"]

    const indiceGeral = [indice1, indice2, indice3]

    function calculaLinha(prop) {
        if (prop > 40) {
            console.log("linha5");
            return 4;
        } else if (prop >= 30 && prop < 39.9) {
            console.log("linha4");
            return 3;
        } else if (prop >= 25 && prop < 29.9) {
            console.log("linha3");
            return 2;
        } else if (prop >= 18.5 && prop < 24.9) {
            console.log("linha2");
            return 1;
        } else if (prop <= 18.5) {
            console.log("linha1");
            return 0;
        }
    }

    calculaLinha(prop)

    const numeroLinha = calculaLinha(prop)
    console.log(numeroLinha)


    function chamaFormatacao(item) {
        if (numeroLinha == item)
        return "item-selecionado"
        else 
        return "item"
    }

    useEffect(() => {
        chamaFormatacao()
    }, [prop])

    return (
        <>
        <div className="tabela" >
        <table>
            <thead >
                <tr>
                    <td className="table-head" colSpan={3} >Veja a interpretação do IMC</td>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td className="item">IMC</td>
                    <td className="item">Classificação</td>
                    <td className="item">Obesidade (grau)</td>
                </tr>

                {[0, 1, 2, 3, 4].map(item => (
                        <tr  key={item}>
                            <td className={chamaFormatacao(item) }  >{indiceGeral[0][item] }</td>
                            <td className={chamaFormatacao(item) } >{indiceGeral[1][item]}</td>
                            <td className={chamaFormatacao(item) } >{indiceGeral[2][item]}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Table 