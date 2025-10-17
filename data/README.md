# Portfolio Data Configuration

This directory contains all the data for your portfolio website. Simply edit these JSON files to update your portfolio content without touching any code!

## 📁 Files Overview

### `profile.json` ✨ UPDATED

Your personal information and social links.

**Fields:**

- `name`: Your full name
- `title`: Your job title/role
- `tagline`: A short, powerful description of what you do
- `valueProposition`: ✨ NEW - Expanded value statement
- `bio`: A longer biography (optional)
- `location`: Your location (optional)
- `avatar`: Path to your profile image (optional)
- `availability`: ✨ NEW - Current availability status
- `social`: Object containing your social media links
  - `email`: Your email address
  - `github`: GitHub profile URL
  - `linkedin`: ✨ LinkedIn profile URL (recommended to add)
  - `twitter`: Twitter profile URL (optional)
  - `medium`: Medium profile URL (optional)
  - `hackerrank`: HackerRank profile URL (optional)

**Example:**

```json
{
  "name": "Sadman",
  "title": "Senior Software Engineer",
  "tagline": "I build resilient backend systems that scale",
  "valueProposition": "Transforming complex business challenges into elegant, high-performance solutions",
  "availability": "Available for opportunities"
}
```

### `skills.json`

Technical skills with proficiency levels and categorized tech stack.

**Structure:**

- `recruiterSkills`: Array of skills with proficiency percentages (shown in Recruiter View)
  - `name`: Skill name
  - `level`: Proficiency level (0-100)
- `techStack`: Categorized technologies (shown in Developer View)
  - `category`: Category name (e.g., "Backend", "Frontend")
  - `items`: Array of technology names

### `core-skills.json`

Simplified skill categories for quick overview (shown in Recruiter View).

**Structure:**

- `categories`: Array of skill categories
  - `title`: Category name
  - `emoji`: Emoji icon for the category
  - `skills`: Array of skill descriptions

### `projects.json`

Your portfolio projects and work samples.

**Structure:**

- `projects`: Array of project objects
  - `title`: Project name
  - `description`: Project description
  - `tech`: Array of technologies used
  - `stars`: GitHub stars or popularity metric (optional)
  - `link`: Project link (optional)
  - `github`: GitHub repository URL (optional)
  - `demo`: Live demo URL (optional)
  - `featured`: Boolean to show in featured section

### `experience.json`

Your work experience timeline.

**Structure:**

- `experiences`: Array of job experiences
  - `title`: Job title
  - `company`: Company name
  - `period`: Time period (e.g., "2023 - Present")
  - `description`: Job description and achievements

### `achievements.json`

Key achievements and highlights.

**Structure:**

- `achievements`: Array of achievements
  - `title`: Achievement title
  - `description`: Achievement description

### `services.json`

Services you offer, case studies, and work process (for Client View).

**Structure:**

- `services`: Array of service offerings
  - `icon`: Icon name (Zap, TrendingUp, or Users)
  - `title`: Service title
  - `description`: Service description
  - `price`: Pricing information
- `caseStudies`: Array of case studies
  - `client`: Client name
  - `project`: Project name
  - `result`: Outcome/result
  - `metrics`: Array of key metrics
- `workProcess`: Array of work process steps (e.g., ["Discovery", "Design", "Development", "Delivery"])

### `testimonials.json` ✨ NEW

Client and colleague testimonials for social proof.

**Structure:**

- `testimonials`: Array of testimonials
  - `id`: Unique identifier
  - `name`: Person's full name
  - `role`: Their job title
  - `company`: Company name
  - `avatar`: Path to profile image (optional)
  - `quote`: The testimonial text (keep to 1-2 sentences)
  - `linkedin`: LinkedIn profile URL (optional but recommended)
  - `featured`: Boolean - show on main pages

**Example:**

```json
{
  "id": "1",
  "name": "John Smith",
  "role": "Engineering Manager",
  "company": "Tech Corp",
  "quote": "Sadman's technical expertise is exceptional.",
  "linkedin": "https://linkedin.com/in/johnsmith",
  "featured": true
}
```

### `detailed-projects.json` ✨ NEW

Comprehensive project case studies with detailed information.

**Structure:**

Each project includes:

- `title`: Project name
- `tagline`: One-line summary
- `featured`: Boolean
- `problem`: Problem statement
- `context`: Business context
- `role`: Your role
- `contributions`: Array of your contributions
- `teamSize`: Number (optional)
- `duration`: String like "12 months" (optional)
- `tech`: Array of technologies
- `architecture`: Architecture description (optional)
- `architectureDiagram`: Path to diagram image (optional)
- `challenges`: Array of challenge/solution pairs
- `metrics`: Array of impact metrics
- `lessons`: Array of lessons learned
- `links`: Object with live/github/demo URLs
- `screenshots`: Array of screenshot paths (optional)

**Example:**

```json
{
  "title": "E-Commerce Platform",
  "tagline": "Scalable multi-tenant e-commerce solution",
  "featured": true,
  "problem": "Small businesses lacked affordable e-commerce platforms",
  "context": "Built for 500+ small businesses",
  "role": "Lead Backend Developer",
  "contributions": [
    "Architected microservices backend",
    "Implemented payment gateway integration"
  ],
  "tech": ["Java", "Spring Boot", "React"],
  "challenges": [
    {
      "challenge": "Handling payment security",
      "solution": "Implemented PCI-DSS compliant architecture"
    }
  ],
  "metrics": [
    {
      "label": "Businesses",
      "value": "500+",
      "description": "Active merchants"
    }
  ],
  "lessons": ["Security must be built-in from the start"]
}
```

## 🚀 How to Update Your Portfolio

1. **Edit the JSON files** in this directory with your information
2. Save the files
3. The changes will automatically reflect on your portfolio website
4. No code changes required!

## 💡 Tips

- Keep descriptions concise and impactful
- Use consistent date formats (e.g., "2023 - Present")
- Ensure all URLs include `http://` or `https://`
- Skills levels should be realistic (0-100)
- Mark your best projects as `"featured": true`
- For testimonials, get written permission before publishing
- Use metrics that demonstrate real impact (numbers, percentages)
- Keep testimonial quotes short (1-2 sentences max)

## ⚠️ Important

- Maintain the JSON structure - don't change field names
- Ensure valid JSON syntax (use a JSON validator if needed)
- Keep emoji characters in the `core-skills.json` file for visual appeal
- Replace placeholder testimonials with real ones before launch
- Add actual images to `/public/` folder and reference correct paths

## 🎨 Customization Examples

### Adding a New Skill

```json
{
  "name": "Docker & Kubernetes",
  "level": 85
}
```

### Adding a New Project

```json
{
  "title": "My Awesome Project",
  "description": "A revolutionary app that...",
  "tech": ["React", "Node.js", "MongoDB"],
  "stars": 150,
  "github": "https://github.com/yourusername/project",
  "demo": "https://project.demo.com",
  "featured": true
}
```

### Adding a New Testimonial

```json
{
  "id": "4",
  "name": "Sarah Johnson",
  "role": "CTO",
  "company": "StartupXYZ",
  "quote": "Best engineer I've worked with. Delivered ahead of schedule.",
  "linkedin": "https://linkedin.com/in/sarahjohnson",
  "featured": true
}
```

## 📸 Adding Images

Place images in `/public/` folder:

- Profile photo: `/public/profile.jpg`
- Project screenshots: `/public/projects/[project-name]/screenshot-1.png`
- Architecture diagrams: `/public/projects/[project-name]/architecture.png`
- Testimonial avatars: `/public/testimonials/[name].jpg`
- OG image: `/public/og-image.jpg` (1200x630px for social sharing)

Then reference them in JSON:

```json
"avatar": "/profile.jpg",
"architectureDiagram": "/projects/open-care/architecture.png"
```

### Adding Work Experience

```json
{
  "title": "Senior Developer",
  "company": "Tech Corp",
  "period": "2022 - Present",
  "description": "Led development of microservices architecture..."
}
```

Happy customizing! 🎉
