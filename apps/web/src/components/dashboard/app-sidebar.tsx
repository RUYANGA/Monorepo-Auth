import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings} from "lucide-react"

const items = [
  {
    title: "Home",
    url: "/dashboard/user",
    icon: Home,
  },
  {
    title: "Admin",
    url: "/dashboard/admin",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
 

export function AppSidebar() {
  return (
   <div>
     <Sidebar>
      <SidebarHeader >
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
        <SidebarGroupLabel className="text-3xl p-3 mb-4 text-violet-600">Application</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
                {items.map((item)=>(
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className="hover:bg-blue-500 hover:text-white  text-lg">
                            <a href={item.url}>
                                <item.icon/>
                                <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter>
        </SidebarFooter>
    </Sidebar>
   </div>
  )
}