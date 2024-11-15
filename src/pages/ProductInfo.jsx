import React, { useEffect } from 'react'; // Import useEffect
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import { assets } from '../assets/assets';

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
    route: '/dhokra'
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
