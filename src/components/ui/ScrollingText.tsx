import { motion } from 'framer-motion';

const ScrollingText = () => {
  return (
    <div className="absolute inset-x-0 bottom-20 overflow-hidden pointer-events-none">
      <div className="w-full overflow-hidden opacity-[0.09]">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }} // Fixed incorrect transition syntax
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            ease: "linear"
          }}
          className="whitespace-nowrap"
        >
          <span className="text-[30vw] font-bold text-white leading-none">
            Data Analyst
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText;
