import "./TabsSection.css";

import { Tabs, TabsContent, TabsWrapper } from "@guvam/components";
import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const TabsSection: FC = () => (
  <Components id="tabs">
    <TabsWrapper className="Tabs-example">
      <Tabs className="Tabs-exampleList">
        <button className="Tabs-Button">The Lantern Keeper’s Pact</button>
        <button className="Tabs-Button">The Echoing War</button>
        <button className="Tabs-Button">The River of Time</button>
      </Tabs>

      <TabsContent>
        <p className="Components-container">
          Beneath the silver glow of the twin moons, the Lantern Keeper strode through the
          mist-laden marsh, his glowing vessel warding off the whispering specters that clung to the
          reeds. Each year, a soul was bound to the lantern’s flame, a sacrifice to keep the veil
          between realms intact. Tonight, the spirits stirred with anticipation, for the Keeper’s
          time was nearly spent—soon, another would take his place, and the cycle would begin anew.
        </p>
        <p className="Components-container">
          In the shattered ruins of the old kingdom, battle cries still hung in the air, though no
          warriors remained. The Echoing War, fought by phantoms of the past, replayed endlessly
          under the watchful eyes of the star-carved sentinels. It was said that to listen too long
          was to be claimed by the echoes, drawn into a battle that never truly ended. Travelers
          hurried past, whispering prayers, lest they, too, became ghosts of war.
        </p>
        <p className="Components-container">
          Flowing backward through the valley of Eld’rae, the River of Time carried fragments of
          forgotten days. Those who dared to drink from its glistening waters would glimpse their
          past lives—or be dragged into them entirely. The villagers spoke of a wayward scholar who
          once sought knowledge from the river’s depths. When he returned, his eyes burned with
          centuries of wisdom, but he could no longer recall his own name.
        </p>
      </TabsContent>
    </TabsWrapper>
  </Components>
);
