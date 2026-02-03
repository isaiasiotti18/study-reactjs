import { PlusSquare, SquareMinus, Trash2 } from 'lucide-react'
import type { Product } from '@/stores/shoppingCart.store'
import { useShoppingCartStore } from '@/stores/shoppingCart.store'

export type ProductListItemProps = {
  product: Product
  quantity: number
}

const ProductListItem = ({ product, quantity }: ProductListItemProps) => {
  const removeProduct = useShoppingCartStore((state) => state.removeProduct)

  const increaseProduct = useShoppingCartStore(
    (state) => state.increaseQuantity,
  )
  const decreaseProduct = useShoppingCartStore(
    (state) => state.decreaseQuantity,
  )

  const handleRemoveProduct = () => removeProduct(product.id)

  const handleIncreaseProduct = () => increaseProduct(product.id)

  const handleDecreaseProduct = () => decreaseProduct(product.id)

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Left: Image + Info */}
      <div className="flex items-center gap-4">
        <img
          src={product.imageUrl}
          alt="Product"
          className="w-20 h-20 rounded-md object-cover"
        />

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500">{product.description}</p>

          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-5">
              {/* Price and Quantity */}
              <div>
                <span className="text-sm font-bold text-gray-900">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.price)}{' '}
                  |{' '}
                </span>

                <span className="text-sm font-bold text-gray-500">
                  Qtd: {quantity}{' '}
                </span>

                {/* Total */}
                <span className="text-sm font-bold text-gray-900">
                  | Total:{' '}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.price * quantity)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-row gap-2 items-center justify-center align-middle">
              <button onClick={handleIncreaseProduct}>
                <PlusSquare size={18} />
              </button>

              <button onClick={handleDecreaseProduct}>
                <SquareMinus size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <button
        onClick={handleRemoveProduct}
        className="text-red-600 hover:text-red-700 transition-colors cursor-pointer"
        aria-label="Remover produto"
      >
        <Trash2 size={18} />
      </button>
    </div>
  )
}

export default ProductListItem
