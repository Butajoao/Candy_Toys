import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-surface-warm py-24">
      <Container className="text-center">
        <h1 className="font-display text-5xl font-black text-brand-navy">Pagina nao encontrada</h1>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          O caminho solicitado nao existe. Acesse os produtos ou solicite o catalogo B2B.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/produtos" variant="dark">
            Ver produtos
          </Button>
          <Button href="/catalogo-b2b" variant="secondary">
            Catalogo B2B
          </Button>
        </div>
      </Container>
    </section>
  );
}
