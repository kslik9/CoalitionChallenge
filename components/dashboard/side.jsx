import { UserButton } from "@clerk/nextjs"
import { navigation, navsFooter } from "@/components/navigation"
import Link from "next/link"

export default function Side() {
  return (
    <div className="flex flex-col h-full px-4">
      <div className="h-20 flex items-center pl-2">
        <UserButton />
      </div>
      <div className="overflow-auto">
        <ul className="text-sm font-medium flex-1">
          {navigation.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                <div className="text-gray-500">{item.icon}</div>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-2 mt-2 border-t">
          <ul className="text-sm font-medium">
            {navsFooter.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                  <div className="text-gray-500">{item.icon}</div>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
