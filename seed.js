// seed.js
const mongoose = require('mongoose');
require('dotenv').config();

const Objetivo = require('./models/Objetivo');
const Comite = require('./models/Comite');
const Noticia = require('./models/Noticia');
const Contacto = require('./models/Contacto');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('📦 Conectado a MongoDB');
    return seedData();
  })
  .catch(err => console.error('❌ Error al conectar:', err));

async function seedData() {
  try {
    // OBJETIVOS
    await Objetivo.deleteMany();
    await Objetivo.insertMany([
      {
        titulo: "Objetivo Global",
        descripcion: "Impulsar la colaboración entre sectores para un desarrollo sostenible.",
        icono: "fas fa-globe"
      },
      {
        titulo: "Crecimiento Económico",
        descripcion: "Fomentar iniciativas que contribuyan al crecimiento económico local.",
        icono: "fas fa-chart-line"
      },
      {
        titulo: "Alianzas Estratégicas",
        descripcion: "Promover alianzas entre empresas y gobierno para beneficio mutuo.",
        icono: "fas fa-handshake"
      },
      {
        titulo: "Sustentabilidad",
        descripcion: "Incorporar prácticas responsables con el medio ambiente.",
        icono: "fas fa-leaf"
      },
      {
        titulo: "Comunidad",
        descripcion: "Fortalecer el sentido de comunidad y participación social.",
        icono: "fas fa-users"
      }
    ]);

    // COMITÉS
    await Comite.deleteMany();
    await Comite.insertMany([
      {
        nombre: "Sustentabilidad",
        descripcion: "Promueve prácticas responsables en el medio ambiente.",
        imagen: "https://jiffygroup.com/es/wp-content/uploads/2023/06/jiff-jiffygrouplatam-image-914_1a807c5fe21a7f81736c8171bda9dc72_2000.jpeg"
      },
      {
        nombre: "Innovación y Tecnología",
        descripcion: "Impulsa la transformación digital empresarial.",
        imagen: "https://blog.maestriasydiplomados.tec.mx/hs-fs/hubfs/Blog%20notas%20maestrias%20y%20diplomados/Innovaci%C3%B3n%20tecnol%C3%B3gica%202.jpg?width=1250&height=625&name=Innovaci%C3%B3n%20tecnol%C3%B3gica%202.jpg"
      },
      {
        nombre: "Desarrollo Agroalimentario",
        descripcion: "Apoya el crecimiento del sector agroindustrial.",
        imagen: "https://www.gob.mx/cms/uploads/article/main_image/25755/JITOMATE.jpg"
      },
      {
        nombre: "Relaciones Institucionales",
        descripcion: "Fomenta alianzas con organismos públicos y privados.",
        imagen: "https://www.gob.mx/cms/uploads/article/main_image/25755/JITOMATE.jpg"
      },
      {
        nombre: "Eduación y Talento",
        descripcion: "Alianzas con universidades y formación del capital humano",
        imagen: "https://almaconsultores.com.pe/wp-content/uploads/2024/03/alianzas-con-universidades-estrategias-para-atraer-talento-joven-Alma-Consultores-Consultora-de-Recursos-Humanos-en-Peru-scaled.jpg"
      }
    ]);

    // NOTICIAS
    await Noticia.deleteMany();
    await Noticia.insertMany([
      {
        titulo: "URGENTE QUE EL GOBIERNO FEDERAL VOLTEE A VER A AGUASCALIENTES: CEEA",
        contenido: "Empresarios de Aguascalientes exigen obras y presupuesto federal, alertan sobre falta de apoyo y proponen acciones en infraestructura, agua, migración y seguridad. Se reunirán con legisladores para trabajar en soluciones conjuntas.",
        fecha_publicacion: new Date("2025-06-10")
      },
      {
        titulo: "EMPRESARIOS PIDEN AL GOBIERNO FEDERAL DETALLES SOBRE LA REFORMA AL INFONAVIT ",
        contenido: "El CEEA analizó con autoridades la reforma a la Ley del Infonavit, preocupados por sus impactos en trabajadores y patrones. Exigieron viviendas dignas y mayores espacios habitables. La senadora Nora Ruvalcaba explicó que la reforma busca mejorar la calidad, ubicación y acceso a viviendas. Empresarios temen alzas en cuotas y piden claridad. El Infonavit pidió confianza en el nuevo modelo de vivienda social y mayor orientación a los trabajadores.",
        fecha_publicacion: new Date("2025-05-13")
      },
      {
        titulo: "EN ÓMNIBUS DE MÉXICO,GRUPO ESTRELLA BLANCA Y PRIMERA PLUS, SE VIAJA SEGURO ",
        contenido: "Con motivo de la Feria Nacional de San Marcos 2025, Ómnibus de México, Estrella Blanca y Primera Plus lanzaron un operativo especial de transporte con descuentos del 50% para estudiantes y 25% para maestros durante las vacaciones. En conferencia de prensa, exhortaron a comprar boletos solo en canales oficiales para evitar fraudes y reafirmaron su compromiso con un transporte seguro y cómodo. También inauguraron módulos de venta en la explanada J. Pani.",
        fecha_publicacion: new Date("2025-04-18")
      },
      {
        titulo: "EL CEEA ESTÁ ABIERTO A CONOCER A LOS CANDIDATOS A JUECES, MAGISTRADOS Y MINISTROS DE LA CORTE",
        contenido: "El CEEA llamó a la ciudadanía a informarse y participar en la elección de nuevos integrantes del Poder Judicial, advirtiendo sobre los riesgos de elegir a malos juzgadores. Denunció la falta de difusión del proceso y sostuvo un encuentro con Marisela Morales, candidata a ministra de la SCJN, quien presentó su trayectoria e instó a votar el 1 de junio por una justicia transparente e imparcial.",
        fecha_publicacion: new Date("2025-04-16")
      },
      {
        titulo: "VIRIDIANA CRUZ REPRESENTARÁ A MÉXICO EN CAMPEONATO MUNDIAL DE REPOSTERÍA EN BRASIL",
        contenido: "El CEEA celebra la participación de Viridiana Cruz, joven repostera de Aguascalientes, quien representará a México en la Competencia Nacional de Reposteros Junior en São Paulo. Con 24 años, fue seleccionada por su talento y trayectoria. Viridiana es miembro del GIPAN, egresada de la Universidad Panamericana y fundadora de vidolce_reposteria.",
        fecha_publicacion: new Date("2025-04-14")
      },
    ]);

    console.log('✅ Datos insertados con éxito');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error insertando datos:', err);
    process.exit(1);
  }
}
