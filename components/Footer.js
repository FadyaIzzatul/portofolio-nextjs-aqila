// src/components/Footer.js  
export default function Footer() {
 const currentYear = new Date().getFullYear();

 return (
  <footer className="bg-primary text-gray-300 p-4 mt-auto">
	<div className="container mx-auto text-center">
	<p>&copy; {currentYear} Aqila Tiara Hafizta. Semoga bermanfaat!</p>
	</div>
  </footer>
 );
}
