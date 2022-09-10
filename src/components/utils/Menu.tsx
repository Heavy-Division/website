import { motion } from 'framer-motion';
import {ReactNode} from "react";

export type menuProps = {
    children: ReactNode
}

export const Menu = (props: menuProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 2 }}
    >
        <div className="fixed top-0 w-2/3 h-screen bg-blue-tailwind shadow-2xl z-20">
            <motion.div
            initial={{ x: -30 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
            >
            {props.children}
            </motion.div>
        </div>
    </motion.div>
)
