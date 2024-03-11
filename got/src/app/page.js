import styles from "./page.module.css";
import imgMain from '../assets/_106957807_hi052845649.reuters.976-removebg-preview.png'
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <picture>
                    <Image src={imgMain} />
                    <Image src={imgMain} width={400} height={
                        200} />
                </picture>

                <p>
                    "Game of Thrones" é uma série de televisão baseada na série de livros "A Song of Ice and Fire", escrita por George R.R. Martin. A série foi produzida pela HBO e consiste em oito temporadas, transmitidas de 2011 a 2019. Situada no fictício continente de Westeros, a trama envolve várias casas nobres que lutam pelo controle do Trono de Ferro e, consequentemente, pelo domínio dos Sete Reinos.

                    A narrativa é conhecida por sua intrincada teia de traições, alianças, política e intrigas, e conta com uma ampla variedade de personagens, cada um com motivações complexas. Elementos de fantasia, como dragões e criaturas sobrenaturais, são incorporados à história, tornando-a ainda mais envolvente.
                </p>
            </div>

        </main>
    );
}
