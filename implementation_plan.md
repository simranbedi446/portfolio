# Implementation Plan: Bailey the Beagle's Psychologically Safe Portfolio

An interactive, high-aesthetic "Comfort Notebook" web portfolio themed around a friendly beagle named Bailey, promoting psychological safety, self-awareness, and a toxic-free creative workspace. It replaces the traditional cold corporate portfolio with a cozy, hand-drawn scrapbook aesthetic.

---

## User Review Required

> [!IMPORTANT]
> **Key Design Decisions & Creative Elements:**
> 1. **Hand-Drawn Scrapbook Aesthetic:** The site will look like a physical notebook with rings, cardboard backing, grid/ruled paper textures, and hand-drawn doodles.
> 2. **Interactive Tools:** We will include interactive widgets like **Mood Paws** (mood tracker with beagle advice), **Vent Toy** (typing anxiety and having Bailey "chew it up" into sparkles), and **Treat Generator** (comforting advice cards).
> 3. **Beagle Mascot (Bailey):** We will use the `generate_image` tool to create unique hand-drawn pencil/watercolor sketches of a beagle representing different emotions.

Please review this plan and let me know if you would like any specific pages, tools, or design alterations.

---

## Open Questions

> [!NOTE]
> - Do you have a preferred name for the beagle companion (e.g., "Bailey")?
> - Are there specific portfolio projects or skills you would like to showcase in the "Bailey's Board" section, or should we pre-populate it with mock projects focused on design empathy, mental health tech, and collaboration?

---

## Proposed Changes

### Configuration & Entry Points

#### [MODIFY] [index.html](file:///d:/websites/portfolio/index.html)
- Load Google Fonts ('Caveat' for handwriting/doodles, and 'Nunito' for clear, friendly copy).
- Update `<title>` to "Bailey's Psychologically Safe & Comfort Scrapbook".
- Add meta tags for SEO and description focusing on psychological safety in creative fields.

---

### Styles & Design System

#### [MODIFY] [index.css](file:///d:/websites/portfolio/index.css)
- Implement core design system and tokens:
  - **Colors:** Cozy, warm HSL colors (warm cardboard brown, notebook paper white, dog-collar red, soft grass green, graphite pencil gray).
  - **Typography:** Set up handwriting styles using `.font-handwriting` and base typography using `.font-sans`.
  - **Notebook Layout Utilities:** Cardboard borders, paper grid backgrounds, notebook margins, page shadow effects, binder rings style, and custom page flip transition rules.

#### [MODIFY] [App.css](file:///d:/websites/portfolio/App.css)
- Implement clean, responsive notebook pages styling.
- Create 3D card flipping animations, spark particles for the vent toy, and bouncy animations for page navigation.

---

### Application Components

#### [NEW] [components](file:///d:/websites/portfolio/src/components)
We will create structured React components inside `src/components/`:
- [Notebook.jsx](file:///d:/websites/portfolio/src/components/Notebook.jsx): The shell container representing the physical journal with spiral rings, handle tabs, and page flipping logic.
- [CoverPage.jsx](file:///d:/websites/portfolio/src/components/CoverPage.jsx): The vintage cover page featuring a leather/cardboard texture and a title badge.
- [SanctuaryPage.jsx](file:///d:/websites/portfolio/src/components/SanctuaryPage.jsx): Welcome page introducing Bailey the Beagle, outlining the philosophy of comfort and emotional safety.
- [PackAgreementPage.jsx](file:///d:/websites/portfolio/src/components/PackAgreementPage.jsx): The interactive "rules of the pack" (No biting, Howl when lost, etc.) where users can sign the agreement to receive a Beagle Badge.
- [SafeSpaceToolkit.jsx](file:///d:/websites/portfolio/src/components/SafeSpaceToolkit.jsx): The hub for interactive self-care tools:
  - **Mood Paws**: Track mood and get personalized Beagle comforting reactions.
  - **Chew-it-up Vent Toy**: Write down work stresses and watch Bailey chew the text away into sparkles.
  - **Treat Generator**: Pull out virtual treats representing affirmations or self-care reminders.
- [BaileyBoard.jsx](file:///d:/websites/portfolio/src/components/BaileyBoard.jsx): A showcase of empathetic projects/values presented as scrapbook clippings.
- [ContactPostcard.jsx](file:///d:/websites/portfolio/src/components/ContactPostcard.jsx): A hand-drawn vintage postcard for contacting the creator (sending a "bark").

#### [MODIFY] [App.jsx](file:///d:/websites/portfolio/src/App.jsx)
- Orchestrate the page state, theme (day/night cozy lighting), background ambient sound player, and render the `Notebook` component.

---

### Assets

#### [NEW] [assets](file:///d:/websites/portfolio/src/assets)
We will generate custom pencil sketch assets of a beagle dog using `generate_image`:
- `beagle_happy.png`: Smiling, sitting beagle.
- `beagle_sleeping.png`: Beagle curled up sleeping.
- `beagle_chewing.png`: Beagle chewing a bone or toy.
- `beagle_curious.png`: Beagle looking up curiously.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify the build runs cleanly without any linting or compilation errors.

### Manual Verification
- Deploy a dev server with `npm run dev`.
- Verify the responsive notebook pages on desktop and mobile viewports.
- Interact with the "Mood Paws", "Chew-it-up Vent Toy", and "Pack Agreement" to ensure states, audio (if any), and particle animations run smoothly.
- Confirm fonts load correctly and text contrast is readable.
