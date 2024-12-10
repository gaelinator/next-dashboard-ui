import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">l</div>
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student"/>
          <UserCard type="teacher"/>
          <UserCard type="parent"/>
          <UserCard type="staff"/>
        </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default AdminPage