import AttendanceCharts from "@/app/components/AttendanceCharts"
import CountChart from "@/app/components/CountChart"
import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">l
        {/* USER CARD */}
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="Student"/>
            <UserCard type="teacher"/>
            <UserCard type="parent"/>
            <UserCard type="staff"/>
          </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHARTS */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceCharts />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="div"></div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default AdminPage