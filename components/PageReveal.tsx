'use client';
import {motion} from 'framer-motion';
export default function PageReveal({children}:{children:React.ReactNode}){return <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,ease:[.22,1,.36,1]}}>{children}</motion.div>}
