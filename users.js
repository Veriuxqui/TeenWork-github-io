const users = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@uni.edu",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["Jardinería", "Mascotas", "Reparación de PCs"],
    rating: 4.8,
    bio: "Estudiante de ingeniería con habilidades manuales. Me encanta trabajar al aire libre y ayudar con mascotas.",
    jobsCompleted: 42,
    earnings: 1250
  },
  {
    id: 2,
    name: "María Gómez",
    email: "maria@uni.edu",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["Tutorías", "Limpieza", "Asesoría Financiera"],
    rating: 4.6,
    bio: "Estudiante de economía avanzada. Puedo ayudarte con tus cuentas o con tu desorden, ¡lo que necesites!",
    jobsCompleted: 35,
    earnings: 980
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    email: "carlos@uni.edu",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    skills: ["Mudanzas", "Reparaciones", "Diseño Gráfico"],
    rating: 4.9,
    bio: "Fuerte y creativo. Puedo cargar tus muebles o diseñar tus invitaciones, todo en un mismo día.",
    jobsCompleted: 28,
    earnings: 1100
  },
  {
    id: 4,
    name: "Ana López",
    email: "ana@uni.edu",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: ["Edición de Video", "Redacción", "Traducción"],
    rating: 4.7,
    bio: "Bilingüe y creativa. Si necesitas contenido de calidad, soy tu mejor opción.",
    jobsCompleted: 31,
    earnings: 1450
  },
  {
    id: 5,
    name: "Pedro Sánchez",
    email: "pedro@uni.edu",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    skills: ["Desarrollo Web", "Marketing Digital", "Fotografía"],
    rating: 4.8,
    bio: "Apasionado por la tecnología y el arte visual. Puedo crear tu sitio web y tomar fotos profesionales.",
    jobsCompleted: 39,
    earnings: 2100
  },
  {
    id: 6,
    name: "Lucía Fernández",
    email: "lucia@uni.edu",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    skills: ["Cuidado de niños", "Clases de baile", "Decoración"],
    rating: 4.9,
    bio: "Creativa y energética. Puedo entretener a tus hijos o hacer que tu fiesta luzca increíble.",
    jobsCompleted: 26,
    earnings: 870
  },
  {
    id: 7,
    name: "Diego Martínez",
    email: "diego@uni.edu",
    photo: "https://randomuser.me/api/portraits/men/88.jpg",
    skills: ["Entrenamiento personal", "Nutrición", "Yoga"],
    rating: 4.7,
    bio: "Estudiante de educación física. Te ayudo a alcanzar tus metas de salud y bienestar.",
    jobsCompleted: 33,
    earnings: 1300
  }
];

const jobs = [
  {
    id: 1,
    title: "Cortar el césped",
    description: "Césped mediano, herramientas proporcionadas",
    price: 25,
    category: "Jardinería",
    postedBy: 1,
  },
  {
    id: 2,
    title: "Pasear al perro",
    description: "Golden retriever, 2 paseos diarios",
    price: 15,
    category: "Mascotas",
    postedBy: 1,
  },
  {
    id: 3,
    title: "Clases de matemáticas",
    description: "Álgebra universitaria, 2 horas",
    price: 30,
    category: "Tutorías",
    postedBy: 2,
  },
  {
    id: 4,
    title: "Asesoría financiera básica",
    description: "Ayuda con presupuestos y ahorro para estudiantes",
    price: 35,
    category: "Finanzas",
    postedBy: 2,
  },
  {
    id: 5,
    title: "Reparación de computadoras",
    description: "Diagnóstico y solución de problemas de hardware/software",
    price: 40,
    category: "Tecnología",
    postedBy: 1,
  },
  {
    id: 6,
    title: "Edición de video corto",
    description: "Edición de videos para redes sociales o proyectos",
    price: 45,
    category: "Multimedia",
    postedBy: 4,
  },
  {
    id: 7,
    title: "Diseño de logo",
    description: "Creación de identidad visual básica",
    price: 50,
    category: "Diseño",
    postedBy: 3,
  },
  {
    id: 8,
    title: "Clases de inglés conversacional",
    description: "Práctica de conversación en inglés",
    price: 30,
    category: "Idiomas",
    postedBy: 4,
  },
  {
    id: 9,
    title: "Fotografía de productos",
    description: "Sesión fotográfica para pequeños negocios",
    price: 55,
    category: "Fotografía",
    postedBy: 5,
  },
  {
    id: 10,
    title: "Creación de sitio web básico",
    description: "Página web sencilla con Wordpress",
    price: 150,
    category: "Desarrollo Web",
    postedBy: 5,
  }
];

export { users, jobs };