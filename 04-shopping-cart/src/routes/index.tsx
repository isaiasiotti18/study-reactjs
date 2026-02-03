import { createFileRoute } from '@tanstack/react-router'
import ProductCard from '@/components/ProductCard'
import productItems from '@/utils/product-items'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="border-1 p-12">
      <div className="border-1 h-full pl-6 pr-6 pb-6">
        <h1 className="text-2xl text-center mb-5 mt-5">
          Lista de Produtos - Coloque no Carrinho.
        </h1>

        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {productItems.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
