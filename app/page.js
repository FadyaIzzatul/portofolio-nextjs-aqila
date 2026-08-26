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

	src="/profile.png" // Mengambil gambar dari folder public
	alt="Foto Profil Budi Sanjaya"

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

	Haikal Seventino Tamba

	</h1>

	<p className="text-lg md:text-xl text-gray-600">


	Mahasiswa | Sains Data | Institut Teknologi Sumatera

	</p>

	<p className="max-w-xl mt-4">

	Ini adalah website portofolio pribadi saya yang saya gunakan untuk memperkenalkan diri, menampilkan berbagai proyek, serta mendokumentasikan pengalaman dan proses belajar selama menjadi mahasiswa. Website ini juga menjadi tempat bagi saya untuk menyimpan berbagai hasil pekerjaan dan hal-hal yang telah saya pelajari. Seiring berjalannya waktu, saya berharap dapat terus mengembangkan kemampuan, mencoba hal-hal baru, dan menghasilkan karya yang lebih baik. 

	</p>

	</div>
	</div>

  </main>

 );

}