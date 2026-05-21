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
- Restores the original selected edges after the mark operation.

## Where to find it

- `View3D > Sidebar > Easeam > UV Tools > Mark / Clear Seam`
- `View3D > Mesh Edit Mode > Alt + S > Mark / Clear Seam`
- Operator id: `mesh.easeamseam`

## Best use cases

Use Mark / Clear Seam for direct manual seam editing:

- marking selected edges as UV cuts
- removing seam flags from a selected edge group
- quickly flipping a mixed seam selection with Toggle Mode
- clearing visible seams before rebuilding a layout
- testing a seam change with immediate unwrap feedback

## Workflow

1. Select a mesh object and enter Edit Mode.
2. Select the edges you want to mark or clear.
3. Run `Mark / Clear Seam`.
4. Choose `Mark` or `Clear` in the operator options.
5. Enable any additional options you need.

## Settings

### Action

Chooses whether the operator marks seams or clears seams.

| Action | Behavior |
| --- | --- |
| `Mark` | Marks the selected edges as seams. |
| `Clear` | Clears seams from the selected edges. |

### Toggle Mode

Available when `Action` is set to `Mark`.

Toggles the selected edges instead of only marking them. Selected edges that are already seams are cleared, and selected edges that are not seams are marked.

### All Visible

Available when `Action` is set to `Clear`.

Clears seams from all visible mesh elements, then deselects the mesh. Leave this off when you only want to clear the current selection.

### Unwrap Mode

Controls what happens after seams are marked.

| Mode | Behavior |
| --- | --- |
| `None` | Only marks seams. |
| `Selected` | Marks seams, selects the linked area delimited by seams, then unwraps it. |
| `Live Unwrap` | Enables Blender Live Unwrap while the seam operation runs. |

If the mesh is above the configured max face count, Easeam disables automatic unwrap for performance unless `Force Unwrap` is enabled.

## Tips

- Use `Toggle Mode` when a selection contains both seam and non-seam edges.
- Use `All Visible` as a quick reset before placing a new seam layout.
- Keep `Unwrap Mode` on `None` while doing several manual seam edits, then switch to `Selected` or `Live Unwrap` when you want UV feedback.
