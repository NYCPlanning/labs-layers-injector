import Route from '@ember/routing/route';

export default Route.extend({
  model: async function() {
    const layerGroups = await this.store.query('layer-group', {
      'layer-groups': [
        { id: 'subway', visible: true  }
      ],
    });

    const { meta } = layerGroups;

    return {
      layerGroups,
      meta,
    };
  },
});
