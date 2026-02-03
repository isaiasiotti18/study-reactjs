/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import {
  selectItemsCount,
  useShoppingCartStore,
} from '@/stores/shoppingCart.store'
import { Link, useMatchRoute } from '@tanstack/react-router'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  const itemsCount = useShoppingCartStore(selectItemsCount)

  const mathRoute = useMatchRoute()
  const isShoppingCartRoute = mathRoute({ to: '/shopping-cart', fuzzy: false })

  return (
    <>
      <header className="p-6 pr-10 flex flex-row items-center justify-end bg-gray-800 text-white shadow-lg gap-10">
        {isShoppingCartRoute ? (
          <Link className="text-neutral-50 font-bold" to="/">
            Produtos
          </Link>
        ) : (
          <Link
            className="text-neutral-50 font-bold relative"
            to="/shopping-cart"
          >
            <ShoppingCart size={28} />

            {itemsCount > 0 && (
              <span
                className="absolute -top-2 -right-2 min-w-[18px] h-[18px]
              bg-red-600 text-white text-xs font-bold rounded-full
              flex items-center justify-center"
              >
                {itemsCount}
              </span>
            )}
          </Link>
        )}
      </header>
    </>
  )
}
