import { StaticImageData } from "next/image";

import BlueBay1 from "@/assets/art/BlueBay/1.png";
import BlueBay2 from "@/assets/art/BlueBay/2.png";
import BlueBay3 from "@/assets/art/BlueBay/3.png";
import BlueBay4 from "@/assets/art/BlueBay/4.png";
import CaveView1 from "@/assets/art/CAVE_VIEW/1.png";
import CaveView2 from "@/assets/art/CAVE_VIEW/2.png";
import CaveView3 from "@/assets/art/CAVE_VIEW/3.png";
import CaveView4 from "@/assets/art/CAVE_VIEW/4.png";
import ChromaBurst1 from "@/assets/art/CHROMA/1.png";
import ChromaBurst2 from "@/assets/art/CHROMA/2.png";
import ChromaBurst3 from "@/assets/art/CHROMA/3.png";
import ChromaBurst4 from "@/assets/art/CHROMA/4.png";
import DriftsOfAmethyst1 from "@/assets/art/DRIFTS/1.png";
import DriftsOfAmethyst2 from "@/assets/art/DRIFTS/2.png";
import DriftsOfAmethyst3 from "@/assets/art/DRIFTS/3.png";
import DriftsOfAmethyst4 from "@/assets/art/DRIFTS/4.png";
import EmberGlimmer1 from "@/assets/art/EMBER/1.png";
import EmberGlimmer2 from "@/assets/art/EMBER/2.png";
import EmberGlimmer3 from "@/assets/art/EMBER/3.png";
import EmberGlimmer4 from "@/assets/art/EMBER/4.png";
import FlowingSandscape1 from "@/assets/art/FLOWING/1.png";
import FlowingSandscape2 from "@/assets/art/FLOWING/2.png";
import FlowingSandscape3 from "@/assets/art/FLOWING/3.png";
import FlowingSandscape4 from "@/assets/art/FLOWING/4.png";
import GoldenJourney1 from "@/assets/art/GOLDEN_JOURNEY/1.png";
import GoldenJourney2 from "@/assets/art/GOLDEN_JOURNEY/2.png";
import GoldenJourney3 from "@/assets/art/GOLDEN_JOURNEY/3.png";
import GoldenJourney4 from "@/assets/art/GOLDEN_JOURNEY/4.png";
import GreenJourney1 from "@/assets/art/GREEN_JOYRNEY/1.png";
import GreenJourney2 from "@/assets/art/GREEN_JOYRNEY/2.png";
import GreenJourney3 from "@/assets/art/GREEN_JOYRNEY/3.png";
import GreenJourney4 from "@/assets/art/GREEN_JOYRNEY/4.png";
import Opensea1 from "@/assets/art/OPENSEA/1.png";
import Opensea2 from "@/assets/art/OPENSEA/2.png";
import Opensea3 from "@/assets/art/OPENSEA/3.png";
import Opensea4 from "@/assets/art/OPENSEA/4.png";
import ShorelineImpasto1 from "@/assets/art/SHORE/1.png";
import ShorelineImpasto2 from "@/assets/art/SHORE/2.png";
import ShorelineImpasto3 from "@/assets/art/SHORE/3.png";
import ShorelineImpasto4 from "@/assets/art/SHORE/4.png";
import TactileSerenity1 from "@/assets/art/TACT/1.png";
import TactileSerenity2 from "@/assets/art/TACT/2.png";
import TactileSerenity3 from "@/assets/art/TACT/3.png";
import TactileSerenity4 from "@/assets/art/TACT/4.png";
import RedHorizon1 from "@/assets/art/redhorizon/1.png";
import RedHorizon2 from "@/assets/art/redhorizon/2.png";
import RedHorizon3 from "@/assets/art/redhorizon/3.png";
import RedHorizon4 from "@/assets/art/redhorizon/4.png";

interface ArtItem {
  slug: string;
  name: string;
  images: {
    main: StaticImageData;
    other1: StaticImageData;
    other2: StaticImageData;
    other3: StaticImageData;
  };
}

export const ART_ITEMS: ArtItem[] = [
  {
    name: "Chroma Burst",
    slug: "chroma-burst",
    images: {
      main: ChromaBurst1,
      other1: ChromaBurst2,
      other2: ChromaBurst3,
      other3: ChromaBurst4,
    },
  },
  {
    name: "Red Horizon",
    slug: "red-horizon",
    images: {
      main: RedHorizon1,
      other1: RedHorizon2,
      other2: RedHorizon3,
      other3: RedHorizon4,
    },
  },
  {
    name: "Ember Glimmer",
    slug: "ember-glimmer",
    images: {
      main: EmberGlimmer1,
      other1: EmberGlimmer2,
      other2: EmberGlimmer3,
      other3: EmberGlimmer4,
    },
  },
  {
    name: "Cave View",
    slug: "cave-view",
    images: {
      main: CaveView1,
      other1: CaveView2,
      other2: CaveView3,
      other3: CaveView4,
    },
  },
  {
    name: "Drifts of Amethyst",
    slug: "drifts-of-amethyst",
    images: {
      main: DriftsOfAmethyst1,
      other1: DriftsOfAmethyst2,
      other2: DriftsOfAmethyst3,
      other3: DriftsOfAmethyst4,
    },
  },
  {
    name: "Tactile Serenity",
    slug: "tactile-serenity",
    images: {
      main: TactileSerenity1,
      other1: TactileSerenity2,
      other2: TactileSerenity3,
      other3: TactileSerenity4,
    },
  },
  {
    name: "Sunset Journey",
    slug: "sunset-journey",
    images: {
      main: GoldenJourney1,
      other1: GoldenJourney2,
      other2: GoldenJourney3,
      other3: GoldenJourney4,
    },
  },
  {
    name: "Green Journey",
    slug: "green-journey",
    images: {
      main: GreenJourney1,
      other1: GreenJourney2,
      other2: GreenJourney3,
      other3: GreenJourney4,
    },
  },
  {
    name: "Blue Bay",
    slug: "blue-bay",
    images: {
      main: BlueBay1,
      other1: BlueBay2,
      other2: BlueBay3,
      other3: BlueBay4,
    },
  },
  {
    name: "Opensea",
    slug: "opensea",
    images: {
      main: Opensea1,
      other1: Opensea2,
      other2: Opensea3,
      other3: Opensea4,
    },
  },
  {
    name: "Shoreline Impasto",
    slug: "shoreline-impasto",
    images: {
      main: ShorelineImpasto1,
      other1: ShorelineImpasto2,
      other2: ShorelineImpasto3,
      other3: ShorelineImpasto4,
    },
  },
  {
    name: "Flowing Sandscape",
    slug: "flowing-sandscape",
    images: {
      main: FlowingSandscape1,
      other1: FlowingSandscape2,
      other2: FlowingSandscape3,
      other3: FlowingSandscape4,
    },
  },
];
