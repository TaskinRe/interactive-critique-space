import { motion, useScroll, useTransform } from "framer-motion";

const FloatingOrbs = () => {
  const { scrollY } = useScroll();
  
  const orbs = [
    {
      size: "w-64 h-64",
      color: "bg-[hsl(200_70%_75%)]",
      initialX: "10%",
      initialY: "20%",
      parallaxSpeed: 0.5,
      duration: 20,
      delay: 0,
    },
    {
      size: "w-96 h-96",
      color: "bg-[hsl(270_50%_78%)]",
      initialX: "70%",
      initialY: "10%",
      parallaxSpeed: 0.3,
      duration: 25,
      delay: 2,
    },
    {
      size: "w-80 h-80",
      color: "bg-[hsl(150_45%_72%)]",
      initialX: "50%",
      initialY: "60%",
      parallaxSpeed: 0.7,
      duration: 22,
      delay: 4,
    },
    {
      size: "w-72 h-72",
      color: "bg-[hsl(15_75%_78%)]",
      initialX: "15%",
      initialY: "70%",
      parallaxSpeed: 0.4,
      duration: 18,
      delay: 1,
    },
    {
      size: "w-56 h-56",
      color: "bg-[hsl(45_80%_78%)]",
      initialX: "85%",
      initialY: "75%",
      parallaxSpeed: 0.6,
      duration: 23,
      delay: 3,
    },
    {
      size: "w-64 h-64",
      color: "bg-[hsl(140_35%_70%)]",
      initialX: "40%",
      initialY: "30%",
      parallaxSpeed: 0.8,
      duration: 21,
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
            className={`absolute rounded-full blur-3xl opacity-20 ${orb.size} ${orb.color}`}
            style={{
              left: orb.initialX,
              top: orb.initialY,
              y,
            }}
            animate={{
              x: [0, 100, -50, 150, 0],
              scale: [1, 1.2, 0.8, 1.1, 1],
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
