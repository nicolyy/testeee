import Image from 'next/image'
import Link from 'next/link'
import '../../../components/styles/style.scss'


import Image1 from '../../../../public/Sobre-mim/image1.jpg'
import Image2 from '../../../../public/Sobre-mim/image2.jpg'
import Image3 from '../../../../public/Sobre-mim/image3.jpg'


export default function SobreMim(){
    return(
        <>
        <main className='container-sobremim'>

        <section className='section-sobre-mim'>
        <h3 className='titulo-sobremim'>Sobre Mim</h3>
            <div className='box-sobre-mim-1'>
            <div>
                <p>Olá! Sou Nicoly, tenho 19 anos, 
                moro em São Paulo e sou estudante de Análise e Desenvolvimento de Sistemas.</p>
                <p>Desde os meus 8 anos, quando ganhei meu primeiro computador sem internet, 
                minha paixão pela computação foi despertada pela minha curiosidade inquieta.</p>
                <p>Estudante da rede pública de ensino, sempre fui uma aluna comunicativa e determinada. 
                Em 2017, destaquei-me entre meus colegas ao ser selecionada 
                para participar do projeto JAM de Robótica, promovido pelo Núcleo de Tecnologias de 
                Aprendizagem da Secretaria Municipal de Educação (SME) de São Paulo. 
                Esse programa tinha como objetivo iniciar projetos de pequena escala nas escolas, 
                utilizando Arduino e desenvolvendo protótipos.</p>
                
            </div>
            <Image className='box-sobre-mim-1-image' src={Image1} width={400} height={400}></Image>
            </div>


            <div className='box-sobre-mim-2'>
            <p>Durante três anos, atuei como monitora, auxiliando crianças do ensino
                fundamental I no desenvolvimento da leitura, organização da sala de 
                aula e realização de atividades propostas pelos educadores. 
                Ao final do ano letivo, fui reconhecida com o certificado de 
                primeiro lugar entre os monitores.</p>

            <p>Desenvolviamos peças teatrais com outros alunos e fantoches, compartilhavamos 
            contos folcloricos e ensinavamos sobre outras culturas para as crianças. 
            Esse projeto me despertou ainda mais a minha conexão com os livros. Com ele, 
            tive a oportunidade de conhecer pela primeira vez a BIENAL de SP. 
            </p>

            <p> Dar aulas é uma experiência enriquecedora que oferece várias qualidades e benefícios;</p>
          

            <ul>
                <li>Aprendizado Continuo
                    <p>Ao ensinar, você é constantemente desafiado a aprofundar seu próprio conhecimento 
                    sobre o assunto que está ensinando. Isso pode levar a uma compreensão mais profunda e holística do tópico.</p>
                </li>

                <li>Habilidade de comunicação 
                    <p>Dar aulas ajuda a desenvolver habilidades de comunicação eficazes.
                         Você aprende a explicar conceitos complexos de forma clara e acessível, 
                         adaptando sua linguagem para diferentes públicos e contextos.</p>
                </li>

                <li>Empatia e Compreensão
                    <p>Interagir com alunos de diversas origens e níveis de habilidade desenvolve a capacidade de 
                     empatia e compreensão. Você aprende a reconhecer as necessidades individuais 
                    dos alunos e a adaptar seu ensino para atendê-las.</p>
                </li>

                <li>Paciência e resiliência
                    <p> Lidar com desafios na sala de aula, como alunos com dificuldades de aprendizado
                         ou comportamentais, requer paciência e resiliência. Ao enfrentar esses desafios,
                          você desenvolve essas qualidades importantes.</p>
                </li>

                <li>Criatividade
                    <p>Encontrar maneiras inovadoras e envolventes de ensinar um tópico pode estimular a criatividade.
                    Você pode experimentar diferentes métodos de ensino, atividades e recursos para manter os alunos engajados e motivados.</p>
                </li>
            
            </ul>
     
            </div>
            <div className='box-sobre-mim-3'>
            <p>Posteriormente, concluí o curso técnico em Informática,
                o que me impulsionou a fundar minha própria loja online 
                de papelaria personalizada em 2021. Utilizei habilidades
                em softwares como Adobe Fireworks, Pacote Office, Illustrator, 
                Silhouette Studio, Canva e técnicas de impressão em diversos tipos de papel.</p>
                <span className='produtos'>
                    <div className='produtos-item'></div>
                    <div className='produtos-item'></div>
                    <div className='produtos-item'></div>
                    <div className='produtos-item'></div>
                    <div className='produtos-item'></div>
                    <div className='produtos-item'></div>
                    
                </span>
            </div>
            <div className='box-sobre-mim-3'>
            <p>Atualmente, estou em processo de formação superior, 
                beneficiada com uma bolsa de 100% pelo Prouni. 
                Paralelamente, venho aplicando os conhecimentos 
                adquiridos em diversos projetos pessoais, envolvendo desenvolvimento web 
                (HTML, CSS, SASS, REACT, NEXT, JS), Banco de Dados (SQL), UX e UI 
                (Design Thinking, Scrum Master, Design Digital, Figma, Illustrator),
                Programação (Python) e Versionamento de código (GitHub e Git).</p>
            </div>
            <div className='box-sobre-mim'>
            <p>No momento, mke encontro na posição de auxiliar administrativo,
                mas estou em busca ativa de oportunidades para fazer a transição
                de carreira e me inserir no mercado de desenvolvimento de software. 
                Estou aberta a novos desafios e oportunidades de crescimento profissional.</p>
            </div>
        </section>



        <section>
        <h3 className='titulo-sobremim'>Curiosidades</h3>
        
        <div className='box-sobre-mim'>
            <p>Faltou a parte artistica né? Em 2012 participei de uma instituição social.
            Durante esse periodo realizei 3 espetaculos, e dois cursos, teatro (Por 1 ano) 
            e Dança(Por 5 anos). Esse período foi fundamental para a minha formação humana, 
            gerando oportunidades para visitar centros culturais, lugares de lazer e conhecer a cidaded de São Paulo.
            </p>
        </div>


        <div className='box-sobre-mim'>
            <p>
            Adoro esportes, infelizmente com a rotina de universitária não realizo com tanta 
            frequência. Em 2022 participei da atlética na minha escola, fiquei responsavel pela 
            organização, inscrição, produção de uniformes e participar das equipes de Vôlei e Cheerleader. 
            </p>
            <Image src={Image3} width={500} height={600}></Image>
        </div>

        <div className='box-sobre-mim'>
            <p>
            Nesse mesmo ano, fui campeã na modalidade stunt - estudantil - level 2 junto com a minha equipe,
            no campeonato nacional de Cheerleader, o Cheerfest. 
            O Evento aconteceu no ginásio, reuniu tantas equipes, incluindo universidades e escolas de outros estados. 
            Foi uma sensação inexplicavel, uma ansiedade do bem que faz a gente pular de alegria, treinar por 6 meses e ser campeã
            não é uma tarefa facil, mas momentos assim me mostram o quanto eu sou capaz de conquistar o que desejo,
            </p>
            <Image src={Image3} width={500} height={600}></Image>
        </div>
        </section>
        </main>
        </>
    )
}