import {
  selectTotalPrice,
  useShoppingCartStore,
} from '@/stores/shoppingCart.store'

const TotalShoppingCart = () => {
  const totalPrice = useShoppingCartStore(selectTotalPrice)

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <span className="text-sm font-medium text-gray-600">
        Total do carrinho
      </span>

      <span className="text-lg font-bold text-gray-900">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(totalPrice)}
      </span>
    </div>
  )
}

export default TotalShoppingCart
