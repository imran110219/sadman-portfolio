# 📊 Semi-Dynamic Portfolio - Data-Driven Architecture

This portfolio is now **semi-dynamic** - all content is managed through JSON files instead of hardcoded values!

## 🎯 What Changed?

### ✅ Before

- All data hardcoded in React components
- Need to edit multiple component files to update content
- Risk of breaking code when updating content
- Difficult to maintain and update

### ✨ After

- All data stored in JSON files (`/data` directory)
- Single source of truth for all content
- Update portfolio by editing JSON files only
- Type-safe with TypeScript definitions
- Clean separation of data and presentation

## 📁 Project Structure

```
sadman-portfolio/
├── data/                    # 📊 All portfolio data (JSON)
│   ├── README.md           # Documentation for data files
│   ├── profile.json        # Personal info & social links
│   ├── skills.json         # Technical skills & tech stack
│   ├── core-skills.json    # Simplified skill categories
│   ├── projects.json       # Portfolio projects
│   ├── experience.json     # Work experience timeline
│   ├── achievements.json   # Key achievements
│   └── services.json       # Services & case studies
├── types/                   # 📝 TypeScript type definitions
│   └── index.ts            # All data types
├── lib/
│   └── data.ts             # 🔧 Data loading utilities
└── components/              # ⚛️ React components (now data-driven)
    ├── client-view.tsx
    ├── developer-view.tsx
    ├── recruiter-view.tsx
    └── ...
```

## 🚀 How to Update Your Portfolio

### Quick Start

1. **Navigate to the `/data` folder**
2. **Edit the JSON files** with your information
3. **Save** - that's it! Your changes are live

### Example: Update Your Name and Title

Edit `/data/profile.json`:

```json
{
  "name": "Your Name",
  "title": "Your Job Title",
  "tagline": "What you do"
}
```

### Example: Add a New Project

Edit `/data/projects.json`:

```json
{
  "projects": [
    {
      "title": "My New Project",
      "description": "An amazing project that...",
      "tech": ["React", "TypeScript", "Node.js"],
      "stars": 100,
      "featured": true
    }
  ]
}
```

## 📚 Data Files Reference

| File                | Purpose                                    | Used In                     |
| ------------------- | ------------------------------------------ | --------------------------- |
| `profile.json`      | Personal info, social links                | All views, Hero section     |
| `skills.json`       | Skills with proficiency levels, tech stack | Developer & Recruiter views |
| `core-skills.json`  | Skill categories overview                  | Recruiter view              |
| `projects.json`     | Portfolio projects                         | Developer view              |
| `experience.json`   | Work history timeline                      | Recruiter view              |
| `achievements.json` | Key highlights                             | Recruiter view              |
| `services.json`     | Services, case studies, process            | Client view                 |

## 🛠️ Technical Details

### Type Safety

All data is typed with TypeScript interfaces in `/types/index.ts`:

- `Profile` - Personal information
- `Skill` - Technical skills
- `Project` - Portfolio projects
- `Experience` - Work experience
- `Service` - Service offerings
- `CaseStudy` - Client case studies
- And more...

### Data Loading

Data is loaded through utility functions in `/lib/data.ts`:

- `getProfile()` - Get profile information
- `getSkills()` - Get all skills data
- `getProjects(featuredOnly?)` - Get projects (optionally filtered)
- `getExperience()` - Get work experience
- `getClientData()` - Get services and case studies
- And more...

### Component Integration

Components import data at the top:

```tsx
import { getProfile, getProjects } from "@/lib/data";

export function MyComponent() {
  const profile = getProfile();
  const projects = getProjects(true); // Get featured only

  return (
    <div>
      <h1>{profile.name}</h1>
      {/* ... */}
    </div>
  );
}
```

## 🎨 Best Practices

1. **Always validate JSON** - Use a JSON validator before saving
2. **Keep data consistent** - Use same date formats, URL patterns
3. **Don't change structure** - Only edit values, not field names
4. **Use featured flag** - Mark best projects with `"featured": true`
5. **Realistic skill levels** - Be honest with proficiency (0-100)
6. **Consistent formatting** - Follow existing patterns

## 🔄 Migration Summary

### Components Updated

- ✅ `app/page.tsx` - Uses profile data
- ✅ `components/recruiter-view.tsx` - Uses skills, experience, achievements
- ✅ `components/developer-view.tsx` - Uses projects, tech stack
- ✅ `components/client-view.tsx` - Uses services, case studies

### New Files Created

- ✅ `/data/*.json` - All content data
- ✅ `/types/index.ts` - TypeScript types
- ✅ `/lib/data.ts` - Data loading utilities
- ✅ `/data/README.md` - Data documentation

## 📖 Examples

See `/data/README.md` for detailed examples of:

- Adding new skills
- Creating project entries
- Updating work experience
- Modifying services
- And more!

## 🚀 Benefits

- **Easy Updates**: Change content without touching code
- **Type Safety**: TypeScript ensures data integrity
- **Maintainable**: Single source of truth
- **Scalable**: Easy to add new data fields
- **Safe**: Can't break code by updating content
- **Fast**: No need to understand React/TypeScript

## 💡 Future Enhancements

Potential improvements:

- [ ] CMS integration (Contentful, Sanity, etc.)
- [ ] Admin panel for editing
- [ ] API endpoints for dynamic updates
- [ ] Database integration
- [ ] Internationalization (i18n)
- [ ] Auto-generate from resume/CV

---

**Ready to customize?** Start editing files in `/data` directory! 🎉
