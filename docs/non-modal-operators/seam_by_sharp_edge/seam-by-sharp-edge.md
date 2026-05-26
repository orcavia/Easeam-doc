---
id: seam-by-sharp-edge
title: Seam by Sharp Edge
sidebar_label: Seam by Sharp Edge
description: Mark UV seams from Blender sharp edges, angle-detected sharp edges, or both in Easeam.
slug: /non-modal-operators/seam-by-sharp-edge
---

import seamBySharpEdgeGif from './seam_by_sharp_edge.gif';

# Seam by Sharp Edge

Seam by Sharp Edge turns sharp mesh edges into UV seams. It can read edges already marked sharp in Blender, detect edges by angle, or combine both methods before optionally unwrapping the affected islands.

<img className="operatorGif" src={seamBySharpEdgeGif} alt="Seam by Sharp Edge marking sharp mesh edges as seams in Blender" />

## What it does

- Marks seams on edges that are already marked sharp.
- Can also select sharp edges by a minimum angle threshold.
- Combines marked-sharp and angle-based results when both options are enabled.
- Selects the seam edges it creates so the result is easy to inspect.
- Can unwrap the connected selection immediately after marking seams.
- Works in mesh Edit Mode on selected editable mesh objects.

## Where to find it

- `View3D > Sidebar > Easeam > Non-Modal Tools > Seam by Sharp Edge`
- `View3D > Mesh Edit Mode > Alt + S > Seam by Sharp Edge`

## Best use cases

Use it when the model already has meaningful hard edges and you want UV seams to follow that hard-surface structure:

- converting Blender sharp-edge markings into seam cuts
- creating quick seams for hard-surface props and mechanical forms
- using an angle threshold to find major silhouette or panel breaks
- preparing a fast unwrap from existing normal-smoothing boundaries
- combining manually marked sharp edges with automatically detected sharp corners

## Workflow

1. Select a mesh object and enter Edit Mode.
2. Mark any edges as sharp if you want to use Blender's existing sharp-edge flags.
3. Run `Seam by Sharp Edge`.
4. Enable `Marked Sharp`, `Use Angle`, or both in the operator panel.
5. Adjust `Min Angle` when `Use Angle` is enabled.
6. Leave `Unwrap` enabled when you want Easeam to unwrap after marking the seams.
7. Confirm the selected seam edges in the viewport.

## Settings

### Unwrap

Runs an unwrap after marking the seam edges.

Default: `On`

Use this for a quick mark-and-unwrap pass. Turn it off when you only want to create or inspect seams before unwrapping later.

### Marked Sharp

Marks seams on edges that already have Blender's sharp flag.

Default: `On`

This is the safest option when you have intentionally authored sharp edges and want the seam layout to match them.

### Use Angle

Finds sharp edges from the current `Min Angle` value and marks those edges as seams.

Default: `Off`

Enable this when the mesh does not already have sharp edges marked, or when you want to add angle-detected cuts to the marked-sharp result.

### Min Angle

Sets the minimum angle used by `Use Angle`.

Default: `30 degrees`

Lower values catch more edges. Higher values limit the result to stronger corners and larger directional changes.

## Tips

- Keep `Marked Sharp` enabled for authored hard-surface meshes where sharp flags already define the intended cuts.
- Enable `Use Angle` to generate a seam pass from geometry alone.
- Combine both methods when some important edges are manually marked and others should be found by angle.
- Turn `Unwrap` off if you want to review the seam selection before running a separate unwrap operation.
