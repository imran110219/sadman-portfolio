# 🎯 Quick Start Guide - Update Your Portfolio

## Step-by-Step Instructions

### 1️⃣ Update Your Personal Information

Open `/data/profile.json` and update:

```json
{
  "name": "Your Full Name",
  "title": "Your Job Title",
  "tagline": "Your tagline or motto",
  "bio": "Your biography",
  "location": "Your City, Country",
  "social": {
    "email": "your.email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "medium": "https://medium.com/@yourusername"
  }
}
```

### 2️⃣ Add Your Skills

Open `/data/skills.json` and add your skills with proficiency levels:

```json
{
  "recruiterSkills": [
    { "name": "Your Primary Skill", "level": 95 },
    { "name": "Another Skill", "level": 88 }
  ],
  "techStack": [
    {
      "category": "Backend",
      "items": ["Java", "Python", "Node.js"]
    }
  ]
}
```

**Proficiency Guide:**

- 90-100: Expert level, can mentor others
- 80-89: Advanced, work independently
- 70-79: Intermediate, productive use
- 60-69: Basic working knowledge

### 3️⃣ Add Your Projects

Open `/data/projects.json`:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "What the project does and its impact",
      "tech": ["React", "Node.js", "PostgreSQL"],
      "stars": 150,
      "github": "https://github.com/yourusername/project",
      "demo": "https://demo.example.com",
      "featured": true
    }
  ]
}
```

**Tips:**

- Set `"featured": true` for your best 3-5 projects
- Include metrics and impact in descriptions
- List technologies from most important to least

### 4️⃣ Add Work Experience

Open `/data/experience.json`:

```json
{
  "experiences": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "2023 - Present",
      "description": "Key responsibilities and achievements"
    }
  ]
}
```

**Date Format:**

- Current job: "2023 - Present"
- Past jobs: "2020 - 2023"
- Keep format consistent

### 5️⃣ Update Services (Optional - for Client View)

Open `/data/services.json`:

```json
{
  "services": [
    {
      "icon": "Zap",
      "title": "Service Name",
      "description": "What you offer",
      "price": "From $X"
    }
  ],
  "caseStudies": [
    {
      "client": "Client Name",
      "project": "Project Name",
      "result": "Outcome achieved",
      "metrics": ["Metric 1", "Metric 2", "Metric 3"]
    }
  ]
}
```

**Available Icons:**

- `"Zap"` - Lightning bolt (for speed/performance)
- `"TrendingUp"` - Growth arrow
- `"Users"` - People/team

### 6️⃣ Add Achievements

Open `/data/achievements.json`:

```json
{
  "achievements": [
    {
      "title": "Achievement Title",
      "description": "What you accomplished"
    }
  ]
}
```

## ✅ Checklist

Before going live, verify:

- [ ] All URLs include `http://` or `https://`
- [ ] Email addresses are correct
- [ ] Social media links work
- [ ] Skill levels are realistic (0-100)
- [ ] No typos or grammar errors
- [ ] JSON syntax is valid (use [JSONLint](https://jsonlint.com))
- [ ] Project links are working
- [ ] Featured projects are marked
- [ ] Date formats are consistent

## 🧪 Test Your Changes

After editing:

1. Save all JSON files
2. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
3. Open http://localhost:3000
4. Check all three views (Recruiter, Developer, Client)
5. Verify all data displays correctly

## 🎨 Customization Tips

### Make Your Portfolio Stand Out

1. **Be Specific**: Instead of "Developed app", write "Built React app serving 10k users"
2. **Show Impact**: Include metrics and results
3. **Stay Current**: Update skills as you learn
4. **Be Honest**: Realistic skill levels build trust
5. **Tell Stories**: Case studies should have clear problems and solutions

### Skill Level Guidelines

```
95-100: Can teach workshops, write books on this
85-94:  Production expert, architecture decisions
75-84:  Daily driver, solve complex problems
65-74:  Comfortable for most tasks
50-64:  Learning, can complete basic tasks
```

## 🆘 Common Issues

### JSON Syntax Error

**Problem**: Site won't load after editing
**Solution**: Validate JSON at https://jsonlint.com
**Common mistakes:**

- Missing comma between items
- Extra comma after last item
- Unescaped quotes in strings
- Unclosed brackets

### Changes Not Showing

**Problem**: Updated JSON but see old data
**Solution**:

1. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
2. Stop and restart dev server
3. Clear browser cache

### TypeScript Errors

**Problem**: Red squiggly lines or build errors
**Solution**: Don't change field names in JSON, only values

## 📞 Need Help?

1. Check `/data/README.md` for detailed documentation
2. Review example data in existing JSON files
3. Validate JSON syntax before saving
4. Use TypeScript autocomplete in your editor

## 🚀 Ready to Deploy?

Once you've customized all data:

```bash
pnpm build
# or
npm run build
```

If build succeeds, you're ready to deploy! 🎉

---

**Remember**: You're editing JSON files, not code. Can't break anything! Just ensure valid JSON syntax.
