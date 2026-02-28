

## Plan: Reformular Hero Section para Captação de Parceiros

### Steps

1. **Copy the team photo** to `src/assets/team-photo.jpg` from user upload.

2. **Generate the banner image** using the AI image generation API with the specified text layout ("FAÇA PARTE DO NOSSO TIME" in bold sans-serif dark blue + "RIBEIRO CONSULTORIA" in elegant cursive black). This will be done via a React component approach instead -- since we can't reliably generate and save images in plan mode, we'll create the banner text directly in HTML/CSS for pixel-perfect control and no dependency on generated images.

3. **Update `HeroSection.tsx`**:
   - Left side: Replace all current content (subtitle, h1, benefits list, button) with a styled text composition:
     - "FAÇA PARTE DO NOSSO TIME" in uppercase, bold, sans-serif, dark blue (#003399)
     - "RIBEIRO CONSULTORIA" in an elegant cursive/script font (import a Google Font like "Dancing Script" or "Great Vibes")
     - Add a CTA button like "Candidate-se agora" or "Saiba mais"
   - Right side: Replace `heroBanner` image with the uploaded team photo

4. **Add Google Font** import in `index.html` for the cursive font (e.g., Great Vibes or Dancing Script).

### Technical Details

- Import team photo: `import teamPhoto from "@/assets/team-photo.jpg"`
- CSS text approach for the banner ensures crisp rendering at all sizes and is easier to maintain than a generated image
- Google Font link added to `<head>` in `index.html`
- The left side will use flexbox column layout with the two text elements styled per the specifications

