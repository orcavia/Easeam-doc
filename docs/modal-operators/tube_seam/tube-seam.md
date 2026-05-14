---
id: tube-seam
title: Tube Seam
sidebar_label: Tube Seam
description: Create seam cuts for cylindrical and tube-like quad geometry in Easeam 2.
slug: /modal-operators/tube-seam
---

import tubeSeamGif from './tube_seam.gif';
import growPreviewGif from './grow_preview.gif';
import toggleAutoAndAngleSetPreviewGif from './toggle_auto_and_angel_set_preview.gif';

# Tube Seam

Tube Seam is built for cylindrical parts: cables, pipes, handles, sleeves, bolts, and any clean quad-based tube where you need a usable UV cut without hand-walking every loop. Hover an edge, preview the seam cut, then apply it when the strip and boundary look right.

<img className="operatorGif" src={tubeSeamGif} alt="Tube Seam preview in Blender" />

## What it does

- Starts from a hovered or selected edge on tube-like quad geometry.
- Grows the cut along the tube direction.
- Selects the matching edge ring and surrounding face strip.
- Marks the strip edges, seed edge, and boundary loop as seams.
- Supports modal hover preview before the result is committed.
- Can use manual Grow or Auto Grow based on the bend angle of the tube.
- Shows quick overlays for Grow, Auto Grow, and Angle while you adjust the preview.
- Can unwrap nothing, unwrap the affected selected faces, or use Blender Live Unwrap depending on Easeam's unwrap setting.

## Preview examples

### Grow the seam

Use Grow when the seam should travel a specific number of tube steps from the hovered edge. In this example, the preview extends farther along the tube while the seam strip and boundary loop update before anything is committed.

<img className="operatorGif" src={growPreviewGif} alt="Growing the Tube Seam preview in Blender" />

### Use Auto Grow and set Angle

Auto Grow follows the tube until the next bend reaches the Angle limit. Toggle it when you want the preview to find a natural stopping point, then hold `Shift` and move the mouse left or right to tune how strongly the tube is allowed to bend before growth stops.

<img className="operatorGif" src={toggleAutoAndAngleSetPreviewGif} alt="Toggling Auto Grow and adjusting the Tube Seam angle preview in Blender" />

## Where to find it

- `View3D > Sidebar > Easeam > UV Tools > Tube Seam`
- `View3D > Mesh Edit Mode > Alt + S > Tube Seam`
- Operator id: `mesh.cylindercut`

There is also a non-modal version:

- `View3D > Sidebar > Easeam > Non-Modal Tools > Tube Seam (Selection)`
- `View3D > Mesh Edit Mode > Alt + S > Non-Modal Tools > Tube Seam (Selection)`
- Operator id: `mesh.cylindercut_nm`

## Best use cases

Use Tube Seam on forms that are mostly clean quad tubes:

- hoses and cables
- pipes and railings
- cylindrical handles
- sleeves, rings, and bevelled tubes
- hard-surface parts that need a lengthwise cut plus cap boundaries

The operator expects clean topology. It works best when the tube is quad-based and the vertices along the grow path have four connected edges.

## Modal workflow

1. Select a mesh object and enter Edit Mode.
2. Make sure the object has a UV map.
3. Open `Tube Seam` from the Easeam panel or pie menu.
4. Hover an edge on the tube to preview the seam result.
5. Use `Shift` + scroll to increase or decrease manual Grow.
6. Press `A` if you want Auto Grow instead of manual Grow.
7. When Auto Grow is active, hold `Shift` and move the mouse left/right to adjust the stop angle.
8. Left click, `Enter`, `Numpad Enter`, or `Space` to apply.
9. Move to another edge and repeat, or exit the modal tool.

## Controls

| Control | Result |
| --- | --- |
| Hover edge | Preview the tube seam cut. |
| Left click | Apply the current preview and continue the tool. |
| `Enter`, `Numpad Enter`, `Space` | Apply the current preview. |
| `A` | Toggle Auto Grow. |
| `Shift` + scroll wheel | Increase or decrease manual Grow. |
| Hold `Shift` + move mouse left/right | Adjust Auto Grow angle. |
| Middle mouse or `Alt` navigation | Pass through to viewport navigation. |
| Exit shortcut from Easeam modal preferences | Cancel the tool and restore the pre-preview state. |

## Settings

### Grow

Controls how many tube steps are added from the seed edge before the ring and boundary are marked. This is the predictable option when you know exactly how far the seam should travel.

Default: `0`

Maximum: `32`

While adjusting Grow in modal mode, Easeam shows a Grow overlay near the cursor so you can confirm the current value while watching the preview.

### Auto Grow

Keeps growing along the tube until the next bend reaches the configured Angle. This is useful when the tube has a clear bend or end condition and you want Easeam to stop before the shape changes direction too much.

Default: `Off`

When Auto Grow is toggled in modal mode, the preview updates immediately so you can compare the automatic result against the manual Grow distance.

### Angle

Only active when Auto Grow is enabled. Lower values stop earlier on subtle bends. Higher values allow the seam to continue across stronger bends.

Default: `30 deg`

While adjusting Angle in modal mode, Easeam shows an Angle overlay near the cursor so you can read the current threshold without opening a separate panel.

### Unwrap mode

Tube Seam follows the shared Easeam unwrap mode:

| Mode | Behavior |
| --- | --- |
| `None` | Only marks seams. |
| `Selected` | Marks seams, then unwraps the affected selected faces. |
| `Live Unwrap` | Uses Blender's live unwrap behavior for the mesh during apply. |

If the mesh is above the configured max face count, Easeam disables automatic unwrap for performance unless `Force Unwrap` is enabled.

## Non-modal workflow

Use `Tube Seam (Selection)` when you already selected the seed edges and want a direct one-shot operation.

1. Enter Edit Mode.
2. Select one or more seed edges on the tube.
3. Run `Tube Seam (Selection)`.
4. Set `Step`, `Auto Grow`, `Angle`, and `Unwrap`.
5. Confirm the operation.

The non-modal version operates on currently selected edges and supports multiple edit-mode mesh objects.

## Tips

- Start from an edge that belongs to the tube strip you want to cut.
- Use manual Grow for precise short cuts and Auto Grow for longer tube sections.
- Toggle Auto Grow when the tube has a visible bend or end condition, then adjust Angle until the preview stops at the intended place.
- If preview does not travel as expected, inspect the topology around the hovered edge; non-quad or branching areas can stop growth.
- Keep unwrap mode on `None` while placing seams, then switch to `Selected` when you want immediate UV feedback.
