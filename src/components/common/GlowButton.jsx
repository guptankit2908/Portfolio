import { motion } from 'framer-motion';
import clsx from 'clsx';

const ButtonContent = ({ icon: Icon, children, isPrimary }) => (
    <>
        <span className="relative z-10 flex items-center gap-2">
            {Icon && <Icon className="text-lg" />}
            {children}
        </span>
        {isPrimary && (
            <div className="absolute inset-0 bg-linear-to-r from-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        )}
    </>
);

const GlowButton = ({ children, onClick, href, className, variant = 'primary', icon: Icon, ...props }) => {
    const isPrimary = variant === 'primary';

    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 transform shadow-lg overflow-hidden group";

    const variants = {
        primary: "bg-linear-to-r from-primary to-secondary text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-transparent",
        secondary: "bg-surface text-white border border-white/10 hover:border-white/30 hover:bg-white/5 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    };

    if (href) {
        return (
            <motion.a
                href={href}
                onClick={onClick}
                className={clsx(baseStyles, variants[variant], className)}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                <ButtonContent icon={Icon} isPrimary={isPrimary}>{children}</ButtonContent>
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={clsx(baseStyles, variants[variant], className)}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            <ButtonContent icon={Icon} isPrimary={isPrimary}>{children}</ButtonContent>
        </motion.button>
    );
};

export default GlowButton;
