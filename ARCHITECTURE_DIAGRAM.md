# 🎨 Portfolio Data Flow Architecture

## Visual Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER UPDATES                             │
│                     (Edit JSON Files)                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                 │
│                    (/data/*.json)                               │
├─────────────────────────────────────────────────────────────────┤
│  • profile.json        → Personal info & social links           │
│  • skills.json         → Skills with proficiency levels         │
│  • core-skills.json    → Skill categories                       │
│  • projects.json       → Portfolio projects                     │
│  • experience.json     → Work timeline                          │
│  • achievements.json   → Key highlights                         │
│  • services.json       → Services & case studies                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    TYPE DEFINITIONS                             │
│                    (/types/index.ts)                            │
├─────────────────────────────────────────────────────────────────┤
│  • Profile              • Experience                            │
│  • Skill                • Achievement                           │
│  • Project              • Service                               │
│  • TechStack            • CaseStudy                             │
│                                                                 │
│  → Ensures data integrity with TypeScript                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                   DATA UTILITIES                                │
│                   (/lib/data.ts)                                │
├─────────────────────────────────────────────────────────────────┤
│  getProfile()           → Profile data                          │
│  getSkills()            → All skills                            │
│  getProjects(featured)  → Projects (filtered)                   │
│  getExperience()        → Work history                          │
│  getClientData()        → Services & studies                    │
│  getTechStack()         → Tech categories                       │
│                                                                 │
│  → Type-safe data access layer                                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  REACT COMPONENTS                               │
│                  (/components/*.tsx)                            │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  Recruiter   │  │  Developer   │  │   Client     │         │
│  │     View     │  │     View     │  │    View      │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│         │                 │                  │                  │
│         └─────────────────┴──────────────────┘                  │
│                           │                                     │
│                  Uses data utilities                            │
│                  Renders with data                              │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      USER SEES                                  │
│                  (Dynamic Portfolio)                            │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Examples

### Example 1: Displaying Profile Name

```
User Action: Edit profile.json
  ↓
{ "name": "John Doe" }
  ↓
Type Check: Profile interface
  ↓
getProfile() returns typed data
  ↓
Component: <h1>{profile.name}</h1>
  ↓
Browser: "John Doe" displayed
```

### Example 2: Showing Featured Projects

```
User Action: Edit projects.json, set "featured": true
  ↓
{ "projects": [{ "title": "App", "featured": true }] }
  ↓
Type Check: Project[] interface
  ↓
getProjects(true) filters featured only
  ↓
Component: maps over projects array
  ↓
Browser: Only featured projects shown
```

### Example 3: Updating Skills

```
User Action: Edit skills.json
  ↓
{ "recruiterSkills": [{ "name": "React", "level": 90 }] }
  ↓
Type Check: Skill[] interface
  ↓
getRecruiterSkills() returns typed array
  ↓
Component: Renders progress bars with levels
  ↓
Browser: Skills with 90% proficiency bars
```

## Component Data Dependencies

```
┌────────────────────┐
│   app/page.tsx     │
│   (Hero Section)   │
├────────────────────┤
│ Uses:              │
│ • getProfile()     │
└────────────────────┘

┌─────────────────────────┐
│ RecruiterView           │
├─────────────────────────┤
│ Uses:                   │
│ • getProfile()          │
│ • getRecruiterSkills()  │
│ • getCoreSkills()       │
│ • getExperience()       │
│ • getAchievements()     │
└─────────────────────────┘

┌─────────────────────────┐
│ DeveloperView           │
├─────────────────────────┤
│ Uses:                   │
│ • getProjects(true)     │
│ • getTechStack()        │
└─────────────────────────┘

┌─────────────────────────┐
│ ClientView              │
├─────────────────────────┤
│ Uses:                   │
│ • getClientData()       │
│   - services            │
│   - caseStudies         │
│   - workProcess         │
└─────────────────────────┘
```

## File Relationships

```
profile.json ──────┐
                   ├──→ getProfile() ──→ Hero + RecruiterView
                   │
skills.json ───────┼──→ getRecruiterSkills() ──→ RecruiterView
                   │
core-skills.json ──┼──→ getCoreSkills() ──→ RecruiterView
                   │
projects.json ─────┼──→ getProjects() ──→ DeveloperView
                   │
experience.json ───┼──→ getExperience() ──→ RecruiterView
                   │
achievements.json ─┼──→ getAchievements() ──→ RecruiterView
                   │
services.json ─────┴──→ getClientData() ──→ ClientView
```

## Type Safety Flow

```
1. Edit JSON
   ↓
2. TypeScript validates against interface
   ↓
3. If valid → Compile success
   If invalid → Compile error with details
   ↓
4. Component receives typed data
   ↓
5. Autocomplete and type checking in IDE
   ↓
6. Runtime type safety guaranteed
```

## Update Workflow

```
Developer/User Perspective:
┌────────────────────────────────────────┐
│ 1. Open /data/profile.json             │
│ 2. Edit values (not field names!)      │
│ 3. Save file                            │
│ 4. Refresh browser (or hot reload)     │
│ 5. See changes immediately              │
└────────────────────────────────────────┘

System Perspective:
┌────────────────────────────────────────┐
│ 1. File watcher detects change         │
│ 2. TypeScript validates types           │
│ 3. Next.js rebuilds component           │
│ 4. Hot Module Replacement (HMR)        │
│ 5. Browser updates without full reload │
└────────────────────────────────────────┘
```

## Error Handling

```
Invalid JSON Syntax
  ↓
TypeScript compilation fails
  ↓
Build error with line number
  ↓
Developer fixes syntax
  ↓
Rebuild succeeds

Wrong Data Type
  ↓
TypeScript type error
  ↓
IDE shows red squiggles
  ↓
Developer corrects type
  ↓
Type safety restored
```

## Scalability Path

```
Current: JSON Files
  ↓
Future Option 1: CMS
  ↓
Replace getProfile() implementation
Keep component code unchanged
  ↓
Future Option 2: API
  ↓
Fetch from database/API
Types remain the same
  ↓
Future Option 3: Admin Panel
  ↓
UI for editing JSON
Still updates same files
```

## Performance Flow

```
Build Time:
  JSON files → Bundled with app → Static assets
  ↓
  Fast loading, no API calls needed

Runtime:
  Data already in bundle → Instant display
  ↓
  No loading states needed for static data

Updates:
  Edit JSON → Rebuild → Deploy
  ↓
  New static bundle with updated data
```

## Summary

This architecture provides:

- ✅ **Simplicity**: Edit JSON, see results
- ✅ **Safety**: TypeScript catches errors
- ✅ **Speed**: Static data, no API delays
- ✅ **Scalability**: Easy to extend or migrate
- ✅ **Maintainability**: Clear separation of concerns

---

**Remember**: Data flows in one direction: JSON → Types → Utilities → Components → UI
