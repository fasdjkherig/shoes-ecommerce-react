import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.jpg";
import product14 from "../assets/product14.jpg";
import product15 from "../assets/product15.jpg";
import product16 from "../assets/product16.png";
import product17 from "../assets/product17.png";
import product18 from "../assets/product18.png";
import product19 from "../assets/product19.png";
import product20 from "../assets/product20.png";
import product21 from "../assets/product21.png";
import product22 from "../assets/product22.png";
import product23 from "../assets/product23.png";
import product24 from "../assets/product24.png";
import product25 from "../assets/product25.png";
import product26 from "../assets/product26.png";
import product27 from "../assets/product27.png";
import product28 from "../assets/product28.jpg";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Train With Electric Nike",
  subtitle: "Adapt 2.0 Sneakers",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "This is a distinguished shoe with a strong design, high performance and great comfort, made of high materials, suitable for various sports, including violent sports. It contains ventilation holes for foot ventilation, in addition to its presence in multiple colors and different sizes.",
  btn: "Explore More",
  url: "#",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "This is a distinguished shoe with a strong design, high performance and great comfort, made of high materials, suitable for various sports, including violent sports. It contains ventilation holes for foot ventilation.",
  btn: "Explore More",
  url: "#",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x9=13",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product16,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x14",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product17,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x15",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product18,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x16",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product19,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x17",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product20,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x18",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product21,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x19",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product22,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x20",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product23,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x21",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product24,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x22",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product25,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x23",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product26,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x24",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product27,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
  ],
};

const story = {
  title: "Top Stories",
  news: [
    {
      title: "Training Shoes",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: product13,
      url: "#",
      like: "3/5",
      time: "11 Mins",
      by: "Ali Mohamed",
      btn: "Read More",
    },
    {
      title: "Bro's Nike Zoom Freak 4",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "#",
      by: "Ahmed Elsayed",
      btn: "Read More",
    },
    {
      title: "Nike Air Max Plus",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "#",
      like: "5/5",
      by: "Zaid Hady",
      btn: "Read More",
    },
    {
      title: "Nike Air Retro High OG",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: product28,
      time: "7 Months",
      url: "#",
      like: "5/5",
      by: "Fathy Yousef",
      btn: "Read More",
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "#",
      like: "3/5",
      by: "Abdallah Ali",
      btn: "Read More",
    },
    {
      title: "Puma Tactical Shoes",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: product15,
      time: "25 Days",
      url: "#",
      like: "3/5",
      by: "Hassan Ziad",
      btn: "Read More",
    },
    {
      title: "Nike Air Force Orange Color",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "#",
      time: "6 Days",
      like: "4/5",
      by: "Mahmoud Ali",
      btn: "Read More",
    },
    {
      title: "Nike Air and Adidas",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: product14,
      url: "#",
      time: "5 Days",
      like: "4/5",
      by: "Anwer Hady",
      btn: "Read More",
    },
    {
      title: "Air Force 1 Low Expands",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto dicta repellat facere autem laborum error illo totam, voluptatibus veniam.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "#",
      time: "5 Days",
      like: "4/5",
      by: "Gamal Ali",
      btn: "Read More",
    },
  ],
};

const footerAPI = {
  titles: [
    { title: "About Us" },
    { title: "Get Help" },
    { title: "Company" },
  ],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Designers" },
      { link: "Purpose" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "Send Us Feeback" },
    ],
  ],
};

export {
  heroapi,
  footerAPI,
  story,
  sneaker,
  highlight,
  toprateslaes,
  popularsales,
};
