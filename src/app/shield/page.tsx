import './index.css';

export default function Shield() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center items-center bg-red-600 rounded-full w-[350px] h-[350px]">
        <div className="flex justify-center items-center bg-white rounded-full w-[290px] h-[290px]">
          <div className="flex justify-center items-center bg-red-600 rounded-full w-[240px] h-[240px]">
            <div className="flex justify-center items-center bg-blue-700 rounded-full w-[180px] h-[180px]">
              <div className="star rotate-180 border-white" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}