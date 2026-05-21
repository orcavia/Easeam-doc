---
id: unwrap-mode
title: Unwrap Mode
sidebar_label: Unwrap Mode
description: Shared Easeam unwrap mode behavior used by seam marking operators.
slug: /shared/unwrap-mode
---

# Unwrap Mode

Several Easeam operators can update UVs after marking seams. Use Unwrap Mode to choose whether the operator only marks seams or also unwraps the affected area.

| Mode | Behavior |
| --- | --- |
| `None` | Only marks seams. Recommended for increasing workflow speed. |
| `Selected` | Marks seams, then unwraps the affected selected faces. |
| `Live Unwrap` | Uses Blender's live unwrap behavior for the mesh during apply. Re-unwraps the whole mesh. |

If the mesh is above the configured max face count, Easeam disables automatic unwrap for performance unless `Force Unwrap` is enabled.

Keep Unwrap Mode on `None` while exploring seam placement. Switch to `Selected` or `Live Unwrap` when you are ready to update UVs.
