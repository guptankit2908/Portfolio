import { motion } from 'framer-motion';
import clsx from 'clsx';

const Card = ({ children, className, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={clsx(
                "bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6",
                "hover:border-white/10 hover:bg-surface/80 hover:shadow-xl transition-all duration-300 group",
                "relative overflow-hidden",
                className
            )}
            onClick={onClick}
        >
            {/* Subtle gradient blob on hover */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Content wrapper to stay above the blob */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
