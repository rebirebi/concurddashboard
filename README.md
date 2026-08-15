# Concurdashboard

``` https://concurddashboard.onrender.com/ ```

A small Angular 21 task dashboard app that tracks simple goals and visualizes progress.

## Summary

`concurdashboard` is a lightweight task tracker built with Angular signals. It stores tasks in a root `TaskStore` service (persisted to `localStorage`), and provides a single-page `Dashboard` view where users can add tasks, toggle completion, delete tasks, and filter the list. A pie chart component visualizes completed vs pending tasks using `ng2-charts` and `chart.js`.

## Features

- Add, toggle, and delete tasks
- Filter tasks by `all`, `pending`, and `completed`
- Completion percentage and progress bar
- Pie chart visualization of task distribution
- Persistent storage via `localStorage`

## Architecture

- `TaskStore` (root service) — holds tasks and filter state; exposes computed signals: `tasks`, `filteredTasks`, `completionPercentage` and persists to `localStorage`.
- `Dashboard` (standalone component) — main UI: task list, input, filter buttons, progress bar and embedded pie chart.
- `Piechartcomponent` — renders a reactive pie chart using data derived from `TaskStore`.
- `ChartService` — placeholder for centralized chart-related logic (transformations, options).


## 🧠 State Management Architecture (Angular Signals)

| Layer | Type | Responsibility |
| :--- | :--- | :--- |
| **State** | `signal<Task[]>` | The "Source of Truth" holding our array of tasks. |
| **Filter** | `signal<string>` | Holds the current view state ('all', 'done', etc.). |
| **Derived** | `computed()` | Filters the task list based on the state + filter signals. |
| **Percentage** | `computed()` | Calculates (completed / total) * 100 for the progress bar. |
| **Storage** | `effect()` | Automatically mirrors the task list to localStorage. |


## Additional Resources
<img width="331" height="465" alt="image" src="https://github.com/user-attachments/assets/11d94d04-8820-4dbc-a2e1-7d1d701b2d75" />




