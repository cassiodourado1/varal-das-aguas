/* Core */
import React, { Component } from 'react';
import axios from 'axios';

/* Presentation */
import FullBanner from './components/FullBanner';
import EventInfo from './components/EventInfo';
import ScrollableAnchor from 'react-scrollable-anchor';

/* Styles */
import styles from './styles.css';


class Home extends Component {    
    constructor(props) {
        super(props);
    
        this.state = {
          visible: false,  
          name: "", 
          PhotoName: "",
          PhotoPlace: "",
          photoFile: "",
        };
        
        this.toggleModal = this.toggleModal.bind(this);
     }

    toggleModal() {
        this.setState({ visible: !this.state.visible });
    }

    // sendPhoto = event => {
    //     event.preventDefault();

    //     const subscription = {
    //         name: this.state.name,
    //         PhotoName: this.state.PhotoName,
    //         PhotoPlace: this.state.PhotoPlace,
    //         PhotoFile: this.state.photoFile,
    //     };

    //     axios.post(`http://localhost:56616/contest/register`, { subscription })
    //         .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }
 

    render() {
        return (
            <main className={styles.home}>
            {this.state.visible &&
                <div className={styles.modal}>
                    <div className={styles.boxModal}>
                        <div className={styles.headerModal}>
                            <h3>Cadastro</h3>
                            <button className={styles.close} onClick={this.toggleModal}>X</button>
                        </div>
                        <form onSubmit={this.sendPhoto} >                        
                            <div className={styles.boxInputsModal}>
                                <div className={styles.itemInput}>
                                    <input type="text" value={this.state.name} name="nomeColaborador" id="nomeColaborador" className={styles.input} placeholder="Insira seu nome" required />
                                    <label for="nomeColaborador" className={styles.labelInput}>Nome do Colaborador</label>
                                </div>
                                <div className={styles.itemInput}>
                                    <input type="text" name="nomeColaborador" id="nomeColaborador" className={styles.input} placeholder="Insira o nome da foto" required />
                                    <label for="nomeColaborador" className={styles.labelInput}>Nome da Foto</label>
                                </div>
                                <div className={styles.itemInput}>
                                    <input type="text" name="nomeColaborador" id="nomeColaborador" className={styles.input} placeholder="Insira o local da foto" required />
                                    <label for="nomeColaborador" className={styles.labelInput}>Local da Foto</label>
                                </div>
                                <div className={styles.itemInput}>
                                    <input type="text" name="nomeColaborador" id="nomeColaborador" className={styles.input} placeholder="Mes/Dia/Anoo" required />
                                    <label for="nomeColaborador" className={styles.labelInput}>Data de registro</label>
                                </div>
                            </div>
                            <div className={styles.uploadFoto}>
                                <h3 className={styles.titleModal}>Anexar Foto</h3>
                                <input type="file" name="foto"accept="image/png, image/jpeg"  /> 
                            </div>
                            <div className={styles.boxTermsOfUse}>
                                <h3 className={styles.titleModal}>Termos de uso</h3>
                                <div className={styles.termOfUse}>
                                    <p>Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Cevadis im ampola pa arma uma pindureta.</p>
                                    <p>Detraxit consequat et quo num tendi nada. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Leite de capivaris, leite de mula manquis sem cabeça. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                    <p>Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Paisis, filhis, espiritis santis. In elementis mé pra quem é amistosis quis leo.</p>
                                </div>
                                <input type="checkbox" value="0" name="aceptTerms" id="aceptTerms" />
                                <label className={styles.titleModal} for="aceptTerms">Li e concordo com os termos</label>
                            </div>
                            <div className={styles.footerModal}>
                                <button type="submit" className={styles.btEnviar}>Enviar</button>
                            </div>
                        </form>                        
                    </div>
                </div>
            }
                <ScrollableAnchor id="top">
                    <FullBanner />
                </ScrollableAnchor>
                <div className={styles.container}>
                    <ScrollableAnchor id="concourse">
                        <section className={styles.concurso}>
                            <h2 className={styles.titleSection}>o concurso</h2>                        
                            <p className={styles.textSection}>Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água (os desafios e as belezas encontradas em campo) pelos colaboradores. Além de uma apresentação cultural com um artista de rua (poesia, musica, cordel) que aborde a temática água. </p>
                        </section>                    
                    </ScrollableAnchor>
                    
                    <section className={styles.boxInscricao}>
                        <EventInfo />
                        <button className={styles.button} onClick={this.toggleModal}>Faça sua inscrição</button>                
                    </section>

                    <ScrollableAnchor id="about">
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
                    </ScrollableAnchor>

                    <ScrollableAnchor id="rules">
                    <section className={styles.regras}>
                        <h2 className={styles.titleSection}>regras</h2>                        
                        <p className={styles.textSection}>
                            Todas as fotos que retrate da temática água (tais como situação de secas ou excedentes hídricos, as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.
                        </p>

                        <ul className={styles.textSection}>
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
                          
                        <p className={styles.textSection}>   
                            A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro).                   
                        </p>

                    </section>
                    </ScrollableAnchor>
                </div>
            </main>
        )
    }
}

export default Home