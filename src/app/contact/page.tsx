export default function Contact() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <p className="mb-4">Vous souhaitez nous contacter ? Remplissez le formulaire ci-dessous ou utilisez les informations de contact.</p>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow text-black">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Nom</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Votre nom" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="Votre email" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="Votre message" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-bold">Envoyer</button>
      </form>
      <div className="mt-8 text-center">
        <div className="font-semibold">Téléphone : <span className="text-blue-700">+33 751 05 73 27</span></div>
        <div>Email : <span className="text-blue-700">hello@offshoreo.com</span></div>
        <div>Adresse : <span className="text-blue-700">Londres, Royaume-Uni</span></div>
      </div>
    </main>
  );
}
