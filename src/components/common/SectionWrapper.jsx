import { motion } from 'framer-motion';
import clsx from 'clsx';

const SectionWrapper = ({ children, id, className }) => {
    return (
        <section id={id} className={clsx("py-20 md:py-32 relative z-10", className)}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
