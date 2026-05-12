---
id: mark-around-flat
title: Mark Around Flat
sidebar_label: Mark Around Flat
description: Mark seams around linked flat surfaces in Easeam 2.
slug: /modal-operators/mark-around-flat
---

import markAroundFlatGif from './mark_around_flat.gif';
import setAnglePreviewGif from './set_angle_preview.gif';
import growPreviewGif from './grow_preview.gif';
import notCrossingSeamPreviewGif from './not_crossing_seam_preview.gif';

# Mark Around Flat

Mark Around Flat is made for the moment when a face region is visually obvious, but manually selecting its boundary would be boring. Hover a face, let Easeam detect the connected flat area, tune the preview, then commit the seam around that region.

<img className="operatorGif" src={markAroundFlatGif} alt="Mark Around Flat preview in Blender" />

## What it does

- Detects a linked flat surface from a selected or hovered face.
- Marks the boundary edge loop around that surface as a seam.
- Stops at existing seams, so it will not bleed across UV island borders that are already marked.
- Supports multi-object edit sessions.
- Keeps a live modal preview before you apply the result.
- Shows quick overlays for Angle and Grow while you adjust the preview.
- Can unwrap nothing, unwrap the selected area, or use Blender Live Unwrap depending on Easeam's unwrap setting.

## Preview examples

### Adjust Angle

Use Angle when the preview needs to understand a wider or stricter flat region. In this example, the blue preview grows across the top panel while the pink seam outline updates around the detected surface.

<img className="operatorGif" src={setAnglePreviewGif} alt="Adjusting Mark Around Flat angle preview in Blender" />

### Grow the region

Use Grow when the flat selection is correct but needs to expand outward from the hovered face. This is useful around holes, caps, and inset details where the first preview starts too tightly.

<img className="operatorGif" src={growPreviewGif} alt="Growing the Mark Around Flat preview region in Blender" />

### Respect existing seams

Existing seams act as hard boundaries. The preview can expand across the available flat surface, but it will not cross into another seam island that is already defined.

<img className="operatorGif" src={notCrossingSeamPreviewGif} alt="Mark Around Flat preview stopping at existing seam boundaries" />

## Where to find it

- `View3D > Sidebar > Easeam > UV Tools > Mark Around Flat`
- `View3D > Mesh Edit Mode > Alt + S > Mark Around Flat`
- Operator id: `mesh.boundaryseam`

There is also a non-modal version:

- `View3D > Sidebar > Easeam > Non-Modal Tools > Around Flat (Selection)`
- `View3D > Mesh Edit Mode > Alt + S > Non-Modal Tools > Around Flat (Selection)`
- Operator id: `mesh.boundaryseam_nm`

## Best use cases

Use it on flat or nearly flat parts of a mesh where you want an island boundary created quickly:

- panel faces on hard-surface objects
- planar bevel sections
- inset areas
- caps and flat details
- regions that should become their own UV island without hand-picking every border edge

## Modal workflow

1. Select a mesh object and enter Edit Mode.
2. Make sure the object has a UV map.
3. Open `Mark Around Flat` from the Easeam panel or pie menu.
4. Hover a face to preview the region and boundary seam.
5. Adjust `Angle` if the detected flat area is too small or too wide.
6. Adjust `Grow` if you want the region to expand beyond the flat selection.
7. Check that the preview stops at any existing seam boundary you want to preserve.
8. Left click, `Enter`, `Numpad Enter`, or `Space` to apply and keep using the tool.
9. Move to another face and repeat, or exit the modal tool.

## Controls

| Control | Result |
| --- | --- |
| Hover face | Preview the flat region and boundary seam. |
| Left click, `Enter`, `Numpad Enter`, `Space` | Apply the current preview and continue the tool. |
| Hold `Shift` + move mouse left/right | Adjust the flatness angle. |
| `Shift` + scroll wheel | Increase or decrease Grow. |

## Settings

### Angle

Controls how much face normal difference is still considered part of the same flat area. Lower values stay stricter and usually select cleaner planar regions. Higher values allow the selection to travel across softer bends.

Default: `1 deg`

While adjusting Angle in modal mode, Easeam shows an Angle overlay near the cursor so you can read the current value without opening a separate panel.

### Grow

Expands the detected face region after flat selection. This behaves like a controlled Select More/Less pass, but it still respects existing seam boundaries.

Default: `0`

Maximum: `32`

Grow is most useful when the hovered face is a good seed but the first preview only covers a small center area. Increase it until the blue preview reaches the intended boundary.

### Unwrap mode

Mark Around Flat follows the shared Easeam unwrap mode:

| Mode | Behavior |
| --- | --- |
| `None` | Only marks seams. |
| `Selected` | Marks seams, then unwraps the affected selected faces. |
| `Live Unwrap` | Uses Blender's live unwrap behavior for the mesh during apply. |

If the mesh is above the configured max face count, Easeam disables automatic unwrap for performance unless `Force Unwrap` is enabled.

## Non-modal workflow

Use `Around Flat (Selection)` when you already know the seed faces and want a direct one-shot operation.

1. Enter Edit Mode.
2. Select one or more seed faces.
3. Run `Around Flat (Selection)`.
4. Set `Angle`, `Grow`, and `Unwrap`.
5. Confirm the operation.

The non-modal version operates on currently selected faces and supports multiple edit-mode mesh objects.

## Tips

- Mark important UV island borders first; Mark Around Flat treats existing seams as boundaries.
- Start with a low Angle for hard-surface panels, then raise it only when the preview misses faces you want.
- Use Grow for controlled expansion around holes, caps, and inset details.
- If the preview refuses to cross an edge, check whether that edge is already marked as a seam.
- Keep unwrap mode on `None` while exploring seam placement, then use `Selected` or `Live Unwrap` when you are ready to update UVs.
