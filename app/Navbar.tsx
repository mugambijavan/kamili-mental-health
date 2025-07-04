    'use client';

    import Link from 'next/link';
    import { useState, useEffect } from 'react';
    import { FaBars, FaTimes } from 'react-icons/fa';
    import { usePathname } from 'next/navigation';
    import { motion, AnimatePresence } from 'framer-motion';
    import Image from 'next/image';

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
        closed: { opacity: 0, y: '-20%' },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, ease: 'easeOut' },
        }),
    };

    return (
        <>
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
            scrolling
                ? 'h-16 bg-white shadow-lg'
                : 'h-20 bg-transparent'
            }`}
        >
            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-full">
                {/* Logo */}
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="flex items-center"
                >
                <Link href="/">
                    <Image
                    src="/logo.avif"
                    alt="Kamili Organization Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                    />
                </Link>
                <Link
                    href="/"
                    className="ml-3 text-blue-800 text-xl md:text-2xl font-bold tracking-tight hover:text-blue-600 transition-colors"
                >
                    Kamili.org
                </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4 h-full items-center">
                {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        variants={linkVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                        href={link.href}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            isActive
                            ? 'bg-blue-800 text-white font-semibold'
                            : 'text-blue-800 hover:bg-blue-100'
                        }`}
                        >
                        {link.label}
                        </Link>
                    </motion.div>
                    );
                })}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                onClick={toggleMenu}
                className="md:hidden text-blue-800 p-2 rounded-lg hover:bg-blue-100 transition-colors"
                aria-label="Toggle navigation menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </motion.button>
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
                className="fixed inset-0 z-40 bg-white shadow-lg md:hidden pt-20"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                        <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.2 }}
                        >
                        <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-6 py-3 rounded-xl text-lg transition-all ${
                            isActive
                                ? 'bg-blue-800 text-white font-bold'
                                : 'text-blue-800 hover:bg-blue-100'
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