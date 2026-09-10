---
name: daily-progress-log
description: "Use when: you need to record what changed during the day, what remains unfinished, and what to resume next session so work can continue without losing context. This is for daily project handoff logs, status summaries, and resume notes."
---

# Daily Progress Log

Use this skill to create a concise daily handoff log for the current project or work session.

## Goal

Capture enough detail that the next time you pick up work, you can quickly understand:
- what was completed today
- what is still in progress
- what changed in code or project files
- what blockers or open questions remain
- what should be resumed next

## Output format

Create or update a log file named `daily-progress-log.md` in the project root.

If the file already exists, add a new dated section at the top instead of overwriting earlier entries.

Use this structure:

```md
# Daily Progress Log

## 2026-09-09

### Project / focus
- Current project or feature

### What changed today
- Completed item 1
- Completed item 2
- File(s) touched

### Work in progress
- Item still being developed
- Current state

### Blockers / risks
- Issue, dependency, or question preventing completion

### Validation / testing
- What was checked or confirmed
- What still needs verification

### Next session starting point
- Resume from: ...
- Next action: ...
```

## Best practices

- Keep the summary factual and brief.
- Include specific files or components changed when useful.
- Note the last meaningful action, not every tiny edit.
- Call out anything that would be easy to forget next day.
- If a task is unfinished, state exactly what the next step is.

## When to use this skill

Use it at the end of a work session, after a major milestone, or before switching tasks so that the next session can start with clear context.
