import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="header bg-grey-800 text-green p4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
	  src="/logo.svg"
	  alt="Arimma logo"
	  width={80}
	  height={80}
	  priority
	/>
        <h1 className="Text-2xl font-bold">Arimma</h1>
	<h1 className="Text-2xl font-bold">Personal</h1>
	<h1 className="Text-2xl font-bold">Business</h1>
	<h1 className="Text-2xl font-bold">Company</h1>
      </div>
      </header>
    
      <main className="main my-8">
        <h2 className="text-xl font-semibold"> Welcome to Arimma</h2>
	<p className="mt-4"></p>
      </main>

      <footer className="footer bg-grey-800 text-green p-4 felx justify-between">
      <p>© 2024 ARIMMA™ (Company No.). All rights reserved.

If you would like to find out more about which Arimma entity you receive services from, please reach out to us via the in-app chat in the Arimma app. Banking services offered by Tsepiso Fintech (Pty) Ltd, a subsidiary of Arimma Corporation LLC SN20241445994 in partnership with National Credit Provider: NCRCP18109 and Financial Services Provider: FSP 45133 with registered address at 107A FORREST ROAD, ATHOLL SANDTON 2196, SANDTON Gauteng.</p>
      </footer>
    </div>
  );
}
