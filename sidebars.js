// @ts-check

const sidebars = {
  operatorsSidebar: [
    {
      type: 'category',
      label: 'Modal Operators',
      collapsed: false,
      items: [
        'modal-operators/mark_around_flat/mark-around-flat',
        'modal-operators/draw_path_seam/draw-path-seam',
        'modal-operators/seam_edge_loop/seam-edge-loop',
        'modal-operators/tube_seam/tube-seam',
      ],
    },
    {
      type: 'category',
      label: 'Actions',
      collapsed: false,
      items: [
        'actions/mark_clear_seam/mark-clear-seam',
        'actions/reunwrap/reunwrap',
        'actions/triplanar_unwrap/triplanar-unwrap',
      ],
    },
    {
      type: 'category',
      label: 'Non-Modal Operators',
      collapsed: false,
      items: [
        'non-modal-operators/around_flat_selection/around-flat-selection',
        'non-modal-operators/limit_loop_selection/limit-loop-selection',
        'non-modal-operators/tube_seam_selection/tube-seam-selection',
        'non-modal-operators/auto_unwrap_and_seam/auto-unwrap-and-seam',
        'non-modal-operators/seam_by_sharp_edge/seam-by-sharp-edge',
        'non-modal-operators/auto_seam_by_y_verts/auto-seam-by-y-verts',
      ],
    },
    {
      type: 'category',
      label: 'UV Maps',
      collapsed: false,
      items: ['uv-maps/overview/overview'],
    },
  ],
};

module.exports = sidebars;
