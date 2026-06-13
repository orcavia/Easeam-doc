---
id: unwrap-mode
title: Unwrap Mode
sidebar_label: Unwrap Mode
description: Shared Easeam unwrap mode behavior used by seam marking operators.
slug: /shared/unwrap-mode
---

import liveOffGif from './live_off.gif';
import liveOnGif from './live_on.gif';

# Unwrap Mode

Several Easeam operators can update UVs after marking seams. Use Unwrap Mode to choose whether the operator only marks seams or also unwraps the affected area.

| Mode | Behavior |
| --- | --- |
| `None` | Only marks seams. Recommended for increasing workflow speed. |
| `Selected` | Marks seams, then unwraps the affected selected faces. |
| `Live Unwrap` | Uses Blender's live unwrap behavior for the mesh during apply. Re-unwraps the whole mesh. |

If the mesh is above the configured max face count, Easeam disables automatic unwrap for performance unless `Force Unwrap` is enabled.

Keep Unwrap Mode on `None` while exploring seam placement. Switch to `Selected` or `Live Unwrap` when you are ready to update UVs.

## Modal Live Unwrap

Modal tools have a `Live Unwrap` preference in Modal Settings. It is disabled by default.

Live Unwrap is only evaluated when you apply the preview, not while hovering.

<div className="operatorGifCompare">
  <figure>
    <img className="operatorGif" src={liveOffGif} alt="Applying a modal seam with Live Unwrap disabled, then using Ctrl to live unwrap once" />
    <figcaption>Live Unwrap off: hold `Ctrl` while applying to use Live Unwrap once.</figcaption>
  </figure>
  <figure>
    <img className="operatorGif" src={liveOnGif} alt="Applying a modal seam with Live Unwrap enabled, then using Ctrl to bypass live unwrap once" />
    <figcaption>Live Unwrap on: hold `Ctrl` while applying to bypass Live Unwrap once.</figcaption>
  </figure>
</div>

When `Live Unwrap` is disabled, applying marks seams without a live unwrap. When `Live Unwrap` is enabled, applying uses Live Unwrap by default.

:::tip
`Ctrl` + click temporarily flips the modal `Live Unwrap` behavior. If Live Unwrap is off, `Ctrl` + click applies with Live Unwrap. If Live Unwrap is on, `Ctrl` + click applies without Live Unwrap.
:::

## Modal Exit Re-Unwrap

If `Re-Unwrap On Exit` is enabled, the operator re-unwraps all visible geometry once on exit, even if the modal tool is cancelled.

:::warning
If unwrapping is not working, even when using Blender's built-in unwrap tools, remove the affected UV channel and add it again.
:::
