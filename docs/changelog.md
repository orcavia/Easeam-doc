---
id: changelog
title: Changelog
sidebar_label: Changelog
description: Easeam release notes and version history.
slug: /changelog
---

# Changelog

## Version 2.0.2

Date: 26-06-2026

- Added configurable default settings for Seam by Sharp Edge and non-modal operators.
- Added shared operator default handling so saved preferences are applied without overriding redo-panel values.
- Added defaults for Auto Unwrap & Seam, Limit Loop (Selection), Around Flat (Selection), Tube Seam (Selection), Auto Seam By Y Verts, Seams From UV Islands, Tri-Planar Unwrap, and Seam by Sharp Edge.
- Moved update checking and product-link preference UI into the shared `pref_widget` submodule.
- Improved release packing so the packer avoids Python standard-library shadowing and includes required preference-widget assets.
- Updated docs and update metadata to support content-signature based update checks.
- Fixed Seam by Sharp Edge when the edit-mode mesh is active but not selected from Object Mode.
- Fixed Easeam pie-menu shortcut handling inside modal operators so pressing the pie shortcut exits the active modal tool instead of opening the pie.

## Version 2.0.1

Date: 13-06-2026

- Improved Live Unwrap behavior for modal tools.
- Live Unwrap now updates only when seam changes are applied, instead of continuously re-unwrapping while hovering.
- Added automatic update checking.
- Added product links inside the add-on.

## Version 2.0.0

Date: 03-06-2026

- Public Release.
