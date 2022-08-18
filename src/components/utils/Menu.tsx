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
        <div className="fixed top-0 bottom-0 right-0 w-3/4 -mr-12 bg-white z-20 bg-opacity-10 backdrop-blur-xl">
            <motion.div
            initial={{ x: 30}}
                animate={{ x: 0}}
                transition={{ duration: 0.5 }}
            >
            {props.children}
            </motion.div>
        </div>
    </motion.div>
)
