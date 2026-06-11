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
- Automatically previews the connected loop from that seed.
- Uses existing seams as loop boundaries, so the preview will not travel across seam borders.
- Marks the previewed loop as a seam when applied.
- Supports multi-object edit sessions.

## Preview examples

### Mark a loop from hover

Use Seam Edge Loop when the loop direction is already defined by the mesh topology. In this example, the hovered edge expands into the loop preview before the seam is committed.

<img className="operatorGif operatorGif--seventy" src={loopSeamPreviewOneGif} alt="Hovering an edge to preview a Seam Edge Loop result" />

### Stop at existing seams

Existing seams act as hard limits. The preview follows the edge loop only through the available uncut area, making it useful when you are building UV islands one boundary at a time.

<img className="operatorGif operatorGif--seventy" src={loopSeamPreviewTwoGif} alt="Seam Edge Loop preview stopping at existing seam boundaries" />

## Where to find it

- `View3D > Sidebar > Easeam > UV Tools > Seam Edge Loop`
- `View3D > Mesh Edit Mode > Alt + S > Seam Edge Loop`

<p className="relatedOperatorLabel">
  <strong>Non-Modal Version:</strong>
</p>

<div className="relatedOperatorCard">
  <a href="/easeam/operators/non-modal-operators/limit-loop-selection">
    <strong>Limit Loop (Selection)</strong>
    <span>Use the non-modal operator when seed edges are already selected and you want a direct one-shot loop seam.</span>
  </a>
</div>

## Best use cases

Use Seam Edge Loop when a standard edge loop is the seam you want:

- defining UV island borders on quad-based hard-surface meshes
- adding loop cuts around cylinders, panels, sockets, and bevelled forms
- finishing island boundaries after other seams are already marked
- quickly repeating the same loop-marking action across multiple mesh objects

The operator follows Blender's edge-loop selection behavior, so it works best on predictable topology. Existing seams are useful guide rails: mark the boundaries you want to preserve first, then use Seam Edge Loop inside those areas.

## Modal workflow

1. Select a mesh object and enter Edit Mode.
2. Open `Seam Edge Loop` from the Easeam panel or pie menu.
3. Hover an edge to preview the loop that will be marked.
4. Check that the preview stops at any existing seam boundary you want to preserve.
5. Left click, `Enter`, `Numpad Enter`, or `Space` to apply and keep using the tool.
6. Move to another edge and repeat, or exit the modal tool.

## Controls

| Control | Result |
| --- | --- |
| Hover edge | Preview the seam loop. |
| Left click, `Enter`, `Numpad Enter`, `Space` | Apply the current preview and continue the tool. |
| Hold `Ctrl` while applying | Use Live Unwrap when the modal `Live Unwrap` preference is disabled, or bypass it when the preference is enabled. |
| `Esc`, right click, or exit shortcut from Easeam modal preferences | Cancel the tool and restore the pre-preview state. |

<p className="operatorNote">
  <strong>Seam Edge Loop uses the shared [Unwrap mode](/operators/shared/unwrap-mode/) setting.</strong>
</p>

## Tips

- Use this on clean loops where Blender can infer the edge-loop path from topology.
- Mark blocking seams first when you want the loop preview to stop at a specific island boundary.
- If the preview jumps in an unexpected direction, try another edge on the same loop or inspect the surrounding topology.
