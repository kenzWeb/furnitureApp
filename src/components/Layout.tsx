import {AnimatePresence, motion} from 'framer-motion'
import {
	Grid,
	Home,
	Menu,
	Moon,
	Phone,
	Search,
	ShoppingCart,
	Sofa,
	Sun,
	X,
} from 'lucide-react'
import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useCartStore} from '../store/cartStore'
import {useSearchStore} from '../store/searchStore'
import {useThemeStore} from '../store/themeStore'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
	const location = useLocation()
	const navigate = useNavigate()
	const {isDark, toggleTheme} = useThemeStore()
	const cartItems = useCartStore((state) => state.items)
	const {searchQuery, setSearchQuery} = useSearchStore()
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	const [isSearchOpen, setIsSearchOpen] = React.useState(false)

	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

	const navLinks = [
		{path: '/', icon: Home, label: 'Home'},
		{path: '/catalog', icon: Grid, label: 'Catalog'},
		{path: '/living-room', icon: Sofa, label: 'Living Room'},
		{path: '/contact', icon: Phone, label: 'Contact'},
	]

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
		if (searchQuery.trim()) {
			navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`)
			setIsSearchOpen(false)
		}
	}

	return (
		<div
			className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}
		>
			<header className='fixed w-full z-50'>
				<div className='bg-white/75 dark:bg-gray-900/75 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800'>
					<div className='max-w-7xl mx-auto'>
						<div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
							<div className='flex items-center'>
								<button
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 md:hidden'
								>
									<Menu className='w-6 h-6' />
								</button>
								<Link to='/' className='flex items-center space-x-2'>
									<Sofa className='w-8 h-8 text-indigo-600 dark:text-indigo-400' />
									<span className='text-xl font-bold text-gray-900 dark:text-white'>
										LuxFurniture
									</span>
								</Link>
							</div>

							<nav className='hidden md:flex items-center space-x-8'>
								{navLinks.map((link) => (
									<Link
										key={link.path}
										to={link.path}
										className='flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
									>
										<link.icon className='w-4 h-4' />
										<span>{link.label}</span>
									</Link>
								))}
							</nav>

							<div className='flex items-center space-x-4'>
								<button
									onClick={() => setIsSearchOpen(true)}
									className='p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
								>
									<Search className='w-5 h-5' />
								</button>
								<Link
									to='/cart'
									className='p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 relative'
								>
									<ShoppingCart className='w-5 h-5' />
									{totalItems > 0 && (
										<span className='absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
											{totalItems}
										</span>
									)}
								</Link>
								<button
									onClick={toggleTheme}
									className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
								>
									{isDark ? (
										<Sun className='w-5 h-5' />
									) : (
										<Moon className='w-5 h-5' />
									)}
								</button>
							</div>
						</div>
					</div>
				</div>

				<AnimatePresence>
					{isSearchOpen && (
						<motion.div
							initial={{opacity: 0, y: -20}}
							animate={{opacity: 1, y: 0}}
							exit={{opacity: 0, y: -20}}
							className='absolute inset-x-0 top-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'
						>
							<div className='max-w-7xl mx-auto px-4 py-4'>
								<form onSubmit={handleSearch} className='relative'>
									<input
										type='text'
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										placeholder='Search for furniture...'
										className='w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
										autoFocus
									/>
									<Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
									<button
										type='button'
										onClick={() => setIsSearchOpen(false)}
										className='absolute right-4 top-1/2 -translate-y-1/2'
									>
										<X className='w-5 h-5 text-gray-400' />
									</button>
								</form>
							</div>
						</motion.div>
					)}

					{isMenuOpen && (
						<motion.div
							initial={{opacity: 0, height: 0}}
							animate={{opacity: 1, height: 'auto'}}
							exit={{opacity: 0, height: 0}}
							className='md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'
						>
							<div className='px-4 py-2 space-y-1'>
								{navLinks.map((link) => (
									<Link
										key={link.path}
										to={link.path}
										className='flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
										onClick={() => setIsMenuOpen(false)}
									>
										<link.icon className='w-4 h-4' />
										<span>{link.label}</span>
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			<main className='pt-16'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={location.pathname}
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -20}}
						transition={{duration: 0.3}}
					>
						{children}
					</motion.div>
				</AnimatePresence>
			</main>

		</div>
	)
}

export default Layout
