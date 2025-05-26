import { Bell, Menu, User, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-[#ffffff] px-4 py-4 flex items-center justify-between shadow-sm">
        <Button variant="ghost" size="icon" className="p-0">
          <Menu className="h-6 w-6 text-[#000000]" />
        </Button>

        <h1 className="text-lg font-medium text-[#000000]">My Bookings</h1>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="p-0">
            <Bell className="h-6 w-6 text-[#6a737d]" />
          </Button>
          <Button variant="ghost" size="icon" className="p-0">
            <User className="h-6 w-6 text-[#6a737d]" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="mb-6">
          <h2 className="text-[#6a737d] text-base font-normal leading-relaxed">
            Today's Parking
            <br />
            Availability
          </h2>
        </div>

        {/* Parking Card */}
        <div className="bg-[#ffffff] rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-[#6a737d]" />
              <span className="text-[#6a737d] text-base font-normal">Dell HQ Office</span>
            </div>

            <div className="flex items-center justify-center w-10 h-10 bg-[#f15614] rounded-full">
              <div className="flex items-center gap-1">
                <span className="text-[#ffffff] text-xs font-medium">P</span>
                <span className="text-[#ffffff] text-lg font-semibold">40</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
