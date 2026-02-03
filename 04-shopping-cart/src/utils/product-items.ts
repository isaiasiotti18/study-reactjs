import type { Product } from '@/stores/shoppingCart.store'

const productItems: Array<Product> = [
  {
    id: 1,
    name: 'Headphone Bluetooth',
    description: 'Headphone sem fio com cancelamento de ruído',
    price: 299.9,
    imageUrl:
      'https://images.unsplash.com/photo-1656259145847-81bcdac8f0f3?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Mouse Gamer',
    description: 'Mouse óptico RGB com 7 botões programáveis',
    price: 149.9,
    imageUrl:
      'https://images.unsplash.com/photo-1586349906319-48d20e9d17e5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    description: 'Teclado mecânico com switches blue',
    price: 399.9,
    imageUrl:
      'https://images.unsplash.com/photo-1636036793492-4317c9d7d9f8?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: "Monitor 24''",
    description: 'Monitor Full HD IPS 144Hz',
    price: 1299.9,
    imageUrl:
      'https://images.unsplash.com/photo-1637946811752-4835a353847d?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Cadeira Gamer',
    description: 'Cadeira ergonômica com ajuste de altura',
    price: 1899.9,
    imageUrl:
      'https://images.unsplash.com/photo-1690527425856-43307d16d5d3?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default productItems
