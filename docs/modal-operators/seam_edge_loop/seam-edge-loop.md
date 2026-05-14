---
id: seam-edge-loop
title: Seam Edge Loop
sidebar_label: Seam Edge Loop
description: Preview and mark seam edge loops in Easeam 2 without crossing existing seam boundaries.
slug: /modal-operators/seam-edge-loop
---

import loopSeamPreviewOneGif from './loop_seam_preview1.gif';
import loopSeamPreviewTwoGif from './loop_seam_preview2.gif';

# Seam Edge Loop

Seam Edge Loop is the fast path for turning a single hovered edge into a clean seam loop. Hover an edge, check the live preview, then apply the loop while Easeam stops the selection at any seams that already exist.

<img className="operatorGif" src={loopSeamPreviewOneGif} alt="Seam Edge Loop preview in Blender" />

## What it does

- Starts from a hovered or selected edge.
- Selects the connected edge loop from that seed.
- Uses existing seams as loop boundaries, so the preview will not travel across seam borders.
- Marks the previewed loop as a seam when applied.
- Supports multi-object edit sessions.
- Keeps a live modal preview before the result is committed.
- Can unwrap nothing, unwrap the affected selected area, or use Blender Live Unwrap depending on Easeam's unwrap setting.

## Preview examples

### Mark a loop from hover

Use Seam Edge Loop when the loop direction is already defined by the mesh topology. In this example, the hovered edge expands into the loop preview before the seam is committed.

<img className="operatorGif" src={loopSeamPreviewOneGif} alt="Hovering an edge to preview a Seam Edge Loop result" />

### Stop at existing seams

Existing seams act as hard limits. The preview follows the edge loop only through the available uncut area, making it useful when you are building UV islands one boundary at a time.

<img className="operatorGif" src={loopSeamPreviewTwoGif} alt="Seam Edge Loop preview stopping at existing seam boundaries" />

## Where to find it

- `View3D > Sidebar > Easeam > UV Tools > Seam Edge Loop`
- `View3D > Mesh Edit Mode > Alt + S > Seam Edge Loop`
- Operator id: `mesh.limitloop`

There is also a non-modal version:

- `View3D > Sidebar > Easeam > Non-Modal Tools > Limit Loop (Selection)`
- `View3D > Mesh Edit Mode > Alt + S > Non-Modal Tools > Limit Loop (Selection)`
- Operator id: `mesh.limitloop_nm`

## Best use cases

Use Seam Edge Loop when a standard edge loop is the seam you want:

- defining UV island borders on quad-based hard-surface meshes
- adding loop cuts around cylinders, panels, sockets, and bevelled forms
- finishing island boundaries after other seams are already marked
- quickly repeating the same loop-marking action across multiple mesh objects

The operator follows Blender's edge-loop selection behavior, so it works best on predictable topology. Existing seams are useful guide rails: mark the boundaries you want to preserve first, then use Seam Edge Loop inside those areas.

## Modal workflow

1. Select a mesh object and enter Edit Mode.
2. Make sure the object has a UV map.
3. Open `Seam Edge Loop` from the Easeam panel or pie menu.
4. Hover an edge to preview the loop that will be marked.
5. Check that the preview stops at any existing seam boundary you want to preserve.
6. Left click, `Enter`, `Numpad Enter`, or `Space` to apply and keep using the tool.
7. Move to another edge and repeat, or exit the modal tool.

## Controls

| Control | Result |
| --- | --- |
| Hover edge | Preview the seam loop. |
| Left click | Apply the current preview and continue the tool. |
| `Enter`, `Numpad Enter`, `Space` | Apply the current preview. |
| Hold `Ctrl` while applying | Use Live Unwrap for that apply when the Easeam preference is enabled. |
| Middle mouse or `Alt` navigation | Pass through to viewport navigation. |
| Exit shortcut from Easeam modal preferences | Cancel the tool and restore the pre-preview state. |

## Settings

### Unwrap mode

Seam Edge Loop follows the shared Easeam unwrap mode:

| Mode | Behavior |
| --- | --- |
| `None` | Only marks seams. |
| `Selected` | Marks seams, then unwraps the affected selected faces. |
| `Live Unwrap` | Uses Blender's live unwrap behavior for the mesh during apply. |

If the mesh is above the configured max face count, Easeam disables automatic unwrap for performance unless `Force Unwrap` is enabled.

### Live Unwrap shortcut

By default, modal tools can use `Ctrl` while applying to temporarily request Live Unwrap. If the Easeam preference is set to make Live Unwrap the default modal behavior, holding `Ctrl` temporarily disables it instead.

### Modal exit re-unwrap

If `Modal Re-Unwrap On Exit` is enabled in Easeam preferences, leaving the modal tool runs a final re-unwrap after the session ends.

## Non-modal workflow

Use `Limit Loop (Selection)` when you already selected the seed edges and want a direct one-shot operation.

1. Enter Edit Mode.
2. Select one or more seed edges.
3. Run `Limit Loop (Selection)`.
4. Set the `Unwrap` option.
5. Confirm the operation.

The non-modal version operates on currently selected edges and supports multiple edit-mode mesh objects.

## Tips

- Use this on clean loops where Blender can infer the edge-loop path from topology.
- Mark blocking seams first when you want the loop preview to stop at a specific island boundary.
- If the preview jumps in an unexpected direction, try another edge on the same loop or inspect the surrounding topology.
- Keep unwrap mode on `None` while placing several seams, then use `Selected` or `Live Unwrap` when you want UV feedback.
