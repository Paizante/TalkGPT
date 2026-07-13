import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { address } from '@/content/site';

export default function MapLocation() {
  const query = encodeURIComponent(address.full);
  const routeUrl = `https://www.openstreetmap.org/search?query=${query}`;

  return (
    <div className="rounded-2xl border border-bronze/20 bg-beige/40 p-6">
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-evergreen">
        <Icon name="mapPin" className="h-5 w-5 text-terracotta" />
        Onde estamos
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-warm-gray">{address.full}</p>
      <p className="mt-2 text-xs text-warm-gray">
        As coordenadas exatas da sede ainda estão em confirmação — use o botão abaixo para traçar a rota pelo
        endereço.
      </p>
      <Button href={routeUrl} variant="primary" className="mt-4">
        Ver rota
      </Button>
    </div>
  );
}
