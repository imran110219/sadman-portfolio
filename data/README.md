# Portfolio Data Configuration

This directory contains all the data for your portfolio website. Simply edit these JSON files to update your portfolio content without touching any code!

## 📁 Files Overview

### `profile.json`

Your personal information and social links.

**Fields:**

- `name`: Your full name
- `title`: Your job title/role
- `tagline`: A short description of what you do
- `bio`: A longer biography (optional)
- `location`: Your location (optional)
- `avatar`: Path to your profile image (optional)
- `social`: Object containing your social media links
  - `email`: Your email address
  - `github`: GitHub profile URL
  - `linkedin`: LinkedIn profile URL (optional)
  - `twitter`: Twitter profile URL (optional)
  - `medium`: Medium profile URL (optional)
  - `hackerrank`: HackerRank profile URL (optional)

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

## ⚠️ Important

- Maintain the JSON structure - don't change field names
- Ensure valid JSON syntax (use a JSON validator if needed)
- Keep emoji characters in the `core-skills.json` file for visual appeal

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
