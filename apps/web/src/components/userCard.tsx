import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type User = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
}

export function UserCard({ user }: { user: User }) {
  const { name, email, role, status } = user

  const statusColor = status === "active" ? "text-green-600" : "text-red-600"
  const statusLabel = status === "active" ? "🟢 Active" : "🔴 Inactive"

  return (
    <Card className="w-full max-w-sm rounded-2xl border shadow-lg ">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        {/* <CardDescription className={`text-sm ${statusColor}`}>
          {role} • {statusLabel}
        </CardDescription> */}
      </CardHeader>

      <CardContent className="text-sm space-y-3">
        <div className="grid gap-1">
          <span className="text-muted-foreground font-medium">Email</span>
          <p className="truncate">{email}</p>
        </div>
        {/* <div className="grid gap-1">
          <span className="text-muted-foreground font-medium">Role</span>
          <p>{role}</p>
        </div> */}
      </CardContent>

      <CardFooter className="flex justify-end gap-2 pt-4">
        <Button variant="outline" size="lg" className="font-bold bg-indigo-400 hover:bg-indigo-700 hover:text-white text-white">
          Edit
        </Button>
        <Button variant="destructive" size="sm" className="font-bold bg-red-500">
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
