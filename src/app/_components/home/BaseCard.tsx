import Link from 'next/link'
import { Rocket } from 'lucide-react'

interface BaseCardProps {
  name: string
  description?: string
  href: string
}

export function BaseCard({ name, description, href }: BaseCardProps) {
  return (
    <Link 
      href={href}
      className="flex w-96 rounded-lg border border-gray-200 p-6 transition-colors duration-200 hover:border-gray-300"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
          <Rocket className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
