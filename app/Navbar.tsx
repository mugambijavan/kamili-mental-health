    'use client';

    import Link from 'next/link';
    import { useState, useEffect } from 'react';
    import { FaBars, FaTimes } from 'react-icons/fa';
    import { usePathname } from 'next/navigation';
    import { motion, AnimatePresence } from 'framer-motion';

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => setScrolling(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/programs', label: 'Programs' },
        { href: '/get-involved', label: 'Get Involved' },
        { href: '/success-stories', label: 'Success Stories' },
        { href: '/news-events', label: 'News & Events' },
        { href: '/contact', label: 'Contact' },
        { href: '/donate', label: 'Donate' },
    ];

    const mobileMenuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: '-100%' },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 }
        }),
    };

    return (
        <>
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
            scrolling ? 'h-16 bg-blue-800 shadow-lg' : 'h-20 bg-blue-600'
            }`}
        >
            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-full">
                {/* Logo */}
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                <Link
                    href="/"
                    className="text-white text-xl md:text-2xl font-bold tracking-tight hover:text-blue-100 transition-colors"
                >
                    Kamili Organization
                </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-4 h-full items-center">
                {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        variants={linkVariants}
                    >
                        <Link
                        href={link.href}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            isActive
                            ? 'bg-white text-blue-600 font-semibold'
                            : 'text-white hover:bg-white/10 hover:scale-105'
                        }`}
                        >
                        {link.label}
                        </Link>
                    </motion.div>
                    );
                })}
                </div>

                {/* Mobile Menu Button */}
                <button
                onClick={toggleMenu}
                className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
                >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="fixed inset-0 z-40 bg-blue-700 lg:hidden pt-20"
            >
                <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                        <motion.div
                        key={index}
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        >
                        <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-6 py-3 rounded-xl text-lg transition-all ${
                            isActive
                                ? 'bg-white text-blue-600 font-bold'
                                : 'text-white hover:bg-white/20'
                            }`}
                        >
                            {link.label}
                        </Link>
                        </motion.div>
                    );
                    })}
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        {/* Spacer */}
        <div className={`transition-all duration-300 ${scrolling ? 'pt-16' : 'pt-20'}`} />
        </>
    );
    };

    export default Navbar;