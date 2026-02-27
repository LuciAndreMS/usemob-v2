import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: rota inexistente acessada:", location.pathname);

    // ===== SEO: impedir indexação da página 404 =====
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setCanonical = (href: string) => {
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Title adequado
    document.title = "Página não encontrada | UseMOB";

    // Não indexar 404
    setMeta("robots", "noindex, nofollow");

    // Canonical sempre para a home
    setCanonical("https://usemob.com.br/");

  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0D12] px-6">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-5xl font-semibold text-white">404</h1>

        <p className="mb-4 text-lg text-gray-300">
          A página que você tentou acessar não foi encontrada.
        </p>

        <p className="mb-8 text-sm text-gray-500">
          Caso esteja buscando informações sobre mobilidade corporativa, transporte executivo ou soluções para sua empresa, retorne para a página inicial.
        </p>

        <Link
          to="/"
          className="inline-block rounded-md bg-[#FACC15] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#FBBF24]"
        >
          Voltar para o site
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
