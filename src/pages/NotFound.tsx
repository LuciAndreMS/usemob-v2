import { Link, useLocation } from "react-router-dom";
import Seo from "@/seo/Seo";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Seo
        title="Página não encontrada | UseMOB"
        description="A página solicitada não foi encontrada. Retorne para a página inicial e solicite uma proposta corporativa."
        canonicalPath="/"
        robots="noindex, nofollow"
      />

      <div className="flex min-h-screen items-center justify-center bg-[#0B0D12] px-6">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-5xl font-semibold text-white">404</h1>

          <p className="mb-3 text-lg text-gray-300">A página não foi encontrada.</p>

          <p className="mb-8 text-sm text-gray-500">
            Rota acessada: <span className="text-gray-400">{location.pathname}</span>
          </p>

          <Link
            to="/"
            className="inline-block rounded-md bg-[#FACC15] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#FBBF24]"
          >
            Voltar para o site
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
