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
        <div className="fixed top-0 w-screen h-screen bg-gradient z-20">
            <motion.div
            initial={{ x: 30 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
            {props.children}
            </motion.div>
        </div>
    </motion.div>
)
