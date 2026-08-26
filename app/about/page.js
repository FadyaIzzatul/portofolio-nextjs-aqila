// src/app/about/page.js

import Image from 'next/image'; // Jangan lupa import!


export default function AboutPage() {

 return (

  <main className="container mx-auto px-4 py-12">

	<h1 className="font heading text-4xl font-bold text-center mb-10">Tentang Saya</h1>

	<div className="flex flex-col md:flex-row items-center gap-10">

	{/* Kolom Gambar */}

	<div className="w-48 h-48 md:w-56 md:h-56 relative flex-shrink-0">

	<Image

	src="/profile.png"

	alt="Foto Profil Budi Sanjaya"

	layout="fill"

	objectFit="cover"

	className="rounded-full shadow-lg"

	/>

	</div>

	{/* Kolom Teks */}

	<div className="text-center md:text-left">

	<p className="mb-4 text-lg">

	Halo! Nama saya Haikal Seventino Tamba. Saya adalah seorang mahasiswa yang memiliki ketertarikan untuk belajar, mencoba hal-hal baru, dan mengembangkan berbagai kemampuan. Saya senang mengeksplorasi berbagai hal dan menjadikan setiap pengalaman sebagai kesempatan untuk terus berkembang. 


	</p>

	<p className="text-lg">

	Saya selalu berusaha untuk meningkatkan kemampuan melalui berbagai proyek, pengalaman, dan 
proses belajar. Bagi saya, setiap tantangan merupakan kesempatan untuk mendapatkan pengalaman baru dan menjadi lebih baik dari sebelumnya. 


	</p>

	</div>

	</div>

  </main>

 );

}
