module.exports = (api, ids) => ids.length > 1 ? api.getByIDs(ids) : api.getByID(ids[0]);
