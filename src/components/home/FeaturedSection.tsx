import {motion} from 'framer-motion'
import React from 'react'
import {Product} from '../../types'
import FeaturedProduct from './FeaturedProduct'

interface FeaturedSectionProps {
	products: Product[]
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({products}) => {
	return (
		<section className='py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.8}}
					viewport={{once: true}}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4'>
						Featured Products
					</h2>
					<p className='text-gray-600 dark:text-gray-400'>
						Our most popular pieces, chosen by our customers
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{products.map((product, index) => (
						<FeaturedProduct key={product.id} product={product} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturedSection
