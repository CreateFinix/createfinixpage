import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CreateFinix</title>
        <meta
          name="description"
          content="CreateFinix - Inovação e tecnologia para o futuro da sua empresa."
        />
        <meta name="keywords" content="tecnologia, sistemas, design, consultoria, CreateFinix" />
        <meta name="author" content="CreateFinix" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      
      <main>
        <section id="hero" className="text-center py-20 bg-blue-500 text-white">
          <h1 className="text-4xl font-bold">Inovamos para criar o futuro da sua empresa</h1>
          <p className="mt-4">Soluções tecnológicas personalizadas para transformar negócios.</p>
          <a
            href="https://wa.me/5521966311677?text=Ol%C3%A1,%20estou%20interessado%20nos%20seus%20servi%C3%A7os."
            className="mt-6 inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          >
            Fale Conosco
          </a>
        </section>

        <section id="services" className="py-20 text-center">
          <h2 className="text-3xl font-bold">Nossos Serviços</h2>
          <div className="flex justify-center space-x-10 mt-10">
            <div className="service p-6 bg-gray-100 rounded-lg shadow-md">
              <i className="fas fa-code fa-2x"></i>
              <h3 className="text-xl font-semibold mt-4">Desenvolvimento de Sistemas</h3>
              <p>Construímos sistemas robustos e sob medida.</p>
            </div>
            <div className="service p-6 bg-gray-100 rounded-lg shadow-md">
              <i className="fas fa-paint-brush fa-2x"></i>
              <h3 className="text-xl font-semibold mt-4">Design UX/UI</h3>
              <p>Experiências de usuário incríveis com design inovador.</p>
            </div>
            <div className="service p-6 bg-gray-100 rounded-lg shadow-md">
              <i className="fas fa-lightbulb fa-2x"></i>
              <h3 className="text-xl font-semibold mt-4">Consultoria Tecnológica</h3>
              <p>Integramos e otimizamos soluções tecnológicas.</p>
            </div>
          </div>
        </section>
      </main>

      </>
  );
}
