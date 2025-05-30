import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { products } from "@/lib/products"

export default function Home() {
  // Get the first two products for the featured section
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="h-8 w-full pt-1 flex justify-center bg-blue-600"><p className="text-white font-bold">Descontos Exclusivos de Março!</p></div>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Agora é sua vez de <br /> 
                  crescer e florescer🦋
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg py-5">
                  Ferramentas digitais que ajudam você
                  <br />
                  a organizar sua vida, aumentar sua
                  <br />
                  produtividade e nutrir seu bem-estar.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/products">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">Sobre a Glow</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Produtos em Destaque</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discubra nossas ferramentas mais populares <br />
                  para potencializar seu dia a dia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-8">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`} className="group">
                  <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                    <div className="aspect-video relative">
                      <Image
                        src={product.mainImage || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.category[0]}</p>
                      <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center align-middle justify-left">
                        <p className="text-xl font-bold text-blue-600 mt-1">R${product.price}</p>
                        <p className="font-bold line-through text-gray-500 mx-2 mt-1">R${product.price + 5}</p>
                      </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full hover:bg-blue-700 hover:text-blue-50 border-blue-700 text-bold text-blue-700"
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Compre Agora
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700"
              >
                <Link href="/products">Ver todos os Produtos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials section is commented out in the original code */}
      </main>
    </div>
  )
}

const testimonials = [
  {
    text: "The daily planner has completely transformed how I organize my day. I feel more productive and less stressed!",
    name: "Sarah Johnson",
    title: "Marketing Manager",
  },
  {
    text: "I love the self-care calendar. It reminds me to take time for myself every day, which has been life-changing.",
    name: "Emily Chen",
    title: "Graphic Designer",
  },
]

