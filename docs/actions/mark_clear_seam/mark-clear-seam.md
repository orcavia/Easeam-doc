---
id: mark-clear-seam
title: Mark / Clear Seam
sidebar_label: Mark / Clear Seam
description: Mark or clear selected mesh seams with Easeam options for toggle mode, all visible edges, and unwrap behavior.
slug: /actions/mark-clear-seam
---

import markClearSeamGif from './mark_clear_seam.gif';

# Mark / Clear Seam

Mark / Clear Seam is just Blender's regular mark and clear seam workflow, with additional options added by Easeam. Use it when you already know which edges should become UV cuts and want a fast way to mark, clear, toggle, or unwrap from that selection.

<img className="operatorGif" src={markClearSeamGif} alt="Mark / Clear Seam marking and clearing selected seam edges in Blender" />

## What it does

- Marks selected mesh edges as seams.
- Clears seams from selected mesh edges.
- Can toggle selected edges, clearing edges that are already seams while marking the rest.
- Can clear every visible seam in the mesh.
- Can unwrap the selected seam island or use Blender Live Unwrap after marking.

## Where to find it

- `View3D > Sidebar > Easeam > UV Tools > Mark / Clear Seam`
- `View3D > Mesh Edit Mode > Alt + S > Mark / Clear Seam`

## Best use cases

Use Mark / Clear Seam for direct manual seam editing:

- general seam marking and clearing
- quickly flipping a mixed seam selection with Toggle Mode
- clearing all visible seams

## Redo panel options

| Item | When shown | Behavior |
| --- | --- | --- |
| `Toggle Mode` | When `Action` is set to `Mark` | Swaps seam marks on the selected edges: selected edges that are already seams are cleared, and selected edges that are not seams are marked. |
| `All Visible` | When `Action` is set to `Clear` | Clears seams from all visible mesh elements, then deselects the mesh. Leave this off when you only want to clear the current selection. |

<p className="operatorNote">
  <strong>Mark / Clear Seam uses the shared [Unwrap mode](/operators/shared/unwrap-mode/) setting.</strong>
</p>

## Tips

- Use `Toggle Mode` when a selection contains both seam and non-seam edges to swap seam marks.
- Use `All Visible` to quickly clear seams on visible geometry.
