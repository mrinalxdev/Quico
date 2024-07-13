import {
  Brain,
  Clock,
  Database,
  PanelsTopLeft,
  Server,
  Shield,
  User,
  Wrench,
} from "lucide-react";

export const monthlyPlans = [
  {
    name: "Starter Plan",
    popular: false,
    description: "Ideal for individuals.",
    price: "$9.99",
    ctaText: "Choose Starter",
    ctaOnClick: () => {
      /* handle click for Starter Plan */
    },
    features: [
      { name: "10 GB Storage" },
      { name: "100 Email Accounts" },
      { name: "24/7 Support" },
      { name: "Basic Analytics" },
    ],
  },
  {
    name: "Pro Plan",
    popular: true,
    description: "Perfect for small businesses.",
    price: "$19.99",
    ctaText: "Choose Pro",
    ctaOnClick: () => {
      /* handle click for Pro Plan */
    },
    features: [
      { name: "50 GB Storage" },
      { name: "500 Email Accounts" },
      { name: "Priority Support" },
      { name: "Advanced Analytics" },
    ],
  },
  {
    name: "Enterprise Plan",
    popular: false,
    description: "Best for large organizations.",
    price: "$49.99",
    ctaText: "Choose Enterprise",
    ctaOnClick: () => {
      /* handle click for Enterprise Plan */
    },
    features: [
      { name: "Unlimited Storage" },
      { name: "Unlimited EmailS" },
      { name: "Dedicated Account" },
      { name: "Custom Analytics" },
    ],
  },
];

export const yearlyPlans = [
  {
    name: "Starter Plan",
    popular: false,
    description: "Ideal for individuals.",
    price: "$90",
    ctaText: "Choose Starter",
    ctaOnClick: () => {
      /* handle click for Starter Plan */
    },
    features: [
      { name: "10 GB Storage" },
      { name: "100 Email Accounts" },
      { name: "24/7 Support" },
      { name: "Basic Analytics" },
    ],
  },
  {
    name: "Pro Plan",
    popular: true,
    description: "Perfect for small businesses.",
    price: "$190",
    ctaText: "Choose Pro",
    ctaOnClick: () => {
      /* handle click for Pro Plan */
    },
    features: [
      { name: "50 GB Storage" },
      { name: "500 Email Accounts" },
      { name: "Priority Support" },
      { name: "Advanced Analytics" },
    ],
  },
  {
    name: "Enterprise Plan",
    popular: false,
    description: "Best for large organizations.",
    price: "$490",
    ctaText: "Choose Enterprise",
    ctaOnClick: () => {
      /* handle click for Enterprise Plan */
    },
    features: [
      { name: "Unlimited Storage" },
      { name: "Unlimited EmailS" },
      { name: "Dedicated Account" },
      { name: "Custom Analytics" },
    ],
  },
];

export const footerSections = [
  {
    title: "Services",
    items: [
      { name: "1on1 Coaching", link: "#" },
      { name: "Company Review", link: "#" },
      { name: "HR Consulting", link: "#" },
      { name: "SEO Optimisation", link: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Blog", link: "#" },
      { name: "Podcast", link: "#" },
      { name: "Newsletter", link: "#" },
      { name: "Books", link: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Contact", link: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Privacy", link: "#" },
      { name: "Terms", link: "#" },
    ],
  },
];

export const footerSocials = [
  {
    name: "Facebook",
    link: "https://fridayui.com",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    link: "https://fridayui.com",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    link: "https://fridayui.com",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    link: "https://fridayui.com",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const features = [
  {
    id: "1",
    icon: <Server size={18} />,
    name: "Cloud Hosting",
    link: "#",
    description:
      "Reliable and fast cloud hosting solutions tailored to your needs.",
    subFeatures: [
      { name: "99.99% uptime", icon: <Clock size={18} /> },
      { name: "24/7 support", icon: <PanelsTopLeft size={18} /> },
      { name: "Unlimited storage", icon: <Server size={18} /> },
    ],
    img: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "2",
    icon: <Shield size={18} />,
    name: "Cyber Security",
    link: "#",
    description:
      "Advanced cyber security solutions to protect your data and infrastructure.",
    subFeatures: [
      { name: "Real-time monitoring", icon: <Clock size={18} /> },
      { name: "24/7 incident response", icon: <PanelsTopLeft size={18} /> },
      { name: "Comprehensive threat protection", icon: <Server size={18} /> },
    ],
    img: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    icon: <Database size={18} />,
    name: "Data Analytics",
    link: "#",
    description:
      "Unlock insights with our powerful data analytics tools and services.",
    subFeatures: [
      { name: "Real-time analytics", icon: <Clock size={18} /> },
      { name: "Customizable dashboards", icon: <PanelsTopLeft size={18} /> },
      { name: "Scalable storage solutions", icon: <Server size={18} /> },
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    icon: <Brain size={18} />,
    name: "AI Solutions",
    link: "#",
    description:
      "Innovative AI solutions to enhance your business operations and decision-making.",
    subFeatures: [
      { name: "Machine learning models", icon: <Clock size={18} /> },
      { name: "24/7 technical support", icon: <PanelsTopLeft size={18} /> },
      { name: "Flexible deployment options", icon: <Server size={18} /> },
    ],
    img: "https://images.unsplash.com/photo-1581092334735-2c8b06fedae7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    icon: <Wrench size={18} />,
    name: "DevOps Services",
    link: "#",
    description:
      "Streamline your software development and operations with our DevOps services.",
    subFeatures: [
      { name: "Continuous integration", icon: <Clock size={18} /> },
      { name: "24/7 support", icon: <PanelsTopLeft size={18} /> },
      { name: "Automated deployments", icon: <Server size={18} /> },
    ],
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    icon: <User size={18} />,
    name: "Customer Management",
    link: "#",
    description: "Enhance customer relationships with our CRM solutions.",
    subFeatures: [
      { name: "360-degree customer view", icon: <Clock size={18} /> },
      { name: "24/7 customer support", icon: <PanelsTopLeft size={18} /> },
      { name: "Customizable workflows", icon: <Server size={18} /> },
    ],
    img: "https://images.unsplash.com/photo-1523966211577-422e56d9e512?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const testimonials = [
  {
    customerName: "Emma Johnson",
    title: "CEO",
    review: `Absolutely love it! This product exceeded all my expectations. The quality is outstanding and it arrived promptly. Highly recommend!`,
    rating: 5,
    customerImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    customerName: "Liam Anderson",
    title: "CEO",
    review: `I'm very impressed with the quality and performance. It works perfectly and the customer service was fantastic. Would definitely buy again!`,
    rating: 5,
    customerImg:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    customerName: "Noah Thompson",
    title: "CEO",
    review: `This is a game-changer! The build quality is excellent and it performs even better than advertised. Very satisfied with my purchase.`,
    rating: 5,
    customerImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    customerName: "James Carter",
    title: "CEO",
    review: `Fantastic product! It works perfectly and looks great. Delivery was fast and the customer service was very helpful. I'm very pleased!`,
    rating: 5,
    customerImg:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    customerName: "Alexander Miller",
    title: "CEO",
    review: `Excellent purchase! The product is high-quality and works just as described. I'm extremely happy with it and will definitely be a repeat customer.`,
    rating: 5,
    customerImg:
      "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    customerName: "Sophia Martinez",
    title: "CEO",
    review: `I'm thoroughly impressed! The quality is top-notch and it arrived sooner than expected. Great experience from start to finish!`,
    rating: 5,
    customerImg:
      "https://plus.unsplash.com/premium_photo-1682965699742-92e41c2d8630?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
];

export const faqs = [
  {
    question: "How many different Iron Man suits has Tony Stark created?",
    answer:
      "Tony Stark has created at least 85 suits in the MCU, from the Mark I to the Mark LXXXV seen in 'Avengers: Endgame.'",
  },
  {
    question:
      "What are the main features of the Iron Man Mark L (Mark 50) suit?",
    answer: `Yes. It comes with default styles that matches the other components&apos; aesthetic.`,
  },
  {
    question: "What powers the Iron Man suits?",
    answer: `Iron Man suits are powered by the Arc Reactor, a compact, high-energy device initially using palladium, later upgraded with a new element.`,
  },
];

export const logos = [
  {
    name: "Vercel",
    url: "https://fridayui.s3.amazonaws.com/logos/vercel.svg",
  },
  {
    name: "Nextjs",
    url: "https://fridayui.s3.amazonaws.com/logos/nextjs.svg",
  },
  {
    name: "Webflow",
    url: "https://fridayui.s3.amazonaws.com/logos/webflow.svg",
  },
  {
    name: "Airbnb",
    url: "https://fridayui.s3.amazonaws.com/logos/airbnb.svg",
  },
  {
    name: "Tina",
    url: "https://fridayui.s3.amazonaws.com/logos/tinacms.svg",
  },
  {
    name: "Mistral",
    url: "https://fridayui.s3.amazonaws.com/logos/mistral.svg",
  },
  {
    name: "Prime",
    url: "https://fridayui.s3.amazonaws.com/logos/prime.svg",
  },
  {
    name: "Stackoverflow",
    url: "https://fridayui.s3.amazonaws.com/logos/stackoverflow.svg",
  },
];

export const tweets = [
  {
    profilePhotoURL:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    name: "Emma Johnson",
    username: "@emmajohnson",
    tweet:
      "Absolutely love it! This product exceeded all my expectations. The quality is outstanding and it arrived promptly. Highly recommend!",
  },
  {
    profilePhotoURL:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    name: "Liam Anderson",
    username: "@liamanderson",
    tweet:
      "I'm very impressed with the quality and performance. It works perfectly and the customer service was fantastic. Would definitely buy again!",
  },
  {
    profilePhotoURL:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    name: "Noah Thompson",
    username: "@noahthompson",
    tweet:
      "This is a game-changer! The build quality is excellent and it performs even better than advertised. Very satisfied with my purchase.",
  },
  {
    profilePhotoURL:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "James Carter",
    username: "@jamescarter",
    tweet:
      "Fantastic product! It works perfectly and looks great. Delivery was fast and the customer service was very helpful. I'm very pleased!",
  },
  {
    profilePhotoURL:
      "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    name: "Alexander Miller",
    username: "@alexandermiller",
    tweet:
      "Excellent purchase! The product is high-quality and works just as described. I'm extremely happy with it and will definitely be a repeat customer.",
  },
  {
    profilePhotoURL:
      "https://plus.unsplash.com/premium_photo-1682965699742-92e41c2d8630?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    name: "Sophia Martinez",
    username: "@sophiamartinez",
    tweet:
      "I'm thoroughly impressed! The quality is top-notch and it arrived sooner than expected. Great experience from start to finish!",
  },
];

export const subscriptionServicePlans = [
  {
    tag: "Existing Components",
    pricingNote: "",
    description:
      "All the components that are freely available on the website are free to use.",
    features: [
      "A growing library of awesome components",
      "React / Next.js / Tailwind CSS code",
      "MIT Licence. Personal or commercial projects.",
    ],
    price: "Free",
    ctaText: "Browse Components",
    popular: false,
    ctaOnClick: () => {},
  },
  {
    tag: "Multi Page Website",
    pricingNote: "pause or cancel anytime",
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    features: [
      "Multi-page landing page website",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Pause or cancel anytime",
    ],
    price: "$4995/mo",
    ctaText: "I'm interested",
    popular: true,
    ctaOnClick: () => {},
  },
  {
    tag: "Complete Product Development",
    pricingNote: "Starting at",
    description:
      "Best for mvp or complete product development. We take care of the design, development, and deployment.",
    features: [
      "Multi-page landing + all the features you need",
      "Frontend: React / Next.js / Tailwind CSS code",
      "Backend: Node.js / Express.js / MongoDB / PostgreSQL (Can be customised)",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Pause or cancel anytime",
    ],
    price: "$9997/mo",
    ctaText: "I'm interested",
    popular: false,
    ctaOnClick: () => {},
  },
];

export const creditCards = [
  {
    cardNumber: "4242 4242 4242 4242",
    expiry: "12/23",
    bgStartColor: "#FF5733",
    bgEndColor: "#C70039",
    cardHolder: "John Doe",
  },
  {
    cardNumber: "1111 1111 1111 1111",
    expiry: "12/23",
    bgStartColor: "#d1a000",
    bgEndColor: "#FFC300",
    cardHolder: "Jane Smith",
  },
  {
    cardNumber: "3232 3232 3232 3232",
    expiry: "12/23",
    bgStartColor: "#900C3F",
    bgEndColor: "#581845",
    cardHolder: "Alice Johnson",
  },
  {
    cardNumber: "4210 0000 0000 0000",
    expiry: "12/23",
    bgStartColor: "#3498DB",
    bgEndColor: "#2E86C1",
    cardHolder: "Bob Brown",
  },
  {
    cardNumber: "3333 3333 3333 3333",
    expiry: "12/23",
    bgStartColor: "#1ABC9C",
    bgEndColor: "#16A085",
    cardHolder: "Charlie Davis",
  },
  {
    cardNumber: "4242 4242 4242 4242",
    expiry: "12/23",
    bgStartColor: "#FF5733",
    bgEndColor: "#C70039",
    cardHolder: "John Doe",
  },
  {
    cardNumber: "1111 1111 1111 1111",
    expiry: "12/23",
    bgStartColor: "#d1a000",
    bgEndColor: "#FFC300",
    cardHolder: "Jane Smith",
  },
  {
    cardNumber: "3232 3232 3232 3232",
    expiry: "12/23",
    bgStartColor: "#900C3F",
    bgEndColor: "#581845",
    cardHolder: "Alice Johnson",
  },
  {
    cardNumber: "4210 0000 0000 0000",
    expiry: "12/23",
    bgStartColor: "#3498DB",
    bgEndColor: "#2E86C1",
    cardHolder: "Bob Brown",
  },
  {
    cardNumber: "3333 3333 3333 3333",
    expiry: "12/23",
    bgStartColor: "#1ABC9C",
    bgEndColor: "#16A085",
    cardHolder: "Charlie Davis",
  },
  {
    cardNumber: "4242 4242 4242 4242",
    expiry: "12/23",
    bgStartColor: "#FF5733",
    bgEndColor: "#C70039",
    cardHolder: "John Doe",
  },
  {
    cardNumber: "1111 1111 1111 1111",
    expiry: "12/23",
    bgStartColor: "#d1a000",
    bgEndColor: "#FFC300",
    cardHolder: "Jane Smith",
  },
  {
    cardNumber: "3232 3232 3232 3232",
    expiry: "12/23",
    bgStartColor: "#900C3F",
    bgEndColor: "#581845",
    cardHolder: "Alice Johnson",
  },
  {
    cardNumber: "4210 0000 0000 0000",
    expiry: "12/23",
    bgStartColor: "#3498DB",
    bgEndColor: "#2E86C1",
    cardHolder: "Bob Brown",
  },
  {
    cardNumber: "3333 3333 3333 3333",
    expiry: "12/23",
    bgStartColor: "#1ABC9C",
    bgEndColor: "#16A085",
    cardHolder: "Charlie Davis",
  },
  {
    cardNumber: "4242 4242 4242 4242",
    expiry: "12/23",
    bgStartColor: "#FF5733",
    bgEndColor: "#C70039",
    cardHolder: "John Doe",
  },
  {
    cardNumber: "1111 1111 1111 1111",
    expiry: "12/23",
    bgStartColor: "#d1a000",
    bgEndColor: "#FFC300",
    cardHolder: "Jane Smith",
  },
  {
    cardNumber: "3232 3232 3232 3232",
    expiry: "12/23",
    bgStartColor: "#900C3F",
    bgEndColor: "#581845",
    cardHolder: "Alice Johnson",
  },
  {
    cardNumber: "4210 0000 0000 0000",
    expiry: "12/23",
    bgStartColor: "#3498DB",
    bgEndColor: "#2E86C1",
    cardHolder: "Bob Brown",
  },
  {
    cardNumber: "3333 3333 3333 3333",
    expiry: "12/23",
    bgStartColor: "#1ABC9C",
    bgEndColor: "#16A085",
    cardHolder: "Charlie Davis",
  },
];
