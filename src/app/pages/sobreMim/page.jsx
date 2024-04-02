import Image from 'next/image'
import Link from 'next/link'
import '../../../components/styles/style.scss'



export default function SobreMim(){
    return(
        <>
        <main className='container-sobremim'>
        <h3 className='titulo-sobremim'>Sobre MIm</h3>
        <p>Olá! Sou Nicoly, tenho 19 anos, 
        moro em São Paulo e sou estudante de Análise e Desenvolvimento de Sistemas.</p>
        <p>Desde os meus 8 anos, quando ganhei meu primeiro computador sem internet, 
        minha paixão pela computação foi despertada pela minha curiosidade inquieta.</p>
        <Image></Image>

        <p>Estudante da rede pública de ensino, sempre fui uma aluna comunicativa e determinada. 
            Em 2017, destaquei-me entre meus colegas ao ser selecionada 
            para participar do projeto JAM de Robótica, promovido pelo Núcleo de Tecnologias de 
            Aprendizagem da Secretaria Municipal de Educação (SME) de São Paulo. 
            Esse programa tinha como objetivo iniciar projetos de pequena escala nas escolas, 
            utilizando Arduino e desenvolvendo protótipos.</p>
        <Image></Image>

        <p>Durante três anos, atuei como monitora, auxiliando crianças do ensino
             fundamental I no desenvolvimento da leitura, organização da sala de 
             aula e realização de atividades propostas pelos educadores. 
             Ao final do ano letivo, fui reconhecida com o certificado de 
             primeiro lugar entre os monitores.</p>
        <Image></Image>

        <p>Posteriormente, concluí o curso técnico em Informática,
             o que me impulsionou a fundar minha própria loja online 
             de papelaria personalizada em 2021. Utilizei habilidades
              em softwares como Adobe Fireworks, Pacote Office, Illustrator, 
              Silhouette Studio, Canva e técnicas de impressão em diversos tipos de papel.</p>
        <Image></Image>

        <p>Atualmente, estou em processo de formação superior, 
            beneficiada com uma bolsa de 100% pelo Prouni. 
            Paralelamente, venho aplicando os conhecimentos 
            adquiridos em diversos projetos pessoais, envolvendo desenvolvimento web 
            (HTML, CSS, SASS, REACT, NEXT, JS), Banco de Dados (SQL), UX e UI 
            (Design Thinking, Scrum Master, Design Digital, Figma, Illustrator),
             Programação (Python) e Versionamento de código (GitHub e Git).</p>


        <p>No momento, mke encontro na posição de auxiliar administrativo,
             mas estou em busca ativa de oportunidades para fazer a transição
              de carreira e me inserir no mercado de desenvolvimento de software. 
              Estou aberta a novos desafios e oportunidades de crescimento profissional.</p>
        <h3 className='titulo-sobremim'>Curiosidades</h3>
        <p></p>
        </main>
        </>
    )
}