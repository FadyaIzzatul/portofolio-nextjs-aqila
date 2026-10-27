// src/app/page.js

import Image from 'next/image'; // Import komponen Image



export default function HomePage() {

 return (

  <main className="container mx-auto px-4 py-8">

	{/* Secara default (mobile): flex-col (bertumpuk)

	Mulai dari layar medium (md): flex-row (sejajar)

	*/}

	<div className="flex flex-col md:flex-row items-center justify-center gap-10">

	{/* Kolom Gambar */}

	<div className="w-48 h-48 md:w-64 md:h-64 relative">

	<Image

	src="/download.jpg" // Mengambil gambar dari folder public
	alt="Foto Aqila Tiara Hafizta"

	layout="fill"

	objectFit="cover"

	className="rounded-full shadow-lg"

	/>

	</div>


	{/* Kolom Teks */}

	{/* Secara default (mobile): text-center

	Mulai dari layar medium (md): text-left

	*/}

	<div className="text-center md:text-left">

	<h1 className="font headingtext-4xl md:text-5xl font-extrabold mb-2">

	Aqila Tiara Hafizta

	</h1>

	<p className="text-lg md:text-xl text-gray-600">


	Siswi | TKJ | SMK N 1 Negri Katon

	</p>

	<p className="max-w-xl mt-4">

	Website portofolio ini saya buat sebagai sarana untuk memperkenalkan diri, menampilkan proyek yang telah dikerjakan, serta mengabadikan pengalaman dan perjalanan belajar saya. Selain itu, website ini menjadi wadah untuk mengumpulkan berbagai hasil karya dan pengetahuan yang telah saya peroleh. Ke depannya, saya ingin terus meningkatkan kemampuan, mengeksplorasi hal-hal baru, dan menciptakan karya yang semakin baik.

	</p>

	</div>
	</div>

  </main>

 );

}