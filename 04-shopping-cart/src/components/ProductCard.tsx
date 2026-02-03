import type { Product } from '@/stores/shoppingCart.store'
import { useShoppingCartStore } from '@/stores/shoppingCart.store'

export type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addProduct = useShoppingCartStore((state) => state.addProduct)

  const handleAddProduct = () => addProduct(product)

  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative">
        <img
          src={product.imageUrl}
          alt="Product"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900 mb-4">
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </p>

        {/* Button */}
        <button
          onClick={handleAddProduct}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 active:scale-95"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
