import Card from "../others/Card"

const navigation = [
  { name: "Upload", desc: "Get started", img: "/verif.png", href: "#" },
  { name: "Verify", desc: "Find your next profile", img: "/verif.png", href: "#" },
  { name: "Manage", desc: "Get into your account", img: "/verif.png", href: "#" },
]

export default function Grids() {
  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {navigation.map((item) => (
          <div key={item.href}>
            <Card key={item.href} title={item.name} img={item.img} desc={item.desc} />
          </div>
        ))}
      </div>
    </div>
  )
}
