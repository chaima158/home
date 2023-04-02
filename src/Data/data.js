// import icons
import { FaYoutube, FaInstagram, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../../src/assets/img/about.png';
import Feature1Img from '../../src/assets/img/features/feature1.png';
import Feature2Img from '../../src/assets/img/features/feature2.png';
import Feature3Img from '../../src/assets/img/features/feature3.png';
import Feature4Img from '../../src/assets/img/features/feature4.png';
import Avatar1Img from '../../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../../src/assets/img/logo-v2.png';
import afroseer from '../../src/assets/img/afroseer.jpg';
import about2 from '../../src/assets/img/about2.webp';
import HeroImage from '../../src/assets/img/hero-img.png';
import Feature1BgImg from '../../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../../src/assets/img/features/feature4_bg.png';
import heero from '../../src/assets/img/heero.png';
import mmm from '../../src/assets/img/features/mmm.png';
import cong from '../../src/assets/img/features/cong.png';
import admin from '../../src/assets/img/features/admin.png';
import congé from '../../src/assets/img/features/congé.png';
import img1 from '../../src/assets/img/features/img1.webp';
import img2 from '../../src/assets/img/features/img2.webp';
import img3 from '../../src/assets/img/features/img3.webp';
import img4 from '../../src/assets/img/features/img4.webp';

export const navigationData = [
  {
    name: 'Accueil',
    href: '#',
  },
  {
    name: 'A propos',
    href: '#',
  },
  {
    name: 'Créer compte',
    href: '#',
  },
  {
    name: 'Se connecter',
    href: '/login',
  },
];

export const heroData = {
  title: ` Osez La Dégitalisation autrement! `,
  subtitle:'Afroser, Agence de communication',
  btnText: 'Get Started',
  image: heero,
};

//about 
export const aboutData = {
  image: about2,
  title: 'En savoir un peu plus sur nous',
  subtitle:
    'Agence de communication & solutions digitales en Tunisie qui vous propose des services développement web et mobile, conseil et analyse; stratégie digitale et réseaux sociaux.',
};

//services
export const featuresData = {
  title: 'Quelques services que nous offrons',
  subtitle:
    "Avec cette application permet aux employés d'Afroser d'accéder aux services en ligne de l'administration",
  list: [
    {
      image: img1,
      bgImage: Feature1BgImg,
      title: 'Payment Done',
      description:
        'Pay with a Visa or PayPal card and without much ado',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: img2,
      bgImage: Feature2BgImg,
      title: 'Find Your Product',
      description:
        'We offer sale of products through the Internet..',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: img3,
      bgImage: Feature3BgImg,
      title: 'Print Out',
      description:
        'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: img4,
      bgImage: Feature4BgImg,
      title: 'Product Received',
      description:
        'In our app you can see the delay time of your order...',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};
//footer
export const footerData = {
  logo: afroseer,
  address: 'Cité Jasmain, Ben Arous, Tunisia',
  email: 'hello@afroser.com',
  phone: '(+216) 53 312 313',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/afroseragencedecomm',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/afroser_com/?fbclid=IwAR3sO9_ybLLV1iLQyRGusGFi5cyyoR0f_nLM1_1tMg-Ekw3NUWKWymIG9YU',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/Afroser_com?fbclid=IwAR10UbZu2C5NJ7W-2EESRPIarJxaRDHTupuxSyMXIiK56GUaZx7pd2HZ6Os',
    },
  ],
};

export const copyrightData = {
  text: '© Afroser, 2023. Tous les droits sont réservés. Numéro d enregistrement de la société : (+216) 53 312 313.',
  icon: <BsChatDotsFill />,
};

export const userMenu = [
  {
    name: "Home",
    path: "/home",
    icon: "fa-solid fa-house",
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply Doctor",
    path: "/apply-doctor",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
  {
    name: "Cal",
    path: "/notification",
    icon: "fa-solid fa-user-doctor",
  },
];

// admin menu
export const adminMenu = [
  {
    name: "Home",
    path: "/home",
    icon: "fa-solid fa-house",
  },

  {
    name: "Doctors",
    path: "/admin/doctors",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "fa-solid fa-user",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
];
