import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 border-4 border-white p-8 rounded-2xl shadow-2xl w-[600px]">
        {/* หัวบัตร */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-blue-900 leading-tight tracking-wide">
            มหาวิทยาลัยทักษิณ
          </h1>
          <h2 className="text-base font-semibold text-blue-600 -mt-1 tracking-wide">
            THAKSIN UNIVERSITY
          </h2>
          <div className="mx-auto mt-2 w-20 h-1 bg-blue-500 rounded"></div>
        </div>

        {/* เนื้อหาหลัก รูปภาพ + ข้อมูล */}
        <div className="flex items-center space-x-8">
          {/* รูปนักศึกษา */}
          <div className="flex-shrink-0">
            <Image
              src="https://img5.pic.in.th/file/secure-sv1/652021.jpg"
              alt="Student"
              width={120}
              height={120}
              className="rounded-xl border-2 border-blue-400 shadow-md"
              unoptimized
            />
          </div>

          {/* ข้อมูลนักศึกษา */}
          <div className="space-y-3 text-gray-900 text-sm font-medium">
            <p>
              <span className="font-semibold text-blue-700">ชื่อ:</span> ปัญจพล จันทโร
            </p>
            <p>
              <span className="font-semibold text-blue-700">รหัสนักศึกษา:</span> 652021061
            </p>
            <p>
              <span className="font-semibold text-blue-700">คณะ:</span> วิทยาศาสตร์และนวัตกรรมดิจิทัล
            </p>
            <p>
              <span className="font-semibold text-blue-700">สาขา:</span> วิทยาการคอมพิวเตอร์
            </p>
            <p>
              <span className="font-semibold text-blue-700">ปีการศึกษา:</span> 2565
            </p>
          </div>
        </div>

        {/* แถบล่าง (ถ้าต้องการ) */}
        <div className="mt-8 text-center text-xs text-blue-600 font-light tracking-wide">
          © 2565 Thaksin University. All rights reserved.
        </div>
      </div>
    </div>
  );
}
