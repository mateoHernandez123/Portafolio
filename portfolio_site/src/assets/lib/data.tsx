import adobexdicon from "../../assets/icons/adobexdicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import angularicon from "../../assets/icons/angularjs.svg";
import materialicon from "../../assets/icons/materialui.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import postgresqlicon from "../../assets/icons/postgresql.svg";
import nodejsicon from "../../assets/icons/nodejs.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import springbooticon from "../../assets/icons/springboot.svg";
import mysqlicon from "../../assets/icons/mysql.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import javaicon from "../../assets/icons/java.svg";
import appMusic from "../../assets/img/appmusic.jpg";
import refugioAjpa from "../../assets/img/refugioAjpa.jpg";
import abelHernandez from "../../assets/img/AbelHernandezMotosWeb.jpg";
import profilepicture from "../img/me2.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";

export const headerIntroData = {
  title: {
    de: "Hola, soy Mateo",
    en: "Hi, I'm Mateo",
  },
  subtitle: "FrontEnd Developer",
  description: {
    de: "Soy Mateo, desarrollador Front-End con pasión por el diseño y la creación de sistemas de gestión y páginas web. Me gusta transformar ideas en experiencias visuales y funcionales, siempre buscando la mejor manera de estructurar y modelar cada proyecto. Creo que una comunicación fluida y el trabajo en equipo son clave para lograr objetivos claros y exitosos, y disfruto colaborar para alcanzar resultados que realmente impacten.",
    en: "I’m Mateo, a Front-End developer with a passion for designing and creating management systems and websites. I enjoy transforming ideas into visual and functional experiences, always looking for the best way to structure and model each project. I believe that smooth communication and teamwork are key to achieving clear and successful goals, and I enjoy collaborating to deliver results that truly make an impact.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Contactame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Sistema Contable",
    description:
      "Una web para realizar registros contables y abastecimientos que construimos en equipo con React js y Node js. Yo era el desarrollador front-end y programé funciones filtrado de productos, carga de cuentas y asientos, etc. El diseño fue creado por nosotros. El sitio web es dinamico y está optimizado para ser lo más comodo para el usuario final.",
    description_EN:
      "A website for accounting records and supplies that we built as a team using React.js and Node.js. I was the front-end developer and programmed functions for product filtering, account and entry management, etc. The design was created by us. The website is dynamic and optimized to be as user-friendly as possible.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "Material UI", icon: materialicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Node js", icon:nodejsicon},
      {name: "Express", icon: expressicon},
      { name: "Mysql", icon: mysqlicon },
      // { name: "REST Api", icon: apiicon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Canva", icon: canvaicon },
      // { name: "Netlify", icon: netlifyicon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: abelHernandez,
    githuburl: "https://github.com/mateoHernandez123/Abel-Hernandez-motos",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Refugio AJPA",
    description:
      "Una web de refugio de perros construimos en equipo con React, Bootstrap y Java. Mi tarea fue trabajar de FrtontEnd, desarrollando cada pestaña con su diseño para que sea lo más amigable a cualquiera persona que acceda a la web, y por otro lado, un sistema interno para los administradores, donde puedan gestionar los perros.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "React JS", icon: reacticon },
      {name: "Java", icon: javaicon},
      { name: "Mysql", icon: mysqlicon },
      // { name: "JavaScript", icon: javascripticon },
      // { name: "Spotify Api", icon: spotifyicon },
      // { name: "JWT", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "MongoDB", icon: mongodbicon },
      // { name: "Express", icon: expressiconwhite },
      // { name: "Node.js", icon: nodejsicon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
    ],
    image: refugioAjpa,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/MatiasFochiUNNOBA/frontAJPA",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "App Music",
    description:
      "Una aplicación de musica que programamos en equipo con Angular 19, Spring Boot y Mysql. Fui responsable de realizar tareas de diseño, vincular el frontend con el backend y del modelado de la base de datos. La aplicación es responsiva y está optimizada para dispositivos móviles.",
    description_EN:
      "A music application that we programmed as a team using Angular 19, Spring Boot, and MySQL. I was responsible for design tasks, linking the frontend with the backend, and modeling the database. The application is responsive and optimized for mobile devices.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "Angular", icon: angularicon },
      { name:"Tailwind", icon: tailwindcssicon },
      { name: "Mysql", icon: mysqlicon },
      { name: "Spotify Api", icon: spotifyicon },
      { name:"Spring Boot", icon: springbooticon },
      // { name: "JavaScript", icon: javascripticon },
      // { name: "CSS", icon: cssicon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "MongoDB", icon: mongodbicon },
      // { name: "Express", icon: expressiconwhite },
      // { name: "Node.js", icon: nodejsicon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: appMusic,
    deploymenturl: "",
    githuburl: "https://github.com/mateoHernandez123",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Más proyectos en Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      // {
      //   title: "Next.js",
      //   hash: "#Next.js",
      //   icon: [nextjsicon, nextjsiconwhite],
      //   color: ["#000000", "#FFFFFF"],
      // },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Java",
        hash: "#Java",
        icon: javaicon,
        color: "#FFFFFF",
      },
      {
        title: "Angular",
        hash: "#Angular",
        icon: angularicon,
        color: "#F1662A",
      },
      {
        title: "Spring Boot",
        hash: "#SpringBoot",
        icon: springbooticon,
        color: "#339933",
      },
      // {
      //   title: "Vue.js",
      //   hash: "#Vue.js",
      //   icon: vuejsicon,
      //   color: "#4FC08D",
      // },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      // {
      //   title: "SASS/SCSS",
      //   hash: "#SASS/SCSS",
      //   icon: sassscssicon,
      //   color: "#CC6699",
      // },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      // {
      //   title: "Adobe XD",
      //   hash: "#Adobe XD",
      //   icon: adobexdicon,
      //   color: "#FF61F6",
      // },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
       {
        title: "Material UI",
        hash: "#MaterialUI",
        icon: materialicon,
        color: "#0081CB",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "DataBase",
    skills: [
      {
        title: "MySQL",
        hash: "#Mysql",
        icon: mysqlicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "PostgreSQL",
        hash: "#PostgreSQL",
        icon: postgresqlicon,
        color: "#38B2AC",
      },
      // {
      //   title: "WordPress",
      //   hash: "#WordPress",
      //   icon: wordpressicon,
      //   color: "#21759B",
      // },
      // {
      //   title: "Shopify",
      //   hash: "#Shopify",
      //   icon: shopifyicon,
      //   color: "#7AB55C",
      // },
      // {
      //   title: "Webflow",
      //   hash: "#Webflow",
      //   icon: webflowicon,
      //   color: "#4353FF",
      // },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Acerca de mi", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  // { de: "imprimir", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  // { de: "Protección de datos", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:mateo.e.2003hernandez@gmail.com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/mateo-hernandez-/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/mateoHernandez123",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:mateo.e.2003hernandez@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"No es tan importante hacerlo bien la primera vez. Es de vital importancia hacerlo bien la última vez."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Mateo Hernandez",
  },
  {
    de: '"La web es como un lienzo y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Acerca de mi",
  title_EN: "About me",
  description: "Algunos fragmentos de código sobre mí",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Los circuitos de mi corazón",
      description:
        "Cuando no estoy inmerso en el mundo digital, exploro el fascinante universo de la tecnología y el hardware. Los circuitos y las soldaduras son para mí como piezas de un rompecabezas en una emocionante aventura.",
      icon: hardwareicon,
    },
    {
      title: "A toda velocidad por la vida",
      description:
        "Además de programar, me encanta la velocidad, en el sentido más literal. Los autos son mi pasión, y disfruto recorrer caminos desconocidos con máquinas llenas de potencia.",
      icon: caricon,
    },
    {
      title: "La exploración como filosofía de vida",
      description:
        "Mi viaje como desarrollador web es solo una parte de mi camino. Vivo bajo la premisa de que la verdadera aventura comienza cuando dejamos atrás lo conocido. Descubrir nuevos lugares es mi forma de encontrar inspiración creativa.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Contacto",
    en: "Contact",
  },
  description: {
    de: "Escríbeme un mensaje y me pondré en contacto contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Tu nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Por favor, rellene su nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Tu Email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Por favor, rellene su email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Por favor, rellene el asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Por favor, rellene su mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Acepto que Mateo pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para comunicarse conmigo.",
      en: "I agree that Mateo may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Al enviar esta solicitud, usted reconoce que ha leído la Política de privacidad",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 La demostración en vivo se abrirá en breve. Servidores en marcha...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Gracias por su correo electrónico. Me pondré en contacto con usted lo antes posible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Lamentablemente el envío de su correo electrónico no funcionó. Inténtelo nuevamente más tarde.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Por favor, rellene su nombre",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
