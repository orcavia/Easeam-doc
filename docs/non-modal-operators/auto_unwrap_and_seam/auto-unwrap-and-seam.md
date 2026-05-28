---
id: auto-unwrap-and-seam
title: Auto Unwrap & Seam
sidebar_label: Auto Unwrap & Seam
description: Run Blender Smart UV Project and convert the generated UV island borders into mesh seams in Easeam.
slug: /non-modal-operators/auto-unwrap-and-seam
---

import autoUnwrapAndSeamGif from './auto_unwrap_and_seam.gif';

# Auto Unwrap & Seam

Auto Unwrap & Seam is a one-click generated unwrap pass for meshes that need quick UV islands and matching visible seam edges. It uses Blender's built-in `Smart UV Project` operator to create the UV layout, then converts the borders of those generated UV islands into mesh seams.

<img className="operatorGif" src={autoUnwrapAndSeamGif} alt="Auto Unwrap and Seam running Smart UV Project and marking the resulting UV island borders as seams in Blender" />

## What it does

- Clears existing seams on the processed mesh selection.
- Runs Blender's built-in `Smart UV Project`.
- Uses Easeam's `Angle Limit` value as the Smart UV Project angle limit.
- Converts the Smart UV Project island borders into mesh seams.
- Supports selected-face workflows with `Only Selected`.
- Restores the previous Live Unwrap state after the operation.

## Where to find it

- `View3D > Sidebar > Easeam > Non-Modal Tools > Auto Unwrap & Seam`
- `View3D > Mesh Edit Mode > Alt + S > Non-Modal Tools > Auto Unwrap & Seam`

## Best use cases

Use Auto Unwrap & Seam when you want Blender to generate the first UV layout and you also want the mesh seam flags to match that generated layout:

- quick UV setup for hard-surface props, kitbash parts, and blockouts
- creating seam data from a Smart UV Project result
- starting a manual seam cleanup pass from generated islands
- replacing an existing seam layout with a new generated one
- preparing mesh seams for later Easeam tools that read seam boundaries

Because this is based on Smart UV Project, it is best treated as an automatic starting point. Inspect the result on hero assets or organic shapes where authored seam placement matters.

## Workflow

1. Select a mesh object and enter Edit Mode.
2. Select the faces you want to process, or leave `Only Selected` disabled to process all visible editable faces.
3. Run `Auto Unwrap & Seam`.
4. Adjust `Angle Limit` in the operator panel or redo panel if the islands are too large or too fragmented.
5. Confirm the generated seam edges in the viewport.

## Settings

### Angle Limit

Controls the angle limit passed to Blender's Smart UV Project.

Default: `66°`

Lower values create more projection groups and usually more seam cuts. Higher values allow larger islands, but may increase UV distortion on angled surfaces.

### Only Selected

Limits the operation to the current selected faces.

Default: enabled

When `Only Selected` is disabled, Easeam selects all mesh elements before running Smart UV Project, so the unwrap and generated seams cover the whole editable mesh.

## How seams are handled

Auto Unwrap & Seam first clears the current seam flags on the processed mesh. After Smart UV Project creates the UV islands, Easeam runs Blender's seam-from-islands behavior so every UV island border becomes a mesh seam.

This means the final seams follow the generated UV layout, not the previous manual seam layout. If you need to preserve existing seams, run a separate unwrap or use [Seams From UV Islands](/operators/non-modal-operators/seam-from-uv-islands) after preparing the UV layout you want.

## Tips

- Use `Only Selected` for localized fixes when you do not want to replace seams across the whole object.
- Lower `Angle Limit` when connected faces should split into more UV islands.
- Raise `Angle Limit` when Smart UV Project creates too many small islands.
- Run [Re-Unwrap](/operators/actions/reunwrap) after editing the generated seams by hand.
- Use [Seams From UV Islands](/operators/non-modal-operators/seam-from-uv-islands) when the UV islands already exist and you only need to mark their borders as seams.
