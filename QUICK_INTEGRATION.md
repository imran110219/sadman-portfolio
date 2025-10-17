# Quick Integration Guide for New Components

This guide shows how to integrate the new components into your existing views.

---

## RecruiterView Enhancements

Add these imports at the top of `components/recruiter-view.tsx`:

```tsx
import {
  SkillsByDomain,
  defaultSkillDomains,
  defaultCurrentlyExploring,
} from "@/components/skills-by-domain";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { getTestimonials } from "@/lib/data";
```

Then add these sections in your component:

```tsx
export function RecruiterView() {
  const testimonials = getTestimonials(true); // Get only featured testimonials

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* ... existing content ... */}

      {/* Replace existing skills section with: */}
      <section id="skills">
        <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
        <SkillsByDomain
          domains={defaultSkillDomains}
          currentlyExploring={defaultCurrentlyExploring}
        />
      </section>

      {/* Add testimonials after experience: */}
      <section id="testimonials">
        <Testimonials testimonials={testimonials} />
      </section>

      {/* Add contact section at the end: */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
```

---

## DeveloperView Enhancements

Add these imports at the top of `components/developer-view.tsx`:

```tsx
import { ProjectCaseStudyCard } from "@/components/project-case-study";
import detailedProjectsData from "@/data/detailed-projects.json";
import { ContactSection } from "@/components/contact-section";
```

Then add these sections:

```tsx
export function DeveloperView() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* ... existing content ... */}

      {/* Replace or enhance projects section: */}
      <section id="projects">
        <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
        <div className="space-y-8">
          {detailedProjectsData.detailedProjects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCaseStudyCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
        </div>
      </section>

      {/* Add contact section at the end: */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
```

---

## ClientView Enhancements

Add these imports at the top of `components/client-view.tsx`:

```tsx
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { getTestimonials } from "@/lib/data";
```

Then add these sections:

```tsx
export function ClientView() {
  const testimonials = getTestimonials(true);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* ... existing services and case studies ... */}

      {/* Add testimonials after case studies: */}
      <section id="testimonials">
        <h3 className="text-2xl font-bold mb-6">Client Testimonials</h3>
        <Testimonials testimonials={testimonials} />
      </section>

      {/* Add contact section at the end: */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
```

---

## Alternative: Use Individual Components

If you prefer more granular control, you can use components separately:

### Contact Form Only

```tsx
import { ContactForm } from "@/components/contact-form";

<ContactForm variant="compact" />;
```

### Skills by Specific Domain

```tsx
import { SkillsByDomain } from "@/components/skills-by-domain";

const backendSkills = {
  domain: "Backend Development",
  icon: Server,
  color: "text-primary",
  skills: [
    { name: "Java", proficiency: 95, yearsOfExperience: 9 },
    // ... more skills
  ],
};

<SkillsByDomain domains={[backendSkills]} />;
```

### Single Testimonial Card

```tsx
import { Testimonials } from "@/components/testimonials";

const singleTestimonial = [
  {
    id: "1",
    name: "John Doe",
    role: "CTO",
    company: "Tech Corp",
    quote: "Excellent work!",
    featured: true,
  },
];

<Testimonials testimonials={singleTestimonial} />;
```

---

## Styling Notes

All new components:

- ✅ Use existing design system (Card, Button, Badge, etc.)
- ✅ Respect theme (light/dark mode)
- ✅ Are fully responsive
- ✅ Include hover/focus states
- ✅ Have consistent spacing

---

## Animation Control

Most components use Framer Motion with stagger delays. To adjust:

```tsx
// Faster animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.3 }} // Adjust here
>
```

To disable animations:

```tsx
// Remove motion wrapper, use regular div
<div>Content</div>
```

---

## Responsive Breakpoints

Components follow these breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Grid layouts automatically adjust:

- `grid md:grid-cols-2` - 1 column mobile, 2 on tablet+
- `grid md:grid-cols-2 lg:grid-cols-3` - 1 mobile, 2 tablet, 3 desktop

---

## Data Management

### Adding New Testimonial

Edit `data/testimonials.json`:

```json
{
  "testimonials": [
    {
      "id": "4",
      "name": "New Person",
      "role": "Their Role",
      "company": "Company Name",
      "avatar": "/testimonials/new-person.jpg",
      "quote": "Their testimonial quote here",
      "linkedin": "https://linkedin.com/in/their-profile",
      "featured": true
    }
  ]
}
```

### Adding New Detailed Project

Edit `data/detailed-projects.json`:

```json
{
  "detailedProjects": [
    {
      "title": "New Project",
      "tagline": "Short description",
      "featured": true,
      "problem": "What problem it solved",
      "context": "Business context",
      "role": "Your role",
      "contributions": ["What you did", "What else you did"],
      "tech": ["Tech1", "Tech2"],
      "challenges": [
        {
          "challenge": "The challenge",
          "solution": "How you solved it"
        }
      ],
      "metrics": [
        {
          "label": "Metric Name",
          "value": "123%",
          "description": "What it means"
        }
      ],
      "lessons": ["What you learned"]
    }
  ]
}
```

---

## Testing Checklist

After integration:

- [ ] Component renders without errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Animations work smoothly
- [ ] Theme toggle works (light/dark)
- [ ] Links open correctly
- [ ] Forms validate properly
- [ ] No console errors
- [ ] Accessibility (keyboard nav, screen reader)

---

## Common Issues & Solutions

### Issue: Component not showing

**Solution:** Check imports and data structure

### Issue: Styling looks wrong

**Solution:** Ensure parent has proper container/spacing classes

### Issue: Animation janky

**Solution:** Reduce stagger delays or disable animations on lower-end devices

### Issue: Images not loading

**Solution:** Place images in `/public/` folder, use correct paths

---

## Performance Tips

1. **Lazy load images:** Already using Next.js Image component
2. **Limit animations on mobile:** Use media queries if needed
3. **Paginate long lists:** Consider pagination for 10+ items
4. **Optimize images:** Compress before uploading
5. **Use loading states:** Show skeletons while data loads

---

## Need Help?

1. Check component source code for props and options
2. Review `ENHANCEMENT_GUIDE.md` for detailed docs
3. Test changes in development before deploying
4. Use browser DevTools to debug issues

---

**Remember:** All components are built to be drop-in replacements or additions. Start with one, test it, then add more!
