
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";
import logo from '../assets/hero/logo.png'
import akbank from '../assets/hero/akbank.png'
import cisco from '../assets/hero/Cisco_logo.jpg'
import habitat from '../assets/hero/habitat.jpg'



export const navigation = [
  {
    id: "0",
    title: "Özellikleri",
    url: "#features",
  },
  {
    id: "1",
    title: "Videolar/Oturumlar",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Nasıl Başladık?",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Yol Haritası",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Yeni Kullanıcı",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: " Giriş Yap",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo, akbank, cisco, habitat];

export const brainwaveServices = [
  "Fotoğraf Düzenleme",
  "Fotoğraf Geliştirme",
  "Sorunsuz Entegrasyon",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Ses Tanıma",
    text: "Sohbet robotunun sesli komutları anlamasını ve bunlara yanıt vermesini sağlayarak kullanıcıların uygulamayla eller serbest bir şekilde etkileşime girmesini kolaylaştırın.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Oyunlaştırma.",
    text: "Kullanıcıları Yapay Zeka  ile daha sık etkileşime geçmeye teşvik etmek için rozetler veya liderlik tabloları gibi oyun benzeri öğeler ekleyin.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "GPT-4 özelleştirme",
    text: "Kullanıcıların GPT-4'Ün görünümünü ve davranışını özelleştirmesine izin vererek onu daha ilgi çekici ve eğlenceli hale getirin.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API'ler ile Entegrasyon",
    text: "Daha alakalı öneriler sunmak için sohbet robotunun hava durumu API'leri veya haber API'leri gibi harici veri kaynaklarına erişmesine izin verin.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];  

export const youtube_videos = [
  {
      "id": "0",
      "title": "Yokluğu da Çokluğu da Problem: Su",
      "description": "Yokluğu da Çokluğu da Problem: Su",
      "link": "https://www.youtube.com/watch?v=nAKbqWGcIe8",
      "videoId": "nAKbqWGcIe8" 
  },
  {
      "id": "1",
      "title": "Büyük Felaketin Birinci Yılı",
      "description": "Büyük Felaketin Birinci Yılı",
      "link": "https://www.youtube.com/watch?v=qEcbsIK1qe8",
      "videoId": "qEcbsIK1qe8" 
  },
  {
      "id": "2",
      "title": "Türkiye'de IV. Grup Madenciliğin Görünümü ve Doğaya Etkileri",
      "description": "Türkiye'de IV. Grup Madenciliğin Görünümü ve Doğaya Etkileri",
      "link": "https://www.youtube.com/watch?v=WI1a-6cU-qc",
      "videoId": "WI1a-6cU-qc" 
  },
  {
    "id": "3",
    "title": "Deprem ve İklim Güvenli Yapılaşma Önerisi: Ahşapla Yap, Ahşapla Yaşa",
    "description": "Deprem ve İklim Güvenli Yapılaşma Önerisi: Ahşapla Yap, Ahşapla Yaşa",
    "link": "https://www.youtube.com/watch?v=DmiHODSz7zE",
    "videoId": "DmiHODSz7zE" 
  }
];

export const benefits = [
  {
    id: "0",
    title: "Her şeyi sor?",
    text: "Kullanıcıların birden fazla kaynakta arama yapmak zorunda kalmadan sorularına hızlı bir şekilde yanıt bulmalarını sağlar.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Her gün geliştirin..",
    text: "Uygulama, kullanıcı sorgularını anlamak ve doğru ve ilgili yanıtlar sağlamak için doğal dil işlemeyi kullanır.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Her yere bağlanın!.",
    text: "Yapay zeka  ile her yerden, her cihazdan bağlantı kurarak daha erişilebilir ve kullanışlı hale getirilmiş bir servis hizmeti alın.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Hızlı yanıt.",
    text: "Kullanıcıların birden fazla kaynakta arama yapmak zorunda kalmadan sorularına hızlı bir şekilde yanıt bulmalarını sağlar.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Her şeyi sor?",
    text: "Kullanıcıların birden fazla kaynakta arama yapmak zorunda kalmadan sorularına hızlı ve doğru bir şekilde yanıt Almalarını sağlar.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Her gün geliştirin",
    text: "Uygulama, kullanıcı sorgularını anlamak ve doğru ve ilgili yanıtlar sağlamak için doğal dil işlemeyi kullanır.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/KapadokyaUniv",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/kapadokyauniversitesi/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/KapadokyaUniversitesi",
  },
];