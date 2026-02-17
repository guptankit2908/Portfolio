import { motion } from 'framer-motion';
import clsx from 'clsx';

const AnimatedHeading = ({ title, subtitle, className, center = false }) => {
    return (
        <div className={clsx("mb-12", center && "text-center", className)}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent font-medium tracking-wider uppercase text-sm mb-2 block"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-400"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={clsx(
                    "h-1 bg-linear-to-r from-primary to-accent mt-4 rounded-full",
                    center ? "mx-auto" : ""
                )}
            />
        </div>
    );
};

export default AnimatedHeading;
