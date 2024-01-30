import { NextResponse } from 'next/server'

const curriculo = {
  firstName: "Darlley",
  lastName: "Brito",
  title: "Web Developer, UI Designer, SEO and AWS Cloud Pratictioner",
  profileImage: "https://darlley.dev/profile.png",
  education: [
    {
      period: "2018 - 2022 (Não concluido)",
      institution: "Universidade Católica Dom Bosco (UCDB)",
      details:
        "Fiz o curso Tecnologia em Análise e Desenvolvimento de Sistemas entre 2018 e deixei de cursar em 2022 para priorizar outras coisas (conhecimentos mais urgentes e trabalho).",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "NPM",
    "GIT",
    "GITHUB",
    "SASS",
    "TAILWIND",
    "BOOTSTRAP",
    "VITE",
    "JAVASCRIPT",
    "REACT",
    "NEXT.JS",
    "PHP",
    "WORDPRESS",
    "AWS",
    "LARAVEL",
    "MYSQL",
  ],
  experience: [
    {
      period: "2019 - 2020",
      company: "Rino3 Marketing Digital",
      role: "Desenvolvedor Back end PHP",
      description: `Fiz estágio como Desenvolvedor Back end PHP. Convertia códigos estáticos (HTML, CSS, JavaScript) em dinâmico com PHP usando WordPress como CMS. Também fazia a manutenção a correção de bugs e o deploy de sites institucionais para advogados.`,
    },
    {
      period: "2021 - atualmente",
      company: "Webmaia (LeadsZapp & Growp)",
      role: "Desenvolvedor Web Fullstack Júnior",
      description: "Trabalho como Desenvolvedor Web Fullstack Júnior. Ja fiz o UI Design dos sites novos e ferramentas que serão implementados e landing pages para lançamentos e anuncios digitais, desenvolvi a base de conhecimentos para as ferramentas, e recursos novos.",
    },
  ],
  languages: ["PORTUGUÊS", "INGLES"],
  contact: {
    email: "darlleybrito@gmail.com",
    location: "Campo Grande, Mato Grosso do Sul (Brasil)",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/darlleybrito/",
    github: "https://github.com/Darlley",
    figma: "https://www.figma.com/@darlleybrito",
    tiktok: "https://www.tiktok.com/@darlleybbf",
    instagram: "https://www.instagram.com/darlleybbf/",
    facebook: "https://www.facebook.com/darlley.brasil/",
    twitter: "https://twitter.com/darlley_brito",
    medium: "https://medium.com/@darlleybrito",
    youtube: "https://www.youtube.com/channel/UCMpj6ZAZ7ja-E2-96gX1o6w",
    skoob: "https://www.skoob.com.br/usuario/614483-darlley-brito",
    blogspot: "https://devaneioscosmico.blogspot.com/",
  },
  profileText: "Cursei somente até o 5° semestre (2022) em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB). Pretendo concluir (2024) o curso a distância e tenho interesse pelas areas de UI Design, Cloud Computing e Machine Learning. Tenho 2 anos de experiência em Desenvolvimento Web atuando em duas empresas no ramo de Marketing Digital. Além do computador, alguns dos meus hobbies incluem: skate, musculação, estética automotiva, filosofia e cerveja artesanal.",
  download: "https://darlley.dev/curriculo.pdf"
};

export async function GET(request, response) {
  return NextResponse.json(curriculo);
}
