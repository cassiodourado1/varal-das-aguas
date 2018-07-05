/* Core */
import React, { Component } from 'react';

/* Presentation */
import FullBanner from './components/FullBanner';
import EventInfo from './components/EventInfo';
/* Styles */
import styles from './styles.css';


class Home extends Component {    
    render() {
        return (
            <main className={styles.home}>
                <FullBanner />
                <div className={styles.container}>
                    <section className={styles.concurso}>
                        <h2 className={styles.titleSection}>o concurso</h2>                        
                        <p className={styles.textSection}>Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água (os desafios e as belezas encontradas em campo) pelos colaboradores. Além de uma apresentação cultural com um artista de rua (poesia, musica, cordel) que aborde a temática água. </p>
                    </section>
                    <section className={styles.boxInscricao}>
                        <EventInfo />
                        <button className={styles.button}>Faça sua inscrição</button>
                    </section>
                    <section className={styles.sobre}>
                        <h2 className={styles.titleSection}>sobre</h2>                        
                        <p className={styles.textSection}>
                            Objetivos<br/>                        
                            Promover a seleção de 100 fotografias produzidas por colaboradores do Inema em comemoração ao dia da água, que será elaborado um mural de fotos denominado de “Varal das Águas”.
                        </p>
                        <p className={styles.textSection}>
                            Dos participante
                            <br/>
                            Poderão participar do Concurso Fotográfico 2017: Todos os colaboradores do Instituto do Meio Ambiente e Recursos Hídricos - INEMA e Secretaria do Meio Ambiente -SEMA.
                        </p>
                        <p className={styles.textSection}>
                            Das especificações das fotografias participantes
                            <br/>
                            As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA, devendo ser obrigatoriamente a foto ser tirada em inspeção em campo a serviço do Inema.
                        </p>
                        <p className={styles.textSection}>
                            Premiação final do concurso
                            <br/>
                            As 05 (cinco) primeiras fotografia que for mais votada nas redes sociais (Facebook e Instagram) do Inema, receberá como prêmio.
                        </p>
                    </section>
                    <section className={styles.regras}>
                        <h2 className={styles.titleSection}>regras</h2>                        
                        <p className={styles.textSection}>
                            Todas as fotos que retrate da temática água (tais como situação de secas ou excedentes hídricos, as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.<br/>
                            <ul>
                                <li>As fotos devem ser originais e sem alterações.</li>
                                <li>As fotos devem expor os ambientes visitados em inspeções técnicas realizadas durante inspeções pelo INEMA.</li>
                                <li>Fotografias que incluam pessoas serão desclassificadas.</li>
                                <li>As fotos devem ser enviadas com um formulário de inscrição preenchido.</li>
                                <li>As fotografias do concurso se tornarão publicas.</li>
                                <li>O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.</li>
                                <li>Cada pessoa só poderá cadastrar uma única foto.</li>
                                <li> A votação será por meio das redes sociais do INEMA.</li>
                                <li>As vagas serão limitadas apenas 50.</li>
                            </ul>
                        </p>  
                        <p className={styles.textSection}>   
                            A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro).                   
                        </p>

                    </section>
                </div>
            </main>
        )
    }
}

export default Home