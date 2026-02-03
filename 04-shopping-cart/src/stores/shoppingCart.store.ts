/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { create } from 'zustand'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

export type cartItem = Product & { quantity: number }

interface ShoppingCartStore {
  cartItems: Array<cartItem>
  clearCart: () => void
  addProduct: (product: Product) => void
  removeProduct: (idProduct: number) => void
  increaseQuantity: (idProduct: number) => void
  decreaseQuantity: (idProduct: number) => void
}

export const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  cartItems: [],

  clearCart: () => set({ cartItems: [] }),

  addProduct: (product: Product) =>
    set((state: ShoppingCartStore) => {
      const itemExists = state.cartItems.find((item) => item.id === product.id)

      if (itemExists) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      }
    }),

  removeProduct: (idProduct: number) =>
    set((state: ShoppingCartStore) => ({
      cartItems: state.cartItems.filter((product) => product.id !== idProduct),
    })),

  increaseQuantity: (idProduct: number) =>
    set((state: ShoppingCartStore) => ({
      cartItems: state.cartItems.map((product) =>
        product.id === idProduct
          ? { ...product, quantity: (product.quantity ?? 1) + 1 }
          : product,
      ),
    })),

  decreaseQuantity: (idProduct: number) =>
    set((state: ShoppingCartStore) => ({
      cartItems: state.cartItems
        .map((product) =>
          product.id === idProduct
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0),
    })),
}))

export const selectItemsCount = (state: ShoppingCartStore) =>
  state.cartItems.reduce((acc, item) => acc + item.quantity, 0)

export const selectTotalPrice = (state: ShoppingCartStore) =>
  state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
