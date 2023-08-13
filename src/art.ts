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
  description: string;
  id: number;
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
    description:
      "Chroma Burst is a vibrant abstract artwork, alive with an explosion of multicoloured strokes that radiate like sun rays. A dynamic white diagonal burst acts as the focal point, drawing us into a kaleidoscope of emotions. This vivid composition celebrates the joy of spontaneity, inviting us to explore a world where colors and feelings harmoniously converge.",
    id: 7719034,
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
    description:
      "Red Horizon is an abstract, red textured painting that transports viewers on a mesmerising journey. The vibrant red painting signifies new beginnings, complemented by warm, golden hues. Intriguing details and hidden elements invite contemplation, offering a portal to an extraordinary realm. A captivating artwork that leaves a lasting impression on hearts and minds.",
    id: 7719033,
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
    description:
      "Ember Glimmer is a captivating, heavily textured painting in deep red. Amidst the rich textures, an aperture reveals a golden view, like a glimmer of light amidst the embers. The artwork exudes an aura of warmth and mystique, as if inviting viewers to peek into a secret world beyond, with its alluring play of colours and textures.",
    id: 7719054,
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
    description:
      "Cave View is an abstract work, offering a captivating view from within a cave. Deep reds and gold intertwine, conjuring an atmosphere of mystery and allure. The artwork beckons viewers to explore the enigmatic depths, where hidden wonders await to be discovered. “Cave View” immerses us in a world of rich hues, igniting the imagination and transporting us to an artful realm of ancient intrigue.",
    id: 7719051,
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
    description:
      "Drifts of Amethyst invites you to a tranquil world of ethereal beauty. Predominantly white, with hints of purple and pale gold, the swirling hues delicately intermingle like a dreamy dance. The textured surface adds depth, allowing eyes and fingertips to explore subtle nuances. Immerse yourself in this mesmerizing artwork, and be gently carried away on a calming journey amidst enchanting amethyst hues.",
    id: 7719047,
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
    description:
      "Tactile Serenity bathes in a palette of pale beige and gold, creating a tranquil artwork. The gentle textures and soothing hues evoke a sense of calming serenity. Like a meditative journey, the painting invites viewers to explore its tactile surface and bask in the peaceful ambiance it exudes. “Tactile Serenity” serves as a visual oasis, offering solace and respite in the midst of life’s bustling canvas.",
    id: 7719040,
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
    description:
      "Sunset Journey is an enchanting abstract, capturing a couple on a romantic walk amidst a sunset’s embrace. The artworks heavy textures, reflect the complexities of their journey together. Smooth areas and shimmering gold, evoke the warmth and tenderness shared between them. “Sunset Journey” invites viewers to be part of this intimate moment, celebrating the magic of love and the timeless allure of a shared path.",
    id: 7719049,
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
    description:
      "Green Journey is an evocative abstract painting that portrays two figures embarking on a transformative voyage into the future. Set against a canvas of white and pale green hues, the artwork glistens with gold pearlescent highlights, symbolizing hope and promise. As we witness the enigmatic figures stepping into the unknown, the painting becomes a poignant reminder of the endless possibilities that await us on life’s journey.",
    id: 7719056,
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
    description:
      "Blue Bay is an exquisite masterpiece where the celestial dance of the moon reflects upon the tranquil waters. The semi-abstract view, expertly framed by island edges, evokes a mesmerizing blend of serenity and enchantment. A captivating ode to the night’s allure.",
    id: 7719039,
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
    description:
      "Opensea is an abstract artwork, a sea of boundless communication and creativity. With its dynamic design and vivid colors, the painting mirrors the fluidity of ideas and digital art that flow within the platform. Like an ever-expanding ocean of possibilities, “Opensea” invites viewers to dive into the realm of blockchain art, where new horizons emerge, and artists connect with audiences in a borderless world of innovation.",
    id: 7719038,
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
    description:
      "An abstract view from above, showcasing a textured canvas, in hues of blue and sand. The impasto technique lends depth and dimension, capturing the essence of a serene shoreline. Each element echoes the ebb and flow of tides, inviting viewers to feel the rhythm of the sea. This captivating piece immerses us in the tranquil beauty of a coastal landscape, where the interplay of textures and colours creates a vivid portrayal of nature’s timeless allure.",
    id: 7719043,
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
    description:
      "Flowing Sandscape presents an abstract aerial view of sand and the serene expanse of the blue sea. The artwork captures the fluidity of nature’s beauty, as sands and waters merge in a harmonious dance. With a masterful blend of textures and hues, this captivating piece evokes a sense of tranquility, immersing viewers in the mesmerizing flow of land meeting water.",
    id: 7719060,
    images: {
      main: FlowingSandscape1,
      other1: FlowingSandscape2,
      other2: FlowingSandscape3,
      other3: FlowingSandscape4,
    },
  },
];
