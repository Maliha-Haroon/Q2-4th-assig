import StudentCard from './studentcard/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      
      
      <StudentCard
        name="Hassan"
        age={23}
        rollNumber="42478"
        Slot="Monday 2-5"
        image="https://randomuser.me/api/portraits/men/4.jpg"
      />
      <StudentCard
        name="Huzaifa"
        age={26}
        rollNumber="03456"
        Slot="Monday 2-5"
        image="https://randomuser.me/api/portraits/men/10.jpg
"
      />
      <StudentCard
        name="Uzair Ahmed"
        age={20}
        rollNumber="037503"
        Slot="Friday 9-12"
        image="https://randomuser.me/api/portraits/men/45.jpg"
      />
      
    </div>
  );
}
