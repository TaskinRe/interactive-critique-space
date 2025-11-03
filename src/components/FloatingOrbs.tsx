import { motion, useScroll, useTransform } from "framer-motion";

const FloatingOrbs = () => {
  const { scrollY } = useScroll();
  
  const orbs = [
    {
      size: "w-96 h-96",
      color: "bg-[hsl(200_75%_70%)]",
      initialX: "10%",
      initialY: "20%",
      parallaxSpeed: 0.5,
      duration: 15,
      delay: 0,
    },
    {
      size: "w-[32rem] h-[32rem]",
      color: "bg-[hsl(270_60%_75%)]",
      initialX: "70%",
      initialY: "10%",
      parallaxSpeed: 0.3,
      duration: 18,
      delay: 2,
    },
    {
      size: "w-[28rem] h-[28rem]",
      color: "bg-[hsl(150_55%_68%)]",
      initialX: "50%",
      initialY: "60%",
      parallaxSpeed: 0.7,
      duration: 16,
      delay: 4,
    },
    {
      size: "w-80 h-80",
      color: "bg-[hsl(15_80%_75%)]",
      initialX: "15%",
      initialY: "70%",
      parallaxSpeed: 0.4,
      duration: 14,
      delay: 1,
    },
    {
      size: "w-72 h-72",
      color: "bg-[hsl(45_85%_75%)]",
      initialX: "85%",
      initialY: "75%",
      parallaxSpeed: 0.6,
      duration: 17,
      delay: 3,
    },
    {
      size: "w-96 h-96",
      color: "bg-[hsl(140_45%_65%)]",
      initialX: "40%",
      initialY: "30%",
      parallaxSpeed: 0.8,
      duration: 19,
      delay: 5,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {orbs.map((orb, index) => {
        const y = useTransform(scrollY, [0, 1000], [0, -orb.parallaxSpeed * 200]);
        
        return (
          <motion.div
            key={index}
            className={`absolute rounded-full blur-3xl opacity-35 ${orb.size} ${orb.color}`}
            style={{
              left: orb.initialX,
              top: orb.initialY,
              y,
            }}
            animate={{
              x: [0, 120, -80, 180, 0],
              y: [0, -100, 80, -60, 0],
              scale: [1, 1.3, 0.7, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingOrbs;
