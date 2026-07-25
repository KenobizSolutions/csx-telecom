/**
 * Icônes du site — jeu vectoriel unique (lucide-react).
 *
 * Remplace les emoji utilisés auparavant comme icônes : ceux-ci s'affichaient
 * différemment selon le système (iOS / Android / Windows) et juraient avec la
 * charte. Ici, un seul trait, une seule couleur (currentColor : la teinte se
 * règle sur le conteneur), rendu identique partout.
 *
 * Usage : les pages stockent un nom sémantique (`icon: "phone"`) et le rendent
 * via <Icon name={item.icon} className="h-6 w-6" />.
 */
import {
  AlertTriangle,
  Bot,
  Building2,
  Cable,
  Calendar,
  CheckCircle2,
  Clock,
  Cloud,
  Globe,
  Headset,
  HelpCircle,
  Lightbulb,
  Link2,
  Lock,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  RefreshCw,
  Satellite,
  ShieldCheck,
  Signal,
  Smartphone,
  Sprout,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";

const ICONS = {
  phone: Phone,           // standard téléphonique
  headset: Headset,       // accueil / support
  globe: Globe,           // internet
  bot: Bot,               // agents IA
  cloud: Cloud,           // téléphonie cloud
  smartphone: Smartphone, // mobilité / softphone
  growth: TrendingUp,     // évolutivité
  shield: ShieldCheck,    // sécurité / qualité opérateur
  lock: Lock,             // pare-feu, confidentialité
  refresh: RefreshCw,     // portage sans coupure
  mappin: MapPin,         // zone géographique
  building: Building2,    // siège / accueil d'entreprise
  calendar: Calendar,     // prise de rendez-vous
  mail: Mail,             // e-mail
  target: Target,         // sur-mesure / qualification
  link: Link2,            // multi-opérateur, MPLS
  network: Network,       // réseau inter-sites
  fiber: Cable,           // fibre dédiée / FTTO
  antenna: RadioTower,    // SDSL / ADSL pro
  signal: Signal,         // 4G / 5G
  satellite: Satellite,   // Starlink
  idea: Lightbulb,        // conseil
  sprout: Sprout,         // vision long terme
  help: HelpCircle,       // FAQ
  warning: AlertTriangle, // alerte (fin du cuivre)
  clock: Clock,           // horaires
  timer: Timer,           // temps de lecture
  check: CheckCircle2,    // confirmation
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name as IconName] ?? HelpCircle;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden="true" />;
}
