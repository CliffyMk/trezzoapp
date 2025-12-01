# Dark Mode Styling Improvements

## Overview

The application's dark mode has been enhanced with a sophisticated color palette and improved typography for better aesthetics and readability.

## Color Palette

### Dark Mode Background Colors
- **Primary Background**: `#050505` (almost black for depth)
- **Secondary Background**: `#0A0A0A` (slightly lighter)
- **Cards & Containers**: 
  - Base: `dark:bg-slate-800/60` to `dark:bg-slate-900/30` (semi-transparent)
  - Subtle: `dark:from-slate-700 dark:to-slate-700/40`

### Accent Colors in Dark Mode
- **Gold**: Primary accent throughout
- **Cyan/Blue**: For information boxes and secondary elements
- **Purple/Pink**: For highlight sections
- **Emerald/Green**: For success and positive indicators

### Text Colors
- **Primary Text**: `dark:text-white` or `dark:text-slate-100`
- **Secondary Text**: `dark:text-slate-300` or `dark:text-slate-200`
- **Tertiary Text**: `dark:text-slate-400` or `dark:text-slate-500`

## Typography Enhancements

### Headers
- **Font Family**: Serif (`font-serif`) for elegance
- **Font Weight**: Bold (`font-bold`)
- **Color**: `text-slate-900 dark:text-white` (high contrast)
- **Sizing**: Progressive from `text-lg` to `text-2xl`

### Body Text
- **Color**: `text-slate-700 dark:text-slate-300` (readable without strain)
- **Line Height**: `leading-relaxed` for comfortable reading
- **Font Weight**: Light to regular for elegance

### Tables
- **Header Background**: `dark:from-blue-900/40 dark:to-cyan-900/40`
- **Cell Borders**: `dark:border-slate-600/50` (subtle)
- **Hover State**: `dark:hover:bg-slate-700/40` (smooth transition)
- **Cell Text**: `dark:text-slate-300` with proper contrast

## Box Styles

### Information Boxes
```tailwind
bg-gradient-to-br from-[color]-50 via-[color]-50 to-[color]-50
dark:from-[color]-900/20 dark:via-[color]-900/15 dark:to-[color]-900/20
rounded-xl border-l-4 border-[color]-500 dark:border-[color]-400/50
shadow-md dark:shadow-lg
```

Features:
- Gradient backgrounds for visual interest
- Subtle borders on the left for emphasis
- Semi-transparent dark mode overlays
- Soft shadows for depth

### Cards
- Border: `border border-[color]-200/50 dark:border-[color]-500/30`
- Shadow: `shadow-md dark:shadow-lg`
- Background: Subtle gradient with transparency

## Interactive Elements

### Hover States
- Smooth transitions: `transition-colors`
- Color change: `dark:hover:bg-slate-700/40`
- Subtle but noticeable feedback

### Focus States
- Border glow: `border-[accent]-500`
- Text color: `text-gold-500`

## Implementation Examples

### Article Section with Dark Mode
```tsx
<div class="p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 
            dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 
            rounded-xl border border-purple-200/50 dark:border-purple-500/30 
            shadow-lg dark:shadow-xl">
  <h3 class="text-lg font-serif font-bold mb-4 
             text-slate-900 dark:text-white">Title</h3>
  <p class="text-slate-700 dark:text-slate-300">Content</p>
</div>
```

### Table with Dark Mode
```tsx
<table class="w-full border-collapse">
  <thead>
    <tr class="bg-gradient-to-r from-blue-100 to-cyan-100 
               dark:from-blue-900/40 dark:to-cyan-900/40">
      <th class="border border-slate-300 dark:border-slate-600/50 p-3 
                 font-serif font-semibold text-slate-900 dark:text-slate-100">
        Header
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="hover:bg-green-50 dark:hover:bg-emerald-900/20 transition-colors">
      <td class="border border-slate-200 dark:border-slate-700/50 p-3 
                 text-slate-700 dark:text-slate-300">
        Content
      </td>
    </tr>
  </tbody>
</table>
```

## Best Practices

1. **Always use semi-transparent backgrounds** in dark mode (`/20`, `/30`, `/40`)
2. **Maintain proper contrast** - minimum WCAG AA standard (4.5:1 for text)
3. **Use gradient overlays** for visual interest without harshness
4. **Apply subtle shadows** only in dark mode (`dark:shadow-lg`)
5. **Use serif fonts** for headers to convey premium feel
6. **Keep text spacing generous** (`leading-relaxed`, `space-y-3`)

## Color Reference

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Primary Text | `text-slate-900` | `dark:text-white` |
| Secondary Text | `text-slate-700` | `dark:text-slate-300` |
| Tertiary Text | `text-slate-600` | `dark:text-slate-400` |
| Box Background | `bg-gray-50` | `dark:bg-slate-800/60` |
| Border | `border-gray-200` | `dark:border-slate-700/50` |
| Hover Background | `hover:bg-gray-100` | `dark:hover:bg-slate-700/40` |

## Migration Checklist

When updating existing components:
- [ ] Check all text colors have dark mode equivalents
- [ ] Ensure table cells use proper dark mode borders
- [ ] Add gradients to highlight boxes
- [ ] Verify button states in dark mode
- [ ] Test contrast ratios
- [ ] Check shadow visibility
- [ ] Test on actual dark mode (not just inspector)
