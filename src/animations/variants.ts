import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const buttonHover: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95,
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)"
  }
};

export const socialIconAnimation: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export const cardAnimation: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

export const skillCardAnimation: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    rotateX: 5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export const iconAnimation: Variants = {
  hidden: { 
    scale: 0,
    rotate: -180
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export const projectCardAnimation: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    y: 30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
  hover: {
    scale: 1.03,
    y: -10,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};