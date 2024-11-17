import React, { useEffect } from 'react'; // Import useEffect
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import ThanjavurBommainfo from '../assets/Thanjavur_Bomma_info.jpg';
import ThanjavurBommaHistory from '../assets/ThanjavurBommaHistory.jpg';
const productContents = {
  1: {
    title: "Tarkashi Wood Carving",
    description: "Tarkashi is a traditional Indian art form that involves intricate metal inlay work on wooden surfaces. Artisans use thin brass or copper wires to create detailed patterns, often featuring geometric designs or floral motifs. This delicate craft requires immense skill, precision, and patience, as the metal wires are carefully inlaid into grooves carved on hardwood surfaces, typically Sheesham (Indian Rosewood). The finished pieces are polished to highlight the contrast between the wood and the metal, resulting in stunning decorative objects used for furniture, home decor, and ornamental items.",
    additionalContent: "Historically, Tarkashi art dates back to the Mughal era, drawing influence from Persian metalwork traditions that merged with local Indian craftsmanship. Initially, this art form was used for adorning temples, royal furniture, and palaces, reflecting the luxurious tastes of the time. Over the centuries, Tarkashi became a significant cultural art, symbolizing India's rich heritage and artistic excellence. Today, it continues to thrive, with contemporary artisans incorporating Tarkashi into modern decor while preserving traditional techniques. This blend of history, sustainability, and aesthetic appeal ensures Tarkashi remains an enduring symbol of Indian artistry and craftsmanship.",
    infoImage: assets.tarkashi_info_img,
    historyImage: assets.tarkashi_history_img,
    route: '/simulation'
  },
  2: {
    title: "Thanjavur Thattu",
    description: "The creation of a Thanjavur Art Plate involves a multi-step manufacturing process that requires skilled craftsmanship. First, the base plate, usually made of brass, is prepared and polished. Next, metal reliefs are crafted using copper and silver sheets, with intricate designs being shaped using molds, punches, and chisels. These relief sheets are then fixed onto the base plate, secured with a mixture of wax and other natural materials, and embossed with figures of Hindu deities or floral motifs. Finally, the plate undergoes a detailed finishing process involving polishing to enhance its shine and intricate details.",
    additionalContent: "The Thanjavur Art Plate, also known as Thanjavur Thattu, originated in the Thanjavur region of Tamil Nadu, India, during the early 18th century. It was introduced and popularized by Rajah Serfoji-II, the Maratha ruler of Thanjavur, who encouraged local artisans to create these exquisite metal artifacts to reflect the glory of his kingdom's royalty. The art plate, made of metals like brass, copper, and silver, quickly gained recognition for its unique craftsmanship and became a symbol of South Indian art and culture.",
    infoImage: assets.Thattu_info_img,
    historyImage: assets.Thattu_history_img,
    route: '/thattu'
  },
  3: {
    title: "Kalamkari",
    description: "Kalamkari is an ancient Indian art form that involves hand-painting or block-printing on fabric using natural dyes. The term \"Kalamkari\" is derived from two Persian words: ‘Kalam’, meaning pen, and ‘Kari’, meaning craftsmanship. This art has been practiced for centuries and is known for its intricate designs, vibrant colors, and use of organic materials. Originating in Andhra Pradesh, it holds a deep connection to storytelling, often depicting mythological scenes and traditional motifs.",
    additionalContent: "Kalamkari art dates back over 3,000 years and is deeply rooted in Indian temple traditions. Historically, it was used to depict religious stories on scrolls or canvases. Over time, it evolved into an art form for decorative textiles, becoming popular for its spiritual, cultural, and artistic expressions. Its use of eco-friendly, natural dyes and organic materials further adds to its cultural significance.",
    infoImage: assets.kalamkari_info_img,
    historyImage: assets.kalamkari_history_img,
    route: '/kalam1'
  },

  4: {
    title: "Dhokra",
    description: "Metal casting has been used in India for over 4,000 years, and Dhokra (sometimes written Dokra) is a nonferrous metal lost-wax casting procedure.Each piece of Dokra craftsmanship has its own distinct individuality. As it is the rarest form of art and in today’s fast world it is near about to extinct for the lack of its formation place and not enough marketing stores.",
    additionalContent: "There are two main processes of lost wax casting: solid casting and hollow casting. While the former is predominant in the south of India the latter is more common in Central and Eastern India. Solid casting does not use a clay core but instead a solid piece of wax to create the mould; hollow casting is the more traditional method and uses the clay core",
    infoImage: assets.dhokra_info,
    historyImage: assets.dhokra_info2,
    route: '/selection'
  },
  5: {
    title: "Thanjavur Bomma",
    description: "The Thanjavur Bomma, also known for its unique \"rebounding\" or \"bouncing\" feature, is a type of traditional doll with a special design that allows it to return to an upright position when pushed. This remarkable characteristic is achieved through a carefully balanced, weighted base and a rounded, flexible structure. When the doll is tilted or knocked over, the weighted base causes it to rock back and forth before springing back to its original upright position. This playful mechanism not only adds an element of interaction but also showcases the ingenuity of the artisans who designed the Bomma. The rebounding feature makes it a captivating object, combining both art and entertainment, and is a defining characteristic that sets Thanjavur Bommas apart from other traditional wooden dolls.",
    additionalContent: "The Thanjavur Bomma has its origins in the 16th-18th centuries during the Nayak and Maratha periods in Thanjavur, Tamil Nadu. Initially created for temple rituals and religious festivals, these dolls often depicted gods and mythological figures. The distinctive \"rebounding\" feature, where the doll returns to an upright position when pushed, was likely added to make them more interactive during religious displays. Over time, artisans enhanced the dolls with vibrant colors, gold leaf, and mirrors, transforming them into both spiritual symbols and intricate pieces of folk art. The tradition has been passed down through generations, remaining a cherished part of Tamil Nadu’s cultural heritage.",
    infoImage: ThanjavurBommainfo,
    historyImage: ThanjavurBommaHistory,
    route: '/bomma'
  },
  6: {
    title: "Stone Carvings",
    description: "In ancient and medieval times sculpture was the favoured medium of artistic expression.  Indian buildings were profusely adorned with it.  The subject matter was  human forms that were used to instruct people in the truths of the Hindu, Buddhist, or Jain religions..",
    additionalContent: "The tradition extends from Indus valley civilization of 2500 to 1800 BCE, during which terracotta figurines were produced. The great circular stone pillars and carved lions of the Mauryan period (3rd century BCE) gave way to figurative sculpture in the 2nd and 1st centuries.",
    infoImage: assets.stoness_img, // Add relevant images to your assets
    historyImage: assets.stonezz_img,
    timeline: [
      {
        title: "Schools of Indian sculpture",
        description: "There have been various schools according to the timeline in India's history which gave us sculpture in architecture and free sculptural forms as well. The schools include Sunga, Gandhara, Mathura, Pala, Chola, Pallava, Vijayanagara, Chalukya, Hoysala and Rashtrakuta. "
      },

      // Add more schools as needed
    ],
    route: '/stone'
  },
  7: {
    title: "Swords in Ancient India",
    description: "The history of swords in India dates back to the Bronze Age, when copper swords were used by the Indus Valley civilization. Swords have been found in archaeological sites throughout the Indian subcontinent, including in the Ganges-Jamuna Doab region, Fatehgarh, and Kallur.",
    additionalContent: "Swords were essential in Indian warfare and martial arts. Different regions and empires developed unique sword styles, reflecting their culture and combat needs.",
    infoImage: assets.sword1, // Add relevant images to your assets
    historyImage: assets.sword2,
    timeline: [
      {
        title: "Types of Swords in India",
        description: "Over time, various sword types evolved in India, each with unique characteristics and uses in battle.",
      },
      {
        title: "Khanda",
        description: "A large, heavy, double-edged sword with a flaring tip, the Khanda originated in the Gupta Empire. It has significance in Hinduism, Buddhism, and Sikhism and is used in traditional Indian martial arts.",
      },
      {
        title: "Talwar",
        description: "The Talwar is a curved sword suited for mounted combat. Its design allowed warriors to strike more effectively while on horseback.",
      },
      {
        title: "Shamsheer",
        description: "Made from wootz steel, a type of crucible steel pioneered in India, the Shamsheer is known for its sharpness and resilience. It was also used in Central Asia and gained popularity for its fine craftsmanship.",
      },
      // Add more types or historical events as needed
    ],
    route: '/Indiswords'
  }
};

const ProductInfo = () => {
  const { productIndex } = useParams();
  const product = productContents[productIndex];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='px-4 py-8 bg-gradient-to-b from-gray-50 to-gray-200'>
      {/* Title Section */}
      <div className='flex items-center text-4xl pt-8 border-t border-gray-300 justify-center gap-4'>
        <Title text1={'ABOUT'} text2={product.title} />
        <Link to={product.route}> {/* Use the dynamic route */}
          <motion.button
            className="px-2 py-1 mb-5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create your own
          </motion.button>
        </Link>
      </div>

      {/* Animated Divider */}
      <motion.div
        className="w-16 h-1 bg-indigo-500 mx-auto mt-4"
        initial={{ width: 0 }}
        animate={{ width: '4rem' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      ></motion.div>

      {/* First Section */}
      <motion.div
        className='my-16 flex flex-col md:flex-row items-center justify-center gap-16'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Info Image with Parallax Effect */}
        <motion.div className='relative'>
          <motion.img
            className='w-full md:max-w-[450px] rounded-2xl shadow-2xl'
            src={product.infoImage}
            alt={`${product.title} Info`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          {/* Overlay Effect */}
          <motion.div
            className="absolute inset-0 bg-indigo-500 opacity-0 hover:opacity-30 rounded-2xl transition-opacity duration-300"
          />
        </motion.div>

        {/* Text Card with Shadow */}
        <motion.div
          className='flex flex-col justify-center gap-6 p-8 bg-white rounded-2xl shadow-lg md:w-2/4 text-gray-700 hover:shadow-2xl transition-shadow duration-300'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className='leading-relaxed'>
            {product.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Second Section for Additional Content */}
      <motion.div
        className='my-16 flex flex-col md:flex-row-reverse items-center justify-center gap-16'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className='relative'
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.img
            className='w-full md:max-w-[450px] rounded-2xl shadow-2xl'
            src={product.historyImage}
            alt={`${product.title} History`}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute inset-0 bg-indigo-500 opacity-0 hover:opacity-30 rounded-2xl transition-opacity duration-300"
          />
        </motion.div>

        <motion.div
          className='flex flex-col justify-center gap-6 p-8 bg-white rounded-2xl shadow-lg md:w-2/4 text-gray-700 hover:shadow-2xl transition-shadow duration-300'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className='leading-relaxed'>
            {product.additionalContent}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;
